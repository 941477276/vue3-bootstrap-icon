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

// src/icons/BsiBadgeVoFill.ts
var BsiBadgeVoFill_exports = {};
__export(BsiBadgeVoFill_exports, {
  BsiBadgeVoFill: () => BsiBadgeVoFill,
  default: () => BsiBadgeVoFill_default
});
module.exports = __toCommonJS(BsiBadgeVoFill_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBadgeVoFill = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "badge-vo-fill",
    isFilled: true,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M12.296 8.394v-.782c0-1.156-.571-1.736-1.362-1.736-.796 0-1.363.58-1.363 1.736v.782c0 1.156.567 1.732 1.363 1.732.79 0 1.362-.576 1.362-1.732z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm11.5 5.62v.77c0 1.691-.962 2.724-2.566 2.724-1.604 0-2.571-1.033-2.571-2.724v-.77c0-1.704.967-2.733 2.57-2.733 1.605 0 2.567 1.037 2.567 2.734zM5.937 11H4.508L2.5 5.001h1.375L5.22 9.708h.057L6.61 5.001h1.318L5.937 11z" }, "children": [] }]
  });
};
BsiBadgeVoFill.displayName = "BsiBadgeVoFill";
var BsiBadgeVoFill_default = BsiBadgeVoFill;
