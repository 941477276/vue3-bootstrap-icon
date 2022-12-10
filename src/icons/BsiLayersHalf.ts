// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiLayersHalfType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiLayersHalf: BsiLayersHalfType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'layers-half',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z"},"children":[]}]
  });
};
BsiLayersHalf.displayName = 'BsiLayersHalf';
export default BsiLayersHalf;
export { BsiLayersHalf };