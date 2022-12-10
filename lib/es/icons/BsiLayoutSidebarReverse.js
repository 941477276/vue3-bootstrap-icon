// src/icons/BsiLayoutSidebarReverse.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLayoutSidebarReverse = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "layout-sidebar-reverse",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3zm-5-1v12H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9zm1 0h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2V2z" }, "children": [] }]
  });
};
BsiLayoutSidebarReverse.displayName = "BsiLayoutSidebarReverse";
var BsiLayoutSidebarReverse_default = BsiLayoutSidebarReverse;
export {
  BsiLayoutSidebarReverse,
  BsiLayoutSidebarReverse_default as default
};
