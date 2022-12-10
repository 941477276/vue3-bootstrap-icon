// src/icons/BsiTriangleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiTriangleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "triangle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" }, "children": [] }]
  });
};
BsiTriangleFill.displayName = "BsiTriangleFill";
var BsiTriangleFill_default = BsiTriangleFill;
export {
  BsiTriangleFill,
  BsiTriangleFill_default as default
};
