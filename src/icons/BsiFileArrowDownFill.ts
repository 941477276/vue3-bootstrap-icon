// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileArrowDownFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileArrowDownFill: BsiFileArrowDownFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-arrow-down-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"},"children":[]}]
  });
};
BsiFileArrowDownFill.displayName = 'BsiFileArrowDownFill';
export default BsiFileArrowDownFill;
export { BsiFileArrowDownFill };