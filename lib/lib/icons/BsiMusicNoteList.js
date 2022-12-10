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

// src/icons/BsiMusicNoteList.ts
var BsiMusicNoteList_exports = {};
__export(BsiMusicNoteList_exports, {
  BsiMusicNoteList: () => BsiMusicNoteList,
  default: () => BsiMusicNoteList_default
});
module.exports = __toCommonJS(BsiMusicNoteList_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiMusicNoteList = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "music-note-list",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M12 3v10h-1V3h1z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" }, "children": [] }]
  });
};
BsiMusicNoteList.displayName = "BsiMusicNoteList";
var BsiMusicNoteList_default = BsiMusicNoteList;
