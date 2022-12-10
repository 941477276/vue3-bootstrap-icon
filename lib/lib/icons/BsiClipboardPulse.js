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

// src/icons/BsiClipboardPulse.ts
var BsiClipboardPulse_exports = {};
__export(BsiClipboardPulse_exports, {
  BsiClipboardPulse: () => BsiClipboardPulse,
  default: () => BsiClipboardPulse_default
});
module.exports = __toCommonJS(BsiClipboardPulse_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiClipboardPulse = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "clipboard-pulse",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Zm6.979 3.856a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.895-.133L4.232 10H3.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .416-.223l1.41-2.115 1.195 3.982a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h1.5a.5.5 0 0 0 0-1h-1.128L9.979 5.356Z" }, "children": [] }]
  });
};
BsiClipboardPulse.displayName = "BsiClipboardPulse";
var BsiClipboardPulse_default = BsiClipboardPulse;
