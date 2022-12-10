// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPieChartFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPieChartFill: BsiPieChartFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'pie-chart-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"},"children":[]}]
  });
};
BsiPieChartFill.displayName = 'BsiPieChartFill';
export default BsiPieChartFill;
export { BsiPieChartFill };