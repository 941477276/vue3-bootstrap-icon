// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSignIntersectionYFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSignIntersectionYFill: BsiSignIntersectionYFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'sign-intersection-y-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435Zm1.443 4.762 1.014 1.106L8.75 8.83V12h-1.5V8.83L4.493 6.303l1.014-1.106L8 7.483l2.493-2.286Z"},"children":[]}]
  });
};
BsiSignIntersectionYFill.displayName = 'BsiSignIntersectionYFill';
export default BsiSignIntersectionYFill;
export { BsiSignIntersectionYFill };