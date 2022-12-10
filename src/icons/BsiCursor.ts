// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCursorType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCursor: BsiCursorType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'cursor',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"},"children":[]}]
  });
};
BsiCursor.displayName = 'BsiCursor';
export default BsiCursor;
export { BsiCursor };