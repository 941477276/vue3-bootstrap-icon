// src/icons/BsiDoorClosedFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiDoorClosedFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "door-closed-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" }, "children": [] }]
  });
};
BsiDoorClosedFill.displayName = "BsiDoorClosedFill";
var BsiDoorClosedFill_default = BsiDoorClosedFill;
export {
  BsiDoorClosedFill,
  BsiDoorClosedFill_default as default
};
