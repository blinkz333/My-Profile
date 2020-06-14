"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Links = void 0;
var LinksShadow_1 = require("./LinksShadow");
var LinksTriangle_1 = require("./LinksTriangle");
var OptionsColor_1 = require("../../OptionsColor");
var Links = (function () {
    function Links() {
        this.blink = false;
        this.color = new OptionsColor_1.OptionsColor();
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.opacity = 1;
        this.shadow = new LinksShadow_1.LinksShadow();
        this.triangles = new LinksTriangle_1.LinksTriangle();
        this.width = 1;
        this.warp = false;
    }
    Links.prototype.load = function (data) {
        if (data !== undefined) {
            if (data.id !== undefined) {
                this.id = data.id;
            }
            if (data.blink !== undefined) {
                this.blink = data.blink;
            }
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
            if (data.consent !== undefined) {
                this.consent = data.consent;
            }
            if (data.distance !== undefined) {
                this.distance = data.distance;
            }
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.opacity !== undefined) {
                this.opacity = data.opacity;
            }
            this.shadow.load(data.shadow);
            this.triangles.load(data.triangles);
            if (data.width !== undefined) {
                this.width = data.width;
            }
            if (data.warp !== undefined) {
                this.warp = data.warp;
            }
        }
    };
    return Links;
}());
exports.Links = Links;
