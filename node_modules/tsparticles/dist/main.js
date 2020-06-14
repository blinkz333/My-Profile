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
exports.Main = void 0;
var main_slim_1 = require("./main.slim");
var AbsorbersPlugin_1 = require("./Plugins/Absorbers/AbsorbersPlugin");
var EmittersPlugin_1 = require("./Plugins/Emitters/EmittersPlugin");
var PolygonMaskPlugin_1 = require("./Plugins/PolygonMask/PolygonMaskPlugin");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addPlugin(AbsorbersPlugin_1.AbsorbersPlugin);
        _this.addPlugin(EmittersPlugin_1.EmittersPlugin);
        _this.addPlugin(PolygonMaskPlugin_1.PolygonMaskPlugin);
        return _this;
    }
    return Main;
}(main_slim_1.MainSlim));
exports.Main = Main;
