// src/icons/BsiCaretRightSquare.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCaretRightSquare = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "caret-right-square",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" }, "children": [] }]
  });
};
BsiCaretRightSquare.displayName = "BsiCaretRightSquare";
var BsiCaretRightSquare_default = BsiCaretRightSquare;
export {
  BsiCaretRightSquare,
  BsiCaretRightSquare_default as default
};
