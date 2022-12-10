// src/icons/BsiGripHorizontal.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiGripHorizontal = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "grip-horizontal",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" }, "children": [] }]
  });
};
BsiGripHorizontal.displayName = "BsiGripHorizontal";
var BsiGripHorizontal_default = BsiGripHorizontal;
export {
  BsiGripHorizontal,
  BsiGripHorizontal_default as default
};
