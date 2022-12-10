// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface Bsi1CircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const Bsi1CircleFill: Bsi1CircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: '1-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z"},"children":[]}]
  });
};
Bsi1CircleFill.displayName = 'Bsi1CircleFill';
export default Bsi1CircleFill;
export { Bsi1CircleFill };