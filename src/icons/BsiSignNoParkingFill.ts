// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSignNoParkingFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSignNoParkingFill: BsiSignNoParkingFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'sign-no-parking-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M13.292 14A8 8 0 0 1 2 2.707l3.5 3.5V12h1.283V9.164h1.674L13.292 14Zm.708-.708-4.37-4.37C10.5 8.524 11 7.662 11 6.587c0-1.482-.955-2.584-2.538-2.584H5.5v.79L2.708 2.002A8 8 0 0 1 14 13.293Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.777 7.485v.59h.59l-.59-.59Zm1.949.535L6.777 6.07v-.966H8.27c.893 0 1.419.539 1.419 1.482 0 .769-.35 1.273-.963 1.433Z"},"children":[]}]
  });
};
BsiSignNoParkingFill.displayName = 'BsiSignNoParkingFill';
export default BsiSignNoParkingFill;
export { BsiSignNoParkingFill };