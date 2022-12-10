// src/icons/BsiStopFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiStopFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "stop-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" }, "children": [] }]
  });
};
BsiStopFill.displayName = "BsiStopFill";
var BsiStopFill_default = BsiStopFill;
export {
  BsiStopFill,
  BsiStopFill_default as default
};
