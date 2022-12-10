// src/icons/BsiCheckSquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCheckSquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "check-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" }, "children": [] }]
  });
};
BsiCheckSquareFill.displayName = "BsiCheckSquareFill";
var BsiCheckSquareFill_default = BsiCheckSquareFill;
export {
  BsiCheckSquareFill,
  BsiCheckSquareFill_default as default
};
