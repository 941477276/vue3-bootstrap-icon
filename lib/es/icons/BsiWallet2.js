// src/icons/BsiWallet2.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiWallet2 = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "wallet2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" }, "children": [] }]
  });
};
BsiWallet2.displayName = "BsiWallet2";
var BsiWallet2_default = BsiWallet2;
export {
  BsiWallet2,
  BsiWallet2_default as default
};
