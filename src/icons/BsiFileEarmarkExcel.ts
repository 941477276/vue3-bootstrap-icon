// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileEarmarkExcelType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileEarmarkExcel: BsiFileEarmarkExcelType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-earmark-excel',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"},"children":[]}]
  });
};
BsiFileEarmarkExcel.displayName = 'BsiFileEarmarkExcel';
export default BsiFileEarmarkExcel;
export { BsiFileEarmarkExcel };