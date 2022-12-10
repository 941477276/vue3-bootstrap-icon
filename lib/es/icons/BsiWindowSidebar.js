// src/icons/BsiWindowSidebar.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiWindowSidebar = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "window-sidebar",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z" }, "children": [] }]
  });
};
BsiWindowSidebar.displayName = "BsiWindowSidebar";
var BsiWindowSidebar_default = BsiWindowSidebar;
export {
  BsiWindowSidebar,
  BsiWindowSidebar_default as default
};
