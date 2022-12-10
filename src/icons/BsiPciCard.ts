// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPciCardType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPciCard: BsiPciCardType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'pci-card',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 0h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1Z"},"children":[]}]
  });
};
BsiPciCard.displayName = 'BsiPciCard';
export default BsiPciCard;
export { BsiPciCard };