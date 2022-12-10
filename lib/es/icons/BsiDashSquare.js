// src/icons/BsiDashSquare.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDashSquare = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "dash-square",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }, "children": [] }]
  });
};
BsiDashSquare.displayName = "BsiDashSquare";
var BsiDashSquare_default = BsiDashSquare;
export {
  BsiDashSquare,
  BsiDashSquare_default as default
};
