// src/icons/BsiSignIntersectionFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSignIntersectionFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "sign-intersection-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7.25 4h1.5v3.25H12v1.5H8.75V12h-1.5V8.75H4v-1.5h3.25V4Z" }, "children": [] }]
  });
};
BsiSignIntersectionFill.displayName = "BsiSignIntersectionFill";
var BsiSignIntersectionFill_default = BsiSignIntersectionFill;
export {
  BsiSignIntersectionFill,
  BsiSignIntersectionFill_default as default
};
