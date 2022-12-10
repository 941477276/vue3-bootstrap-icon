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

// src/icons/BsiFileEarmarkRichtextFill.ts
var BsiFileEarmarkRichtextFill_exports = {};
__export(BsiFileEarmarkRichtextFill_exports, {
  BsiFileEarmarkRichtextFill: () => BsiFileEarmarkRichtextFill,
  default: () => BsiFileEarmarkRichtextFill_default
});
module.exports = __toCommonJS(BsiFileEarmarkRichtextFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFileEarmarkRichtextFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "file-earmark-richtext-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM7 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V9.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V9s1.54-1.274 1.639-1.208zM5 11h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" }, "children": [] }]
  });
};
BsiFileEarmarkRichtextFill.displayName = "BsiFileEarmarkRichtextFill";
var BsiFileEarmarkRichtextFill_default = BsiFileEarmarkRichtextFill;
