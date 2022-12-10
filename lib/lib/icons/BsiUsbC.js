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

// src/icons/BsiUsbC.ts
var BsiUsbC_exports = {};
__export(BsiUsbC_exports, {
  BsiUsbC: () => BsiUsbC,
  default: () => BsiUsbC_default
});
module.exports = __toCommonJS(BsiUsbC_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiUsbC = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "usb-c",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.5 7.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M0 8a3 3 0 0 1 3-3h10a3 3 0 1 1 0 6H3a3 3 0 0 1-3-3Zm3-2a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4H3Z" }, "children": [] }]
  });
};
BsiUsbC.displayName = "BsiUsbC";
var BsiUsbC_default = BsiUsbC;
