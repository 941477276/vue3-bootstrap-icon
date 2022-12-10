// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiGenderMaleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiGenderMale: BsiGenderMaleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'gender-male',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"},"children":[]}]
  });
};
BsiGenderMale.displayName = 'BsiGenderMale';
export default BsiGenderMale;
export { BsiGenderMale };