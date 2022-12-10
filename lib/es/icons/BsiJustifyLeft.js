// src/icons/BsiJustifyLeft.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiJustifyLeft = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "justify-left",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiJustifyLeft.displayName = "BsiJustifyLeft";
var BsiJustifyLeft_default = BsiJustifyLeft;
export {
  BsiJustifyLeft,
  BsiJustifyLeft_default as default
};
