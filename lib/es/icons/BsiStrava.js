// src/icons/BsiStrava.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiStrava = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "strava",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.731 0 2 9.125h2.788L6.73 5.497l1.93 3.628h2.766L6.731 0zm4.694 9.125-1.372 2.756L8.66 9.125H6.547L10.053 16l3.484-6.875h-2.112z" }, "children": [] }]
  });
};
BsiStrava.displayName = "BsiStrava";
var BsiStrava_default = BsiStrava;
export {
  BsiStrava,
  BsiStrava_default as default
};
