// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCameraVideoFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCameraVideoFill: BsiCameraVideoFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'camera-video-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"},"children":[]}]
  });
};
BsiCameraVideoFill.displayName = 'BsiCameraVideoFill';
export default BsiCameraVideoFill;
export { BsiCameraVideoFill };