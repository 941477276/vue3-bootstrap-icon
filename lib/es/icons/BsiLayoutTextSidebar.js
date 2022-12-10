// src/icons/BsiLayoutTextSidebar.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLayoutTextSidebar = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "layout-text-sidebar",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9V1z" }, "children": [] }]
  });
};
BsiLayoutTextSidebar.displayName = "BsiLayoutTextSidebar";
var BsiLayoutTextSidebar_default = BsiLayoutTextSidebar;
export {
  BsiLayoutTextSidebar,
  BsiLayoutTextSidebar_default as default
};
