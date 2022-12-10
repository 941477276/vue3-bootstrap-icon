// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFilterCircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFilterCircleFill: BsiFilterCircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'filter-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"},"children":[]}]
  });
};
BsiFilterCircleFill.displayName = 'BsiFilterCircleFill';
export default BsiFilterCircleFill;
export { BsiFilterCircleFill };