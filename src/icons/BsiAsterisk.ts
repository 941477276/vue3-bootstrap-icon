// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiAsteriskType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiAsterisk: BsiAsteriskType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'asterisk',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"},"children":[]}]
  });
};
BsiAsterisk.displayName = 'BsiAsterisk';
export default BsiAsterisk;
export { BsiAsterisk };