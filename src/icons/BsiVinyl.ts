// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiVinylType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiVinyl: BsiVinylType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'vinyl',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"},"children":[]}]
  });
};
BsiVinyl.displayName = 'BsiVinyl';
export default BsiVinyl;
export { BsiVinyl };