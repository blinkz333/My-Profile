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
exports.PolygonMaskInstance = void 0;
var Enums_1 = require("./Enums");
var Utils_1 = require("../../Utils");
var PolygonMask_1 = require("./Options/Classes/PolygonMask");
var PolygonMaskInstance = (function () {
    function PolygonMaskInstance(container) {
        this.container = container;
        this.dimension = {
            height: 0,
            width: 0,
        };
        this.path2DSupported = Object.prototype.hasOwnProperty.call(window, "Path2D");
        this.options = new PolygonMask_1.PolygonMask();
        this.polygonMaskMoveRadius = this.options.move.radius * container.retina.pixelRatio;
    }
    PolygonMaskInstance.polygonBounce = function (particle) {
        particle.velocity.horizontal = -particle.velocity.horizontal + particle.velocity.vertical / 2;
        particle.velocity.vertical = -particle.velocity.vertical + particle.velocity.horizontal / 2;
    };
    PolygonMaskInstance.drawPolygonMask = function (context, rawData, stroke) {
        var color = Utils_1.ColorUtils.colorToRgb(stroke.color);
        if (color) {
            context.beginPath();
            context.moveTo(rawData[0].x, rawData[0].y);
            for (var i = 1; i < rawData.length; i++) {
                context.lineTo(rawData[i].x, rawData[i].y);
            }
            context.closePath();
            context.strokeStyle = Utils_1.ColorUtils.getStyleFromRgb(color);
            context.lineWidth = stroke.width;
            context.stroke();
        }
    };
    PolygonMaskInstance.drawPolygonMaskPath = function (context, path, stroke, position) {
        context.translate(position.x, position.y);
        var color = Utils_1.ColorUtils.colorToRgb(stroke.color);
        if (color) {
            context.strokeStyle = Utils_1.ColorUtils.getStyleFromRgb(color, stroke.opacity);
            context.lineWidth = stroke.width;
            context.stroke(path);
        }
    };
    PolygonMaskInstance.prototype.initAsync = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var polygonMaskOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.options.load(options === null || options === void 0 ? void 0 : options.polygon);
                        polygonMaskOptions = this.options;
                        this.polygonMaskMoveRadius = polygonMaskOptions.move.radius * this.container.retina.pixelRatio;
                        if (!polygonMaskOptions.enable) return [3, 2];
                        return [4, this.initRawData()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    PolygonMaskInstance.prototype.checkInsidePolygon = function (position) {
        var container = this.container;
        var polygonMaskOptions = this.options;
        if (!polygonMaskOptions.enable ||
            polygonMaskOptions.type === Enums_1.Type.none ||
            polygonMaskOptions.type === Enums_1.Type.inline) {
            return true;
        }
        if (!this.raw) {
            throw new Error(Utils_1.Constants.noPolygonFound);
        }
        var x = position ? position.x : Math.random() * container.canvas.size.width;
        var y = position ? position.y : Math.random() * container.canvas.size.height;
        var inside = false;
        for (var i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
            var xi = this.raw[i].x;
            var yi = this.raw[i].y;
            var xj = this.raw[j].x;
            var yj = this.raw[j].y;
            var intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
            if (intersect) {
                inside = !inside;
            }
        }
        if (polygonMaskOptions.type === Enums_1.Type.inside) {
            return inside;
        }
        else if (polygonMaskOptions.type === Enums_1.Type.outside) {
            return !inside;
        }
        return false;
    };
    PolygonMaskInstance.prototype.resize = function () {
        var _this = this;
        var container = this.container;
        var polygonMaskOptions = this.options;
        if (polygonMaskOptions.enable && polygonMaskOptions.type !== Enums_1.Type.none) {
            if (this.redrawTimeout) {
                clearTimeout(this.redrawTimeout);
            }
            this.redrawTimeout = window.setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.initRawData()];
                        case 1:
                            _a.sent();
                            container.particles.redraw();
                            return [2];
                    }
                });
            }); }, 250);
        }
    };
    PolygonMaskInstance.prototype.stop = function () {
        delete this.raw;
        delete this.paths;
    };
    PolygonMaskInstance.prototype.randomPointInPolygon = function () {
        var container = this.container;
        var polygonMaskOptions = this.options;
        var position;
        if (polygonMaskOptions.type === Enums_1.Type.inline) {
            switch (polygonMaskOptions.inline.arrangement) {
                case Enums_1.InlineArrangement.randomPoint:
                    position = this.getRandomPointOnPolygonPath();
                    break;
                case Enums_1.InlineArrangement.randomLength:
                    position = this.getRandomPointOnPolygonPathByLength();
                    break;
                case Enums_1.InlineArrangement.equidistant:
                    position = this.getEquidistantPointOnPolygonPathByIndex(container.particles.count);
                    break;
                case Enums_1.InlineArrangement.onePerPoint:
                case Enums_1.InlineArrangement.perPoint:
                default:
                    position = this.getPointOnPolygonPathByIndex(container.particles.count);
            }
        }
        else {
            position = {
                x: Math.random() * container.canvas.size.width,
                y: Math.random() * container.canvas.size.height,
            };
        }
        if (this.checkInsidePolygon(position)) {
            return position;
        }
        else {
            return this.randomPointInPolygon();
        }
    };
    PolygonMaskInstance.prototype.particlesInitialization = function () {
        var polygonMaskOptions = this.options;
        if (polygonMaskOptions.enable &&
            polygonMaskOptions.type === Enums_1.Type.inline &&
            (polygonMaskOptions.inline.arrangement === Enums_1.InlineArrangement.onePerPoint ||
                polygonMaskOptions.inline.arrangement === Enums_1.InlineArrangement.perPoint)) {
            this.drawPointsOnPolygonPath();
            return true;
        }
        return false;
    };
    PolygonMaskInstance.prototype.particlePosition = function (position, particle) {
        var _a, _b;
        var polygonMaskOptions = this.options;
        if (polygonMaskOptions.enable && ((_b = (_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
            var pos = { x: 0, y: 0 };
            if (position) {
                pos.x = position.x;
                pos.y = position.y;
            }
            else {
                var randomPoint = this.randomPointInPolygon();
                pos.x = randomPoint.x;
                pos.y = randomPoint.y;
            }
            if (polygonMaskOptions.type === Enums_1.Type.inline && particle) {
                particle.initialPosition = {
                    x: pos.x,
                    y: pos.y,
                };
            }
            return pos;
        }
    };
    PolygonMaskInstance.prototype.particleBounce = function (particle, _delta) {
        var polygonMaskOptions = this.options;
        if (polygonMaskOptions.enable &&
            polygonMaskOptions.type !== Enums_1.Type.none &&
            polygonMaskOptions.type !== Enums_1.Type.inline) {
            if (!this.checkInsidePolygon(particle.getPosition())) {
                PolygonMaskInstance.polygonBounce(particle);
                return true;
            }
        }
        else if (polygonMaskOptions.enable && polygonMaskOptions.type === Enums_1.Type.inline) {
            if (particle.initialPosition) {
                var dist = Utils_1.Utils.getDistance(particle.initialPosition, particle.getPosition());
                if (dist > this.polygonMaskMoveRadius) {
                    PolygonMaskInstance.polygonBounce(particle);
                    return true;
                }
            }
        }
        return false;
    };
    PolygonMaskInstance.prototype.clickPositionValid = function (position) {
        var polygonMaskOptions = this.options;
        if (polygonMaskOptions.enable &&
            polygonMaskOptions.type !== Enums_1.Type.none &&
            polygonMaskOptions.type !== Enums_1.Type.inline) {
            if (this.checkInsidePolygon(position)) {
                return true;
            }
        }
        return false;
    };
    PolygonMaskInstance.prototype.downloadSvgPathToPolygon = function (svgUrl, force) {
        return __awaiter(this, void 0, void 0, function () {
            var polygonMaskOptions, url, forceDownload, req, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        polygonMaskOptions = this.options;
                        url = svgUrl || polygonMaskOptions.url;
                        forceDownload = force !== null && force !== void 0 ? force : false;
                        if (!url || (this.paths !== undefined && !forceDownload)) {
                            return [2, this.raw];
                        }
                        return [4, fetch(url)];
                    case 1:
                        req = _b.sent();
                        if (!req.ok) return [3, 3];
                        _a = this.parseSvgPathToPolygon;
                        return [4, req.text()];
                    case 2: return [2, _a.apply(this, [_b.sent()])];
                    case 3: throw new Error("tsParticles Error - Error occurred during polygon mask download");
                }
            });
        });
    };
    PolygonMaskInstance.prototype.parseSvgPathToPolygon = function (xml, force) {
        var _a;
        var forceDownload = force !== null && force !== void 0 ? force : false;
        if (this.paths !== undefined && !forceDownload) {
            return this.raw;
        }
        var container = this.container;
        var polygonMaskOptions = this.options;
        var parser = new DOMParser();
        var doc = parser.parseFromString(xml, "image/svg+xml");
        var svg = doc.getElementsByTagName("svg")[0];
        var svgPaths = svg.getElementsByTagName("path");
        if (!svgPaths.length) {
            svgPaths = doc.getElementsByTagName("path");
        }
        this.paths = [];
        for (var i = 0; i < svgPaths.length; i++) {
            var path = svgPaths.item(i);
            if (path) {
                this.paths.push({
                    element: path,
                    length: path.getTotalLength(),
                });
            }
        }
        var pxRatio = container.retina.pixelRatio;
        var scale = polygonMaskOptions.scale / pxRatio;
        this.dimension.width = parseFloat(svg.getAttribute("width") || "0") * scale;
        this.dimension.height = parseFloat(svg.getAttribute("height") || "0") * scale;
        var position = (_a = polygonMaskOptions.position) !== null && _a !== void 0 ? _a : {
            x: 50,
            y: 50,
        };
        this.offset = {
            x: (container.canvas.size.width * position.x) / (100 * pxRatio) - this.dimension.width / 2,
            y: (container.canvas.size.height * position.y) / (100 * pxRatio) - this.dimension.height / 2,
        };
        var polygonRaw = [];
        for (var _i = 0, _b = this.paths; _i < _b.length; _i++) {
            var path = _b[_i];
            var segments = path.element.pathSegList;
            var len = segments.numberOfItems;
            var p = {
                x: 0,
                y: 0,
            };
            for (var i = 0; i < len; i++) {
                var segment = segments.getItem(i);
                switch (segment.pathSegType) {
                    case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                    case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                    case window.SVGPathSeg.PATHSEG_ARC_ABS:
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
                        var absSeg = segment;
                        p.x = absSeg.x;
                        p.y = absSeg.y;
                        break;
                    }
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        p.x = segment.x;
                        break;
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        p.y = segment.y;
                        break;
                    case window.SVGPathSeg.PATHSEG_LINETO_REL:
                    case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                    case window.SVGPathSeg.PATHSEG_ARC_REL:
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
                        var relSeg = segment;
                        p.x += relSeg.x;
                        p.y += relSeg.y;
                        break;
                    }
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        p.x += segment.x;
                        break;
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        p.y += segment.y;
                        break;
                    case window.SVGPathSeg.PATHSEG_UNKNOWN:
                    case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                        continue;
                }
                polygonRaw.push({
                    x: p.x * scale + this.offset.x,
                    y: p.y * scale + this.offset.y,
                });
            }
        }
        return polygonRaw;
    };
    PolygonMaskInstance.prototype.draw = function (context) {
        var _a;
        if (!((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        var polygonMaskOptions = this.options;
        if (polygonMaskOptions.enable && polygonMaskOptions.draw.enable) {
            var polygonDraw = polygonMaskOptions.draw;
            var rawData = this.raw;
            for (var _i = 0, _b = this.paths; _i < _b.length; _i++) {
                var path = _b[_i];
                var path2d = path.path2d;
                var path2dSupported = this.path2DSupported;
                if (context) {
                    if (path2dSupported && path2d && this.offset) {
                        PolygonMaskInstance.drawPolygonMaskPath(context, path2d, polygonDraw.stroke, this.offset);
                    }
                    else if (rawData) {
                        PolygonMaskInstance.drawPolygonMask(context, rawData, polygonDraw.stroke);
                    }
                }
            }
        }
    };
    PolygonMaskInstance.prototype.drawPointsOnPolygonPath = function () {
        var container = this.container;
        if (this.raw) {
            for (var _i = 0, _a = this.raw; _i < _a.length; _i++) {
                var item = _a[_i];
                container.particles.addParticle({
                    x: item.x,
                    y: item.y,
                });
            }
        }
    };
    PolygonMaskInstance.prototype.getRandomPointOnPolygonPath = function () {
        if (!this.raw || !this.raw.length)
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        var coords = Utils_1.Utils.itemFromArray(this.raw);
        return {
            x: coords.x,
            y: coords.y,
        };
    };
    PolygonMaskInstance.prototype.getRandomPointOnPolygonPathByLength = function () {
        var _a, _b, _c;
        var polygonMaskOptions = this.options;
        if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length))
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        var path = Utils_1.Utils.itemFromArray(this.paths);
        var distance = Math.floor(Math.random() * path.length) + 1;
        var point = path.element.getPointAtLength(distance);
        return {
            x: point.x * polygonMaskOptions.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.x) || 0),
            y: point.y * polygonMaskOptions.scale + (((_c = this.offset) === null || _c === void 0 ? void 0 : _c.y) || 0),
        };
    };
    PolygonMaskInstance.prototype.getEquidistantPointOnPolygonPathByIndex = function (index) {
        var _a, _b, _c, _d, _e, _f, _g;
        var container = this.container;
        var options = container.options;
        var polygonMaskOptions = this.options;
        if (!this.raw || !this.raw.length || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length))
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        var offset = 0;
        var point;
        var totalLength = this.paths.reduce(function (tot, path) { return tot + path.length; }, 0);
        var distance = totalLength / options.particles.number.value;
        for (var _i = 0, _h = this.paths; _i < _h.length; _i++) {
            var path = _h[_i];
            var pathDistance = distance * index - offset;
            if (pathDistance <= path.length) {
                point = path.element.getPointAtLength(pathDistance);
                break;
            }
            else {
                offset += path.length;
            }
        }
        return {
            x: ((_b = point === null || point === void 0 ? void 0 : point.x) !== null && _b !== void 0 ? _b : 0) * polygonMaskOptions.scale + ((_d = (_c = this.offset) === null || _c === void 0 ? void 0 : _c.x) !== null && _d !== void 0 ? _d : 0),
            y: ((_e = point === null || point === void 0 ? void 0 : point.y) !== null && _e !== void 0 ? _e : 0) * polygonMaskOptions.scale + ((_g = (_f = this.offset) === null || _f === void 0 ? void 0 : _f.y) !== null && _g !== void 0 ? _g : 0),
        };
    };
    PolygonMaskInstance.prototype.getPointOnPolygonPathByIndex = function (index) {
        if (!this.raw || !this.raw.length)
            throw new Error(Utils_1.Constants.noPolygonDataLoaded);
        var coords = this.raw[index % this.raw.length];
        return {
            x: coords.x,
            y: coords.y,
        };
    };
    PolygonMaskInstance.prototype.createPath2D = function () {
        var _a, _b;
        var polygonMaskOptions = this.options;
        if (!this.path2DSupported || !((_a = this.paths) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        var _loop_1 = function (path) {
            var pathData = (_b = path.element) === null || _b === void 0 ? void 0 : _b.getAttribute("d");
            if (pathData) {
                var path2d = new Path2D(pathData);
                var matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
                var finalPath = new Path2D();
                var transform = matrix.scale(polygonMaskOptions.scale);
                if (finalPath.addPath) {
                    finalPath.addPath(path2d, transform);
                    path.path2d = finalPath;
                }
                else {
                    delete path.path2d;
                }
            }
            else {
                delete path.path2d;
            }
            if (!path.path2d && this_1.raw) {
                path.path2d = new Path2D();
                path.path2d.moveTo(this_1.raw[0].x, this_1.raw[0].y);
                this_1.raw.forEach(function (pos, i) {
                    var _a;
                    if (i > 0) {
                        (_a = path.path2d) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
                    }
                });
                path.path2d.closePath();
            }
        };
        var this_1 = this;
        for (var _i = 0, _c = this.paths; _i < _c.length; _i++) {
            var path = _c[_i];
            _loop_1(path);
        }
    };
    PolygonMaskInstance.prototype.initRawData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var polygonMaskOptions, _a, data, svg, path;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        polygonMaskOptions = this.options;
                        if (!polygonMaskOptions.url) return [3, 2];
                        _a = this;
                        return [4, this.downloadSvgPathToPolygon(polygonMaskOptions.url)];
                    case 1:
                        _a.raw = _b.sent();
                        return [3, 3];
                    case 2:
                        if (polygonMaskOptions.data) {
                            data = polygonMaskOptions.data;
                            svg = void 0;
                            if (typeof data !== "string") {
                                path = data.path instanceof Array
                                    ? data.path.map(function (t) { return "<path d=\"" + t + "\" />"; }).join("")
                                    : "<path d=\"" + data.path + "\" />";
                                svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"" + data.size.width + "\" height=\"" + data.size.height + "\">" + path + "</svg>";
                            }
                            else {
                                svg = data;
                            }
                            this.raw = this.parseSvgPathToPolygon(svg);
                        }
                        _b.label = 3;
                    case 3:
                        this.createPath2D();
                        return [2];
                }
            });
        });
    };
    return PolygonMaskInstance;
}());
exports.PolygonMaskInstance = PolygonMaskInstance;
