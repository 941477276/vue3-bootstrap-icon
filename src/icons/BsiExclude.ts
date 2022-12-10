// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiExcludeType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiExclude: BsiExcludeType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'exclude',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm12 2H5a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1V4z"},"children":[]}]
  });
};
BsiExclude.displayName = 'BsiExclude';
export default BsiExclude;
export { BsiExclude };