// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiMaskType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiMask: BsiMaskType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'mask',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.225 1.227A7.5 7.5 0 0 1 10.5 8a7.5 7.5 0 0 1-4.275 6.773 7 7 0 1 0 0-13.546zM4.187.966a8 8 0 1 1 7.627 14.069A8 8 0 0 1 4.186.964z"},"children":[]}]
  });
};
BsiMask.displayName = 'BsiMask';
export default BsiMask;
export { BsiMask };