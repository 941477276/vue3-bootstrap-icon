// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowUpLeftSquareFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowUpLeftSquareFill: BsiArrowUpLeftSquareFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-up-left-square-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm8.096 10.803L6 6.707v2.768a.5.5 0 0 1-1 0V5.5a.5.5 0 0 1 .5-.5h3.975a.5.5 0 1 1 0 1H6.707l4.096 4.096a.5.5 0 1 1-.707.707z"},"children":[]}]
  });
};
BsiArrowUpLeftSquareFill.displayName = 'BsiArrowUpLeftSquareFill';
export default BsiArrowUpLeftSquareFill;
export { BsiArrowUpLeftSquareFill };