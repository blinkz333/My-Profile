"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = (function () {
    function Point(position, particle) {
        this.position = {
            x: position.x,
            y: position.y,
        };
        this.particle = particle;
    }
    return Point;
}());
exports.Point = Point;
