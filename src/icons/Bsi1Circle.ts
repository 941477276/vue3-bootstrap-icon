// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface Bsi1CircleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const Bsi1Circle: Bsi1CircleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: '1-circle',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"},"children":[]}]
  });
};
Bsi1Circle.displayName = 'Bsi1Circle';
export default Bsi1Circle;
export { Bsi1Circle };