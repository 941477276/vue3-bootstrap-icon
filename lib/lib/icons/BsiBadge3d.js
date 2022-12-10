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

// src/icons/BsiBadge3d.ts
var BsiBadge3d_exports = {};
__export(BsiBadge3d_exports, {
  BsiBadge3d: () => BsiBadge3d,
  default: () => BsiBadge3d_default
});
module.exports = __toCommonJS(BsiBadge3d_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiBadge3d = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "badge-3d",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "d": "M4.52 8.368h.664c.646 0 1.055.378 1.06.9.008.537-.427.919-1.086.919-.598-.004-1.037-.325-1.068-.756H3c.03.914.791 1.688 2.153 1.688 1.24 0 2.285-.66 2.272-1.798-.013-.953-.747-1.38-1.292-1.432v-.062c.44-.07 1.125-.527 1.108-1.375-.013-.906-.8-1.57-2.053-1.565-1.31.005-2.043.734-2.074 1.67h1.103c.022-.391.383-.751.936-.751.532 0 .928.33.928.813.004.479-.383.835-.928.835h-.632v.914zm3.606-3.367V11h2.189C12.125 11 13 9.893 13 7.985c0-1.894-.861-2.984-2.685-2.984H8.126zm1.187.967h.844c1.112 0 1.621.686 1.621 2.04 0 1.353-.505 2.02-1.621 2.02h-.844v-4.06z" }, "children": [] }, { "nodeName": "path", "nodeType": 1, "attrs": { "d": "M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" }, "children": [] }]
  });
};
BsiBadge3d.displayName = "BsiBadge3d";
var BsiBadge3d_default = BsiBadge3d;
