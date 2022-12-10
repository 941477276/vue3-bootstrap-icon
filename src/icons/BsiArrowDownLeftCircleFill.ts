// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowDownLeftCircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowDownLeftCircleFill: BsiArrowDownLeftCircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-down-left-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"},"children":[]}]
  });
};
BsiArrowDownLeftCircleFill.displayName = 'BsiArrowDownLeftCircleFill';
export default BsiArrowDownLeftCircleFill;
export { BsiArrowDownLeftCircleFill };