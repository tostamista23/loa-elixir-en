import { Box } from "./box.model";

export class ScreenBox {
    aspectRatio: string;
    isForced: boolean;
    sages: Box[];
    effects: Box[];
    attemptsLeft: Box;

    constructor() {
        this.aspectRatio = "16:9";
        this.isForced = true;
        this.sages = [
            new Box(238, 73, 575, 640), 
            new Box(238, 73, 835, 640), 
            new Box(238, 73, 1095, 640)
        ]
        
        this.effects = [
            new Box(129, 19, 1673, 185), 
            new Box(129, 19, 1673, 275), 
            new Box(129, 19, 1673, 365), 
            new Box(129, 19, 1673, 455), 
            new Box(129, 19, 1673, 545)
        ]

        this.attemptsLeft = new Box(20, 23, 990, 853)

        this.addSealtoChild();
    }

    addSealtoChild(){
        this.effects.forEach((x: any, index: number) => {
            x.child = new Box(35, 20, 1598, index*x.height + (index* 70.5) + 209)
        })
    }

    replacesAttemptsLeft(){
        this.attemptsLeft.text = this.attemptsLeft.text.replace(/[\r\n]/g, ' ').replace(/\s+$/, '').replace("i", '1')

        if (this.attemptsLeft.text.endsWith('t')){
            this.attemptsLeft.text = this.attemptsLeft.text.slice(0, -1)
        }

        if (this.attemptsLeft.text.startsWith('I')){
            this.attemptsLeft.text = this.attemptsLeft.text.replace("I", "1")
        }
    }

    updateToAspectRatio(){
        this.sages[0].x +=5
        this.effects.forEach(x => x.x -= 9)
        this.attemptsLeft = new Box(22, 25, 988, 850)
    }

}