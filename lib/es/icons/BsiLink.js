// src/icons/BsiLink.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiLink = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "link",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" }, "children": [] }]
  });
};
BsiLink.displayName = "BsiLink";
var BsiLink_default = BsiLink;
export {
  BsiLink,
  BsiLink_default as default
};
