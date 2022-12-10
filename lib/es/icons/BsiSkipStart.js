// src/icons/BsiSkipStart.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSkipStart = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "skip-start",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0V4zm7.5.633L5.696 8l5.804 3.367V4.633z" }, "children": [] }]
  });
};
BsiSkipStart.displayName = "BsiSkipStart";
var BsiSkipStart_default = BsiSkipStart;
export {
  BsiSkipStart,
  BsiSkipStart_default as default
};
