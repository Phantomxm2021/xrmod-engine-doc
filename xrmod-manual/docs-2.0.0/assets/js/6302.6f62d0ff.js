"use strict";
exports.id = 6302;
exports.ids = [6302];
exports.modules = {

/***/ 16302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_icon": () => (/* binding */ DyteIcon)
/* harmony export */ });
/* harmony import */ var _index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42619);


const dyteIconCss = ":host{display:block;height:var(--dyte-space-10, 40px);font-family:var(--dyte-font-family, sans-serif);outline:2px solid transparent;outline-offset:2px}:host .icon-wrapper{display:flex;height:100%;width:100%;flex-direction:column;align-items:center}:host svg{height:100%;width:100%;outline:2px solid transparent;outline-offset:2px}";

const parseIcon = (icon) => {
  try {
    return JSON.parse(icon);
  }
  catch (e) {
    return icon;
  }
};
const DyteIcon = class {
  constructor(hostRef) {
    (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "icon-wrapper", innerHTML: parseIcon(this.icon), part: "wrapper" })));
  }
};
DyteIcon.style = dyteIconCss;




/***/ })

};
;