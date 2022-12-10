// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCaretDownType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCaretDown: BsiCaretDownType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'caret-down',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"},"children":[]}]
  });
};
BsiCaretDown.displayName = 'BsiCaretDown';
export default BsiCaretDown;
export { BsiCaretDown };