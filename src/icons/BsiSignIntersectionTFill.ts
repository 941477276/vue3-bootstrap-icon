// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSignIntersectionTFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSignIntersectionTFill: BsiSignIntersectionTFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'sign-intersection-t-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM5 5h6v1.5H8.75V12h-1.5V6.5H5V5Z"},"children":[]}]
  });
};
BsiSignIntersectionTFill.displayName = 'BsiSignIntersectionTFill';
export default BsiSignIntersectionTFill;
export { BsiSignIntersectionTFill };