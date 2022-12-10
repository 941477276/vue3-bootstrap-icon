// src/icons/BsiBorderWidth.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBorderWidth = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "border-width",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiBorderWidth.displayName = "BsiBorderWidth";
var BsiBorderWidth_default = BsiBorderWidth;
export {
  BsiBorderWidth,
  BsiBorderWidth_default as default
};
