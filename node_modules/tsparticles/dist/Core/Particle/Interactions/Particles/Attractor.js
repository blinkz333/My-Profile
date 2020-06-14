"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attractor = void 0;
var Utils_1 = require("../../../../Utils");
var Attractor = (function () {
    function Attractor() {
    }
    Attractor.attract = function (p1, container, _delta) {
        var _a;
        var options = container.options;
        var distance = (_a = p1.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
        var pos1 = p1.getPosition();
        var query = container.particles.quadTree.query(new Utils_1.Circle(pos1.x, pos1.y, distance));
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var p2 = query_1[_i];
            if (p1 === p2 || p2.particlesOptions.move.attract.enable) {
                continue;
            }
            var pos2 = p2.getPosition();
            var _b = Utils_1.Utils.getDistances(pos1, pos2), dx = _b.dx, dy = _b.dy;
            var rotate = options.particles.move.attract.rotate;
            var ax = dx / (rotate.x * 1000);
            var ay = dy / (rotate.y * 1000);
            p1.velocity.horizontal -= ax;
            p1.velocity.vertical -= ay;
            p2.velocity.horizontal += ax;
            p2.velocity.vertical += ay;
        }
    };
    return Attractor;
}());
exports.Attractor = Attractor;
