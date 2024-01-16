
import { Box } from '../models/box.model';
import { ScreenBox } from '../models/screen.model';

export function GetEffectLevelCoord(height: number, index: number, screen: ScreenBox): Box[] {

    //16:9 without black bars
    if (!screen.isForced && screen.aspectRatio == "1.77778"){
        return [
            new Box(12, 12, 1563, GetHeightByEffectIndex169(height, index, 94)), 
            new Box(12, 12, 1594, GetHeightByEffectIndex169(height, index, 94)), 
            new Box(12, 12, 1625, GetHeightByEffectIndex169(height, index, 96)), //1
            new Box(12, 12, 1659, GetHeightByEffectIndex169(height, index, 94)), //empty
            new Box(12, 12, 1690, GetHeightByEffectIndex169(height, index, 94)), //
            new Box(12, 12, 1721, GetHeightByEffectIndex169(height, index, 96)), //2
            new Box(12, 12, 1755, GetHeightByEffectIndex169(height, index, 94)), //empty
            new Box(12, 12, 1784, GetHeightByEffectIndex169(height, index, 98)), //3
            new Box(12, 12, 1818, GetHeightByEffectIndex169(height, index, 93)), //4
            new Box(12, 12, 1847, GetHeightByEffectIndex169(height, index, 94)), //5 // TODO
        ]
    }

    //16:9 with black bars
    if (screen.isForced){
        return [
            new Box(12, 12, 1653, GetHeightByEffectIndex(height, index, 206)), 
            new Box(12, 12, 1676, GetHeightByEffectIndex(height, index, 206)), 
            new Box(12, 12, 1698, GetHeightByEffectIndex(height, index, 206)), //1
            new Box(12, 12, 1724, GetHeightByEffectIndex(height, index, 206)), //empty
            new Box(12, 12, 1748, GetHeightByEffectIndex(height, index, 206)), //
            new Box(13, 12, 1770, GetHeightByEffectIndex(height, index, 206)), //2
            new Box(12, 12, 1797, GetHeightByEffectIndex(height, index, 208)), //empty
            new Box(12, 12, 1816, GetHeightByEffectIndex(height, index, 210)), //3
            new Box(12, 12, 1843, GetHeightByEffectIndex(height, index, 205)), //4
            new Box(12, 12, 1974, GetHeightByEffectIndex(height, index, 206)), //5
        ]
    }

    //21:9 without black bars
    return [
        new Box(12, 12, 1648, GetHeightByEffectIndex(height, index, 206)), 
        new Box(12, 12, 1671, GetHeightByEffectIndex(height, index, 206)), 
        new Box(12, 12, 1690, GetHeightByEffectIndex(height, index, 208)), //1
        new Box(12, 12, 1719, GetHeightByEffectIndex(height, index, 206)), //empty
        new Box(12, 12, 1743, GetHeightByEffectIndex(height, index, 206)), //
        new Box(13, 12, 1764, GetHeightByEffectIndex(height, index, 208)), //2
        new Box(12, 12, 1792, GetHeightByEffectIndex(height, index, 208)), //empty
        new Box(12, 12, 1811, GetHeightByEffectIndex(height, index, 210)), //3
        new Box(12, 12, 1839, GetHeightByEffectIndex(height, index, 205)), //4
        new Box(12, 12, 1969, GetHeightByEffectIndex(height, index, 206)), //5
    ]
}

function GetHeightByEffectIndex(height: number, index: number, value: number): number {
    return (index)*height + (index*71.5) + value
}

function GetHeightByEffectIndex169(height: number, index: number, value: number): number {
    return (index)*height + (index*102.5) + value
}