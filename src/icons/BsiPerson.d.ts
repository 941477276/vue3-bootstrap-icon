import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiPersonType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiPerson: BsiPersonType;
export default BsiPerson;
export { BsiPerson };
