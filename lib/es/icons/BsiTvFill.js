// src/icons/BsiTvFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiTvFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "tv-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z" }, "children": [] }]
  });
};
BsiTvFill.displayName = "BsiTvFill";
var BsiTvFill_default = BsiTvFill;
export {
  BsiTvFill,
  BsiTvFill_default as default
};
