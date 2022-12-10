// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChevronBarRightType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChevronBarRight: BsiChevronBarRightType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chevron-bar-right',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"},"children":[]}]
  });
};
BsiChevronBarRight.displayName = 'BsiChevronBarRight';
export default BsiChevronBarRight;
export { BsiChevronBarRight };