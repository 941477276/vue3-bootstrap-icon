// src/icons/Bsi4SquareFill.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var Bsi4SquareFill = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "4-square-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265Z" }, "children": [] }]
  });
};
Bsi4SquareFill.displayName = "Bsi4SquareFill";
var Bsi4SquareFill_default = Bsi4SquareFill;
export {
  Bsi4SquareFill,
  Bsi4SquareFill_default as default
};
