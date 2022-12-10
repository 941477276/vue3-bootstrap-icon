// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiMagnetFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiMagnetFill: BsiMagnetFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'magnet-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M15 12h-4v3h4v-3ZM5 12H1v3h4v-3ZM0 8a8 8 0 1 1 16 0v8h-6V8a2 2 0 1 0-4 0v8H0V8Z"},"children":[]}]
  });
};
BsiMagnetFill.displayName = 'BsiMagnetFill';
export default BsiMagnetFill;
export { BsiMagnetFill };