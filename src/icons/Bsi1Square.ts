// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface Bsi1SquareType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const Bsi1Square: Bsi1SquareType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: '1-square',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z"},"children":[]}]
  });
};
Bsi1Square.displayName = 'Bsi1Square';
export default Bsi1Square;
export { Bsi1Square };