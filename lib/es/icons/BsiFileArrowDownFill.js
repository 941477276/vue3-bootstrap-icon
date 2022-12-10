// src/icons/BsiFileArrowDownFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFileArrowDownFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-arrow-down-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z" }, "children": [] }]
  });
};
BsiFileArrowDownFill.displayName = "BsiFileArrowDownFill";
var BsiFileArrowDownFill_default = BsiFileArrowDownFill;
export {
  BsiFileArrowDownFill,
  BsiFileArrowDownFill_default as default
};
