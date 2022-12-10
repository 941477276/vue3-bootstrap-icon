// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiRulersType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiRulers: BsiRulersType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'rulers',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z"},"children":[]}]
  });
};
BsiRulers.displayName = 'BsiRulers';
export default BsiRulers;
export { BsiRulers };