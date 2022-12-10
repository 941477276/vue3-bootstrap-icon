// src/icons/BsiHSquare.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHSquare = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "h-square",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 4.002V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002H11Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" }, "children": [] }]
  });
};
BsiHSquare.displayName = "BsiHSquare";
var BsiHSquare_default = BsiHSquare;
export {
  BsiHSquare,
  BsiHSquare_default as default
};
