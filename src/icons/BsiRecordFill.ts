// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiRecordFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiRecordFill: BsiRecordFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'record-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"},"children":[]}]
  });
};
BsiRecordFill.displayName = 'BsiRecordFill';
export default BsiRecordFill;
export { BsiRecordFill };