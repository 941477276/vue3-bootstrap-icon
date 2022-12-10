// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiStopCircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiStopCircleFill: BsiStopCircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'stop-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z"},"children":[]}]
  });
};
BsiStopCircleFill.displayName = 'BsiStopCircleFill';
export default BsiStopCircleFill;
export { BsiStopCircleFill };