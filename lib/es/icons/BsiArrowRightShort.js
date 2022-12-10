// src/icons/BsiArrowRightShort.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowRightShort = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-right-short",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" }, "children": [] }]
  });
};
BsiArrowRightShort.displayName = "BsiArrowRightShort";
var BsiArrowRightShort_default = BsiArrowRightShort;
export {
  BsiArrowRightShort,
  BsiArrowRightShort_default as default
};
