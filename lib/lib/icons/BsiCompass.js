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

// src/icons/BsiCompass.ts
var BsiCompass_exports = {};
__export(BsiCompass_exports, {
  BsiCompass: () => BsiCompass,
  default: () => BsiCompass_default
});
module.exports = __toCommonJS(BsiCompass_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiCompass = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "compass",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" }, "children": [] }]
  });
};
BsiCompass.displayName = "BsiCompass";
var BsiCompass_default = BsiCompass;
