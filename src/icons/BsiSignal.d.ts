import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiSignalType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiSignal: BsiSignalType;
export default BsiSignal;
export { BsiSignal };
