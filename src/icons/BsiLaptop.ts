// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiLaptopType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiLaptop: BsiLaptopType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'laptop',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"},"children":[]}]
  });
};
BsiLaptop.displayName = 'BsiLaptop';
export default BsiLaptop;
export { BsiLaptop };