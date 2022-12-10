// src/icons/BsiFilePost.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilePost = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-post",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" }, "children": [] }]
  });
};
BsiFilePost.displayName = "BsiFilePost";
var BsiFilePost_default = BsiFilePost;
export {
  BsiFilePost,
  BsiFilePost_default as default
};
