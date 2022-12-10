// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiRecord2FillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiRecord2Fill: BsiRecord2FillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'record2-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"},"children":[]}]
  });
};
BsiRecord2Fill.displayName = 'BsiRecord2Fill';
export default BsiRecord2Fill;
export { BsiRecord2Fill };