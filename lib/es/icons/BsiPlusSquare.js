// src/icons/BsiPlusSquare.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPlusSquare = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "plus-square",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" }, "children": [] }]
  });
};
BsiPlusSquare.displayName = "BsiPlusSquare";
var BsiPlusSquare_default = BsiPlusSquare;
export {
  BsiPlusSquare,
  BsiPlusSquare_default as default
};
