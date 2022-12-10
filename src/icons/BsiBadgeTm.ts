// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBadgeTmType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBadgeTm: BsiBadgeTmType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'badge-tm',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5.295 11V5.995H7V5H2.403v.994h1.701V11h1.19zm3.397 0V7.01h.058l1.428 3.239h.773l1.42-3.24h.057V11H13.5V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H7.634V11h1.06z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"},"children":[]}]
  });
};
BsiBadgeTm.displayName = 'BsiBadgeTm';
export default BsiBadgeTm;
export { BsiBadgeTm };