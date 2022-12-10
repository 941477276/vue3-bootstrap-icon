// src/icons/BsiFileEarmarkPost.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkPost = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-post",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7zm0-3a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiFileEarmarkPost.displayName = "BsiFileEarmarkPost";
var BsiFileEarmarkPost_default = BsiFileEarmarkPost;
export {
  BsiFileEarmarkPost,
  BsiFileEarmarkPost_default as default
};
