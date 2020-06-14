"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksShadow = void 0;
var OptionsColor_1 = require("../../OptionsColor");
var LinksShadow = (function () {
    function LinksShadow() {
        this.blur = 5;
        this.color = new OptionsColor_1.OptionsColor();
        this.enable = false;
        this.color.value = "lime";
    }
    LinksShadow.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.blur !== undefined) {
                this.blur = data.blur;
            }
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
        }
    };
    return LinksShadow;
}());
exports.LinksShadow = LinksShadow;
