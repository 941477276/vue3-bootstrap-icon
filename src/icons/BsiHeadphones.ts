// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiHeadphonesType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiHeadphones: BsiHeadphonesType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'headphones',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"},"children":[]}]
  });
};
BsiHeadphones.displayName = 'BsiHeadphones';
export default BsiHeadphones;
export { BsiHeadphones };