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

// src/icons/BsiFiletypePptx.ts
var BsiFiletypePptx_exports = {};
__export(BsiFiletypePptx_exports, {
  BsiFiletypePptx: () => BsiFiletypePptx,
  default: () => BsiFiletypePptx_default
});
module.exports = __toCommonJS(BsiFiletypePptx_exports);
var import_vue = require("vue");
var import_BsIcon = __toESM(require("../components/BsIcon"));
var BsiFiletypePptx = function(props, ctx) {
  return (0, import_vue.createVNode)(import_BsIcon.default, {
    ...props,
    iconName: "filetype-pptx",
    isFilled: false,
    viewBox: props.viewBox || "0 0 16 16",
    svgChildrenVDom: [{ "nodeName": "path", "nodeType": 1, "attrs": { "fill-rule": "evenodd", "d": "M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.5 11.85h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.105.201.158.427.158.677 0 .25-.054.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173H2.29v1.342H1.5V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.226-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182h-.659v1.406h.66a.794.794 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm1.302-1.714h1.6c.289 0 .533.06.732.179.201.117.355.276.46.477.106.201.158.427.158.677 0 .25-.053.476-.16.677-.106.199-.26.357-.464.474a1.452 1.452 0 0 1-.732.173h-.803v1.342h-.79V11.85Zm2.06 1.714a.795.795 0 0 0 .085-.381c0-.226-.062-.4-.185-.521-.123-.122-.294-.182-.513-.182H5.65v1.406h.66a.793.793 0 0 0 .374-.082.574.574 0 0 0 .238-.24Zm2.852 2.285v-3.337h1.137v-.662H7.846v.662H8.98v3.337h.794Zm3.796-3.999h.893l-1.274 2.007 1.254 1.992h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.439h.035l.824-1.439Z" }, "children": [] }]
  });
};
BsiFiletypePptx.displayName = "BsiFiletypePptx";
var BsiFiletypePptx_default = BsiFiletypePptx;
