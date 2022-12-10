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

// src/icons/BsiWater.ts
var BsiWater_exports = {};
__export(BsiWater_exports, {
  BsiWater: () => BsiWater,
  default: () => BsiWater_default
});
module.exports = __toCommonJS(BsiWater_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiWater = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "water",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z" }, "children": [] }]
  });
};
BsiWater.displayName = "BsiWater";
var BsiWater_default = BsiWater;
