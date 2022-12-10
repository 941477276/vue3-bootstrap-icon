// src/icons/BsiFileEarmarkArrowDownFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkArrowDownFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-arrow-down-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z" }, "children": [] }]
  });
};
BsiFileEarmarkArrowDownFill.displayName = "BsiFileEarmarkArrowDownFill";
var BsiFileEarmarkArrowDownFill_default = BsiFileEarmarkArrowDownFill;
export {
  BsiFileEarmarkArrowDownFill,
  BsiFileEarmarkArrowDownFill_default as default
};
