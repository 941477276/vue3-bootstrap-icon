// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCaretDownSquareFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCaretDownSquareFill: BsiCaretDownSquareFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'caret-down-square-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z"},"children":[]}]
  });
};
BsiCaretDownSquareFill.displayName = 'BsiCaretDownSquareFill';
export default BsiCaretDownSquareFill;
export { BsiCaretDownSquareFill };