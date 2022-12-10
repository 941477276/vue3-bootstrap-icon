// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSkipStartCircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSkipStartCircleFill: BsiSkipStartCircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'skip-start-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM9.71 5.093 7 7.028V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V8.972l2.71 1.935a.5.5 0 0 0 .79-.407v-5a.5.5 0 0 0-.79-.407z"},"children":[]}]
  });
};
BsiSkipStartCircleFill.displayName = 'BsiSkipStartCircleFill';
export default BsiSkipStartCircleFill;
export { BsiSkipStartCircleFill };