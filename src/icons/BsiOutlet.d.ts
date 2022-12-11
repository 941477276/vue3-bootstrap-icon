import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiOutletType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiOutlet: BsiOutletType;
export default BsiOutlet;
export { BsiOutlet };
