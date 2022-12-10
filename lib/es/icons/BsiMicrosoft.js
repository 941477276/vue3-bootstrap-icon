// src/icons/BsiMicrosoft.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiMicrosoft = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "microsoft",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z" }, "children": [] }]
  });
};
BsiMicrosoft.displayName = "BsiMicrosoft";
var BsiMicrosoft_default = BsiMicrosoft;
export {
  BsiMicrosoft,
  BsiMicrosoft_default as default
};
