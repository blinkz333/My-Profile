"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Particles = void 0;
var Links_1 = require("./Links/Links");
var Move_1 = require("./Move");
var ParticlesNumber_1 = require("./ParticlesNumber");
var Opacity_1 = require("./Opacity/Opacity");
var Shape_1 = require("./Shape/Shape");
var Size_1 = require("./Size/Size");
var Rotate_1 = require("./Rotate/Rotate");
var Shadow_1 = require("./Shadow");
var Stroke_1 = require("./Stroke");
var Collisions_1 = require("./Collisions");
var Twinkle_1 = require("./Twinkle/Twinkle");
var AnimatableColor_1 = require("./AnimatableColor");
var Particles = (function () {
    function Particles() {
        this.collisions = new Collisions_1.Collisions();
        this.color = new AnimatableColor_1.AnimatableColor();
        this.links = new Links_1.Links();
        this.move = new Move_1.Move();
        this.number = new ParticlesNumber_1.ParticlesNumber();
        this.opacity = new Opacity_1.Opacity();
        this.rotate = new Rotate_1.Rotate();
        this.shadow = new Shadow_1.Shadow();
        this.shape = new Shape_1.Shape();
        this.size = new Size_1.Size();
        this.stroke = new Stroke_1.Stroke();
        this.twinkle = new Twinkle_1.Twinkle();
    }
    Object.defineProperty(Particles.prototype, "line_linked", {
        get: function () {
            return this.links;
        },
        set: function (value) {
            this.links = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Particles.prototype, "lineLinked", {
        get: function () {
            return this.links;
        },
        set: function (value) {
            this.links = value;
        },
        enumerable: false,
        configurable: true
    });
    Particles.prototype.load = function (data) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (data !== undefined) {
            if (data.color !== undefined) {
                this.color = AnimatableColor_1.AnimatableColor.create(this.color, data.color);
            }
            var links = (_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked;
            if (links !== undefined) {
                this.links.load(links);
            }
            this.move.load(data.move);
            this.number.load(data.number);
            this.opacity.load(data.opacity);
            this.rotate.load(data.rotate);
            this.shape.load(data.shape);
            this.size.load(data.size);
            this.shadow.load(data.shadow);
            this.twinkle.load(data.twinkle);
            var collisions = (_d = (_c = data.move) === null || _c === void 0 ? void 0 : _c.collisions) !== null && _d !== void 0 ? _d : (_e = data.move) === null || _e === void 0 ? void 0 : _e.bounce;
            if (collisions !== undefined) {
                this.collisions.enable = collisions;
            }
            this.collisions.load(data.collisions);
            var strokeToLoad = (_f = data.stroke) !== null && _f !== void 0 ? _f : (_g = data.shape) === null || _g === void 0 ? void 0 : _g.stroke;
            if (strokeToLoad !== undefined) {
                if (strokeToLoad instanceof Array) {
                    this.stroke = strokeToLoad.map(function (s) {
                        var tmp = new Stroke_1.Stroke();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    if (this.stroke instanceof Array) {
                        this.stroke = new Stroke_1.Stroke();
                    }
                    this.stroke.load(strokeToLoad);
                }
            }
        }
    };
    return Particles;
}());
exports.Particles = Particles;
