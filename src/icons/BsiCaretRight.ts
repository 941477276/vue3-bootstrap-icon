// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCaretRightType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCaretRight: BsiCaretRightType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'caret-right',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"},"children":[]}]
  });
};
BsiCaretRight.displayName = 'BsiCaretRight';
export default BsiCaretRight;
export { BsiCaretRight };