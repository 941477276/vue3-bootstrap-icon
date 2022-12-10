// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface Bsi4CircleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const Bsi4Circle: Bsi4CircleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: '4-circle',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"},"children":[]}]
  });
};
Bsi4Circle.displayName = 'Bsi4Circle';
export default Bsi4Circle;
export { Bsi4Circle };