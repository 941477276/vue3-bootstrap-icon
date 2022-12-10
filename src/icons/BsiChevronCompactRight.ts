// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChevronCompactRightType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChevronCompactRight: BsiChevronCompactRightType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chevron-compact-right',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"},"children":[]}]
  });
};
BsiChevronCompactRight.displayName = 'BsiChevronCompactRight';
export default BsiChevronCompactRight;
export { BsiChevronCompactRight };