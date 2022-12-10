// src/icons/BsiAlt.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiAlt = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "alt",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1 13.5a.5.5 0 0 0 .5.5h3.797a.5.5 0 0 0 .439-.26L11 3h3.5a.5.5 0 0 0 0-1h-3.797a.5.5 0 0 0-.439.26L5 13H1.5a.5.5 0 0 0-.5.5zm10 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5z" }, "children": [] }]
  });
};
BsiAlt.displayName = "BsiAlt";
var BsiAlt_default = BsiAlt;
export {
  BsiAlt,
  BsiAlt_default as default
};
