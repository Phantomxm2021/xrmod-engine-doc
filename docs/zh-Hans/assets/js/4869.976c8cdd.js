"use strict";
exports.id = 4869;
exports.ids = [4869];
exports.modules = {

/***/ 34869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_logo": () => (/* binding */ DyteLogo)
/* harmony export */ });
/* harmony import */ var _index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42619);
/* harmony import */ var _index_e51fd65a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20975);
/* harmony import */ var _versionTwoApis_e31e770d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41249);
/* harmony import */ var _default_language_388827b4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19261);





const dyteLogoCss = ":host{display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:var(--dyte-font-family, sans-serif);color:rgb(var(--dyte-colors-text-1000, 255 255 255));height:100%;width:auto}svg,img{height:100%;width:100%}.brand-color{--tw-text-opacity:1;color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-text-opacity))}";

const DyteLogo = class {
  constructor(hostRef) {
    (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Language */
    this.t = (0,_index_e51fd65a_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  connectedCallback() {
    this.configChanged(this.config);
    this.meetingChanged(this.meeting);
  }
  configChanged(config) {
    var _a;
    if (config != null) {
      const configLogo = (_a = config === null || config === void 0 ? void 0 : config.designTokens) === null || _a === void 0 ? void 0 : _a.logo;
      // NOTE(callmetarush): Only update logo if not passed via prop
      if (configLogo != null && this.logoUrl == null) {
        this.logoUrl = configLogo;
      }
    }
  }
  meetingChanged(meeting) {
    var _a, _b, _c, _d;
    if (meeting != null) {
      if ((0,_versionTwoApis_e31e770d_js__WEBPACK_IMPORTED_MODULE_2__.i)(meeting.self.suggestedTheme))
        return;
      const meetingLogo = (_d = (_c = (_b = (_a = meeting.self) === null || _a === void 0 ? void 0 : _a.suggestedTheme) === null || _b === void 0 ? void 0 : _b.header) === null || _c === void 0 ? void 0 : _c.elements) === null || _d === void 0 ? void 0 : _d.logo;
      if (meetingLogo != null && this.logoUrl == null) {
        this.logoUrl = meetingLogo;
      }
    }
  }
  render() {
    const logo = this.logoUrl;
    const text = this.t('Logo');
    return (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.H, null, typeof logo === 'string' && (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { src: logo, alt: text }));
  }
  static get watchers() { return {
    "config": ["configChanged"],
    "meeting": ["meetingChanged"]
  }; }
};
DyteLogo.style = dyteLogoCss;




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




/***/ }),

/***/ 41249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ProduceType),
/* harmony export */   "a": () => (/* binding */ isV2Permissions),
/* harmony export */   "c": () => (/* binding */ canProduce),
/* harmony export */   "i": () => (/* binding */ isV2Theme)
/* harmony export */ });
// NOTE:(callmetarush) This file is just till
// we support both V1 and V2 api's.
const isV2Permissions = (permissions) => {
  return 'requestProduceVideo' in permissions;
};
const isV2Theme = (theme) => {
  return !('controlBar' in theme);
};
var ProduceType;
(function (ProduceType) {
  ProduceType[ProduceType["Video"] = 0] = "Video";
  ProduceType[ProduceType["ScreenShare"] = 1] = "ScreenShare";
})(ProduceType || (ProduceType = {}));
const canProduce = (produceType, permissions) => {
  switch (produceType) {
    case ProduceType.Video: {
      return ((isV2Permissions(permissions)
        ? permissions.produceVideo
        : permissions.produceVideo.allow) === 'ALLOWED');
    }
    case ProduceType.ScreenShare: {
      return ((isV2Permissions(permissions)
        ? permissions.produceScreenshare
        : permissions.produceScreenshare.allow) === 'ALLOWED');
    }
  }
};




/***/ })

};
;