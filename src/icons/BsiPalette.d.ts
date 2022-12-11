import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiPaletteType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiPalette: BsiPaletteType;
export default BsiPalette;
export { BsiPalette };
