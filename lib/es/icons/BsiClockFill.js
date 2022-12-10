// src/icons/BsiClockFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiClockFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "clock-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" }, "children": [] }]
  });
};
BsiClockFill.displayName = "BsiClockFill";
var BsiClockFill_default = BsiClockFill;
export {
  BsiClockFill,
  BsiClockFill_default as default
};
