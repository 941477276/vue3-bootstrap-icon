// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiTabletFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiTabletFill: BsiTabletFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'tablet-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"},"children":[]}]
  });
};
BsiTabletFill.displayName = 'BsiTabletFill';
export default BsiTabletFill;
export { BsiTabletFill };