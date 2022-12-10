// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowUpLeftCircleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowUpLeftCircle: BsiArrowUpLeftCircleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-up-left-circle',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707l4.096 4.096z"},"children":[]}]
  });
};
BsiArrowUpLeftCircle.displayName = 'BsiArrowUpLeftCircle';
export default BsiArrowUpLeftCircle;
export { BsiArrowUpLeftCircle };