// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPauseBtnFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPauseBtnFill: BsiPauseBtnFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'pause-btn-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.25-7C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"},"children":[]}]
  });
};
BsiPauseBtnFill.displayName = 'BsiPauseBtnFill';
export default BsiPauseBtnFill;
export { BsiPauseBtnFill };