"use strict";
(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

const filename1 = "./public/Privacy.html";
async function api(req, res) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.write(await fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filename1, "utf8"));
    res.end();
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(35));
module.exports = __webpack_exports__;

})();