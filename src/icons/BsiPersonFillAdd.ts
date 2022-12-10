// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiPersonFillAddType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiPersonFillAdd: BsiPersonFillAddType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'person-fill-add',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"},"children":[]}]
  });
};
BsiPersonFillAdd.displayName = 'BsiPersonFillAdd';
export default BsiPersonFillAdd;
export { BsiPersonFillAdd };