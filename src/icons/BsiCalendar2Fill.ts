// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCalendar2FillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCalendar2Fill: BsiCalendar2FillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'calendar2-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5z"},"children":[]}]
  });
};
BsiCalendar2Fill.displayName = 'BsiCalendar2Fill';
export default BsiCalendar2Fill;
export { BsiCalendar2Fill };