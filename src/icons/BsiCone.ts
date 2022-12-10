// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiConeType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCone: BsiConeType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'cone',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.03 1.88c.252-1.01 1.688-1.01 1.94 0l2.905 11.62H14a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h2.125L7.03 1.88z"},"children":[]}]
  });
};
BsiCone.displayName = 'BsiCone';
export default BsiCone;
export { BsiCone };