// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiVinylFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiVinylFill: BsiVinylFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'vinyl-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"},"children":[]}]
  });
};
BsiVinylFill.displayName = 'BsiVinylFill';
export default BsiVinylFill;
export { BsiVinylFill };