// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiHSquareType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiHSquare: BsiHSquareType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'h-square',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M11 4.002V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002H11Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"},"children":[]}]
  });
};
BsiHSquare.displayName = 'BsiHSquare';
export default BsiHSquare;
export { BsiHSquare };