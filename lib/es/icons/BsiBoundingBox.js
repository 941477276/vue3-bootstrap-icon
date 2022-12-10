// src/icons/BsiBoundingBox.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBoundingBox = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "bounding-box",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z" }, "children": [] }]
  });
};
BsiBoundingBox.displayName = "BsiBoundingBox";
var BsiBoundingBox_default = BsiBoundingBox;
export {
  BsiBoundingBox,
  BsiBoundingBox_default as default
};
