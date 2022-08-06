"use strict";
exports.id = 7564;
exports.ids = [7564];
exports.modules = {

/***/ 57564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_spinner": () => (/* binding */ DyteSpinner)
/* harmony export */ });
/* harmony import */ var _index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42619);
/* harmony import */ var _default_icon_pack_754e33a3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80335);



const dyteSpinnerCss = ":host{box-sizing:border-box;display:block;height:var(--dyte-space-10, 40px);width:var(--dyte-space-10, 40px);--dyte-spinner-color:currentColor}.spinner{height:100%;width:100%}@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}.spinner{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;border-radius:9999px;background-color:transparent;-webkit-animation-duration:0.7s;animation-duration:0.7s}";

const DyteSpinner = class {
  constructor(hostRef) {
    (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Icon Pack */
    this.iconPack = _default_icon_pack_754e33a3_js__WEBPACK_IMPORTED_MODULE_1__.d;
  }
  render() {
    return ((0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { class: "spinner", icon: this.iconPack.spinner })));
  }
};
DyteSpinner.style = dyteSpinnerCss;




/***/ })

};
;