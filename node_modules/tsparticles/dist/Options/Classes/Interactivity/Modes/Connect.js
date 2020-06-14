"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connect = void 0;
var ConnectLinks_1 = require("./ConnectLinks");
var Connect = (function () {
    function Connect() {
        this.distance = 80;
        this.links = new ConnectLinks_1.ConnectLinks();
        this.radius = 60;
    }
    Object.defineProperty(Connect.prototype, "line_linked", {
        get: function () {
            return this.links;
        },
        set: function (value) {
            this.links = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Connect.prototype, "lineLinked", {
        get: function () {
            return this.links;
        },
        set: function (value) {
            this.links = value;
        },
        enumerable: false,
        configurable: true
    });
    Connect.prototype.load = function (data) {
        var _a, _b;
        if (data !== undefined) {
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            this.links.load((_b = (_a = data.links) !== null && _a !== void 0 ? _a : data.lineLinked) !== null && _b !== void 0 ? _b : data.line_linked);
            if (data.radius !== undefined) {
                this.radius = data.radius;
            }
        }
    };
    return Connect;
}());
exports.Connect = Connect;
