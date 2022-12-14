// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiClipboard2MinusType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiClipboard2Minus: BsiClipboard2MinusType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'clipboard2-minus',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M6 8a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6Z"},"children":[]}]
  });
};
BsiClipboard2Minus.displayName = 'BsiClipboard2Minus';
export default BsiClipboard2Minus;
export { BsiClipboard2Minus };