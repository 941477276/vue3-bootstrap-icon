// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiAlignCenterType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiAlignCenter: BsiAlignCenterType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'align-center',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1zm0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5zM2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z"},"children":[]}]
  });
};
BsiAlignCenter.displayName = 'BsiAlignCenter';
export default BsiAlignCenter;
export { BsiAlignCenter };