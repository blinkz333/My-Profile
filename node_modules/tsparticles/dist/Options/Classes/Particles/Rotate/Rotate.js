"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rotate = void 0;
var RotateAnimation_1 = require("./RotateAnimation");
var Enums_1 = require("../../../../Enums");
var Rotate = (function () {
    function Rotate() {
        this.animation = new RotateAnimation_1.RotateAnimation();
        this.direction = Enums_1.RotateDirection.clockwise;
        this.random = false;
        this.value = 0;
    }
    Rotate.prototype.load = function (data) {
        if (data !== undefined) {
            this.animation.load(data.animation);
            if (data.random !== undefined) {
                this.random = data.random;
            }
            if (data.direction !== undefined) {
                this.direction = data.direction;
            }
            if (data.value !== undefined) {
                this.value = data.value;
            }
        }
    };
    return Rotate;
}());
exports.Rotate = Rotate;
