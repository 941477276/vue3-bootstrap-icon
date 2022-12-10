// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiEggFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiEggFill: BsiEggFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'egg-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10z"},"children":[]}]
  });
};
BsiEggFill.displayName = 'BsiEggFill';
export default BsiEggFill;
export { BsiEggFill };