// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiParagraphType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiParagraph: BsiParagraphType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'paragraph',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z"},"children":[]}]
  });
};
BsiParagraph.displayName = 'BsiParagraph';
export default BsiParagraph;
export { BsiParagraph };