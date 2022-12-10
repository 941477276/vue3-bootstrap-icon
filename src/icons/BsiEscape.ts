// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiEscapeType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiEscape: BsiEscapeType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'escape',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.538 1.02a.5.5 0 1 0-.076.998 6 6 0 1 1-6.445 6.444.5.5 0 0 0-.997.076A7 7 0 1 0 8.538 1.02Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.096 7.828a.5.5 0 0 0 .707-.707L2.707 2.025h2.768a.5.5 0 1 0 0-1H1.5a.5.5 0 0 0-.5.5V5.5a.5.5 0 0 0 1 0V2.732l5.096 5.096Z"},"children":[]}]
  });
};
BsiEscape.displayName = 'BsiEscape';
export default BsiEscape;
export { BsiEscape };