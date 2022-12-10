// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSkipForwardBtnFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSkipForwardBtnFill: BsiSkipForwardBtnFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'skip-forward-btn-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2Zm4.79-6.907A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L7.5 8.972V10.5a.5.5 0 0 0 .79.407L11 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L8.29 5.093a.5.5 0 0 0-.79.407v1.528L4.79 5.093Z"},"children":[]}]
  });
};
BsiSkipForwardBtnFill.displayName = 'BsiSkipForwardBtnFill';
export default BsiSkipForwardBtnFill;
export { BsiSkipForwardBtnFill };