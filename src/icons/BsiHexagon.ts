// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiHexagonType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiHexagon: BsiHexagonType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'hexagon',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"},"children":[]}]
  });
};
BsiHexagon.displayName = 'BsiHexagon';
export default BsiHexagon;
export { BsiHexagon };