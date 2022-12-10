// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBarChartLineType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBarChartLine: BsiBarChartLineType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'bar-chart-line',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"},"children":[]}]
  });
};
BsiBarChartLine.displayName = 'BsiBarChartLine';
export default BsiBarChartLine;
export { BsiBarChartLine };