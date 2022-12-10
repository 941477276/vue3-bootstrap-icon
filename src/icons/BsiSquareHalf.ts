// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSquareHalfType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSquareHalf: BsiSquareHalfType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'square-half',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12z"},"children":[]}]
  });
};
BsiSquareHalf.displayName = 'BsiSquareHalf';
export default BsiSquareHalf;
export { BsiSquareHalf };