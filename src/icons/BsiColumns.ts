// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiColumnsType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiColumns: BsiColumnsType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'columns',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2zm8.5 0v8H15V2H8.5zm0 9v3H15v-3H8.5zm-1-9H1v3h6.5V2zM1 14h6.5V6H1v8z"},"children":[]}]
  });
};
BsiColumns.displayName = 'BsiColumns';
export default BsiColumns;
export { BsiColumns };