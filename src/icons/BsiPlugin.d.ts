import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiPluginType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiPlugin: BsiPluginType;
export default BsiPlugin;
export { BsiPlugin };
