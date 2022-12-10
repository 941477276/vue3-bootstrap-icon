// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCreditCard2BackFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCreditCard2BackFill: BsiCreditCard2BackFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'credit-card-2-back-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0V4zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1H0z"},"children":[]}]
  });
};
BsiCreditCard2BackFill.displayName = 'BsiCreditCard2BackFill';
export default BsiCreditCard2BackFill;
export { BsiCreditCard2BackFill };