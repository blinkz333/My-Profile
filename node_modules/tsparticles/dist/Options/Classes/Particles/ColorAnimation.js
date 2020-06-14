"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorAnimation = void 0;
var ColorAnimation = (function () {
    function ColorAnimation() {
        this.enable = false;
        this.speed = 1;
        this.sync = true;
    }
    ColorAnimation.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.speed !== undefined) {
                this.speed = data.speed;
            }
            if (data.sync !== undefined) {
                this.sync = data.sync;
            }
        }
    };
    return ColorAnimation;
}());
exports.ColorAnimation = ColorAnimation;
