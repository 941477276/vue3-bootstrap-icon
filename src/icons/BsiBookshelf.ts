// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBookshelfType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBookshelf: BsiBookshelfType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'bookshelf',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z"},"children":[]}]
  });
};
BsiBookshelf.displayName = 'BsiBookshelf';
export default BsiBookshelf;
export { BsiBookshelf };