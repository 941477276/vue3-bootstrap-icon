// src/icons/BsiLockFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLockFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "lock-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" }, "children": [] }]
  });
};
BsiLockFill.displayName = "BsiLockFill";
var BsiLockFill_default = BsiLockFill;
export {
  BsiLockFill,
  BsiLockFill_default as default
};
