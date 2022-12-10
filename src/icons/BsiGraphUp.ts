// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiGraphUpType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiGraphUp: BsiGraphUpType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'graph-up',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"},"children":[]}]
  });
};
BsiGraphUp.displayName = 'BsiGraphUp';
export default BsiGraphUp;
export { BsiGraphUp };