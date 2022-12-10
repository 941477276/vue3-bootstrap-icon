// src/icons/BsiThreeDots.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiThreeDots = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "three-dots",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" }, "children": [] }]
  });
};
BsiThreeDots.displayName = "BsiThreeDots";
var BsiThreeDots_default = BsiThreeDots;
export {
  BsiThreeDots,
  BsiThreeDots_default as default
};
