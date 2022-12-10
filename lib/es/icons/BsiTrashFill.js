// src/icons/BsiTrashFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiTrashFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "trash-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" }, "children": [] }]
  });
};
BsiTrashFill.displayName = "BsiTrashFill";
var BsiTrashFill_default = BsiTrashFill;
export {
  BsiTrashFill,
  BsiTrashFill_default as default
};
