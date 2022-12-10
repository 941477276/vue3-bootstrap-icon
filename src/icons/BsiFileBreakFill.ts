// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileBreakFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileBreakFill: BsiFileBreakFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-break-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M4 0h8a2 2 0 0 1 2 2v7H2V2a2 2 0 0 1 2-2zM2 12h12v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"},"children":[]}]
  });
};
BsiFileBreakFill.displayName = 'BsiFileBreakFill';
export default BsiFileBreakFill;
export { BsiFileBreakFill };