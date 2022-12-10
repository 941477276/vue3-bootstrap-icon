// src/icons/BsiDisplayportFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDisplayportFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "displayport-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1 5a1 1 0 0 0-1 1v3.191a1 1 0 0 0 .553.894l1.618.81a1 1 0 0 0 .447.105H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm1.5 2h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8H3v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5Z" }, "children": [] }]
  });
};
BsiDisplayportFill.displayName = "BsiDisplayportFill";
var BsiDisplayportFill_default = BsiDisplayportFill;
export {
  BsiDisplayportFill,
  BsiDisplayportFill_default as default
};
