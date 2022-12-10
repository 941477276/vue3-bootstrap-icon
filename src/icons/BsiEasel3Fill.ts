// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiEasel3FillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiEasel3Fill: BsiEasel3FillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'easel3-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.5 12v1.134a1 1 0 1 1-1 0V12h-5A1.5 1.5 0 0 1 1 10.5V3h14v7.5a1.5 1.5 0 0 1-1.5 1.5h-5Zm7-10a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1h15Z"},"children":[]}]
  });
};
BsiEasel3Fill.displayName = 'BsiEasel3Fill';
export default BsiEasel3Fill;
export { BsiEasel3Fill };