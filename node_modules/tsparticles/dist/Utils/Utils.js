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
exports.Utils = void 0;
var Enums_1 = require("../Enums");
var ColorUtils_1 = require("./ColorUtils");
var Utils = (function () {
    function Utils() {
    }
    Utils.replaceColorSvg = function (image, color, opacity) {
        if (!image.svgData) {
            return "";
        }
        var svgXml = image.svgData;
        var rgbHex = /#([0-9A-F]{3,6})/gi;
        return svgXml.replace(rgbHex, function () { return ColorUtils_1.ColorUtils.getStyleFromHsl(color, opacity); });
    };
    Utils.clamp = function (num, min, max) {
        return Math.min(Math.max(num, min), max);
    };
    Utils.isInArray = function (value, array) {
        return value === array || (array instanceof Array && array.indexOf(value) > -1);
    };
    Utils.mix = function (comp1, comp2, weight1, weight2) {
        return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
    };
    Utils.getParticleBaseVelocity = function (particle) {
        var velocityBase;
        switch (particle.direction) {
            case Enums_1.MoveDirection.top:
                velocityBase = { x: 0, y: -1 };
                break;
            case Enums_1.MoveDirection.topRight:
                velocityBase = { x: 0.5, y: -0.5 };
                break;
            case Enums_1.MoveDirection.right:
                velocityBase = { x: 1, y: -0 };
                break;
            case Enums_1.MoveDirection.bottomRight:
                velocityBase = { x: 0.5, y: 0.5 };
                break;
            case Enums_1.MoveDirection.bottom:
                velocityBase = { x: 0, y: 1 };
                break;
            case Enums_1.MoveDirection.bottomLeft:
                velocityBase = { x: -0.5, y: 1 };
                break;
            case Enums_1.MoveDirection.left:
                velocityBase = { x: -1, y: 0 };
                break;
            case Enums_1.MoveDirection.topLeft:
                velocityBase = { x: -0.5, y: -0.5 };
                break;
            default:
                velocityBase = { x: 0, y: 0 };
                break;
        }
        return velocityBase;
    };
    Utils.getDistances = function (pointA, pointB) {
        var dx = pointA.x - pointB.x;
        var dy = pointA.y - pointB.y;
        return { dx: dx, dy: dy, distance: Math.sqrt(dx * dx + dy * dy) };
    };
    Utils.getDistance = function (pointA, pointB) {
        return this.getDistances(pointA, pointB).distance;
    };
    Utils.loadFont = function (character) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4, document.fonts.load(character.weight + " 36px '" + character.font + "'")];
                    case 1:
                        _b.sent();
                        return [3, 3];
                    case 2:
                        _a = _b.sent();
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    Utils.arrayRandomIndex = function (array) {
        return Math.floor(Math.random() * array.length);
    };
    Utils.itemFromArray = function (array, index) {
        return array[index !== undefined ? index : this.arrayRandomIndex(array)];
    };
    Utils.randomInRange = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    Utils.isPointInside = function (point, size, radius) {
        return this.areBoundsInside(this.calculateBounds(point, radius !== null && radius !== void 0 ? radius : 0), size);
    };
    Utils.areBoundsInside = function (bounds, size) {
        return bounds.left < size.width && bounds.right > 0 && bounds.top < size.height && bounds.bottom > 0;
    };
    Utils.calculateBounds = function (point, radius) {
        return {
            bottom: point.y + radius,
            left: point.x - radius,
            right: point.x + radius,
            top: point.y - radius,
        };
    };
    Utils.loadImage = function (source) {
        return new Promise(function (resolve, reject) {
            var image = {
                source: source,
                type: source.substr(source.length - 3),
            };
            if (source) {
                var img_1 = new Image();
                img_1.addEventListener("load", function () {
                    image.element = img_1;
                    resolve(image);
                });
                img_1.addEventListener("error", function () {
                    reject("Error tsParticles - loading image: " + source);
                });
                img_1.src = source;
            }
            else {
                reject("Error tsParticles - No image.src");
            }
        });
    };
    Utils.downloadSvgImage = function (source) {
        return __awaiter(this, void 0, void 0, function () {
            var image, response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!source) return [3, 5];
                        image = {
                            source: source,
                            type: source.substr(source.length - 3),
                        };
                        if (image.type !== "svg") {
                            return [2, this.loadImage(source)];
                        }
                        return [4, fetch(image.source)];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) return [3, 3];
                        _a = image;
                        return [4, response.text()];
                    case 2:
                        _a.svgData = _b.sent();
                        return [2, image];
                    case 3: throw new Error("Error tsParticles - Image not found");
                    case 4: return [3, 6];
                    case 5: throw new Error("Error tsParticles - No image.src");
                    case 6: return [2];
                }
            });
        });
    };
    Utils.deepExtend = function (destination) {
        var _this = this;
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
            var source = sources_1[_a];
            if (source === undefined || source === null) {
                continue;
            }
            var typeOfSource = typeof source;
            if (typeOfSource === "object") {
                var sourceIsArray = Array.isArray(source);
                if (sourceIsArray) {
                    if (typeof destination !== "object" || !destination || !Array.isArray(destination)) {
                        destination = [];
                    }
                }
                else {
                    if (typeof destination !== "object" || !destination || Array.isArray(destination)) {
                        destination = {};
                    }
                }
                var _loop_1 = function (key) {
                    if (key === "__proto__") {
                        return "continue";
                    }
                    var value = source[key];
                    var isObject = typeof value === "object";
                    destination[key] =
                        isObject && Array.isArray(value)
                            ? value.map(function (v) { return _this.deepExtend(destination[key], v); })
                            : this_1.deepExtend(destination[key], value);
                };
                var this_1 = this;
                for (var key in source) {
                    _loop_1(key);
                }
            }
            else {
                destination = source;
            }
        }
        return destination;
    };
    return Utils;
}());
exports.Utils = Utils;
