"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleWarp = void 0;
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var CircleWarp = (function (_super) {
    __extends(CircleWarp, _super);
    function CircleWarp(x, y, radius, canvasSize) {
        var _this = _super.call(this, x, y, radius) || this;
        _this.canvasSize = {
            height: canvasSize.height,
            width: canvasSize.width,
        };
        return _this;
    }
    CircleWarp.prototype.contains = function (point) {
        if (_super.prototype.contains.call(this, point)) {
            return true;
        }
        var posNE = {
            x: point.x - this.canvasSize.width,
            y: point.y,
        };
        if (_super.prototype.contains.call(this, posNE)) {
            return true;
        }
        var posSE = {
            x: point.x - this.canvasSize.width,
            y: point.y - this.canvasSize.height,
        };
        if (_super.prototype.contains.call(this, posSE)) {
            return true;
        }
        var posSW = {
            x: point.x,
            y: point.y - this.canvasSize.height,
        };
        return _super.prototype.contains.call(this, posSW);
    };
    CircleWarp.prototype.intersects = function (range) {
        if (_super.prototype.intersects.call(this, range)) {
            return true;
        }
        var rect = range;
        var circle = range;
        var newPos = {
            x: range.position.x - this.canvasSize.width,
            y: range.position.y - this.canvasSize.height,
        };
        if (circle.radius !== undefined) {
            var biggerCircle = new Circle_1.Circle(newPos.x, newPos.y, circle.radius * 2);
            return _super.prototype.intersects.call(this, biggerCircle);
        }
        else if (rect.size !== undefined) {
            var rectSW = new Rectangle_1.Rectangle(newPos.x, newPos.y, rect.size.width * 2, rect.size.height * 2);
            return _super.prototype.intersects.call(this, rectSW);
        }
        return false;
    };
    return CircleWarp;
}(Circle_1.Circle));
exports.CircleWarp = CircleWarp;
