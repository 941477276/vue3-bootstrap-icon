// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSearchHeartType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSearchHeart: BsiSearchHeartType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'search-heart',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"},"children":[]}]
  });
};
BsiSearchHeart.displayName = 'BsiSearchHeart';
export default BsiSearchHeart;
export { BsiSearchHeart };