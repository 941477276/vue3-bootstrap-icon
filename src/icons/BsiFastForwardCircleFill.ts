// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFastForwardCircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFastForwardCircleFill: BsiFastForwardCircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'fast-forward-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM4.79 5.093 8 7.386V5.5a.5.5 0 0 1 .79-.407l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 8 10.5V8.614l-3.21 2.293A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .79-.407Z"},"children":[]}]
  });
};
BsiFastForwardCircleFill.displayName = 'BsiFastForwardCircleFill';
export default BsiFastForwardCircleFill;
export { BsiFastForwardCircleFill };