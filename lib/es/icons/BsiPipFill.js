// src/icons/BsiPipFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPipFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "pip-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm7 6h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z" }, "children": [] }]
  });
};
BsiPipFill.displayName = "BsiPipFill";
var BsiPipFill_default = BsiPipFill;
export {
  BsiPipFill,
  BsiPipFill_default as default
};
