// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPauseCircleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPauseCircle: BsiPauseCircleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'pause-circle',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"},"children":[]}]
  });
};
BsiPauseCircle.displayName = 'BsiPauseCircle';
export default BsiPauseCircle;
export { BsiPauseCircle };