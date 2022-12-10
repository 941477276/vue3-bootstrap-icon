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

// src/icons/BsiEmojiHeartEyesFill.ts
var BsiEmojiHeartEyesFill_exports = {};
__export(BsiEmojiHeartEyesFill_exports, {
  BsiEmojiHeartEyesFill: () => BsiEmojiHeartEyesFill,
  default: () => BsiEmojiHeartEyesFill_default
});
module.exports = __toCommonJS(BsiEmojiHeartEyesFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiEmojiHeartEyesFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "emoji-heart-eyes-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z" }, "children": [] }]
  });
};
BsiEmojiHeartEyesFill.displayName = "BsiEmojiHeartEyesFill";
var BsiEmojiHeartEyesFill_default = BsiEmojiHeartEyesFill;
