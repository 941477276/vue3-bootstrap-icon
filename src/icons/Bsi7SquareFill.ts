// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface Bsi7SquareFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const Bsi7SquareFill: Bsi7SquareFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: '7-square-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm3.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z"},"children":[]}]
  });
};
Bsi7SquareFill.displayName = 'Bsi7SquareFill';
export default Bsi7SquareFill;
export { Bsi7SquareFill };