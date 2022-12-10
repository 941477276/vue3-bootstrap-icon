// src/icons/BsiDashCircle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDashCircle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "dash-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }, "children": [] }]
  });
};
BsiDashCircle.displayName = "BsiDashCircle";
var BsiDashCircle_default = BsiDashCircle;
export {
  BsiDashCircle,
  BsiDashCircle_default as default
};
