// src/icons/BsiHouseFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHouseFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "house-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" }, "children": [] }]
  });
};
BsiHouseFill.displayName = "BsiHouseFill";
var BsiHouseFill_default = BsiHouseFill;
export {
  BsiHouseFill,
  BsiHouseFill_default as default
};
