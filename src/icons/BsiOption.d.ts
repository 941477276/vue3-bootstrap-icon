import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiOptionType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiOption: BsiOptionType;
export default BsiOption;
export { BsiOption };
