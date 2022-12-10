// src/icons/Bsi2CircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var Bsi2CircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "2-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" }, "children": [] }]
  });
};
Bsi2CircleFill.displayName = "Bsi2CircleFill";
var Bsi2CircleFill_default = Bsi2CircleFill;
export {
  Bsi2CircleFill,
  Bsi2CircleFill_default as default
};
