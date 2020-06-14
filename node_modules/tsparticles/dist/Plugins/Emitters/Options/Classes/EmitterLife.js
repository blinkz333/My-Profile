"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterLife = void 0;
var EmitterLife = (function () {
    function EmitterLife() {
    }
    EmitterLife.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.count !== undefined) {
                this.count = data.count;
            }
            if (data.delay !== undefined) {
                this.delay = data.delay;
            }
            if (data.duration !== undefined) {
                this.duration = data.duration;
            }
        }
    };
    return EmitterLife;
}());
exports.EmitterLife = EmitterLife;
