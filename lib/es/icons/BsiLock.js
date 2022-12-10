// src/icons/BsiLock.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLock = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "lock",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" }, "children": [] }]
  });
};
BsiLock.displayName = "BsiLock";
var BsiLock_default = BsiLock;
export {
  BsiLock,
  BsiLock_default as default
};
