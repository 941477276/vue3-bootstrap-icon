// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiAppType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiApp: BsiAppType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'app',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"},"children":[]}]
  });
};
BsiApp.displayName = 'BsiApp';
export default BsiApp;
export { BsiApp };