// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChatRightHeartFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChatRightHeartFill: BsiChatRightHeartFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chat-right-heart-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2ZM8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"},"children":[]}]
  });
};
BsiChatRightHeartFill.displayName = 'BsiChatRightHeartFill';
export default BsiChatRightHeartFill;
export { BsiChatRightHeartFill };