// src/icons/BsiArrowUpShort.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowUpShort = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-up-short",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" }, "children": [] }]
  });
};
BsiArrowUpShort.displayName = "BsiArrowUpShort";
var BsiArrowUpShort_default = BsiArrowUpShort;
export {
  BsiArrowUpShort,
  BsiArrowUpShort_default as default
};
