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

// src/icons/BsiFileEarmarkImageFill.ts
var BsiFileEarmarkImageFill_exports = {};
__export(BsiFileEarmarkImageFill_exports, {
  BsiFileEarmarkImageFill: () => BsiFileEarmarkImageFill,
  default: () => BsiFileEarmarkImageFill_default
});
module.exports = __toCommonJS(BsiFileEarmarkImageFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFileEarmarkImageFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "file-earmark-image-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z" }, "children": [] }]
  });
};
BsiFileEarmarkImageFill.displayName = "BsiFileEarmarkImageFill";
var BsiFileEarmarkImageFill_default = BsiFileEarmarkImageFill;
