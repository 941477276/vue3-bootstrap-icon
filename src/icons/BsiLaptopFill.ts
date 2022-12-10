// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiLaptopFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiLaptopFill: BsiLaptopFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'laptop-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"},"children":[]}]
  });
};
BsiLaptopFill.displayName = 'BsiLaptopFill';
export default BsiLaptopFill;
export { BsiLaptopFill };