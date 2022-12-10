// src/icons/BsiFileEarmarkLock2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkLock2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-lock2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0zM7 7v1h2V7a1 1 0 0 0-2 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" }, "children": [] }]
  });
};
BsiFileEarmarkLock2.displayName = "BsiFileEarmarkLock2";
var BsiFileEarmarkLock2_default = BsiFileEarmarkLock2;
export {
  BsiFileEarmarkLock2,
  BsiFileEarmarkLock2_default as default
};
