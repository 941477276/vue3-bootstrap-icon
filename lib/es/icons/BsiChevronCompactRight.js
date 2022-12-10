// src/icons/BsiChevronCompactRight.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronCompactRight = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-compact-right",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" }, "children": [] }]
  });
};
BsiChevronCompactRight.displayName = "BsiChevronCompactRight";
var BsiChevronCompactRight_default = BsiChevronCompactRight;
export {
  BsiChevronCompactRight,
  BsiChevronCompactRight_default as default
};
