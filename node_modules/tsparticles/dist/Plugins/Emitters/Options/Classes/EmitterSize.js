"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterSize = void 0;
var Enums_1 = require("../../../../Enums");
var EmitterSize = (function () {
    function EmitterSize() {
        this.mode = Enums_1.SizeMode.percent;
        this.height = 0;
        this.width = 0;
    }
    EmitterSize.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
            if (data.height !== undefined) {
                this.height = data.height;
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    };
    return EmitterSize;
}());
exports.EmitterSize = EmitterSize;
