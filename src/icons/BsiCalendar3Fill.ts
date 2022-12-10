// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCalendar3FillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCalendar3Fill: BsiCalendar3FillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'calendar3-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2H0zm0 1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3H0z"},"children":[]}]
  });
};
BsiCalendar3Fill.displayName = 'BsiCalendar3Fill';
export default BsiCalendar3Fill;
export { BsiCalendar3Fill };