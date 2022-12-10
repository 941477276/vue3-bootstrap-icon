// src/icons/BsiArrowRight.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowRight = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-right",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" }, "children": [] }]
  });
};
BsiArrowRight.displayName = "BsiArrowRight";
var BsiArrowRight_default = BsiArrowRight;
export {
  BsiArrowRight,
  BsiArrowRight_default as default
};
