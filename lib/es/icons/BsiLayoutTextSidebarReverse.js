// src/icons/BsiLayoutTextSidebarReverse.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLayoutTextSidebarReverse = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "layout-text-sidebar-reverse",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z" }, "children": [] }]
  });
};
BsiLayoutTextSidebarReverse.displayName = "BsiLayoutTextSidebarReverse";
var BsiLayoutTextSidebarReverse_default = BsiLayoutTextSidebarReverse;
export {
  BsiLayoutTextSidebarReverse,
  BsiLayoutTextSidebarReverse_default as default
};
