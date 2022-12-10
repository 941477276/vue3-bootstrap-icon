// src/icons/BsiArrowDownCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowDownCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-down-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" }, "children": [] }]
  });
};
BsiArrowDownCircleFill.displayName = "BsiArrowDownCircleFill";
var BsiArrowDownCircleFill_default = BsiArrowDownCircleFill;
export {
  BsiArrowDownCircleFill,
  BsiArrowDownCircleFill_default as default
};
