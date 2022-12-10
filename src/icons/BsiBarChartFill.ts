// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBarChartFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBarChartFill: BsiBarChartFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'bar-chart-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"},"children":[]}]
  });
};
BsiBarChartFill.displayName = 'BsiBarChartFill';
export default BsiBarChartFill;
export { BsiBarChartFill };