// src/icons/BsiFilePlayFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiFilePlayFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "file-play-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884z" }, "children": [] }]
  });
};
BsiFilePlayFill.displayName = "BsiFilePlayFill";
var BsiFilePlayFill_default = BsiFilePlayFill;
export {
  BsiFilePlayFill,
  BsiFilePlayFill_default as default
};
