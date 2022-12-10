// src/icons/BsiReception3.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiReception3 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "reception-3",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiReception3.displayName = "BsiReception3";
var BsiReception3_default = BsiReception3;
export {
  BsiReception3,
  BsiReception3_default as default
};
