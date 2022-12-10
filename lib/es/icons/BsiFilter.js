// src/icons/BsiFilter.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilter = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "filter",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiFilter.displayName = "BsiFilter";
var BsiFilter_default = BsiFilter;
export {
  BsiFilter,
  BsiFilter_default as default
};
