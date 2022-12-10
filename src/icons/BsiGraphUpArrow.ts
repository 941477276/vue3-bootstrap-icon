// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiGraphUpArrowType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiGraphUpArrow: BsiGraphUpArrowType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'graph-up-arrow',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"},"children":[]}]
  });
};
BsiGraphUpArrow.displayName = 'BsiGraphUpArrow';
export default BsiGraphUpArrow;
export { BsiGraphUpArrow };