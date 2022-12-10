// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPowerType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPower: BsiPowerType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'power',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.5 1v7h1V1h-1z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"},"children":[]}]
  });
};
BsiPower.displayName = 'BsiPower';
export default BsiPower;
export { BsiPower };