// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface Bsi4CircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const Bsi4CircleFill: Bsi4CircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: '4-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z"},"children":[]}]
  });
};
Bsi4CircleFill.displayName = 'Bsi4CircleFill';
export default Bsi4CircleFill;
export { Bsi4CircleFill };