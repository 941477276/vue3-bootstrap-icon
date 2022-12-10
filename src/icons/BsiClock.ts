// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiClockType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiClock: BsiClockType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'clock',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"},"children":[]}]
  });
};
BsiClock.displayName = 'BsiClock';
export default BsiClock;
export { BsiClock };