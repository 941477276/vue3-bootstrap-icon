// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiOpticalAudioFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiOpticalAudioFill: BsiOpticalAudioFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'optical-audio-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm1 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M2.5 15a.5.5 0 0 1-.5-.5v-3.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 1 .146-.354l2-2A.5.5 0 0 1 4.5 2h7a.5.5 0 0 1 .354.146l2 2A.5.5 0 0 1 14 4.5v2.05a2.5 2.5 0 0 1 0 4.9v3.05a.5.5 0 0 1-.5.5h-11ZM8 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"},"children":[]}]
  });
};
BsiOpticalAudioFill.displayName = 'BsiOpticalAudioFill';
export default BsiOpticalAudioFill;
export { BsiOpticalAudioFill };