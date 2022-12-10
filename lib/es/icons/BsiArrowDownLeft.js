// src/icons/BsiArrowDownLeft.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowDownLeft = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-down-left",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0v6z" }, "children": [] }]
  });
};
BsiArrowDownLeft.displayName = "BsiArrowDownLeft";
var BsiArrowDownLeft_default = BsiArrowDownLeft;
export {
  BsiArrowDownLeft,
  BsiArrowDownLeft_default as default
};
