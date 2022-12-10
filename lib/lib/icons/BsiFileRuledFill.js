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

// src/icons/BsiFileRuledFill.ts
var BsiFileRuledFill_exports = {};
__export(BsiFileRuledFill_exports, {
  BsiFileRuledFill: () => BsiFileRuledFill,
  default: () => BsiFileRuledFill_default
});
module.exports = __toCommonJS(BsiFileRuledFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFileRuledFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "file-ruled-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2zm2 7H6v2h8V7zm0 3H6v2h8v-2zm0 3H6v3h6a2 2 0 0 0 2-2v-1zm-9 3v-3H2v1a2 2 0 0 0 2 2h1zm-3-4h3v-2H2v2zm0-3h3V7H2v2z" }, "children": [] }]
  });
};
BsiFileRuledFill.displayName = "BsiFileRuledFill";
var BsiFileRuledFill_default = BsiFileRuledFill;
