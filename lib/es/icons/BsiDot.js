// src/icons/BsiDot.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDot = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "dot",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }, "children": [] }]
  });
};
BsiDot.displayName = "BsiDot";
var BsiDot_default = BsiDot;
export {
  BsiDot,
  BsiDot_default as default
};
