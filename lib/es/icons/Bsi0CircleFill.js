// src/icons/Bsi0CircleFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var Bsi0CircleFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "0-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.012 4.158c1.858 0 2.96-1.582 2.96-3.99V7.84c0-2.426-1.079-3.996-2.936-3.996-1.864 0-2.965 1.588-2.965 3.996v.328c0 2.42 1.09 3.99 2.941 3.99Z" }, "children": [] }]
  });
};
Bsi0CircleFill.displayName = "Bsi0CircleFill";
var Bsi0CircleFill_default = Bsi0CircleFill;
export {
  Bsi0CircleFill,
  Bsi0CircleFill_default as default
};
