// src/icons/BsiCollectionPlayFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCollectionPlayFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "collection-play-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z" }, "children": [] }]
  });
};
BsiCollectionPlayFill.displayName = "BsiCollectionPlayFill";
var BsiCollectionPlayFill_default = BsiCollectionPlayFill;
export {
  BsiCollectionPlayFill,
  BsiCollectionPlayFill_default as default
};
