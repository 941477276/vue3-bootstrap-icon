// src/icons/BsiChevronBarRight.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronBarRight = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-bar-right",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z" }, "children": [] }]
  });
};
BsiChevronBarRight.displayName = "BsiChevronBarRight";
var BsiChevronBarRight_default = BsiChevronBarRight;
export {
  BsiChevronBarRight,
  BsiChevronBarRight_default as default
};
