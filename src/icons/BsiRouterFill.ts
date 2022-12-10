// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiRouterFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiRouterFill: BsiRouterFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'router-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5.525 3.025a3.5 3.5 0 0 1 4.95 0 .5.5 0 1 0 .707-.707 4.5 4.5 0 0 0-6.364 0 .5.5 0 0 0 .707.707Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.94 4.44a1.5 1.5 0 0 1 2.12 0 .5.5 0 0 0 .708-.708 2.5 2.5 0 0 0-3.536 0 .5.5 0 0 0 .707.707Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86L2.974 2.342ZM2.5 11a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm4.5-.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2.5.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm1.5-.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"},"children":[]}]
  });
};
BsiRouterFill.displayName = 'BsiRouterFill';
export default BsiRouterFill;
export { BsiRouterFill };