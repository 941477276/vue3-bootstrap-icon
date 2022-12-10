// src/icons/BsiChevronDoubleLeft.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronDoubleLeft = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-double-left",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" }, "children": [] }]
  });
};
BsiChevronDoubleLeft.displayName = "BsiChevronDoubleLeft";
var BsiChevronDoubleLeft_default = BsiChevronDoubleLeft;
export {
  BsiChevronDoubleLeft,
  BsiChevronDoubleLeft_default as default
};
