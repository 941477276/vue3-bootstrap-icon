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

// src/icons/BsiFiletypeYml.ts
var BsiFiletypeYml_exports = {};
__export(BsiFiletypeYml_exports, {
  BsiFiletypeYml: () => BsiFiletypeYml,
  default: () => BsiFiletypeYml_default
});
module.exports = __toCommonJS(BsiFiletypeYml_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFiletypeYml = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "filetype-yml",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.133 15.849v-1.535l1.339-2.464h-.856l-.855 1.696h-.032L.876 11.85H0l1.339 2.479v1.52h.794Zm2.287 0v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H5.66L4.52 11.85h-.805v3.999h.706Zm4.71-.674h1.696v.674H8.338V11.85h.791v3.325Z" }, "children": [] }]
  });
};
BsiFiletypeYml.displayName = "BsiFiletypeYml";
var BsiFiletypeYml_default = BsiFiletypeYml;
