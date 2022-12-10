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

// src/icons/BsiPostcard.ts
var BsiPostcard_exports = {};
__export(BsiPostcard_exports, {
  BsiPostcard: () => BsiPostcard,
  default: () => BsiPostcard_default
});
module.exports = __toCommonJS(BsiPostcard_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiPostcard = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "postcard",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z" }, "children": [] }]
  });
};
BsiPostcard.displayName = "BsiPostcard";
var BsiPostcard_default = BsiPostcard;
