"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
var Interactivity_1 = require("./Interactivity/Interactivity");
var Particles_1 = require("./Particles/Particles");
var BackgroundMask_1 = require("./BackgroundMask/BackgroundMask");
var Background_1 = require("./Background/Background");
var Infection_1 = require("./Infection/Infection");
var Utils_1 = require("../../Utils");
var Options = (function () {
    function Options() {
        this.background = new Background_1.Background();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.detectRetina = false;
        this.fpsLimit = 30;
        this.infection = new Infection_1.Infection();
        this.interactivity = new Interactivity_1.Interactivity();
        this.particles = new Particles_1.Particles();
        this.pauseOnBlur = true;
    }
    Object.defineProperty(Options.prototype, "fps_limit", {
        get: function () {
            return this.fpsLimit;
        },
        set: function (value) {
            this.fpsLimit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Options.prototype, "retina_detect", {
        get: function () {
            return this.detectRetina;
        },
        set: function (value) {
            this.detectRetina = value;
        },
        enumerable: false,
        configurable: true
    });
    Options.prototype.load = function (data) {
        var _a, _b;
        if (data !== undefined) {
            if (data.preset !== undefined) {
                if (data.preset instanceof Array) {
                    for (var _i = 0, _c = data.preset; _i < _c.length; _i++) {
                        var preset = _c[_i];
                        this.importPreset(preset);
                    }
                }
                else {
                    this.importPreset(data.preset);
                }
            }
            if (data.background !== undefined) {
                this.background.load(data.background);
            }
            var detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
            if (detectRetina !== undefined) {
                this.detectRetina = detectRetina;
            }
            var fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
            if (fpsLimit !== undefined) {
                this.fpsLimit = fpsLimit;
            }
            if (data.pauseOnBlur !== undefined) {
                this.pauseOnBlur = data.pauseOnBlur;
            }
            this.particles.load(data.particles);
            this.infection.load(data.infection);
            this.interactivity.load(data.interactivity);
            this.backgroundMask.load(data.backgroundMask);
            Utils_1.Plugins.loadOptions(this, data);
        }
    };
    Options.prototype.importPreset = function (preset) {
        var presetOptions = Utils_1.Plugins.getPreset(preset);
        if (presetOptions !== undefined) {
            this.load(presetOptions);
        }
    };
    return Options;
}());
exports.Options = Options;
