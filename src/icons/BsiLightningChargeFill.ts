// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiLightningChargeFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiLightningChargeFill: BsiLightningChargeFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'lightning-charge-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"},"children":[]}]
  });
};
BsiLightningChargeFill.displayName = 'BsiLightningChargeFill';
export default BsiLightningChargeFill;
export { BsiLightningChargeFill };