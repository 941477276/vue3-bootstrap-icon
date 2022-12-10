// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPipFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPipFill: BsiPipFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'pip-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm7 6h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z"},"children":[]}]
  });
};
BsiPipFill.displayName = 'BsiPipFill';
export default BsiPipFill;
export { BsiPipFill };