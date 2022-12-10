// src/icons/BsiSliders2Vertical.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSliders2Vertical = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "sliders2-vertical",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5ZM2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1Zm3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5Zm2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z" }, "children": [] }]
  });
};
BsiSliders2Vertical.displayName = "BsiSliders2Vertical";
var BsiSliders2Vertical_default = BsiSliders2Vertical;
export {
  BsiSliders2Vertical,
  BsiSliders2Vertical_default as default
};
