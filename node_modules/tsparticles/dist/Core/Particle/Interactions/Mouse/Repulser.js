"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repulser = void 0;
var Enums_1 = require("../../../../Enums");
var Utils_1 = require("../../../../Utils");
var Repulser = (function () {
    function Repulser() {
    }
    Repulser.repulse = function (container, _delta) {
        var options = container.options;
        var mouseMoveStatus = container.interactivity.status === Utils_1.Constants.mouseMoveEvent;
        var events = options.interactivity.events;
        var hoverEnabled = events.onHover.enable;
        var hoverMode = events.onHover.mode;
        var clickEnabled = events.onClick.enable;
        var clickMode = events.onClick.mode;
        var divMode = events.onDiv.mode;
        var divEnabled = events.onDiv.enable;
        if (mouseMoveStatus && hoverEnabled && Utils_1.Utils.isInArray(Enums_1.HoverMode.repulse, hoverMode)) {
            this.hoverRepulse(container);
        }
        else if (clickEnabled && Utils_1.Utils.isInArray(Enums_1.ClickMode.repulse, clickMode)) {
            this.clickRepulse(container);
        }
        else if (divEnabled && Utils_1.Utils.isInArray(Enums_1.DivMode.repulse, divMode)) {
            this.divRepulse(container);
        }
    };
    Repulser.divRepulse = function (container) {
        var options = container.options;
        var elem = document.getElementById(options.interactivity.events.onDiv.elementId);
        if (!elem) {
            return;
        }
        var pxRatio = container.retina.pixelRatio;
        var pos = {
            x: (elem.offsetLeft + elem.offsetWidth / 2) * pxRatio,
            y: (elem.offsetTop + elem.offsetHeight / 2) * pxRatio,
        };
        var repulseRadius = (elem.offsetWidth / 2) * pxRatio;
        this.processRepulse(container, pos, repulseRadius);
    };
    Repulser.hoverRepulse = function (container) {
        var mousePos = container.interactivity.mouse.position;
        if (!mousePos) {
            return;
        }
        var repulseRadius = container.retina.repulseModeDistance;
        this.processRepulse(container, mousePos, repulseRadius);
    };
    Repulser.processRepulse = function (container, position, repulseRadius) {
        var query = container.particles.quadTree.query(new Utils_1.Circle(position.x, position.y, repulseRadius));
        for (var _i = 0, query_1 = query; _i < query_1.length; _i++) {
            var particle = query_1[_i];
            var _a = Utils_1.Utils.getDistances(particle.position, position), dx = _a.dx, dy = _a.dy, distance = _a.distance;
            var normVec = {
                x: dx / distance,
                y: dy / distance,
            };
            var velocity = container.options.interactivity.modes.repulse.speed * 100;
            var repulseFactor = Utils_1.Utils.clamp((1 - Math.pow(distance / repulseRadius, 2)) * velocity, 0, 50);
            var outMode = particle.particlesOptions.move.outMode;
            var sizeValue = particle.size.value;
            var pos = {
                x: particle.position.x + normVec.x * repulseFactor,
                y: particle.position.y + normVec.y * repulseFactor,
            };
            if (outMode === Enums_1.OutMode.bounce ||
                outMode === Enums_1.OutMode.bounceVertical ||
                outMode === Enums_1.OutMode.bounceHorizontal) {
                var isInside = {
                    horizontal: pos.x - sizeValue > 0 && pos.x + sizeValue < container.canvas.size.width,
                    vertical: pos.y - sizeValue > 0 && pos.y + sizeValue < container.canvas.size.height,
                };
                if (outMode === Enums_1.OutMode.bounceVertical || isInside.horizontal) {
                    particle.position.x = pos.x;
                }
                if (outMode === Enums_1.OutMode.bounceHorizontal || isInside.vertical) {
                    particle.position.y = pos.y;
                }
            }
            else {
                particle.position.x = pos.x;
                particle.position.y = pos.y;
            }
        }
    };
    Repulser.clickRepulse = function (container) {
        if (!container.repulse.finish) {
            if (!container.repulse.count) {
                container.repulse.count = 0;
            }
            container.repulse.count++;
            if (container.repulse.count === container.particles.count) {
                container.repulse.finish = true;
            }
        }
        if (container.repulse.clicking) {
            var repulseDistance = container.retina.repulseModeDistance;
            var repulseRadius = Math.pow(repulseDistance / 6, 3);
            var mouseClickPos = container.interactivity.mouse.clickPosition;
            if (mouseClickPos === undefined) {
                return;
            }
            var range = new Utils_1.Circle(mouseClickPos.x, mouseClickPos.y, repulseRadius);
            var query = container.particles.quadTree.query(range);
            for (var _i = 0, query_2 = query; _i < query_2.length; _i++) {
                var particle = query_2[_i];
                var _a = Utils_1.Utils.getDistances(mouseClickPos, particle.position), dx = _a.dx, dy = _a.dy, distance = _a.distance;
                var d = distance * distance;
                var velocity = container.options.interactivity.modes.repulse.speed;
                var force = (-repulseRadius * velocity) / d;
                if (d <= repulseRadius) {
                    container.repulse.particles.push(particle);
                    this.processClickRepulse(container, particle, dx, dy, force);
                }
            }
        }
        else if (container.repulse.clicking === false) {
            for (var _b = 0, _c = container.repulse.particles; _b < _c.length; _b++) {
                var particle = _c[_b];
                particle.velocity.horizontal = particle.initialVelocity.horizontal;
                particle.velocity.vertical = particle.initialVelocity.vertical;
            }
            container.repulse.particles = [];
        }
    };
    Repulser.processClickRepulse = function (container, particle, dx, dy, force) {
        var options = container.options;
        var f = Math.atan2(dy, dx);
        particle.velocity.horizontal = force * Math.cos(f);
        particle.velocity.vertical = force * Math.sin(f);
        var outMode = options.particles.move.outMode;
        if (outMode === Enums_1.OutMode.bounce || outMode === Enums_1.OutMode.bounceHorizontal || outMode === Enums_1.OutMode.bounceVertical) {
            var pos = {
                x: particle.position.x + particle.velocity.horizontal,
                y: particle.position.y + particle.velocity.vertical,
            };
            if (outMode !== Enums_1.OutMode.bounceVertical) {
                if (pos.x + particle.size.value > container.canvas.size.width || pos.x - particle.size.value < 0) {
                    particle.velocity.horizontal *= -1;
                }
            }
            if (outMode !== Enums_1.OutMode.bounceHorizontal) {
                if (pos.y + particle.size.value > container.canvas.size.height || pos.y - particle.size.value < 0) {
                    particle.velocity.vertical *= -1;
                }
            }
        }
    };
    return Repulser;
}());
exports.Repulser = Repulser;
