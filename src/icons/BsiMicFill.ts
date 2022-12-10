// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiMicFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiMicFill: BsiMicFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'mic-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"},"children":[]}]
  });
};
BsiMicFill.displayName = 'BsiMicFill';
export default BsiMicFill;
export { BsiMicFill };