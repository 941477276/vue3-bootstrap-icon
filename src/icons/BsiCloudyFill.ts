// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCloudyFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCloudyFill: BsiCloudyFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'cloudy-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M13.405 7.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 13H13a3 3 0 0 0 .405-5.973z"},"children":[]}]
  });
};
BsiCloudyFill.displayName = 'BsiCloudyFill';
export default BsiCloudyFill;
export { BsiCloudyFill };