// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBarChartLineFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBarChartLineFill: BsiBarChartLineFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'bar-chart-line-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"},"children":[]}]
  });
};
BsiBarChartLineFill.displayName = 'BsiBarChartLineFill';
export default BsiBarChartLineFill;
export { BsiBarChartLineFill };