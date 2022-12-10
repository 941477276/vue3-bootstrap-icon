// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileEarmarkBreakFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileEarmarkBreakFill: BsiFileEarmarkBreakFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-earmark-break-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V9H2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM2 12h12v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"},"children":[]}]
  });
};
BsiFileEarmarkBreakFill.displayName = 'BsiFileEarmarkBreakFill';
export default BsiFileEarmarkBreakFill;
export { BsiFileEarmarkBreakFill };