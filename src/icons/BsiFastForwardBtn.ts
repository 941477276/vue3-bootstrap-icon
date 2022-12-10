// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFastForwardBtnType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFastForwardBtn: BsiFastForwardBtnType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'fast-forward-btn',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8.79 5.093A.5.5 0 0 0 8 5.5v1.886L4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L8 8.614V10.5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4Z"},"children":[]}]
  });
};
BsiFastForwardBtn.displayName = 'BsiFastForwardBtn';
export default BsiFastForwardBtn;
export { BsiFastForwardBtn };