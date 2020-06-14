"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPjs = void 0;
var initPjs = function (main) {
    var particlesJS = function (tagId, params) {
        return main.load(tagId, params);
    };
    particlesJS.load = function (tagId, pathConfigJson, callback) {
        main.loadJSON(tagId, pathConfigJson).then(function (container) {
            if (container) {
                callback(container);
            }
        });
    };
    particlesJS.setOnClickHandler = function (callback) {
        main.setOnClickHandler(callback);
    };
    var pJSDom = main.dom();
    return { particlesJS: particlesJS, pJSDom: pJSDom };
};
exports.initPjs = initPjs;
