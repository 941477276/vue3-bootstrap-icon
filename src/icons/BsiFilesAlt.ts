// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiFilesAltType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiFilesAlt: BsiFilesAltType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'files-alt',
    isFilled: false,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M11 0H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2 2 2 0 0 0-2-2zm2 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1V3zM2 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2z"},"children":[]}]
  });
};
BsiFilesAlt.displayName = 'BsiFilesAlt';
export default BsiFilesAlt;
export { BsiFilesAlt };