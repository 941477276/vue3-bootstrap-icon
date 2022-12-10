// src/icons/BsiArrowCounterclockwise.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowCounterclockwise = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-counterclockwise",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" }, "children": [] }]
  });
};
BsiArrowCounterclockwise.displayName = "BsiArrowCounterclockwise";
var BsiArrowCounterclockwise_default = BsiArrowCounterclockwise;
export {
  BsiArrowCounterclockwise,
  BsiArrowCounterclockwise_default as default
};