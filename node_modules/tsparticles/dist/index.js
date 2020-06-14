"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsParticles = exports.pJSDom = exports.particlesJS = void 0;
var pjs_1 = require("./pjs");
var main_1 = require("./main");
var tsParticles = new main_1.Main();
exports.tsParticles = tsParticles;
tsParticles.init();
var _a = pjs_1.initPjs(tsParticles), particlesJS = _a.particlesJS, pJSDom = _a.pJSDom;
exports.particlesJS = particlesJS;
exports.pJSDom = pJSDom;
__exportStar(require("./Enums"), exports);
