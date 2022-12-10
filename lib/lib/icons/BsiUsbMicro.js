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

// src/icons/BsiUsbMicro.ts
var BsiUsbMicro_exports = {};
__export(BsiUsbMicro_exports, {
  BsiUsbMicro: () => BsiUsbMicro,
  default: () => BsiUsbMicro_default
});
module.exports = __toCommonJS(BsiUsbMicro_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiUsbMicro = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "usb-micro",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2.707 4A1 1 0 0 0 2 4.293L.293 6A1 1 0 0 0 0 6.707V11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6.707A1 1 0 0 0 15.707 6L14 4.293A1 1 0 0 0 13.293 4H2.707Zm0 1h10.586L15 6.707V11H1V6.707L2.707 5Z" }, "children": [] }]
  });
};
BsiUsbMicro.displayName = "BsiUsbMicro";
var BsiUsbMicro_default = BsiUsbMicro;
