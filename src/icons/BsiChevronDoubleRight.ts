// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChevronDoubleRightType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChevronDoubleRight: BsiChevronDoubleRightType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chevron-double-right',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"},"children":[]}]
  });
};
BsiChevronDoubleRight.displayName = 'BsiChevronDoubleRight';
export default BsiChevronDoubleRight;
export { BsiChevronDoubleRight };