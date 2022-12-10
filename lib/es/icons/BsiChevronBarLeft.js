// src/icons/BsiChevronBarLeft.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronBarLeft = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-bar-left",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z" }, "children": [] }]
  });
};
BsiChevronBarLeft.displayName = "BsiChevronBarLeft";
var BsiChevronBarLeft_default = BsiChevronBarLeft;
export {
  BsiChevronBarLeft,
  BsiChevronBarLeft_default as default
};
