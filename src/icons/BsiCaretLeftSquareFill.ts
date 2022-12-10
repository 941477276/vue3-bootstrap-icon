// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCaretLeftSquareFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCaretLeftSquareFill: BsiCaretLeftSquareFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'caret-left-square-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z"},"children":[]}]
  });
};
BsiCaretLeftSquareFill.displayName = 'BsiCaretLeftSquareFill';
export default BsiCaretLeftSquareFill;
export { BsiCaretLeftSquareFill };