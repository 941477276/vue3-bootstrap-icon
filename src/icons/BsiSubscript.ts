// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSubscriptType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSubscript: BsiSubscriptType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'subscript',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"m3.266 12.496.96-2.853H7.76l.96 2.853H10L6.62 3H5.38L2 12.496h1.266Zm2.748-8.063 1.419 4.23h-2.88l1.426-4.23h.035Zm6.132 7.203v-.075c0-.332.234-.618.619-.618.354 0 .618.256.618.58 0 .362-.271.649-.52.898l-1.788 1.832V15h3.59v-.958h-1.923v-.045l.973-1.04c.415-.438.867-.845.867-1.547 0-.8-.701-1.41-1.787-1.41-1.23 0-1.795.8-1.795 1.576v.06h1.146Z"},"children":[]}]
  });
};
BsiSubscript.displayName = 'BsiSubscript';
export default BsiSubscript;
export { BsiSubscript };