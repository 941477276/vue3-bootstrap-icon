// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiRecordBtnFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiRecordBtnFill: BsiRecordBtnFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'record-btn-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"},"children":[]}]
  });
};
BsiRecordBtnFill.displayName = 'BsiRecordBtnFill';
export default BsiRecordBtnFill;
export { BsiRecordBtnFill };