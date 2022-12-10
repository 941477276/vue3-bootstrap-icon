// src/icons/BsiSortDownAlt.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSortDownAlt = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "sort-down-alt",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" }, "children": [] }]
  });
};
BsiSortDownAlt.displayName = "BsiSortDownAlt";
var BsiSortDownAlt_default = BsiSortDownAlt;
export {
  BsiSortDownAlt,
  BsiSortDownAlt_default as default
};
