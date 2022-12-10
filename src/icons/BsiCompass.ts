// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCompassType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCompass: BsiCompassType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'compass',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"},"children":[]}]
  });
};
BsiCompass.displayName = 'BsiCompass';
export default BsiCompass;
export { BsiCompass };