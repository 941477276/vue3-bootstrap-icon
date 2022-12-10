// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCompassFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCompassFill: BsiCompassFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'compass-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"},"children":[]}]
  });
};
BsiCompassFill.displayName = 'BsiCompassFill';
export default BsiCompassFill;
export { BsiCompassFill };