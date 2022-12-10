// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiViewStackedType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiViewStacked: BsiViewStackedType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'view-stacked',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3z"},"children":[]}]
  });
};
BsiViewStacked.displayName = 'BsiViewStacked';
export default BsiViewStacked;
export { BsiViewStacked };