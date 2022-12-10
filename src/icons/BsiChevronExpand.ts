// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiChevronExpandType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiChevronExpand: BsiChevronExpandType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'chevron-expand',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"},"children":[]}]
  });
};
BsiChevronExpand.displayName = 'BsiChevronExpand';
export default BsiChevronExpand;
export { BsiChevronExpand };