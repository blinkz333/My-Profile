"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Absorbers = void 0;
var AbsorberInstance_1 = require("./AbsorberInstance");
var Utils_1 = require("../../Utils");
var Absorber_1 = require("./Options/Classes/Absorber");
var Enums_1 = require("./Enums");
var Absorbers = (function () {
    function Absorbers(container) {
        this.container = container;
        this.array = [];
        this.absorbers = [];
        this.interactivityAbsorbers = [];
    }
    Absorbers.prototype.init = function (options) {
        var _a, _b;
        if (!options) {
            return;
        }
        if (options.absorbers) {
            if (options.absorbers instanceof Array) {
                this.absorbers = options.absorbers.map(function (s) {
                    var tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.absorbers instanceof Array) {
                    this.absorbers = new Absorber_1.Absorber();
                }
                this.absorbers.load(options.absorbers);
            }
        }
        var interactivityAbsorbers = (_b = (_a = options.interactivity) === null || _a === void 0 ? void 0 : _a.modes) === null || _b === void 0 ? void 0 : _b.absorbers;
        if (interactivityAbsorbers) {
            if (interactivityAbsorbers instanceof Array) {
                this.interactivityAbsorbers = interactivityAbsorbers.map(function (s) {
                    var tmp = new Absorber_1.Absorber();
                    tmp.load(s);
                    return tmp;
                });
            }
            else {
                if (this.interactivityAbsorbers instanceof Array) {
                    this.interactivityAbsorbers = new Absorber_1.Absorber();
                }
                this.interactivityAbsorbers.load(interactivityAbsorbers);
            }
        }
        if (this.absorbers instanceof Array) {
            for (var _i = 0, _c = this.absorbers; _i < _c.length; _i++) {
                var absorberOptions = _c[_i];
                var absorber = new AbsorberInstance_1.AbsorberInstance(this, absorberOptions);
                this.addAbsorber(absorber);
            }
        }
        else {
            var absorberOptions = this.absorbers;
            var absorber = new AbsorberInstance_1.AbsorberInstance(this, absorberOptions);
            this.addAbsorber(absorber);
        }
    };
    Absorbers.prototype.particleUpdate = function (particle, delta) {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var absorber = _a[_i];
            absorber.attract(particle, delta);
            if (particle.destroyed) {
                break;
            }
        }
    };
    Absorbers.prototype.draw = function (context) {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var absorber = _a[_i];
            context.save();
            absorber.draw(context);
            context.restore();
        }
    };
    Absorbers.prototype.stop = function () {
        this.array = [];
    };
    Absorbers.prototype.resize = function () {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var absorber = _a[_i];
            absorber.resize();
        }
    };
    Absorbers.prototype.handleClickMode = function (mode) {
        var container = this.container;
        var absorberOptions = this.absorbers;
        var modeAbsorbers = this.interactivityAbsorbers;
        if (mode === Enums_1.AbsorberClickMode.absorber) {
            var absorbersModeOptions = void 0;
            if (modeAbsorbers instanceof Array) {
                if (modeAbsorbers.length > 0) {
                    absorbersModeOptions = Utils_1.Utils.itemFromArray(modeAbsorbers);
                }
            }
            else {
                absorbersModeOptions = modeAbsorbers;
            }
            var absorbersOptions = absorbersModeOptions !== null && absorbersModeOptions !== void 0 ? absorbersModeOptions : (absorberOptions instanceof Array ? Utils_1.Utils.itemFromArray(absorberOptions) : absorberOptions);
            var aPosition = container.interactivity.mouse.clickPosition;
            var absorber = new AbsorberInstance_1.AbsorberInstance(this, absorbersOptions, aPosition);
            this.addAbsorber(absorber);
        }
    };
    Absorbers.prototype.addAbsorber = function (absorber) {
        this.array.push(absorber);
    };
    Absorbers.prototype.removeAbsorber = function (absorber) {
        var index = this.array.indexOf(absorber);
        if (index >= 0) {
            this.array.splice(index, 1);
        }
    };
    return Absorbers;
}());
exports.Absorbers = Absorbers;
