// src/icons/BsiHexagonHalf.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHexagonHalf = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "hexagon-half",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 4.577v6.846L8 15V1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z" }, "children": [] }]
  });
};
BsiHexagonHalf.displayName = "BsiHexagonHalf";
var BsiHexagonHalf_default = BsiHexagonHalf;
export {
  BsiHexagonHalf,
  BsiHexagonHalf_default as default
};
