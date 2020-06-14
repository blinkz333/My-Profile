"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasUtils = void 0;
var ColorUtils_1 = require("./ColorUtils");
var Utils_1 = require("./Utils");
var CanvasUtils = (function () {
    function CanvasUtils() {
    }
    CanvasUtils.paintBase = function (context, dimension, baseColor) {
        context.save();
        context.fillStyle = baseColor !== null && baseColor !== void 0 ? baseColor : "rgba(0,0,0,0)";
        context.fillRect(0, 0, dimension.width, dimension.height);
        context.restore();
    };
    CanvasUtils.clear = function (context, dimension) {
        context.clearRect(0, 0, dimension.width, dimension.height);
    };
    CanvasUtils.drawLinkLine = function (context, width, begin, end, maxDistance, canvasSize, warp, backgroundMask, colorLine, opacity, shadow) {
        var drawn = false;
        if (Utils_1.Utils.getDistance(begin, end) <= maxDistance) {
            this.drawLine(context, begin, end);
            drawn = true;
        }
        else if (warp) {
            var pi1 = void 0;
            var pi2 = void 0;
            var endNE = {
                x: end.x - canvasSize.width,
                y: end.y,
            };
            var _a = Utils_1.Utils.getDistances(begin, endNE), dx = _a.dx, dy = _a.dy, distance = _a.distance;
            if (distance <= maxDistance) {
                var yi = begin.y - (dy / dx) * begin.x;
                pi1 = { x: 0, y: yi };
                pi2 = { x: canvasSize.width, y: yi };
            }
            else {
                var endSW = {
                    x: end.x,
                    y: end.y - canvasSize.height,
                };
                var _b = Utils_1.Utils.getDistances(begin, endSW), dx_1 = _b.dx, dy_1 = _b.dy, distance_1 = _b.distance;
                if (distance_1 <= maxDistance) {
                    var yi = begin.y - (dy_1 / dx_1) * begin.x;
                    var xi = -yi / (dy_1 / dx_1);
                    pi1 = { x: xi, y: 0 };
                    pi2 = { x: xi, y: canvasSize.height };
                }
                else {
                    var endSE = {
                        x: end.x - canvasSize.width,
                        y: end.y - canvasSize.height,
                    };
                    var _c = Utils_1.Utils.getDistances(begin, endSE), dx_2 = _c.dx, dy_2 = _c.dy, distance_2 = _c.distance;
                    if (distance_2 <= maxDistance) {
                        var yi = begin.y - (dy_2 / dx_2) * begin.x;
                        var xi = -yi / (dy_2 / dx_2);
                        pi1 = { x: xi, y: yi };
                        pi2 = { x: pi1.x + canvasSize.width, y: pi1.y + canvasSize.height };
                    }
                }
            }
            if (pi1 && pi2) {
                this.drawLine(context, begin, pi1);
                this.drawLine(context, end, pi2);
                drawn = true;
            }
        }
        if (!drawn) {
            return;
        }
        context.lineWidth = width;
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorLine, opacity);
        if (shadow.enable) {
            var shadowColor = ColorUtils_1.ColorUtils.colorToRgb(shadow.color);
            if (shadowColor) {
                context.shadowBlur = shadow.blur;
                context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromRgb(shadowColor);
            }
        }
        context.stroke();
    };
    CanvasUtils.drawLinkTriangle = function (context, width, pos1, pos2, pos3, backgroundMask, colorTriangle, opacityTriangle) {
        this.drawTriangle(context, pos1, pos2, pos3);
        context.lineWidth = width;
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        context.fillStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorTriangle, opacityTriangle);
        context.fill();
    };
    CanvasUtils.drawConnectLine = function (context, width, lineStyle, begin, end) {
        context.save();
        this.drawLine(context, begin, end);
        context.lineWidth = width;
        context.strokeStyle = lineStyle;
        context.stroke();
        context.restore();
    };
    CanvasUtils.gradient = function (context, p1, p2, opacity) {
        var gradStop = Math.floor(p2.size.value / p1.size.value);
        var color1 = p1.getColor();
        var color2 = p2.getColor();
        if (!color1 || !color2) {
            return;
        }
        var sourcePos = p1.getPosition();
        var destPos = p2.getPosition();
        var midRgb = ColorUtils_1.ColorUtils.mix(color1, color2, p1.size.value, p2.size.value);
        var grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
        grad.addColorStop(0, ColorUtils_1.ColorUtils.getStyleFromHsl(color1, opacity));
        grad.addColorStop(gradStop > 1 ? 1 : gradStop, ColorUtils_1.ColorUtils.getStyleFromRgb(midRgb, opacity));
        grad.addColorStop(1, ColorUtils_1.ColorUtils.getStyleFromHsl(color2, opacity));
        return grad;
    };
    CanvasUtils.drawGrabLine = function (context, width, begin, end, colorLine, opacity) {
        context.save();
        this.drawLine(context, begin, end);
        context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(colorLine, opacity);
        context.lineWidth = width;
        context.stroke();
        context.restore();
    };
    CanvasUtils.drawParticle = function (container, context, particle, delta, colorValue, backgroundMask, radius, opacity, shadow) {
        var pos = particle.getPosition();
        context.save();
        context.translate(pos.x, pos.y);
        context.beginPath();
        if (particle.angle !== 0) {
            context.rotate((particle.angle * Math.PI) / 180);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        var shadowColor = particle.shadowColor;
        if (shadow.enable && shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = ColorUtils_1.ColorUtils.getStyleFromRgb(shadowColor);
            context.shadowOffsetX = shadow.offset.x;
            context.shadowOffsetY = shadow.offset.y;
        }
        context.fillStyle = colorValue;
        var stroke = particle.stroke;
        context.lineWidth = stroke.width;
        if (particle.strokeColor) {
            context.strokeStyle = ColorUtils_1.ColorUtils.getStyleFromRgb(particle.strokeColor, particle.stroke.opacity);
        }
        if (particle.close) {
            context.closePath();
        }
        this.drawShape(container, context, particle, radius, opacity, delta);
        if (stroke.width > 0 && particle.strokeColor) {
            context.stroke();
        }
        if (particle.fill) {
            context.fill();
        }
        context.restore();
        context.save();
        context.translate(pos.x, pos.y);
        if (particle.angle !== 0) {
            context.rotate((particle.angle * Math.PI) / 180);
        }
        if (backgroundMask) {
            context.globalCompositeOperation = "destination-out";
        }
        this.drawShapeAfterEffect(container, context, particle, radius, opacity, delta);
        context.restore();
    };
    CanvasUtils.drawShape = function (container, context, particle, radius, opacity, delta) {
        if (!particle.shape) {
            return;
        }
        var drawer = container.drawers[particle.shape];
        if (!drawer) {
            return;
        }
        drawer.draw(context, particle, radius, opacity, delta);
    };
    CanvasUtils.drawShapeAfterEffect = function (container, context, particle, radius, opacity, delta) {
        if (!particle.shape) {
            return;
        }
        var drawer = container.drawers[particle.shape];
        if (!(drawer === null || drawer === void 0 ? void 0 : drawer.afterEffect)) {
            return;
        }
        drawer.afterEffect(context, particle, radius, opacity, delta);
    };
    CanvasUtils.drawPlugin = function (context, plugin, delta) {
        if (plugin.draw !== undefined) {
            context.save();
            plugin.draw(context, delta);
            context.restore();
        }
    };
    CanvasUtils.drawLine = function (context, begin, end) {
        context.beginPath();
        context.moveTo(begin.x, begin.y);
        context.lineTo(end.x, end.y);
        context.closePath();
    };
    CanvasUtils.drawTriangle = function (context, p1, p2, p3) {
        context.beginPath();
        context.moveTo(p1.x, p1.y);
        context.lineTo(p2.x, p2.y);
        context.lineTo(p3.x, p3.y);
        context.closePath();
    };
    return CanvasUtils;
}());
exports.CanvasUtils = CanvasUtils;
