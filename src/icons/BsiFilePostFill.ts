// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFilePostFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFilePostFill: BsiFilePostFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-post-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM4.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5z"},"children":[]}]
  });
};
BsiFilePostFill.displayName = 'BsiFilePostFill';
export default BsiFilePostFill;
export { BsiFilePostFill };