
import { Box } from '../models/box.model';

export function GetEffectLevelCoord(height: number, index: number): Box[] {
    return [
        new Box(12, 12, 1653, GetHeightByEffectIndex(height, index, 206)), 
        new Box(12, 12, 1676, GetHeightByEffectIndex(height, index, 206)), 
        new Box(12, 12, 1698, GetHeightByEffectIndex(height, index, 206)), //1
        new Box(12, 12, 1724, GetHeightByEffectIndex(height, index, 206)), //empty
        new Box(12, 12, 1748, GetHeightByEffectIndex(height, index, 206)), //
        new Box(13, 12, 1770, GetHeightByEffectIndex(height, index, 206)), //2
        new Box(12, 12, 1797, GetHeightByEffectIndex(height, index, 208)), //empty
        new Box(12, 12, 1816, GetHeightByEffectIndex(height, index, 210)), //3
        new Box(12, 12, 1844, GetHeightByEffectIndex(height, index, 205)), //4
        new Box(12, 12, 1974, GetHeightByEffectIndex(height, index, 206)), //5
    ]
}

function GetHeightByEffectIndex(height: number, index: number, value: number): number {
    return (index)*height + (index*71.5) + value
}

export function GetEffectLevelCoord219(height: number, index: number): Box[] {
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