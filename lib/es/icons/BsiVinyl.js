// src/icons/BsiVinyl.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiVinyl = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "vinyl",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" }, "children": [] }]
  });
};
BsiVinyl.displayName = "BsiVinyl";
var BsiVinyl_default = BsiVinyl;
export {
  BsiVinyl,
  BsiVinyl_default as default
};
