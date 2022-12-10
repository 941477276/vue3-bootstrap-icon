// src/icons/BsiChevronRight.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronRight = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-right",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" }, "children": [] }]
  });
};
BsiChevronRight.displayName = "BsiChevronRight";
var BsiChevronRight_default = BsiChevronRight;
export {
  BsiChevronRight,
  BsiChevronRight_default as default
};
