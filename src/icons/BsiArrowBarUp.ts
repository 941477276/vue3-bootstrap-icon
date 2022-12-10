// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowBarUpType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowBarUp: BsiArrowBarUpType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-bar-up',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"},"children":[]}]
  });
};
BsiArrowBarUp.displayName = 'BsiArrowBarUp';
export default BsiArrowBarUp;
export { BsiArrowBarUp };