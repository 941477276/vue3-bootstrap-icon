// src/icons/BsiThreeDotsVertical.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiThreeDotsVertical = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "three-dots-vertical",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, "children": [] }]
  });
};
BsiThreeDotsVertical.displayName = "BsiThreeDotsVertical";
var BsiThreeDotsVertical_default = BsiThreeDotsVertical;
export {
  BsiThreeDotsVertical,
  BsiThreeDotsVertical_default as default
};
