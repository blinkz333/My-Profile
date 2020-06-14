"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListeners = void 0;
var Enums_1 = require("../Enums");
var Constants_1 = require("./Constants");
var EventListeners = (function () {
    function EventListeners(container) {
        var _this = this;
        this.container = container;
        this.canPush = true;
        this.mouseMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchStartHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchMoveHandler = function (e) { return _this.mouseTouchMove(e); };
        this.touchEndHandler = function () { return _this.mouseTouchFinish(); };
        this.mouseLeaveHandler = function () { return _this.mouseTouchFinish(); };
        this.touchCancelHandler = function () { return _this.mouseTouchFinish(); };
        this.touchEndClickHandler = function (e) { return _this.mouseTouchClick(e); };
        this.mouseUpHandler = function (e) { return _this.mouseTouchClick(e); };
        this.visibilityChangeHandler = function () { return _this.handleVisibilityChange(); };
        this.resizeHandler = function () { return _this.handleWindowResize(); };
    }
    EventListeners.manageListener = function (element, event, handler, add, options) {
        if (add) {
            var addOptions = { passive: true };
            if (typeof options === "boolean") {
                addOptions.capture = options;
            }
            else if (options !== undefined) {
                addOptions = options;
            }
            element.addEventListener(event, handler, addOptions);
        }
        else {
            var removeOptions = options;
            element.removeEventListener(event, handler, removeOptions);
        }
    };
    EventListeners.prototype.addListeners = function () {
        this.manageListeners(true);
    };
    EventListeners.prototype.removeListeners = function () {
        this.manageListeners(false);
    };
    EventListeners.prototype.manageListeners = function (add) {
        var container = this.container;
        var options = container.options;
        var detectType = options.interactivity.detectsOn;
        if (detectType === Enums_1.InteractivityDetect.window) {
            container.interactivity.element = window;
        }
        else if (detectType === Enums_1.InteractivityDetect.parent && container.canvas.element) {
            container.interactivity.element = container.canvas.element.parentNode;
        }
        else {
            container.interactivity.element = container.canvas.element;
        }
        var interactivityEl = container.interactivity.element;
        if (interactivityEl &&
            (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) {
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseMoveEvent, this.mouseMoveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchStartEvent, this.touchStartHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchMoveEvent, this.touchMoveHandler, add);
            if (!options.interactivity.events.onClick.enable) {
                EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndHandler, add);
            }
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseLeaveEvent, this.mouseLeaveHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchCancelEvent, this.touchCancelHandler, add);
        }
        if (options.interactivity.events.onClick.enable && interactivityEl) {
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.touchEndEvent, this.touchEndClickHandler, add);
            EventListeners.manageListener(interactivityEl, Constants_1.Constants.mouseUpEvent, this.mouseUpHandler, add);
        }
        if (options.interactivity.events.resize) {
            EventListeners.manageListener(window, Constants_1.Constants.resizeEvent, this.resizeHandler, add);
        }
        if (document) {
            EventListeners.manageListener(document, Constants_1.Constants.visibilityChangeEvent, this.visibilityChangeHandler, add, false);
        }
    };
    EventListeners.prototype.handleWindowResize = function () {
        var container = this.container;
        var options = container.options;
        var canvas = container.canvas.element;
        if (!canvas) {
            return;
        }
        var pxRatio = container.retina.pixelRatio;
        container.canvas.size.width = canvas.offsetWidth * pxRatio;
        container.canvas.size.height = canvas.offsetHeight * pxRatio;
        canvas.width = container.canvas.size.width;
        canvas.height = container.canvas.size.height;
        if (!options.particles.move.enable) {
            container.particles.redraw();
        }
        container.densityAutoParticles();
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.resize !== undefined) {
                plugin.resize();
            }
        }
    };
    EventListeners.prototype.handleVisibilityChange = function () {
        var container = this.container;
        var options = container.options;
        if (!options.pauseOnBlur) {
            return;
        }
        if (document === null || document === void 0 ? void 0 : document.hidden) {
            container.pageHidden = true;
            container.pause();
        }
        else {
            container.pageHidden = false;
            if (container.getAnimationStatus()) {
                container.play(true);
            }
            else {
                container.draw();
            }
        }
    };
    EventListeners.prototype.mouseTouchMove = function (e) {
        var _a, _b, _c;
        var container = this.container;
        var options = container.options;
        var pos;
        var canvas = container.canvas.element;
        if (e.type.startsWith("mouse")) {
            this.canPush = true;
            var mouseEvent = e;
            if (((_a = container.interactivity) === null || _a === void 0 ? void 0 : _a.element) === undefined) {
                return;
            }
            if (container.interactivity.element === window) {
                if (canvas) {
                    var clientRect = canvas.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.clientX - clientRect.left,
                        y: mouseEvent.clientY - clientRect.top,
                    };
                }
            }
            else if (options.interactivity.detectsOn === Enums_1.InteractivityDetect.parent) {
                var source = mouseEvent.target;
                var target = mouseEvent.currentTarget;
                if (source && target) {
                    var sourceRect = source.getBoundingClientRect();
                    var targetRect = target.getBoundingClientRect();
                    pos = {
                        x: mouseEvent.offsetX + sourceRect.left - targetRect.left,
                        y: mouseEvent.offsetY + sourceRect.top - targetRect.top,
                    };
                }
                else {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
            else {
                if (mouseEvent.target === container.canvas.element) {
                    pos = {
                        x: mouseEvent.offsetX || mouseEvent.clientX,
                        y: mouseEvent.offsetY || mouseEvent.clientY,
                    };
                }
            }
        }
        else {
            this.canPush = e.type !== "touchmove";
            var touchEvent = e;
            var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
            var canvasRect = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();
            pos = {
                x: lastTouch.clientX - ((_b = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.left) !== null && _b !== void 0 ? _b : 0),
                y: lastTouch.clientY - ((_c = canvasRect === null || canvasRect === void 0 ? void 0 : canvasRect.top) !== null && _c !== void 0 ? _c : 0),
            };
        }
        var pxRatio = container.retina.pixelRatio;
        if (pos) {
            pos.x *= pxRatio;
            pos.y *= pxRatio;
        }
        container.interactivity.mouse.position = pos;
        container.interactivity.status = Constants_1.Constants.mouseMoveEvent;
    };
    EventListeners.prototype.mouseTouchFinish = function () {
        var container = this.container;
        delete container.interactivity.mouse.position;
        container.interactivity.status = Constants_1.Constants.mouseLeaveEvent;
    };
    EventListeners.prototype.mouseTouchClick = function (e) {
        var container = this.container;
        var options = container.options;
        var handled = false;
        var mousePosition = container.interactivity.mouse.position;
        if (mousePosition === undefined || !options.interactivity.events.onClick.enable) {
            return;
        }
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.clickPositionValid !== undefined) {
                handled = plugin.clickPositionValid(mousePosition);
                if (handled) {
                    break;
                }
            }
        }
        if (!handled) {
            this.doMouseTouchClick(e);
        }
    };
    EventListeners.prototype.doMouseTouchClick = function (e) {
        var _this = this;
        var container = this.container;
        var options = container.options;
        if (this.canPush) {
            var mousePos = container.interactivity.mouse.position;
            if (mousePos) {
                container.interactivity.mouse.clickPosition = {
                    x: mousePos.x,
                    y: mousePos.y,
                };
            }
            else {
                return;
            }
            container.interactivity.mouse.clickTime = new Date().getTime();
            if (options.interactivity.events.onClick.mode instanceof Array) {
                for (var _i = 0, _a = options.interactivity.events.onClick.mode; _i < _a.length; _i++) {
                    var mode = _a[_i];
                    this.handleClickMode(mode);
                }
            }
            else {
                var mode = options.interactivity.events.onClick.mode;
                this.handleClickMode(mode);
            }
        }
        if (e.type === "touchend") {
            setTimeout(function () { return _this.mouseTouchFinish(); }, 500);
        }
    };
    EventListeners.prototype.handleClickMode = function (mode) {
        var container = this.container;
        var options = container.options;
        var pushNb = options.interactivity.modes.push.quantity;
        var removeNb = options.interactivity.modes.remove.quantity;
        switch (mode) {
            case Enums_1.ClickMode.push: {
                if (pushNb > 0) {
                    if (options.particles.move.enable) {
                        container.particles.push(pushNb, container.interactivity.mouse);
                    }
                    else {
                        if (pushNb === 1) {
                            container.particles.push(pushNb, container.interactivity.mouse);
                        }
                        else if (pushNb > 1) {
                            container.particles.push(pushNb);
                        }
                    }
                }
                break;
            }
            case Enums_1.ClickMode.remove:
                container.particles.removeQuantity(removeNb);
                break;
            case Enums_1.ClickMode.bubble:
                container.bubble.clicking = true;
                break;
            case Enums_1.ClickMode.repulse:
                container.repulse.clicking = true;
                container.repulse.count = 0;
                for (var _i = 0, _a = container.repulse.particles; _i < _a.length; _i++) {
                    var particle = _a[_i];
                    particle.velocity.horizontal = particle.initialVelocity.horizontal;
                    particle.velocity.vertical = particle.initialVelocity.vertical;
                }
                container.repulse.particles = [];
                container.repulse.finish = false;
                setTimeout(function () {
                    if (!container.destroyed) {
                        container.repulse.clicking = false;
                    }
                }, options.interactivity.modes.repulse.duration * 1000);
                break;
            case Enums_1.ClickMode.pause:
                if (container.getAnimationStatus()) {
                    container.pause();
                }
                else {
                    container.play();
                }
                break;
        }
        for (var id in container.plugins) {
            var plugin = container.plugins[id];
            if (plugin.handleClickMode) {
                plugin.handleClickMode(mode);
            }
        }
    };
    return EventListeners;
}());
exports.EventListeners = EventListeners;
