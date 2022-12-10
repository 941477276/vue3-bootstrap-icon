// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface Bsi7CircleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const Bsi7Circle: Bsi7CircleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: '7-circle',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z"},"children":[]}]
  });
};
Bsi7Circle.displayName = 'Bsi7Circle';
export default Bsi7Circle;
export { Bsi7Circle };