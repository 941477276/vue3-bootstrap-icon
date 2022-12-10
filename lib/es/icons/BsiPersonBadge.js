// src/icons/BsiPersonBadge.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPersonBadge = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "person-badge",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" }, "children": [] }]
  });
};
BsiPersonBadge.displayName = "BsiPersonBadge";
var BsiPersonBadge_default = BsiPersonBadge;
export {
  BsiPersonBadge,
  BsiPersonBadge_default as default
};
