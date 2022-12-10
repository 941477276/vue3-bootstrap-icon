// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiMouseType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiMouse: BsiMouseType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'mouse',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"},"children":[]}]
  });
};
BsiMouse.displayName = 'BsiMouse';
export default BsiMouse;
export { BsiMouse };