// src/icons/BsiCode.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCode = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "code",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" }, "children": [] }]
  });
};
BsiCode.displayName = "BsiCode";
var BsiCode_default = BsiCode;
export {
  BsiCode,
  BsiCode_default as default
};
