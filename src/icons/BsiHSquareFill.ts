// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiHSquareFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiHSquareFill: BsiHSquareFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'h-square-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm9 4.002V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002H11Z"},"children":[]}]
  });
};
BsiHSquareFill.displayName = 'BsiHSquareFill';
export default BsiHSquareFill;
export { BsiHSquareFill };