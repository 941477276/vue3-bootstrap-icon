// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPersonFillCheckType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPersonFillCheck: BsiPersonFillCheckType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'person-fill-check',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"},"children":[]}]
  });
};
BsiPersonFillCheck.displayName = 'BsiPersonFillCheck';
export default BsiPersonFillCheck;
export { BsiPersonFillCheck };