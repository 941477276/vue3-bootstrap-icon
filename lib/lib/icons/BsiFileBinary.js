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

// src/icons/BsiFileBinary.ts
var BsiFileBinary_exports = {};
__export(BsiFileBinary_exports, {
  BsiFileBinary: () => BsiFileBinary,
  default: () => BsiFileBinary_default
});
module.exports = __toCommonJS(BsiFileBinary_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFileBinary = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "file-binary",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.526 13.09c.976 0 1.524-.79 1.524-2.205 0-1.412-.548-2.203-1.524-2.203-.978 0-1.526.79-1.526 2.203 0 1.415.548 2.206 1.526 2.206zm-.832-2.205c0-1.05.29-1.612.832-1.612.358 0 .607.247.733.721L4.7 11.137a6.749 6.749 0 0 1-.006-.252zm.832 1.614c-.36 0-.606-.246-.732-.718l1.556-1.145c.003.079.005.164.005.249 0 1.052-.29 1.614-.829 1.614zm5.329.501v-.595H9.73V8.772h-.69l-1.19.786v.688L8.986 9.5h.05v2.906h-1.18V13h3z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" }, "children": [] }]
  });
};
BsiFileBinary.displayName = "BsiFileBinary";
var BsiFileBinary_default = BsiFileBinary;
