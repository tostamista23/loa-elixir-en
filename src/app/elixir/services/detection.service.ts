import { Injectable } from '@angular/core';
import Tesseract, { PSM } from 'tesseract.js';
import { Box } from '../models/box.model';
import { ScreenBox } from '../models/screen.model';
import { CommonService } from './common.service';
import { SageService } from './sage.service';
import { EffectService } from './effect.service';
import { LoadingDialogService } from './loading.service';

@Injectable()
export class DetectionService {
    //loading: {isLoading: boolean, value: number, text: string} = "";

    constructor(private commonService: CommonService, private sageService: SageService, private effectService: EffectService, public loadingService: LoadingDialogService) { }

    async start(screen: ScreenBox, img: string): Promise<void> {
        this.loadingService.setText("Slicing image...");
        await this.sliceImages(screen, img);
        this.loadingService.setText("Applying Contrast...");
        await this.applyContrastToImages(screen);
        this.loadingService.setText("Converting to Text...");
        await this.imageToText(screen, img);
        this.loadingService.setText("Reading Sages...");
        await this.sageService.updateSageStacks(screen, img);
        this.loadingService.setText("Reading Effects...");
        await this.effectService.updateLevelEffects(screen, img);
    }

    //Text to image sucks, if text is empty, darkers the image and trys to read again
    async applyContrastToImages(screen: ScreenBox): Promise<void> {

        const promises: Promise<void>[] = screen.sages.map((sage: Box) => {
            return new Promise<void>(async (resolve, reject) => {
                
                this.commonService.applyContrast(sage.image, 100).then(async x => {
                    sage.image = x
                    resolve();
                })
            })
        })

        await Promise.all(promises);
    }


    async imageToText(screen: ScreenBox, img: string): Promise<void> {

        const scheduler = Tesseract.createScheduler();

        // Creates worker and adds to scheduler
        const workerGen = async () => {
            const worker = await Tesseract.createWorker('eng');
            scheduler.addWorker(worker);
        }

        const workerN = 4;
        await (async () => {
            const resArr = Array(workerN);
            for (let i=0; i<workerN; i++) {
                resArr[i] = workerGen();
            }

            await Promise.all(resArr);

            //Sages
            await Promise.all(
                screen.sages.map(async (box: Box) => (
                    //this.loading = "Reading "
                    scheduler.addJob('recognize', box.image).then((x: any) => {console.log(x.data.text); box.text = x.data.text})
                ))
            )
            
            //Effects
            await Promise.all(
                screen.effects.map((box: Box) => (
                    scheduler.addJob('recognize', box.image).then((x: any) => box.text = x.data.text.replace(/[\r\n]/g, ' ').replace(/\s+$/, ''))
                ))
            )
            
            //Effects - Seal
            await Promise.all(
                screen.effects.map((box: Box) => (
                    scheduler.addJob('recognize', box.child.image).then((x: any) => box.child.text = x.data.text.replace(/[\r\n]/g, ' ').replace(/\s+$/, ''))
                ))
            )

            //Remaining Steps
            await Promise.all(
                await scheduler.addJob('recognize', screen.attemptsLeft.image).then((x: any) => 
                    screen.attemptsLeft.text = x.data.text
                )
            )

            //Seal
            await Promise.all(
                await scheduler.addJob('recognize', screen.attemptsLeft.image).then((x: any) => screen.attemptsLeft.text = x.data.text.replace(/[\r\n]/g, ' ').replace(/\s+$/, ''))
            )

            await scheduler.terminate();
            //await Promise.all(results);
        })();
    }

    async sliceImages(screen: ScreenBox, img: string): Promise<void> {
        const promises: Promise<void>[] = [];

        //Sages
        screen.sages.forEach((box: Box, index: number) => {
            promises.push(this.commonService.cutImage(img, box));
        });

        //Effects
        screen.effects.forEach((box: Box, index: number) => {
            promises.push(this.commonService.cutImage(img, box));
            promises.push(this.commonService.cutImage(img, box.child));
        });

        //Remaining Steps
        promises.push(this.commonService.cutImage(img, screen.attemptsLeft));

        await Promise.all(promises);
    }
}
