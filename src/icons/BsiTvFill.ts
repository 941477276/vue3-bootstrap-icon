// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiTvFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiTvFill: BsiTvFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'tv-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z"},"children":[]}]
  });
};
BsiTvFill.displayName = 'BsiTvFill';
export default BsiTvFill;
export { BsiTvFill };