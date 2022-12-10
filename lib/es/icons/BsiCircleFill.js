// src/icons/BsiCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "circle", "nodeType": 1, "attrs": { "cx": "8", "cy": "8", "r": "8" }, "children": [] }]
  });
};
BsiCircleFill.displayName = "BsiCircleFill";
var BsiCircleFill_default = BsiCircleFill;
export {
  BsiCircleFill,
  BsiCircleFill_default as default
};
