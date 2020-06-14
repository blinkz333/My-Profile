"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inline = void 0;
var InlineArrangement_1 = require("../../Enums/InlineArrangement");
var Inline = (function () {
    function Inline() {
        this.arrangement = InlineArrangement_1.InlineArrangement.onePerPoint;
    }
    Inline.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.arrangement !== undefined) {
                this.arrangement = data.arrangement;
            }
        }
    };
    return Inline;
}());
exports.Inline = Inline;
