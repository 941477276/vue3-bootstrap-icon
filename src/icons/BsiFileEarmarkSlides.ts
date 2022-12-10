// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFileEarmarkSlidesType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFileEarmarkSlides: BsiFileEarmarkSlidesType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-earmark-slides',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M5 6a.5.5 0 0 0-.496.438l-.5 4A.5.5 0 0 0 4.5 11h3v2.016c-.863.055-1.5.251-1.5.484 0 .276.895.5 2 .5s2-.224 2-.5c0-.233-.637-.429-1.5-.484V11h3a.5.5 0 0 0 .496-.562l-.5-4A.5.5 0 0 0 11 6H5zm2 3.78V7.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 9.778z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"},"children":[]}]
  });
};
BsiFileEarmarkSlides.displayName = 'BsiFileEarmarkSlides';
export default BsiFileEarmarkSlides;
export { BsiFileEarmarkSlides };