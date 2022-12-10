// src/icons/BsiAmd.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiAmd = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "amd",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0H.334ZM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2V9.72Z" }, "children": [] }]
  });
};
BsiAmd.displayName = "BsiAmd";
var BsiAmd_default = BsiAmd;
export {
  BsiAmd,
  BsiAmd_default as default
};
