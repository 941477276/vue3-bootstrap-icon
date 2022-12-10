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

// src/icons/BsiFileEarmarkPptFill.ts
var BsiFileEarmarkPptFill_exports = {};
__export(BsiFileEarmarkPptFill_exports, {
  BsiFileEarmarkPptFill: () => BsiFileEarmarkPptFill,
  default: () => BsiFileEarmarkPptFill_default
});
module.exports = __toCommonJS(BsiFileEarmarkPptFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFileEarmarkPptFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "file-earmark-ppt-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5H7z" }, "children": [] }]
  });
};
BsiFileEarmarkPptFill.displayName = "BsiFileEarmarkPptFill";
var BsiFileEarmarkPptFill_default = BsiFileEarmarkPptFill;
