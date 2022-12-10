// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiTypeUnderlineType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiTypeUnderline: BsiTypeUnderlineType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'type-underline',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57-1.709 0-2.687-1.08-2.687-2.57V3.136zM12.5 15h-9v-1h9v1z"},"children":[]}]
  });
};
BsiTypeUnderline.displayName = 'BsiTypeUnderline';
export default BsiTypeUnderline;
export { BsiTypeUnderline };