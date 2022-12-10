// src/icons/BsiBorderAll.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiBorderAll = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "border-all",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z" }, "children": [] }]
  });
};
BsiBorderAll.displayName = "BsiBorderAll";
var BsiBorderAll_default = BsiBorderAll;
export {
  BsiBorderAll,
  BsiBorderAll_default as default
};
