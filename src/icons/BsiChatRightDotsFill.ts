// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChatRightDotsFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChatRightDotsFill: BsiChatRightDotsFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chat-right-dots-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"},"children":[]}]
  });
};
BsiChatRightDotsFill.displayName = 'BsiChatRightDotsFill';
export default BsiChatRightDotsFill;
export { BsiChatRightDotsFill };