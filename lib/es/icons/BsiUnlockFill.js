// src/icons/BsiUnlockFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiUnlockFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "unlock-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z" }, "children": [] }]
  });
};
BsiUnlockFill.displayName = "BsiUnlockFill";
var BsiUnlockFill_default = BsiUnlockFill;
export {
  BsiUnlockFill,
  BsiUnlockFill_default as default
};
