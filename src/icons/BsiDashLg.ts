// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDashLgType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDashLg: BsiDashLgType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'dash-lg',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"},"children":[]}]
  });
};
BsiDashLg.displayName = 'BsiDashLg';
export default BsiDashLg;
export { BsiDashLg };