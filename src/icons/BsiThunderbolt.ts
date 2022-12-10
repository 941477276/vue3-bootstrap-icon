// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiThunderboltType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiThunderbolt: BsiThunderboltType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'thunderbolt',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-9Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M1 3a1 1 0 0 0-1 1v7.293A1 1 0 0 0 .293 12L2 13.707a1 1 0 0 0 .707.293h10.586a1 1 0 0 0 .707-.293L15.707 12a1 1 0 0 0 .293-.707V4a1 1 0 0 0-1-1H1Zm0 1h14v7.293L13.293 13H2.707L1 11.293V4Z"},"children":[]}]
  });
};
BsiThunderbolt.displayName = 'BsiThunderbolt';
export default BsiThunderbolt;
export { BsiThunderbolt };