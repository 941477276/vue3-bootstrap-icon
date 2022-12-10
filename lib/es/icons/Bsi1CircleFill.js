// src/icons/Bsi1CircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var Bsi1CircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "1-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z" }, "children": [] }]
  });
};
Bsi1CircleFill.displayName = "Bsi1CircleFill";
var Bsi1CircleFill_default = Bsi1CircleFill;
export {
  Bsi1CircleFill,
  Bsi1CircleFill_default as default
};
