// src/icons/BsiPcHorizontal.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPcHorizontal = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "pc-horizontal",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H1Zm11.5 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM1 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM1.25 9h5.5a.25.25 0 0 1 0 .5h-5.5a.25.25 0 0 1 0-.5Z" }, "children": [] }]
  });
};
BsiPcHorizontal.displayName = "BsiPcHorizontal";
var BsiPcHorizontal_default = BsiPcHorizontal;
export {
  BsiPcHorizontal,
  BsiPcHorizontal_default as default
};
