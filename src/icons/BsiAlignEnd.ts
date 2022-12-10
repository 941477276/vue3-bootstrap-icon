// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiAlignEndType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiAlignEnd: BsiAlignEndType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'align-end',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"},"children":[]}]
  });
};
BsiAlignEnd.displayName = 'BsiAlignEnd';
export default BsiAlignEnd;
export { BsiAlignEnd };