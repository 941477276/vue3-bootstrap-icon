// src/icons/BsiArrowUpRightSquare.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiArrowUpRightSquare = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "arrow-up-right-square",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" }, "children": [] }]
  });
};
BsiArrowUpRightSquare.displayName = "BsiArrowUpRightSquare";
var BsiArrowUpRightSquare_default = BsiArrowUpRightSquare;
export {
  BsiArrowUpRightSquare,
  BsiArrowUpRightSquare_default as default
};
