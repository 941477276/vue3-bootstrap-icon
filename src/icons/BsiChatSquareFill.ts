// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChatSquareFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChatSquareFill: BsiChatSquareFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chat-square-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"},"children":[]}]
  });
};
BsiChatSquareFill.displayName = 'BsiChatSquareFill';
export default BsiChatSquareFill;
export { BsiChatSquareFill };