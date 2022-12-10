// src/icons/BsiImages.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiImages = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "images",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" }, "children": [] }]
  });
};
BsiImages.displayName = "BsiImages";
var BsiImages_default = BsiImages;
export {
  BsiImages,
  BsiImages_default as default
};
