// src/icons/BsiBookmarkFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBookmarkFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "bookmark-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" }, "children": [] }]
  });
};
BsiBookmarkFill.displayName = "BsiBookmarkFill";
var BsiBookmarkFill_default = BsiBookmarkFill;
export {
  BsiBookmarkFill,
  BsiBookmarkFill_default as default
};
