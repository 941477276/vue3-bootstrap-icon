// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface Bsi7CircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const Bsi7CircleFill: Bsi7CircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: '7-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.37 5.11h3.972v.07L6.025 12H7.42l3.258-6.85V4.002H5.369v1.107Z"},"children":[]}]
  });
};
Bsi7CircleFill.displayName = 'Bsi7CircleFill';
export default Bsi7CircleFill;
export { Bsi7CircleFill };