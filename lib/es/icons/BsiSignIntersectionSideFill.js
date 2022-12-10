// src/icons/BsiSignIntersectionSideFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSignIntersectionSideFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "sign-intersection-side-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM6.25 4h1.5v3.25H11v1.5H7.75V12h-1.5V4Z" }, "children": [] }]
  });
};
BsiSignIntersectionSideFill.displayName = "BsiSignIntersectionSideFill";
var BsiSignIntersectionSideFill_default = BsiSignIntersectionSideFill;
export {
  BsiSignIntersectionSideFill,
  BsiSignIntersectionSideFill_default as default
};
