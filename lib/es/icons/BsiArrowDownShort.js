// src/icons/BsiArrowDownShort.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowDownShort = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-down-short",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" }, "children": [] }]
  });
};
BsiArrowDownShort.displayName = "BsiArrowDownShort";
var BsiArrowDownShort_default = BsiArrowDownShort;
export {
  BsiArrowDownShort,
  BsiArrowDownShort_default as default
};
