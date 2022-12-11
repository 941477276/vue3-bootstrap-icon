import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiPersonBadgeType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiPersonBadge: BsiPersonBadgeType;
export default BsiPersonBadge;
export { BsiPersonBadge };
