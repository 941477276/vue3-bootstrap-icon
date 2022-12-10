// src/icons/BsiFilterLeft.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilterLeft = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "filter-left",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiFilterLeft.displayName = "BsiFilterLeft";
var BsiFilterLeft_default = BsiFilterLeft;
export {
  BsiFilterLeft,
  BsiFilterLeft_default as default
};
