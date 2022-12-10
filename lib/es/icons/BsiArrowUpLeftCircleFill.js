// src/icons/BsiArrowUpLeftCircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowUpLeftCircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-up-left-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707l4.096 4.096z" }, "children": [] }]
  });
};
BsiArrowUpLeftCircleFill.displayName = "BsiArrowUpLeftCircleFill";
var BsiArrowUpLeftCircleFill_default = BsiArrowUpLeftCircleFill;
export {
  BsiArrowUpLeftCircleFill,
  BsiArrowUpLeftCircleFill_default as default
};
