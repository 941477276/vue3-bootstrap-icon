// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChevronCompactLeftType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChevronCompactLeft: BsiChevronCompactLeftType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chevron-compact-left',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"},"children":[]}]
  });
};
BsiChevronCompactLeft.displayName = 'BsiChevronCompactLeft';
export default BsiChevronCompactLeft;
export { BsiChevronCompactLeft };