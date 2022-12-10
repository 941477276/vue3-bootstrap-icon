// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileEarmarkFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileEarmarkFill: BsiFileEarmarkFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-earmark-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"},"children":[]}]
  });
};
BsiFileEarmarkFill.displayName = 'BsiFileEarmarkFill';
export default BsiFileEarmarkFill;
export { BsiFileEarmarkFill };