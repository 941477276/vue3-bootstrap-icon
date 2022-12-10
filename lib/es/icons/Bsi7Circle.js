// src/icons/Bsi7Circle.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var Bsi7Circle = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "7-circle",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z" }, "children": [] }]
  });
};
Bsi7Circle.displayName = "Bsi7Circle";
var Bsi7Circle_default = Bsi7Circle;
export {
  Bsi7Circle,
  Bsi7Circle_default as default
};
