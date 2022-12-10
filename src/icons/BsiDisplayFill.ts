// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiDisplayFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiDisplayFill: BsiDisplayFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'display-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6 12c0 .667-.083 1.167-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75c-.167-.333-.25-.833-.25-1.5h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h4z"},"children":[]}]
  });
};
BsiDisplayFill.displayName = 'BsiDisplayFill';
export default BsiDisplayFill;
export { BsiDisplayFill };