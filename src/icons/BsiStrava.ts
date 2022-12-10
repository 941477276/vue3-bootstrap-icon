// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiStravaType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiStrava: BsiStravaType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'strava',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.731 0 2 9.125h2.788L6.73 5.497l1.93 3.628h2.766L6.731 0zm4.694 9.125-1.372 2.756L8.66 9.125H6.547L10.053 16l3.484-6.875h-2.112z"},"children":[]}]
  });
};
BsiStrava.displayName = 'BsiStrava';
export default BsiStrava;
export { BsiStrava };