// src/icons/BsiSortUpAlt.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSortUpAlt = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "sort-up-alt",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" }, "children": [] }]
  });
};
BsiSortUpAlt.displayName = "BsiSortUpAlt";
var BsiSortUpAlt_default = BsiSortUpAlt;
export {
  BsiSortUpAlt,
  BsiSortUpAlt_default as default
};
