// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileExcelFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileExcelFill: BsiFileExcelFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-excel-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5.884 4.68 8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 1 1 .768-.64z"},"children":[]}]
  });
};
BsiFileExcelFill.displayName = 'BsiFileExcelFill';
export default BsiFileExcelFill;
export { BsiFileExcelFill };