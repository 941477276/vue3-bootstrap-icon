// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSignIntersectionSideType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSignIntersectionSide: BsiSignIntersectionSideType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'sign-intersection-side',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.25 4v8h1.5V8.75H11v-1.5H7.75V4h-1.5Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435Zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z"},"children":[]}]
  });
};
BsiSignIntersectionSide.displayName = 'BsiSignIntersectionSide';
export default BsiSignIntersectionSide;
export { BsiSignIntersectionSide };