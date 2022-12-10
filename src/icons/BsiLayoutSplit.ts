// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiLayoutSplitType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiLayoutSplit: BsiLayoutSplitType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'layout-split',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm8.5-1v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8.5zm-1 0H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5V2z"},"children":[]}]
  });
};
BsiLayoutSplit.displayName = 'BsiLayoutSplit';
export default BsiLayoutSplit;
export { BsiLayoutSplit };