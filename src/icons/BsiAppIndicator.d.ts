import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiAppIndicatorType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiAppIndicator: BsiAppIndicatorType;
export default BsiAppIndicator;
export { BsiAppIndicator };
