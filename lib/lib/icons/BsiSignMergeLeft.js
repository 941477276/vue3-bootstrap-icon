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

// src/icons/BsiSignMergeLeft.ts
var BsiSignMergeLeft_exports = {};
__export(BsiSignMergeLeft_exports, {
  BsiSignMergeLeft: () => BsiSignMergeLeft,
  default: () => BsiSignMergeLeft_default
});
module.exports = __toCommonJS(BsiSignMergeLeft_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSignMergeLeft = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sign-merge-left",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7.25 6v1c-.14.301-.338.617-.588.95-.537.716-1.259 1.44-2.016 2.196l.708.708.015-.016c.652-.652 1.33-1.33 1.881-2.015V12h1.5V6h1.216a.25.25 0 0 0 .192-.41L8.192 3.23a.25.25 0 0 0-.384 0L5.842 5.59a.25.25 0 0 0 .192.41H7.25Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435Zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z" }, "children": [] }]
  });
};
BsiSignMergeLeft.displayName = "BsiSignMergeLeft";
var BsiSignMergeLeft_default = BsiSignMergeLeft;
