// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCaretUpSquareFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCaretUpSquareFill: BsiCaretUpSquareFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'caret-up-square-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z"},"children":[]}]
  });
};
BsiCaretUpSquareFill.displayName = 'BsiCaretUpSquareFill';
export default BsiCaretUpSquareFill;
export { BsiCaretUpSquareFill };