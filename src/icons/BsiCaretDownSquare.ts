// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCaretDownSquareType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCaretDownSquare: BsiCaretDownSquareType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'caret-down-square',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"},"children":[]}]
  });
};
BsiCaretDownSquare.displayName = 'BsiCaretDownSquare';
export default BsiCaretDownSquare;
export { BsiCaretDownSquare };