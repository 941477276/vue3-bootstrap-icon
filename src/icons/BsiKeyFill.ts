// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiKeyFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiKeyFill: BsiKeyFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'key-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},"children":[]}]
  });
};
BsiKeyFill.displayName = 'BsiKeyFill';
export default BsiKeyFill;
export { BsiKeyFill };