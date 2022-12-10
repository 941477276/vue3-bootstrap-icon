// src/icons/BsiDashSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDashSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "dash-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" }, "children": [] }]
  });
};
BsiDashSquareFill.displayName = "BsiDashSquareFill";
var BsiDashSquareFill_default = BsiDashSquareFill;
export {
  BsiDashSquareFill,
  BsiDashSquareFill_default as default
};
