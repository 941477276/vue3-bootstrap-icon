// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowUpRightSquareFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowUpRightSquareFill: BsiArrowUpRightSquareFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-up-right-square-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"},"children":[]}]
  });
};
BsiArrowUpRightSquareFill.displayName = 'BsiArrowUpRightSquareFill';
export default BsiArrowUpRightSquareFill;
export { BsiArrowUpRightSquareFill };