// src/icons/BsiArrowUpCircle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowUpCircle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-up-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" }, "children": [] }]
  });
};
BsiArrowUpCircle.displayName = "BsiArrowUpCircle";
var BsiArrowUpCircle_default = BsiArrowUpCircle;
export {
  BsiArrowUpCircle,
  BsiArrowUpCircle_default as default
};
