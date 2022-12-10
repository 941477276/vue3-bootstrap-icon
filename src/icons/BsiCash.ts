// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCashType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCash: BsiCashType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'cash',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"},"children":[]}]
  });
};
BsiCash.displayName = 'BsiCash';
export default BsiCash;
export { BsiCash };