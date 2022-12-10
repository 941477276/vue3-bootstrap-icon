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

// src/icons/BsiQrCodeScan.ts
var BsiQrCodeScan_exports = {};
__export(BsiQrCodeScan_exports, {
  BsiQrCodeScan: () => BsiQrCodeScan,
  default: () => BsiQrCodeScan_default
});
module.exports = __toCommonJS(BsiQrCodeScan_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiQrCodeScan = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "qr-code-scan",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 9h2V8h-2v1Z" }, "children": [] }]
  });
};
BsiQrCodeScan.displayName = "BsiQrCodeScan";
var BsiQrCodeScan_default = BsiQrCodeScan;
