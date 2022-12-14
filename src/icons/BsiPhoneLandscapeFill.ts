// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPhoneLandscapeFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPhoneLandscapeFill: BsiPhoneLandscapeFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'phone-landscape-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 12.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2zm11-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"},"children":[]}]
  });
};
BsiPhoneLandscapeFill.displayName = 'BsiPhoneLandscapeFill';
export default BsiPhoneLandscapeFill;
export { BsiPhoneLandscapeFill };