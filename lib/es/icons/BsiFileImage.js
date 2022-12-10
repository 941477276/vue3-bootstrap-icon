// src/icons/BsiFileImage.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileImage = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-image",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z" }, "children": [] }]
  });
};
BsiFileImage.displayName = "BsiFileImage";
var BsiFileImage_default = BsiFileImage;
export {
  BsiFileImage,
  BsiFileImage_default as default
};
