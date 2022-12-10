// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiHCircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiHCircleFill: BsiHCircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'h-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-5-3.998H9.67v3.322H6.33V4.002H5V12h1.33V8.455h3.34V12H11V4.002Z"},"children":[]}]
  });
};
BsiHCircleFill.displayName = 'BsiHCircleFill';
export default BsiHCircleFill;
export { BsiHCircleFill };