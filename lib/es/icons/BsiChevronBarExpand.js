// src/icons/BsiChevronBarExpand.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiChevronBarExpand = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "chevron-bar-expand",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M3.646 10.146a.5.5 0 0 1 .708 0L8 13.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-4.292a.5.5 0 0 0 .708 0L8 2.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z" }, "children": [] }]
  });
};
BsiChevronBarExpand.displayName = "BsiChevronBarExpand";
var BsiChevronBarExpand_default = BsiChevronBarExpand;
export {
  BsiChevronBarExpand,
  BsiChevronBarExpand_default as default
};
