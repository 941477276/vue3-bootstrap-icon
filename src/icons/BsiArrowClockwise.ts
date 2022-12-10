// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowClockwiseType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowClockwise: BsiArrowClockwiseType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-clockwise',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"},"children":[]}]
  });
};
BsiArrowClockwise.displayName = 'BsiArrowClockwise';
export default BsiArrowClockwise;
export { BsiArrowClockwise };