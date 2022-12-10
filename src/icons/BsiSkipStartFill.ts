// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSkipStartFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSkipStartFill: BsiSkipStartFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'skip-start-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z"},"children":[]}]
  });
};
BsiSkipStartFill.displayName = 'BsiSkipStartFill';
export default BsiSkipStartFill;
export { BsiSkipStartFill };