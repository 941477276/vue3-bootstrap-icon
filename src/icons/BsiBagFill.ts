// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBagFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBagFill: BsiBagFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'bag-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"},"children":[]}]
  });
};
BsiBagFill.displayName = 'BsiBagFill';
export default BsiBagFill;
export { BsiBagFill };