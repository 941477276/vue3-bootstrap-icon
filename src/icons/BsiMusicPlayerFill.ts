// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiMusicPlayerFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiMusicPlayerFill: BsiMusicPlayerFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'music-player-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"},"children":[]},{"nodeName":"path","nodeType":1,"attrs":{"d":"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm1 2h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm3 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"},"children":[]}]
  });
};
BsiMusicPlayerFill.displayName = 'BsiMusicPlayerFill';
export default BsiMusicPlayerFill;
export { BsiMusicPlayerFill };