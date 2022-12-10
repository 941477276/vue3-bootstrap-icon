// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChevronUpType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChevronUp: BsiChevronUpType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chevron-up',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"},"children":[]}]
  });
};
BsiChevronUp.displayName = 'BsiChevronUp';
export default BsiChevronUp;
export { BsiChevronUp };