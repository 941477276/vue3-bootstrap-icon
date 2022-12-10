// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiUsbDriveFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiUsbDriveFill: BsiUsbDriveFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'usb-drive-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6v-4ZM7 1v1h1V1H7Zm2 0v1h1V1H9ZM5.5 5a.5.5 0 0 0-.5.5V15a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5.5a.5.5 0 0 0-.5-.5h-6Z"},"children":[]}]
  });
};
BsiUsbDriveFill.displayName = 'BsiUsbDriveFill';
export default BsiUsbDriveFill;
export { BsiUsbDriveFill };