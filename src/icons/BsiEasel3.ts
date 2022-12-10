// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiEasel3Type extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiEasel3: BsiEasel3Type = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'easel3',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M8.5 13.134V12h5a1.5 1.5 0 0 0 1.5-1.5V2h.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H1v8.5A1.5 1.5 0 0 0 2.5 12h5v1.134a1 1 0 1 0 1 0ZM2 2v8.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V2H2Z"},"children":[]}]
  });
};
BsiEasel3.displayName = 'BsiEasel3';
export default BsiEasel3;
export { BsiEasel3 };