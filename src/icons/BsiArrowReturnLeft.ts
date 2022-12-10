// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowReturnLeftType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowReturnLeft: BsiArrowReturnLeftType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-return-left',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"},"children":[]}]
  });
};
BsiArrowReturnLeft.displayName = 'BsiArrowReturnLeft';
export default BsiArrowReturnLeft;
export { BsiArrowReturnLeft };