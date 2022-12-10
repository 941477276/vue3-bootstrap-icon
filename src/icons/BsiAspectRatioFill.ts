// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiAspectRatioFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiAspectRatioFill: BsiAspectRatioFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'aspect-ratio-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 12.5v-9A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5zM2.5 4a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V5h2.5a.5.5 0 0 0 0-1h-3zm11 8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0V11h-2.5a.5.5 0 0 0 0 1h3z"},"children":[]}]
  });
};
BsiAspectRatioFill.displayName = 'BsiAspectRatioFill';
export default BsiAspectRatioFill;
export { BsiAspectRatioFill };