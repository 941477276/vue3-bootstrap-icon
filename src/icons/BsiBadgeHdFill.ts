// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBadgeHdFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBadgeHdFill: BsiBadgeHdFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'badge-hd-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M10.53 5.968h-.843v4.06h.843c1.117 0 1.622-.667 1.622-2.02 0-1.354-.51-2.04-1.622-2.04z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm5.396 3.001V11H6.209V8.43H3.687V11H2.5V5.001h1.187v2.44h2.522V5h1.187zM8.5 11V5.001h2.188c1.824 0 2.685 1.09 2.685 2.984C13.373 9.893 12.5 11 10.69 11H8.5z"},"children":[]}]
  });
};
BsiBadgeHdFill.displayName = 'BsiBadgeHdFill';
export default BsiBadgeHdFill;
export { BsiBadgeHdFill };