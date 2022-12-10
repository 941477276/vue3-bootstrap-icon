// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiHeadsetVrType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiHeadsetVr: BsiHeadsetVrType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'headset-vr',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 1.248c1.857 0 3.526.641 4.65 1.794a4.978 4.978 0 0 1 2.518 1.09C13.907 1.482 11.295 0 8 0 4.75 0 2.12 1.48.844 4.122a4.979 4.979 0 0 1 2.289-1.047C4.236 1.872 5.974 1.248 8 1.248z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M12 12a3.988 3.988 0 0 1-2.786-1.13l-.002-.002a1.612 1.612 0 0 0-.276-.167A2.164 2.164 0 0 0 8 10.5c-.414 0-.729.103-.935.201a1.612 1.612 0 0 0-.277.167l-.002.002A4 4 0 1 1 4 4h8a4 4 0 0 1 0 8z"},"children":[]}]
  });
};
BsiHeadsetVr.displayName = 'BsiHeadsetVr';
export default BsiHeadsetVr;
export { BsiHeadsetVr };