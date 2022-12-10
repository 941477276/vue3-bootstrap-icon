// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiHCircleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiHCircle: BsiHCircleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'h-circle',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-5-3.998V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002H11Z"},"children":[]}]
  });
};
BsiHCircle.displayName = 'BsiHCircle';
export default BsiHCircle;
export { BsiHCircle };