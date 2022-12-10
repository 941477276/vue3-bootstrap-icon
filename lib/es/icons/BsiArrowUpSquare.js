// src/icons/BsiArrowUpSquare.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowUpSquare = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-up-square",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" }, "children": [] }]
  });
};
BsiArrowUpSquare.displayName = "BsiArrowUpSquare";
var BsiArrowUpSquare_default = BsiArrowUpSquare;
export {
  BsiArrowUpSquare,
  BsiArrowUpSquare_default as default
};
