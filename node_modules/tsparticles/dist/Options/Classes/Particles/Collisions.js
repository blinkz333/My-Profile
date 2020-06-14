"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collisions = void 0;
var Enums_1 = require("../../../Enums");
var Collisions = (function () {
    function Collisions() {
        this.enable = false;
        this.mode = Enums_1.CollisionMode.bounce;
    }
    Collisions.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.mode !== undefined) {
                this.mode = data.mode;
            }
        }
    };
    return Collisions;
}());
exports.Collisions = Collisions;
