// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiExplicitFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiExplicitFill: BsiExplicitFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'explicit-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11Zm4.326 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z"},"children":[]}]
  });
};
BsiExplicitFill.displayName = 'BsiExplicitFill';
export default BsiExplicitFill;
export { BsiExplicitFill };