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

// src/icons/BsiFiletypeM4p.ts
var BsiFiletypeM4p_exports = {};
__export(BsiFiletypeM4p_exports, {
  BsiFiletypeM4p: () => BsiFiletypeM4p,
  default: () => BsiFiletypeM4p_default
});
module.exports = __toCommonJS(BsiFiletypeM4p_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFiletypeM4p = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "filetype-m4p",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM.706 15.849v-2.66h.038l.952 2.16h.516l.946-2.16h.038v2.66h.715V11.85h-.8l-1.14 2.596h-.026L.805 11.85H0v3.999h.706Zm5.237-3.999c-.262.434-.525.867-.79 1.3-.265.434-.514.87-.748 1.31v.648h1.937v.741h.74v-.741h.49v-.639h-.49V11.85H5.944Zm-.82 2.62v-.021c.18-.34.37-.68.571-1.017.203-.338.405-.666.607-.984h.04v2.021H5.124Zm2.893-2.62h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.106.201.158.427.158.677 0 .25-.053.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173h-.803v1.342h-.79V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.226-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182h-.659v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Z" }, "children": [] }]
  });
};
BsiFiletypeM4p.displayName = "BsiFiletypeM4p";
var BsiFiletypeM4p_default = BsiFiletypeM4p;
