// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileImageFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileImageFill: BsiFileImageFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-image-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M4 0h8a2 2 0 0 1 2 2v8.293l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm4.002 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"},"children":[]}]
  });
};
BsiFileImageFill.displayName = 'BsiFileImageFill';
export default BsiFileImageFill;
export { BsiFileImageFill };