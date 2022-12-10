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

// src/icons/BsiYinYang.ts
var BsiYinYang_exports = {};
__export(BsiYinYang_exports, {
  BsiYinYang: () => BsiYinYang,
  default: () => BsiYinYang_default
});
module.exports = __toCommonJS(BsiYinYang_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiYinYang = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "yin-yang",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7Zm7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334Z" }, "children": [] }]
  });
};
BsiYinYang.displayName = "BsiYinYang";
var BsiYinYang_default = BsiYinYang;
