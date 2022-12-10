// src/icons/BsiReception2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiReception2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "reception-2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4 5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiReception2.displayName = "BsiReception2";
var BsiReception2_default = BsiReception2;
export {
  BsiReception2,
  BsiReception2_default as default
};
