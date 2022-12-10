// src/icons/BsiFileEarmarkPlayFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkPlayFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-play-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6 6.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V6.884z" }, "children": [] }]
  });
};
BsiFileEarmarkPlayFill.displayName = "BsiFileEarmarkPlayFill";
var BsiFileEarmarkPlayFill_default = BsiFileEarmarkPlayFill;
export {
  BsiFileEarmarkPlayFill,
  BsiFileEarmarkPlayFill_default as default
};
