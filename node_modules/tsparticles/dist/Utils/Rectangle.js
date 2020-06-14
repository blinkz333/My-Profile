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
exports.Rectangle = void 0;
var Range_1 = require("./Range");
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, width, height) {
        var _this = _super.call(this, x, y) || this;
        _this.size = {
            height: height,
            width: width,
        };
        return _this;
    }
    Rectangle.prototype.contains = function (point) {
        return (point.x >= this.position.x - this.size.width &&
            point.x < this.position.x + this.size.width &&
            point.y >= this.position.y - this.size.height &&
            point.y < this.position.y + this.size.height);
    };
    Rectangle.prototype.intersects = function (range) {
        var rect = range;
        var circle = range;
        var w = this.size.width;
        var h = this.size.height;
        var pos1 = this.position;
        var pos2 = range.position;
        if (circle.radius !== undefined) {
            return circle.intersects(this);
        }
        else if (rect.size !== undefined) {
            var size2 = rect.size;
            var w2 = size2.width;
            var h2 = size2.height;
            return (pos2.x - w2 < pos1.x + w &&
                pos2.x + w2 > pos1.x - w &&
                pos2.y - h2 < pos1.y + h &&
                pos2.y + h2 > pos1.y - h);
        }
        return false;
    };
    return Rectangle;
}(Range_1.Range));
exports.Rectangle = Rectangle;
