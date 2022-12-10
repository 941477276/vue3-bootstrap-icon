// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiToggleOffType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiToggleOff: BsiToggleOffType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'toggle-off',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"},"children":[]}]
  });
};
BsiToggleOff.displayName = 'BsiToggleOff';
export default BsiToggleOff;
export { BsiToggleOff };