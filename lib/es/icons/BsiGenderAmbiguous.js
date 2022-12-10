// src/icons/BsiGenderAmbiguous.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiGenderAmbiguous = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "gender-ambiguous",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z" }, "children": [] }]
  });
};
BsiGenderAmbiguous.displayName = "BsiGenderAmbiguous";
var BsiGenderAmbiguous_default = BsiGenderAmbiguous;
export {
  BsiGenderAmbiguous,
  BsiGenderAmbiguous_default as default
};
