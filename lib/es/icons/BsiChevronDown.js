// src/icons/BsiChevronDown.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronDown = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-down",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" }, "children": [] }]
  });
};
BsiChevronDown.displayName = "BsiChevronDown";
var BsiChevronDown_default = BsiChevronDown;
export {
  BsiChevronDown,
  BsiChevronDown_default as default
};
