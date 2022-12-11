import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiMetaType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiMeta: BsiMetaType;
export default BsiMeta;
export { BsiMeta };
