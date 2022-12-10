// src/icons/BsiTerminalFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiTerminalFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "terminal-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146z" }, "children": [] }]
  });
};
BsiTerminalFill.displayName = "BsiTerminalFill";
var BsiTerminalFill_default = BsiTerminalFill;
export {
  BsiTerminalFill,
  BsiTerminalFill_default as default
};
