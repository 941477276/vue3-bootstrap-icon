// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChevronCompactUpType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChevronCompactUp: BsiChevronCompactUpType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chevron-compact-up',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"},"children":[]}]
  });
};
BsiChevronCompactUp.displayName = 'BsiChevronCompactUp';
export default BsiChevronCompactUp;
export { BsiChevronCompactUp };