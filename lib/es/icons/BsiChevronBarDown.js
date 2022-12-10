// src/icons/BsiChevronBarDown.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronBarDown = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-bar-down",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiChevronBarDown.displayName = "BsiChevronBarDown";
var BsiChevronBarDown_default = BsiChevronBarDown;
export {
  BsiChevronBarDown,
  BsiChevronBarDown_default as default
};
