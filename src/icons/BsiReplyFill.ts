// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiReplyFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiReplyFill: BsiReplyFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'reply-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"},"children":[]}]
  });
};
BsiReplyFill.displayName = 'BsiReplyFill';
export default BsiReplyFill;
export { BsiReplyFill };