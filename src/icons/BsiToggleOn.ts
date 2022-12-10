// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiToggleOnType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiToggleOn: BsiToggleOnType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'toggle-on',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"},"children":[]}]
  });
};
BsiToggleOn.displayName = 'BsiToggleOn';
export default BsiToggleOn;
export { BsiToggleOn };