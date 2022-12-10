// src/icons/BsiUpc.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUpc = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "upc",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" }, "children": [] }]
  });
};
BsiUpc.displayName = "BsiUpc";
var BsiUpc_default = BsiUpc;
export {
  BsiUpc,
  BsiUpc_default as default
};
