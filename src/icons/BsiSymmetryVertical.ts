// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSymmetryVerticalType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSymmetryVertical: BsiSymmetryVerticalType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'symmetry-vertical',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7 2.5a.5.5 0 0 0-.939-.24l-6 11A.5.5 0 0 0 .5 14h6a.5.5 0 0 0 .5-.5v-11zm2.376-.484a.5.5 0 0 1 .563.245l6 11A.5.5 0 0 1 15.5 14h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .376-.484zM10 4.46V13h4.658L10 4.46z"},"children":[]}]
  });
};
BsiSymmetryVertical.displayName = 'BsiSymmetryVertical';
export default BsiSymmetryVertical;
export { BsiSymmetryVertical };