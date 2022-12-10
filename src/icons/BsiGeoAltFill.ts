// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiGeoAltFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiGeoAltFill: BsiGeoAltFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'geo-alt-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"},"children":[]}]
  });
};
BsiGeoAltFill.displayName = 'BsiGeoAltFill';
export default BsiGeoAltFill;
export { BsiGeoAltFill };