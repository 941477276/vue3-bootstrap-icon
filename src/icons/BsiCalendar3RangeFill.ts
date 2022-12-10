// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCalendar3RangeFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCalendar3RangeFill: BsiCalendar3RangeFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'calendar3-range-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zM0 8V3h16v2h-6a1 1 0 1 0 0 2h6v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4h6a1 1 0 1 0 0-2H0z"},"children":[]}]
  });
};
BsiCalendar3RangeFill.displayName = 'BsiCalendar3RangeFill';
export default BsiCalendar3RangeFill;
export { BsiCalendar3RangeFill };