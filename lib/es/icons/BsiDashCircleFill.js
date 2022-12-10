// src/icons/BsiDashCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDashCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "dash-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" }, "children": [] }]
  });
};
BsiDashCircleFill.displayName = "BsiDashCircleFill";
var BsiDashCircleFill_default = BsiDashCircleFill;
export {
  BsiDashCircleFill,
  BsiDashCircleFill_default as default
};
