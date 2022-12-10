// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileCheckFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileCheckFill: BsiFileCheckFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-check-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1.146 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"},"children":[]}]
  });
};
BsiFileCheckFill.displayName = 'BsiFileCheckFill';
export default BsiFileCheckFill;
export { BsiFileCheckFill };