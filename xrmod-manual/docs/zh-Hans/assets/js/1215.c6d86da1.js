"use strict";
exports.id = 1215;
exports.ids = [1215];
exports.modules = {

/***/ 1215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_fullscreen_toggle": () => (/* binding */ DyteFullscreenToggle)
/* harmony export */ });
/* harmony import */ var _index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42619);
/* harmony import */ var _default_icon_pack_754e33a3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80335);
/* harmony import */ var _index_e51fd65a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20975);
/* harmony import */ var _full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27275);
/* harmony import */ var _default_language_388827b4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19261);






const dyteFullscreenToggleCss = ":host{display:block;font-family:var(--dyte-font-family, sans-serif)}";

const DyteFullscreenToggle = class {
  constructor(hostRef) {
    (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Variant */
    this.variant = 'button';
    /** Icon pack */
    this.iconPack = _default_icon_pack_754e33a3_js__WEBPACK_IMPORTED_MODULE_1__.d;
    /** Language */
    this.t = (0,_index_e51fd65a_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.fullScreenActive = false;
    this.isFullScreenSupported = true;
    this.onFullScreenchange = () => {
      this.fullScreenActive = (0,_full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__.i)();
    };
    this.toggleFullScreen = () => {
      const fullScreenElement = document.querySelector('dyte-meeting');
      if (!fullScreenElement)
        return;
      if (!this.fullScreenActive) {
        (0,_full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__.r)(fullScreenElement);
        this.fullScreenActive = true;
      }
      else {
        (0,_full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__.e)();
        this.fullScreenActive = false;
      }
    };
  }
  connectedCallback() {
    this.isFullScreenSupported = (0,_full_screen_05839220_js__WEBPACK_IMPORTED_MODULE_4__.a)();
    this.onFullScreenchange();
    window.addEventListener('webkitfullscreenchange', this.onFullScreenchange);
    window.addEventListener('fullscreenchange', this.onFullScreenchange);
  }
  disconnectedCallback() {
    window.removeEventListener('webkitfullscreenchange', this.onFullScreenchange);
    window.removeEventListener('fullscreenchange', this.onFullScreenchange);
  }
  render() {
    if (!this.isFullScreenSupported) {
      return null;
    }
    return ((0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.H, { title: this.t('Fullscreen') }, (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { size: this.size, iconPack: this.iconPack, onClick: this.toggleFullScreen, icon: this.fullScreenActive
        ? this.iconPack.full_screen_minimize
        : this.iconPack.full_screen_maximize, label: this.fullScreenActive ? this.t('full_screen.exit') : this.t('full_screen'), variant: this.variant })));
  }
};
DyteFullscreenToggle.style = dyteFullscreenToggleCss;




/***/ }),

/***/ 27275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ isFullScreenSupported),
/* harmony export */   "e": () => (/* binding */ exitFullSreen),
/* harmony export */   "i": () => (/* binding */ isFullScreenEnabled),
/* harmony export */   "r": () => (/* binding */ requestFullScreen)
/* harmony export */ });
const requestFullScreen = (el) => {
  if (el == null)
    return;
  if (el.requestFullscreen != null) {
    el.requestFullscreen();
  }
  else if (el.mozRequestFullScreen != null) {
    /* Firefox */
    el.mozRequestFullScreen();
  }
  else if (el.webkitRequestFullscreen != null) {
    /* Chrome, Safari & Opera */
    el.webkitRequestFullscreen();
  }
  else if (el.msRequestFullscreen != null) {
    /* IE/Edge */
    el.msRequestFullscreen();
  }
};
const exitFullSreen = () => {
  if (document.exitFullscreen != null) {
    document.exitFullscreen();
  }
  else if (document.mozExitFullScreen != null) {
    /* Firefox */
    document.mozExitFullScreen();
  }
  else if (document.webkitExitFullscreen != null) {
    /* Chrome, Safari & Opera */
    document.webkitExitFullscreen();
  }
  else if (document.msExitFullscreen != null) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
};
const isFullScreenEnabled = () => {
  return document.fullscreenElement != null || document.webkitCurrentFullScreenElement != null;
};
const isFullScreenSupported = () => {
  if (typeof document !== 'undefined') {
    return (document.fullscreenEnabled ||
      document.mozFullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.msFullscreenEnabled);
  }
  return false;
};




/***/ }),

/***/ 20975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getLangData),
/* harmony export */   "u": () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var _default_language_388827b4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19261);


// Replace with cdn base path in prod
const LANG_BASE_URL = 'http://localhost:5000';
const getLangData = async (lang) => {
  if (lang == null || lang === 'en' || lang.trim() === '') {
    return _default_language_388827b4_js__WEBPACK_IMPORTED_MODULE_0__.d;
  }
  try {
    const res = await fetch(`${LANG_BASE_URL}/${lang}.json`);
    if (!res.ok) {
      return _default_language_388827b4_js__WEBPACK_IMPORTED_MODULE_0__.d;
    }
    // merge fetched language with defaultLanguage to avoid empty properties
    return Object.assign({}, _default_language_388827b4_js__WEBPACK_IMPORTED_MODULE_0__.d, await res.json());
  }
  catch (_) {
    return _default_language_388827b4_js__WEBPACK_IMPORTED_MODULE_0__.d;
  }
};
/**
 * Creates an i18n instance from a language dictionary/object.
 * @param lang The language dictionary
 * @returns A function which handles i18n
 */
const useLanguage = (lang = _default_language_388827b4_js__WEBPACK_IMPORTED_MODULE_0__.d) => {
  return (key) => {
    var _a;
    return (_a = lang[key]) !== null && _a !== void 0 ? _a : key;
  };
};




/***/ })

};
;