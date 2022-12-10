// src/icons/BsiFilterRight.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilterRight = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "filter-right",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" }, "children": [] }]
  });
};
BsiFilterRight.displayName = "BsiFilterRight";
var BsiFilterRight_default = BsiFilterRight;
export {
  BsiFilterRight,
  BsiFilterRight_default as default
};
