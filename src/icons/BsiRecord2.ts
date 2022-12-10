// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiRecord2Type extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiRecord2: BsiRecord2Type = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'record2',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"},"children":[]}]
  });
};
BsiRecord2.displayName = 'BsiRecord2';
export default BsiRecord2;
export { BsiRecord2 };