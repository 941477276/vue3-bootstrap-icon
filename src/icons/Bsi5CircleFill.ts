// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface Bsi5CircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const Bsi5CircleFill: Bsi5CircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: '5-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.006 4.158c1.74 0 2.924-1.119 2.924-2.806 0-1.641-1.178-2.584-2.56-2.584-.897 0-1.442.421-1.612.68h-.064l.193-2.344h3.621V4.002H5.791L5.445 8.63h1.149c.193-.358.668-.809 1.435-.809.85 0 1.582.604 1.582 1.57 0 1.085-.779 1.682-1.57 1.682-.697 0-1.389-.31-1.53-1.031H5.276c.065 1.213 1.149 2.115 2.72 2.115Z"},"children":[]}]
  });
};
Bsi5CircleFill.displayName = 'Bsi5CircleFill';
export default Bsi5CircleFill;
export { Bsi5CircleFill };