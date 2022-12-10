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

// src/icons/BsiMusicPlayer.ts
var BsiMusicPlayer_exports = {};
__export(BsiMusicPlayer_exports, {
  BsiMusicPlayer: () => BsiMusicPlayer,
  default: () => BsiMusicPlayer_default
});
module.exports = __toCommonJS(BsiMusicPlayer_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiMusicPlayer = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "music-player",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3zm1 0v3h6V3H5zm3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z" }, "children": [] }]
  });
};
BsiMusicPlayer.displayName = "BsiMusicPlayer";
var BsiMusicPlayer_default = BsiMusicPlayer;
