// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiRewindBtnFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiRewindBtnFill: BsiRewindBtnFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'rewind-btn-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2Zm7.729 1.055A.5.5 0 0 1 8 5.5v1.886l3.21-2.293A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8 8.614V10.5a.5.5 0 0 1-.79.407l-3.5-2.5a.5.5 0 0 1 0-.814l3.5-2.5a.5.5 0 0 1 .519-.038Z"},"children":[]}]
  });
};
BsiRewindBtnFill.displayName = 'BsiRewindBtnFill';
export default BsiRewindBtnFill;
export { BsiRewindBtnFill };