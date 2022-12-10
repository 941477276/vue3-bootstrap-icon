// src/icons/BsiLayoutSidebarInsetReverse.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLayoutSidebarInsetReverse = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "layout-sidebar-inset-reverse",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M13 4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4z" }, "children": [] }]
  });
};
BsiLayoutSidebarInsetReverse.displayName = "BsiLayoutSidebarInsetReverse";
var BsiLayoutSidebarInsetReverse_default = BsiLayoutSidebarInsetReverse;
export {
  BsiLayoutSidebarInsetReverse,
  BsiLayoutSidebarInsetReverse_default as default
};
