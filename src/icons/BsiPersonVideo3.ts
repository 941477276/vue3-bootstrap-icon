// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPersonVideo3Type extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPersonVideo3: BsiPersonVideo3Type = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'person-video3',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z"},"children":[]}]
  });
};
BsiPersonVideo3.displayName = 'BsiPersonVideo3';
export default BsiPersonVideo3;
export { BsiPersonVideo3 };