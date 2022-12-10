// src/icons/BsiBookmarkDashFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBookmarkDashFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "bookmark-dash-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" }, "children": [] }]
  });
};
BsiBookmarkDashFill.displayName = "BsiBookmarkDashFill";
var BsiBookmarkDashFill_default = BsiBookmarkDashFill;
export {
  BsiBookmarkDashFill,
  BsiBookmarkDashFill_default as default
};