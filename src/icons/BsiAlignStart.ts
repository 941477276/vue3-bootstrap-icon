// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiAlignStartType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiAlignStart: BsiAlignStartType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'align-start',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z"},"children":[]}]
  });
};
BsiAlignStart.displayName = 'BsiAlignStart';
export default BsiAlignStart;
export { BsiAlignStart };