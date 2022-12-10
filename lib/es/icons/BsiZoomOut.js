// src/icons/BsiZoomOut.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiZoomOut = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "zoom-out",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiZoomOut.displayName = "BsiZoomOut";
var BsiZoomOut_default = BsiZoomOut;
export {
  BsiZoomOut,
  BsiZoomOut_default as default
};
