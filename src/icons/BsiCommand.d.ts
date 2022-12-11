import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiCommandType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiCommand: BsiCommandType;
export default BsiCommand;
export { BsiCommand };
