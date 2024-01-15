export class Box {
    width: number;
    height: number;
    x: number;
    y: number;
    value: number;
    text?: any;
    image?: any;

    //Chaos/Lawful and level of effects
    children?: Box[];

    //Seal or Exhaust
    child!: Box;

    constructor(width: number, height: number, x:number, y:number, text?:any) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.text = text;
        this.value = 0;
        this.children = [];
    }

    //Corrections
    replacesSages(){
        const toReplace: [string | RegExp, string][] = [
            [/[\r\n]/g, ' '],
            ["forall", "for all"],
            ["7", " to "],
            [/\s+$/, ''],
            ["Iwill", "I will"],
            ["Twill", "I will"],
            ["[2 - 12", "[-2 to +2]"],
            [" eve", " level"],
            ["I change", "I'll change"],
            ["Exposives", "Explosives"],
            ["inrease", "increase"],
            [" ate", " rate"],
            [" he ", " the "],
            [" ffect ", " effect "],
            [" Selec ", " selected "],
            [" al ", " all "],
            [" remaining.", " remaining"],
            ["tranemutation", "transmutation"],
            ["‘", ""],
            [" to % ", " 7%"],
            ["1€", "It's"],
            ["stp", "step"],
            [":", "."],
            ["['l", "I'll"],
            [" Il ", " I'll "],
            [" te ", " the "],
            [" Stages ", " Stagger "],
            [" Stagsee ", " Stagger "],
            ["1¢'s", "It's"],
            [" over ", " over. "],
            [" finish it ", " finish it. "],
            [" step now ", " step now. "],
            ["%f", "% f"],
            ["  ", " "],
            ["it. now", "it now"],
            [" to 0%", " 70%"],
            ["Ili", "I'll i"],
            ["levell", "level"],
            ["Your", "your"],
            ["1 will", "I will"],
            ["1level","1 level"],
            ["attemps", "attempts"],
            ["I'l ","I'll "],
            ["Bis of Life", "Blessing of Life"],
            [" sal "," seal "],
            [" 4", ""],
            ["Let’ ", "Let's "],
            ["it now,", "it now."],
            ["1¢s", "It's"],
            ["by 3 levels", "by 2 levels"], //doesnt exist 3
            ["I'llincrease","I'll increase"], //I'llincrease the level of the Critical (Chaos) effect by [2 +2]
            ["[2 +2]","[-2 to +2]"], //I'llincrease the level of the Critical (Chaos) effect by [2 +2]
            ["[will","I will"], //This time, [will transmute 2 effects
            ["transmate","transmute"], //This time, I will transmate 2 effects at the same time.
            ["transmaute","transmute"], //This time, I will transmaute 2 effects at the same time.
            [" wil "," will "], //I wil 
            ["Ill ","I'll "], //Ill move the levels of all effects down 1
            [" effec "," effect "], //In exchange, the level of the Strengih effec will be decreased by 
            ["Strengih ","Strength "], //In exchange, the level of the Strengih effec will be decreased by 
            [" ill "," will "],
            ["by 20 ", "by 20% "],
            [" id ", " is "],
            ["troublesome I will ", "troublesome. I will "],
            ["I will set ", "I will reset "],
            ["reamining", "remaining"],
            ["all remaining transmutation.", "all remaining transmutations."],
            ["[4-45]","[-4-+5]"],
            ["I'lincrease", "I'll increase"],
            ["| will", "I will"],
            ["11 ", "I'll "],
            [" 1s ", " is "],
            ["|", "I"],
            ["I os +", "I'll change"], //I os + the level
            ["Jo”", "power."],
            [" -2 - +2)", " [-2 - +2]"],
            [" gre ", " great "],
            [" cate ", " change "],
            ["Ji] ", "I'll "],
            ["(1-2)", "[1-2]"],
            ["This time, will", "This time, I will"],
            ["increase I effect", "increase 1 effect"],
            ["by I level", "by 1 level"],
            ["lose | level","lose 1 level"],
            ["But I other","But 1 other"],
            ["up I slot", "up 1 slot"],
            ["power,", "power."],
            ["But, will", "But, I will"],
            ["attempts,", "attempts."],
            ["by 3% ", "by 5% "], //3% doesnt exist
            ["Il ", "I'll "],
            ["rate of ll effects", "rate of all effects"],
            ["loss", "less"],
            ["increase I random", "increase 1 random"],
            ["consume attempts", "consume 2 attempts"],
            ["by I", "by 1"],
            ["seal I ", "seal 1 "],
            ["  ", " "],
            ["consume J attempts", "consume 2 attempts"],
            ["It'sa", "It's a"],
            ["Its ", "It's "],
            ["Teffect", "1 effect"],
            ["level by level", "level by 1 level"],
            ["Tcan ","I can "],
            ["enhance I effect", "enhance 1 effect"],
            ["[-2- +2]", "[-2 - +2]"],
            ["oy 14-45)", "[-4-+5]"],
            ["poe. ", "power. "],
            ["poe ", "power "],
            ["power But,","power. But,"],
            ["selected [","selected by ["],
            ["+2)", "+2]"],
            ["2- +", "2 - +"],
            ["mn ete ", "I'll change "],
            ["t's ", "It's "]
        ];

        for (const [pattern, replacement] of toReplace) {
            this.text = this.text.replace(pattern, replacement);
        }

        if (this.text.startsWith("will")){
            this.text = "I " + this.text
        }

        if (this.text.endsWith("effects down 1")){
            this.text += " slot."
        }

        if (this.text.endsWith("’")){
            this.text = this.text.replace("’","")
        }

        if (this.text.endsWith(",")){
            this.text = this.text.replace(",",".")
        }

        if (this.text.endsWith("down | ll")){
            this.text = this.text.replace("down | ll","")
        }

        //wrong caracters after levels.
        if (this.text.includes("Elixir's effects and levels.")){
            this.text = this.text.split("Elixir's effects and levels.")[0]
        }

        if (this.text.endsWith("up I slot") || this.text.endsWith("up 1 slot")){
            this.text = this.text.replace("up I slot",'up 1 slot for you.')
        }

    }

    hardcodedReplacement(){
        if (this.text.includes("can redistribute the level for all")){
            this.text = "I can redistribute the levels for all effects. Let's see how it shakes out."
        }

        if (this.text.includes("l The flow is not good. I will reset the")){
            this.text = "The flow is not good. I will reset the Elixir's effect and levels."
        }
    }

    replacesEffect(){
        if (this.text.includes('.')) {
            this.text = this.text.split('.')[0];
        }

        if (this.text.endsWith(' ')) {
            this.text = this.text.slice(0, -1);
        }
    }

}