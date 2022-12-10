// src/icons/BsiArrowDownRightCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowDownRightCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-down-right-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z" }, "children": [] }]
  });
};
BsiArrowDownRightCircleFill.displayName = "BsiArrowDownRightCircleFill";
var BsiArrowDownRightCircleFill_default = BsiArrowDownRightCircleFill;
export {
  BsiArrowDownRightCircleFill,
  BsiArrowDownRightCircleFill_default as default
};