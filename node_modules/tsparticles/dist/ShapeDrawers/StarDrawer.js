"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarDrawer = void 0;
var StarDrawer = (function () {
    function StarDrawer() {
    }
    StarDrawer.prototype.draw = function (context, particle, radius, opacity, _delta) {
        var _a, _b, _c;
        var star = particle.shapeData;
        var sides = (_b = (_a = star === null || star === void 0 ? void 0 : star.sides) !== null && _a !== void 0 ? _a : star === null || star === void 0 ? void 0 : star.nb_sides) !== null && _b !== void 0 ? _b : 5;
        var inset = (_c = star === null || star === void 0 ? void 0 : star.inset) !== null && _c !== void 0 ? _c : 2;
        context.moveTo(0, 0 - radius);
        for (var i = 0; i < sides; i++) {
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius * inset);
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius);
        }
    };
    return StarDrawer;
}());
exports.StarDrawer = StarDrawer;
