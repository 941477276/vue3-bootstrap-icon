// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiLayoutWtfType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiLayoutWtf: BsiLayoutWtfType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'layout-wtf',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5 1v8H1V1h4zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm13 2v5H9V2h5zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9zM5 13v2H3v-2h2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3zm12-1v2H9v-2h6zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H9z"},"children":[]}]
  });
};
BsiLayoutWtf.displayName = 'BsiLayoutWtf';
export default BsiLayoutWtf;
export { BsiLayoutWtf };