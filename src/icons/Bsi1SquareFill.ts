// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface Bsi1SquareFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const Bsi1SquareFill: Bsi1SquareFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: '1-square-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"},"children":[]}]
  });
};
Bsi1SquareFill.displayName = 'Bsi1SquareFill';
export default Bsi1SquareFill;
export { Bsi1SquareFill };