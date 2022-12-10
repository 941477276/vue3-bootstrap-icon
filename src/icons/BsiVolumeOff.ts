// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiVolumeOffType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiVolumeOff: BsiVolumeOffType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'volume-off',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM10 5.04 8.312 6.39A.5.5 0 0 1 8 6.5H6v3h2a.5.5 0 0 1 .312.11L10 10.96V5.04z"},"children":[]}]
  });
};
BsiVolumeOff.displayName = 'BsiVolumeOff';
export default BsiVolumeOff;
export { BsiVolumeOff };