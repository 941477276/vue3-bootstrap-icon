// src/icons/BsiFileEarmarkPersonFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkPersonFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-person-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z" }, "children": [] }]
  });
};
BsiFileEarmarkPersonFill.displayName = "BsiFileEarmarkPersonFill";
var BsiFileEarmarkPersonFill_default = BsiFileEarmarkPersonFill;
export {
  BsiFileEarmarkPersonFill,
  BsiFileEarmarkPersonFill_default as default
};
