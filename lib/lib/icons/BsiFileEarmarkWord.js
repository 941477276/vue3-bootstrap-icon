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

// src/icons/BsiFileEarmarkWord.ts
var BsiFileEarmarkWord_exports = {};
__export(BsiFileEarmarkWord_exports, {
  BsiFileEarmarkWord: () => BsiFileEarmarkWord,
  default: () => BsiFileEarmarkWord_default
});
module.exports = __toCommonJS(BsiFileEarmarkWord_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFileEarmarkWord = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "file-earmark-word",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5.485 6.879a.5.5 0 1 0-.97.242l1.5 6a.5.5 0 0 0 .967.01L8 9.402l1.018 3.73a.5.5 0 0 0 .967-.01l1.5-6a.5.5 0 0 0-.97-.242l-1.036 4.144-.997-3.655a.5.5 0 0 0-.964 0l-.997 3.655L5.485 6.88z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" }, "children": [] }]
  });
};
BsiFileEarmarkWord.displayName = "BsiFileEarmarkWord";
var BsiFileEarmarkWord_default = BsiFileEarmarkWord;
