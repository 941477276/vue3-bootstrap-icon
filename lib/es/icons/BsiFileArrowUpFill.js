// src/icons/BsiFileArrowUpFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileArrowUpFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-arrow-up-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM7.5 6.707 6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707z" }, "children": [] }]
  });
};
BsiFileArrowUpFill.displayName = "BsiFileArrowUpFill";
var BsiFileArrowUpFill_default = BsiFileArrowUpFill;
export {
  BsiFileArrowUpFill,
  BsiFileArrowUpFill_default as default
};
