// src/icons/BsiChevronCompactDown.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronCompactDown = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-compact-down",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" }, "children": [] }]
  });
};
BsiChevronCompactDown.displayName = "BsiChevronCompactDown";
var BsiChevronCompactDown_default = BsiChevronCompactDown;
export {
  BsiChevronCompactDown,
  BsiChevronCompactDown_default as default
};
