"use strict";
exports.id = 3317;
exports.ids = [3317];
exports.modules = {

/***/ 53317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_participant_count": () => (/* binding */ DyteParticipantCount)
/* harmony export */ });
/* harmony import */ var _index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42619);
/* harmony import */ var _default_icon_pack_754e33a3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80335);
/* harmony import */ var _index_e51fd65a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20975);
/* harmony import */ var _default_language_388827b4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19261);





const dyteParticipantCountCss = ":host{display:inline-flex;height:var(--dyte-space-10, 40px);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center;padding:var(--dyte-space-1, 4px);font-family:var(--dyte-font-family, sans-serif)}dyte-icon{margin-right:var(--dyte-space-1, 4px);height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}";

const DyteParticipantCount = class {
  constructor(hostRef) {
    (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Icon pack */
    this.iconPack = _default_icon_pack_754e33a3_js__WEBPACK_IMPORTED_MODULE_1__.d;
    /** Language */
    this.t = (0,_index_e51fd65a_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.participantCount = 0;
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    if (this.meeting != null && this.countListener != null) {
      this.meeting.participants.joined.removeListener('participantJoined', this.countListener);
      this.meeting.participants.joined.removeListener('participantLeft', this.countListener);
    }
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      this.countListener = () => {
        this.participantCount =
          meeting.participants.joined.size + (meeting.self.roomJoined ? 1 : 0);
      };
      this.countListener();
      meeting.participants.joined.addListener('participantJoined', this.countListener);
      meeting.participants.joined.addListener('participantLeft', this.countListener);
    }
  }
  render() {
    return ((0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.H, { tabIndex: 0, role: "log", "aria-label": `${this.participantCount} ${this.t('participants')}` }, (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-icon", { icon: this.iconPack.people, tabIndex: -1, "aria-hidden": true, part: "icon" }), this.participantCount));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteParticipantCount.style = dyteParticipantCountCss;




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