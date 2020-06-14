"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDrawer = void 0;
var Utils_1 = require("../Utils");
var Enums_1 = require("../Enums");
var ImageDrawer = (function () {
    function ImageDrawer() {
        this.images = [];
    }
    ImageDrawer.prototype.getImages = function (container) {
        var containerImages = this.images.filter(function (t) { return t.id === container.id; });
        if (!containerImages.length) {
            this.images.push({
                id: container.id,
                images: [],
            });
            return this.getImages(container);
        }
        else {
            return containerImages[0];
        }
    };
    ImageDrawer.prototype.addImage = function (container, image) {
        var containerImages = this.getImages(container);
        containerImages === null || containerImages === void 0 ? void 0 : containerImages.images.push(image);
    };
    ImageDrawer.prototype.init = function (container) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var options, shapeOptions, imageOptions, _i, imageOptions_1, optionsImage;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        options = container.options;
                        shapeOptions = options.particles.shape;
                        if (!Utils_1.Utils.isInArray(Enums_1.ShapeType.image, shapeOptions.type) &&
                            !Utils_1.Utils.isInArray(Enums_1.ShapeType.images, shapeOptions.type)) {
                            return [2];
                        }
                        imageOptions = (_a = shapeOptions.options[Enums_1.ShapeType.images]) !== null && _a !== void 0 ? _a : shapeOptions.options[Enums_1.ShapeType.image];
                        if (!(imageOptions instanceof Array)) return [3, 5];
                        _i = 0, imageOptions_1 = imageOptions;
                        _b.label = 1;
                    case 1:
                        if (!(_i < imageOptions_1.length)) return [3, 4];
                        optionsImage = imageOptions_1[_i];
                        return [4, this.loadImageShape(container, optionsImage)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [3, 7];
                    case 5: return [4, this.loadImageShape(container, imageOptions)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [2];
                }
            });
        });
    };
    ImageDrawer.prototype.destroy = function () {
        this.images = [];
    };
    ImageDrawer.prototype.loadImageShape = function (container, imageShape) {
        return __awaiter(this, void 0, void 0, function () {
            var image, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 5, , 6]);
                        if (!imageShape.replaceColor) return [3, 2];
                        return [4, Utils_1.Utils.downloadSvgImage(imageShape.src)];
                    case 1:
                        _a = _c.sent();
                        return [3, 4];
                    case 2: return [4, Utils_1.Utils.loadImage(imageShape.src)];
                    case 3:
                        _a = _c.sent();
                        _c.label = 4;
                    case 4:
                        image = _a;
                        this.addImage(container, image);
                        return [3, 6];
                    case 5:
                        _b = _c.sent();
                        console.log("tsParticles error - " + imageShape.src + " not found");
                        return [3, 6];
                    case 6: return [2];
                }
            });
        });
    };
    ImageDrawer.prototype.draw = function (context, particle, radius, opacity) {
        var _a, _b;
        if (!context) {
            return;
        }
        var image = particle.image;
        var element = (_a = image === null || image === void 0 ? void 0 : image.data) === null || _a === void 0 ? void 0 : _a.element;
        if (!element) {
            return;
        }
        var ratio = (_b = image === null || image === void 0 ? void 0 : image.ratio) !== null && _b !== void 0 ? _b : 1;
        var pos = {
            x: -radius,
            y: -radius,
        };
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = opacity;
        }
        context.drawImage(element, pos.x, pos.y, radius * 2, (radius * 2) / ratio);
        if (!(image === null || image === void 0 ? void 0 : image.data.svgData) || !(image === null || image === void 0 ? void 0 : image.replaceColor)) {
            context.globalAlpha = 1;
        }
    };
    return ImageDrawer;
}());
exports.ImageDrawer = ImageDrawer;
