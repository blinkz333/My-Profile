"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatableColor = void 0;
var OptionsColor_1 = require("../OptionsColor");
var ColorAnimation_1 = require("./ColorAnimation");
var AnimatableColor = (function (_super) {
    __extends(AnimatableColor, _super);
    function AnimatableColor() {
        var _this = _super.call(this) || this;
        _this.animation = new ColorAnimation_1.ColorAnimation();
        return _this;
    }
    AnimatableColor.create = function (source, data) {
        var color = source !== null && source !== void 0 ? source : new AnimatableColor();
        if (data !== undefined) {
            color.load(typeof data === "string" ? { value: data } : data);
        }
        return color;
    };
    AnimatableColor.prototype.load = function (data) {
        _super.prototype.load.call(this, data);
        this.animation.load(data === null || data === void 0 ? void 0 : data.animation);
    };
    return AnimatableColor;
}(OptionsColor_1.OptionsColor));
exports.AnimatableColor = AnimatableColor;
