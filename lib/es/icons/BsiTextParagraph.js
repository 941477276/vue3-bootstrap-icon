// src/icons/BsiTextParagraph.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiTextParagraph = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "text-paragraph",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiTextParagraph.displayName = "BsiTextParagraph";
var BsiTextParagraph_default = BsiTextParagraph;
export {
  BsiTextParagraph,
  BsiTextParagraph_default as default
};
