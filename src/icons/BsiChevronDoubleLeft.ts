// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChevronDoubleLeftType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChevronDoubleLeft: BsiChevronDoubleLeftType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chevron-double-left',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"},"children":[]}]
  });
};
BsiChevronDoubleLeft.displayName = 'BsiChevronDoubleLeft';
export default BsiChevronDoubleLeft;
export { BsiChevronDoubleLeft };