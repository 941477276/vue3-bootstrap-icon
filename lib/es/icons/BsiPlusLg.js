// src/icons/BsiPlusLg.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPlusLg = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "plus-lg",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" }, "children": [] }]
  });
};
BsiPlusLg.displayName = "BsiPlusLg";
var BsiPlusLg_default = BsiPlusLg;
export {
  BsiPlusLg,
  BsiPlusLg_default as default
};
