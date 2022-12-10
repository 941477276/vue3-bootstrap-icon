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

// src/icons/BsiQrCode.ts
var BsiQrCode_exports = {};
__export(BsiQrCode_exports, {
  BsiQrCode: () => BsiQrCode,
  default: () => BsiQrCode_default
});
module.exports = __toCommonJS(BsiQrCode_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiQrCode = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "qr-code",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2h2v2H2V2Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" }, "children": [] }]
  });
};
BsiQrCode.displayName = "BsiQrCode";
var BsiQrCode_default = BsiQrCode;
