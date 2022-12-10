// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileEarmarkLock2FillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileEarmarkLock2Fill: BsiFileEarmarkLock2FillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-earmark-lock2-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7 7a1 1 0 0 1 2 0v1H7V7z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0z"},"children":[]}]
  });
};
BsiFileEarmarkLock2Fill.displayName = 'BsiFileEarmarkLock2Fill';
export default BsiFileEarmarkLock2Fill;
export { BsiFileEarmarkLock2Fill };