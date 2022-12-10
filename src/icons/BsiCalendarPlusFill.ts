// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCalendarPlusFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCalendarPlusFill: BsiCalendarPlusFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'calendar-plus-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0z"},"children":[]}]
  });
};
BsiCalendarPlusFill.displayName = 'BsiCalendarPlusFill';
export default BsiCalendarPlusFill;
export { BsiCalendarPlusFill };