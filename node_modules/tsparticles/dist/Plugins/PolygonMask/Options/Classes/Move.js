"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
var MoveType_1 = require("../../Enums/MoveType");
var Move = (function () {
    function Move() {
        this.radius = 10;
        this.type = MoveType_1.MoveType.path;
    }
    Move.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    };
    return Move;
}());
exports.Move = Move;
