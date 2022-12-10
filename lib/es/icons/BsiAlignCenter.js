// src/icons/BsiAlignCenter.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiAlignCenter = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "align-center",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 1a.5.5 0 0 1 .5.5V6h-1V1.5A.5.5 0 0 1 8 1zm0 14a.5.5 0 0 1-.5-.5V10h1v4.5a.5.5 0 0 1-.5.5zM2 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7z" }, "children": [] }]
  });
};
BsiAlignCenter.displayName = "BsiAlignCenter";
var BsiAlignCenter_default = BsiAlignCenter;
export {
  BsiAlignCenter,
  BsiAlignCenter_default as default
};
