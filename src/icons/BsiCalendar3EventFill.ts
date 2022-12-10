// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCalendar3EventFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCalendar3EventFill: BsiCalendar3EventFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'calendar3-event-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zM0 14V3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm12-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"},"children":[]}]
  });
};
BsiCalendar3EventFill.displayName = 'BsiCalendar3EventFill';
export default BsiCalendar3EventFill;
export { BsiCalendar3EventFill };