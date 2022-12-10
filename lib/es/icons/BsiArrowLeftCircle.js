// src/icons/BsiArrowLeftCircle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowLeftCircle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-left-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" }, "children": [] }]
  });
};
BsiArrowLeftCircle.displayName = "BsiArrowLeftCircle";
var BsiArrowLeftCircle_default = BsiArrowLeftCircle;
export {
  BsiArrowLeftCircle,
  BsiArrowLeftCircle_default as default
};
