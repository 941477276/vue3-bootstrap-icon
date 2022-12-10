// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPauseFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPauseFill: BsiPauseFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'pause-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"},"children":[]}]
  });
};
BsiPauseFill.displayName = 'BsiPauseFill';
export default BsiPauseFill;
export { BsiPauseFill };