// src/icons/BsiKanbanFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiKanbanFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "kanban-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11zm5 2h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-5 1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm9-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" }, "children": [] }]
  });
};
BsiKanbanFill.displayName = "BsiKanbanFill";
var BsiKanbanFill_default = BsiKanbanFill;
export {
  BsiKanbanFill,
  BsiKanbanFill_default as default
};
