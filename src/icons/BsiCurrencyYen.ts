// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCurrencyYenType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCurrencyYen: BsiCurrencyYenType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'currency-yen',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.75 14v-2.629h2.446v-.967H8.75v-1.31h2.445v-.967H9.128L12.5 2h-1.699L8.047 7.327h-.086L5.207 2H3.5l3.363 6.127H4.778v.968H7.25v1.31H4.78v.966h2.47V14h1.502z"},"children":[]}]
  });
};
BsiCurrencyYen.displayName = 'BsiCurrencyYen';
export default BsiCurrencyYen;
export { BsiCurrencyYen };