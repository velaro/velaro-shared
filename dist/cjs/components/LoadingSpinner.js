"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
function LoadingSpinner() {
    return (react_1["default"].createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "40px", height: "40px", viewBox: "0 0 50 50", enableBackground: "new 0 0 50 50" },
        react_1["default"].createElement("path", { fill: "#2860a9", d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z", transform: "rotate(310 25 25)" },
            react_1["default"].createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "rotate", from: "0 25 25", to: "360 25 25", dur: "0.6s", repeatCount: "indefinite" }))));
}
exports["default"] = LoadingSpinner;
//# sourceMappingURL=LoadingSpinner.js.map