// src/icons/BsiBadgeHd.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBadgeHd = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "badge-hd",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11h1.187zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984H8.5zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843v-4.06z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" }, "children": [] }]
  });
};
BsiBadgeHd.displayName = "BsiBadgeHd";
var BsiBadgeHd_default = BsiBadgeHd;
export {
  BsiBadgeHd,
  BsiBadgeHd_default as default
};