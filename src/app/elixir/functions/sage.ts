
import { Box } from '../models/box.model';
import { data, GameState } from 'src/app/core/elixir';

export function  GetChaosCoord(width: number, index: number, addToWidth = 0): Box[] {
    return [
        //TODO height games with no black bars -134
        new Box(32,32,GetWidthBySageIndex(width, index, 590), 598), 
        new Box(32,32,GetWidthBySageIndex(width, index, 626), 598), 
        new Box(32,32,GetWidthBySageIndex(width, index, 664), 598), 
        new Box(32,32,GetWidthBySageIndex(width, index, 700), 598), 
        new Box(32,32,GetWidthBySageIndex(width, index, 736), 598),
        new Box(32,32,GetWidthBySageIndex(width, index, 773), 598)
    ]
}

export function GetLawfulCoord(width: number, index: number, addToWidth = 0): Box[] {
    return [
        new Box(32,32,GetWidthBySageIndex(width, index, 634 + addToWidth),598), 
        new Box(32,32,GetWidthBySageIndex(width, index, 682 + addToWidth),598), 
        new Box(32,32,GetWidthBySageIndex(width, index, 732 + addToWidth),598)
    ]
}

function GetWidthBySageIndex(width: number, index: number, value: number): number {
    return (index)*width + (index*19.5) + value
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
