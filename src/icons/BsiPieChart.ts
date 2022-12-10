// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPieChartType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPieChart: BsiPieChartType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'pie-chart',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793V1.018zm1 0V7.5h6.482A7.001 7.001 0 0 0 8.5 1.018zM14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"},"children":[]}]
  });
};
BsiPieChart.displayName = 'BsiPieChart';
export default BsiPieChart;
export { BsiPieChart };