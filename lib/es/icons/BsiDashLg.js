// src/icons/BsiDashLg.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDashLg = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "dash-lg",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" }, "children": [] }]
  });
};
BsiDashLg.displayName = "BsiDashLg";
var BsiDashLg_default = BsiDashLg;
export {
  BsiDashLg,
  BsiDashLg_default as default
};
