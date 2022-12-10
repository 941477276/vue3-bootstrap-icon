// src/icons/BsiFileEarmarkFont.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileEarmarkFont = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-earmark-font",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.943 6H5.057L5 8h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v5.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V6.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" }, "children": [] }]
  });
};
BsiFileEarmarkFont.displayName = "BsiFileEarmarkFont";
var BsiFileEarmarkFont_default = BsiFileEarmarkFont;
export {
  BsiFileEarmarkFont,
  BsiFileEarmarkFont_default as default
};