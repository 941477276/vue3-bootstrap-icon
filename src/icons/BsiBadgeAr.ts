// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBadgeArType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBadgeAr: BsiBadgeArType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'badge-ar',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"m3.794 11 .47-1.542H6.27L6.739 11H8L5.996 5.001H4.607L2.595 11h1.2zm1.503-4.852.734 2.426h-1.52l.734-2.426h.052zm5.598-1.147H8.5V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9zm-1.222 2.87V5.933h1.05c.63 0 1.05.347 1.05.989 0 .633-.408.95-1.067.95H9.673z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"},"children":[]}]
  });
};
BsiBadgeAr.displayName = 'BsiBadgeAr';
export default BsiBadgeAr;
export { BsiBadgeAr };