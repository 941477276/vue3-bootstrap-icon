// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSkipForwardCircleFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSkipForwardCircleFill: BsiSkipForwardCircleFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'skip-forward-circle-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L7.5 8.972V10.5a.5.5 0 0 0 .79.407L11 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L8.29 5.093a.5.5 0 0 0-.79.407v1.528L4.79 5.093z"},"children":[]}]
  });
};
BsiSkipForwardCircleFill.displayName = 'BsiSkipForwardCircleFill';
export default BsiSkipForwardCircleFill;
export { BsiSkipForwardCircleFill };