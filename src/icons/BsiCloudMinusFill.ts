// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCloudMinusFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCloudMinusFill: BsiCloudMinusFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'cloud-minus-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"},"children":[]}]
  });
};
BsiCloudMinusFill.displayName = 'BsiCloudMinusFill';
export default BsiCloudMinusFill;
export { BsiCloudMinusFill };