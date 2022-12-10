// src/icons/BsiNodePlusFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiNodePlusFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "node-plus-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 13a5 5 0 1 0-4.975-5.5H4A1.5 1.5 0 0 0 2.5 6h-1A1.5 1.5 0 0 0 0 7.5v1A1.5 1.5 0 0 0 1.5 10h1A1.5 1.5 0 0 0 4 8.5h2.025A5 5 0 0 0 11 13zm.5-7.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 1 0z" }, "children": [] }]
  });
};
BsiNodePlusFill.displayName = "BsiNodePlusFill";
var BsiNodePlusFill_default = BsiNodePlusFill;
export {
  BsiNodePlusFill,
  BsiNodePlusFill_default as default
};
