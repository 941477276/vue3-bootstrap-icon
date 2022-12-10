// src/icons/BsiArrowUpRightCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowUpRightCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-up-right-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z" }, "children": [] }]
  });
};
BsiArrowUpRightCircleFill.displayName = "BsiArrowUpRightCircleFill";
var BsiArrowUpRightCircleFill_default = BsiArrowUpRightCircleFill;
export {
  BsiArrowUpRightCircleFill,
  BsiArrowUpRightCircleFill_default as default
};
