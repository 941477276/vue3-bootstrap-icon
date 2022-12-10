// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiYinYangType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiYinYang: BsiYinYangType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'yin-yang',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7Zm7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334Z"},"children":[]}]
  });
};
BsiYinYang.displayName = 'BsiYinYang';
export default BsiYinYang;
export { BsiYinYang };