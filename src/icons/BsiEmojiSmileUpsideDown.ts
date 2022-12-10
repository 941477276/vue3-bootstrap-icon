// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiEmojiSmileUpsideDownType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiEmojiSmileUpsideDown: BsiEmojiSmileUpsideDownType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'emoji-smile-upside-down',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5z"},"children":[]}]
  });
};
BsiEmojiSmileUpsideDown.displayName = 'BsiEmojiSmileUpsideDown';
export default BsiEmojiSmileUpsideDown;
export { BsiEmojiSmileUpsideDown };