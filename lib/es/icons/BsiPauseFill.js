// src/icons/BsiPauseFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPauseFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "pause-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" }, "children": [] }]
  });
};
BsiPauseFill.displayName = "BsiPauseFill";
var BsiPauseFill_default = BsiPauseFill;
export {
  BsiPauseFill,
  BsiPauseFill_default as default
};
