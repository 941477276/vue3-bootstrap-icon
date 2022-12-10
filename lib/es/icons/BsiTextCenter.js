// src/icons/BsiTextCenter.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiTextCenter = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "text-center",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M4 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiTextCenter.displayName = "BsiTextCenter";
var BsiTextCenter_default = BsiTextCenter;
export {
  BsiTextCenter,
  BsiTextCenter_default as default
};
