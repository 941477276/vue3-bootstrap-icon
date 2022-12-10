// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiGraphDownArrowType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiGraphDownArrow: BsiGraphDownArrowType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'graph-down-arrow',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M0 0h1v15h15v1H0V0Zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5Z"},"children":[]}]
  });
};
BsiGraphDownArrow.displayName = 'BsiGraphDownArrow';
export default BsiGraphDownArrow;
export { BsiGraphDownArrow };