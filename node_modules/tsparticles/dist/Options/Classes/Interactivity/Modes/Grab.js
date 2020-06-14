"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grab = void 0;
var GrabLinks_1 = require("./GrabLinks");
var Grab = (function () {
    function Grab() {
        this.distance = 100;
        this.links = new GrabLinks_1.GrabLinks();
    }
    Object.defineProperty(Grab.prototype, "line_linked", {
        get: function () {
            return this.links;
        },
        set: function (value) {
            this.links = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Grab.prototype, "lineLinked", {
        get: function () {
            return this.links;
        },
        set: function (value) {
            this.links = value;
        },
        enumerable: false,
        configurable: true
    });
    Grab.prototype.load = function (data) {
        var _a, _b;
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
        }
    };
    return Grab;
}());
exports.Grab = Grab;
