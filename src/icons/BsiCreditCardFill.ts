// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCreditCardFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCreditCardFill: BsiCreditCardFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'credit-card-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"},"children":[]}]
  });
};
BsiCreditCardFill.displayName = 'BsiCreditCardFill';
export default BsiCreditCardFill;
export { BsiCreditCardFill };