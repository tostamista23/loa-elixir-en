import { Injectable } from '@angular/core';
import { Box } from '../models/box.model';
import { ScreenBox } from '../models/screen.model';
import { MAX_CHAOS, MAX_LAWFUL } from 'src/app/core/elixir/data/const';
import { GetChaosCoord, GetLawfulCoord } from '../functions/sage';
import { CommonService } from './common.service';

@Injectable()
export class SageService {
    constructor(private commonService: CommonService) { }

    async updateSageStacks(screen: ScreenBox, img: string) {
        await this.UpdateSageChaosOrbs(screen, img);
        await this.UpdateSageLawfulOrbs(screen, img);
    }

    async UpdateSageChaosOrbs(screen: ScreenBox, img: string): Promise<void> {
        
        const promises: Promise<void>[] = [];

        screen.sages.forEach((box: Box, index: number) => {
            const chaosCoordPromises = GetChaosCoord(box.width, index, screen).map(async (x, indexOrb) => {
                return new Promise<void>(async (resolve) => {
                    await this.commonService.cutImage(img, x);

                    const image = new Image();
                    image.src = x.image;

                    image.onload = () => {
                        const canvas = document.createElement('canvas');
                        const context = canvas.getContext('2d');

                        canvas.width = x.width;
                        canvas.height = x.height;

                        if (context){
                            context.drawImage(image, 0, 0, x.width, x.height);
                        }

                        // Get the color of the middle pixel
                        const middlePixelColor = this.commonService.getMiddlePixelColor(canvas);
                
                        if (middlePixelColor) {
                            x.text = this.getTypeSage([middlePixelColor[0],middlePixelColor[1],middlePixelColor[2]], 'chaos');
                            console.log(x.text, index,indexOrb, x.image);
                            if (x.text !== "not found"){
                                box.children?.push(x);
                            }
                        }
                        resolve();

                    };
                });
            });

            promises.push(...chaosCoordPromises);

        });

        await Promise.all(promises);

    }

    async UpdateSageLawfulOrbs(screen: ScreenBox, img: string): Promise<void> {
        const promises: Promise<void>[] = [];

        //because exhausted can lead to missing sages
        let sagesIndex: number[] = [];

        screen.sages.forEach((sage:Box, index: number) =>{
            if (!sage.children || sage.children.every(ef => ef.text == "empty" ||  ef.text == "not found") || sage.children.some(ef => ef.text == "lawful")) {
                sagesIndex.push(index);
            }
        })

        //const sages = screen.sages.filter(x => !x.children || x.children.every(x => x.text == "empty" ||  x.text == "not found"));

        sagesIndex.map((index: number) => {
            screen.sages[index].children = [];

            promises.push(...GetLawfulCoord(screen.sages[index].width, index,screen, -index-1).map(async (x, indexOrb) => {

                return new Promise<void>(async (resolve, reject) => {
                    await this.commonService.cutImage(img, x)
    
                    const image = new Image();
                    image.src = x.image;
    
                    image.onload = () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = x.width;
                        canvas.height = x.height;
    
                        const context = canvas.getContext('2d');
                        if (context){
                            context.drawImage(image, 0, 0, x.width, x.height);
                        }
                        x.image = canvas.toDataURL("image/png");
    
                        // Get the color of the middle pixel
                        const middlePixelColor = this.commonService.getMiddlePixelColor(canvas);
                
                        if (middlePixelColor) {
                            x.text = this.getTypeSage([middlePixelColor[0],middlePixelColor[1],middlePixelColor[2]], 'lawful');
                            console.log(x.text, index, indexOrb, x.image);
                            if (x.text != "not found"){
                                console.log(x.text, index, indexOrb, x.image);
                                screen.sages[index].children?.push(x);
                            }
                        }

                        resolve();
                    };
                });

            }))
        })

        await Promise.all(promises);
    }

    getTypeSage(pixel: [number, number, number], type: string): string | null {
        const [red, green, blue] = pixel;
    
        // Define thresholds for purple, blue, and black
        const purpleThreshold = 70;
        const blackThreshold = 50;

        // Define the specific blue color
        const specificBlue: [number, number, number] = [197, 247, 254]; // RGB value for #C5F7FE
        const specificPurple: [number, number, number] = [255, 217, 255]; // RGB value for #C5F7FE

        let isPurple = false;
        let isBlue = false;

        // Check if it's more likely to be purple, blue, black, or none of them based on color intensities~
        if (type == "lawful"){
            isBlue = this.commonService.isColorInRange([red, green, blue], specificBlue, 70);

        }

        if (type == "chaos"){
            isPurple = this.commonService.isColorInRange([red, green, blue], specificPurple, purpleThreshold);
        }

        const isBlack = red < blackThreshold && green < blackThreshold && blue < blackThreshold;
    
        if (isBlue) {
            return 'lawful';
        } else if (isPurple) {
            return 'chaos';
        } else if (isBlack) {
            return 'empty';
        } else {
            return "not found";
        }
    }
}
