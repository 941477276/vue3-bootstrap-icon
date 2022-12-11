import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiDisplayType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiDisplay: BsiDisplayType;
export default BsiDisplay;
export { BsiDisplay };
