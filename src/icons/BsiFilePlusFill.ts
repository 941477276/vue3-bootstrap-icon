// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFilePlusFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFilePlusFill: BsiFilePlusFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'file-plus-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z"},"children":[]}]
  });
};
BsiFilePlusFill.displayName = 'BsiFilePlusFill';
export default BsiFilePlusFill;
export { BsiFilePlusFill };