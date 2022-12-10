// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPauseType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPause: BsiPauseType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'pause',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"},"children":[]}]
  });
};
BsiPause.displayName = 'BsiPause';
export default BsiPause;
export { BsiPause };