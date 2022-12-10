// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChatRightDotsType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChatRightDots: BsiChatRightDotsType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chat-right-dots',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"},"children":[]}]
  });
};
BsiChatRightDots.displayName = 'BsiChatRightDots';
export default BsiChatRightDots;
export { BsiChatRightDots };