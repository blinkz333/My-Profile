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
exports.Container = void 0;
var Canvas_1 = require("./Canvas");
var Particles_1 = require("./Particles");
var Retina_1 = require("./Retina");
var FrameManager_1 = require("./FrameManager");
var Options_1 = require("../Options/Classes/Options");
var Utils_1 = require("../Utils");
var Container = (function () {
    function Container(id, params) {
        var presets = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            presets[_i - 2] = arguments[_i];
        }
        this.started = false;
        this.destroyed = false;
        this.id = id;
        this.paused = true;
        this.sourceOptions = params;
        this.lastFrameTime = 0;
        this.pageHidden = false;
        this.retina = new Retina_1.Retina(this);
        this.canvas = new Canvas_1.Canvas(this);
        this.particles = new Particles_1.Particles(this);
        this.drawer = new FrameManager_1.FrameManager(this);
        this.interactivity = {
            mouse: {},
        };
        this.bubble = {};
        this.repulse = { particles: [] };
        this.plugins = {};
        this.drawers = {};
        this.density = 1;
        this.options = new Options_1.Options();
        for (var _a = 0, presets_1 = presets; _a < presets_1.length; _a++) {
            var preset = presets_1[_a];
            this.options.load(Utils_1.Plugins.getPreset(preset));
        }
        for (var _b = 0, _c = Utils_1.Plugins.getSupportedShapes(); _b < _c.length; _b++) {
            var type = _c[_b];
            this.drawers[type] = Utils_1.Plugins.getShapeDrawer(type);
        }
        if (this.sourceOptions) {
            this.options.load(this.sourceOptions);
        }
        this.simplex = new Utils_1.SimplexNoise();
        this.eventListeners = new Utils_1.EventListeners(this);
    }
    Container.requestFrame = function (callback) {
        return window.customRequestAnimationFrame(callback);
    };
    Container.cancelAnimation = function (handle) {
        window.cancelAnimationFrame(handle);
    };
    Container.prototype.play = function (force) {
        var needsUpdate = this.paused || force;
        if (this.paused) {
            this.paused = false;
        }
        if (needsUpdate) {
            for (var id in this.plugins) {
                var plugin = this.plugins[id];
                if (plugin.play) {
                    plugin.play();
                }
            }
            this.lastFrameTime = performance.now();
        }
        this.draw();
    };
    Container.prototype.pause = function () {
        if (this.drawAnimationFrame !== undefined) {
            Container.cancelAnimation(this.drawAnimationFrame);
            delete this.drawAnimationFrame;
        }
        if (!this.paused) {
            for (var id in this.plugins) {
                var plugin = this.plugins[id];
                if (plugin.pause) {
                    plugin.pause();
                }
            }
            if (!this.pageHidden) {
                this.paused = true;
            }
        }
    };
    Container.prototype.draw = function () {
        var _this = this;
        this.drawAnimationFrame = Container.requestFrame(function (t) { var _a; return (_a = _this.drawer) === null || _a === void 0 ? void 0 : _a.nextFrame(t); });
    };
    Container.prototype.getAnimationStatus = function () {
        return !this.paused;
    };
    Container.prototype.densityAutoParticles = function () {
        this.initDensityFactor();
        var numberOptions = this.options.particles.number;
        var optParticlesNumber = numberOptions.value;
        var optParticlesLimit = numberOptions.limit > 0 ? numberOptions.limit : optParticlesNumber;
        var particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * this.density;
        var particlesCount = this.particles.count;
        if (particlesCount < particlesNumber) {
            this.particles.push(Math.abs(particlesNumber - particlesCount));
        }
        else if (particlesCount > particlesNumber) {
            this.particles.removeQuantity(particlesCount - particlesNumber);
        }
    };
    Container.prototype.initDensityFactor = function () {
        var densityOptions = this.options.particles.number.density;
        if (!this.canvas.element || !densityOptions.enable) {
            return;
        }
        var canvas = this.canvas.element;
        var pxRatio = this.retina.pixelRatio;
        this.density = (canvas.width * canvas.height) / (densityOptions.factor * pxRatio * densityOptions.area);
    };
    Container.prototype.destroy = function () {
        this.stop();
        this.retina.reset();
        this.canvas.destroy();
        delete this.interactivity;
        delete this.options;
        delete this.retina;
        delete this.canvas;
        delete this.particles;
        delete this.bubble;
        delete this.repulse;
        delete this.drawer;
        delete this.eventListeners;
        for (var type in this.drawers) {
            var drawer = this.drawers[type];
            if (drawer.destroy !== undefined) {
                drawer.destroy(this);
            }
        }
        this.drawers = {};
        this.destroyed = true;
    };
    Container.prototype.exportImg = function (callback) {
        this.exportImage(callback);
    };
    Container.prototype.exportImage = function (callback, type, quality) {
        var _a;
        return (_a = this.canvas.element) === null || _a === void 0 ? void 0 : _a.toBlob(callback, type !== null && type !== void 0 ? type : "image/png", quality);
    };
    Container.prototype.exportConfiguration = function () {
        return JSON.stringify(this.options, undefined, 2);
    };
    Container.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.stop();
                        return [4, this.start()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Container.prototype.stop = function () {
        if (!this.started) {
            return;
        }
        this.started = false;
        this.eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.retina.reset();
        this.canvas.clear();
        for (var id in this.plugins) {
            var plugin = this.plugins[id];
            if (plugin.stop !== undefined) {
                plugin.stop();
            }
        }
        this.plugins = {};
        this.particles.linksColors = {};
        delete this.particles.linksColor;
    };
    Container.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _i, id, plugin;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.started) {
                            return [2];
                        }
                        return [4, this.init()];
                    case 1:
                        _c.sent();
                        this.started = true;
                        this.eventListeners.addListeners();
                        _a = [];
                        for (_b in this.plugins)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3, 6];
                        id = _a[_i];
                        plugin = this.plugins[id];
                        if (!(plugin.startAsync !== undefined)) return [3, 4];
                        return [4, plugin.startAsync()];
                    case 3:
                        _c.sent();
                        return [3, 5];
                    case 4:
                        if (plugin.start !== undefined) {
                            plugin.start();
                        }
                        _c.label = 5;
                    case 5:
                        _i++;
                        return [3, 2];
                    case 6:
                        this.play();
                        return [2];
                }
            });
        });
    };
    Container.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var availablePlugins, id, _a, _b, _i, type, drawer, _c, _d, _e, id, plugin;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        this.retina.init();
                        this.canvas.init();
                        availablePlugins = Utils_1.Plugins.getAvailablePlugins(this);
                        for (id in availablePlugins) {
                            this.plugins[id] = availablePlugins[id];
                        }
                        _a = [];
                        for (_b in this.drawers)
                            _a.push(_b);
                        _i = 0;
                        _f.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3, 4];
                        type = _a[_i];
                        drawer = this.drawers[type];
                        if (!(drawer.init !== undefined)) return [3, 3];
                        return [4, drawer.init(this)];
                    case 2:
                        _f.sent();
                        _f.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4:
                        _c = [];
                        for (_d in this.plugins)
                            _c.push(_d);
                        _e = 0;
                        _f.label = 5;
                    case 5:
                        if (!(_e < _c.length)) return [3, 9];
                        id = _c[_e];
                        plugin = this.plugins[id];
                        if (!(plugin.init !== undefined)) return [3, 6];
                        plugin.init(this.options);
                        return [3, 8];
                    case 6:
                        if (!(plugin.initAsync !== undefined)) return [3, 8];
                        return [4, plugin.initAsync(this.options)];
                    case 7:
                        _f.sent();
                        _f.label = 8;
                    case 8:
                        _e++;
                        return [3, 5];
                    case 9:
                        this.particles.init();
                        this.densityAutoParticles();
                        return [2];
                }
            });
        });
    };
    return Container;
}());
exports.Container = Container;
