// src/icons/BsiLayoutSidebarInset.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLayoutSidebarInset = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "layout-sidebar-inset",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" }, "children": [] }]
  });
};
BsiLayoutSidebarInset.displayName = "BsiLayoutSidebarInset";
var BsiLayoutSidebarInset_default = BsiLayoutSidebarInset;
export {
  BsiLayoutSidebarInset,
  BsiLayoutSidebarInset_default as default
};
