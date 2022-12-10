// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBluetoothType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBluetooth: BsiBluetoothType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'bluetooth',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"m8.543 3.948 1.316 1.316L8.543 6.58V3.948Zm0 8.104 1.316-1.316L8.543 9.42v2.632Zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827L7.133 8.01ZM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99C4.407 0 2 1.655 2 8.01 2 14.344 4.407 16 7.904 16Z"},"children":[]}]
  });
};
BsiBluetooth.displayName = 'BsiBluetooth';
export default BsiBluetooth;
export { BsiBluetooth };