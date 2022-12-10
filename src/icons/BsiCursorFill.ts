// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCursorFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCursorFill: BsiCursorFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'cursor-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"},"children":[]}]
  });
};
BsiCursorFill.displayName = 'BsiCursorFill';
export default BsiCursorFill;
export { BsiCursorFill };