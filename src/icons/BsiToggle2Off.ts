// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiToggle2OffType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiToggle2Off: BsiToggle2OffType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'toggle2-off',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z"},"children":[]}]
  });
};
BsiToggle2Off.displayName = 'BsiToggle2Off';
export default BsiToggle2Off;
export { BsiToggle2Off };