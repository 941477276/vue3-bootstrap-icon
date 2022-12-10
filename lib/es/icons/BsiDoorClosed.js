// src/icons/BsiDoorClosed.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDoorClosed = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "door-closed",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" }, "children": [] }]
  });
};
BsiDoorClosed.displayName = "BsiDoorClosed";
var BsiDoorClosed_default = BsiDoorClosed;
export {
  BsiDoorClosed,
  BsiDoorClosed_default as default
};
