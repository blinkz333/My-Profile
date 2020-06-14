"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalSvg = void 0;
var LocalSvg = (function () {
    function LocalSvg() {
        this.path = [];
        this.size = {
            height: 0,
            width: 0,
        };
    }
    LocalSvg.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.path !== undefined) {
                this.path = data.path;
            }
            if (data.size !== undefined) {
                if (data.size.width !== undefined) {
                    this.size.width = data.size.width;
                }
                if (data.size.height !== undefined) {
                    this.size.height = data.size.height;
                }
            }
        }
    };
    return LocalSvg;
}());
exports.LocalSvg = LocalSvg;
