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

// src/icons/BsiValentine.ts
var BsiValentine_exports = {};
__export(BsiValentine_exports, {
  BsiValentine: () => BsiValentine,
  default: () => BsiValentine_default
});
module.exports = __toCommonJS(BsiValentine_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiValentine = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "valentine",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132ZM2.25 4a.25.25 0 0 0-.25.25v1.5a.25.25 0 0 0 .5 0V4.5h1.25a.25.25 0 0 0 0-.5h-1.5Zm10 0a.25.25 0 1 0 0 .5h1.25v1.25a.25.25 0 1 0 .5 0v-1.5a.25.25 0 0 0-.25-.25h-1.5ZM2.5 10.25a.25.25 0 1 0-.5 0v1.5c0 .138.112.25.25.25h1.5a.25.25 0 1 0 0-.5H2.5v-1.25Zm11.5 0a.25.25 0 1 0-.5 0v1.25h-1.25a.25.25 0 1 0 0 .5h1.5a.25.25 0 0 0 .25-.25v-1.5Z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M0 2.994v-.06a1 1 0 0 1 .859-.99l13-1.857a1 1 0 0 1 1.141.99V2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.994ZM1 3v10h14V3H1Z" }, "children": [] }]
  });
};
BsiValentine.displayName = "BsiValentine";
var BsiValentine_default = BsiValentine;
