// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiAlignBottomType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiAlignBottom: BsiAlignBottomType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'align-bottom',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"rect","nodeType":1,"attrs":{"width":"4","height":"12","x":"6","y":"1","rx":"1"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M1.5 14a.5.5 0 0 0 0 1v-1zm13 1a.5.5 0 0 0 0-1v1zm-13 0h13v-1h-13v1z"},"children":[]}]
  });
};
BsiAlignBottom.displayName = 'BsiAlignBottom';
export default BsiAlignBottom;
export { BsiAlignBottom };