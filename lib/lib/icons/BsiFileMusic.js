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

// src/icons/BsiFileMusic.ts
var BsiFileMusic_exports = {};
__export(BsiFileMusic_exports, {
  BsiFileMusic: () => BsiFileMusic,
  default: () => BsiFileMusic_default
});
module.exports = __toCommonJS(BsiFileMusic_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFileMusic = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "file-music",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M10.304 3.13a1 1 0 0 1 1.196.98v1.8l-2.5.5v5.09c0 .495-.301.883-.662 1.123C7.974 12.866 7.499 13 7 13c-.5 0-.974-.134-1.338-.377-.36-.24-.662-.628-.662-1.123s.301-.883.662-1.123C6.026 10.134 6.501 10 7 10c.356 0 .7.068 1 .196V4.41a1 1 0 0 1 .804-.98l1.5-.3z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" }, "children": [] }]
  });
};
BsiFileMusic.displayName = "BsiFileMusic";
var BsiFileMusic_default = BsiFileMusic;
