// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSkipStartCircleType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSkipStartCircle: BsiSkipStartCircleType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'skip-start-circle',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M10.229 5.055a.5.5 0 0 0-.52.038L7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.271-.445z"},"children":[]}]
  });
};
BsiSkipStartCircle.displayName = 'BsiSkipStartCircle';
export default BsiSkipStartCircle;
export { BsiSkipStartCircle };