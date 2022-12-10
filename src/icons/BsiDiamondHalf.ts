// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDiamondHalfType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDiamondHalf: BsiDiamondHalfType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'diamond-half',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.493.493 0 0 1-.35.145V.989z"},"children":[]}]
  });
};
BsiDiamondHalf.displayName = 'BsiDiamondHalf';
export default BsiDiamondHalf;
export { BsiDiamondHalf };