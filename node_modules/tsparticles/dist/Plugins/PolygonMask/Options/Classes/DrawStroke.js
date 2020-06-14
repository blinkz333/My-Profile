"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawStroke = void 0;
var OptionsColor_1 = require("../../../../Options/Classes/OptionsColor");
var Utils_1 = require("../../../../Utils");
var DrawStroke = (function () {
    function DrawStroke() {
        this.color = new OptionsColor_1.OptionsColor();
        this.width = 0.5;
        this.opacity = 1;
    }
    DrawStroke.prototype.load = function (data) {
        var _a;
        if (data !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (typeof this.color.value === "string") {
                this.opacity = (_a = Utils_1.ColorUtils.stringToAlpha(this.color.value)) !== null && _a !== void 0 ? _a : this.opacity;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return DrawStroke;
}());
exports.DrawStroke = DrawStroke;
