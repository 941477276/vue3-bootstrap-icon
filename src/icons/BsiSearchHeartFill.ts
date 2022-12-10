// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSearchHeartFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSearchHeartFill: BsiSearchHeartFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'search-heart-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"},"children":[]}]
  });
};
BsiSearchHeartFill.displayName = 'BsiSearchHeartFill';
export default BsiSearchHeartFill;
export { BsiSearchHeartFill };