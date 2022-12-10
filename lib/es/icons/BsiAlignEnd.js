// src/icons/BsiAlignEnd.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiAlignEnd = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "align-end",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z" }, "children": [] }]
  });
};
BsiAlignEnd.displayName = "BsiAlignEnd";
var BsiAlignEnd_default = BsiAlignEnd;
export {
  BsiAlignEnd,
  BsiAlignEnd_default as default
};
