// src/icons/BsiCircleSquare.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCircleSquare = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "circle-square",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z" }, "children": [] }]
  });
};
BsiCircleSquare.displayName = "BsiCircleSquare";
var BsiCircleSquare_default = BsiCircleSquare;
export {
  BsiCircleSquare,
  BsiCircleSquare_default as default
};
