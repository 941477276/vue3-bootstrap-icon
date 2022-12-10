// src/icons/BsiAwardFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiAwardFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "award-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" }, "children": [] }]
  });
};
BsiAwardFill.displayName = "BsiAwardFill";
var BsiAwardFill_default = BsiAwardFill;
export {
  BsiAwardFill,
  BsiAwardFill_default as default
};
