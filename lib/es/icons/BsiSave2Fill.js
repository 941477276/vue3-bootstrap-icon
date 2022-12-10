// src/icons/BsiSave2Fill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSave2Fill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "save2-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v6h-2a.5.5 0 0 0-.354.854l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5A.5.5 0 0 0 10.5 7.5h-2v-6z" }, "children": [] }]
  });
};
BsiSave2Fill.displayName = "BsiSave2Fill";
var BsiSave2Fill_default = BsiSave2Fill;
export {
  BsiSave2Fill,
  BsiSave2Fill_default as default
};
