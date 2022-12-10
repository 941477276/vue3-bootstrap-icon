// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSymmetryHorizontalType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSymmetryHorizontal: BsiSymmetryHorizontalType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'symmetry-horizontal',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5h11zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376zM11.539 10H3v4.658L11.54 10z"},"children":[]}]
  });
};
BsiSymmetryHorizontal.displayName = 'BsiSymmetryHorizontal';
export default BsiSymmetryHorizontal;
export { BsiSymmetryHorizontal };