// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPersonSquareType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPersonSquare: BsiPersonSquareType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'person-square',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"},"children":[]}]
  });
};
BsiPersonSquare.displayName = 'BsiPersonSquare';
export default BsiPersonSquare;
export { BsiPersonSquare };