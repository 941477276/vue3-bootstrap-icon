// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBookmarkPlusFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBookmarkPlusFill: BsiBookmarkPlusFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'bookmark-plus-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"},"children":[]}]
  });
};
BsiBookmarkPlusFill.displayName = 'BsiBookmarkPlusFill';
export default BsiBookmarkPlusFill;
export { BsiBookmarkPlusFill };