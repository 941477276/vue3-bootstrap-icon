// src/icons/BsiPassFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPassFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "pass-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10 0a2 2 0 1 1-4 0H3.5A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0H10ZM4.5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1Zm0 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Z" }, "children": [] }]
  });
};
BsiPassFill.displayName = "BsiPassFill";
var BsiPassFill_default = BsiPassFill;
export {
  BsiPassFill,
  BsiPassFill_default as default
};
