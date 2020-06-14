"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitters = void 0;
var EmitterInstance_1 = require("./EmitterInstance");
var Utils_1 = require("../../Utils");
var Emitter_1 = require("./Options/Classes/Emitter");
var Enums_1 = require("./Enums");
var Emitters = (function () {
    function Emitters(container) {
        this.container = container;
        this.array = [];
        this.emitters = [];
        this.interactivityEmitters = [];
    }
    Emitters.prototype.init = function (options) {
        var _a, _b;
        if (!options) {
            return;
        }
        if (options.emitters) {
            if (options.emitters instanceof Array) {
                this.emitters = options.emitters.map(function (s) {
                    var tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.emitters instanceof Array) {
                    this.emitters = new Emitter_1.Emitter();
                }
                this.emitters.load(options.emitters);
            }
        }
        var interactivityEmitters = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.emitters;
        if (interactivityEmitters) {
            if (interactivityEmitters instanceof Array) {
                this.interactivityEmitters = interactivityEmitters.map(function (s) {
                    var tmp = new Emitter_1.Emitter();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.interactivityEmitters instanceof Array) {
                    this.interactivityEmitters = new Emitter_1.Emitter();
                }
                this.interactivityEmitters.load(interactivityEmitters);
            }
        }
        if (this.emitters instanceof Array) {
            for (var _i = 0, _c = this.emitters; _i < _c.length; _i++) {
                var emitterOptions = _c[_i];
                var emitter = new EmitterInstance_1.EmitterInstance(this, emitterOptions);
                this.addEmitter(emitter);
            }
        }
        else {
            var emitterOptions = this.emitters;
            var emitter = new EmitterInstance_1.EmitterInstance(this, emitterOptions);
            this.addEmitter(emitter);
        }
    };
    Emitters.prototype.play = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.play();
        }
    };
    Emitters.prototype.pause = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.pause();
        }
    };
    Emitters.prototype.stop = function () {
        this.array = [];
    };
    Emitters.prototype.handleClickMode = function (mode) {
        var container = this.container;
        var emitterOptions = this.emitters;
        var modeEmitters = this.interactivityEmitters;
        if (mode === Enums_1.EmitterClickMode.emitter) {
            var emitterModeOptions = void 0;
            if (modeEmitters instanceof Array) {
                if (modeEmitters.length > 0) {
                    emitterModeOptions = Utils_1.Utils.itemFromArray(modeEmitters);
                }
            }
            else {
                emitterModeOptions = modeEmitters;
            }
            var emittersOptions = emitterModeOptions !== null && emitterModeOptions !== void 0 ? emitterModeOptions : (emitterOptions instanceof Array ? Utils_1.Utils.itemFromArray(emitterOptions) : emitterOptions);
            var ePosition = container.interactivity.mouse.clickPosition;
            var emitter = new EmitterInstance_1.EmitterInstance(this, Utils_1.Utils.deepExtend({}, emittersOptions), ePosition);
            this.addEmitter(emitter);
        }
    };
    Emitters.prototype.resize = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var emitter = _a[_i];
            emitter.resize();
        }
    };
    Emitters.prototype.addEmitter = function (emitter) {
        this.array.push(emitter);
    };
    Emitters.prototype.removeEmitter = function (emitter) {
        var index = this.array.indexOf(emitter);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    };
    return Emitters;
}());
exports.Emitters = Emitters;
