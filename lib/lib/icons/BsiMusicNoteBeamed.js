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

// src/icons/BsiMusicNoteBeamed.ts
var BsiMusicNoteBeamed_exports = {};
__export(BsiMusicNoteBeamed_exports, {
  BsiMusicNoteBeamed: () => BsiMusicNoteBeamed,
  default: () => BsiMusicNoteBeamed_default
});
module.exports = __toCommonJS(BsiMusicNoteBeamed_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiMusicNoteBeamed = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "music-note-beamed",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M14 11V2h1v9h-1zM6 3v10H5V3h1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" }, "children": [] }]
  });
};
BsiMusicNoteBeamed.displayName = "BsiMusicNoteBeamed";
var BsiMusicNoteBeamed_default = BsiMusicNoteBeamed;
