// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiUsbCType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiUsbC: BsiUsbCType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'usb-c',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3.5 7.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 8a3 3 0 0 1 3-3h10a3 3 0 1 1 0 6H3a3 3 0 0 1-3-3Zm3-2a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4H3Z"},"children":[]}]
  });
};
BsiUsbC.displayName = 'BsiUsbC';
export default BsiUsbC;
export { BsiUsbC };