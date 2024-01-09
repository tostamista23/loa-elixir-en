import { Injectable } from '@angular/core';
import { ScreenBox } from '../models/screen.model';
import { CommonService } from './common.service';
import { GetEffectLevelCoord } from '../functions/effectLevel';
import { Box } from '../models/box.model';

@Injectable()
export class EffectService {

    constructor(private commonService: CommonService) { }

    async updateLevelEffects(screen: ScreenBox, img: string) {
        const promises: Promise<void>[] = [];

        screen.effects.forEach((box: Box, index:number) => {
            const effectsPromises = GetEffectLevelCoord(box.height, index, !screen.isForced ? -5 : 0).map(async (x, indexOrb) => {
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
                            x.text = this.getType([middlePixelColor[0],middlePixelColor[1],middlePixelColor[2]]);
                            //console.log(x.text, index,indexOrb, x.image);
                            if (x.text !== "off"){
                                box.value++
                            }
                            box.children?.push(x);
                        }
                        resolve();

                    };
                });
            });

            promises.push(...effectsPromises);
        })

        await Promise.all(promises);
    }

    getType(pixel: [number, number, number], threshold: number = 30): string | null {
        const [red, green, blue] = pixel;
    
        // Define thresholds for purple, blue, and black
        const yellowThreshold = 150;
        const redThreshold = 75;

        // Define the specific color
        const specific: [number, number, number] = [231, 219, 117];
        const specificDark: [number, number, number] = [118, 114, 68];
        const specificAmber: [number, number, number] = [252, 233, 41];
        const specificOrange: [number, number, number] = [223, 141, 41];
        const specificRed: [number, number, number] = [255, 87, 44];

        const isAmber = (blue > yellowThreshold && red < yellowThreshold && green < yellowThreshold) || this.commonService.isColorInRange([red, green, blue], specificAmber, threshold);
        const isYellowis = (blue > yellowThreshold && red < yellowThreshold && green < yellowThreshold) || this.commonService.isColorInRange([red, green, blue], specific, threshold);
        const isYellowSealed = (blue > yellowThreshold && red < yellowThreshold && green < yellowThreshold) || this.commonService.isColorInRange([red, green, blue], specificDark, threshold);
        const isOrange = this.commonService.isColorInRange([red, green, blue], specificOrange, threshold);
        const isRed = this.commonService.isColorInRange([red, green, blue], specificRed, redThreshold);

        if (isYellowis || isOrange || isRed || isYellowSealed || isAmber) {
            return 'on';
        }

        return 'off';
    }

    
}
