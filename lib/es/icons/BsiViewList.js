// src/icons/BsiViewList.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiViewList = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "view-list",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z" }, "children": [] }]
  });
};
BsiViewList.displayName = "BsiViewList";
var BsiViewList_default = BsiViewList;
export {
  BsiViewList,
  BsiViewList_default as default
};
