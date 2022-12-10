// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowBarDownType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowBarDown: BsiArrowBarDownType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-bar-down',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"},"children":[]}]
  });
};
BsiArrowBarDown.displayName = 'BsiArrowBarDown';
export default BsiArrowBarDown;
export { BsiArrowBarDown };