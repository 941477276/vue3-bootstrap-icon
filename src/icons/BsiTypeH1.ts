// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiTypeH1Type extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiTypeH1: BsiTypeH1Type = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'type-h1',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z"},"children":[]}]
  });
};
BsiTypeH1.displayName = 'BsiTypeH1';
export default BsiTypeH1;
export { BsiTypeH1 };