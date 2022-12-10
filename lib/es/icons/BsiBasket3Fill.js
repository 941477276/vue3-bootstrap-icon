// src/icons/BsiBasket3Fill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBasket3Fill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "basket3-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" }, "children": [] }]
  });
};
BsiBasket3Fill.displayName = "BsiBasket3Fill";
var BsiBasket3Fill_default = BsiBasket3Fill;
export {
  BsiBasket3Fill,
  BsiBasket3Fill_default as default
};
