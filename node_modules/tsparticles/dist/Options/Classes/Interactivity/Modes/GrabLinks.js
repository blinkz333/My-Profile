"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrabLinks = void 0;
var OptionsColor_1 = require("../../OptionsColor");
var GrabLinks = (function () {
    function GrabLinks() {
        this.opacity = 1;
    }
    GrabLinks.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            if (data.color !== undefined) {
                this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            }
        }
    };
    return GrabLinks;
}());
exports.GrabLinks = GrabLinks;
