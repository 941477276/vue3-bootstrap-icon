// src/icons/BsiChevronDoubleDown.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronDoubleDown = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-double-down",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" }, "children": [] }]
  });
};
BsiChevronDoubleDown.displayName = "BsiChevronDoubleDown";
var BsiChevronDoubleDown_default = BsiChevronDoubleDown;
export {
  BsiChevronDoubleDown,
  BsiChevronDoubleDown_default as default
};
