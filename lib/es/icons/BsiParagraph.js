// src/icons/BsiParagraph.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiParagraph = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "paragraph",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z" }, "children": [] }]
  });
};
BsiParagraph.displayName = "BsiParagraph";
var BsiParagraph_default = BsiParagraph;
export {
  BsiParagraph,
  BsiParagraph_default as default
};
