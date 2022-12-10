// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCalendarEventFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCalendarEventFill: BsiCalendarEventFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'calendar-event-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"},"children":[]}]
  });
};
BsiCalendarEventFill.displayName = 'BsiCalendarEventFill';
export default BsiCalendarEventFill;
export { BsiCalendarEventFill };