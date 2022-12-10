// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPaperclipType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPaperclip: BsiPaperclipType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'paperclip',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"},"children":[]}]
  });
};
BsiPaperclip.displayName = 'BsiPaperclip';
export default BsiPaperclip;
export { BsiPaperclip };