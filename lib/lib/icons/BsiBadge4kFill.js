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

// src/icons/BsiBadge4kFill.ts
var BsiBadge4kFill_exports = {};
__export(BsiBadge4kFill_exports, {
  BsiBadge4kFill: () => BsiBadge4kFill,
  default: () => BsiBadge4kFill_default
});
module.exports = __toCommonJS(BsiBadge4kFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBadge4kFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "badge-4k-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M3.577 8.9v.03h1.828V5.898h-.062a46.781 46.781 0 0 0-1.766 3.001z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm2.372 3.715.435-.714h1.71v3.93h.733v.957h-.733V11H5.405V9.888H2.5v-.971c.574-1.077 1.225-2.142 1.872-3.202zm7.73-.714h1.306l-2.14 2.584L13.5 11h-1.428l-1.679-2.624-.615.7V11H8.59V5.001h1.187v2.686h.057L12.102 5z" }, "children": [] }]
  });
};
BsiBadge4kFill.displayName = "BsiBadge4kFill";
var BsiBadge4kFill_default = BsiBadge4kFill;
