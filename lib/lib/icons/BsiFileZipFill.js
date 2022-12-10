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

// src/icons/BsiFileZipFill.ts
var BsiFileZipFill_exports = {};
__export(BsiFileZipFill_exports, {
  BsiFileZipFill: () => BsiFileZipFill,
  default: () => BsiFileZipFill_default
});
module.exports = __toCommonJS(BsiFileZipFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFileZipFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "file-zip-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8.5 9.438V8.5h-1v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.93-.62-.4-1.598a1 1 0 0 1-.03-.243z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm2.5 8.5v.938l-.4 1.599a1 1 0 0 0 .416 1.074l.93.62a1 1 0 0 0 1.109 0l.93-.62a1 1 0 0 0 .415-1.074l-.4-1.599V8.5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1zm1-5.5h-1v1h1v1h-1v1h1v1H9V6H8V5h1V4H8V3h1V2H8V1H6.5v1h1v1z" }, "children": [] }]
  });
};
BsiFileZipFill.displayName = "BsiFileZipFill";
var BsiFileZipFill_default = BsiFileZipFill;
