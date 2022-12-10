// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiThreeDotsType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiThreeDots: BsiThreeDotsType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'three-dots',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"},"children":[]}]
  });
};
BsiThreeDots.displayName = 'BsiThreeDots';
export default BsiThreeDots;
export { BsiThreeDots };