// src/icons/BsiToggleOn.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiToggleOn = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "toggle-on",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" }, "children": [] }]
  });
};
BsiToggleOn.displayName = "BsiToggleOn";
var BsiToggleOn_default = BsiToggleOn;
export {
  BsiToggleOn,
  BsiToggleOn_default as default
};
