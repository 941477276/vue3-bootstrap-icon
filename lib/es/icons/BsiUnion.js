// src/icons/BsiUnion.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUnion = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "union",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2z" }, "children": [] }]
  });
};
BsiUnion.displayName = "BsiUnion";
var BsiUnion_default = BsiUnion;
export {
  BsiUnion,
  BsiUnion_default as default
};
