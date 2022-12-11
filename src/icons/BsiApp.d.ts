import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiAppType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiApp: BsiAppType;
export default BsiApp;
export { BsiApp };
