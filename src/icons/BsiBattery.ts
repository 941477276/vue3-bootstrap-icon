// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBatteryType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBattery: BsiBatteryType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'battery',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2zm14 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"},"children":[]}]
  });
};
BsiBattery.displayName = 'BsiBattery';
export default BsiBattery;
export { BsiBattery };