// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiTypeItalicType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiTypeItalic: BsiTypeItalicType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'type-italic',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"},"children":[]}]
  });
};
BsiTypeItalic.displayName = 'BsiTypeItalic';
export default BsiTypeItalic;
export { BsiTypeItalic };