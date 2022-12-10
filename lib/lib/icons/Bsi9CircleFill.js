"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/icons/Bsi9CircleFill.ts
var Bsi9CircleFill_exports = {};
__export(Bsi9CircleFill_exports, {
  Bsi9CircleFill: () => Bsi9CircleFill,
  default: () => Bsi9CircleFill_default
});
module.exports = __toCommonJS(Bsi9CircleFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var Bsi9CircleFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "9-circle-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.223 4.146c2.104 0 3.123-1.464 3.123-4.3 0-3.147-1.459-4.014-2.97-4.014-1.63 0-2.871 1.02-2.871 2.73 0 1.706 1.171 2.667 2.566 2.667 1.06 0 1.7-.557 1.934-1.184h.076c.047 1.67-.475 3.023-1.834 3.023-.71 0-1.149-.363-1.248-.72H5.258c.094.908.926 1.798 2.52 1.798Zm.118-3.972c.808 0 1.535-.528 1.535-1.594s-.668-1.676-1.56-1.676c-.838 0-1.517.616-1.517 1.659 0 1.072.708 1.61 1.54 1.61Z" }, "children": [] }]
  });
};
Bsi9CircleFill.displayName = "Bsi9CircleFill";
var Bsi9CircleFill_default = Bsi9CircleFill;
