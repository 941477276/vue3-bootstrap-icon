// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiInputCursorType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiInputCursor: BsiInputCursorType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'input-cursor',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M10 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4v1zM6 5V4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M8 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13A.5.5 0 0 1 8 1z"},"children":[]}]
  });
};
BsiInputCursor.displayName = 'BsiInputCursor';
export default BsiInputCursor;
export { BsiInputCursor };