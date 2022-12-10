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

// src/icons/BsiEmojiExpressionlessFill.ts
var BsiEmojiExpressionlessFill_exports = {};
__export(BsiEmojiExpressionlessFill_exports, {
  BsiEmojiExpressionlessFill: () => BsiEmojiExpressionlessFill,
  default: () => BsiEmojiExpressionlessFill_default
});
module.exports = __toCommonJS(BsiEmojiExpressionlessFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiEmojiExpressionlessFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "emoji-expressionless-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm5 0h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm-5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" }, "children": [] }]
  });
};
BsiEmojiExpressionlessFill.displayName = "BsiEmojiExpressionlessFill";
var BsiEmojiExpressionlessFill_default = BsiEmojiExpressionlessFill;
