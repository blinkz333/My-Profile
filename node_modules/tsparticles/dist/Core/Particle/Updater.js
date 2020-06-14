"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Updater = void 0;
var Utils_1 = require("../../Utils");
var Mover_1 = require("./Mover");
var Enums_1 = require("../../Enums");
var Updater = (function () {
    function Updater(container, particle) {
        this.container = container;
        this.particle = particle;
        this.mover = new Mover_1.Mover(container, particle);
    }
    Updater.checkBounds = function (coordinate, radius, size, velocity, outside) {
        if ((coordinate + radius > size && velocity > 0) || (coordinate - radius < 0 && velocity < 0)) {
            outside();
        }
    };
    Updater.prototype.update = function (delta) {
        this.mover.move(delta);
        this.updateOpacity(delta);
        this.updateSize(delta);
        this.updateAngle(delta);
        this.updateColor(delta);
        this.fixOutOfCanvasPosition(delta);
        this.updateOutMode(delta);
    };
    Updater.prototype.updateOpacity = function (delta) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.opacity.animation.enable) {
            switch (particle.opacity.status) {
                case Enums_1.OpacityAnimationStatus.increasing:
                    if (particle.opacity.value >= particle.particlesOptions.opacity.value) {
                        particle.opacity.status = Enums_1.OpacityAnimationStatus.decreasing;
                    }
                    else {
                        particle.opacity.value += (particle.opacity.velocity || 0) * deltaFactor;
                    }
                    break;
                case Enums_1.OpacityAnimationStatus.decreasing:
                    if (particle.opacity.value <= particle.particlesOptions.opacity.animation.minimumValue) {
                        particle.opacity.status = Enums_1.OpacityAnimationStatus.increasing;
                    }
                    else {
                        particle.opacity.value -= (particle.opacity.velocity || 0) * deltaFactor;
                    }
                    break;
            }
            if (particle.opacity.value < 0) {
                particle.opacity.value = 0;
            }
        }
    };
    Updater.prototype.updateSize = function (delta) {
        var _a;
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.size.animation.enable) {
            switch (particle.size.status) {
                case Enums_1.SizeAnimationStatus.increasing:
                    if (particle.size.value >= ((_a = particle.sizeValue) !== null && _a !== void 0 ? _a : container.retina.sizeValue)) {
                        particle.size.status = Enums_1.SizeAnimationStatus.decreasing;
                    }
                    else {
                        particle.size.value += (particle.size.velocity || 0) * deltaFactor;
                    }
                    break;
                case Enums_1.SizeAnimationStatus.decreasing:
                    if (particle.size.value <= particle.particlesOptions.size.animation.minimumValue) {
                        particle.size.status = Enums_1.SizeAnimationStatus.increasing;
                    }
                    else {
                        particle.size.value -= (particle.size.velocity || 0) * deltaFactor;
                    }
            }
            if (particle.size.value < 0) {
                particle.size.value = 0;
            }
        }
    };
    Updater.prototype.updateAngle = function (delta) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.rotate.animation.enable) {
            switch (particle.rotateDirection) {
                case Enums_1.RotateDirection.clockwise:
                    particle.angle += ((particle.particlesOptions.rotate.animation.speed * Math.PI) / 18) * deltaFactor;
                    if (particle.angle > 360) {
                        particle.angle -= 360;
                    }
                    break;
                case Enums_1.RotateDirection.counterClockwise:
                default:
                    particle.angle -= ((particle.particlesOptions.rotate.animation.speed * Math.PI) / 18) * deltaFactor;
                    if (particle.angle < 0) {
                        particle.angle += 360;
                    }
                    break;
            }
        }
    };
    Updater.prototype.updateColor = function (delta) {
        var container = this.container;
        var options = container.options;
        var particle = this.particle;
        if (particle.color === undefined) {
            return;
        }
        var deltaFactor = options.fpsLimit > 0 ? (60 * delta) / 1000 : 3.6;
        if (particle.particlesOptions.color.animation.enable) {
            particle.color.h += (particle.colorVelocity || 0) * deltaFactor;
            if (particle.color.h > 360) {
                particle.color.h -= 360;
            }
        }
    };
    Updater.prototype.fixOutOfCanvasPosition = function (_delta) {
        var container = this.container;
        var particle = this.particle;
        var outMode = particle.particlesOptions.move.outMode;
        var wrap = particle.particlesOptions.move.warp;
        var canvasSize = container.canvas.size;
        var newPos;
        if (outMode === Enums_1.OutMode.bounce) {
            newPos = {
                bottom: canvasSize.height,
                left: particle.size.value,
                right: canvasSize.width,
                top: particle.size.value,
            };
        }
        else if (outMode === Enums_1.OutMode.bounceHorizontal) {
            newPos = {
                bottom: canvasSize.height + particle.size.value - particle.offset.y,
                left: particle.size.value,
                right: canvasSize.width,
                top: -particle.size.value - particle.offset.y,
            };
        }
        else if (outMode === Enums_1.OutMode.bounceVertical) {
            newPos = {
                bottom: canvasSize.height,
                left: -particle.size.value - particle.offset.x,
                right: canvasSize.width + particle.size.value + particle.offset.x,
                top: particle.size.value,
            };
        }
        else {
            newPos = {
                bottom: canvasSize.height + particle.size.value - particle.offset.y,
                left: -particle.size.value - particle.offset.x,
                right: canvasSize.width + particle.size.value + particle.offset.x,
                top: -particle.size.value - particle.offset.y,
            };
        }
        if (outMode === Enums_1.OutMode.destroy) {
            var sizeValue = particle.size.value;
            if (!Utils_1.Utils.isPointInside(particle.position, container.canvas.size, sizeValue)) {
                container.particles.remove(particle);
            }
        }
        else {
            var sizeValue = particle.size.value;
            var nextBounds = Utils_1.Utils.calculateBounds(particle.position, sizeValue);
            if (nextBounds.left > canvasSize.width - particle.offset.x) {
                particle.position.x = newPos.left;
                if (!wrap) {
                    particle.position.y = Math.random() * canvasSize.height;
                }
            }
            else if (nextBounds.right < -particle.offset.x) {
                particle.position.x = newPos.right;
                if (!wrap) {
                    particle.position.y = Math.random() * canvasSize.height;
                }
            }
            if (nextBounds.top > canvasSize.height - particle.offset.y) {
                if (!wrap) {
                    particle.position.x = Math.random() * canvasSize.width;
                }
                particle.position.y = newPos.top;
            }
            else if (nextBounds.bottom < -particle.offset.y) {
                if (!wrap) {
                    particle.position.x = Math.random() * canvasSize.width;
                }
                particle.position.y = newPos.bottom;
            }
        }
    };
    Updater.prototype.updateOutMode = function (delta) {
        var particle = this.particle;
        switch (particle.particlesOptions.move.outMode) {
            case Enums_1.OutMode.bounce:
            case Enums_1.OutMode.bounceVertical:
            case Enums_1.OutMode.bounceHorizontal:
                this.updateBounce(delta);
                break;
        }
    };
    Updater.prototype.updateBounce = function (delta) {
        var container = this.container;
        var particle = this.particle;
        var handled = false;
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.particleBounce !== undefined) {
                handled = plugin.particleBounce(particle, delta);
            }
            if (handled) {
                break;
            }
        }
        if (!handled) {
            var outMode = particle.particlesOptions.move.outMode;
            var pos = particle.getPosition();
            if (outMode === Enums_1.OutMode.bounce || outMode === Enums_1.OutMode.bounceHorizontal) {
                var size = particle.size.value;
                var velocity = particle.velocity.horizontal;
                Updater.checkBounds(pos.x, size, container.canvas.size.width, velocity, function () {
                    particle.velocity.horizontal *= -1;
                });
            }
            if (outMode === Enums_1.OutMode.bounce || outMode === Enums_1.OutMode.bounceVertical) {
                var size = particle.size.value;
                var velocity = particle.velocity.vertical;
                Updater.checkBounds(pos.y, size, container.canvas.size.height, velocity, function () {
                    particle.velocity.vertical *= -1;
                });
            }
        }
    };
    return Updater;
}());
exports.Updater = Updater;
