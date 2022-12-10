// src/icons/BsiSuitDiamond.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSuitDiamond = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "suit-diamond",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.384 1.226a.463.463 0 0 0-.768 0l-4.56 6.468a.537.537 0 0 0 0 .612l4.56 6.469a.463.463 0 0 0 .768 0l4.56-6.469a.537.537 0 0 0 0-.612l-4.56-6.468zM6.848.613a1.39 1.39 0 0 1 2.304 0l4.56 6.468a1.61 1.61 0 0 1 0 1.838l-4.56 6.468a1.39 1.39 0 0 1-2.304 0L2.288 8.92a1.61 1.61 0 0 1 0-1.838L6.848.613z" }, "children": [] }]
  });
};
BsiSuitDiamond.displayName = "BsiSuitDiamond";
var BsiSuitDiamond_default = BsiSuitDiamond;
export {
  BsiSuitDiamond,
  BsiSuitDiamond_default as default
};
