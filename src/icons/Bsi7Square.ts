// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface Bsi7SquareType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const Bsi7Square: Bsi7SquareType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: '7-square',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"},"children":[]}]
  });
};
Bsi7Square.displayName = 'Bsi7Square';
export default Bsi7Square;
export { Bsi7Square };