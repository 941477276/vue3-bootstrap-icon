// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCircleSquareType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCircleSquare: BsiCircleSquareType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'circle-square',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z"},"children":[]}]
  });
};
BsiCircleSquare.displayName = 'BsiCircleSquare';
export default BsiCircleSquare;
export { BsiCircleSquare };