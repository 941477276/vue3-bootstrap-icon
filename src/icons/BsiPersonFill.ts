// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPersonFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPersonFill: BsiPersonFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'person-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"},"children":[]}]
  });
};
BsiPersonFill.displayName = 'BsiPersonFill';
export default BsiPersonFill;
export { BsiPersonFill };