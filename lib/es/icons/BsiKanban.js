// src/icons/BsiKanban.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiKanban = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "kanban",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z" }, "children": [] }]
  });
};
BsiKanban.displayName = "BsiKanban";
var BsiKanban_default = BsiKanban;
export {
  BsiKanban,
  BsiKanban_default as default
};
