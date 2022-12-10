// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPentagonFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPentagonFill: BsiPentagonFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'pentagon-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.685.256a.5.5 0 0 1 .63 0l7.421 6.03a.5.5 0 0 1 .162.538l-2.788 8.827a.5.5 0 0 1-.476.349H3.366a.5.5 0 0 1-.476-.35L.102 6.825a.5.5 0 0 1 .162-.538l7.42-6.03Z"},"children":[]}]
  });
};
BsiPentagonFill.displayName = 'BsiPentagonFill';
export default BsiPentagonFill;
export { BsiPentagonFill };