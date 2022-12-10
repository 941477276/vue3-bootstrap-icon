// src/icons/BsiUnlock.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUnlock = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "unlock",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z" }, "children": [] }]
  });
};
BsiUnlock.displayName = "BsiUnlock";
var BsiUnlock_default = BsiUnlock;
export {
  BsiUnlock,
  BsiUnlock_default as default
};
