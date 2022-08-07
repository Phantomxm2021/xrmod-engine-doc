"use strict";
exports.id = 4724;
exports.ids = [4724];
exports.modules = {

/***/ 44724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_recording_indicator": () => (/* binding */ DyteRecordingIndicator)
/* harmony export */ });
/* harmony import */ var _index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42619);
/* harmony import */ var _default_icon_pack_754e33a3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80335);
/* harmony import */ var _index_e51fd65a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20975);
/* harmony import */ var _default_language_388827b4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19261);





const dyteRecordingIndicatorCss = ":host{display:block;font-family:var(--dyte-font-family, sans-serif)}.indicator{display:flex;flex-direction:row;align-items:center;font-size:14px;--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity));margin-left:var(--dyte-space-4, 16px);margin-right:var(--dyte-space-4, 16px)}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px);-webkit-animation:blink 4s linear infinite;animation:blink 4s linear infinite}@-webkit-keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}@keyframes blink{0%,10%{opacity:0}11%,100%{opacity:1}}";

const DyteRecordingIndicator = class {
  constructor(hostRef) {
    (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Language */
    this.t = (0,_index_e51fd65a_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    /** Icon pack */
    this.iconPack = _default_icon_pack_754e33a3_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.setIsRecording = (recordingState) => {
      this.isRecording = recordingState === 'RECORDING';
    };
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.meeting) === null || _a === void 0 ? void 0 : _a.recording.removeListener('recordingUpdate', this.updateRecordingStatus);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      this.setIsRecording(meeting.recording.recordingState);
      this.updateRecordingStatus = (recordingState) => {
        this.setIsRecording(recordingState);
      };
      meeting.recording.addListener('recordingUpdate', this.updateRecordingStatus);
    }
  }
  render() {
    return ((0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.isRecording && ((0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "indicator", "aria-label": this.t('This meeting is being recorded'), part: "indicator" }, (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.recording, "aria-hidden": true, tabIndex: -1, part: "icon" }), (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.t('REC'))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteRecordingIndicator.style = dyteRecordingIndicatorCss;




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