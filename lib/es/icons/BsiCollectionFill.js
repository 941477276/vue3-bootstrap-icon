// src/icons/BsiCollectionFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCollectionFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "collection-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" }, "children": [] }]
  });
};
BsiCollectionFill.displayName = "BsiCollectionFill";
var BsiCollectionFill_default = BsiCollectionFill;
export {
  BsiCollectionFill,
  BsiCollectionFill_default as default
};
