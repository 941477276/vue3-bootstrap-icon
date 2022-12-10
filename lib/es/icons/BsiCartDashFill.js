// src/icons/BsiCartDashFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiCartDashFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "cart-dash-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" }, "children": [] }]
  });
};
BsiCartDashFill.displayName = "BsiCartDashFill";
var BsiCartDashFill_default = BsiCartDashFill;
export {
  BsiCartDashFill,
  BsiCartDashFill_default as default
};
