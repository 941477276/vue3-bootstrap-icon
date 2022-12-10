// src/icons/BsiSkipStartFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSkipStartFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "skip-start-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z" }, "children": [] }]
  });
};
BsiSkipStartFill.displayName = "BsiSkipStartFill";
var BsiSkipStartFill_default = BsiSkipStartFill;
export {
  BsiSkipStartFill,
  BsiSkipStartFill_default as default
};
