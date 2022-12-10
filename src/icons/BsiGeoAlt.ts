// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiGeoAltType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiGeoAlt: BsiGeoAltType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'geo-alt',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"},"children":[]}]
  });
};
BsiGeoAlt.displayName = 'BsiGeoAlt';
export default BsiGeoAlt;
export { BsiGeoAlt };