// src/icons/BsiLadder.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLadder = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "ladder",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4.5 1a.5.5 0 0 1 .5.5V2h6v-.5a.5.5 0 0 1 1 0v14a.5.5 0 0 1-1 0V15H5v.5a.5.5 0 0 1-1 0v-14a.5.5 0 0 1 .5-.5zM5 14h6v-2H5v2zm0-3h6V9H5v2zm0-3h6V6H5v2zm0-3h6V3H5v2z" }, "children": [] }]
  });
};
BsiLadder.displayName = "BsiLadder";
var BsiLadder_default = BsiLadder;
export {
  BsiLadder,
  BsiLadder_default as default
};
