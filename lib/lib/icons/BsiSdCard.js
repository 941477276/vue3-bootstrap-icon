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

// src/icons/BsiSdCard.ts
var BsiSdCard_exports = {};
__export(BsiSdCard_exports, {
  BsiSdCard: () => BsiSdCard,
  default: () => BsiSdCard_default
});
module.exports = __toCommonJS(BsiSdCard_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiSdCard = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "sd-card",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6.25 3.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2zm2 0a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M5.914 0H12.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5V3.914c0-.398.158-.78.44-1.06L4.853.439A1.5 1.5 0 0 1 5.914 0zM13 1.5a.5.5 0 0 0-.5-.5H5.914a.5.5 0 0 0-.353.146L3.146 3.561A.5.5 0 0 0 3 3.914V14.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13z" }, "children": [] }]
  });
};
BsiSdCard.displayName = "BsiSdCard";
var BsiSdCard_default = BsiSdCard;
