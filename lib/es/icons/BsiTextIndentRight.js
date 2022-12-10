// src/icons/BsiTextIndentRight.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiTextIndentRight = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "text-indent-right",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiTextIndentRight.displayName = "BsiTextIndentRight";
var BsiTextIndentRight_default = BsiTextIndentRight;
export {
  BsiTextIndentRight,
  BsiTextIndentRight_default as default
};
