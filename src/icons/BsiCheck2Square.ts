// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCheck2SquareType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCheck2Square: BsiCheck2SquareType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'check2-square',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"},"children":[]}]
  });
};
BsiCheck2Square.displayName = 'BsiCheck2Square';
export default BsiCheck2Square;
export { BsiCheck2Square };