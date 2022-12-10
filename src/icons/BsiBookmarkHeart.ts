// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBookmarkHeartType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBookmarkHeart: BsiBookmarkHeartType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'bookmark-heart',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"},"children":[]}]
  });
};
BsiBookmarkHeart.displayName = 'BsiBookmarkHeart';
export default BsiBookmarkHeart;
export { BsiBookmarkHeart };