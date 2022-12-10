// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCheckLgType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCheckLg: BsiCheckLgType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'check-lg',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"},"children":[]}]
  });
};
BsiCheckLg.displayName = 'BsiCheckLg';
export default BsiCheckLg;
export { BsiCheckLg };