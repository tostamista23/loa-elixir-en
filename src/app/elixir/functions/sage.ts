
import { Box } from '../models/box.model';
import { data, GameState } from 'src/app/core/elixir';
import { ScreenBox } from '../models/screen.model';

export function  GetChaosCoord(width: number, index: number, screen: ScreenBox, addToWidth = 0): Box[] {

    if (!screen.isForced && screen.aspectRatio == "1.77778"){
        return [
            new Box(32,32,GetWidthBySageIndex(width, index, 474), 618), 
            new Box(32,32,GetWidthBySageIndex(width, index, 520), 618), 
            new Box(32,32,GetWidthBySageIndex(width, index, 568), 618), 
            new Box(32,32,GetWidthBySageIndex(width, index, 616), 618), 
            new Box(32,32,GetWidthBySageIndex(width, index, 666), 618),
            new Box(32,32,GetWidthBySageIndex(width, index, 714), 618)
        ]
    }

    return [
        new Box(320,320,GetWidthBySageIndex(width, index, 590), 598), 
        new Box(32,32,GetWidthBySageIndex(width, index, 626), 598), 
        new Box(32,32,GetWidthBySageIndex(width, index, 664), 598), 
        new Box(32,32,GetWidthBySageIndex(width, index, 700), 598), 
        new Box(32,32,GetWidthBySageIndex(width, index, 736), 598),
        new Box(32,32,GetWidthBySageIndex(width, index, 773), 598)
    ]
}

export function GetLawfulCoord(width: number, index: number,screen: ScreenBox, addToWidth = 0): Box[] {

    if (!screen.isForced && screen.aspectRatio == "1.77778"){
        return [
            new Box(32,32,GetWidthBySageIndex(width, index, 528 + addToWidth),618), 
            new Box(32,32,GetWidthBySageIndex(width, index, 592 + addToWidth),618), 
            new Box(32,32,GetWidthBySageIndex(width, index, 662 + addToWidth),618)
        ]
    }

    return [
        new Box(32,32,GetWidthBySageIndex(width, index, 634 + addToWidth),598), 
        new Box(32,32,GetWidthBySageIndex(width, index, 682 + addToWidth),598), 
        new Box(32,32,GetWidthBySageIndex(width, index, 732 + addToWidth),598)
    ]
}

function GetWidthBySageIndex(width: number, index: number, value: number,): number {
    return (index)*width + (index*19.4) + value
}

function GetWidthBySageIndex169(width: number, index: number, value: number,): number {
    return (index)*width + (index*29.4) + value
}

export function GetAllCouncils(gameState: GameState) {
    let list: {id: string,sage: number, desc: string, canExhaust: boolean}[] = []

    data.councils.forEach(obj => { 
        obj.descriptions.map(c => {
            [0,1,2].forEach(x => {

                const desc = GameState.query.getCouncilDescriptionFromId(gameState, obj.id, x, false).replaceAll("<", "").replaceAll(">","");

                if (list.some(x => x.id == obj.id && x.desc == desc)){
                    return;
                }

                list.push({
                    id:obj.id,sage: x, 
                    desc: desc, 
                    canExhaust: obj.type == "exhausted"
                });
            })
        });
    });

    return list;
}
