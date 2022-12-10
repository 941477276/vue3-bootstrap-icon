// src/icons/BsiReception1.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiReception1 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "reception-1",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiReception1.displayName = "BsiReception1";
var BsiReception1_default = BsiReception1;
export {
  BsiReception1,
  BsiReception1_default as default
};
