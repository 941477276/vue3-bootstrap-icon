// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiAppIndicatorType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiAppIndicator: BsiAppIndicatorType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'app-indicator',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"},"children":[]}]
  });
};
BsiAppIndicator.displayName = 'BsiAppIndicator';
export default BsiAppIndicator;
export { BsiAppIndicator };