// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSuitDiamondFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSuitDiamondFill: BsiSuitDiamondFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'suit-diamond-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"},"children":[]}]
  });
};
BsiSuitDiamondFill.displayName = 'BsiSuitDiamondFill';
export default BsiSuitDiamondFill;
export { BsiSuitDiamondFill };