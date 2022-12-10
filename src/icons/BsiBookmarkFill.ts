// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBookmarkFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBookmarkFill: BsiBookmarkFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'bookmark-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"},"children":[]}]
  });
};
BsiBookmarkFill.displayName = 'BsiBookmarkFill';
export default BsiBookmarkFill;
export { BsiBookmarkFill };