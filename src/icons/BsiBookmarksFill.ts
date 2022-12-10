// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBookmarksFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBookmarksFill: BsiBookmarksFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'bookmarks-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z"},"children":[]}]
  });
};
BsiBookmarksFill.displayName = 'BsiBookmarksFill';
export default BsiBookmarksFill;
export { BsiBookmarksFill };