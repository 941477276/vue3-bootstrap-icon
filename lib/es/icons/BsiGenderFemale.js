// src/icons/BsiGenderFemale.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiGenderFemale = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "gender-female",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z" }, "children": [] }]
  });
};
BsiGenderFemale.displayName = "BsiGenderFemale";
var BsiGenderFemale_default = BsiGenderFemale;
export {
  BsiGenderFemale,
  BsiGenderFemale_default as default
};
