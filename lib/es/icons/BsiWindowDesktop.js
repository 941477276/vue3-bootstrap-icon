// src/icons/BsiWindowDesktop.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiWindowDesktop = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "window-desktop",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-9Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.375 1A2.366 2.366 0 0 0 0 3.357v9.286A2.366 2.366 0 0 0 2.375 15h11.25A2.366 2.366 0 0 0 16 12.643V3.357A2.366 2.366 0 0 0 13.625 1H2.375ZM1 3.357C1 2.612 1.611 2 2.375 2h11.25C14.389 2 15 2.612 15 3.357V4H1v-.643ZM1 5h14v7.643c0 .745-.611 1.357-1.375 1.357H2.375A1.366 1.366 0 0 1 1 12.643V5Z" }, "children": [] }]
  });
};
BsiWindowDesktop.displayName = "BsiWindowDesktop";
var BsiWindowDesktop_default = BsiWindowDesktop;
export {
  BsiWindowDesktop,
  BsiWindowDesktop_default as default
};
