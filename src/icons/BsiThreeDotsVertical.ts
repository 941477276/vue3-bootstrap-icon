// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiThreeDotsVerticalType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiThreeDotsVertical: BsiThreeDotsVerticalType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'three-dots-vertical',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"},"children":[]}]
  });
};
BsiThreeDotsVertical.displayName = 'BsiThreeDotsVertical';
export default BsiThreeDotsVertical;
export { BsiThreeDotsVertical };