// src/icons/BsiPause.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPause = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "pause",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" }, "children": [] }]
  });
};
BsiPause.displayName = "BsiPause";
var BsiPause_default = BsiPause;
export {
  BsiPause,
  BsiPause_default as default
};
