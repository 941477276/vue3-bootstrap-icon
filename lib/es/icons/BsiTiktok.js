// src/icons/BsiTiktok.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiTiktok = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "tiktok",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" }, "children": [] }]
  });
};
BsiTiktok.displayName = "BsiTiktok";
var BsiTiktok_default = BsiTiktok;
export {
  BsiTiktok,
  BsiTiktok_default as default
};
