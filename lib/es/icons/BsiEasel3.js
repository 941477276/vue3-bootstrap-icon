// src/icons/BsiEasel3.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiEasel3 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "easel3",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8.5 13.134V12h5a1.5 1.5 0 0 0 1.5-1.5V2h.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H1v8.5A1.5 1.5 0 0 0 2.5 12h5v1.134a1 1 0 1 0 1 0ZM2 2v8.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V2H2Z" }, "children": [] }]
  });
};
BsiEasel3.displayName = "BsiEasel3";
var BsiEasel3_default = BsiEasel3;
export {
  BsiEasel3,
  BsiEasel3_default as default
};
