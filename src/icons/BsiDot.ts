// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDotType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDot: BsiDotType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'dot',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"},"children":[]}]
  });
};
BsiDot.displayName = 'BsiDot';
export default BsiDot;
export { BsiDot };