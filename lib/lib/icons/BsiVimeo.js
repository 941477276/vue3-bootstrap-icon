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

// src/icons/BsiVimeo.ts
var BsiVimeo_exports = {};
__export(BsiVimeo_exports, {
  BsiVimeo: () => BsiVimeo,
  default: () => BsiVimeo_default
});
module.exports = __toCommonJS(BsiVimeo_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiVimeo = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "vimeo",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M15.992 4.204c-.071 1.556-1.158 3.687-3.262 6.393-2.175 2.829-4.016 4.243-5.522 4.243-.933 0-1.722-.861-2.367-2.583L3.55 7.523C3.07 5.8 2.556 4.94 2.007 4.94c-.118 0-.537.253-1.254.754L0 4.724a209.56 209.56 0 0 0 2.334-2.081c1.054-.91 1.845-1.388 2.373-1.437 1.243-.123 2.01.728 2.298 2.553.31 1.968.526 3.19.646 3.666.36 1.631.756 2.446 1.186 2.445.334 0 .836-.53 1.508-1.587.671-1.058 1.03-1.863 1.077-2.415.096-.913-.263-1.37-1.077-1.37a3.022 3.022 0 0 0-1.185.261c.789-2.573 2.291-3.825 4.508-3.756 1.644.05 2.419 1.117 2.324 3.2z" }, "children": [] }]
  });
};
BsiVimeo.displayName = "BsiVimeo";
var BsiVimeo_default = BsiVimeo;
