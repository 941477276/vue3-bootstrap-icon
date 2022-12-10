// src/icons/BsiEyeglasses.ts
import {
  createVNode
} from "vue";
import BsIcon from "../components/BsIcon";
var BsiEyeglasses = function(props, ctx) {
  return createVNode(BsIcon, {
    ...props,
    iconName: "eyeglasses",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" }, "children": [] }]
  });
};
BsiEyeglasses.displayName = "BsiEyeglasses";
var BsiEyeglasses_default = BsiEyeglasses;
export {
  BsiEyeglasses,
  BsiEyeglasses_default as default
};
