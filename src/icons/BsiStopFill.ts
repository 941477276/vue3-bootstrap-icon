// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiStopFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiStopFill: BsiStopFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'stop-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"},"children":[]}]
  });
};
BsiStopFill.displayName = 'BsiStopFill';
export default BsiStopFill;
export { BsiStopFill };