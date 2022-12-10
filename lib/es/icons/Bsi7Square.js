// src/icons/Bsi7Square.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var Bsi7Square = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "7-square",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" }, "children": [] }]
  });
};
Bsi7Square.displayName = "Bsi7Square";
var Bsi7Square_default = Bsi7Square;
export {
  Bsi7Square,
  Bsi7Square_default as default
};
