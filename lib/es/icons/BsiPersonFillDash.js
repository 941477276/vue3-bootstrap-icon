// src/icons/BsiPersonFillDash.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiPersonFillDash = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "person-fill-dash",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1Zm0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" }, "children": [] }]
  });
};
BsiPersonFillDash.displayName = "BsiPersonFillDash";
var BsiPersonFillDash_default = BsiPersonFillDash;
export {
  BsiPersonFillDash,
  BsiPersonFillDash_default as default
};
