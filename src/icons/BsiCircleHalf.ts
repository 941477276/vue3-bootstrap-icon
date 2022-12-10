// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCircleHalfType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCircleHalf: BsiCircleHalfType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'circle-half',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"},"children":[]}]
  });
};
BsiCircleHalf.displayName = 'BsiCircleHalf';
export default BsiCircleHalf;
export { BsiCircleHalf };