// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiMagnetType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiMagnet: BsiMagnetType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'magnet',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 1a7 7 0 0 0-7 7v3h4V8a3 3 0 0 1 6 0v3h4V8a7 7 0 0 0-7-7Zm7 11h-4v3h4v-3ZM5 12H1v3h4v-3ZM0 8a8 8 0 1 1 16 0v8h-6V8a2 2 0 1 0-4 0v8H0V8Z"},"children":[]}]
  });
};
BsiMagnet.displayName = 'BsiMagnet';
export default BsiMagnet;
export { BsiMagnet };