// src/icons/BsiArrowDownCircle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowDownCircle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-down-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" }, "children": [] }]
  });
};
BsiArrowDownCircle.displayName = "BsiArrowDownCircle";
var BsiArrowDownCircle_default = BsiArrowDownCircle;
export {
  BsiArrowDownCircle,
  BsiArrowDownCircle_default as default
};
