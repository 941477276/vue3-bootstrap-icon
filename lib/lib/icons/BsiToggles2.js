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

// src/icons/BsiToggles2.ts
var BsiToggles2_exports = {};
__export(BsiToggles2_exports, {
  BsiToggles2: () => BsiToggles2,
  default: () => BsiToggles2_default
});
module.exports = __toCommonJS(BsiToggles2_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiToggles2 = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "toggles2",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" }, "children": [] }]
  });
};
BsiToggles2.displayName = "BsiToggles2";
var BsiToggles2_default = BsiToggles2;
