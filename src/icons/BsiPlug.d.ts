import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiPlugType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiPlug: BsiPlugType;
export default BsiPlug;
export { BsiPlug };
