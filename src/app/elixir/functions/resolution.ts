const originalWidth = 1920
const originalHeight = 1080


export function updateImage(file: string, isForced: boolean): Promise<{success: boolean, file?: string, aspectratio?: number}> {
    return new Promise((resolve, reject) => {
        isImageSupported(file).then(res  => {
            if (!res?.success) 
                resolve({success: false})
            
            //its the same as original, doesnt do anything
            if (isForced && res.img.width == originalWidth && res.img.height == originalHeight){
                resolve({success: true, file: file, aspectratio: res.aspectratio})
            }else if (isForced){
                resolve({success: true, file: downscaleImage(res.img), aspectratio: res.aspectratio})
            }else{
                transformImageTo21by9AndDownscale(res.img).then(x => resolve({success: true, file: x, aspectratio: res.aspectratio}))
            }

        });
    });
}


export function isImageSupported(file: any): Promise<{success: boolean, img: HTMLImageElement, aspectratio: number}> {
    return new Promise((resolve, reject) => {
        getImageDimensionsFromURL(file).then((x: HTMLImageElement) => {
            const aspectRatio = Math.round(x.width/x.height * 100000)/100000;

            resolve({success: x.width >= originalWidth && x.height >= originalHeight && (aspectRatio == 1.77778 || aspectRatio == 2.38889), img: x, aspectratio: aspectRatio});
        })
    });
}

async function getImageDimensionsFromURL(imageUrl: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
    
        img.onload = function () {
            resolve(img);
        };
    
        img.onerror = function (errorEvent) {
            reject(`Error loading image from URL: ${imageUrl}`);
        };
    
        img.src = imageUrl;
    });
}

function downscaleImage(inputImage: HTMLImageElement): string {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = originalWidth;
    canvas.height = originalHeight;

    if (context){
        context.drawImage(inputImage, 0, 0, originalWidth, originalHeight);
    }

    return canvas.toDataURL();
}

function transformImageTo21by9AndDownscale(inputImage: HTMLImageElement): Promise<string> {
    return new Promise((resolve) => {

        // Desired aspect ratio
        const targetAspectRatio = 16 / 9;

        // Create a new canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Set canvas dimensions to maintain 21:9 aspect ratio
        canvas.width = inputImage.width;
        canvas.height = (inputImage.width / targetAspectRatio) - 8;

        // Calculate black bar height
        const blackBarHeight = (canvas.height - inputImage.height) / 2;

        // Draw the image with black bars
        if (context){
            context.fillStyle = 'black';
        }

        context?.fillRect(0, 0, canvas.width, canvas.height);
        context?.drawImage(inputImage, 0, blackBarHeight);

        inputImage.width = canvas.width;
            inputImage.height = canvas.height;
            inputImage.src = canvas.toDataURL();

        setTimeout(() => {
            resolve(downscaleImage(inputImage));
        }, 2000);
    });
}