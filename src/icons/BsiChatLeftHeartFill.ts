// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChatLeftHeartFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChatLeftHeartFill: BsiChatLeftHeartFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chat-left-heart-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"},"children":[]}]
  });
};
BsiChatLeftHeartFill.displayName = 'BsiChatLeftHeartFill';
export default BsiChatLeftHeartFill;
export { BsiChatLeftHeartFill };