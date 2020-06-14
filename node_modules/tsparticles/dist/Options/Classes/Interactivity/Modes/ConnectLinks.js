"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectLinks = void 0;
var ConnectLinks = (function () {
    function ConnectLinks() {
        this.opacity = 0.5;
    }
    ConnectLinks.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
        }
    };
    return ConnectLinks;
}());
exports.ConnectLinks = ConnectLinks;
