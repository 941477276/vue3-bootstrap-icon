// src/icons/BsiFilterCircle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilterCircle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "filter-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiFilterCircle.displayName = "BsiFilterCircle";
var BsiFilterCircle_default = BsiFilterCircle;
export {
  BsiFilterCircle,
  BsiFilterCircle_default as default
};
