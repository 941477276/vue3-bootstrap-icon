// src/icons/BsiHddStackFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiHddStackFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "hdd-stack-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" }, "children": [] }]
  });
};
BsiHddStackFill.displayName = "BsiHddStackFill";
var BsiHddStackFill_default = BsiHddStackFill;
export {
  BsiHddStackFill,
  BsiHddStackFill_default as default
};
