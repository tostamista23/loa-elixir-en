
import { Box } from '../models/box.model';

export function  GetEffectLevelCoord(height: number, index: number, addToWidth = 0): Box[] {
    return [
        new Box(12, 12, 1653 + addToWidth, GetHeightByEffectIndex(height, index, 206)), 
        new Box(12, 12, 1676 + addToWidth, GetHeightByEffectIndex(height, index, 206)), 
        new Box(12, 12, 1698 + addToWidth, GetHeightByEffectIndex(height, index, 206)), //1
        new Box(12, 12, 1724 + addToWidth, GetHeightByEffectIndex(height, index, 206)), //empty
        new Box(12, 12, 1748 + addToWidth, GetHeightByEffectIndex(height, index, 206)), //
        new Box(13, 12, 1769 + addToWidth, GetHeightByEffectIndex(height, index, 210)), //2
        new Box(12, 12, 1797 + addToWidth, GetHeightByEffectIndex(height, index, 208)), //empty
        new Box(12, 12, 1816 + addToWidth, GetHeightByEffectIndex(height, index, 210)), //3
        new Box(12, 12, 1844 + addToWidth, GetHeightByEffectIndex(height, index, 205)), //4
        new Box(12, 12, 1974 + addToWidth, GetHeightByEffectIndex(height, index, 206)), //5
    ]
}

function GetHeightByEffectIndex(height: number, index: number, value: number): number {
    return (index)*height + (index*72) + value
}
