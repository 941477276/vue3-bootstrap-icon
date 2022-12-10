// src/icons/BsiArrowDownRight.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowDownRight = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-down-right",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0v6z" }, "children": [] }]
  });
};
BsiArrowDownRight.displayName = "BsiArrowDownRight";
var BsiArrowDownRight_default = BsiArrowDownRight;
export {
  BsiArrowDownRight,
  BsiArrowDownRight_default as default
};
