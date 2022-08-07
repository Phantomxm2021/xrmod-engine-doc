"use strict";
exports.id = 8143;
exports.ids = [8143];
exports.modules = {

/***/ 18143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_grid": () => (/* binding */ DyteGrid)
/* harmony export */ });
/* harmony import */ var _index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42619);
/* harmony import */ var _default_ui_config_ae582462_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8976);
/* harmony import */ var _default_icon_pack_754e33a3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80335);
/* harmony import */ var _index_e51fd65a_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20975);
/* harmony import */ var _index_f7bdca7a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30790);
/* harmony import */ var _store_79928517_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52731);
/* harmony import */ var _default_language_388827b4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19261);








const dyteGridCss = ":host{display:flex;height:100%;width:100%;overflow:hidden;font-family:var(--dyte-font-family, sans-serif);flex-wrap:wrap;align-content:center;align-items:center;justify-content:center;color:rgb(var(--dyte-colors-text-1000, 255 255 255));transition:0.4s}dyte-participant-tile{aspect-ratio:initial;box-sizing:border-box}";

const DyteGrid = class {
  constructor(hostRef) {
    (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.participants = [];
    this.pinnedParticipants = [];
    this.screenShareParticipants = [];
    this.plugins = [];
    this.responsiveGap = 4;
    this.dimensions = [0, 0];
    /** The aspect ratio of each participant */
    this.aspectRatio = '16:9';
    /** Gap between participants */
    this.gap = 8;
    /** Config object */
    this.config = _default_ui_config_ae582462_js__WEBPACK_IMPORTED_MODULE_1__.d;
    /** Icon pack */
    this.iconPack = _default_icon_pack_754e33a3_js__WEBPACK_IMPORTED_MODULE_2__.d;
    /** Language */
    this.t = (0,_index_e51fd65a_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.onViewModeChanged = ({ viewMode }) => {
      if (this.meeting == null)
        return;
      const permissions = this.meeting.self.permissions;
      const hideSelf = !(permissions === null || permissions === void 0 ? void 0 : permissions.canPresent) && (permissions === null || permissions === void 0 ? void 0 : permissions.viewType) === 'WEBINAR';
      if (viewMode === 'PAGINATED') {
        // if paginated, remove self
        this.participants = this.participants.filter((p) => p.id !== this.meeting.self.id);
      }
      else if (!this.participants.some((p) => p.id === this.meeting.self.id)) {
        // if active, add self
        this.participants = [...this.participants].concat(hideSelf ? [] : [this.meeting.self]);
      }
    };
    this.onParticipantJoined = (participant) => {
      if (this.meeting == null)
        return;
      if (!this.participants.some((p) => p.id === participant.id)) {
        const lastItem = this.participants[this.participants.length - 1];
        const { self } = this.meeting;
        if (lastItem != null && lastItem.id === self.id) {
          // get all participants except the last self one
          const remainingParticipants = this.participants.slice(0, -1);
          this.participants = [...remainingParticipants, participant, self];
        }
        else {
          this.participants = [...this.participants, participant];
        }
      }
    };
    this.onParticipantLeft = (participant) => {
      this.participants = this.participants.filter((p) => p.id !== participant.id);
      if (participant.screenShareEnabled) {
        this.removeScreenShare(participant);
      }
    };
    this.onScreenShareUpdate = (participant) => {
      if (participant.screenShareEnabled) {
        this.addScreenShare(participant);
      }
      else {
        this.removeScreenShare(participant);
      }
    };
    this.onSelfScreenShareUpdate = ({ screenShareEnabled, }) => {
      if (screenShareEnabled) {
        this.addScreenShare(this.meeting.self);
      }
      else {
        this.removeScreenShare(this.meeting.self);
      }
    };
    this.onPluginStateUpdate = (plugin, { active }) => {
      if (active) {
        if (!this.plugins.some((p) => p.id === plugin.id)) {
          this.plugins = [...this.plugins, plugin];
        }
      }
      else {
        this.plugins = this.plugins.filter((p) => p.id !== plugin.id);
      }
    };
    this.onParticipantPinned = (participant) => {
      this.pinnedParticipants = [...this.pinnedParticipants, participant];
    };
    this.onParticipantUnpinned = (participant) => {
      this.pinnedParticipants = this.pinnedParticipants.filter((p) => p.id !== participant.id);
    };
  }
  connectedCallback() {
    this.sizeChanged(this.size);
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
    const { self, participants, plugins } = this.meeting;
    participants.active.removeListener('participantJoined', this.onParticipantJoined);
    participants.active.removeListener('participantLeft', this.onParticipantLeft);
    participants.joined.removeListener('screenShareUpdate', this.onScreenShareUpdate);
    self.removeListener('screenShareUpdate', this.onSelfScreenShareUpdate);
    plugins.removeListener('stateUpdate', this.onPluginStateUpdate);
    participants.pinned.removeListener('participantJoined', this.onParticipantPinned);
    participants.pinned.removeListener('participantLeft', this.onParticipantUnpinned);
    self.removeListener('pinned', this.onParticipantPinned);
    self.removeListener('unpinned', this.onParticipantUnpinned);
    participants.removeListener('viewModeChanged', this.onViewModeChanged);
  }
  sizeChanged(size) {
    this.responsiveGap = size === 'sm' ? this.gap / 2 : this.gap;
  }
  screenShareParticipantsChanged(participants) {
    const activeScreenShare = participants.length > 0;
    this.stateUpdate.emit({ activeScreenShare });
    _store_79928517_js__WEBPACK_IMPORTED_MODULE_5__.s.activeScreenShare = activeScreenShare;
  }
  pluginsChanged(plugins) {
    const activePlugin = plugins.length > 0;
    this.stateUpdate.emit({ activePlugin });
    _store_79928517_js__WEBPACK_IMPORTED_MODULE_5__.s.activePlugin = activePlugin;
  }
  pinnedParticipantsChanged(participants) {
    const activeSpotlight = participants.length > 0;
    this.stateUpdate.emit({ activeSpotlight });
    _store_79928517_js__WEBPACK_IMPORTED_MODULE_5__.s.activeSpotlight = activeSpotlight;
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      const { self, participants, plugins } = meeting;
      // Initialize values
      const permissions = this.meeting.self.permissions;
      const hideSelf = !(permissions === null || permissions === void 0 ? void 0 : permissions.canPresent) && (permissions === null || permissions === void 0 ? void 0 : permissions.viewType) === 'WEBINAR';
      this.participants = [
        ...participants.active.toArray(),
        ...(participants.viewMode === 'ACTIVE_GRID' && !hideSelf ? [self] : []),
      ];
      this.pinnedParticipants = [
        ...participants.pinned.toArray(),
        ...(self.isPinned ? [self] : []),
      ];
      this.screenShareParticipants = participants.joined
        .toArray()
        .filter((participant) => participant.screenShareEnabled);
      this.plugins = plugins.active.toArray();
      // Add all listeners
      participants.active.addListener('participantJoined', this.onParticipantJoined);
      participants.active.addListener('participantLeft', this.onParticipantLeft);
      participants.joined.addListener('screenShareUpdate', this.onScreenShareUpdate);
      self.addListener('screenShareUpdate', this.onSelfScreenShareUpdate);
      plugins.all.addListener('stateUpdate', this.onPluginStateUpdate);
      participants.pinned.addListener('participantJoined', this.onParticipantPinned);
      participants.pinned.addListener('participantLeft', this.onParticipantUnpinned);
      self.addListener('pinned', this.onParticipantPinned);
      self.addListener('unpinned', this.onParticipantUnpinned);
      participants.addListener('viewModeChanged', this.onViewModeChanged);
    }
  }
  addScreenShare(participant) {
    if (!this.screenShareParticipants.some((p) => p.id === participant.id)) {
      this.screenShareParticipants = [...this.screenShareParticipants, participant];
    }
  }
  removeScreenShare(participant) {
    this.screenShareParticipants = this.screenShareParticipants.filter((p) => p.id !== participant.id);
  }
  render() {
    const defaults = {
      meeting: this.meeting,
      size: this.size,
      states: this.states || _store_79928517_js__WEBPACK_IMPORTED_MODULE_5__.s,
      config: this.config,
      iconPack: this.iconPack,
      t: this.t,
    };
    return ((0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_f7bdca7a_js__WEBPACK_IMPORTED_MODULE_4__.R, { element: "dyte-grid", defaults: defaults, childProps: {
        participants: this.participants,
        screenShareParticipants: this.screenShareParticipants,
        plugins: this.plugins,
        pinnedParticipants: this.pinnedParticipants,
        aspectRatio: this.aspectRatio,
        gap: this.gap,
      }, onlyChildren: true })));
  }
  get host() { return (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.g)(this); }
  static get watchers() { return {
    "size": ["sizeChanged"],
    "screenShareParticipants": ["screenShareParticipantsChanged"],
    "plugins": ["pluginsChanged"],
    "pinnedParticipants": ["pinnedParticipantsChanged"],
    "meeting": ["meetingChanged"]
  }; }
};
DyteGrid.style = dyteGridCss;




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

/***/ 30790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ Render)
/* harmony export */ });
/* harmony import */ var _index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42619);


/**
 * Computes selectors and returns them based on their priority.
 */
const computeSelectors = ({ element, size, states = {}, config = {}, }) => {
  let selectors = [];
  const data = config === null || config === void 0 ? void 0 : config.root[element];
  const add = (selector) => {
    selectors.push(selector);
    if (typeof size === 'string') {
      selectors.push(`${selector}.${size}`);
    }
  };
  add(element);
  if (typeof data === 'object' && !Array.isArray(data) && data !== null) {
    // check if the data variable is an object, strictly and not an array or just null
    const { state, states: elementStates } = data;
    let selector = element;
    let activeStates = [];
    if (Array.isArray(elementStates)) {
      activeStates = elementStates.filter((state) => states[state]);
      activeStates.sort();
      for (const state of activeStates) {
        add(`${selector}.${state}`);
      }
      if (activeStates.length > 1) {
        const booleanStateSelector = [selector, ...activeStates].join('.');
        add(booleanStateSelector);
      }
    }
    if (typeof state === 'string') {
      // dyte-meeting[meeting=joined]
      const keyValueSelector = `${element}[${state}=${states[state]}]`;
      add(keyValueSelector);
      for (const state of activeStates) {
        add(`${keyValueSelector}.${state}`);
      }
      if (activeStates.length > 1) {
        const withBooleanStateSelector = [keyValueSelector, ...activeStates].join('.');
        add(withBooleanStateSelector);
      }
    }
  }
  return selectors;
};
/**
 * Returns the computed styles - styles obtained from combining styles from all computed selectors
 * on the basis of their priorities.
 */
const getComputedStyles = ({ selectors, styles }) => {
  if (!Array.isArray(selectors) || styles == null)
    return {};
  const computedStyles = {};
  for (const selector of selectors) {
    const style = styles[selector];
    if (style != null) {
      Object.assign(computedStyles, style);
    }
  }
  return computedStyles;
};
/**
 * Returns the computed children which are to be rendered inside an element
 */
const getComputedChildren = ({ selectors, root }) => {
  if (!Array.isArray(selectors) || root == null)
    return [];
  for (let i = selectors.length - 1; i >= 0; i--) {
    const selector = selectors[i];
    const children = root[selector];
    if (Array.isArray(children)) {
      return children;
    }
    else if (Array.isArray(children === null || children === void 0 ? void 0 : children.children)) {
      return children.children;
    }
  }
  return [];
};

/**
 * Renders the children of an element.
 */
const RenderChildren = ({ elements, defaults, props = {}, deepProps = false, }) => {
  if (!Array.isArray(elements) || elements.length === 0)
    return null;
  return elements.map((element) => {
    return ((0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(Render, { element: element, defaults: defaults, props: props, childProps: deepProps && props }));
  });
};
/**
 * Renders an element from UI Config
 */
const Render = ({ element, defaults, childProps = {}, props = {}, onlyChildren = false, asHost = false, deepProps = false, }, children) => {
  var _a;
  const { config, size, states } = defaults;
  let Tag, configProps = {};
  if (Array.isArray(element)) {
    // get props if element is passed in array form:
    // ['dyte-participant-tile', { variant: 'gradient' }]
    [Tag, configProps] = element;
  }
  else {
    Tag = element;
  }
  const elemData = (_a = config === null || config === void 0 ? void 0 : config.root) === null || _a === void 0 ? void 0 : _a[Tag];
  if (elemData != null && 'props' in elemData) {
    props = Object.assign(Object.assign({}, elemData['props']), props);
  }
  props = Object.assign(Object.assign({}, props), configProps);
  const selectors = computeSelectors({ element: Tag, size, states, config });
  const computedChildren = getComputedChildren({ selectors, root: config.root });
  if (onlyChildren) {
    return ((0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps }));
  }
  const styles = getComputedStyles({ selectors, styles: config.styles });
  if (asHost) {
    return ((0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.H, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps }),
      children));
  }
  if (Tag.startsWith('dyte-')) {
    return ((0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, Object.assign({}, defaults, { style: styles }, props),
      (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps }),
      children));
  }
  else {
    const [HTMLTag, id] = Tag.split('#');
    return ((0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(HTMLTag, { id: id, style: styles },
      (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.h)(RenderChildren, { elements: computedChildren, defaults: defaults, props: childProps, deepProps: deepProps }),
      children));
  }
};




/***/ }),

/***/ 52731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ onChange),
/* harmony export */   "s": () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42619);


const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof _index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.a !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = (0,_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.a)();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.f));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(_index_74ddb327_js__WEBPACK_IMPORTED_MODULE_0__.f));
            cleanupElements(elmsToUpdate);
        },
    };
};

const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    let states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(defaultState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        const unReset = on('reset', () => cb(defaultState[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const { state, onChange } = createStore({});




/***/ })

};
;