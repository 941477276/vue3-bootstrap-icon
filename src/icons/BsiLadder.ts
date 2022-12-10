// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiLadderType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiLadder: BsiLadderType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'ladder',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M4.5 1a.5.5 0 0 1 .5.5V2h6v-.5a.5.5 0 0 1 1 0v14a.5.5 0 0 1-1 0V15H5v.5a.5.5 0 0 1-1 0v-14a.5.5 0 0 1 .5-.5zM5 14h6v-2H5v2zm0-3h6V9H5v2zm0-3h6V6H5v2zm0-3h6V3H5v2z"},"children":[]}]
  });
};
BsiLadder.displayName = 'BsiLadder';
export default BsiLadder;
export { BsiLadder };