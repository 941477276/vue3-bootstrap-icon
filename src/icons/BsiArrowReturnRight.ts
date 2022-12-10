// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiArrowReturnRightType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiArrowReturnRight: BsiArrowReturnRightType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'arrow-return-right',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"fill-rule":"evenodd","d":"M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"},"children":[]}]
  });
};
BsiArrowReturnRight.displayName = 'BsiArrowReturnRight';
export default BsiArrowReturnRight;
export { BsiArrowReturnRight };