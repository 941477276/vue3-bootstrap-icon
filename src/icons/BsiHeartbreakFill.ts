// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiHeartbreakFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiHeartbreakFill: BsiHeartbreakFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'heartbreak-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586ZM7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77Z"},"children":[]}]
  });
};
BsiHeartbreakFill.displayName = 'BsiHeartbreakFill';
export default BsiHeartbreakFill;
export { BsiHeartbreakFill };