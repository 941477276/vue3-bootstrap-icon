// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChatRightFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChatRightFill: BsiChatRightFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chat-right-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"},"children":[]}]
  });
};
BsiChatRightFill.displayName = 'BsiChatRightFill';
export default BsiChatRightFill;
export { BsiChatRightFill };