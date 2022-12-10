// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiBox2HeartType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiBox2Heart: BsiBox2HeartType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'box2-heart',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z"},"children":[]}]
  });
};
BsiBox2Heart.displayName = 'BsiBox2Heart';
export default BsiBox2Heart;
export { BsiBox2Heart };