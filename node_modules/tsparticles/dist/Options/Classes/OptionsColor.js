"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsColor = void 0;
var OptionsColor = (function () {
    function OptionsColor() {
        this.value = "#fff";
    }
    OptionsColor.create = function (source, data) {
        var color = source !== null && source !== void 0 ? source : new OptionsColor();
        if (data !== undefined) {
            color.load(typeof data === "string" ? { value: data } : data);
        }
        return color;
    };
    OptionsColor.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return OptionsColor;
}());
exports.OptionsColor = OptionsColor;
