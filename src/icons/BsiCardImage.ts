// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiCardImageType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiCardImage: BsiCardImageType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'card-image',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"},"children":[]}]
  });
};
BsiCardImage.displayName = 'BsiCardImage';
export default BsiCardImage;
export { BsiCardImage };