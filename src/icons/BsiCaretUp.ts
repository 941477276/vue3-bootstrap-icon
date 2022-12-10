// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCaretUpType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCaretUp: BsiCaretUpType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'caret-up',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"},"children":[]}]
  });
};
BsiCaretUp.displayName = 'BsiCaretUp';
export default BsiCaretUp;
export { BsiCaretUp };