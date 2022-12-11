import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiPeopleType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiPeople: BsiPeopleType;
export default BsiPeople;
export { BsiPeople };
