// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPauseCircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPauseCircleFill: BsiPauseCircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'pause-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"},"children":[]}]
  });
};
BsiPauseCircleFill.displayName = 'BsiPauseCircleFill';
export default BsiPauseCircleFill;
export { BsiPauseCircleFill };