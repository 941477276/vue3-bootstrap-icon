// src/icons/BsiPersonHeart.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPersonHeart = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "person-heart",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" }, "children": [] }]
  });
};
BsiPersonHeart.displayName = "BsiPersonHeart";
var BsiPersonHeart_default = BsiPersonHeart;
export {
  BsiPersonHeart,
  BsiPersonHeart_default as default
};
