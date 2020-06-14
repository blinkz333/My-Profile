"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
var Utils_1 = require("../Utils");
var Canvas = (function () {
    function Canvas(container) {
        this.container = container;
        this.size = {
            height: 0,
            width: 0,
        };
        this.context = null;
        this.generatedCanvas = false;
    }
    Canvas.prototype.init = function () {
        this.resize();
        var container = this.container;
        var options = container.options;
        var cover = options.backgroundMask.cover;
        var color = cover.color;
        var trail = options.particles.move.trail;
        this.coverColor = Utils_1.ColorUtils.colorToRgb(color);
        this.trailFillColor = Utils_1.ColorUtils.colorToRgb(trail.fillColor);
        this.paint();
    };
    Canvas.prototype.loadCanvas = function (canvas, generatedCanvas) {
        var _a;
        if (!canvas.className) {
            canvas.className = Utils_1.Constants.canvasClass;
        }
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        this.generatedCanvas = generatedCanvas !== null && generatedCanvas !== void 0 ? generatedCanvas : false;
        this.element = canvas;
        this.size.height = canvas.offsetHeight;
        this.size.width = canvas.offsetWidth;
        this.context = this.element.getContext("2d");
        this.container.retina.init();
        this.initBackground();
    };
    Canvas.prototype.destroy = function () {
        var _a;
        if (this.generatedCanvas) {
            (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
        }
        if (this.context) {
            Utils_1.CanvasUtils.clear(this.context, this.size);
        }
    };
    Canvas.prototype.resize = function () {
        if (this.element) {
            this.element.width = this.size.width;
            this.element.height = this.size.height;
        }
    };
    Canvas.prototype.paint = function () {
        var container = this.container;
        var options = container.options;
        if (this.context) {
            if (options.backgroundMask.enable && options.backgroundMask.cover && this.coverColor) {
                this.paintBase(Utils_1.ColorUtils.getStyleFromRgb(this.coverColor));
            }
            else {
                this.paintBase();
            }
        }
    };
    Canvas.prototype.clear = function () {
        var container = this.container;
        var options = container.options;
        var trail = options.particles.move.trail;
        if (options.backgroundMask.enable) {
            this.paint();
        }
        else if (trail.enable && trail.length > 0 && this.trailFillColor) {
            this.paintBase(Utils_1.ColorUtils.getStyleFromRgb(this.trailFillColor, 1 / trail.length));
        }
        else if (this.context) {
            Utils_1.CanvasUtils.clear(this.context, this.size);
        }
    };
    Canvas.prototype.isPointInPath = function (path, point) {
        var _a, _b;
        return (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.isPointInPath(path, point.x, point.y)) !== null && _b !== void 0 ? _b : false;
    };
    Canvas.prototype.drawLinkTriangle = function (p1, link1, link2) {
        var _a, _b;
        var container = this.container;
        var options = container.options;
        var p2 = link1.destination;
        var p3 = link2.destination;
        var triangleOptions = p1.particlesOptions.links.triangles;
        var opacityTriangle = (_a = triangleOptions.opacity) !== null && _a !== void 0 ? _a : (link1.opacity + link2.opacity) / 2;
        var pos1 = p1.getPosition();
        var pos2 = p2.getPosition();
        var pos3 = p3.getPosition();
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var colorTriangle = Utils_1.ColorUtils.colorToRgb(triangleOptions.color);
        if (!colorTriangle) {
            var linksOptions = p1.particlesOptions.links;
            var linkColor = linksOptions.id !== undefined
                ? container.particles.linksColors[linksOptions.id]
                : container.particles.linksColor;
            if (linkColor === Utils_1.Constants.randomColorValue) {
                colorTriangle = Utils_1.ColorUtils.getRandomRgbColor();
            }
            else if (linkColor === "mid") {
                var sourceColor = p1.getColor();
                var destColor = p2.getColor();
                if (sourceColor && destColor) {
                    colorTriangle = Utils_1.ColorUtils.mix(sourceColor, destColor, p1.size.value, p2.size.value);
                }
                else {
                    var hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
                    if (!hslColor) {
                        return;
                    }
                    colorTriangle = Utils_1.ColorUtils.hslToRgb(hslColor);
                }
            }
            else {
                colorTriangle = linkColor;
            }
        }
        var width = (_b = p1.linksWidth) !== null && _b !== void 0 ? _b : container.retina.linksWidth;
        Utils_1.CanvasUtils.drawLinkTriangle(ctx, width, pos1, pos2, pos3, options.backgroundMask.enable, colorTriangle, opacityTriangle);
    };
    Canvas.prototype.drawLinkLine = function (p1, link) {
        var _a;
        var container = this.container;
        var options = container.options;
        var p2 = link.destination;
        var opacity = link.opacity;
        var pos1 = p1.getPosition();
        var pos2 = p2.getPosition();
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var colorLine;
        var twinkle = p1.particlesOptions.twinkle.lines;
        if (twinkle.enable) {
            var twinkleFreq = twinkle.frequency;
            var twinkleRgb = Utils_1.ColorUtils.colorToRgb(twinkle.color);
            var twinkling = Math.random() < twinkleFreq;
            if (twinkling && twinkleRgb !== undefined) {
                colorLine = twinkleRgb;
                opacity = twinkle.opacity;
            }
        }
        if (!colorLine) {
            var linksOptions = p1.particlesOptions.links;
            var linkColor = linksOptions.id !== undefined
                ? container.particles.linksColors[linksOptions.id]
                : container.particles.linksColor;
            if (linkColor === Utils_1.Constants.randomColorValue) {
                colorLine = Utils_1.ColorUtils.getRandomRgbColor();
            }
            else if (linkColor === "mid") {
                var sourceColor = p1.getColor();
                var destColor = p2.getColor();
                if (sourceColor && destColor) {
                    colorLine = Utils_1.ColorUtils.mix(sourceColor, destColor, p1.size.value, p2.size.value);
                }
                else {
                    var hslColor = sourceColor !== null && sourceColor !== void 0 ? sourceColor : destColor;
                    if (!hslColor) {
                        return;
                    }
                    colorLine = Utils_1.ColorUtils.hslToRgb(hslColor);
                }
            }
            else {
                colorLine = linkColor;
            }
        }
        var width = (_a = p1.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth;
        Utils_1.CanvasUtils.drawLinkLine(ctx, width, pos1, pos2, p1.particlesOptions.links.distance, container.canvas.size, p1.particlesOptions.links.warp, options.backgroundMask.enable, colorLine, opacity, p1.particlesOptions.links.shadow);
    };
    Canvas.prototype.drawConnectLine = function (p1, p2) {
        var _a;
        var lineStyle = this.lineStyle(p1, p2);
        if (!lineStyle) {
            return;
        }
        var ctx = this.context;
        if (!ctx) {
            return;
        }
        var pos1 = p1.getPosition();
        var pos2 = p2.getPosition();
        Utils_1.CanvasUtils.drawConnectLine(ctx, (_a = p1.linksWidth) !== null && _a !== void 0 ? _a : this.container.retina.linksWidth, lineStyle, pos1, pos2);
    };
    Canvas.prototype.drawGrabLine = function (particle, lineColor, opacity, mousePos) {
        var _a;
        var container = this.container;
        var ctx = container.canvas.context;
        if (!ctx) {
            return;
        }
        var beginPos = particle.getPosition();
        Utils_1.CanvasUtils.drawGrabLine(ctx, (_a = particle.linksWidth) !== null && _a !== void 0 ? _a : container.retina.linksWidth, beginPos, mousePos, lineColor, opacity);
    };
    Canvas.prototype.drawParticle = function (particle, delta) {
        var _a, _b;
        var pColor = particle.getColor();
        if (pColor === undefined) {
            return;
        }
        var container = this.container;
        var options = container.options;
        var twinkle = particle.particlesOptions.twinkle.particles;
        var twinkleFreq = twinkle.frequency;
        var twinkleRgb = Utils_1.ColorUtils.colorToRgb(twinkle.color);
        var twinkling = twinkle.enable && Math.random() < twinkleFreq;
        var radius = (_a = particle.bubble.radius) !== null && _a !== void 0 ? _a : particle.size.value;
        var opacity = twinkling ? twinkle.opacity : (_b = particle.bubble.opacity) !== null && _b !== void 0 ? _b : particle.opacity.value;
        var infectionStage = particle.infectionStage;
        var infection = options.infection;
        var infectionStages = infection.stages;
        var infectionColor = infectionStage !== undefined ? infectionStages[infectionStage].color : undefined;
        var infectionRgb = Utils_1.ColorUtils.colorToRgb(infectionColor);
        var color = twinkling && twinkleRgb !== undefined ? twinkleRgb : infectionRgb !== null && infectionRgb !== void 0 ? infectionRgb : Utils_1.ColorUtils.hslToRgb(pColor);
        var colorValue = color !== undefined ? Utils_1.ColorUtils.getStyleFromRgb(color, opacity) : undefined;
        if (!this.context || !colorValue) {
            return;
        }
        if (particle.links.length > 0) {
            this.context.save();
            var _loop_1 = function (link) {
                if (particle.particlesOptions.links.triangles.enable) {
                    var links_1 = particle.links.map(function (l) { return l.destination; });
                    var vertices = link.destination.links.filter(function (t) { return links_1.indexOf(t.destination) >= 0; });
                    if (vertices.length) {
                        for (var _i = 0, vertices_1 = vertices; _i < vertices_1.length; _i++) {
                            var vertice = vertices_1[_i];
                            this_1.drawLinkTriangle(particle, link, vertice);
                        }
                    }
                }
                this_1.drawLinkLine(particle, link);
            };
            var this_1 = this;
            for (var _i = 0, _c = particle.links; _i < _c.length; _i++) {
                var link = _c[_i];
                _loop_1(link);
            }
            this.context.restore();
        }
        Utils_1.CanvasUtils.drawParticle(this.container, this.context, particle, delta, colorValue, options.backgroundMask.enable, radius, opacity, particle.particlesOptions.shadow);
    };
    Canvas.prototype.drawPlugin = function (plugin, delta) {
        if (!this.context) {
            return;
        }
        Utils_1.CanvasUtils.drawPlugin(this.context, plugin, delta);
    };
    Canvas.prototype.paintBase = function (baseColor) {
        if (this.context) {
            Utils_1.CanvasUtils.paintBase(this.context, this.size, baseColor);
        }
    };
    Canvas.prototype.lineStyle = function (p1, p2) {
        var container = this.container;
        var options = container.options;
        var connectOptions = options.interactivity.modes.connect;
        if (this.context) {
            return Utils_1.CanvasUtils.gradient(this.context, p1, p2, connectOptions.links.opacity);
        }
    };
    Canvas.prototype.initBackground = function () {
        var container = this.container;
        var options = container.options;
        var background = options.background;
        var element = this.element;
        if (!element) {
            return;
        }
        var elementStyle = element.style;
        if (background.color) {
            var color = Utils_1.ColorUtils.colorToRgb(background.color);
            if (color) {
                elementStyle.backgroundColor = Utils_1.ColorUtils.getStyleFromRgb(color, background.opacity);
            }
        }
        if (background.image) {
            elementStyle.backgroundImage = background.image;
        }
        if (background.position) {
            elementStyle.backgroundPosition = background.position;
        }
        if (background.repeat) {
            elementStyle.backgroundRepeat = background.repeat;
        }
        if (background.size) {
            elementStyle.backgroundSize = background.size;
        }
    };
    return Canvas;
}());
exports.Canvas = Canvas;
