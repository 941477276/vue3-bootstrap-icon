// src/icons/BsiListNested.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiListNested = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "list-nested",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiListNested.displayName = "BsiListNested";
var BsiListNested_default = BsiListNested;
export {
  BsiListNested,
  BsiListNested_default as default
};
