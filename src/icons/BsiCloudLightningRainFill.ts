// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCloudLightningRainFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCloudLightningRainFill: BsiCloudLightningRainFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'cloud-lightning-rain-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"},"children":[]}]
  });
};
BsiCloudLightningRainFill.displayName = 'BsiCloudLightningRainFill';
export default BsiCloudLightningRainFill;
export { BsiCloudLightningRainFill };