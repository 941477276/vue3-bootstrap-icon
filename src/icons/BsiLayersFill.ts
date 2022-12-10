// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiLayersFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiLayersFill: BsiLayersFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'layers-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z"},"children":[]}]
  });
};
BsiLayersFill.displayName = 'BsiLayersFill';
export default BsiLayersFill;
export { BsiLayersFill };