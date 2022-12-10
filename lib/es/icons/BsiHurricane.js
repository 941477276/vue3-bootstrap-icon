// src/icons/BsiHurricane.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHurricane = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "hurricane",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.999 2.6A5.5 5.5 0 0 1 15 7.5a.5.5 0 0 0 1 0 6.5 6.5 0 1 0-13 0 5 5 0 0 0 6.001 4.9A5.5 5.5 0 0 1 1 7.5a.5.5 0 0 0-1 0 6.5 6.5 0 1 0 13 0 5 5 0 0 0-6.001-4.9zM10 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" }, "children": [] }]
  });
};
BsiHurricane.displayName = "BsiHurricane";
var BsiHurricane_default = BsiHurricane;
export {
  BsiHurricane,
  BsiHurricane_default as default
};
