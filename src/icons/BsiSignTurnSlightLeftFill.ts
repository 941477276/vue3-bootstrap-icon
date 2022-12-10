// this file is generate by ../../scripts/generate.js
// do not edit manually

import {
  FunctionalComponent,
  createVNode
} from 'vue';
import BsIcon, { BsIconProps } from '../components/BsIcon';

export interface BsiSignTurnSlightLeftFillType extends FunctionalComponent<BsIconProps> {
  displayName: string;
};

// define icon component
const BsiSignTurnSlightLeftFill: BsiSignTurnSlightLeftFillType = function (props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    // ...ctx.attrs,
    iconName: 'sign-turn-slight-left-fill',
    isFilled: true,
    viewBox: props.viewBox || '0 0 16 16',
    svgChildrenVDom: [{"nodeName":"path","nodeType":1,"attrs":{"d":"M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM6.864 8.368a.25.25 0 0 1-.451-.039l-1.06-2.882a.25.25 0 0 1 .192-.333l3.026-.523a.25.25 0 0 1 .26.371l-.667 1.154.621.373A2.5 2.5 0 0 1 10 8.632V11H9V8.632a1.5 1.5 0 0 0-.728-1.286l-.607-.364-.8 1.386Z"},"children":[]}]
  });
};
BsiSignTurnSlightLeftFill.displayName = 'BsiSignTurnSlightLeftFill';
export default BsiSignTurnSlightLeftFill;
export { BsiSignTurnSlightLeftFill };