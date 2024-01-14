import { Injectable } from '@angular/core';
import { Box } from '../models/box.model';

@Injectable()
export class CommonService {

    constructor() { }

    cutImage(imageUrl: string, box: Box): Promise<void> {

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = imageUrl;

            img.onload = () => {
                // Set up a canvas to manipulate the image
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Set the canvas dimensions to the desired dimensions (e.g., 100x100)
                canvas.width = img.width;
                canvas.height = img.height;

                // Draw the image on the canvas (this automatically scales to the canvas size)
                ctx?.drawImage(img, 0,0);

                // Crop the desired part of the image
                const imageData = ctx?.getImageData(box.x, box.y, box.width, box.height);

                // Create a new canvas for the cropped image
                const croppedCanvas = document.createElement('canvas');
                const croppedCtx = croppedCanvas.getContext('2d');

                // Set the dimensions of the new canvas to the size of the crop
                croppedCanvas.width = box.width;
                croppedCanvas.height = box.height;

                // Draw the cropped image on the new canvas
                croppedCtx?.putImageData(imageData!, 0, 0);
                box.image = croppedCanvas.toDataURL();
                resolve();
            }

            img.onerror = (err) => {
                console.error(err)
            }
        });
    }

    public getMiddlePixelColor(canvas: HTMLCanvasElement): [number, number, number] | null {
        const context = canvas.getContext('2d');

        if (!context) {
            return null;
        }

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const middleX = Math.floor(canvas.width / 2);
        const middleY = Math.floor(canvas.height / 2);
        const index = (middleY * canvas.width + middleX) * 4;

        const red = imageData.data[index];
        const green = imageData.data[index + 1];
        const blue = imageData.data[index + 2];

        return [red, green, blue];
    }

    public isColorInRange(color: [number, number, number], targetColor: [number, number, number], threshold: number): boolean {
        return (
          Math.abs(color[0] - targetColor[0]) <= threshold &&
          Math.abs(color[1] - targetColor[1]) <= threshold &&
          Math.abs(color[2] - targetColor[2]) <= threshold
        );
    }

    applyContrast(base64Image: string, contrast: number): Promise<string> {
        return new Promise<string>((resolve, reject) => {

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            const image = new Image();
            image.src = base64Image;
    
            image.onload = () => {

                if (context){
                    context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height);
    
                    const imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
                    const data = imageData.data;
                    
                    // Apply contrast
                    contrast = (contrast / 100) + 1;
        
                    for (let i = 0; i < data.length; i += 4) {
                        data[i] = ((data[i] / 255 - 0.5) * contrast + 0.5) * 255;
                        data[i + 1] = ((data[i + 1] / 255 - 0.5) * contrast + 0.5) * 255;
                        data[i + 2] = ((data[i + 2] / 255 - 0.5) * contrast + 0.5) * 255;
                    }

                    // Remove purple tones (adjust the tolerance level as needed)
                    const purpleTolerance = 50;
                    for (let i = 0; i < data.length; i += 4) {
                        const red = data[i];
                        const blue = data[i + 2];

                        if (blue - red > purpleTolerance) {
                            // If blue is significantly greater than red, set to white
                            data[i] = 0; // Red
                            data[i + 1] = 0; // Green
                            data[i + 2] = 0; // Blue
                        }
                    }
        
                    context.putImageData(imageData, 0, 0);
                }
                
                resolve(canvas.toDataURL('image/jpeg'));
            };
    
            image.onerror = () => {
                reject('Erro ao carregar a imagem.');
            };
        });
    }

    /*
    applyGrayscale(base64Image: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            const image = new Image();
            image.src = base64Image;
    
            image.onload = () => {

                if (context){
                    context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height);
    
                    const imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
        
                    imageGrayscale(imageData, 4).then((x: ImageData) => {
                        context.putImageData(x, 0, 0);
                        resolve(canvas.toDataURL('image/jpeg'))
                    });
                }
            };
    
            image.onerror = () => {
                reject('Erro ao carregar a imagem.');
            };
        });
    }*/
}
