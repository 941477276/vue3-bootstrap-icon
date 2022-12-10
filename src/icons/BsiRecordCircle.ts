// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiRecordCircleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiRecordCircle: BsiRecordCircleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'record-circle',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"},"children":[]}]
  });
};
BsiRecordCircle.displayName = 'BsiRecordCircle';
export default BsiRecordCircle;
export { BsiRecordCircle };