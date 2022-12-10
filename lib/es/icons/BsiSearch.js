// src/icons/BsiSearch.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiSearch = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "search",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }, "children": [] }]
  });
};
BsiSearch.displayName = "BsiSearch";
var BsiSearch_default = BsiSearch;
export {
  BsiSearch,
  BsiSearch_default as default
};
