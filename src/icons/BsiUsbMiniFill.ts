// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiUsbMiniFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiUsbMiniFill: BsiUsbMiniFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'usb-mini-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3 3a1 1 0 0 0-1 1v1.293L.293 7A1 1 0 0 0 0 7.707V12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7.707A1 1 0 0 0 15.707 7L14 5.293V4a1 1 0 0 0-1-1H3Zm.5 5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"},"children":[]}]
  });
};
BsiUsbMiniFill.displayName = 'BsiUsbMiniFill';
export default BsiUsbMiniFill;
export { BsiUsbMiniFill };