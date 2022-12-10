// src/icons/BsiBookmark.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBookmark = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "bookmark",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" }, "children": [] }]
  });
};
BsiBookmark.displayName = "BsiBookmark";
var BsiBookmark_default = BsiBookmark;
export {
  BsiBookmark,
  BsiBookmark_default as default
};
