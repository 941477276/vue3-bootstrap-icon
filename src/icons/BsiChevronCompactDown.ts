// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChevronCompactDownType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChevronCompactDown: BsiChevronCompactDownType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chevron-compact-down',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"},"children":[]}]
  });
};
BsiChevronCompactDown.displayName = 'BsiChevronCompactDown';
export default BsiChevronCompactDown;
export { BsiChevronCompactDown };