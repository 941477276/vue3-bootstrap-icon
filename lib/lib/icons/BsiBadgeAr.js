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

// src/icons/BsiBadgeAr.ts
var BsiBadgeAr_exports = {};
__export(BsiBadgeAr_exports, {
  BsiBadgeAr: () => BsiBadgeAr,
  default: () => BsiBadgeAr_default
});
module.exports = __toCommonJS(BsiBadgeAr_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBadgeAr = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "badge-ar",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "m3.794 11 .47-1.542H6.27L6.739 11H8L5.996 5.001H4.607L2.595 11h1.2zm1.503-4.852.734 2.426h-1.52l.734-2.426h.052zm5.598-1.147H8.5V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9zm-1.222 2.87V5.933h1.05c.63 0 1.05.347 1.05.989 0 .633-.408.95-1.067.95H9.673z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" }, "children": [] }]
  });
};
BsiBadgeAr.displayName = "BsiBadgeAr";
var BsiBadgeAr_default = BsiBadgeAr;
