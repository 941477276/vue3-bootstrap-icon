import { FunctionalComponent } from 'vue';
import { BsIconProps } from '../components/BsIcon';
export interface BsiRouterType extends FunctionalComponent<BsIconProps> {
    displayName: string;
}
declare const BsiRouter: BsiRouterType;
export default BsiRouter;
export { BsiRouter };
