// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowDownLeftCircleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowDownLeftCircle: BsiArrowDownLeftCircleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-down-left-circle',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z"},"children":[]}]
  });
};
BsiArrowDownLeftCircle.displayName = 'BsiArrowDownLeftCircle';
export default BsiArrowDownLeftCircle;
export { BsiArrowDownLeftCircle };