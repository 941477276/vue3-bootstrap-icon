// src/icons/BsiFileEarmarkWordFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkWordFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-word-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM5.485 6.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 9.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z" }, "children": [] }]
  });
};
BsiFileEarmarkWordFill.displayName = "BsiFileEarmarkWordFill";
var BsiFileEarmarkWordFill_default = BsiFileEarmarkWordFill;
export {
  BsiFileEarmarkWordFill,
  BsiFileEarmarkWordFill_default as default
};
