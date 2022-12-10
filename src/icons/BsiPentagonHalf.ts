// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPentagonHalfType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPentagonHalf: BsiPentagonHalfType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'pentagon-half',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"m8 1.288 6.578 5.345a.5.5 0 0 1 .161.539l-2.362 7.479a.5.5 0 0 1-.476.349H8V1.288Zm7.898 5.536a.5.5 0 0 0-.162-.538L8.316.256a.5.5 0 0 0-.631 0L.264 6.286a.5.5 0 0 0-.162.538l2.788 8.827a.5.5 0 0 0 .476.349h9.268a.5.5 0 0 0 .476-.35l2.788-8.826Z"},"children":[]}]
  });
};
BsiPentagonHalf.displayName = 'BsiPentagonHalf';
export default BsiPentagonHalf;
export { BsiPentagonHalf };