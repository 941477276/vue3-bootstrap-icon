// src/icons/BsiFileEarmarkImage.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkImage = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-image",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5V14zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4z" }, "children": [] }]
  });
};
BsiFileEarmarkImage.displayName = "BsiFileEarmarkImage";
var BsiFileEarmarkImage_default = BsiFileEarmarkImage;
export {
  BsiFileEarmarkImage,
  BsiFileEarmarkImage_default as default
};
