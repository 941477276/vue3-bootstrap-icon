// src/icons/BsiPentagonFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPentagonFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "pentagon-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.685.256a.5.5 0 0 1 .63 0l7.421 6.03a.5.5 0 0 1 .162.538l-2.788 8.827a.5.5 0 0 1-.476.349H3.366a.5.5 0 0 1-.476-.35L.102 6.825a.5.5 0 0 1 .162-.538l7.42-6.03Z" }, "children": [] }]
  });
};
BsiPentagonFill.displayName = "BsiPentagonFill";
var BsiPentagonFill_default = BsiPentagonFill;
export {
  BsiPentagonFill,
  BsiPentagonFill_default as default
};
