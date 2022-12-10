// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBox2FillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBox2Fill: BsiBox2FillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'box2-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z"},"children":[]}]
  });
};
BsiBox2Fill.displayName = 'BsiBox2Fill';
export default BsiBox2Fill;
export { BsiBox2Fill };