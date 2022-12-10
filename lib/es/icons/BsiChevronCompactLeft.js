// src/icons/BsiChevronCompactLeft.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronCompactLeft = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-compact-left",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" }, "children": [] }]
  });
};
BsiChevronCompactLeft.displayName = "BsiChevronCompactLeft";
var BsiChevronCompactLeft_default = BsiChevronCompactLeft;
export {
  BsiChevronCompactLeft,
  BsiChevronCompactLeft_default as default
};
