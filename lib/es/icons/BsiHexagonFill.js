// src/icons/BsiHexagonFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHexagonFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "hexagon-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z" }, "children": [] }]
  });
};
BsiHexagonFill.displayName = "BsiHexagonFill";
var BsiHexagonFill_default = BsiHexagonFill;
export {
  BsiHexagonFill,
  BsiHexagonFill_default as default
};
