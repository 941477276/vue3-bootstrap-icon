// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiStopBtnFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiStopBtnFill: BsiStopBtnFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'stop-btn-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.5-7A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"},"children":[]}]
  });
};
BsiStopBtnFill.displayName = 'BsiStopBtnFill';
export default BsiStopBtnFill;
export { BsiStopBtnFill };