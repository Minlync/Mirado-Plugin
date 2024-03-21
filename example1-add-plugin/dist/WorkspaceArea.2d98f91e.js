// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1j6wU":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"592mh"}],"29lPd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "67294830555fcf5bb9b4d2f32d98f91e"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"75W7T":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceArea = require("../components/WorkspaceArea");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        controlPanelVariant: _selectors.getWorkspace(state).isWorkspaceAddVisible || _selectors.getWindowIds(state).length > 0 ? undefined : 'wide',
        isWorkspaceAddVisible: _selectors.getWorkspace(state).isWorkspaceAddVisible,
        isWorkspaceControlPanelVisible: _selectors.getConfig(state).workspaceControlPanel.enabled,
        lang: _selectors.getConfig(state).language
    };
};
/**
 *
 * @param theme
 * @returns {{background: {background: string}}}
 */ var styles = function styles1(theme) {
    var getBackgroundColor = theme.palette.type === 'light' ? _styles.darken : _styles.lighten;
    return {
        viewer: {
            background: getBackgroundColor(theme.palette.shades.light, 0.1),
            bottom: 0,
            left: 0,
            overflow: 'hidden',
            position: 'absolute',
            right: 0,
            top: 0
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _styles.withStyles(styles), _reactRedux.connect(mapStateToProps), _withPlugins.withPlugins('WorkspaceArea'));
var _default = enhance(_WorkspaceArea.WorkspaceArea);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../components/WorkspaceArea":"3y9ph","../state/selectors":"5Trnc"}],"3y9ph":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceArea = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _ErrorDialog = _interopRequireDefault(require("../containers/ErrorDialog"));
var _WorkspaceControlPanel = _interopRequireDefault(require("../containers/WorkspaceControlPanel"));
var _Workspace = _interopRequireDefault(require("../containers/Workspace"));
var _WorkspaceAdd = _interopRequireDefault(require("../containers/WorkspaceAdd"));
var _BackgroundPluginArea = _interopRequireDefault(require("../containers/BackgroundPluginArea"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * This is the top level Mirador component.
 * @prop {Object} manifests
 */ var WorkspaceArea1 = /*#__PURE__*/ function(_Component) {
    _inherits(WorkspaceArea2, _Component);
    var _super = _createSuper(WorkspaceArea2);
    function WorkspaceArea2() {
        _classCallCheck(this, WorkspaceArea2);
        return _super.apply(this, arguments);
    }
    _createClass(WorkspaceArea2, [
        {
            key: "render",
            value: /**
     * render
     * @return {String} - HTML markup for the component
     */ function render() {
                var _this$props = this.props, classes = _this$props.classes, controlPanelVariant = _this$props.controlPanelVariant, isWorkspaceAddVisible = _this$props.isWorkspaceAddVisible, isWorkspaceControlPanelVisible = _this$props.isWorkspaceControlPanelVisible, lang = _this$props.lang, t = _this$props.t;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, isWorkspaceControlPanelVisible && /*#__PURE__*/ _react["default"].createElement(_WorkspaceControlPanel["default"], {
                    variant: controlPanelVariant
                }), /*#__PURE__*/ _react["default"].createElement("main", {
                    className: _classnames["default"](classes.viewer, _cssNs["default"]('viewer')),
                    lang: lang,
                    "aria-label": t('workspace')
                }, isWorkspaceAddVisible ? /*#__PURE__*/ _react["default"].createElement(_WorkspaceAdd["default"], null) : /*#__PURE__*/ _react["default"].createElement(_Workspace["default"], null), /*#__PURE__*/ _react["default"].createElement(_ErrorDialog["default"], null), /*#__PURE__*/ _react["default"].createElement(_BackgroundPluginArea["default"], null))));
            }
        }
    ]);
    return WorkspaceArea2;
}(_react.Component);
exports.WorkspaceArea = WorkspaceArea1;
WorkspaceArea1.defaultProps = {
    controlPanelVariant: undefined,
    isWorkspaceAddVisible: false,
    lang: undefined
};

},{"react":"3b2NM","classnames":"5aJRc","../containers/ErrorDialog":"357YN","../containers/WorkspaceControlPanel":"5X104","../containers/Workspace":"5BX0o","../containers/WorkspaceAdd":"7q5lM","../containers/BackgroundPluginArea":"1tgyv","../config/css-ns":"6ABf8"}],"357YN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _ErrorDialog = require("../components/ErrorDialog");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapStateToProps - to hook up connect
 * @memberof ErrorDialog
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        error: _selectors.getLatestError(state)
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */ var mapDispatchToProps = {
    removeError: actions.removeError
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('ErrorDialog'));
var _default = enhance(_ErrorDialog.ErrorDialog);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../components/ErrorDialog":"Vexs9","../state/actions":"4t2dD","../state/selectors":"5Trnc"}],"Vexs9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorDialog = void 0;
var _isUndefined2 = _interopRequireDefault(require("lodash/isUndefined"));
var _react = _interopRequireWildcard(require("react"));
var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));
var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));
var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));
var _core = require("@material-ui/core");
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 */ var ErrorDialog1 = /*#__PURE__*/ function(_Component) {
    _inherits(ErrorDialog2, _Component);
    var _super = _createSuper(ErrorDialog2);
    function ErrorDialog2() {
        _classCallCheck(this, ErrorDialog2);
        return _super.apply(this, arguments);
    }
    _createClass(ErrorDialog2, [
        {
            key: "render",
            value: /**
     * render
     * @return
     */ function render() {
                var _this$props = this.props, error = _this$props.error, removeError = _this$props.removeError, t = _this$props.t;
                var hasError = !_isUndefined2["default"](error);
                return error ? /*#__PURE__*/ _react["default"].createElement(_Dialog["default"], {
                    "aria-labelledby": "error-dialog-title",
                    id: "error-dialog",
                    onClose: function onClose() {
                        return removeError(error.id);
                    },
                    open: hasError
                }, /*#__PURE__*/ _react["default"].createElement(_DialogTitle["default"], {
                    id: "error-dialog-title",
                    disableTypography: true
                }, /*#__PURE__*/ _react["default"].createElement(_core.Typography, {
                    variant: "h2"
                }, t('errorDialogTitle'))), /*#__PURE__*/ _react["default"].createElement(_DialogContent["default"], {
                    disableTypography: true
                }, /*#__PURE__*/ _react["default"].createElement(_core.DialogContentText, {
                    variant: "body2",
                    noWrap: true,
                    color: "inherit"
                }, "".concat(error.message)), /*#__PURE__*/ _react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/ _react["default"].createElement(_Button["default"], {
                    onClick: function onClick() {
                        return removeError(error.id);
                    },
                    variant: "contained"
                }, t('errorDialogConfirm'))))) : null;
            }
        }
    ]);
    return ErrorDialog2;
}(_react.Component);
exports.ErrorDialog = ErrorDialog1;
ErrorDialog1.defaultProps = {
    error: null,
    removeError: function removeError() {
    },
    t: function t(key) {
        return key;
    }
};

},{"lodash/isUndefined":"5ELmz","react":"3b2NM","@material-ui/core/Dialog":"2fkds","@material-ui/core/DialogContent":"6V6fB","@material-ui/core/DialogTitle":"7pAIQ","@material-ui/core":"6DoV9","@material-ui/core/Button":"1Xm5M"}],"5X104":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceControlPanel = require("../components/WorkspaceControlPanel");
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)},
 * drawer: {overflowX: string, height: string}}}
 */ var styles = function styles1(theme) {
    var _branding;
    return {
        branding: (_branding = {
            display: 'flex',
            position: 'absolute'
        }, _defineProperty(_branding, theme.breakpoints.up('xs'), {
            display: 'none'
        }), _defineProperty(_branding, theme.breakpoints.up('sm'), {
            bottom: 0,
            display: 'block',
            "float": 'none',
            right: 'auto',
            width: '100%'
        }), _defineProperty(_branding, "right", 0), _branding),
        ctrlBtn: {
            margin: theme.spacing(1)
        },
        drawer: {
            overflowX: 'hidden'
        },
        root: _defineProperty({
            height: 64
        }, theme.breakpoints.up('sm'), {
            height: '100%',
            left: 0,
            right: 'auto',
            width: 64
        }),
        toolbar: _defineProperty({
            display: 'flex',
            justifyContent: 'space-between'
        }, theme.breakpoints.up('sm'), {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            minHeight: 0
        }),
        wide: {
            width: 'auto'
        },
        workspaceButtons: _defineProperty({
        }, theme.breakpoints.up('sm'), {
            display: 'flex',
            flexDirection: 'column'
        })
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _styles.withStyles(styles), _withPlugins.withPlugins('WorkspaceControlPanel')// further HOC go here
);
var _default = enhance(_WorkspaceControlPanel.WorkspaceControlPanel);
exports["default"] = _default;

},{"redux":"7panR","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../components/WorkspaceControlPanel":"1qlvR"}],"1qlvR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceControlPanel = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));
var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));
var _WorkspaceAddButton = _interopRequireDefault(require("../containers/WorkspaceAddButton"));
var _WorkspaceControlPanelButtons = _interopRequireDefault(require("../containers/WorkspaceControlPanelButtons"));
var _Branding = _interopRequireDefault(require("../containers/Branding"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Provides the panel responsible for controlling the entire workspace
 */ var WorkspaceControlPanel1 = /*#__PURE__*/ function(_Component) {
    _inherits(WorkspaceControlPanel2, _Component);
    var _super = _createSuper(WorkspaceControlPanel2);
    function WorkspaceControlPanel2() {
        _classCallCheck(this, WorkspaceControlPanel2);
        return _super.apply(this, arguments);
    }
    _createClass(WorkspaceControlPanel2, [
        {
            key: "render",
            value: /**
     * render
     * @return {String} - HTML markup for the component
     */ function render() {
                var _this$props = this.props, classes = _this$props.classes, t = _this$props.t, variant = _this$props.variant;
                return(/*#__PURE__*/ _react["default"].createElement(_AppBar["default"], {
                    className: _classnames["default"](classes.root, _cssNs["default"]('workspace-control-panel'), variant === 'wide' ? classes.wide : null),
                    color: "default",
                    position: "absolute",
                    component: "nav",
                    "aria-label": t('workspaceNavigation')
                }, /*#__PURE__*/ _react["default"].createElement(_Toolbar["default"], {
                    disableGutters: true,
                    className: classes.toolbar
                }, /*#__PURE__*/ _react["default"].createElement(_WorkspaceAddButton["default"], null), /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.workspaceButtons
                }, /*#__PURE__*/ _react["default"].createElement(_WorkspaceControlPanelButtons["default"], null))), /*#__PURE__*/ _react["default"].createElement(_Branding["default"], {
                    className: classes.branding,
                    t: t,
                    variant: variant
                })));
            }
        }
    ]);
    return WorkspaceControlPanel2;
}(_react.Component);
exports.WorkspaceControlPanel = WorkspaceControlPanel1;
WorkspaceControlPanel1.defaultProps = {
    variant: 'default'
};

},{"react":"3b2NM","classnames":"5aJRc","@material-ui/core/AppBar":"3NZOv","@material-ui/core/Toolbar":"3jiG5","../containers/WorkspaceAddButton":"4AhbE","../containers/WorkspaceControlPanelButtons":"FbpgW","../containers/Branding":"4sDNV","../config/css-ns":"6ABf8"}],"4AhbE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withWidth = _interopRequireDefault(require("@material-ui/core/withWidth"));
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _WorkspaceAddButton = require("../components/WorkspaceAddButton");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * mapStateToProps - to hook up connect
 * @memberof WorkspaceControlPanel
 * @private
 */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var width = _ref.width;
    var _getWorkspace = _selectors.getWorkspace(state), isWorkspaceAddVisible = _getWorkspace.isWorkspaceAddVisible;
    return {
        isWorkspaceAddVisible: isWorkspaceAddVisible,
        useExtendedFab: width !== 'xs' && !isWorkspaceAddVisible && _selectors.getWindowIds(state).length === 0
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */ var mapDispatchToProps = {
    setWorkspaceAddVisibility: actions.setWorkspaceAddVisibility
};
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */ var styles = function styles1(theme) {
    return {
        fab: {
            margin: theme.spacing(1)
        },
        fabPrimary: {
            '&:focus': {
                backgroundColor: theme.palette.primary.dark
            }
        },
        fabSecondary: {
            '&:focus': {
                backgroundColor: theme.palette.secondary.dark
            }
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _withWidth["default"](), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('WorkspaceAddButton'));
var _default = enhance(_WorkspaceAddButton.WorkspaceAddButton);
exports["default"] = _default;

},{"react-redux":"47SrY","redux":"7panR","react-i18next":"6hlRL","@material-ui/core":"6DoV9","@material-ui/core/withWidth":"3M87t","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/WorkspaceAddButton":"6PjF9"}],"6PjF9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceAddButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));
var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));
var _AddSharp = _interopRequireDefault(require("@material-ui/icons/AddSharp"));
var _CloseSharp = _interopRequireDefault(require("@material-ui/icons/CloseSharp"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 */ var WorkspaceAddButton1 = /*#__PURE__*/ function(_Component) {
    _inherits(WorkspaceAddButton2, _Component);
    var _super = _createSuper(WorkspaceAddButton2);
    function WorkspaceAddButton2() {
        _classCallCheck(this, WorkspaceAddButton2);
        return _super.apply(this, arguments);
    }
    _createClass(WorkspaceAddButton2, [
        {
            key: "render",
            value: /**
     * render
     * @return
     */ function render() {
                var _this$props = this.props, classes = _this$props.classes, t = _this$props.t, setWorkspaceAddVisibility = _this$props.setWorkspaceAddVisibility, isWorkspaceAddVisible = _this$props.isWorkspaceAddVisible, useExtendedFab = _this$props.useExtendedFab;
                return(/*#__PURE__*/ _react["default"].createElement(_Tooltip["default"], {
                    title: isWorkspaceAddVisible ? t('closeAddResourceMenu') : t('addResource')
                }, /*#__PURE__*/ _react["default"].createElement(_Fab["default"], {
                    size: "medium",
                    color: "primary",
                    id: "addBtn",
                    disableRipple: true,
                    "aria-label": isWorkspaceAddVisible ? t('closeAddResourceMenu') : useExtendedFab && t('startHere') || t('addResource'),
                    className: classes.fab,
                    classes: {
                        primary: classes.fabPrimary,
                        secondary: classes.fabSecondary
                    },
                    variant: useExtendedFab ? 'extended' : 'round',
                    onClick: function onClick() {
                        setWorkspaceAddVisibility(!isWorkspaceAddVisible);
                    }
                }, isWorkspaceAddVisible ? /*#__PURE__*/ _react["default"].createElement(_CloseSharp["default"], null) : /*#__PURE__*/ _react["default"].createElement(_AddSharp["default"], null), useExtendedFab && t('startHere'))));
            }
        }
    ]);
    return WorkspaceAddButton2;
}(_react.Component);
exports.WorkspaceAddButton = WorkspaceAddButton1;
WorkspaceAddButton1.defaultProps = {
    isWorkspaceAddVisible: false,
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","@material-ui/core/Fab":"78dXn","@material-ui/core/Tooltip":"2icXo","@material-ui/icons/AddSharp":"7vsPR","@material-ui/icons/CloseSharp":"1IIc1"}],"7vsPR":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'AddSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"FbpgW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceControlPanelButtons = require("../components/WorkspaceControlPanelButtons");
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */ var styles = function styles1(theme) {
    return {
        ctrlBtn: {
            margin: theme.spacing(1)
        }
    };
};
var enhance = _redux.compose(_styles.withStyles(styles), _withPlugins.withPlugins('WorkspaceControlPanelButtons'));
var _default = enhance(_WorkspaceControlPanelButtons.WorkspaceControlPanelButtons);
exports["default"] = _default;

},{"redux":"7panR","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../components/WorkspaceControlPanelButtons":"3goFL"}],"3goFL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceControlPanelButtons = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FullScreenButton = _interopRequireDefault(require("../containers/FullScreenButton"));
var _WorkspaceMenuButton = _interopRequireDefault(require("../containers/WorkspaceMenuButton"));
var _WorkspaceOptionsButton = _interopRequireDefault(require("../containers/WorkspaceOptionsButton"));
var _WindowListButton = _interopRequireDefault(require("../containers/WindowListButton"));
var _PluginHook = require("./PluginHook");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 *
 */ var WorkspaceControlPanelButtons1 = /*#__PURE__*/ function(_Component) {
    _inherits(WorkspaceControlPanelButtons2, _Component);
    var _super = _createSuper(WorkspaceControlPanelButtons2);
    function WorkspaceControlPanelButtons2() {
        _classCallCheck(this, WorkspaceControlPanelButtons2);
        return _super.apply(this, arguments);
    }
    _createClass(WorkspaceControlPanelButtons2, [
        {
            key: "render",
            value: /**
     * render
     *
     * @return {type}  description
     */ function render() {
                var classes = this.props.classes;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_WindowListButton["default"], null), /*#__PURE__*/ _react["default"].createElement(_WorkspaceMenuButton["default"], null), /*#__PURE__*/ _react["default"].createElement(_WorkspaceOptionsButton["default"], null), /*#__PURE__*/ _react["default"].createElement(_FullScreenButton["default"], {
                    className: classes.ctrlBtn
                }), /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, this.props)));
            }
        }
    ]);
    return WorkspaceControlPanelButtons2;
}(_react.Component);
exports.WorkspaceControlPanelButtons = WorkspaceControlPanelButtons1;
WorkspaceControlPanelButtons1.defaultProps = {
    classes: {
    }
};

},{"react":"3b2NM","../containers/FullScreenButton":"4VaaE","../containers/WorkspaceMenuButton":"4bdJ0","../containers/WorkspaceOptionsButton":"1Ksk0","../containers/WindowListButton":"3tYzy","./PluginHook":"6m4WL"}],"4VaaE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _FullScreenButton = require("../components/FullScreenButton");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapStateToProps - to hook up connect
 * @memberof FullScreenButton
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        isFullscreenEnabled: _selectors.getFullScreenEnabled(state)
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */ var mapDispatchToProps = {
    setWorkspaceFullscreen: actions.setWorkspaceFullscreen
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('FullScreenButton'));
var _default = enhance(_FullScreenButton.FullScreenButton);
exports["default"] = _default;

},{"react-redux":"47SrY","redux":"7panR","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/FullScreenButton":"3eiKY"}],"3eiKY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FullScreenButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FullscreenSharp = _interopRequireDefault(require("@material-ui/icons/FullscreenSharp"));
var _FullscreenExitSharp = _interopRequireDefault(require("@material-ui/icons/FullscreenExitSharp"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 */ var FullScreenButton1 = /*#__PURE__*/ function(_Component) {
    _inherits(FullScreenButton2, _Component);
    var _super = _createSuper(FullScreenButton2);
    function FullScreenButton2() {
        _classCallCheck(this, FullScreenButton2);
        return _super.apply(this, arguments);
    }
    _createClass(FullScreenButton2, [
        {
            key: "render",
            value: /**
     * render
     * @return
     */ function render() {
                var _this$props = this.props, className = _this$props.className, isFullscreenEnabled = _this$props.isFullscreenEnabled, setWorkspaceFullscreen = _this$props.setWorkspaceFullscreen, t = _this$props.t;
                return(/*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    className: className,
                    "aria-label": isFullscreenEnabled ? t('exitFullScreen') : t('workspaceFullScreen'),
                    onClick: function onClick() {
                        return setWorkspaceFullscreen(!isFullscreenEnabled);
                    }
                }, isFullscreenEnabled ? /*#__PURE__*/ _react["default"].createElement(_FullscreenExitSharp["default"], null) : /*#__PURE__*/ _react["default"].createElement(_FullscreenSharp["default"], null)));
            }
        }
    ]);
    return FullScreenButton2;
}(_react.Component);
exports.FullScreenButton = FullScreenButton1;
FullScreenButton1.defaultProps = {
    className: undefined,
    isFullscreenEnabled: false,
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","@material-ui/icons/FullscreenSharp":"7EUmD","@material-ui/icons/FullscreenExitSharp":"2IiSL","../containers/MiradorMenuButton":"4qUlt"}],"7EUmD":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
}), 'FullscreenSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"2IiSL":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
}), 'FullscreenExitSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"4bdJ0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceMenuButton = require("../components/WorkspaceMenuButton");
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */ var styles = function styles1(theme) {
    return {
        ctrlBtn: {
            margin: theme.spacing(1)
        },
        ctrlBtnSelected: {
            backgroundColor: theme.palette.action.selected
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _withPlugins.withPlugins('WorkspaceMenuButton')// further HOC
);
var _default = enhance(_WorkspaceMenuButton.WorkspaceMenuButton);
exports["default"] = _default;

},{"redux":"7panR","react-i18next":"6hlRL","@material-ui/core":"6DoV9","../extend/withPlugins":"5PNwJ","../components/WorkspaceMenuButton":"2pzD8"}],"2pzD8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceMenuButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SettingsSharp = _interopRequireDefault(require("@material-ui/icons/SettingsSharp"));
var _classnames = _interopRequireDefault(require("classnames"));
var _WorkspaceMenu = _interopRequireDefault(require("../containers/WorkspaceMenu"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 */ var WorkspaceMenuButton1 = /*#__PURE__*/ function(_Component) {
    _inherits(WorkspaceMenuButton2, _Component);
    var _super = _createSuper(WorkspaceMenuButton2);
    /**
   * constructor -
   */ function WorkspaceMenuButton2(props) {
        var _this;
        _classCallCheck(this, WorkspaceMenuButton2);
        _this = _super.call(this, props);
        _this.state = {
            anchorEl: null
        };
        _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
        _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * @private
   */ _createClass(WorkspaceMenuButton2, [
        {
            key: "handleMenuClick",
            value: function handleMenuClick(event) {
                this.setState({
                    anchorEl: event.currentTarget
                });
            }
        },
        {
            key: "handleMenuClose",
            value: function handleMenuClose() {
                this.setState({
                    anchorEl: null
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, classes = _this$props.classes, t = _this$props.t;
                var anchorEl = this.state.anchorEl;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-haspopup": "true",
                    "aria-label": t('workspaceMenu'),
                    "aria-owns": anchorEl ? 'workspace-menu' : undefined,
                    className: _classnames["default"](classes.ctrlBtn, anchorEl ? classes.ctrlBtnSelected : null),
                    id: "menuBtn",
                    onClick: this.handleMenuClick
                }, /*#__PURE__*/ _react["default"].createElement(_SettingsSharp["default"], null)), /*#__PURE__*/ _react["default"].createElement(_WorkspaceMenu["default"], {
                    anchorEl: anchorEl,
                    handleClose: this.handleMenuClose
                })));
            }
        }
    ]);
    return WorkspaceMenuButton2;
}(_react.Component);
exports.WorkspaceMenuButton = WorkspaceMenuButton1;
WorkspaceMenuButton1.defaultProps = {
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","@material-ui/icons/SettingsSharp":"2iuDo","classnames":"5aJRc","../containers/WorkspaceMenu":"2eCwe","../containers/MiradorMenuButton":"4qUlt"}],"2iuDo":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M19.44 12.99l-.01.02c.04-.33.08-.67.08-1.01 0-.34-.03-.66-.07-.99l.01.02 2.44-1.92-2.43-4.22-2.87 1.16.01.01c-.52-.4-1.09-.74-1.71-1h.01L14.44 2H9.57l-.44 3.07h.01c-.62.26-1.19.6-1.71 1l.01-.01-2.88-1.17-2.44 4.22 2.44 1.92.01-.02c-.04.33-.07.65-.07.99 0 .34.03.68.08 1.01l-.01-.02-2.1 1.65-.33.26 2.43 4.2 2.88-1.15-.02-.04c.53.41 1.1.75 1.73 1.01h-.03L9.58 22h4.85s.03-.18.06-.42l.38-2.65h-.01c.62-.26 1.2-.6 1.73-1.01l-.02.04 2.88 1.15 2.43-4.2s-.14-.12-.33-.26l-2.11-1.66zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
}), 'SettingsSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"2eCwe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _WorkspaceMenu = require("../components/WorkspaceMenu");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WorkspaceMenu
 * @private
 */ var mapDispatchToProps = {
    toggleZoomControls: actions.toggleZoomControls
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        containerId: _selectors.getContainerId(state),
        isWorkspaceAddVisible: _selectors.getWorkspace(state).isWorkspaceAddVisible,
        showThemePicker: _selectors.getThemeIds(state).length > 0,
        showZoomControls: _selectors.getShowZoomControlsConfig(state)
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('WorkspaceMenu'));
var _default = enhance(_WorkspaceMenu.WorkspaceMenu);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/WorkspaceMenu":"miuq5"}],"miuq5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _LanguageSettings = _interopRequireDefault(require("../containers/LanguageSettings"));
var _NestedMenu = require("./NestedMenu");
var _WorkspaceSelectionDialog = _interopRequireDefault(require("../containers/WorkspaceSelectionDialog"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _ChangeThemeDialog = _interopRequireDefault(require("../containers/ChangeThemeDialog"));
var _PluginHook = require("./PluginHook");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 */ var WorkspaceMenu1 = /*#__PURE__*/ function(_Component) {
    _inherits(WorkspaceMenu2, _Component);
    var _super = _createSuper(WorkspaceMenu2);
    /**
   * constructor -
   */ function WorkspaceMenu2(props) {
        var _this;
        _classCallCheck(this, WorkspaceMenu2);
        _this = _super.call(this, props);
        _this.state = {
            changeTheme: {
            },
            toggleZoom: {
            },
            workspaceSelection: {
            }
        };
        _this.handleMenuItemClick = _this.handleMenuItemClick.bind(_assertThisInitialized(_this));
        _this.handleMenuItemClose = _this.handleMenuItemClose.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * @private
   */ _createClass(WorkspaceMenu2, [
        {
            key: "handleMenuItemClick",
            value: function handleMenuItemClick(item, event) {
                var obj = {
                };
                obj[item] = {
                };
                obj[item].open = true;
                obj[item].anchorEl = event.currentTarget;
                this.setState(obj);
            }
        },
        {
            key: "handleMenuItemClose",
            value: function handleMenuItemClose(item) {
                var _this2 = this;
                return function(event) {
                    var obj = {
                    };
                    obj[item] = {
                    };
                    obj[item].open = false;
                    obj[item].anchorEl = null;
                    _this2.setState(obj);
                };
            }
        },
        {
            key: "handleZoomToggleClick",
            value: function handleZoomToggleClick() {
                var _this$props = this.props, toggleZoomControls = _this$props.toggleZoomControls, showZoomControls = _this$props.showZoomControls;
                toggleZoomControls(!showZoomControls);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this3 = this;
                var _this$props2 = this.props, containerId = _this$props2.containerId, handleClose = _this$props2.handleClose, anchorEl = _this$props2.anchorEl, showThemePicker = _this$props2.showThemePicker, isWorkspaceAddVisible = _this$props2.isWorkspaceAddVisible, t = _this$props2.t, showZoomControls = _this$props2.showZoomControls;
                var _this$state = this.state, changeTheme = _this$state.changeTheme, toggleZoom = _this$state.toggleZoom, workspaceSelection = _this$state.workspaceSelection;
                var container = document.querySelector("#".concat(containerId, " .").concat(_cssNs["default"]('viewer')));
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_Menu["default"], {
                    id: "workspace-menu",
                    container: container,
                    anchorEl: anchorEl,
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'top'
                    },
                    transformOrigin: {
                        horizontal: 'left',
                        vertical: 'top'
                    },
                    open: Boolean(anchorEl),
                    onClose: handleClose
                }, /*#__PURE__*/ _react["default"].createElement(_MenuItem["default"], {
                    "aria-haspopup": "true",
                    disabled: isWorkspaceAddVisible,
                    onClick: function onClick(e) {
                        _this3.handleZoomToggleClick(e);
                        handleClose(e);
                    },
                    "aria-owns": toggleZoom.anchorEl ? 'toggle-zoom-menu' : undefined
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "body1"
                }, showZoomControls ? t('hideZoomControls') : t('showZoomControls'))), /*#__PURE__*/ _react["default"].createElement(_MenuItem["default"], {
                    "aria-haspopup": "true",
                    onClick: function onClick(e) {
                        _this3.handleMenuItemClick('workspaceSelection', e);
                        handleClose(e);
                    },
                    "aria-owns": workspaceSelection.anchorEl ? 'workspace-selection' : undefined
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "body1"
                }, t('selectWorkspaceMenu'))), /*#__PURE__*/ _react["default"].createElement(_NestedMenu.NestedMenu, {
                    label: t('language')
                }, /*#__PURE__*/ _react["default"].createElement(_LanguageSettings["default"], {
                    afterSelect: handleClose
                })), showThemePicker && /*#__PURE__*/ _react["default"].createElement(_MenuItem["default"], {
                    "aria-haspopup": "true",
                    onClick: function onClick(e) {
                        _this3.handleMenuItemClick('changeTheme', e);
                        handleClose(e);
                    },
                    "aria-owns": changeTheme.anchorEl ? 'change-theme' : undefined
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "body1"
                }, t('changeTheme'))), /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, this.props)), Boolean(changeTheme.open) && /*#__PURE__*/ _react["default"].createElement(_ChangeThemeDialog["default"], {
                    container: container,
                    handleClose: this.handleMenuItemClose('changeTheme'),
                    open: Boolean(changeTheme.open)
                }), Boolean(workspaceSelection.open) && /*#__PURE__*/ _react["default"].createElement(_WorkspaceSelectionDialog["default"], {
                    open: Boolean(workspaceSelection.open),
                    container: container,
                    handleClose: this.handleMenuItemClose('workspaceSelection')
                })));
            }
        }
    ]);
    return WorkspaceMenu2;
}(_react.Component);
exports.WorkspaceMenu = WorkspaceMenu1;
WorkspaceMenu1.defaultProps = {
    anchorEl: null,
    isWorkspaceAddVisible: false,
    showThemePicker: false,
    showZoomControls: false,
    t: function t(key) {
        return key;
    },
    toggleZoomControls: function toggleZoomControls() {
    }
};

},{"react":"3b2NM","@material-ui/core/Menu":"3xurJ","@material-ui/core/MenuItem":"3pvH5","@material-ui/core/Typography":"3wcF9","../containers/LanguageSettings":"2V8ee","./NestedMenu":"2xkGD","../containers/WorkspaceSelectionDialog":"4uTCv","../config/css-ns":"6ABf8","../containers/ChangeThemeDialog":"2tdm8","./PluginHook":"6m4WL"}],"2V8ee":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _LanguageSettings = require("../components/LanguageSettings");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * Map state to props for connect
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        languages: _selectors.getLanguagesFromConfigWithCurrent(state)
    };
};
/**
 * Map action dispatches to props for connect
 */ var mapDispatchToProps = function mapDispatchToProps1(dispatch, _ref) {
    var afterSelect = _ref.afterSelect;
    return {
        handleClick: function handleClick(language) {
            dispatch(actions.updateConfig({
                language: language
            }));
            afterSelect && afterSelect();
        }
    };
};
var _default = _redux.compose(_reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('LanguageSettings'))(_LanguageSettings.LanguageSettings);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/LanguageSettings":"1aW5o"}],"1aW5o":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LanguageSettings = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));
var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _CheckSharp = _interopRequireDefault(require("@material-ui/icons/CheckSharp"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * LanguageSettings ~ the workspace sub menu to change the language
 * of the application
*/ var LanguageSettings1 = /*#__PURE__*/ function(_Component) {
    _inherits(LanguageSettings2, _Component);
    var _super = _createSuper(LanguageSettings2);
    function LanguageSettings2() {
        _classCallCheck(this, LanguageSettings2);
        return _super.apply(this, arguments);
    }
    _createClass(LanguageSettings2, [
        {
            key: "render",
            value: /**
     * Returns the rendered component
    */ function render() {
                var _this$props = this.props, handleClick = _this$props.handleClick, languages = _this$props.languages;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, languages.map(function(language) {
                    return(/*#__PURE__*/ _react["default"].createElement(_MenuItem["default"], {
                        button: !language.current,
                        key: language.locale,
                        onClick: function onClick() {
                            handleClick(language.locale);
                        }
                    }, /*#__PURE__*/ _react["default"].createElement(_ListItemIcon["default"], null, language.current && /*#__PURE__*/ _react["default"].createElement(_CheckSharp["default"], null)), /*#__PURE__*/ _react["default"].createElement(_ListItemText["default"], {
                        primaryTypographyProps: {
                            variant: 'body1'
                        }
                    }, language.label)));
                })));
            }
        }
    ]);
    return LanguageSettings2;
}(_react.Component);
exports.LanguageSettings = LanguageSettings1;

},{"react":"3b2NM","@material-ui/core/ListItemIcon":"5siUZ","@material-ui/core/ListItemText":"7t7nz","@material-ui/core/MenuItem":"3pvH5","@material-ui/icons/CheckSharp":"1R9Jr"}],"1R9Jr":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
}), 'CheckSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"2xkGD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NestedMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));
var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _ExpandLessSharp = _interopRequireDefault(require("@material-ui/icons/ExpandLessSharp"));
var _ExpandMoreSharp = _interopRequireDefault(require("@material-ui/icons/ExpandMoreSharp"));
var _excluded = [
    "children",
    "icon",
    "label"
];
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * NestedMenu ~ A presentation component to render a menu item and have
 * it control the visibility of the MUI List passed in as the children
*/ var NestedMenu1 = /*#__PURE__*/ function(_Component) {
    _inherits(NestedMenu2, _Component);
    var _super = _createSuper(NestedMenu2);
    /**
   * constructor -
   */ function NestedMenu2(props) {
        var _this;
        _classCallCheck(this, NestedMenu2);
        _this = _super.call(this, props);
        _this.state = {
            nestedMenuIsOpen: false
        };
        _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * handleMenuClick toggles the nestedMenuIsOpen state
   */ _createClass(NestedMenu2, [
        {
            key: "handleMenuClick",
            value: function handleMenuClick() {
                var nestedMenuIsOpen = this.state.nestedMenuIsOpen;
                this.setState({
                    nestedMenuIsOpen: !nestedMenuIsOpen
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var nestedMenuIsOpen = this.state.nestedMenuIsOpen;
                var _this$props = this.props, children = _this$props.children, icon = _this$props.icon, label = _this$props.label, otherProps = _objectWithoutProperties(_this$props, _excluded);
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_MenuItem["default"], Object.assign({
                    onClick: this.handleMenuClick,
                    divider: nestedMenuIsOpen
                }, otherProps), icon && /*#__PURE__*/ _react["default"].createElement(_ListItemIcon["default"], null, icon), /*#__PURE__*/ _react["default"].createElement(_ListItemText["default"], {
                    primaryTypographyProps: {
                        variant: 'body1'
                    }
                }, label), nestedMenuIsOpen ? /*#__PURE__*/ _react["default"].createElement(_ExpandLessSharp["default"], null) : /*#__PURE__*/ _react["default"].createElement(_ExpandMoreSharp["default"], null)), nestedMenuIsOpen && children));
            }
        }
    ]);
    return NestedMenu2;
}(_react.Component);
exports.NestedMenu = NestedMenu1;
NestedMenu1.defaultProps = {
    icon: null
};

},{"react":"3b2NM","@material-ui/core/ListItemIcon":"5siUZ","@material-ui/core/ListItemText":"7t7nz","@material-ui/core/MenuItem":"3pvH5","@material-ui/icons/ExpandLessSharp":"6kO2T","@material-ui/icons/ExpandMoreSharp":"6I5Wl"}],"6kO2T":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
}), 'ExpandLessSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"6I5Wl":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
}), 'ExpandMoreSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"4uTCv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceSelectionDialog = require("../components/WorkspaceSelectionDialog");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */ var mapDispatchToProps = {
    updateWorkspace: actions.updateWorkspace
};
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        workspaceType: _selectors.getWorkspaceType(state)
    };
};
/** */ var styles = function styles1(theme) {
    return {
        card: {
            backgroundColor: 'transparent',
            borderRadius: '0',
            boxShadow: '0 0 transparent',
            display: 'flex'
        },
        content: {
            flex: '1 0 auto'
        },
        details: {
            display: 'flex',
            flexDirection: 'column'
        },
        headline: {
            paddingBottom: '6px'
        },
        list: {
            '&active': {
                outline: 'none'
            },
            '&focus': {
                outline: 'none'
            },
            outline: 'none'
        },
        media: {
            flex: '0 0 120px',
            height: '90px'
        },
        menuItem: {
            height: 'auto',
            overflow: 'auto',
            whiteSpace: 'inherit'
        },
        root: {
            '&:last-child': {
                paddingBottom: '12px'
            },
            paddingBottom: 0,
            paddingTop: 0,
            textAlign: 'left'
        },
        svgIcon: {
            flexShrink: 0,
            height: '90px',
            width: '120px'
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('WorkspaceSelectionDialog'));
var _default = enhance(_WorkspaceSelectionDialog.WorkspaceSelectionDialog);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core":"6DoV9","../extend/withPlugins":"5PNwJ","../components/WorkspaceSelectionDialog":"3SfST","../state/actions":"4t2dD","../state/selectors":"5Trnc"}],"3SfST":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceSelectionDialog = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));
var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));
var _core = require("@material-ui/core");
var _WorkspaceTypeElasticIcon = _interopRequireDefault(require("./icons/WorkspaceTypeElasticIcon"));
var _WorkspaceTypeMosaicIcon = _interopRequireDefault(require("./icons/WorkspaceTypeMosaicIcon"));
var _ScrollIndicatedDialogContent = _interopRequireDefault(require("../containers/ScrollIndicatedDialogContent"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 */ var WorkspaceSelectionDialog1 = /*#__PURE__*/ function(_Component) {
    _inherits(WorkspaceSelectionDialog2, _Component);
    var _super = _createSuper(WorkspaceSelectionDialog2);
    /**
   * constructor
   */ function WorkspaceSelectionDialog2(props) {
        var _this;
        _classCallCheck(this, WorkspaceSelectionDialog2);
        _this = _super.call(this, props);
        _this.handleWorkspaceTypeChange = _this.handleWorkspaceTypeChange.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * Propagate workspace type selection into the global state
   */ _createClass(WorkspaceSelectionDialog2, [
        {
            key: "handleWorkspaceTypeChange",
            value: function handleWorkspaceTypeChange(workspaceType) {
                var _this$props = this.props, handleClose = _this$props.handleClose, updateWorkspace = _this$props.updateWorkspace;
                updateWorkspace({
                    type: workspaceType
                });
                handleClose();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props2 = this.props, classes = _this$props2.classes, container = _this$props2.container, handleClose = _this$props2.handleClose, open = _this$props2.open, children = _this$props2.children, t = _this$props2.t, workspaceType = _this$props2.workspaceType;
                return(/*#__PURE__*/ _react["default"].createElement(_Dialog["default"], {
                    "aria-labelledby": "workspace-selection-dialog-title",
                    container: container,
                    id: "workspace-selection-dialog",
                    onClose: handleClose,
                    onEntered: function onEntered(dialog) {
                        return WorkspaceSelectionDialog2.setInitialFocus(dialog, workspaceType);
                    },
                    onEscapeKeyDown: handleClose,
                    open: open
                }, /*#__PURE__*/ _react["default"].createElement(_DialogTitle["default"], {
                    id: "workspace-selection-dialog-title",
                    disableTypography: true
                }, /*#__PURE__*/ _react["default"].createElement(_core.Typography, {
                    variant: "h2"
                }, t('workspaceSelectionTitle'))), /*#__PURE__*/ _react["default"].createElement(_ScrollIndicatedDialogContent["default"], null, children, /*#__PURE__*/ _react["default"].createElement(_core.MenuList, {
                    classes: {
                        root: classes.list
                    },
                    selected: workspaceType
                }, /*#__PURE__*/ _react["default"].createElement(_core.MenuItem, {
                    className: classes.menuItem,
                    onClick: function onClick() {
                        return _this2.handleWorkspaceTypeChange('elastic');
                    },
                    selected: workspaceType === 'elastic',
                    value: "elastic"
                }, /*#__PURE__*/ _react["default"].createElement(_core.Card, {
                    className: classes.card
                }, /*#__PURE__*/ _react["default"].createElement(_WorkspaceTypeElasticIcon["default"], {
                    className: classes.svgIcon,
                    viewBox: "0 0 120 90"
                }), /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.details
                }, /*#__PURE__*/ _react["default"].createElement(_core.CardContent, {
                    classes: {
                        root: classes.root
                    },
                    className: classes.content
                }, /*#__PURE__*/ _react["default"].createElement(_core.Typography, {
                    className: classes.headline,
                    component: "p",
                    variant: "h3"
                }, t('elastic')), /*#__PURE__*/ _react["default"].createElement(_core.Typography, {
                    variant: "body1"
                }, t('elasticDescription')))))), /*#__PURE__*/ _react["default"].createElement(_core.MenuItem, {
                    className: classes.menuItem,
                    onClick: function onClick() {
                        return _this2.handleWorkspaceTypeChange('mosaic');
                    },
                    selected: workspaceType === 'mosaic',
                    value: "mosaic"
                }, /*#__PURE__*/ _react["default"].createElement(_core.Card, {
                    className: classes.card
                }, /*#__PURE__*/ _react["default"].createElement(_WorkspaceTypeMosaicIcon["default"], {
                    className: classes.svgIcon,
                    viewBox: "0 0 120 90"
                }), /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.details
                }, /*#__PURE__*/ _react["default"].createElement(_core.CardContent, {
                    className: classes.content,
                    classes: {
                        root: classes.root
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_core.Typography, {
                    className: classes.headline,
                    component: "p",
                    variant: "h3"
                }, t('mosaic')), /*#__PURE__*/ _react["default"].createElement(_core.Typography, {
                    variant: "body1"
                }, t('mosaicDescription'))))))))));
            }
        }
    ], [
        {
            key: "setInitialFocus",
            value: /**
     * Set the initial focus when the dialog enters
     * Find the selected item by using the current workspace type
     * in a selector on the value attribute (which we need to set)
    */ function setInitialFocus(dialogElement, workspaceType) {
                var selectedListItem = dialogElement.querySelectorAll("li[value=\"".concat(workspaceType, "\"]"));
                if (!selectedListItem || selectedListItem.length === 0) return;
                selectedListItem[0].focus();
            }
        }
    ]);
    return WorkspaceSelectionDialog2;
}(_react.Component);
exports.WorkspaceSelectionDialog = WorkspaceSelectionDialog1;
WorkspaceSelectionDialog1.defaultProps = {
    children: null,
    container: null,
    open: false,
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","@material-ui/core/Dialog":"2fkds","@material-ui/core/DialogTitle":"7pAIQ","@material-ui/core":"6DoV9","./icons/WorkspaceTypeElasticIcon":"1hfrf","./icons/WorkspaceTypeMosaicIcon":"5XoTk","../containers/ScrollIndicatedDialogContent":"5sczT"}],"1hfrf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = ElasticWorkspaceIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * ElasticWorkspaceIcon ~
*/ function ElasticWorkspaceIcon(props) {
    return(/*#__PURE__*/ _react["default"].createElement(_SvgIcon["default"], props, /*#__PURE__*/ _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "120",
        height: "90",
        viewBox: "0 0 300 225"
    }, /*#__PURE__*/ _react["default"].createElement("defs", null, /*#__PURE__*/ _react["default"].createElement("linearGradient", {
        id: "linear-gradient",
        x1: "0.5",
        y1: "1",
        x2: "0.5",
        gradientUnits: "objectBoundingBox"
    }, /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.14",
        stopOpacity: "0.631"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "1",
        stopOpacity: "0"
    })), /*#__PURE__*/ _react["default"].createElement("linearGradient", {
        id: "linear-gradient-2",
        x1: "0.5",
        y1: "1",
        x2: "0.5",
        gradientUnits: "objectBoundingBox"
    }, /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0",
        stopColor: "#fff",
        stopOpacity: "0"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.23",
        stopColor: "#fff",
        stopOpacity: "0.012"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.36",
        stopColor: "#fff",
        stopOpacity: "0.039"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.47",
        stopColor: "#fff",
        stopOpacity: "0.102"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.57",
        stopColor: "#fff",
        stopOpacity: "0.18"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.67",
        stopColor: "#fff",
        stopOpacity: "0.278"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.75",
        stopColor: "#fff",
        stopOpacity: "0.412"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.83",
        stopColor: "#fff",
        stopOpacity: "0.561"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.91",
        stopColor: "#fff",
        stopOpacity: "0.741"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.98",
        stopColor: "#fff",
        stopOpacity: "0.929"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "1",
        stopColor: "#fff"
    })), /*#__PURE__*/ _react["default"].createElement("clipPath", {
        id: "clip-elastic_icon"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "300",
        height: "225"
    }))), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "elastic_icon",
        "data-name": "elastic icon",
        clipPath: "url(#clip-elastic_icon)"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "300",
        height: "225",
        fill: "#fff"
    }), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Rectangle_278",
        "data-name": "Rectangle 278",
        transform: "translate(232 159)",
        fill: "#88c6c3",
        stroke: "#707070",
        strokeWidth: "1",
        opacity: "0.747"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "54",
        height: "54",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "53",
        height: "53",
        fill: "none"
    })), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Rectangle_8",
        "data-name": "Rectangle 8",
        transform: "translate(7 148)",
        fill: "#88c6c3",
        stroke: "#707070",
        strokeWidth: "1",
        opacity: "0.747"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "70",
        height: "70",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "69",
        height: "69",
        fill: "none"
    })), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Rectangle_258",
        "data-name": "Rectangle 258",
        transform: "translate(224 6)",
        fill: "#88c6c3",
        stroke: "#707070",
        strokeWidth: "1",
        opacity: "0.747"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "70",
        height: "100",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "69",
        height: "99",
        fill: "none"
    })), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Rectangle_259",
        "data-name": "Rectangle 259",
        transform: "translate(71 64)",
        fill: "#88c6c3",
        stroke: "#707070",
        strokeWidth: "1",
        opacity: "0.747"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "115",
        height: "75",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "114",
        height: "74",
        fill: "none"
    })), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Rectangle_260",
        "data-name": "Rectangle 260",
        transform: "translate(99 87)",
        fill: "#88c6c3",
        stroke: "#707070",
        strokeWidth: "1",
        opacity: "0.747"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "115",
        height: "75",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "114",
        height: "74",
        fill: "none"
    })), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Group_689",
        "data-name": "Group 689"
    }, /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Group_687",
        "data-name": "Group 687",
        transform: "translate(0 3)"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        id: "checkbox",
        d: "M258.766,37.316v146.5H39.053V37.316Zm40.07-39.254h-300v225h300Z",
        transform: "translate(1.164 -1.063)",
        fill: "#010101",
        fillRule: "evenodd",
        opacity: "0.246"
    }), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Path_821",
        "data-name": "Path 821",
        transform: "translate(40 36)",
        fill: "none"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M0,0H220V147H0Z",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M 2 2 L 2 145 L 218 145 L 218 2 L 172.9869689941406 2 L 2 2 M 0 0 L 172.9869689941406 0 L 220 0 L 220 147 L 0 147 L 0 0 Z",
        stroke: "none",
        fill: "#01579b"
    }))), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Rectangle_257",
        "data-name": "Rectangle 257",
        transform: "translate(40 39)",
        fill: "#fff",
        stroke: "#01579b",
        strokeWidth: "2"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "20",
        height: "147",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        x: "1",
        y: "1",
        width: "18",
        height: "145",
        fill: "none"
    })), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Group_688",
        "data-name": "Group 688",
        transform: "translate(-27.5 -126)"
    }, /*#__PURE__*/ _react["default"].createElement("circle", {
        id: "teal_circle",
        "data-name": "teal circle",
        cx: "7.5",
        cy: "7.5",
        r: "7.5",
        transform: "translate(70 171)",
        fill: "#009688"
    }), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Group_333",
        "data-name": "Group 333",
        transform: "translate(70 171)",
        opacity: "0.12"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        id: "gradient_border_2",
        "data-name": "gradient border 2",
        d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
        transform: "translate(-3403 -959)",
        fill: "url(#linear-gradient)"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        id: "gradient_border_1",
        "data-name": "gradient border 1",
        d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
        transform: "translate(-3403 -959)",
        fill: "url(#linear-gradient-2)"
    }))))))));
}

},{"react":"3b2NM","@material-ui/core/SvgIcon":"2ubNB"}],"5XoTk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = WorkspaceTypeMosaicIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * WorkspaceTypeMosaicIcon ~
*/ function WorkspaceTypeMosaicIcon(props) {
    return(/*#__PURE__*/ _react["default"].createElement(_SvgIcon["default"], props, /*#__PURE__*/ _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "120",
        height: "90",
        viewBox: "0 0 300 225"
    }, /*#__PURE__*/ _react["default"].createElement("defs", null, /*#__PURE__*/ _react["default"].createElement("linearGradient", {
        id: "linear-gradient",
        x1: "0.5",
        y1: "1",
        x2: "0.5",
        gradientUnits: "objectBoundingBox"
    }, /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.14",
        stopOpacity: "0.631"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "1",
        stopOpacity: "0"
    })), /*#__PURE__*/ _react["default"].createElement("linearGradient", {
        id: "linear-gradient-2",
        x1: "0.5",
        y1: "1",
        x2: "0.5",
        gradientUnits: "objectBoundingBox"
    }, /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0",
        stopColor: "#fff",
        stopOpacity: "0"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.23",
        stopColor: "#fff",
        stopOpacity: "0.012"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.36",
        stopColor: "#fff",
        stopOpacity: "0.039"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.47",
        stopColor: "#fff",
        stopOpacity: "0.102"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.57",
        stopColor: "#fff",
        stopOpacity: "0.18"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.67",
        stopColor: "#fff",
        stopOpacity: "0.278"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.75",
        stopColor: "#fff",
        stopOpacity: "0.412"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.83",
        stopColor: "#fff",
        stopOpacity: "0.561"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.91",
        stopColor: "#fff",
        stopOpacity: "0.741"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "0.98",
        stopColor: "#fff",
        stopOpacity: "0.929"
    }), /*#__PURE__*/ _react["default"].createElement("stop", {
        offset: "1",
        stopColor: "#fff"
    })), /*#__PURE__*/ _react["default"].createElement("clipPath", {
        id: "clip-mosaic_icon"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "300",
        height: "225"
    }))), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "mosaic_icon",
        "data-name": "mosaic icon",
        clipPath: "url(#clip-mosaic_icon)"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "300",
        height: "225",
        fill: "#fff"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        id: "checkbox",
        d: "M258.766,37.316v146.5H39.053V37.316Zm40.07-39.254h-300v225h300Z",
        transform: "translate(1.163 1.938)",
        fill: "#010101",
        fillRule: "evenodd",
        opacity: "0.5"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        id: "checkbox-2",
        "data-name": "checkbox",
        d: "M258.766,37.316v146.5H39.053V37.316Zm40.07-39.254h-300v225h300Z",
        transform: "translate(1.164 1.938)",
        fill: "#010101",
        fillRule: "evenodd",
        opacity: "0.246"
    }), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Path_821",
        "data-name": "Path 821",
        transform: "translate(40 39)",
        fill: "none"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M0,0H220V147H0Z",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M 2 2 L 2 145 L 218 145 L 218 2 L 172.9869689941406 2 L 2 2 M 0 0 L 172.9869689941406 0 L 220 0 L 220 147 L 0 147 L 0 0 Z",
        stroke: "none",
        fill: "#01579b"
    })), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Rectangle_257",
        "data-name": "Rectangle 257",
        transform: "translate(40 39)",
        fill: "#fff",
        stroke: "#01579b",
        strokeWidth: "2"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "20",
        height: "147",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        x: "1",
        y: "1",
        width: "18",
        height: "145",
        fill: "none"
    })), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Group_688",
        "data-name": "Group 688",
        transform: "translate(-27.5 -126)"
    }, /*#__PURE__*/ _react["default"].createElement("circle", {
        id: "teal_circle",
        "data-name": "teal circle",
        cx: "7.5",
        cy: "7.5",
        r: "7.5",
        transform: "translate(70 171)",
        fill: "#009688"
    }), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Group_333",
        "data-name": "Group 333",
        transform: "translate(70 171)",
        opacity: "0.12"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        id: "gradient_border_2",
        "data-name": "gradient border 2",
        d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
        transform: "translate(-3403 -959)",
        fill: "url(#linear-gradient)"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        id: "gradient_border_1",
        "data-name": "gradient border 1",
        d: "M3408,959.089A4.911,4.911,0,1,1,3403.09,964a4.911,4.911,0,0,1,4.911-4.911m0-.089a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z",
        transform: "translate(-3403 -959)",
        fill: "url(#linear-gradient-2)"
    }))), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Rectangle_270",
        "data-name": "Rectangle 270",
        transform: "translate(60 40.647)",
        fill: "#88c6c3",
        stroke: "#707070",
        strokeWidth: "1",
        opacity: "0.747"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "99",
        height: "72",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "98",
        height: "71",
        fill: "none"
    })), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Rectangle_271",
        "data-name": "Rectangle 271",
        transform: "translate(159 40.647)",
        fill: "#88c6c3",
        stroke: "#707070",
        strokeWidth: "1",
        opacity: "0.747"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "99",
        height: "72",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "98",
        height: "71",
        fill: "none"
    })), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Rectangle_272",
        "data-name": "Rectangle 272",
        transform: "translate(192 112.647)",
        fill: "#88c6c3",
        stroke: "#707070",
        strokeWidth: "1",
        opacity: "0.747"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "66",
        height: "71.45",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "65",
        height: "70.45",
        fill: "none"
    })), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Rectangle_284",
        "data-name": "Rectangle 284",
        transform: "translate(60 112.647)",
        fill: "#88c6c3",
        stroke: "#707070",
        strokeWidth: "1",
        opacity: "0.747"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "66",
        height: "71.45",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "65",
        height: "70.45",
        fill: "none"
    })), /*#__PURE__*/ _react["default"].createElement("g", {
        id: "Rectangle_285",
        "data-name": "Rectangle 285",
        transform: "translate(126 112.647)",
        fill: "#88c6c3",
        stroke: "#707070",
        strokeWidth: "1",
        opacity: "0.747"
    }, /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "66",
        height: "71.45",
        stroke: "none"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "65",
        height: "70.45",
        fill: "none"
    }))))));
}

},{"react":"3b2NM","@material-ui/core/SvgIcon":"2ubNB"}],"5sczT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _styles = require("@material-ui/core/styles");
var _ScrollIndicatedDialogContent = require("../components/ScrollIndicatedDialogContent");
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
/**
 * Styles for the withStyles HOC
 */ var styles = function styles1(theme) {
    var _shadowScrollDialog;
    return {
        shadowScrollDialog: (_shadowScrollDialog = {
            /* Shadow covers */ background: "linear-gradient(".concat(theme.palette.background.paper, " 30%, rgba(255, 255, 255, 0)), ") + "linear-gradient(rgba(255, 255, 255, 0), ".concat(theme.palette.background.paper, " 70%) 0 100%, ") + 'radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), ' + 'radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%,'
        }, _defineProperty(_shadowScrollDialog, "background", "linear-gradient(".concat(theme.palette.background.paper, " 30%, rgba(255, 255, 255, 0)), ") + "linear-gradient(rgba(255, 255, 255, 0), ".concat(theme.palette.background.paper, " 70%) 0 100%, ") + 'radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), ' + 'radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;'), _defineProperty(_shadowScrollDialog, "backgroundAttachment", 'local, local, scroll, scroll'), _defineProperty(_shadowScrollDialog, "backgroundRepeat", 'no-repeat'), _defineProperty(_shadowScrollDialog, "backgroundSize", '100% 40px, 100% 40px, 100% 14px, 100% 14px'), _defineProperty(_shadowScrollDialog, "overflowY", 'auto'), _shadowScrollDialog)
    };
};
var _default = _styles.withStyles(styles)(_ScrollIndicatedDialogContent.ScrollIndicatedDialogContent);
exports["default"] = _default;

},{"@material-ui/core/styles":"1Rdvd","../components/ScrollIndicatedDialogContent":"60QTl"}],"60QTl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScrollIndicatedDialogContent = ScrollIndicatedDialogContent;
var _react = _interopRequireDefault(require("react"));
var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));
var _excluded = [
    "classes",
    "className"
];
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
/**
 * ScrollIndicatedDialogContent ~ Inject a style into the DialogContent component
 *                                to indicate there is scrollable content
*/ function ScrollIndicatedDialogContent(props) {
    var classes = props.classes, className = props.className, otherProps = _objectWithoutProperties(props, _excluded);
    var ourClassName = [
        className,
        classes.shadowScrollDialog
    ].join(' ');
    return(/*#__PURE__*/ _react["default"].createElement(_DialogContent["default"], Object.assign({
        className: ourClassName
    }, otherProps)));
}
ScrollIndicatedDialogContent.defaultProps = {
    className: ''
};

},{"react":"3b2NM","@material-ui/core/DialogContent":"6V6fB"}],"2tdm8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _core = require("@material-ui/core");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _ChangeThemeDialog = require("../components/ChangeThemeDialog");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ChangeThemeDialog
 * @private
 */ var mapDispatchToProps = function mapDispatchToProps1(dispatch, _ref) {
    var windowId = _ref.windowId;
    return {
        setSelectedTheme: function setSelectedTheme(theme) {
            return dispatch(actions.updateConfig({
                selectedTheme: theme
            }));
        }
    };
};
/**
 * mapStateToProps - to hook up connect
 * @memberof ChangeThemeDialog
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        selectedTheme: _selectors.getConfig(state).selectedTheme,
        themeIds: _selectors.getThemeIds(state)
    };
};
/** */ var styles = function styles1(theme) {
    return {
        dark: {
            color: '#000000'
        },
        dialogContent: {
            padding: 0
        },
        light: {
            color: '#BDBDBD'
        },
        listitem: {
            '&:focus': {
                backgroundColor: theme.palette.action.focus
            },
            '&:hover': {
                backgroundColor: theme.palette.action.hover
            },
            cursor: 'pointer'
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('ChangeThemeDialog'));
var _default = enhance(_ChangeThemeDialog.ChangeThemeDialog);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","@material-ui/core":"6DoV9","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/ChangeThemeDialog":"fJ0b7"}],"fJ0b7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ChangeThemeDialog = void 0;
var _react = _interopRequireWildcard(require("react"));
var _core = require("@material-ui/core");
var _PaletteSharp = _interopRequireDefault(require("@material-ui/icons/PaletteSharp"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * a simple dialog providing the possibility to switch the theme
 */ var ChangeThemeDialog1 = /*#__PURE__*/ function(_Component) {
    _inherits(ChangeThemeDialog2, _Component);
    var _super = _createSuper(ChangeThemeDialog2);
    /**
  */ function ChangeThemeDialog2(props) {
        var _this;
        _classCallCheck(this, ChangeThemeDialog2);
        _this = _super.call(this, props);
        _this.selectedItemRef = /*#__PURE__*/ _react["default"].createRef();
        _this.handleThemeChange = _this.handleThemeChange.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * Propagate theme palette type selection into the global state
   */ _createClass(ChangeThemeDialog2, [
        {
            key: "handleThemeChange",
            value: function handleThemeChange(theme) {
                var _this$props = this.props, setSelectedTheme = _this$props.setSelectedTheme, handleClose = _this$props.handleClose;
                setSelectedTheme(theme);
                handleClose();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props2 = this.props, classes = _this$props2.classes, handleClose = _this$props2.handleClose, open = _this$props2.open, selectedTheme = _this$props2.selectedTheme, t = _this$props2.t, themeIds = _this$props2.themeIds;
                return(/*#__PURE__*/ _react["default"].createElement(_core.Dialog, {
                    onClose: handleClose,
                    onEntered: function onEntered(dialog) {
                        return ChangeThemeDialog2.setInitialFocus(dialog, selectedTheme);
                    },
                    open: open
                }, /*#__PURE__*/ _react["default"].createElement(_core.DialogTitle, {
                    id: "change-the-dialog-title",
                    disableTypography: true
                }, /*#__PURE__*/ _react["default"].createElement(_core.Typography, {
                    variant: "h2"
                }, t('changeTheme'))), /*#__PURE__*/ _react["default"].createElement(_core.DialogContent, {
                    className: classes.dialogContent
                }, /*#__PURE__*/ _react["default"].createElement(_core.MenuList, null, themeIds.map(function(value) {
                    return(/*#__PURE__*/ _react["default"].createElement(_core.MenuItem, {
                        key: value,
                        className: classes.listitem,
                        onClick: function onClick() {
                            _this2.handleThemeChange(value);
                        },
                        selected: value === selectedTheme,
                        value: value
                    }, /*#__PURE__*/ _react["default"].createElement(_core.ListItemIcon, null, /*#__PURE__*/ _react["default"].createElement(_PaletteSharp["default"], {
                        className: classes[value]
                    })), /*#__PURE__*/ _react["default"].createElement(_core.ListItemText, null, t(value))));
                })))));
            }
        }
    ], [
        {
            key: "setInitialFocus",
            value: /**
     * Set the initial focus when the dialog enters
     * Find the selected item by using the current theme
     * in a selector on the value attribute (which we need to set)
    */ function setInitialFocus(dialogElement, selectedTheme) {
                var selectedListItem = dialogElement.querySelectorAll("li[value=\"".concat(selectedTheme, "\"]"));
                if (!selectedListItem || selectedListItem.length === 0) return;
                selectedListItem[0].focus();
            }
        }
    ]);
    return ChangeThemeDialog2;
}(_react.Component);
exports.ChangeThemeDialog = ChangeThemeDialog1;
ChangeThemeDialog1.defaultProps = {
    open: false,
    themeIds: []
};

},{"react":"3b2NM","@material-ui/core":"6DoV9","@material-ui/icons/PaletteSharp":"7cFNc"}],"7cFNc":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
}), 'PaletteSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"1Ksk0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceOptionsButton = require("../components/WorkspaceOptionsButton");
/**
 *
 * @param theme
 */ var styles = function styles1(theme) {
    return {
        ctrlBtn: {
            margin: theme.spacing(1)
        },
        ctrlBtnSelected: {
            backgroundColor: theme.palette.action.selected
        }
    };
};
var enhance = _redux.compose(_styles.withStyles(styles), _reactI18next.withTranslation(), _withPlugins.withPlugins('WorkspaceOptionsButton'));
var _default = enhance(_WorkspaceOptionsButton.WorkspaceOptionsButton);
exports["default"] = _default;

},{"redux":"7panR","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../components/WorkspaceOptionsButton":"7RaOC"}],"7RaOC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceOptionsButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _MoreHorizSharp = _interopRequireDefault(require("@material-ui/icons/MoreHorizSharp"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _WorkspaceOptionsMenu = _interopRequireDefault(require("../containers/WorkspaceOptionsMenu"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * WorkspaceOptionsButton ~
*/ var WorkspaceOptionsButton1 = /*#__PURE__*/ function(_Component) {
    _inherits(WorkspaceOptionsButton2, _Component);
    var _super = _createSuper(WorkspaceOptionsButton2);
    /**
   * constructor -
   */ function WorkspaceOptionsButton2(props) {
        var _this;
        _classCallCheck(this, WorkspaceOptionsButton2);
        _this = _super.call(this, props);
        _this.state = {
            anchorEl: null
        };
        _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
        _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * @private
   */ _createClass(WorkspaceOptionsButton2, [
        {
            key: "handleMenuClick",
            value: function handleMenuClick(event) {
                this.setState({
                    anchorEl: event.currentTarget
                });
            }
        },
        {
            key: "handleMenuClose",
            value: function handleMenuClose() {
                this.setState({
                    anchorEl: null
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, classes = _this$props.classes, t = _this$props.t;
                var anchorEl = this.state.anchorEl;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-label": t('workspaceOptions'),
                    className: _classnames["default"](classes.ctrlBtn, anchorEl ? classes.ctrlBtnSelected : null),
                    onClick: this.handleMenuClick
                }, /*#__PURE__*/ _react["default"].createElement(_MoreHorizSharp["default"], null)), /*#__PURE__*/ _react["default"].createElement(_WorkspaceOptionsMenu["default"], {
                    anchorEl: anchorEl,
                    handleClose: this.handleMenuClose
                })));
            }
        }
    ]);
    return WorkspaceOptionsButton2;
}(_react.Component);
exports.WorkspaceOptionsButton = WorkspaceOptionsButton1;

},{"react":"3b2NM","classnames":"5aJRc","@material-ui/icons/MoreHorizSharp":"4d9kN","../containers/MiradorMenuButton":"4qUlt","../containers/WorkspaceOptionsMenu":"UF67N"}],"4d9kN":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreHorizSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"UF67N":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _selectors = require("../state/selectors");
var _WorkspaceOptionsMenu = require("../components/WorkspaceOptionsMenu");
/** Used for connect */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        containerId: _selectors.getContainerId(state)
    };
}; // containerId: getContainerId(state),/
var enhance = _redux.compose(_reactI18next.withTranslation(), _reactRedux.connect(mapStateToProps, null));
var _default = enhance(_WorkspaceOptionsMenu.WorkspaceOptionsMenu);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","../state/selectors":"5Trnc","../components/WorkspaceOptionsMenu":"3pyKs"}],"3pyKs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceOptionsMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Input = _interopRequireDefault(require("@material-ui/icons/Input"));
var _SaveAltSharp = _interopRequireDefault(require("@material-ui/icons/SaveAltSharp"));
var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));
var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _WorkspaceExport = _interopRequireDefault(require("../containers/WorkspaceExport"));
var _WorkspaceImport = _interopRequireDefault(require("../containers/WorkspaceImport"));
var _PluginHook = require("./PluginHook");
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * WorkspaceOptionsMenu ~ the menu for workspace options such as import/export
*/ var WorkspaceOptionsMenu1 = /*#__PURE__*/ function(_Component) {
    _inherits(WorkspaceOptionsMenu2, _Component);
    var _super = _createSuper(WorkspaceOptionsMenu2);
    /**
   * constructor -
   */ function WorkspaceOptionsMenu2(props) {
        var _this;
        _classCallCheck(this, WorkspaceOptionsMenu2);
        _this = _super.call(this, props);
        _this.state = {
            exportWorkspace: {
            },
            importWorkspace: {
            }
        };
        _this.handleMenuItemClick = _this.handleMenuItemClick.bind(_assertThisInitialized(_this));
        _this.handleMenuItemClose = _this.handleMenuItemClose.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * @private
   */ _createClass(WorkspaceOptionsMenu2, [
        {
            key: "handleMenuItemClick",
            value: function handleMenuItemClick(item) {
                var obj = {
                };
                obj[item] = {
                };
                obj[item].open = true;
                this.setState(obj);
            }
        },
        {
            key: "handleMenuItemClose",
            value: function handleMenuItemClose(item) {
                var _this2 = this;
                return function(event) {
                    var obj = {
                    };
                    obj[item] = {
                    };
                    obj[item].open = false;
                    _this2.setState(obj);
                };
            }
        },
        {
            key: "render",
            value: function render() {
                var _this3 = this;
                var _this$props = this.props, anchorEl = _this$props.anchorEl, containerId = _this$props.containerId, handleClose = _this$props.handleClose, t = _this$props.t;
                var _this$state = this.state, exportWorkspace = _this$state.exportWorkspace, importWorkspace = _this$state.importWorkspace;
                var container = document.querySelector("#".concat(containerId, " .").concat(_cssNs["default"]('viewer')));
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_Menu["default"], {
                    id: "workspace-options-menu",
                    container: container,
                    anchorEl: anchorEl,
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'top'
                    },
                    transformOrigin: {
                        horizontal: 'left',
                        vertical: 'top'
                    },
                    open: Boolean(anchorEl),
                    onClose: handleClose
                }, /*#__PURE__*/ _react["default"].createElement(_MenuItem["default"], {
                    "aria-haspopup": "true",
                    onClick: function onClick() {
                        _this3.handleMenuItemClick('exportWorkspace');
                        handleClose();
                    },
                    "aria-owns": exportWorkspace.open ? 'workspace-export' : undefined
                }, /*#__PURE__*/ _react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/ _react["default"].createElement(_SaveAltSharp["default"], null)), /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "body1"
                }, t('downloadExportWorkspace'))), /*#__PURE__*/ _react["default"].createElement(_MenuItem["default"], {
                    "aria-haspopup": "true",
                    id: "workspace-menu-import",
                    onClick: function onClick() {
                        _this3.handleMenuItemClick('importWorkspace');
                        handleClose();
                    },
                    "aria-owns": exportWorkspace.open ? 'workspace-import' : undefined
                }, /*#__PURE__*/ _react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/ _react["default"].createElement(_Input["default"], null)), /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "body1"
                }, t('importWorkspace'))), /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, this.props)), Boolean(exportWorkspace.open) && /*#__PURE__*/ _react["default"].createElement(_WorkspaceExport["default"], {
                    open: Boolean(exportWorkspace.open),
                    container: container,
                    handleClose: this.handleMenuItemClose('exportWorkspace')
                }), Boolean(importWorkspace.open) && /*#__PURE__*/ _react["default"].createElement(_WorkspaceImport["default"], {
                    open: Boolean(importWorkspace.open),
                    container: container,
                    handleClose: this.handleMenuItemClose('importWorkspace')
                })));
            }
        }
    ]);
    return WorkspaceOptionsMenu2;
}(_react.Component);
exports.WorkspaceOptionsMenu = WorkspaceOptionsMenu1;
WorkspaceOptionsMenu1.defaultProps = {
    anchorEl: null
};

},{"react":"3b2NM","@material-ui/icons/Input":"4xgsX","@material-ui/icons/SaveAltSharp":"1x8Tg","@material-ui/core/ListItemIcon":"5siUZ","@material-ui/core/Menu":"3xurJ","@material-ui/core/MenuItem":"3pvH5","@material-ui/core/Typography":"3wcF9","../containers/WorkspaceExport":"4zHF0","../containers/WorkspaceImport":"4erVC","./PluginHook":"6m4WL","../config/css-ns":"6ABf8"}],"4xgsX":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"
}), 'Input');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"1x8Tg":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"
}), 'SaveAltSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"4zHF0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _styles = require("@material-ui/core/styles");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceExport = require("../components/WorkspaceExport");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        exportableState: _selectors.getExportableState(state)
    };
};
/**
 * Styles for the withStyles HOC
 */ var styles = function styles1(theme) {
    return {
        accordionTitle: {
            padding: 0
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _styles.withStyles(styles), _reactRedux.connect(mapStateToProps, {
}), _withPlugins.withPlugins('WorkspaceExport'));
var _default = enhance(_WorkspaceExport.WorkspaceExport);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","@material-ui/core/styles":"1Rdvd","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../components/WorkspaceExport":"3tTUG","../state/selectors":"5Trnc"}],"3tTUG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceExport = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));
var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));
var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));
var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));
var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));
var _Accordion = _interopRequireDefault(require("@material-ui/core/Accordion"));
var _AccordionSummary = _interopRequireDefault(require("@material-ui/core/AccordionSummary"));
var _AccordionDetails = _interopRequireDefault(require("@material-ui/core/AccordionDetails"));
var _reactCopyToClipboard = require("react-copy-to-clipboard");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 */ var WorkspaceExport1 = /*#__PURE__*/ function(_Component) {
    _inherits(WorkspaceExport2, _Component);
    var _super = _createSuper(WorkspaceExport2);
    /** */ function WorkspaceExport2(props) {
        var _this;
        _classCallCheck(this, WorkspaceExport2);
        _this = _super.call(this, props);
        _this.state = {
            copied: false
        };
        _this.onCopy = _this.onCopy.bind(_assertThisInitialized(_this));
        _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
        return _this;
    }
    /** Handle closing after the content is copied and the snackbar is done */ _createClass(WorkspaceExport2, [
        {
            key: "handleClose",
            value: function handleClose() {
                var handleClose = this.props.handleClose;
                handleClose();
            }
        },
        {
            key: "onCopy",
            value: function onCopy() {
                this.setState({
                    copied: true
                });
            }
        },
        {
            key: "exportedState",
            value: function exportedState() {
                var exportableState = this.props.exportableState;
                return JSON.stringify(exportableState, null, 2);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, children = _this$props.children, classes = _this$props.classes, container = _this$props.container, open = _this$props.open, t = _this$props.t;
                var copied = this.state.copied;
                if (copied) return(/*#__PURE__*/ _react["default"].createElement(_Snackbar["default"], {
                    anchorOrigin: {
                        horizontal: 'center',
                        vertical: 'top'
                    },
                    open: true,
                    autoHideDuration: 6000,
                    onClose: this.handleClose,
                    message: t('exportCopied'),
                    action: /*#__PURE__*/ _react["default"].createElement(_IconButton["default"], {
                        size: "small",
                        "aria-label": t('dismiss'),
                        color: "inherit",
                        onClick: this.handleClose
                    }, /*#__PURE__*/ _react["default"].createElement(_Close["default"], {
                        fontSize: "small"
                    }))
                }));
                return(/*#__PURE__*/ _react["default"].createElement(_Dialog["default"], {
                    id: "workspace-settings",
                    container: container,
                    open: open,
                    onClose: this.handleClose,
                    scroll: "paper",
                    fullWidth: true,
                    maxWidth: "sm"
                }, /*#__PURE__*/ _react["default"].createElement(_DialogTitle["default"], {
                    id: "form-dialog-title",
                    disableTypography: true
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "h2"
                }, t('downloadExport'))), /*#__PURE__*/ _react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/ _react["default"].createElement(_Accordion["default"], {
                    elevation: 0
                }, /*#__PURE__*/ _react["default"].createElement(_AccordionSummary["default"], {
                    classes: {
                        root: classes.accordionTitle
                    },
                    expandIcon: /*#__PURE__*/ _react["default"].createElement(_ExpandMore["default"], null)
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "h4"
                }, t('viewWorkspaceConfiguration'))), /*#__PURE__*/ _react["default"].createElement(_AccordionDetails["default"], null, children, /*#__PURE__*/ _react["default"].createElement("pre", null, this.exportedState())))), /*#__PURE__*/ _react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/ _react["default"].createElement(_Button["default"], {
                    onClick: this.handleClose
                }, t('cancel')), /*#__PURE__*/ _react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
                    onCopy: this.onCopy,
                    text: this.exportedState()
                }, /*#__PURE__*/ _react["default"].createElement(_Button["default"], {
                    variant: "contained",
                    color: "primary"
                }, t('copy'))))));
            }
        }
    ]);
    return WorkspaceExport2;
}(_react.Component);
exports.WorkspaceExport = WorkspaceExport1;
WorkspaceExport1.defaultProps = {
    children: null,
    classes: {
    },
    container: null,
    open: false,
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","@material-ui/core/Button":"1Xm5M","@material-ui/core/Dialog":"2fkds","@material-ui/core/DialogActions":"6sBoT","@material-ui/core/DialogTitle":"7pAIQ","@material-ui/core/DialogContent":"6V6fB","@material-ui/core/Typography":"3wcF9","@material-ui/core/Snackbar":"6omdK","@material-ui/core/IconButton":"2ndRy","@material-ui/icons/ExpandMore":"5UAS0","@material-ui/icons/Close":"4vi89","@material-ui/core/Accordion":"620GP","@material-ui/core/AccordionSummary":"5ky5z","@material-ui/core/AccordionDetails":"46Zrd","react-copy-to-clipboard":"7aaPW"}],"4vi89":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"7aaPW":[function(require,module,exports) {
"use strict";
var _require = require('./Component'), CopyToClipboard = _require.CopyToClipboard;
CopyToClipboard.CopyToClipboard = CopyToClipboard;
module.exports = CopyToClipboard;

},{"./Component":"4yxNP"}],"4yxNP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CopyToClipboard = void 0;
var _react = _interopRequireDefault(require("react"));
var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(source, true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var CopyToClipboard1 = /*#__PURE__*/ function(_React$PureComponent) {
    _inherits(CopyToClipboard2, _React$PureComponent);
    function CopyToClipboard2() {
        var _getPrototypeOf2;
        var _this;
        _classCallCheck(this, CopyToClipboard2);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CopyToClipboard2)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        _defineProperty(_assertThisInitialized(_this), "onClick", function(event) {
            var _this$props = _this.props, text = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;
            var elem = _react["default"].Children.only(children);
            var result = _copyToClipboard["default"](text, options);
            if (onCopy) onCopy(text, result);
             // Bypass onClick if it was present
            if (elem && elem.props && typeof elem.props.onClick === 'function') elem.props.onClick(event);
        });
        return _this;
    }
    _createClass(CopyToClipboard2, [
        {
            key: "render",
            value: function render() {
                var _this$props2 = this.props, _text = _this$props2.text, _onCopy = _this$props2.onCopy, _options = _this$props2.options, children = _this$props2.children, props = _objectWithoutProperties(_this$props2, [
                    "text",
                    "onCopy",
                    "options",
                    "children"
                ]);
                var elem = _react["default"].Children.only(children);
                return _react["default"].cloneElement(elem, _objectSpread({
                }, props, {
                    onClick: this.onClick
                }));
            }
        }
    ]);
    return CopyToClipboard2;
}(_react["default"].PureComponent);
exports.CopyToClipboard = CopyToClipboard1;
_defineProperty(CopyToClipboard1, "defaultProps", {
    onCopy: undefined,
    options: undefined
});

},{"react":"3b2NM","copy-to-clipboard":"19NML"}],"19NML":[function(require,module,exports) {
"use strict";
var deselectCurrent = require("toggle-selection");
var clipboardToIE11Formatting = {
    "text/plain": "Text",
    "text/html": "Url",
    "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message) {
    var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text, options) {
    var debug, message, reselectPrevious, range, selection, mark, success = false;
    if (!options) options = {
    };
    debug = options.debug || false;
    try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        // reset user styles for span element
        mark.style.all = "unset";
        // prevents scrolling to the end of the page
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        // used to preserve spaces and line breaks
        mark.style.whiteSpace = "pre";
        // do not inherit user-select (it may be `none`)
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
            e.stopPropagation();
            if (options.format) {
                e.preventDefault();
                if (typeof e.clipboardData === "undefined") {
                    debug && console.warn("unable to use e.clipboardData");
                    debug && console.warn("trying IE specific stuff");
                    window.clipboardData.clearData();
                    var format1 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
                    window.clipboardData.setData(format1, text);
                } else {
                    e.clipboardData.clearData();
                    e.clipboardData.setData(options.format, text);
                }
            }
            if (options.onCopy) {
                e.preventDefault();
                options.onCopy(e.clipboardData);
            }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) throw new Error("copy command was unsuccessful");
        success = true;
    } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
            window.clipboardData.setData(options.format || "text", text);
            options.onCopy && options.onCopy(window.clipboardData);
            success = true;
        } catch (err1) {
            debug && console.error("unable to copy using clipboardData: ", err1);
            debug && console.error("falling back to prompt");
            message = format("message" in options ? options.message : defaultMessage);
            window.prompt(message, text);
        }
    } finally{
        if (selection) {
            if (typeof selection.removeRange == "function") selection.removeRange(range);
            else selection.removeAllRanges();
        }
        if (mark) document.body.removeChild(mark);
        reselectPrevious();
    }
    return success;
}
module.exports = copy;

},{"toggle-selection":"784yM"}],"784yM":[function(require,module,exports) {
module.exports = function() {
    var selection = document.getSelection();
    if (!selection.rangeCount) return function() {
    };
    var active = document.activeElement;
    var ranges = [];
    for(var i = 0; i < selection.rangeCount; i++)ranges.push(selection.getRangeAt(i));
    switch(active.tagName.toUpperCase()){
        case 'INPUT':
        case 'TEXTAREA':
            active.blur();
            break;
        default:
            active = null;
            break;
    }
    selection.removeAllRanges();
    return function() {
        selection.type === 'Caret' && selection.removeAllRanges();
        if (!selection.rangeCount) ranges.forEach(function(range) {
            selection.addRange(range);
        });
        active && active.focus();
    };
};

},{}],"4erVC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var _WorkspaceImport = require("../components/WorkspaceImport");
var actions = _interopRequireWildcard(require("../state/actions"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */ var mapDispatchToProps = {
    addError: actions.addError,
    importConfig: actions.importMiradorState
};
/** */ var styles = function styles1(theme) {
    return {
        cancelBtn: {
            color: theme.palette.text.primary
        },
        textField: {
            width: '100%'
        },
        textInput: {
            fontFamily: 'monospace'
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(null, mapDispatchToProps), _withPlugins.withPlugins('WorkspaceImport'));
var _default = enhance(_WorkspaceImport.WorkspaceImport);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core":"6DoV9","../extend/withPlugins":"5PNwJ","../components/WorkspaceImport":"3Zqzw","../state/actions":"4t2dD"}],"3Zqzw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceImport = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));
var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));
var _core = require("@material-ui/core");
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _ScrollIndicatedDialogContent = _interopRequireDefault(require("../containers/ScrollIndicatedDialogContent"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 */ var WorkspaceImport1 = /*#__PURE__*/ function(_Component) {
    _inherits(WorkspaceImport2, _Component);
    var _super = _createSuper(WorkspaceImport2);
    /**
   *
   * constructor
   */ function WorkspaceImport2(props) {
        var _this;
        _classCallCheck(this, WorkspaceImport2);
        _this = _super.call(this, props);
        _this.state = {
            configImportValue: ''
        };
        _this.handleImportConfig = _this.handleImportConfig.bind(_assertThisInitialized(_this));
        _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * @private
   */ _createClass(WorkspaceImport2, [
        {
            key: "handleChange",
            value: function handleChange(event) {
                event.preventDefault();
                this.setState({
                    configImportValue: event.target.value
                });
            }
        },
        {
            key: "handleImportConfig",
            value: function handleImportConfig(event) {
                var _this$props = this.props, handleClose = _this$props.handleClose, importConfig = _this$props.importConfig;
                var configImportValue = this.state.configImportValue;
                try {
                    var configJSON = JSON.parse(configImportValue);
                    importConfig(configJSON);
                    handleClose();
                } catch (ex) {
                    var addError = this.props.addError;
                    addError(ex.toString());
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props2 = this.props, classes = _this$props2.classes, handleClose = _this$props2.handleClose, open = _this$props2.open, t = _this$props2.t;
                return(/*#__PURE__*/ _react["default"].createElement(_Dialog["default"], {
                    "aria-labelledby": "workspace-import-title",
                    id: "workspace-import",
                    onEscapeKeyDown: handleClose,
                    onClose: handleClose,
                    open: open,
                    fullWidth: true,
                    maxWidth: "sm"
                }, /*#__PURE__*/ _react["default"].createElement(_DialogTitle["default"], {
                    id: "workspace-import-title",
                    disableTypography: true
                }, /*#__PURE__*/ _react["default"].createElement(_core.Typography, {
                    variant: "h2"
                }, t('importWorkspace'))), /*#__PURE__*/ _react["default"].createElement(_ScrollIndicatedDialogContent["default"], null, /*#__PURE__*/ _react["default"].createElement(_core.TextField, {
                    className: classes.textField,
                    id: "workspace-import-input",
                    multiline: true,
                    onChange: this.handleChange,
                    rows: "15",
                    variant: "filled",
                    inputProps: {
                        autoFocus: 'autofocus',
                        className: classes.textInput
                    },
                    helperText: t('importWorkspaceHint')
                })), /*#__PURE__*/ _react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/ _react["default"].createElement(_Button["default"], {
                    className: classes.cancelBtn,
                    onClick: handleClose
                }, t('cancel')), /*#__PURE__*/ _react["default"].createElement(_Button["default"], {
                    color: "primary",
                    onClick: this.handleImportConfig,
                    variant: "contained"
                }, t('import')))));
            }
        }
    ]);
    return WorkspaceImport2;
}(_react.Component);
exports.WorkspaceImport = WorkspaceImport1;
WorkspaceImport1.defaultProps = {
    classes: {
    },
    open: false,
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","@material-ui/core/Dialog":"2fkds","@material-ui/core/DialogTitle":"7pAIQ","@material-ui/core":"6DoV9","@material-ui/core/Button":"1Xm5M","../containers/ScrollIndicatedDialogContent":"5sczT"}],"3tYzy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _WindowListButton = require("../components/WindowListButton");
/** */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        disabled: _selectors.getWorkspace(state).isWorkspaceAddVisible,
        windowCount: _selectors.getWindowIds(state).length
    };
};
/**
 *
 * @param theme
 * @returns {{background: {background: string}}}
 */ var styles = function styles1(theme) {
    return {
        badge: {
            paddingLeft: 12
        },
        ctrlBtn: {
            margin: theme.spacing(1)
        },
        ctrlBtnSelected: {
            backgroundColor: theme.palette.action.selected
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _styles.withStyles(styles), _reactRedux.connect(mapStateToProps, null), _withPlugins.withPlugins('WindowListButton'));
var _default = enhance(_WindowListButton.WindowListButton);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../state/selectors":"5Trnc","../components/WindowListButton":"1U7Kf"}],"1U7Kf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowListButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BookmarksSharp = _interopRequireDefault(require("@material-ui/icons/BookmarksSharp"));
var _classnames = _interopRequireDefault(require("classnames"));
var _WindowList = _interopRequireDefault(require("../containers/WindowList"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * WindowListButton ~
*/ var WindowListButton1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowListButton2, _Component);
    var _super = _createSuper(WindowListButton2);
    /** */ function WindowListButton2(props) {
        var _this;
        _classCallCheck(this, WindowListButton2);
        _this = _super.call(this, props);
        _this.state = {
            windowListAnchor: null
        };
        _this.handleClose = _this.handleClose.bind(_assertThisInitialized(_this));
        _this.handleOpen = _this.handleOpen.bind(_assertThisInitialized(_this));
        return _this;
    }
    /** Set the windowListAnchor to null on window close */ _createClass(WindowListButton2, [
        {
            key: "handleClose",
            value: function handleClose() {
                this.setState({
                    windowListAnchor: null
                });
            }
        },
        {
            key: "handleOpen",
            value: function handleOpen(event) {
                this.setState({
                    windowListAnchor: event.currentTarget
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props = this.props, classes = _this$props.classes, disabled = _this$props.disabled, t = _this$props.t, windowCount = _this$props.windowCount;
                var windowListAnchor = this.state.windowListAnchor;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-haspopup": "true",
                    "aria-label": t('listAllOpenWindows'),
                    "aria-owns": windowListAnchor ? 'window-list' : null,
                    className: _classnames["default"](classes.ctrlBtn, windowListAnchor ? classes.ctrlBtnSelected : null),
                    disabled: disabled,
                    badge: true,
                    BadgeProps: {
                        badgeContent: windowCount,
                        classes: {
                            badge: classes.badge
                        }
                    },
                    onClick: function onClick(e) {
                        return _this2.handleOpen(e);
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_BookmarksSharp["default"], null)), Boolean(windowListAnchor) && /*#__PURE__*/ _react["default"].createElement(_WindowList["default"], {
                    anchorEl: windowListAnchor,
                    id: "window-list",
                    open: Boolean(windowListAnchor),
                    handleClose: this.handleClose
                })));
            }
        }
    ]);
    return WindowListButton2;
}(_react.Component);
exports.WindowListButton = WindowListButton1;
WindowListButton1.defaultProps = {
    classes: {
    },
    disabled: false
};

},{"react":"3b2NM","@material-ui/icons/BookmarksSharp":"6Pscu","classnames":"5aJRc","../containers/WindowList":"4pJvQ","../containers/MiradorMenuButton":"4qUlt"}],"6Pscu":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M19 18l2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z"
}), 'BookmarksSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"4pJvQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _WindowList = require("../components/WindowList");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */ var mapDispatchToProps = {
    focusWindow: actions.focusWindow
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WorkspaceControlPanel
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        containerId: _selectors.getContainerId(state),
        titles: _selectors.getWindowTitles(state),
        windowIds: _selectors.getWindowIds(state)
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('WindowList'));
var _default = enhance(_WindowList.WindowList);
exports["default"] = _default;

},{"react-redux":"47SrY","redux":"7panR","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/WindowList":"7x6wG"}],"7x6wG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));
var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 */ var WindowList1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowList2, _Component);
    var _super = _createSuper(WindowList2);
    function WindowList2() {
        _classCallCheck(this, WindowList2);
        return _super.apply(this, arguments);
    }
    _createClass(WindowList2, [
        {
            key: "titleContent",
            value: /**
     * Get the title for a window from its manifest title
     * @private
     */ function titleContent(windowId) {
                var _this$props = this.props, titles = _this$props.titles, t = _this$props.t;
                return titles[windowId] || t('untitled');
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                var _this$props2 = this.props, containerId = _this$props2.containerId, handleClose = _this$props2.handleClose, anchorEl = _this$props2.anchorEl, windowIds = _this$props2.windowIds, focusWindow = _this$props2.focusWindow, t = _this$props2.t;
                return(/*#__PURE__*/ _react["default"].createElement(_Menu["default"], {
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'top'
                    },
                    transformOrigin: {
                        horizontal: 'left',
                        vertical: 'top'
                    },
                    id: "window-list-menu",
                    container: document.querySelector("#".concat(containerId, " .").concat(_cssNs["default"]('viewer'))),
                    disableAutoFocusItem: true,
                    anchorEl: anchorEl,
                    open: Boolean(anchorEl),
                    onClose: handleClose,
                    onEntering: WindowList2.focus2ndListIitem
                }, /*#__PURE__*/ _react["default"].createElement(_ListSubheader["default"], {
                    role: "presentation",
                    selected: false,
                    disabled: true,
                    tabIndex: "-1"
                }, t('openWindows')), windowIds.map(function(windowId, i) {
                    return(/*#__PURE__*/ _react["default"].createElement(_MenuItem["default"], {
                        key: windowId,
                        onClick: function onClick(e) {
                            focusWindow(windowId, true);
                            handleClose(e);
                        }
                    }, /*#__PURE__*/ _react["default"].createElement(_ListItemText["default"], {
                        primaryTypographyProps: {
                            variant: 'body1'
                        }
                    }, _this.titleContent(windowId))));
                })));
            }
        }
    ], [
        {
            key: "focus2ndListIitem",
            value: /**
     * Given the menuElement passed in by the onEntering callback,
     * find the 2nd ListItem element (avoiding the header) and focus it
    */ function focus2ndListIitem(menuElement) {
                if (!menuElement.querySelectorAll('li') || menuElement.querySelectorAll('li').length < 2) return;
                menuElement.querySelectorAll('li')[1].focus(); // The 2nd LI
            }
        }
    ]);
    return WindowList2;
}(_react.Component);
exports.WindowList = WindowList1;
WindowList1.defaultProps = {
    anchorEl: null,
    t: function t(key) {
        return key;
    },
    titles: {
    }
};

},{"react":"3b2NM","@material-ui/core/Menu":"3xurJ","@material-ui/core/MenuItem":"3pvH5","@material-ui/core/ListItemText":"7t7nz","@material-ui/core/ListSubheader":"505Dd","../config/css-ns":"6ABf8"}],"4sDNV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _withPlugins = require("../extend/withPlugins");
var _Branding = require("../components/Branding");
var _default = _withPlugins.withPlugins('Branding')(_Branding.Branding);
exports["default"] = _default;

},{"../extend/withPlugins":"5PNwJ","../components/Branding":"33j63"}],"33j63":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Branding = void 0;
var _react = _interopRequireWildcard(require("react"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _MiradorIcon = _interopRequireDefault(require("./icons/MiradorIcon"));
var _excluded = [
    "t",
    "variant"
];
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {
    };
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {
    };
    var target = {
    };
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Display a branding icon
 */ var Branding1 = /*#__PURE__*/ function(_Component) {
    _inherits(Branding2, _Component);
    var _super = _createSuper(Branding2);
    function Branding2() {
        _classCallCheck(this, Branding2);
        return _super.apply(this, arguments);
    }
    _createClass(Branding2, [
        {
            key: "render",
            value: /** */ function render() {
                var _this$props = this.props, t = _this$props.t, variant = _this$props.variant, ContainerProps = _objectWithoutProperties(_this$props, _excluded);
                return(/*#__PURE__*/ _react["default"].createElement("div", ContainerProps, variant === 'wide' && /*#__PURE__*/ _react["default"].createElement("div", null, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    align: "center",
                    component: "p",
                    variant: "h3"
                }, t('mirador'))), /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    align: "center"
                }, /*#__PURE__*/ _react["default"].createElement(_IconButton["default"], {
                    component: "a",
                    href: "https://projectmirador.org",
                    target: "_blank",
                    rel: "noopener"
                }, /*#__PURE__*/ _react["default"].createElement(_MiradorIcon["default"], {
                    "aria-label": t('aboutMirador'),
                    titleAccess: t('aboutMirador'),
                    fontSize: "large"
                })))));
            }
        }
    ]);
    return Branding2;
}(_react.Component);
exports.Branding = Branding1;
Branding1.defaultProps = {
    t: function t(k) {
        return k;
    },
    variant: 'default'
};

},{"react":"3b2NM","@material-ui/core/IconButton":"2ndRy","@material-ui/core/Typography":"3wcF9","./icons/MiradorIcon":"4lsEg"}],"4lsEg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = MiradorIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * ThumbnailNavigationRightIcon ~
*/ function MiradorIcon(props) {
    return(/*#__PURE__*/ _react["default"].createElement(_SvgIcon["default"], Object.assign({
        viewBox: "0 0 60 55"
    }, props), /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "18",
        height: "55"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "18",
        height: "55",
        transform: "translate(42)"
    }), /*#__PURE__*/ _react["default"].createElement("rect", {
        width: "18",
        height: "34",
        transform: "translate(21)"
    })));
}

},{"react":"3b2NM","@material-ui/core/SvgIcon":"2ubNB"}],"5BX0o":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _Workspace = require("../components/Workspace");
var _selectors = require("../state/selectors");
var actions = _interopRequireWildcard(require("../state/actions"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        allowNewWindows: _selectors.getConfig(state).workspace.allowNewWindows,
        isWorkspaceControlPanelVisible: _selectors.getConfig(state).workspaceControlPanel.enabled,
        maximizedWindowIds: _selectors.getMaximizedWindowsIds(state),
        windowIds: _selectors.getWindowIds(state),
        workspaceId: _selectors.getWorkspace(state).id,
        workspaceType: _selectors.getWorkspaceType(state)
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */ var mapDispatchToProps = {
    addWindow: actions.addWindow
};
/**
 * @param theme
 */ var styles = function styles1(theme) {
    return {
        workspaceViewport: {
            bottom: 0,
            left: 0,
            margin: 0,
            overflow: 'hidden',
            position: 'absolute',
            right: 0,
            top: 0
        },
        workspaceWithControlPanel: {
            paddingTop: 74
        },
        // injection order matters here
        // eslint-disable-next-line sort-keys
        '@media (min-width: 600px)': {
            workspaceWithControlPanel: {
                paddingLeft: 68,
                paddingTop: 0
            }
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _styles.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('Workspace')// further HOC go here
);
var _default = enhance(_Workspace.Workspace);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../components/Workspace":"5vJQ7","../state/selectors":"5Trnc","../state/actions":"4t2dD"}],"5vJQ7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Workspace = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Window = _interopRequireDefault(require("../containers/Window"));
var _WorkspaceMosaic = _interopRequireDefault(require("../containers/WorkspaceMosaic"));
var _WorkspaceElastic = _interopRequireDefault(require("../containers/WorkspaceElastic"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _IIIFDropTarget = require("./IIIFDropTarget");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */ var Workspace1 = /*#__PURE__*/ function(_React$Component) {
    _inherits(Workspace2, _React$Component);
    var _super = _createSuper(Workspace2);
    /** */ function Workspace2(props) {
        var _this;
        _classCallCheck(this, Workspace2);
        _this = _super.call(this, props);
        _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
        return _this;
    }
    /** */ _createClass(Workspace2, [
        {
            key: "handleDrop",
            value: function handleDrop(_ref, props, monitor) {
                var canvasId = _ref.canvasId, manifestId = _ref.manifestId, manifestJson = _ref.manifestJson;
                var _this$props = this.props, addWindow = _this$props.addWindow, allowNewWindows = _this$props.allowNewWindows;
                if (!allowNewWindows) return;
                addWindow({
                    canvasId: canvasId,
                    manifest: manifestJson,
                    manifestId: manifestId
                });
            }
        },
        {
            key: "workspaceByType",
            value: function workspaceByType() {
                var _this$props2 = this.props, workspaceId = _this$props2.workspaceId, workspaceType = _this$props2.workspaceType, windowIds = _this$props2.windowIds;
                if (this.maximizedWindows()) return this.maximizedWindows();
                if (windowIds.length === 0) return this.zeroWindows();
                switch(workspaceType){
                    case 'elastic':
                        return(/*#__PURE__*/ _react["default"].createElement(_WorkspaceElastic["default"], null));
                    case 'mosaic':
                        return(/*#__PURE__*/ _react["default"].createElement(_WorkspaceMosaic["default"], null));
                    default:
                        return windowIds.map(function(windowId) {
                            return(/*#__PURE__*/ _react["default"].createElement(_Window["default"], {
                                key: "".concat(windowId, "-").concat(workspaceId),
                                windowId: windowId
                            }));
                        });
                }
            }
        },
        {
            key: "zeroWindows",
            value: function zeroWindows() {
                var t = this.props.t;
                return(/*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    alignItems: "center",
                    container: true,
                    style: {
                        height: '100%'
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    xs: 12,
                    item: true
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "h1",
                    component: "div",
                    align: "center"
                }, t('welcome')))));
            }
        },
        {
            key: "maximizedWindows",
            value: function maximizedWindows() {
                var _this$props3 = this.props, maximizedWindowIds = _this$props3.maximizedWindowIds, workspaceId = _this$props3.workspaceId;
                if (maximizedWindowIds.length > 0) return maximizedWindowIds.map(function(windowId) {
                    return(/*#__PURE__*/ _react["default"].createElement(_Window["default"], {
                        key: "".concat(windowId, "-").concat(workspaceId),
                        windowId: windowId,
                        className: _classnames["default"](_cssNs["default"]('workspace-maximized-window'))
                    }));
                });
                return false;
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props4 = this.props, classes = _this$props4.classes, isWorkspaceControlPanelVisible = _this$props4.isWorkspaceControlPanelVisible, t = _this$props4.t;
                return(/*#__PURE__*/ _react["default"].createElement(_IIIFDropTarget.IIIFDropTarget, {
                    onDrop: this.handleDrop
                }, /*#__PURE__*/ _react["default"].createElement("div", {
                    className: _classnames["default"](_cssNs["default"]('workspace-viewport'), isWorkspaceControlPanelVisible && _cssNs["default"]('workspace-with-control-panel'), isWorkspaceControlPanelVisible && classes.workspaceWithControlPanel, classes.workspaceViewport)
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "srOnly",
                    component: "h1"
                }, t('miradorViewer')), this.workspaceByType())));
            }
        }
    ]);
    return Workspace2;
}(_react["default"].Component);
exports.Workspace = Workspace1;
Workspace1.defaultProps = {
    addWindow: function addWindow() {
    },
    allowNewWindows: true,
    maximizedWindowIds: [],
    windowIds: []
};

},{"react":"3b2NM","classnames":"5aJRc","@material-ui/core/Grid":"5T6Yd","@material-ui/core/Typography":"3wcF9","../containers/Window":"6Jd3H","../containers/WorkspaceMosaic":"2Nlmv","../containers/WorkspaceElastic":"77O49","../config/css-ns":"6ABf8","./IIIFDropTarget":"1Lsie"}],"6Jd3H":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _core = require("@material-ui/core");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _Window = require("../components/Window");
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapStateToProps - used to hook up connect to action creators
 * @memberof Window
 * @private
 */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    return {
        isFetching: _selectors.getManifestStatus(state, {
            windowId: windowId
        }).isFetching,
        label: _selectors.getManifestTitle(state, {
            windowId: windowId
        }),
        manifestError: _selectors.getManifestError(state, {
            windowId: windowId
        }),
        maximized: (_selectors.getWindow(state, {
            windowId: windowId
        }) || {
        }).maximized,
        sideBarOpen: (_selectors.getWindow(state, {
            windowId: windowId
        }) || {
        }).sideBarOpen,
        thumbnailNavigationPosition: _selectors.getThumbnailNavigationPosition(state, {
            windowId: windowId
        }),
        view: _selectors.getWindowViewType(state, {
            windowId: windowId
        }),
        window: _selectors.getWindow(state, {
            windowId: windowId
        }),
        windowDraggable: _selectors.getWindowDraggability(state, {
            windowId: windowId
        }),
        workspaceType: _selectors.getWorkspaceType(state)
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */ var mapDispatchToProps = function mapDispatchToProps1(dispatch, _ref2) {
    var windowId = _ref2.windowId;
    return {
        focusWindow: function focusWindow() {
            return dispatch(actions.focusWindow(windowId));
        }
    };
};
/**
 * @param theme
 */ var styles = function styles1(theme) {
    return {
        companionAreaBottom: {
            display: 'flex',
            flex: '0',
            flexBasis: 'auto',
            minHeight: 0
        },
        companionAreaRight: {
            display: 'flex',
            flex: '0 1 auto',
            minHeight: 0
        },
        maximized: {
        },
        middle: {
            display: 'flex',
            flex: '1',
            flexDirection: 'row',
            minHeight: 0
        },
        middleLeft: {
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            minHeight: 0
        },
        primaryWindow: {
            display: 'flex',
            flex: '1',
            height: '300px',
            minHeight: 0,
            position: 'relative'
        },
        thumbnailArea: {
            backgroundColor: theme.palette.shades.dark
        },
        thumbnailAreaBottom: {
        },
        thumbnailAreaRight: {
            minWidth: 100
        },
        window: {
            '&$maximized': {
                left: 0,
                position: 'absolute',
                top: 0,
                zIndex: theme.zIndex.modal - 1
            },
            backgroundColor: theme.palette.shades.dark,
            borderRadius: 0,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            minHeight: 0,
            overflow: 'hidden',
            width: '100%'
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('Window'));
var _default = enhance(_Window.Window);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","@material-ui/core":"6DoV9","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../components/Window":"7LPOR","../state/selectors":"5Trnc"}],"7LPOR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Window = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _contextTypes = require("react-mosaic-component/lib/contextTypes");
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _WindowTopBar = _interopRequireDefault(require("../containers/WindowTopBar"));
var _PrimaryWindow = _interopRequireDefault(require("../containers/PrimaryWindow"));
var _CompanionArea = _interopRequireDefault(require("../containers/CompanionArea"));
var _MinimalWindow = _interopRequireDefault(require("../containers/MinimalWindow"));
var _ErrorContent = _interopRequireDefault(require("../containers/ErrorContent"));
var _IIIFAuthentication = _interopRequireDefault(require("../containers/IIIFAuthentication"));
var _PluginHook = require("./PluginHook");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Represents a Window in the mirador workspace
 * @param {object} window
 */ var Window1 = /*#__PURE__*/ function(_Component) {
    _inherits(Window2, _Component);
    var _super = _createSuper(Window2);
    /** */ function Window2(props) {
        var _this;
        _classCallCheck(this, Window2);
        _this = _super.call(this, props);
        _this.state = {
        };
        return _this;
    }
    /** */ _createClass(Window2, [
        {
            key: "wrappedTopBar",
            value: /**
     * wrappedTopBar - will conditionally wrap a WindowTopBar for needed
     * additional functionality based on workspace type
     */ function wrappedTopBar() {
                var _this$props = this.props, windowId = _this$props.windowId, workspaceType = _this$props.workspaceType, windowDraggable = _this$props.windowDraggable;
                var topBar = /*#__PURE__*/ _react["default"].createElement("div", null, /*#__PURE__*/ _react["default"].createElement(_WindowTopBar["default"], {
                    windowId: windowId,
                    windowDraggable: windowDraggable
                }), /*#__PURE__*/ _react["default"].createElement(_IIIFAuthentication["default"], {
                    windowId: windowId
                }));
                if (workspaceType === 'mosaic' && windowDraggable) {
                    var mosaicWindowActions = this.context.mosaicWindowActions;
                    return mosaicWindowActions.connectDragSource(topBar);
                }
                return topBar;
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props2 = this.props, focusWindow = _this$props2.focusWindow, label = _this$props2.label, isFetching = _this$props2.isFetching, maximized = _this$props2.maximized, sideBarOpen = _this$props2.sideBarOpen, view = _this$props2.view, windowId = _this$props2.windowId, classes = _this$props2.classes, t = _this$props2.t, manifestError = _this$props2.manifestError;
                var _this$state = this.state, error = _this$state.error, hasError = _this$state.hasError;
                if (hasError) return(/*#__PURE__*/ _react["default"].createElement(_MinimalWindow["default"], {
                    windowId: windowId
                }, /*#__PURE__*/ _react["default"].createElement(_ErrorContent["default"], {
                    error: error,
                    windowId: windowId
                })));
                return(/*#__PURE__*/ _react["default"].createElement(_Paper["default"], {
                    onFocus: focusWindow,
                    component: "section",
                    elevation: 1,
                    id: windowId,
                    className: _classnames["default"](classes.window, _cssNs["default"]('window'), maximized ? classes.maximized : null),
                    "aria-label": t('window', {
                        label: label
                    })
                }, this.wrappedTopBar(), manifestError && /*#__PURE__*/ _react["default"].createElement(_ErrorContent["default"], {
                    error: {
                        stack: manifestError
                    },
                    windowId: windowId
                }), /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.middle
                }, /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.middleLeft
                }, /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.primaryWindow
                }, /*#__PURE__*/ _react["default"].createElement(_PrimaryWindow["default"], {
                    view: view,
                    windowId: windowId,
                    isFetching: isFetching,
                    sideBarOpen: sideBarOpen
                })), /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.companionAreaBottom
                }, /*#__PURE__*/ _react["default"].createElement(_CompanionArea["default"], {
                    windowId: windowId,
                    position: "bottom"
                }))), /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.companionAreaRight
                }, /*#__PURE__*/ _react["default"].createElement(_CompanionArea["default"], {
                    windowId: windowId,
                    position: "right"
                }), /*#__PURE__*/ _react["default"].createElement(_CompanionArea["default"], {
                    windowId: windowId,
                    position: "far-right"
                }))), /*#__PURE__*/ _react["default"].createElement(_CompanionArea["default"], {
                    windowId: windowId,
                    position: "far-bottom"
                }), /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, this.props)));
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                // Update state so the next render will show the fallback UI.
                return {
                    error: error,
                    hasError: true
                };
            }
        }
    ]);
    return Window2;
}(_react.Component);
exports.Window = Window1;
Window1.contextType = _contextTypes.MosaicWindowContext;
Window1.defaultProps = {
    classes: {
    },
    focusWindow: function focusWindow() {
    },
    isFetching: false,
    label: null,
    manifestError: null,
    maximized: false,
    sideBarOpen: false,
    view: undefined,
    windowDraggable: null,
    workspaceType: null
};

},{"react":"3b2NM","classnames":"5aJRc","@material-ui/core/Paper":"5Fj22","react-mosaic-component/lib/contextTypes":"1y8z5","../config/css-ns":"6ABf8","../containers/WindowTopBar":"1QDc6","../containers/PrimaryWindow":"dPxzb","../containers/CompanionArea":"1tXy6","../containers/MinimalWindow":"4tk35","../containers/ErrorContent":"5csMh","../containers/IIIFAuthentication":"2NG7p","./PluginHook":"6m4WL"}],"1y8z5":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MosaicWindowContext = exports.MosaicContext = void 0;
var react_1 = __importDefault(require("react"));
exports.MosaicContext = react_1.default.createContext(undefined);
exports.MosaicWindowContext = react_1.default.createContext(undefined);

},{"react":"3b2NM"}],"1QDc6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _WindowTopBar = require("../components/WindowTopBar");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/** mapStateToProps */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    var config = _selectors.getWindowConfig(state, {
        windowId: windowId
    });
    return {
        allowClose: config.allowClose,
        allowFullscreen: config.allowFullscreen,
        allowMaximize: config.allowMaximize,
        allowTopMenuButton: config.allowTopMenuButton,
        allowWindowSideBar: config.allowWindowSideBar,
        focused: _selectors.isFocused(state, {
            windowId: windowId
        }),
        maximized: config.maximized
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */ var mapDispatchToProps = function mapDispatchToProps1(dispatch, _ref2) {
    var windowId = _ref2.windowId;
    return {
        focusWindow: function focusWindow() {
            return dispatch(actions.focusWindow(windowId));
        },
        maximizeWindow: function maximizeWindow() {
            return dispatch(actions.maximizeWindow(windowId));
        },
        minimizeWindow: function minimizeWindow() {
            return dispatch(actions.minimizeWindow(windowId));
        },
        removeWindow: function removeWindow() {
            return dispatch(actions.removeWindow(windowId));
        },
        toggleWindowSideBar: function toggleWindowSideBar() {
            return dispatch(actions.toggleWindowSideBar(windowId));
        }
    };
};
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */ var styles = function styles1(theme) {
    return {
        focused: {
        },
        windowTopBarStyle: {
            '&$focused': {
                borderTop: "2px solid ".concat(theme.palette.primary.main)
            },
            backgroundColor: theme.palette.shades.main,
            borderTop: '2px solid transparent',
            minHeight: 32,
            paddingLeft: theme.spacing(0.5),
            paddingRight: theme.spacing(0.5)
        },
        windowTopBarStyleDraggable: {
            cursor: 'move'
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('WindowTopBar'));
var _default = enhance(_WindowTopBar.WindowTopBar);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core":"6DoV9","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/WindowTopBar":"4hS1K"}],"4hS1K":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowTopBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MenuSharp = _interopRequireDefault(require("@material-ui/icons/MenuSharp"));
var _CloseSharp = _interopRequireDefault(require("@material-ui/icons/CloseSharp"));
var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));
var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));
var _classnames = _interopRequireDefault(require("classnames"));
var _WindowTopMenuButton = _interopRequireDefault(require("../containers/WindowTopMenuButton"));
var _WindowTopBarPluginArea = _interopRequireDefault(require("../containers/WindowTopBarPluginArea"));
var _WindowTopBarPluginMenu = _interopRequireDefault(require("../containers/WindowTopBarPluginMenu"));
var _WindowTopBarTitle = _interopRequireDefault(require("../containers/WindowTopBarTitle"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _FullScreenButton = _interopRequireDefault(require("../containers/FullScreenButton"));
var _WindowMaxIcon = _interopRequireDefault(require("./icons/WindowMaxIcon"));
var _WindowMinIcon = _interopRequireDefault(require("./icons/WindowMinIcon"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * WindowTopBar
 */ var WindowTopBar1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowTopBar2, _Component);
    var _super = _createSuper(WindowTopBar2);
    function WindowTopBar2() {
        _classCallCheck(this, WindowTopBar2);
        return _super.apply(this, arguments);
    }
    _createClass(WindowTopBar2, [
        {
            key: "render",
            value: /**
     * render
     * @return
     */ function render() {
                var _this$props = this.props, removeWindow = _this$props.removeWindow, windowId = _this$props.windowId, classes = _this$props.classes, toggleWindowSideBar = _this$props.toggleWindowSideBar, t = _this$props.t, windowDraggable = _this$props.windowDraggable, maximizeWindow = _this$props.maximizeWindow, maximized = _this$props.maximized, minimizeWindow = _this$props.minimizeWindow, focused = _this$props.focused, allowClose = _this$props.allowClose, allowMaximize = _this$props.allowMaximize, focusWindow = _this$props.focusWindow, allowFullscreen = _this$props.allowFullscreen, allowTopMenuButton = _this$props.allowTopMenuButton, allowWindowSideBar = _this$props.allowWindowSideBar;
                return(/*#__PURE__*/ _react["default"].createElement(_AppBar["default"], {
                    position: "relative",
                    color: "default"
                }, /*#__PURE__*/ _react["default"].createElement("nav", {
                    "aria-label": t('windowNavigation')
                }, /*#__PURE__*/ _react["default"].createElement(_Toolbar["default"], {
                    disableGutters: true,
                    onMouseDown: focusWindow,
                    className: _classnames["default"](classes.windowTopBarStyle, windowDraggable ? classes.windowTopBarStyleDraggable : null, focused ? classes.focused : null, _cssNs["default"]('window-top-bar')),
                    variant: "dense"
                }, allowWindowSideBar && /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-label": t('toggleWindowSideBar'),
                    onClick: toggleWindowSideBar
                }, /*#__PURE__*/ _react["default"].createElement(_MenuSharp["default"], null)), /*#__PURE__*/ _react["default"].createElement(_WindowTopBarTitle["default"], {
                    windowId: windowId
                }), allowTopMenuButton && /*#__PURE__*/ _react["default"].createElement(_WindowTopMenuButton["default"], {
                    className: _cssNs["default"]('window-menu-btn'),
                    windowId: windowId
                }), /*#__PURE__*/ _react["default"].createElement(_WindowTopBarPluginArea["default"], {
                    windowId: windowId
                }), /*#__PURE__*/ _react["default"].createElement(_WindowTopBarPluginMenu["default"], {
                    windowId: windowId
                }), allowMaximize && /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-label": maximized ? t('minimizeWindow') : t('maximizeWindow'),
                    className: _cssNs["default"]('window-maximize'),
                    onClick: maximized ? minimizeWindow : maximizeWindow
                }, maximized ? /*#__PURE__*/ _react["default"].createElement(_WindowMinIcon["default"], null) : /*#__PURE__*/ _react["default"].createElement(_WindowMaxIcon["default"], null)), allowFullscreen && /*#__PURE__*/ _react["default"].createElement(_FullScreenButton["default"], null), allowClose && /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-label": t('closeWindow'),
                    className: _cssNs["default"]('window-close'),
                    onClick: removeWindow
                }, /*#__PURE__*/ _react["default"].createElement(_CloseSharp["default"], null))))));
            }
        }
    ]);
    return WindowTopBar2;
}(_react.Component);
exports.WindowTopBar = WindowTopBar1;
WindowTopBar1.defaultProps = {
    allowClose: true,
    allowFullscreen: false,
    allowMaximize: true,
    allowTopMenuButton: true,
    allowWindowSideBar: true,
    focused: false,
    focusWindow: function focusWindow() {
    },
    maximized: false,
    maximizeWindow: function maximizeWindow() {
    },
    minimizeWindow: function minimizeWindow() {
    },
    t: function t(key) {
        return key;
    },
    windowDraggable: true
};

},{"react":"3b2NM","@material-ui/icons/MenuSharp":"71alR","@material-ui/icons/CloseSharp":"1IIc1","@material-ui/core/Toolbar":"3jiG5","@material-ui/core/AppBar":"3NZOv","classnames":"5aJRc","../containers/WindowTopMenuButton":"4kA4E","../containers/WindowTopBarPluginArea":"5ZPZ6","../containers/WindowTopBarPluginMenu":"MKxuI","../containers/WindowTopBarTitle":"4NoeZ","../containers/MiradorMenuButton":"4qUlt","../containers/FullScreenButton":"4VaaE","./icons/WindowMaxIcon":"5tj1X","./icons/WindowMinIcon":"6OJ0u","../config/css-ns":"6ABf8"}],"71alR":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), 'MenuSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"4kA4E":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var _WindowTopMenuButton = require("../components/WindowTopMenuButton");
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */ var styles = function styles1(theme) {
    return {
        ctrlBtnSelected: {
            backgroundColor: theme.palette.action.selected
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _withPlugins.withPlugins('WindowTopMenuButton'));
var _default = enhance(_WindowTopMenuButton.WindowTopMenuButton);
exports["default"] = _default;

},{"redux":"7panR","react-i18next":"6hlRL","@material-ui/core":"6DoV9","../extend/withPlugins":"5PNwJ","../components/WindowTopMenuButton":"6Xkfb"}],"6Xkfb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowTopMenuButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _WindowTopMenu = _interopRequireDefault(require("../containers/WindowTopMenu"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _WindowOptionsIcon = _interopRequireDefault(require("./icons/WindowOptionsIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 */ var WindowTopMenuButton1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowTopMenuButton2, _Component);
    var _super = _createSuper(WindowTopMenuButton2);
    /**
   * constructor -
   */ function WindowTopMenuButton2(props) {
        var _this;
        _classCallCheck(this, WindowTopMenuButton2);
        _this = _super.call(this, props);
        _this.state = {
            anchorEl: null
        };
        _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
        _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * @private
   */ _createClass(WindowTopMenuButton2, [
        {
            key: "handleMenuClick",
            value: function handleMenuClick(event) {
                this.setState({
                    anchorEl: event.currentTarget
                });
            }
        },
        {
            key: "handleMenuClose",
            value: function handleMenuClose() {
                this.setState({
                    anchorEl: null
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, classes = _this$props.classes, t = _this$props.t, windowId = _this$props.windowId;
                var anchorEl = this.state.anchorEl;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-haspopup": "true",
                    "aria-label": t('windowMenu'),
                    "aria-owns": anchorEl ? "window-menu_".concat(windowId) : undefined,
                    className: anchorEl ? classes.ctrlBtnSelected : null,
                    onClick: this.handleMenuClick
                }, /*#__PURE__*/ _react["default"].createElement(_WindowOptionsIcon["default"], null)), /*#__PURE__*/ _react["default"].createElement(_WindowTopMenu["default"], {
                    windowId: windowId,
                    anchorEl: anchorEl,
                    handleClose: this.handleMenuClose
                })));
            }
        }
    ]);
    return WindowTopMenuButton2;
}(_react.Component);
exports.WindowTopMenuButton = WindowTopMenuButton1;
WindowTopMenuButton1.defaultProps = {
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","../containers/WindowTopMenu":"1Jesv","../containers/MiradorMenuButton":"4qUlt","./icons/WindowOptionsIcon":"1rAgz"}],"1Jesv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _WindowTopMenu = require("../components/WindowTopMenu");
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowTopMenu
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        containerId: _selectors.getContainerId(state),
        showThumbnailNavigationSettings: _selectors.getConfig(state).thumbnailNavigation.displaySettings
    };
};
/**
 * mapStateToProps - used to hook up connect to state
 * @memberof WindowTopMenu
 * @private
 */ var mapDispatchToProps = function mapDispatchToProps1(dispatch) {
    return {
        toggleDraggingEnabled: function toggleDraggingEnabled() {
            return dispatch(actions.toggleDraggingEnabled());
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('WindowTopMenu'));
var _default = enhance(_WindowTopMenu.WindowTopMenu);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../components/WindowTopMenu":"5PU4a","../state/selectors":"5Trnc"}],"5PU4a":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowTopMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Menu = _interopRequireDefault(require("@material-ui/core//Menu"));
var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));
var _WindowThumbnailSettings = _interopRequireDefault(require("../containers/WindowThumbnailSettings"));
var _WindowViewSettings = _interopRequireDefault(require("../containers/WindowViewSettings"));
var _PluginHook = require("./PluginHook");
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/** Renders plugins */ function PluginHookWithHeader(props) {
    var PluginComponents = props.PluginComponents, t = props.t; // eslint-disable-line react/prop-types
    return PluginComponents ? /*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_ListSubheader["default"], {
        role: "presentation",
        disableSticky: true,
        tabIndex: "-1"
    }, t('windowPluginButtons')), /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, props)) : null;
}
/**
 */ var WindowTopMenu1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowTopMenu2, _Component);
    var _super = _createSuper(WindowTopMenu2);
    function WindowTopMenu2() {
        _classCallCheck(this, WindowTopMenu2);
        return _super.apply(this, arguments);
    }
    _createClass(WindowTopMenu2, [
        {
            key: "render",
            value: /**
     * render
     * @return
     */ function render() {
                var _this$props = this.props, containerId = _this$props.containerId, handleClose = _this$props.handleClose, anchorEl = _this$props.anchorEl, showThumbnailNavigationSettings = _this$props.showThumbnailNavigationSettings, toggleDraggingEnabled = _this$props.toggleDraggingEnabled, windowId = _this$props.windowId;
                return(/*#__PURE__*/ _react["default"].createElement(_Menu["default"], {
                    id: "window-menu_".concat(windowId),
                    container: document.querySelector("#".concat(containerId, " .").concat(_cssNs["default"]('viewer'))),
                    anchorEl: anchorEl,
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'bottom'
                    },
                    transformOrigin: {
                        horizontal: 'right',
                        vertical: 'top'
                    },
                    getContentAnchorEl: null,
                    open: Boolean(anchorEl),
                    onClose: handleClose,
                    onEntering: toggleDraggingEnabled,
                    onExit: toggleDraggingEnabled,
                    orientation: "horizontal"
                }, /*#__PURE__*/ _react["default"].createElement(_WindowViewSettings["default"], {
                    windowId: windowId,
                    handleClose: handleClose
                }), showThumbnailNavigationSettings && /*#__PURE__*/ _react["default"].createElement(_WindowThumbnailSettings["default"], {
                    windowId: windowId,
                    handleClose: handleClose
                }), /*#__PURE__*/ _react["default"].createElement(PluginHookWithHeader, this.props)));
            }
        }
    ]);
    return WindowTopMenu2;
}(_react.Component);
exports.WindowTopMenu = WindowTopMenu1;
WindowTopMenu1.defaultProps = {
    anchorEl: null,
    showThumbnailNavigationSettings: true
};

},{"react":"3b2NM","@material-ui/core//Menu":"3xurJ","@material-ui/core/ListSubheader":"505Dd","../containers/WindowThumbnailSettings":"BfmC1","../containers/WindowViewSettings":"6qLT7","./PluginHook":"6m4WL","../config/css-ns":"6ABf8"}],"BfmC1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _WindowThumbnailSettings = require("../components/WindowThumbnailSettings");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */ var mapDispatchToProps = {
    setWindowThumbnailPosition: actions.setWindowThumbnailPosition
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    return {
        direction: _selectors.getThemeDirection(state),
        thumbnailNavigationPosition: _selectors.getThumbnailNavigationPosition(state, {
            windowId: windowId
        })
    };
};
/** */ var styles = function styles1(theme) {
    return {
        label: {
            borderBottom: '2px solid transparent'
        },
        MenuItem: {
            display: 'inline-block'
        },
        selectedLabel: {
            borderBottom: "2px solid ".concat(theme.palette.secondary.main),
            color: theme.palette.secondary.main
        }
    };
};
var enhance = _redux.compose(_styles.withStyles(styles), _reactI18next.withTranslation(null, {
    withRef: true
}), _reactRedux.connect(mapStateToProps, mapDispatchToProps, null, {
    forwardRef: true
}), _withPlugins.withPlugins('WindowThumbnailSettings')// further HOC go here
);
var _default = enhance(_WindowThumbnailSettings.WindowThumbnailSettings);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/WindowThumbnailSettings":"2bMN0"}],"2bMN0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowThumbnailSettings = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));
var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _CropDinSharp = _interopRequireDefault(require("@material-ui/icons/CropDinSharp"));
var _ThumbnailNavigationBottomIcon = _interopRequireDefault(require("./icons/ThumbnailNavigationBottomIcon"));
var _ThumbnailNavigationRightIcon = _interopRequireDefault(require("./icons/ThumbnailNavigationRightIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 *
 */ var WindowThumbnailSettings1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowThumbnailSettings2, _Component);
    var _super = _createSuper(WindowThumbnailSettings2);
    /**
   * constructor -
   */ function WindowThumbnailSettings2(props) {
        var _this;
        _classCallCheck(this, WindowThumbnailSettings2);
        _this = _super.call(this, props);
        _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * @private
   */ _createClass(WindowThumbnailSettings2, [
        {
            key: "handleChange",
            value: function handleChange(value) {
                var _this$props = this.props, windowId = _this$props.windowId, setWindowThumbnailPosition = _this$props.setWindowThumbnailPosition;
                setWindowThumbnailPosition(windowId, value);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props2 = this.props, classes = _this$props2.classes, handleClose = _this$props2.handleClose, t = _this$props2.t, thumbnailNavigationPosition = _this$props2.thumbnailNavigationPosition, direction = _this$props2.direction;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_ListSubheader["default"], {
                    role: "presentation",
                    disableSticky: true,
                    tabIndex: "-1"
                }, t('thumbnails')), /*#__PURE__*/ _react["default"].createElement(_MenuItem["default"], {
                    className: classes.MenuItem,
                    onClick: function onClick() {
                        _this2.handleChange('off');
                        handleClose();
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_FormControlLabel["default"], {
                    value: "off",
                    classes: {
                        label: thumbnailNavigationPosition === 'off' ? classes.selectedLabel : classes.label
                    },
                    control: /*#__PURE__*/ _react["default"].createElement(_CropDinSharp["default"], {
                        color: thumbnailNavigationPosition === 'off' ? 'secondary' : undefined
                    }),
                    label: t('off'),
                    labelPlacement: "bottom"
                })), /*#__PURE__*/ _react["default"].createElement(_MenuItem["default"], {
                    className: classes.MenuItem,
                    onClick: function onClick() {
                        _this2.handleChange('far-bottom');
                        handleClose();
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_FormControlLabel["default"], {
                    value: "far-bottom",
                    classes: {
                        label: thumbnailNavigationPosition === 'far-bottom' ? classes.selectedLabel : classes.label
                    },
                    control: /*#__PURE__*/ _react["default"].createElement(_ThumbnailNavigationBottomIcon["default"], {
                        color: thumbnailNavigationPosition === 'far-bottom' ? 'secondary' : undefined
                    }),
                    label: t('bottom'),
                    labelPlacement: "bottom"
                })), /*#__PURE__*/ _react["default"].createElement(_MenuItem["default"], {
                    className: classes.MenuItem,
                    onClick: function onClick() {
                        _this2.handleChange('far-right');
                        handleClose();
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_FormControlLabel["default"], {
                    value: "far-right",
                    classes: {
                        label: thumbnailNavigationPosition === 'far-right' ? classes.selectedLabel : classes.label
                    },
                    control: /*#__PURE__*/ _react["default"].createElement(_ThumbnailNavigationRightIcon["default"], {
                        color: thumbnailNavigationPosition === 'far-right' ? 'secondary' : undefined,
                        style: direction === 'rtl' ? {
                            transform: 'rotate(180deg)'
                        } : {
                        }
                    }),
                    label: t('right'),
                    labelPlacement: "bottom"
                }))));
            }
        }
    ]);
    return WindowThumbnailSettings2;
}(_react.Component);
exports.WindowThumbnailSettings = WindowThumbnailSettings1;
WindowThumbnailSettings1.defaultProps = {
    handleClose: function handleClose() {
    },
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","@material-ui/core/FormControlLabel":"4sGMv","@material-ui/core/ListSubheader":"505Dd","@material-ui/core/MenuItem":"3pvH5","@material-ui/icons/CropDinSharp":"1wTyU","./icons/ThumbnailNavigationBottomIcon":"79e0D","./icons/ThumbnailNavigationRightIcon":"5F6Op"}],"1wTyU":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M21 3H3v18h18V3zm-2 16H5V5h14v14z"
}), 'CropDinSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"79e0D":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = ThumbnailNavigationBottomIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * ThumbnailNavigationBottomIcon ~
*/ function ThumbnailNavigationBottomIcon(props) {
    return(/*#__PURE__*/ _react["default"].createElement(_SvgIcon["default"], props, /*#__PURE__*/ _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M3,3H21V5H3Z",
        transform: "translate(0 16)"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M21,5H3V19H21ZM19,17H5V7H19Z",
        transform: "translate(0 -2)"
    }))));
}

},{"react":"3b2NM","@material-ui/core/SvgIcon":"2ubNB"}],"5F6Op":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = ThumbnailNavigationRightIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * ThumbnailNavigationRightIcon ~
*/ function ThumbnailNavigationRightIcon(props) {
    return(/*#__PURE__*/ _react["default"].createElement(_SvgIcon["default"], props, /*#__PURE__*/ _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M0,0H24V24H0Z",
        transform: "translate(24) rotate(90)",
        fill: "none"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M3,3H21V5H3Z",
        transform: "translate(24) rotate(90)"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M19,3H5V21H19ZM17,19H7V5H17Z",
        transform: "translate(-2)"
    }))));
}

},{"react":"3b2NM","@material-ui/core/SvgIcon":"2ubNB"}],"6qLT7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _WindowViewSettings = require("../components/WindowViewSettings");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */ var mapDispatchToProps = {
    setWindowViewType: actions.setWindowViewType
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    return {
        viewTypes: _selectors.getAllowedWindowViewTypes(state, {
            windowId: windowId
        }),
        windowViewType: _selectors.getWindowViewType(state, {
            windowId: windowId
        })
    };
};
/** */ var styles = function styles1(theme) {
    return {
        label: {
            borderBottom: '2px solid transparent'
        },
        MenuItem: {
            display: 'inline-block'
        },
        selectedLabel: {
            borderBottom: "2px solid ".concat(theme.palette.secondary.main),
            color: theme.palette.secondary.main
        }
    };
};
var enhance = _redux.compose(_styles.withStyles(styles), _reactI18next.withTranslation(null, {
    withRef: true
}), _reactRedux.connect(mapStateToProps, mapDispatchToProps, null, {
    forwardRef: true
}), _withPlugins.withPlugins('WindowViewSettings'));
var _default = enhance(_WindowViewSettings.WindowViewSettings);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/WindowViewSettings":"4xucl"}],"4xucl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowViewSettings = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));
var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));
var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));
var _CropOriginalSharp = _interopRequireDefault(require("@material-ui/icons/CropOriginalSharp"));
var _ViewColumn = _interopRequireDefault(require("@material-ui/icons/ViewColumn"));
var _BookViewIcon = _interopRequireDefault(require("./icons/BookViewIcon"));
var _GalleryViewIcon = _interopRequireDefault(require("./icons/GalleryViewIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 *
 */ var WindowViewSettings1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowViewSettings2, _Component);
    var _super = _createSuper(WindowViewSettings2);
    /**
   * constructor -
   */ function WindowViewSettings2(props) {
        var _this;
        _classCallCheck(this, WindowViewSettings2);
        _this = _super.call(this, props);
        _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * @private
   */ _createClass(WindowViewSettings2, [
        {
            key: "handleChange",
            value: function handleChange(value) {
                var _this$props = this.props, windowId = _this$props.windowId, setWindowViewType = _this$props.setWindowViewType;
                setWindowViewType(windowId, value);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props2 = this.props, classes = _this$props2.classes, handleClose = _this$props2.handleClose, t = _this$props2.t, windowViewType = _this$props2.windowViewType, viewTypes = _this$props2.viewTypes;
                var iconMap = {
                    book: _BookViewIcon["default"],
                    gallery: _GalleryViewIcon["default"],
                    scroll: _ViewColumn["default"],
                    single: _CropOriginalSharp["default"]
                };
                /** Suspiciously similar to a component, yet if it is invoked through JSX
          none of the click handlers work? */ var menuItem = function menuItem1(_ref) {
                    var value = _ref.value, Icon = _ref.Icon;
                    return(/*#__PURE__*/ _react["default"].createElement(_MenuItem["default"], {
                        key: value,
                        className: classes.MenuItem,
                        autoFocus: windowViewType === value,
                        onClick: function onClick() {
                            _this2.handleChange(value);
                            handleClose();
                        }
                    }, /*#__PURE__*/ _react["default"].createElement(_FormControlLabel["default"], {
                        value: value,
                        classes: {
                            label: windowViewType === value ? classes.selectedLabel : classes.label
                        },
                        control: /*#__PURE__*/ _react["default"].createElement(Icon, {
                            color: windowViewType === value ? 'secondary' : undefined
                        }),
                        label: t(value),
                        labelPlacement: "bottom"
                    })));
                };
                if (viewTypes.length === 0) return null;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_ListSubheader["default"], {
                    role: "presentation",
                    disableSticky: true,
                    tabIndex: "-1"
                }, t('view')), viewTypes.map(function(value) {
                    return menuItem({
                        Icon: iconMap[value],
                        value: value
                    });
                })));
            }
        }
    ]);
    return WindowViewSettings2;
}(_react.Component);
exports.WindowViewSettings = WindowViewSettings1;
WindowViewSettings1.defaultProps = {
    handleClose: function handleClose() {
    },
    t: function t(key) {
        return key;
    },
    viewTypes: []
};

},{"react":"3b2NM","@material-ui/core/FormControlLabel":"4sGMv","@material-ui/core/MenuItem":"3pvH5","@material-ui/core/ListSubheader":"505Dd","@material-ui/icons/CropOriginalSharp":"4vxDk","@material-ui/icons/ViewColumn":"53507","./icons/BookViewIcon":"6CSCE","./icons/GalleryViewIcon":"4mLqY"}],"4vxDk":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M21 3H3v18h18V3zm-2 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"
}), 'CropOriginalSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"53507":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"
}), 'ViewColumn');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"6CSCE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = BookViewIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * BookViewIcon ~
*/ function BookViewIcon(props) {
    return(/*#__PURE__*/ _react["default"].createElement(_SvgIcon["default"], props, /*#__PURE__*/ _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M1,4V21H22.853V4.1ZM3,19V6h8V19Zm18,0H13V6h8ZM14,9.5h6V11H14ZM14,12h6v1.5H14Zm0,2.5h6V16H14Z"
    }))));
}

},{"react":"3b2NM","@material-ui/core/SvgIcon":"2ubNB"}],"4mLqY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = GalleryViewIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * GalleryViewIcon ~
 */ function GalleryViewIcon(props) {
    return(/*#__PURE__*/ _react["default"].createElement(_SvgIcon["default"], props, /*#__PURE__*/ _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M19.974,2H2V19.974H19.974V2ZM7.392,18.177H3.8V14.582H7.392Zm0-5.392H3.8V9.19H7.392Zm0-5.392H3.8V3.8H7.392Zm5.392,10.785H9.19V14.582h3.595Zm0-5.392H9.19V9.19h3.595Zm0-5.392H9.19V3.8h3.595Zm5.392,10.785H14.582V14.582h3.595Zm0-5.392H14.582V9.19h3.595Zm0-5.392H14.582V3.8h3.595Z",
        transform: "translate(1 1)"
    }))));
}

},{"react":"3b2NM","@material-ui/core/SvgIcon":"2ubNB"}],"1rAgz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = WindowOptionsIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * WindowMinIcon ~
*/ function WindowOptionsIcon(props) {
    return(/*#__PURE__*/ _react["default"].createElement(_SvgIcon["default"], props, /*#__PURE__*/ _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M0,0H24V24H0Z",
        fill: "none"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M24.852,17.981,3,18V15.945l21.852-.019Z",
        transform: "translate(-2 5)"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M1,4V21H22.853V4.1ZM3,19V6h8V19Zm18,0H13V6h8Z",
        transform: "translate(0 -2)"
    }))));
}

},{"react":"3b2NM","@material-ui/core/SvgIcon":"2ubNB"}],"5ZPZ6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var _WindowTopBarPluginArea = require("../components/WindowTopBarPluginArea");
/**
 */ var styles = {
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(null, null), _withPlugins.withPlugins('WindowTopBarPluginArea'));
var _default = enhance(_WindowTopBarPluginArea.WindowTopBarPluginArea);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core":"6DoV9","../extend/withPlugins":"5PNwJ","../components/WindowTopBarPluginArea":"1ZvTF"}],"1ZvTF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowTopBarPluginArea = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PluginHook = require("./PluginHook");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 *
 */ var WindowTopBarPluginArea1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowTopBarPluginArea2, _Component);
    var _super = _createSuper(WindowTopBarPluginArea2);
    function WindowTopBarPluginArea2() {
        _classCallCheck(this, WindowTopBarPluginArea2);
        return _super.apply(this, arguments);
    }
    _createClass(WindowTopBarPluginArea2, [
        {
            key: "render",
            value: /** */ function render() {
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, this.props)));
            }
        }
    ]);
    return WindowTopBarPluginArea2;
}(_react.Component);
exports.WindowTopBarPluginArea = WindowTopBarPluginArea1;

},{"react":"3b2NM","./PluginHook":"6m4WL"}],"MKxuI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var _WindowTopBarPluginMenu = require("../components/WindowTopBarPluginMenu");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowTopBarPluginMenu
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        containerId: _selectors.getContainerId(state)
    };
};
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */ var styles = function styles1(theme) {
    return {
        ctrlBtnSelected: {
            backgroundColor: theme.palette.action.selected
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(mapStateToProps, null), _withPlugins.withPlugins('WindowTopBarPluginMenu'));
var _default = enhance(_WindowTopBarPluginMenu.WindowTopBarPluginMenu);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core":"6DoV9","../extend/withPlugins":"5PNwJ","../components/WindowTopBarPluginMenu":"5C6po","../state/selectors":"5Trnc"}],"5C6po":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowTopBarPluginMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MoreVertSharp = _interopRequireDefault(require("@material-ui/icons/MoreVertSharp"));
var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _PluginHook = require("./PluginHook");
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 *
 */ var WindowTopBarPluginMenu1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowTopBarPluginMenu2, _Component);
    var _super = _createSuper(WindowTopBarPluginMenu2);
    /**
   * constructor -
   */ function WindowTopBarPluginMenu2(props) {
        var _this;
        _classCallCheck(this, WindowTopBarPluginMenu2);
        _this = _super.call(this, props);
        _this.state = {
            anchorEl: null
        };
        _this.handleMenuClick = _this.handleMenuClick.bind(_assertThisInitialized(_this));
        _this.handleMenuClose = _this.handleMenuClose.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * Set the anchorEl state to the click target
   */ _createClass(WindowTopBarPluginMenu2, [
        {
            key: "handleMenuClick",
            value: function handleMenuClick(event) {
                this.setState({
                    anchorEl: event.currentTarget
                });
            }
        },
        {
            key: "handleMenuClose",
            value: function handleMenuClose() {
                this.setState({
                    anchorEl: null
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props = this.props, classes = _this$props.classes, containerId = _this$props.containerId, PluginComponents = _this$props.PluginComponents, t = _this$props.t, windowId = _this$props.windowId, menuIcon = _this$props.menuIcon;
                var anchorEl = this.state.anchorEl;
                if (!PluginComponents || PluginComponents.length === 0) return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null));
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-haspopup": "true",
                    "aria-label": t('windowPluginMenu'),
                    "aria-owns": anchorEl ? "window-plugin-menu_".concat(windowId) : undefined,
                    className: anchorEl ? classes.ctrlBtnSelected : null,
                    onClick: this.handleMenuClick
                }, menuIcon), /*#__PURE__*/ _react["default"].createElement(_Menu["default"], {
                    id: "window-plugin-menu_".concat(windowId),
                    container: document.querySelector("#".concat(containerId, " .").concat(_cssNs["default"]('viewer'))),
                    anchorEl: anchorEl,
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'bottom'
                    },
                    transformOrigin: {
                        horizontal: 'right',
                        vertical: 'top'
                    },
                    getContentAnchorEl: null,
                    open: Boolean(anchorEl),
                    onClose: function onClose() {
                        return _this2.handleMenuClose();
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, Object.assign({
                    handleClose: function handleClose() {
                        return _this2.handleMenuClose();
                    }
                }, this.props)))));
            }
        }
    ]);
    return WindowTopBarPluginMenu2;
}(_react.Component);
exports.WindowTopBarPluginMenu = WindowTopBarPluginMenu1;
WindowTopBarPluginMenu1.defaultProps = {
    classes: {
    },
    menuIcon: /*#__PURE__*/ _react["default"].createElement(_MoreVertSharp["default"], null),
    PluginComponents: []
};

},{"react":"3b2NM","@material-ui/icons/MoreVertSharp":"Rnmey","@material-ui/core/Menu":"3xurJ","../containers/MiradorMenuButton":"4qUlt","./PluginHook":"6m4WL","../config/css-ns":"6ABf8"}],"Rnmey":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreVertSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"4NoeZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _WindowTopBarTitle = require("../components/WindowTopBarTitle");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
/** mapStateToProps */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    return {
        error: _selectors.getManifestStatus(state, {
            windowId: windowId
        }).error,
        hideWindowTitle: _selectors.getWindowConfig(state, {
            windowId: windowId
        }).hideWindowTitle,
        isFetching: _selectors.getManifestStatus(state, {
            windowId: windowId
        }).isFetching,
        manifestTitle: _selectors.getManifestTitle(state, {
            windowId: windowId
        })
    };
};
/**
 * @param theme
 */ var styles = function styles1(theme) {
    return {
        title: _objectSpread(_objectSpread({
        }, theme.typography.h6), {
        }, {
            flexGrow: 1,
            paddingLeft: theme.spacing(0.5)
        })
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(mapStateToProps, null), _withPlugins.withPlugins('WindowTopBarTitle'));
var _default = enhance(_WindowTopBarTitle.WindowTopBarTitle);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core":"6DoV9","../extend/withPlugins":"5PNwJ","../state/selectors":"5Trnc","../components/WindowTopBarTitle":"2lwde"}],"2lwde":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowTopBarTitle = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Skeleton = _interopRequireDefault(require("@material-ui/lab/Skeleton"));
var _ErrorOutlineSharp = _interopRequireDefault(require("@material-ui/icons/ErrorOutlineSharp"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * WindowTopBarTitle
 */ var WindowTopBarTitle1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowTopBarTitle2, _Component);
    var _super = _createSuper(WindowTopBarTitle2);
    function WindowTopBarTitle2() {
        _classCallCheck(this, WindowTopBarTitle2);
        return _super.apply(this, arguments);
    }
    _createClass(WindowTopBarTitle2, [
        {
            key: "render",
            value: /**
     * render
     * @return
     */ function render() {
                var _this$props = this.props, classes = _this$props.classes, error = _this$props.error, hideWindowTitle = _this$props.hideWindowTitle, isFetching = _this$props.isFetching, manifestTitle = _this$props.manifestTitle;
                /** */ var TitleTypography = function TitleTypography1(props) {
                    return(/*#__PURE__*/ _react["default"].createElement(_Typography["default"], Object.assign({
                        variant: "h2",
                        noWrap: true,
                        color: "inherit",
                        className: classes.title
                    }, props), props.children));
                };
                var title = null;
                if (isFetching) title = /*#__PURE__*/ _react["default"].createElement(TitleTypography, null, /*#__PURE__*/ _react["default"].createElement(_Skeleton["default"], {
                    variant: "text"
                }));
                else if (error) title = /*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_ErrorOutlineSharp["default"], {
                    color: "error"
                }), /*#__PURE__*/ _react["default"].createElement(TitleTypography, {
                    color: "textSecondary"
                }, error));
                else if (hideWindowTitle) title = /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.title
                });
                else title = /*#__PURE__*/ _react["default"].createElement(TitleTypography, null, manifestTitle);
                return title;
            }
        }
    ]);
    return WindowTopBarTitle2;
}(_react.Component);
exports.WindowTopBarTitle = WindowTopBarTitle1;
WindowTopBarTitle1.defaultProps = {
    error: null,
    hideWindowTitle: false,
    isFetching: false,
    manifestTitle: ''
};

},{"react":"3b2NM","@material-ui/core/Typography":"3wcF9","@material-ui/lab/Skeleton":"5mlkx","@material-ui/icons/ErrorOutlineSharp":"4CXaR"}],"4CXaR":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutlineSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"5tj1X":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = WindowMaxIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * WindowMaxIcon ~
*/ function WindowMaxIcon(props) {
    return(/*#__PURE__*/ _react["default"].createElement(_SvgIcon["default"], props, /*#__PURE__*/ _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M7,14H5v5h5V17H7Zm7-9V7h3v3h2V5Z"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M22.517,1.524H1.736V22.37H22.517Zm-2,18.845H3.736V3.524H20.517Z"
    }))));
}

},{"react":"3b2NM","@material-ui/core/SvgIcon":"2ubNB"}],"6OJ0u":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = WindowMinIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * WindowMinIcon ~
*/ function WindowMinIcon(props) {
    return(/*#__PURE__*/ _react["default"].createElement(_SvgIcon["default"], props, /*#__PURE__*/ _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M5,16H8v3h2V14H5ZM16,8V5H14v5h5V8Z"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M22.517,1.524H1.736V22.37H22.517Zm-2,18.845H3.736V3.524H20.517Z"
    }))));
}

},{"react":"3b2NM","@material-ui/core/SvgIcon":"2ubNB"}],"dPxzb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _PrimaryWindow = require("../components/PrimaryWindow");
/** */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    var manifestoInstance = _selectors.getManifestoInstance(state, {
        windowId: windowId
    });
    return {
        audioResources: _selectors.getVisibleCanvasAudioResources(state, {
            windowId: windowId
        }) || [],
        isCollection: manifestoInstance && manifestoInstance.isCollection(),
        isCollectionDialogVisible: _selectors.getWindow(state, {
            windowId: windowId
        }).collectionDialogOn,
        videoResources: _selectors.getVisibleCanvasVideoResources(state, {
            windowId: windowId
        }) || []
    };
};
var styles = {
    primaryWindow: {
        display: 'flex',
        flex: 1,
        position: 'relative'
    }
};
var enhance = _redux.compose(_styles.withStyles(styles), _reactRedux.connect(mapStateToProps, null), _withPlugins.withPlugins('PrimaryWindow'));
var _default = enhance(_PrimaryWindow.PrimaryWindow);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../state/selectors":"5Trnc","../components/PrimaryWindow":"1cRMj"}],"1cRMj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrimaryWindow = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _WindowSideBar = _interopRequireDefault(require("../containers/WindowSideBar"));
var _CompanionArea = _interopRequireDefault(require("../containers/CompanionArea"));
var _CollectionDialog = _interopRequireDefault(require("../containers/CollectionDialog"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
var AudioViewer = /*#__PURE__*/ _react.lazy(function() {
    return Promise.resolve().then(function() {
        return require('../containers/AudioViewer');
    }).then(function(res) {
        return _interopRequireWildcard(res);
    });
});
var GalleryView = /*#__PURE__*/ _react.lazy(function() {
    return Promise.resolve().then(function() {
        return require('../containers/GalleryView');
    }).then(function(res) {
        return _interopRequireWildcard(res);
    });
});
var SelectCollection = /*#__PURE__*/ _react.lazy(function() {
    return Promise.resolve().then(function() {
        return require('../containers/SelectCollection');
    }).then(function(res) {
        return _interopRequireWildcard(res);
    });
});
var WindowViewer = /*#__PURE__*/ _react.lazy(function() {
    return Promise.resolve().then(function() {
        return require('../containers/WindowViewer');
    }).then(function(res) {
        return _interopRequireWildcard(res);
    });
});
var VideoViewer = /*#__PURE__*/ _react.lazy(function() {
    return Promise.resolve().then(function() {
        return require('../containers/VideoViewer');
    }).then(function(res) {
        return _interopRequireWildcard(res);
    });
});
GalleryView.displayName = 'GalleryView';
SelectCollection.displayName = 'SelectCollection';
WindowViewer.displayName = 'WindowViewer';
/**
 * PrimaryWindow - component that renders the primary content of a Mirador
 * window. Right now this differentiates between a Image, Video, or Audio viewer.
 */ var PrimaryWindow1 = /*#__PURE__*/ function(_Component) {
    _inherits(PrimaryWindow2, _Component);
    var _super = _createSuper(PrimaryWindow2);
    function PrimaryWindow2() {
        _classCallCheck(this, PrimaryWindow2);
        return _super.apply(this, arguments);
    }
    _createClass(PrimaryWindow2, [
        {
            key: "renderViewer",
            value: /**
     * renderViewer - logic used to determine what type of view to show
     *
     * @return {(String|null)}
     */ function renderViewer() {
                var _this$props = this.props, audioResources = _this$props.audioResources, isCollection = _this$props.isCollection, isFetching = _this$props.isFetching, videoResources = _this$props.videoResources, view = _this$props.view, windowId = _this$props.windowId;
                if (isCollection) return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(SelectCollection, {
                    windowId: windowId
                })));
                if (isFetching === false) {
                    if (view === 'gallery') return(/*#__PURE__*/ _react["default"].createElement(GalleryView, {
                        windowId: windowId
                    }));
                    if (videoResources.length > 0) return(/*#__PURE__*/ _react["default"].createElement(VideoViewer, {
                        windowId: windowId
                    }));
                    if (audioResources.length > 0) return(/*#__PURE__*/ _react["default"].createElement(AudioViewer, {
                        windowId: windowId
                    }));
                    return(/*#__PURE__*/ _react["default"].createElement(WindowViewer, {
                        windowId: windowId
                    }));
                }
                return null;
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props2 = this.props, isCollectionDialogVisible = _this$props2.isCollectionDialogVisible, windowId = _this$props2.windowId, classes = _this$props2.classes, children = _this$props2.children;
                return(/*#__PURE__*/ _react["default"].createElement("div", {
                    className: _classnames["default"](_cssNs["default"]('primary-window'), classes.primaryWindow)
                }, /*#__PURE__*/ _react["default"].createElement(_WindowSideBar["default"], {
                    windowId: windowId
                }), /*#__PURE__*/ _react["default"].createElement(_CompanionArea["default"], {
                    windowId: windowId,
                    position: "left"
                }), isCollectionDialogVisible && /*#__PURE__*/ _react["default"].createElement(_CollectionDialog["default"], {
                    windowId: windowId
                }), /*#__PURE__*/ _react["default"].createElement(_react.Suspense, {
                    fallback: /*#__PURE__*/ _react["default"].createElement("div", null)
                }, children || this.renderViewer())));
            }
        }
    ]);
    return PrimaryWindow2;
}(_react.Component);
exports.PrimaryWindow = PrimaryWindow1;
PrimaryWindow1.defaultProps = {
    audioResources: [],
    children: undefined,
    isCollection: false,
    isCollectionDialogVisible: false,
    isFetching: false,
    videoResources: [],
    view: undefined
};

},{"react":"3b2NM","classnames":"5aJRc","../containers/WindowSideBar":"30fV5","../containers/CompanionArea":"1tXy6","../containers/CollectionDialog":"devsv","../config/css-ns":"6ABf8","../containers/AudioViewer":"420KE","../containers/GalleryView":"1ttq5","../containers/SelectCollection":"7EcbG","../containers/WindowViewer":"3hyTS","../containers/VideoViewer":"1JvhW"}],"30fV5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _core = require("@material-ui/core");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _WindowSideBar = require("../components/WindowSideBar");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBar
 * @private
 */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    return {
        direction: _selectors.getThemeDirection(state),
        sideBarOpen: (_selectors.getWindow(state, {
            windowId: windowId
        }) || {
        }).sideBarOpen,
        sideBarPanel: (_selectors.getWindow(state, {
            windowId: windowId
        }) || {
        }).sideBarPanel
    };
};
/**
 *
 * @param theme
 * @returns {{toolbar: CSSProperties | toolbar | {minHeight}, grow: {flexGrow: number},
 * drawer: {overflowX: string, left: number, flexShrink: number, width: number, height: string}}}
 */ var styles = function styles1(theme) {
    return {
        drawer: {
            flexShrink: 0,
            height: '100%',
            order: -1000,
            zIndex: theme.zIndex.appBar - 1
        },
        grow: {
            flexGrow: 1
        },
        paper: {
            borderInlineEnd: "1px solid ".concat(theme.palette.divider),
            overflowX: 'hidden',
            width: 48
        },
        toolbar: theme.mixins.toolbar
    };
};
var enhance = _redux.compose(_core.withStyles(styles), _reactI18next.withTranslation(), _reactRedux.connect(mapStateToProps, null), _withPlugins.withPlugins('WindowSideBar'));
var _default = enhance(_WindowSideBar.WindowSideBar);
exports["default"] = _default;

},{"react-redux":"47SrY","redux":"7panR","@material-ui/core":"6DoV9","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../components/WindowSideBar":"qNlmD","../state/selectors":"5Trnc"}],"qNlmD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowSideBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));
var _WindowSideBarButtons = _interopRequireDefault(require("../containers/WindowSideBarButtons"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * WindowSideBar
 */ var WindowSideBar1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowSideBar2, _Component);
    var _super = _createSuper(WindowSideBar2);
    function WindowSideBar2() {
        _classCallCheck(this, WindowSideBar2);
        return _super.apply(this, arguments);
    }
    _createClass(WindowSideBar2, [
        {
            key: "render",
            value: /**
     * render
     * @return
     */ function render() {
                var _this$props = this.props, classes = _this$props.classes, direction = _this$props.direction, t = _this$props.t, windowId = _this$props.windowId, sideBarOpen = _this$props.sideBarOpen;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_Drawer["default"], {
                    variant: "persistent",
                    className: _classnames["default"](classes.drawer),
                    classes: {
                        paper: _classnames["default"](classes.paper)
                    },
                    anchor: direction === 'rtl' ? 'right' : 'left',
                    PaperProps: {
                        'aria-label': t('sidebarPanelsNavigation'),
                        component: 'nav',
                        style: {
                            height: '100%',
                            position: 'relative'
                        }
                    },
                    SlideProps: {
                        direction: direction === 'rtl' ? 'left' : 'right',
                        mountOnEnter: true,
                        unmountOnExit: true
                    },
                    open: sideBarOpen
                }, /*#__PURE__*/ _react["default"].createElement(_WindowSideBarButtons["default"], {
                    windowId: windowId
                }))));
            }
        }
    ]);
    return WindowSideBar2;
}(_react.Component);
exports.WindowSideBar = WindowSideBar1;
WindowSideBar1.defaultProps = {
    sideBarOpen: false
};

},{"react":"3b2NM","classnames":"5aJRc","@material-ui/core/Drawer":"7l2O8","../containers/WindowSideBarButtons":"1mN13"}],"1mN13":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _core = require("@material-ui/core");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _MiradorCanvas = _interopRequireDefault(require("../lib/MiradorCanvas"));
var _selectors = require("../state/selectors");
var _WindowSideBarButtons = require("../components/WindowSideBarButtons");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WindowSideButtons
 * @private
 */ var mapDispatchToProps = function mapDispatchToProps1(dispatch, _ref) {
    var windowId = _ref.windowId;
    return {
        addCompanionWindow: function addCompanionWindow(content) {
            return dispatch(actions.addOrUpdateCompanionWindow(windowId, {
                content: content,
                position: 'left'
            }));
        }
    };
};
/** */ function hasLayers(canvases) {
    return canvases && canvases.some(function(c) {
        return new _MiradorCanvas["default"](c).imageResources.length > 1;
    });
}
/** */ function hasAnnotations(canvases) {
    return canvases && canvases.some(function(c) {
        var canvas = new _MiradorCanvas["default"](c);
        return canvas.annotationListUris.length > 0 || canvas.canvasAnnotationPages.length > 0;
    });
}
/**
 * mapStateToProps - used to hook up connect to state
 * @memberof WindowSideButtons
 * @private
 */ var mapStateToProps = function mapStateToProps1(state, _ref2) {
    var windowId = _ref2.windowId;
    return {
        hasAnnotations: _selectors.getAnnotationResourcesByMotivation(state, {
            windowId: windowId
        }).length > 0,
        hasAnyAnnotations: hasAnnotations(_selectors.getCanvases(state, {
            windowId: windowId
        })),
        hasAnyLayers: hasLayers(_selectors.getCanvases(state, {
            windowId: windowId
        })),
        hasCurrentLayers: hasLayers(_selectors.getVisibleCanvases(state, {
            windowId: windowId
        })),
        hasSearchResults: _selectors.getWindow(state, {
            windowId: windowId
        }).suggestedSearches || _selectors.getSearchQuery(state, {
            companionWindowId: (_selectors.getCompanionWindowsForPosition(state, {
                position: 'left',
                windowId: windowId
            })[0] || {
            }).id,
            windowId: windowId
        }),
        hasSearchService: _selectors.getManifestSearchService(state, {
            windowId: windowId
        }) !== null,
        panels: _selectors.getWindowConfig(state, {
            windowId: windowId
        }).panels,
        sideBarPanel: (_selectors.getCompanionWindowsForPosition(state, {
            position: 'left',
            windowId: windowId
        })[0] || {
        }).content
    };
};
/** */ var style = function style1(theme) {
    return {
        badge: {
            backgroundColor: theme.palette.notification.main
        },
        tab: {
            '&:active': {
                backgroundColor: theme.palette.action.active
            },
            '&:focus': {
                '@media (hover: none)': {
                    backgroundColor: 'transparent'
                },
                backgroundColor: theme.palette.action.hover,
                textDecoration: 'none'
            },
            '&:hover': {
                '@media (hover: none)': {
                    backgroundColor: 'transparent'
                },
                backgroundColor: theme.palette.action.hover,
                textDecoration: 'none'
            },
            borderRight: '2px solid transparent',
            minWidth: 'auto'
        },
        tabSelected: {
            borderRight: "2px solid ".concat(theme.palette.primary.main)
        },
        tabsFlexContainer: {
            flexDirection: 'column'
        },
        tabsIndicator: {
            display: 'none'
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(style), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('WindowSideBarButtons'));
var _default = enhance(_WindowSideBarButtons.WindowSideBarButtons);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","@material-ui/core":"6DoV9","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../lib/MiradorCanvas":"ZawEC","../state/selectors":"5Trnc","../components/WindowSideBarButtons":"3Zfcl"}],"3Zfcl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowSideBarButtons = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));
var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));
var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));
var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));
var _InfoSharp = _interopRequireDefault(require("@material-ui/icons/InfoSharp"));
var _CommentSharp = _interopRequireDefault(require("@material-ui/icons/CommentSharp"));
var _CopyrightSharp = _interopRequireDefault(require("@material-ui/icons/CopyrightSharp"));
var _LayersSharp = _interopRequireDefault(require("@material-ui/icons/LayersSharp"));
var _SearchSharp = _interopRequireDefault(require("@material-ui/icons/SearchSharp"));
var _CanvasIndexIcon = _interopRequireDefault(require("./icons/CanvasIndexIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 *
 */ var WindowSideBarButtons1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowSideBarButtons2, _Component);
    var _super = _createSuper(WindowSideBarButtons2);
    /** */ function WindowSideBarButtons2(props) {
        var _this;
        _classCallCheck(this, WindowSideBarButtons2);
        _this = _super.call(this, props);
        _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * @param {object} event the change event
   * @param {string} value the tab's value
  */ _createClass(WindowSideBarButtons2, [
        {
            key: "handleChange",
            value: function handleChange(event, value) {
                var addCompanionWindow = this.props.addCompanionWindow;
                addCompanionWindow(value);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props = this.props, classes = _this$props.classes, hasAnnotations = _this$props.hasAnnotations, hasAnyAnnotations = _this$props.hasAnyAnnotations, hasAnyLayers = _this$props.hasAnyLayers, hasCurrentLayers = _this$props.hasCurrentLayers, hasSearchResults = _this$props.hasSearchResults, hasSearchService = _this$props.hasSearchService, panels = _this$props.panels, PluginComponents = _this$props.PluginComponents, sideBarPanel = _this$props.sideBarPanel, t = _this$props.t;
                /** */ var TabButton = function TabButton1(props) {
                    return(/*#__PURE__*/ _react["default"].createElement(_Tooltip["default"], {
                        title: t('openCompanionWindow', {
                            context: props.value
                        })
                    }, /*#__PURE__*/ _react["default"].createElement(_Tab["default"], Object.assign({
                    }, props, {
                        classes: {
                            root: classes.tab,
                            selected: classes.tabSelected
                        },
                        "aria-label": t('openCompanionWindow', {
                            context: props.value
                        }),
                        disableRipple: true,
                        onKeyUp: _this2.handleKeyUp
                    }))));
                };
                return(/*#__PURE__*/ _react["default"].createElement(_Tabs["default"], {
                    classes: {
                        flexContainer: classes.tabsFlexContainer,
                        indicator: classes.tabsIndicator
                    },
                    value: sideBarPanel === 'closed' ? false : sideBarPanel,
                    onChange: this.handleChange,
                    variant: "fullWidth",
                    indicatorColor: "primary",
                    textColor: "primary",
                    orientation: "vertical",
                    "aria-orientation": "vertical",
                    "aria-label": t('sidebarPanelsNavigation')
                }, panels.info && /*#__PURE__*/ _react["default"].createElement(TabButton, {
                    value: "info",
                    icon: /*#__PURE__*/ _react["default"].createElement(_InfoSharp["default"], null)
                }), panels.attribution && /*#__PURE__*/ _react["default"].createElement(TabButton, {
                    value: "attribution",
                    icon: /*#__PURE__*/ _react["default"].createElement(_CopyrightSharp["default"], null)
                }), panels.canvas && /*#__PURE__*/ _react["default"].createElement(TabButton, {
                    value: "canvas",
                    icon: /*#__PURE__*/ _react["default"].createElement(_CanvasIndexIcon["default"], null)
                }), panels.annotations && (hasAnnotations || hasAnyAnnotations) && /*#__PURE__*/ _react["default"].createElement(TabButton, {
                    value: "annotations",
                    icon: /*#__PURE__*/ _react["default"].createElement(_Badge["default"], {
                        classes: {
                            badge: classes.badge
                        },
                        invisible: !hasAnnotations,
                        variant: "dot"
                    }, /*#__PURE__*/ _react["default"].createElement(_CommentSharp["default"], null))
                }), panels.search && hasSearchService && /*#__PURE__*/ _react["default"].createElement(TabButton, {
                    value: "search",
                    icon: /*#__PURE__*/ _react["default"].createElement(_Badge["default"], {
                        classes: {
                            badge: classes.badge
                        },
                        invisible: !hasSearchResults,
                        variant: "dot"
                    }, /*#__PURE__*/ _react["default"].createElement(_SearchSharp["default"], null))
                }), panels.layers && hasAnyLayers && /*#__PURE__*/ _react["default"].createElement(TabButton, {
                    value: "layers",
                    icon: /*#__PURE__*/ _react["default"].createElement(_Badge["default"], {
                        classes: {
                            badge: classes.badge
                        },
                        invisible: !hasCurrentLayers,
                        variant: "dot"
                    }, /*#__PURE__*/ _react["default"].createElement(_LayersSharp["default"], null))
                }), PluginComponents && PluginComponents.map(function(PluginComponent) {
                    return(/*#__PURE__*/ _react["default"].createElement(TabButton, {
                        key: PluginComponent.value,
                        value: PluginComponent.value,
                        icon: /*#__PURE__*/ _react["default"].createElement(PluginComponent, null)
                    }));
                })));
            }
        }
    ]);
    return WindowSideBarButtons2;
}(_react.Component);
exports.WindowSideBarButtons = WindowSideBarButtons1;
WindowSideBarButtons1.defaultProps = {
    classes: {
    },
    hasAnnotations: false,
    hasAnyAnnotations: false,
    hasAnyLayers: false,
    hasCurrentLayers: false,
    hasSearchResults: false,
    hasSearchService: false,
    panels: [],
    PluginComponents: null,
    sideBarPanel: 'closed',
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","@material-ui/core/Badge":"5IK52","@material-ui/core/Tabs":"DcRvB","@material-ui/core/Tab":"2OA3N","@material-ui/core/Tooltip":"2icXo","@material-ui/icons/InfoSharp":"1C3x0","@material-ui/icons/CommentSharp":"2cY4S","@material-ui/icons/CopyrightSharp":"7dvjt","@material-ui/icons/LayersSharp":"1iWpG","@material-ui/icons/SearchSharp":"68kAI","./icons/CanvasIndexIcon":"24UMK"}],"1C3x0":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
}), 'InfoSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"2cY4S":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M21.99 2H2v16h16l4 4-.01-20zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
}), 'CommentSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"7dvjt":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91c.48.22 1.05.34 1.7.34.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'CopyrightSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"1iWpG":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"
}), 'LayersSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"24UMK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = CanvasIndexIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * Render the canvas index svg
 */ function CanvasIndexIcon(props) {
    return(/*#__PURE__*/ _react["default"].createElement(_SvgIcon["default"], props, /*#__PURE__*/ _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M6.924,21H21V19H6.924ZM3,17H21V15H3Zm3.924-4H21V11H6.924Zm0-4H21V7H6.924ZM3,3V5H21V3Z"
    }))));
}

},{"react":"3b2NM","@material-ui/core/SvgIcon":"2ubNB"}],"1tXy6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _core = require("@material-ui/core");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var actions = _interopRequireWildcard(require("../state/actions"));
var _CompanionArea = require("../components/CompanionArea");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/** */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId, position = _ref.position;
    return {
        companionAreaOpen: _selectors.getCompanionAreaVisibility(state, {
            position: position,
            windowId: windowId
        }),
        companionWindowIds: _selectors.getCompanionWindowIdsForPosition(state, {
            position: position,
            windowId: windowId
        }),
        direction: _selectors.getThemeDirection(state),
        sideBarOpen: (_selectors.getWindow(state, {
            windowId: windowId
        }) || {
        }).sideBarOpen
    };
};
var mapDispatchToProps = {
    setCompanionAreaOpen: actions.setCompanionAreaOpen
};
/** */ var styles = function styles1(theme) {
    return {
        horizontal: {
            flexDirection: 'column',
            width: '100%'
        },
        left: {
            minWidth: 235
        },
        root: {
            display: 'flex',
            minHeight: 0,
            position: 'relative',
            zIndex: theme.zIndex.appBar - 2
        },
        toggle: {
            backgroundColor: theme.palette.background.paper,
            border: "1px solid ".concat(theme.palette.shades.dark),
            borderRadius: 0,
            height: '48px',
            left: '100%',
            marginTop: '1rem',
            padding: 2,
            position: 'absolute',
            width: '23px',
            zIndex: theme.zIndex.drawer
        },
        toggleButton: {
            marginBottom: 12,
            marginTop: 12,
            padding: 0
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('CompanionArea'));
var _default = enhance(_CompanionArea.CompanionArea);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","@material-ui/core":"6DoV9","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../state/selectors":"5Trnc","../state/actions":"4t2dD","../components/CompanionArea":"33t4w"}],"33t4w":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CompanionArea = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));
var _ArrowLeftSharp = _interopRequireDefault(require("@material-ui/icons/ArrowLeftSharp"));
var _ArrowRightSharp = _interopRequireDefault(require("@material-ui/icons/ArrowRightSharp"));
var _CompanionWindowFactory = _interopRequireDefault(require("../containers/CompanionWindowFactory"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/** */ var CompanionArea1 = /*#__PURE__*/ function(_Component) {
    _inherits(CompanionArea2, _Component);
    var _super = _createSuper(CompanionArea2);
    function CompanionArea2() {
        _classCallCheck(this, CompanionArea2);
        return _super.apply(this, arguments);
    }
    _createClass(CompanionArea2, [
        {
            key: "areaLayoutClass",
            value: /** */ function areaLayoutClass() {
                var _this$props = this.props, classes = _this$props.classes, position = _this$props.position;
                return position === 'bottom' || position === 'far-bottom' ? classes.horizontal : null;
            }
        },
        {
            key: "collapseIcon",
            value: function collapseIcon() {
                var _this$props2 = this.props, companionAreaOpen = _this$props2.companionAreaOpen, direction = _this$props2.direction;
                if (direction === 'rtl') {
                    if (companionAreaOpen) return(/*#__PURE__*/ _react["default"].createElement(_ArrowRightSharp["default"], null));
                    return(/*#__PURE__*/ _react["default"].createElement(_ArrowLeftSharp["default"], null));
                }
                if (companionAreaOpen) return(/*#__PURE__*/ _react["default"].createElement(_ArrowLeftSharp["default"], null));
                return(/*#__PURE__*/ _react["default"].createElement(_ArrowRightSharp["default"], null));
            }
        },
        {
            key: "slideDirection",
            value: function slideDirection() {
                var _this$props3 = this.props, direction = _this$props3.direction, position = _this$props3.position;
                var defaultPosition = direction === 'rtl' ? 'left' : 'right';
                var oppositePosition = direction === 'rtl' ? 'right' : 'left';
                switch(position){
                    case 'right':
                    case 'far-right':
                        return oppositePosition;
                    case 'bottom':
                    case 'far-bottom':
                        return 'up';
                    default:
                        return defaultPosition;
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props4 = this.props, classes = _this$props4.classes, companionWindowIds = _this$props4.companionWindowIds, companionAreaOpen = _this$props4.companionAreaOpen, setCompanionAreaOpen = _this$props4.setCompanionAreaOpen, position = _this$props4.position, sideBarOpen = _this$props4.sideBarOpen, t = _this$props4.t, windowId = _this$props4.windowId;
                return(/*#__PURE__*/ _react["default"].createElement("div", {
                    className: [
                        classes.root,
                        this.areaLayoutClass(),
                        _cssNs["default"]("companion-area-".concat(position))
                    ].join(' ')
                }, /*#__PURE__*/ _react["default"].createElement(_Slide["default"], {
                    "in": companionAreaOpen,
                    direction: this.slideDirection()
                }, /*#__PURE__*/ _react["default"].createElement("div", {
                    className: [
                        _cssNs["default"]('companion-windows'),
                        companionWindowIds.length > 0 && classes[position],
                        this.areaLayoutClass()
                    ].join(' '),
                    style: {
                        display: companionAreaOpen ? 'flex' : 'none'
                    }
                }, companionWindowIds.map(function(id) {
                    return(/*#__PURE__*/ _react["default"].createElement(_CompanionWindowFactory["default"], {
                        id: id,
                        key: id,
                        windowId: windowId
                    }));
                }))), setCompanionAreaOpen && position === 'left' && sideBarOpen && companionWindowIds.length > 0 && /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.toggle
                }, /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-expanded": companionAreaOpen,
                    "aria-label": companionAreaOpen ? t('collapseSidePanel') : t('expandSidePanel'),
                    className: classes.toggleButton,
                    key: companionAreaOpen ? 'collapse' : 'expand',
                    onClick: function onClick() {
                        setCompanionAreaOpen(windowId, !companionAreaOpen);
                    },
                    TooltipProps: {
                        placement: 'right'
                    }
                }, this.collapseIcon()))));
            }
        }
    ]);
    return CompanionArea2;
}(_react.Component);
exports.CompanionArea = CompanionArea1;
CompanionArea1.defaultProps = {
    classes: {
    },
    setCompanionAreaOpen: function setCompanionAreaOpen() {
    },
    sideBarOpen: false
};

},{"react":"3b2NM","@material-ui/core/Slide":"2GQOF","@material-ui/icons/ArrowLeftSharp":"61VUS","@material-ui/icons/ArrowRightSharp":"VtkOJ","../containers/CompanionWindowFactory":"2vLpk","../containers/MiradorMenuButton":"4qUlt","../config/css-ns":"6ABf8"}],"61VUS":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M14 7l-5 5 5 5V7z"
}), 'ArrowLeftSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"VtkOJ":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M10 17l5-5-5-5v10z"
}), 'ArrowRightSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"2vLpk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _CompanionWindowFactory = require("../components/CompanionWindowFactory");
/**
 * mapStateToProps - to hook up connect
 * @memberof CompanionWindow
 * @private
 */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var id = _ref.id;
    var companionWindow = _selectors.getCompanionWindow(state, {
        companionWindowId: id
    });
    return {
        content: companionWindow.content,
        id: id
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _reactRedux.connect(mapStateToProps), _withPlugins.withPlugins('CompanionWindowFactory'));
var _default = enhance(_CompanionWindowFactory.CompanionWindowFactory);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../state/selectors":"5Trnc","../components/CompanionWindowFactory":"3lGoq"}],"3lGoq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CompanionWindowFactory = void 0;
var _react = _interopRequireWildcard(require("react"));
var _CompanionWindowRegistry = _interopRequireDefault(require("../lib/CompanionWindowRegistry"));
var _CompanionWindow = _interopRequireDefault(require("../containers/CompanionWindow"));
var _ErrorContent = _interopRequireDefault(require("../containers/ErrorContent"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Render a companion window using the appropriate component for the content
 */ var CompanionWindowFactory1 = /*#__PURE__*/ function(_Component) {
    _inherits(CompanionWindowFactory2, _Component);
    var _super = _createSuper(CompanionWindowFactory2);
    /** */ function CompanionWindowFactory2(props) {
        var _this;
        _classCallCheck(this, CompanionWindowFactory2);
        _this = _super.call(this, props);
        _this.state = {
        };
        return _this;
    }
    /** */ _createClass(CompanionWindowFactory2, [
        {
            key: "componentDidUpdate",
            value: /**
     * Clear the error state if the internal content changes; this is a rare
     * case, only when we reuse an existing companionWindow instance for
     * the left-anchored companion area (anti-pattern?)
     */ function componentDidUpdate(prevProps) {
                var content = this.props.content; // Typical usage (don't forget to compare props):
                if (content !== prevProps.content) this.setState({
                    // eslint-disable-line react/no-did-update-set-state
                    error: null,
                    hasError: false
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, content = _this$props.content, windowId = _this$props.windowId, id = _this$props.id, t = _this$props.t;
                var _this$state = this.state, error = _this$state.error, hasError = _this$state.hasError;
                if (hasError) return(/*#__PURE__*/ _react["default"].createElement(_CompanionWindow["default"], {
                    title: t('error'),
                    windowId: windowId,
                    id: id
                }, /*#__PURE__*/ _react["default"].createElement(_ErrorContent["default"], {
                    error: error,
                    windowId: windowId,
                    companionWindowId: id
                })));
                var type = _CompanionWindowRegistry["default"][content];
                if (!type) return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null));
                return(/*#__PURE__*/ _react["default"].createElement(type, {
                    id: id,
                    windowId: windowId
                }));
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                // Update state so the next render will show the fallback UI.
                return {
                    error: error,
                    hasError: true
                };
            }
        }
    ]);
    return CompanionWindowFactory2;
}(_react.Component);
exports.CompanionWindowFactory = CompanionWindowFactory1;
CompanionWindowFactory1.defaultProps = {
    content: null,
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","../lib/CompanionWindowRegistry":"4oOlD","../containers/CompanionWindow":"4Q3pu","../containers/ErrorContent":"5csMh"}],"5csMh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _ErrorContent = require("../components/ErrorContent");
var _selectors = require("../state/selectors");
/** mapStateToProps */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var companionWindowId = _ref.companionWindowId, windowId = _ref.windowId;
    return {
        metadata: {
            companionWindow: companionWindowId && _selectors.getCompanionWindow(state, {
                companionWindowId: companionWindowId
            }),
            manifest: _selectors.getManifest(state, {
                windowId: windowId
            }),
            viewer: _selectors.getViewer(state, {
                windowId: windowId
            }),
            window: _selectors.getWindow(state, {
                windowId: windowId
            })
        },
        showJsError: _selectors.getConfig(state).window.showJsError
    };
};
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */ var styles = function styles1(theme) {
    return {
        alert: {
            '& $icon': {
                color: theme.palette.error.main
            },
            backgroundColor: theme.palette.error.main,
            color: '#fff',
            fontWeight: theme.typography.fontWeightMedium
        },
        details: {
            '& pre': {
                height: '100px',
                overflowY: 'scroll'
            },
            flexDirection: 'column'
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _styles.withStyles(styles), _reactRedux.connect(mapStateToProps), _withPlugins.withPlugins('ErrorContent'));
var _default = enhance(_ErrorContent.ErrorContent);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../components/ErrorContent":"4NFxi","../state/selectors":"5Trnc"}],"4NFxi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorContent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Accordion = _interopRequireDefault(require("@material-ui/core/Accordion"));
var _AccordionSummary = _interopRequireDefault(require("@material-ui/core/AccordionSummary"));
var _AccordionDetails = _interopRequireDefault(require("@material-ui/core/AccordionDetails"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Alert = _interopRequireDefault(require("@material-ui/lab/Alert"));
var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));
var _PluginHook = require("./PluginHook");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/** */ var ErrorContent1 = /*#__PURE__*/ function(_Component) {
    _inherits(ErrorContent2, _Component);
    var _super = _createSuper(ErrorContent2);
    function ErrorContent2() {
        _classCallCheck(this, ErrorContent2);
        return _super.apply(this, arguments);
    }
    _createClass(ErrorContent2, [
        {
            key: "render",
            value: /** */ function render() {
                var _this$props = this.props, classes = _this$props.classes, error = _this$props.error, metadata = _this$props.metadata, showJsError = _this$props.showJsError, t = _this$props.t;
                if (!showJsError) return null;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_Alert["default"], {
                    elevation: 6,
                    variant: "filled",
                    severity: "error"
                }, t('errorDialogTitle')), showJsError && /*#__PURE__*/ _react["default"].createElement(_Accordion["default"], {
                    square: true,
                    className: classes.alert
                }, /*#__PURE__*/ _react["default"].createElement(_AccordionSummary["default"], {
                    expandIcon: /*#__PURE__*/ _react["default"].createElement(_ExpandMore["default"], null)
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], null, t('jsError', {
                    message: error.message,
                    name: error.name
                }))), /*#__PURE__*/ _react["default"].createElement(_AccordionDetails["default"], {
                    className: classes.details
                }, /*#__PURE__*/ _react["default"].createElement("pre", null, t('jsStack', {
                    stack: error.stack
                })), metadata && /*#__PURE__*/ _react["default"].createElement("pre", null, JSON.stringify(metadata, null, 2)))), /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, this.props)));
            }
        }
    ]);
    return ErrorContent2;
}(_react.Component);
exports.ErrorContent = ErrorContent1;
ErrorContent1.defaultProps = {
    metadata: null,
    showJsError: true,
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","@material-ui/core/Accordion":"620GP","@material-ui/core/AccordionSummary":"5ky5z","@material-ui/core/AccordionDetails":"46Zrd","@material-ui/core/Typography":"3wcF9","@material-ui/lab/Alert":"74WdK","@material-ui/icons/ExpandMore":"5UAS0","./PluginHook":"6m4WL"}],"74WdK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_alertDefault.default
);
var _alert = require("./Alert");
var _alertDefault = parcelHelpers.interopDefault(_alert);

},{"./Alert":"6WikH","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"6WikH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "styles", ()=>styles
);
var _objectWithoutProperties = require("@babel/runtime/helpers/esm/objectWithoutProperties");
var _objectWithoutPropertiesDefault = parcelHelpers.interopDefault(_objectWithoutProperties);
var _extends = require("@babel/runtime/helpers/esm/extends");
var _extendsDefault = parcelHelpers.interopDefault(_extends);
var _react = require("react");
var _propTypes = require("prop-types");
var _propTypesDefault = parcelHelpers.interopDefault(_propTypes);
var _clsx = require("clsx");
var _clsxDefault = parcelHelpers.interopDefault(_clsx);
var _styles = require("@material-ui/core/styles");
var _paper = require("@material-ui/core/Paper");
var _paperDefault = parcelHelpers.interopDefault(_paper);
var _successOutlined = require("../internal/svg-icons/SuccessOutlined");
var _successOutlinedDefault = parcelHelpers.interopDefault(_successOutlined);
var _reportProblemOutlined = require("../internal/svg-icons/ReportProblemOutlined");
var _reportProblemOutlinedDefault = parcelHelpers.interopDefault(_reportProblemOutlined);
var _errorOutline = require("../internal/svg-icons/ErrorOutline");
var _errorOutlineDefault = parcelHelpers.interopDefault(_errorOutline);
var _infoOutlined = require("../internal/svg-icons/InfoOutlined");
var _infoOutlinedDefault = parcelHelpers.interopDefault(_infoOutlined);
var _close = require("../internal/svg-icons/Close");
var _closeDefault = parcelHelpers.interopDefault(_close);
var _iconButton = require("@material-ui/core/IconButton");
var _iconButtonDefault = parcelHelpers.interopDefault(_iconButton);
var _utils = require("@material-ui/core/utils");
var styles = function styles1(theme) {
    var getColor = theme.palette.type === 'light' ? _styles.darken : _styles.lighten;
    var getBackgroundColor = theme.palette.type === 'light' ? _styles.lighten : _styles.darken;
    return {
        /* Styles applied to the root element. */ root: _extendsDefault.default({
        }, theme.typography.body2, {
            borderRadius: theme.shape.borderRadius,
            backgroundColor: 'transparent',
            display: 'flex',
            padding: '6px 16px'
        }),
        /* Styles applied to the root element if `variant="standard"` and `color="success"`. */ standardSuccess: {
            color: getColor(theme.palette.success.main, 0.6),
            backgroundColor: getBackgroundColor(theme.palette.success.main, 0.9),
            '& $icon': {
                color: theme.palette.success.main
            }
        },
        /* Styles applied to the root element if `variant="standard"` and `color="info"`. */ standardInfo: {
            color: getColor(theme.palette.info.main, 0.6),
            backgroundColor: getBackgroundColor(theme.palette.info.main, 0.9),
            '& $icon': {
                color: theme.palette.info.main
            }
        },
        /* Styles applied to the root element if `variant="standard"` and `color="warning"`. */ standardWarning: {
            color: getColor(theme.palette.warning.main, 0.6),
            backgroundColor: getBackgroundColor(theme.palette.warning.main, 0.9),
            '& $icon': {
                color: theme.palette.warning.main
            }
        },
        /* Styles applied to the root element if `variant="standard"` and `color="error"`. */ standardError: {
            color: getColor(theme.palette.error.main, 0.6),
            backgroundColor: getBackgroundColor(theme.palette.error.main, 0.9),
            '& $icon': {
                color: theme.palette.error.main
            }
        },
        /* Styles applied to the root element if `variant="outlined"` and `color="success"`. */ outlinedSuccess: {
            color: getColor(theme.palette.success.main, 0.6),
            border: "1px solid ".concat(theme.palette.success.main),
            '& $icon': {
                color: theme.palette.success.main
            }
        },
        /* Styles applied to the root element if `variant="outlined"` and `color="info"`. */ outlinedInfo: {
            color: getColor(theme.palette.info.main, 0.6),
            border: "1px solid ".concat(theme.palette.info.main),
            '& $icon': {
                color: theme.palette.info.main
            }
        },
        /* Styles applied to the root element if `variant="outlined"` and `color="warning"`. */ outlinedWarning: {
            color: getColor(theme.palette.warning.main, 0.6),
            border: "1px solid ".concat(theme.palette.warning.main),
            '& $icon': {
                color: theme.palette.warning.main
            }
        },
        /* Styles applied to the root element if `variant="outlined"` and `color="error"`. */ outlinedError: {
            color: getColor(theme.palette.error.main, 0.6),
            border: "1px solid ".concat(theme.palette.error.main),
            '& $icon': {
                color: theme.palette.error.main
            }
        },
        /* Styles applied to the root element if `variant="filled"` and `color="success"`. */ filledSuccess: {
            color: '#fff',
            fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: theme.palette.success.main
        },
        /* Styles applied to the root element if `variant="filled"` and `color="info"`. */ filledInfo: {
            color: '#fff',
            fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: theme.palette.info.main
        },
        /* Styles applied to the root element if `variant="filled"` and `color="warning"`. */ filledWarning: {
            color: '#fff',
            fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: theme.palette.warning.main
        },
        /* Styles applied to the root element if `variant="filled"` and `color="error"`. */ filledError: {
            color: '#fff',
            fontWeight: theme.typography.fontWeightMedium,
            backgroundColor: theme.palette.error.main
        },
        /* Styles applied to the icon wrapper element. */ icon: {
            marginRight: 12,
            padding: '7px 0',
            display: 'flex',
            fontSize: 22,
            opacity: 0.9
        },
        /* Styles applied to the message wrapper element. */ message: {
            padding: '8px 0'
        },
        /* Styles applied to the action wrapper element if `action` is provided. */ action: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto',
            paddingLeft: 16,
            marginRight: -8
        }
    };
};
var defaultIconMapping = {
    success: /*#__PURE__*/ _react.createElement(_successOutlinedDefault.default, {
        fontSize: "inherit"
    }),
    warning: /*#__PURE__*/ _react.createElement(_reportProblemOutlinedDefault.default, {
        fontSize: "inherit"
    }),
    error: /*#__PURE__*/ _react.createElement(_errorOutlineDefault.default, {
        fontSize: "inherit"
    }),
    info: /*#__PURE__*/ _react.createElement(_infoOutlinedDefault.default, {
        fontSize: "inherit"
    })
};
var _ref = /*#__PURE__*/ _react.createElement(_closeDefault.default, {
    fontSize: "small"
});
var Alert = /*#__PURE__*/ _react.forwardRef(function Alert1(props, ref) {
    var action = props.action, children = props.children, classes = props.classes, className = props.className, _props$closeText = props.closeText, closeText = _props$closeText === void 0 ? 'Close' : _props$closeText, color = props.color, icon = props.icon, _props$iconMapping = props.iconMapping, iconMapping = _props$iconMapping === void 0 ? defaultIconMapping : _props$iconMapping, onClose = props.onClose, _props$role = props.role, role = _props$role === void 0 ? 'alert' : _props$role, _props$severity = props.severity, severity = _props$severity === void 0 ? 'success' : _props$severity, _props$variant = props.variant, variant = _props$variant === void 0 ? 'standard' : _props$variant, other = _objectWithoutPropertiesDefault.default(props, [
        "action",
        "children",
        "classes",
        "className",
        "closeText",
        "color",
        "icon",
        "iconMapping",
        "onClose",
        "role",
        "severity",
        "variant"
    ]);
    return(/*#__PURE__*/ _react.createElement(_paperDefault.default, _extendsDefault.default({
        role: role,
        square: true,
        elevation: 0,
        className: _clsxDefault.default(classes.root, classes["".concat(variant).concat(_utils.capitalize(color || severity))], className),
        ref: ref
    }, other), icon !== false ? /*#__PURE__*/ _react.createElement("div", {
        className: classes.icon
    }, icon || iconMapping[severity] || defaultIconMapping[severity]) : null, /*#__PURE__*/ _react.createElement("div", {
        className: classes.message
    }, children), action != null ? /*#__PURE__*/ _react.createElement("div", {
        className: classes.action
    }, action) : null, action == null && onClose ? /*#__PURE__*/ _react.createElement("div", {
        className: classes.action
    }, /*#__PURE__*/ _react.createElement(_iconButtonDefault.default, {
        size: "small",
        "aria-label": closeText,
        title: closeText,
        color: "inherit",
        onClick: onClose
    }, _ref)) : null));
});
Alert.propTypes = {
    // ----------------------------- Warning --------------------------------
    // | These PropTypes are generated from the TypeScript type definitions |
    // |     To update them edit the d.ts file and run "yarn proptypes"     |
    // ----------------------------------------------------------------------
    /**
   * The action to display. It renders after the message, at the end of the alert.
   */ action: _propTypesDefault.default.node,
    /**
   * The content of the component.
   */ children: _propTypesDefault.default.node,
    /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */ classes: _propTypesDefault.default.object,
    /**
   * @ignore
   */ className: _propTypesDefault.default.string,
    /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */ closeText: _propTypesDefault.default.string,
    /**
   * The main color for the alert. Unless provided, the value is taken from the `severity` prop.
   */ color: _propTypesDefault.default.oneOf([
        'error',
        'info',
        'success',
        'warning'
    ]),
    /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   */ icon: _propTypesDefault.default.node,
    /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */ iconMapping: _propTypesDefault.default.shape({
        error: _propTypesDefault.default.node,
        info: _propTypesDefault.default.node,
        success: _propTypesDefault.default.node,
        warning: _propTypesDefault.default.node
    }),
    /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   *
   * @param {object} event The event source of the callback.
   */ onClose: _propTypesDefault.default.func,
    /**
   * The ARIA role attribute of the element.
   */ role: _propTypesDefault.default.string,
    /**
   * The severity of the alert. This defines the color and icon used.
   */ severity: _propTypesDefault.default.oneOf([
        'error',
        'info',
        'success',
        'warning'
    ]),
    /**
   * The variant to use.
   */ variant: _propTypesDefault.default.oneOf([
        'filled',
        'outlined',
        'standard'
    ])
};
exports.default = _styles.withStyles(styles, {
    name: 'MuiAlert'
})(Alert);

},{"@babel/runtime/helpers/esm/objectWithoutProperties":"5UtKX","@babel/runtime/helpers/esm/extends":"5qnVv","react":"3b2NM","prop-types":"4dfy5","clsx":"29lTl","@material-ui/core/styles":"1Rdvd","@material-ui/core/Paper":"5Fj22","../internal/svg-icons/SuccessOutlined":"6VdQ6","../internal/svg-icons/ReportProblemOutlined":"5ohqz","../internal/svg-icons/ErrorOutline":"51iS9","../internal/svg-icons/InfoOutlined":"6KYch","../internal/svg-icons/Close":"3f1Cm","@material-ui/core/IconButton":"2ndRy","@material-ui/core/utils":"syhw0","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"6VdQ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _utils = require("@material-ui/core/utils");
exports.default = _utils.createSvgIcon(/*#__PURE__*/ _react.createElement("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined');

},{"react":"3b2NM","@material-ui/core/utils":"syhw0","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"5ohqz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _utils = require("@material-ui/core/utils");
exports.default = _utils.createSvgIcon(/*#__PURE__*/ _react.createElement("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined');

},{"react":"3b2NM","@material-ui/core/utils":"syhw0","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"51iS9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _utils = require("@material-ui/core/utils");
exports.default = _utils.createSvgIcon(/*#__PURE__*/ _react.createElement("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline');

},{"react":"3b2NM","@material-ui/core/utils":"syhw0","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"6KYch":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _utils = require("@material-ui/core/utils");
exports.default = _utils.createSvgIcon(/*#__PURE__*/ _react.createElement("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined');

},{"react":"3b2NM","@material-ui/core/utils":"syhw0","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"devsv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _core = require("@material-ui/core");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _CollectionDialog = require("../components/CollectionDialog");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof CollectionDialog
 * @private
 */ var mapDispatchToProps = {
    addWindow: actions.addWindow,
    hideCollectionDialog: actions.hideCollectionDialog,
    setWorkspaceAddVisibility: actions.setWorkspaceAddVisibility,
    showCollectionDialog: actions.showCollectionDialog,
    updateWindow: actions.updateWindow
};
/**
 * mapStateToProps - to hook up connect
 * @memberof CollectionDialog
 * @private
 */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    var _getWindow = _selectors.getWindow(state, {
        windowId: windowId
    }), collectionPath = _getWindow.collectionPath, manifestId = _getWindow.collectionManifestId;
    var manifest = _selectors.getManifest(state, {
        manifestId: manifestId
    });
    var collectionId = collectionPath && collectionPath[collectionPath.length - 1];
    var collection = collectionId && _selectors.getManifest(state, {
        manifestId: collectionId
    });
    return {
        collection: collection && _selectors.getManifestoInstance(state, {
            manifestId: collection.id
        }),
        collectionPath: collectionPath,
        containerId: _selectors.getContainerId(state),
        error: manifest && manifest.error,
        isMultipart: _selectors.getSequenceBehaviors(state, {
            manifestId: manifestId
        }).includes('multi-part'),
        manifest: manifest && _selectors.getManifestoInstance(state, {
            manifestId: manifestId
        }),
        manifestId: manifestId,
        open: state.workspace.collectionDialogOn,
        ready: manifest && !!manifest.json,
        windowId: windowId
    };
};
/** */ var styles = function styles1(theme) {
    return {
        collectionFilter: {
            padding: '16px',
            paddingTop: 0
        },
        collectionItem: {
            whiteSpace: 'normal'
        },
        collectionMetadata: {
            padding: '16px'
        },
        dark: {
            color: '#000000'
        },
        dialog: {
            position: 'absolute !important'
        },
        dialogContent: {
            padding: theme.spacing(1)
        },
        light: {
            color: theme.palette.grey[400]
        },
        listitem: {
            '&:focus': {
                backgroundColor: theme.palette.action.focus
            },
            '&:hover': {
                backgroundColor: theme.palette.action.hover
            },
            cursor: 'pointer'
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('CollectionDialog'));
var _default = enhance(_CollectionDialog.CollectionDialog);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","@material-ui/core":"6DoV9","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/CollectionDialog":"2TxD8"}],"2TxD8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CollectionDialog = void 0;
var _react = _interopRequireWildcard(require("react"));
var _core = require("@material-ui/core");
var _ArrowBackSharp = _interopRequireDefault(require("@material-ui/icons/ArrowBackSharp"));
var _Skeleton = _interopRequireDefault(require("@material-ui/lab/Skeleton"));
var _asArray = _interopRequireDefault(require("../lib/asArray"));
var _LabelValueMetadata = require("./LabelValueMetadata");
var _CollapsibleSection = _interopRequireDefault(require("../containers/CollapsibleSection"));
var _ScrollIndicatedDialogContent = _interopRequireDefault(require("../containers/ScrollIndicatedDialogContent"));
var _ManifestInfo = _interopRequireDefault(require("../containers/ManifestInfo"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * a dialog providing the possibility to select the collection
 */ var CollectionDialog1 = /*#__PURE__*/ function(_Component) {
    _inherits(CollectionDialog2, _Component);
    var _super = _createSuper(CollectionDialog2);
    /** */ function CollectionDialog2(props) {
        var _this;
        _classCallCheck(this, CollectionDialog2);
        _this = _super.call(this, props);
        _this.state = {
            filter: null
        };
        _this.hideDialog = _this.hideDialog.bind(_assertThisInitialized(_this));
        return _this;
    }
    /** */ _createClass(CollectionDialog2, [
        {
            key: "setFilter",
            value: function setFilter(filter) {
                this.setState({
                    filter: filter
                });
            }
        },
        {
            key: "hideDialog",
            value: function hideDialog() {
                var _this$props = this.props, hideCollectionDialog = _this$props.hideCollectionDialog, windowId = _this$props.windowId;
                hideCollectionDialog(windowId);
            }
        },
        {
            key: "selectCollection",
            value: function selectCollection(c) {
                var _this$props2 = this.props, collectionPath = _this$props2.collectionPath, manifestId = _this$props2.manifestId, showCollectionDialog = _this$props2.showCollectionDialog, windowId = _this$props2.windowId;
                showCollectionDialog(c.id, [].concat(_toConsumableArray(collectionPath), [
                    manifestId
                ]), windowId);
            }
        },
        {
            key: "goToPreviousCollection",
            value: function goToPreviousCollection() {
                var _this$props3 = this.props, collectionPath = _this$props3.collectionPath, showCollectionDialog = _this$props3.showCollectionDialog, windowId = _this$props3.windowId;
                showCollectionDialog(collectionPath[collectionPath.length - 1], collectionPath.slice(0, -1), windowId);
            }
        },
        {
            key: "selectManifest",
            value: function selectManifest(m) {
                var _this$props4 = this.props, addWindow = _this$props4.addWindow, collectionPath = _this$props4.collectionPath, manifestId = _this$props4.manifestId, setWorkspaceAddVisibility = _this$props4.setWorkspaceAddVisibility, updateWindow = _this$props4.updateWindow, windowId = _this$props4.windowId;
                if (windowId) updateWindow(windowId, {
                    canvasId: null,
                    collectionPath: [].concat(_toConsumableArray(collectionPath), [
                        manifestId
                    ]),
                    manifestId: m.id
                });
                else addWindow({
                    collectionPath: [].concat(_toConsumableArray(collectionPath), [
                        manifestId
                    ]),
                    manifestId: m.id
                });
                this.hideDialog();
                setWorkspaceAddVisibility(false);
            }
        },
        {
            key: "dialogContainer",
            value: function dialogContainer() {
                var _this$props5 = this.props, containerId = _this$props5.containerId, windowId = _this$props5.windowId;
                return document.querySelector("#".concat(containerId, " #").concat(windowId));
            }
        },
        {
            key: "placeholder",
            value: function placeholder() {
                var classes = this.props.classes;
                return(/*#__PURE__*/ _react["default"].createElement(_core.Dialog, {
                    className: classes.dialog,
                    onClose: this.hideDialog,
                    open: true,
                    container: this.dialogContainer(),
                    BackdropProps: this.backdropProps()
                }, /*#__PURE__*/ _react["default"].createElement(_core.DialogTitle, {
                    id: "select-collection",
                    disableTypography: true
                }, /*#__PURE__*/ _react["default"].createElement(_Skeleton["default"], {
                    className: classes.placeholder,
                    variant: "text"
                })), /*#__PURE__*/ _react["default"].createElement(_ScrollIndicatedDialogContent["default"], null, /*#__PURE__*/ _react["default"].createElement(_Skeleton["default"], {
                    className: classes.placeholder,
                    variant: "text"
                }), /*#__PURE__*/ _react["default"].createElement(_Skeleton["default"], {
                    className: classes.placeholder,
                    variant: "text"
                }))));
            }
        },
        {
            key: "backdropProps",
            value: function backdropProps() {
                var classes = this.props.classes;
                return {
                    classes: {
                        root: classes.dialog
                    }
                };
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props6 = this.props, classes = _this$props6.classes, collection = _this$props6.collection, error = _this$props6.error, isMultipart = _this$props6.isMultipart, manifest = _this$props6.manifest, ready = _this$props6.ready, t = _this$props6.t;
                var filter = this.state.filter;
                if (error) return null; // If this component is optimistically rendering ahead of the window its in
                // force a re-render so that it is placed correctly. The right thing here is
                // to maybe pass a ref.
                if (!this.dialogContainer()) {
                    this.forceUpdate();
                    return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null));
                }
                if (!ready) return this.placeholder();
                var rights = manifest && _asArray["default"](manifest.getProperty('rights') || manifest.getProperty('license'));
                var requiredStatement = manifest && _asArray["default"](manifest.getRequiredStatement()).filter(function(l) {
                    return l.getValue();
                }).map(function(labelValuePair) {
                    return {
                        label: null,
                        values: labelValuePair.getValues()
                    };
                });
                var collections = manifest.getCollections();
                var currentFilter = filter || (collections.length > 0 ? 'collections' : 'manifests');
                return(/*#__PURE__*/ _react["default"].createElement(_core.Dialog, {
                    className: classes.dialog,
                    onClose: this.hideDialog,
                    container: this.dialogContainer(),
                    BackdropProps: this.backdropProps(),
                    open: true
                }, /*#__PURE__*/ _react["default"].createElement(_core.DialogTitle, {
                    id: "select-collection",
                    disableTypography: true
                }, /*#__PURE__*/ _react["default"].createElement(_core.Typography, {
                    component: "div",
                    variant: "overline"
                }, t(isMultipart ? 'multipartCollection' : 'collection')), /*#__PURE__*/ _react["default"].createElement(_core.Typography, {
                    variant: "h3"
                }, CollectionDialog2.getUseableLabel(manifest))), /*#__PURE__*/ _react["default"].createElement(_ScrollIndicatedDialogContent["default"], {
                    className: classes.dialogContent
                }, collection && /*#__PURE__*/ _react["default"].createElement(_core.Button, {
                    startIcon: /*#__PURE__*/ _react["default"].createElement(_ArrowBackSharp["default"], null),
                    onClick: function onClick() {
                        return _this2.goToPreviousCollection();
                    }
                }, CollectionDialog2.getUseableLabel(collection)), /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.collectionMetadata
                }, /*#__PURE__*/ _react["default"].createElement(_ManifestInfo["default"], {
                    manifestId: manifest.id
                }), /*#__PURE__*/ _react["default"].createElement(_CollapsibleSection["default"], {
                    id: "select-collection-rights",
                    label: t('attributionTitle')
                }, requiredStatement && /*#__PURE__*/ _react["default"].createElement(_LabelValueMetadata.LabelValueMetadata, {
                    labelValuePairs: requiredStatement,
                    defaultLabel: t('attribution')
                }), rights && rights.length > 0 && /*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/ _react["default"].createElement(_core.Typography, {
                    variant: "subtitle2",
                    component: "dt"
                }, t('rights')), rights.map(function(v) {
                    return(/*#__PURE__*/ _react["default"].createElement(_core.Typography, {
                        variant: "body1",
                        component: "dd",
                        key: v
                    }, /*#__PURE__*/ _react["default"].createElement(_core.Link, {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: v
                    }, v)));
                })))), /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.collectionFilter
                }, manifest.getTotalCollections() > 0 && /*#__PURE__*/ _react["default"].createElement(_core.Chip, {
                    clickable: true,
                    color: currentFilter === 'collections' ? 'primary' : 'default',
                    onClick: function onClick() {
                        return _this2.setFilter('collections');
                    },
                    label: t('totalCollections', {
                        count: manifest.getTotalCollections()
                    })
                }), manifest.getTotalManifests() > 0 && /*#__PURE__*/ _react["default"].createElement(_core.Chip, {
                    clickable: true,
                    color: currentFilter === 'manifests' ? 'primary' : 'default',
                    onClick: function onClick() {
                        return _this2.setFilter('manifests');
                    },
                    label: t('totalManifests', {
                        count: manifest.getTotalManifests()
                    })
                })), currentFilter === 'collections' && /*#__PURE__*/ _react["default"].createElement(_core.MenuList, null, collections.map(function(c) {
                    return(/*#__PURE__*/ _react["default"].createElement(_core.MenuItem, {
                        key: c.id,
                        onClick: function onClick() {
                            _this2.selectCollection(c);
                        },
                        className: classes.collectionItem
                    }, CollectionDialog2.getUseableLabel(c)));
                })), currentFilter === 'manifests' && /*#__PURE__*/ _react["default"].createElement(_core.MenuList, null, manifest.getManifests().map(function(m) {
                    return(/*#__PURE__*/ _react["default"].createElement(_core.MenuItem, {
                        key: m.id,
                        onClick: function onClick() {
                            _this2.selectManifest(m);
                        },
                        className: classes.collectionItem
                    }, CollectionDialog2.getUseableLabel(m)));
                }))), /*#__PURE__*/ _react["default"].createElement(_core.DialogActions, null, /*#__PURE__*/ _react["default"].createElement(_core.Button, {
                    onClick: this.hideDialog
                }, t('close')))));
            }
        }
    ], [
        {
            key: "getUseableLabel",
            value: /** */ function getUseableLabel(resource, index) {
                return resource && resource.getLabel && resource.getLabel().length > 0 ? resource.getLabel().getValue() : String(index + 1);
            }
        }
    ]);
    return CollectionDialog2;
}(_react.Component);
exports.CollectionDialog = CollectionDialog1;
CollectionDialog1.defaultProps = {
    collection: null,
    collectionPath: [],
    containerId: null,
    error: null,
    isMultipart: false,
    ready: false,
    windowId: null
};

},{"react":"3b2NM","@material-ui/core":"6DoV9","@material-ui/icons/ArrowBackSharp":"1XjNy","@material-ui/lab/Skeleton":"5mlkx","../lib/asArray":"2ODnd","./LabelValueMetadata":"6GOym","../containers/CollapsibleSection":"4lMVu","../containers/ScrollIndicatedDialogContent":"5sczT","../containers/ManifestInfo":"3vO6p"}],"420KE":[function(require,module,exports) {
module.exports = require("./loaders/browser/js-loader")(require('./bundle-url').getBundleURL() + "AudioViewer.46a7d8f2.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('7BKIW')
);

},{"./loaders/browser/js-loader":"2Ucmd","./bundle-url":"3seVR"}],"1ttq5":[function(require,module,exports) {
module.exports = require("./loaders/browser/js-loader")(require('./bundle-url').getBundleURL() + "GalleryView.7dae1760.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('0RGQe')
);

},{"./loaders/browser/js-loader":"2Ucmd","./bundle-url":"3seVR"}],"7EcbG":[function(require,module,exports) {
module.exports = require("./loaders/browser/js-loader")(require('./bundle-url').getBundleURL() + "SelectCollection.4c8733fd.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('6E4NG')
);

},{"./loaders/browser/js-loader":"2Ucmd","./bundle-url":"3seVR"}],"3hyTS":[function(require,module,exports) {
module.exports = require("./loaders/browser/js-loader")(require('./bundle-url').getBundleURL() + "WindowViewer.3fa87f0a.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('4T98Y')
);

},{"./loaders/browser/js-loader":"2Ucmd","./bundle-url":"3seVR"}],"1JvhW":[function(require,module,exports) {
module.exports = require("./loaders/browser/js-loader")(require('./bundle-url').getBundleURL() + "VideoViewer.8c6524a6.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('2JsZd')
);

},{"./loaders/browser/js-loader":"2Ucmd","./bundle-url":"3seVR"}],"4tk35":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _MinimalWindow = require("../components/MinimalWindow");
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
/** mapStateToProps */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    return {
        allowClose: _selectors.getWindowConfig(state, {
            windowId: windowId
        }).allowClose,
        allowWindowSideBar: _selectors.getWindowConfig(state, {
            windowId: windowId
        }).allowWindowSideBar
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */ var mapDispatchToProps = function mapDispatchToProps1(dispatch, _ref2) {
    var windowId = _ref2.windowId;
    return {
        removeWindow: function removeWindow() {
            return dispatch(actions.removeWindow(windowId));
        }
    };
};
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */ var styles = function styles1(theme) {
    return {
        button: {
            marginLeft: 'auto'
        },
        title: _objectSpread(_objectSpread({
        }, theme.typography.h6), {
        }, {
            flexGrow: 1,
            paddingLeft: theme.spacing(0.5)
        }),
        window: {
            backgroundColor: theme.palette.shades.dark,
            borderRadius: 0,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            minHeight: 0,
            overflow: 'hidden',
            width: '100%'
        },
        windowTopBarStyle: {
            backgroundColor: theme.palette.shades.main,
            borderTop: '2px solid transparent',
            minHeight: 32,
            paddingLeft: theme.spacing(0.5),
            paddingRight: theme.spacing(0.5)
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _styles.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('MinimalWindow'));
var _default = enhance(_MinimalWindow.MinimalWindow);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../components/MinimalWindow":"Ql02G","../state/selectors":"5Trnc"}],"Ql02G":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MinimalWindow = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MenuSharp = _interopRequireDefault(require("@material-ui/icons/MenuSharp"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));
var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _CloseSharp = _interopRequireDefault(require("@material-ui/icons/CloseSharp"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/** */ var MinimalWindow1 = /*#__PURE__*/ function(_Component) {
    _inherits(MinimalWindow2, _Component);
    var _super = _createSuper(MinimalWindow2);
    function MinimalWindow2() {
        _classCallCheck(this, MinimalWindow2);
        return _super.apply(this, arguments);
    }
    _createClass(MinimalWindow2, [
        {
            key: "render",
            value: /** */ function render() {
                var _this$props = this.props, allowClose = _this$props.allowClose, allowWindowSideBar = _this$props.allowWindowSideBar, ariaLabel = _this$props.ariaLabel, children = _this$props.children, classes = _this$props.classes, label = _this$props.label, removeWindow = _this$props.removeWindow, t = _this$props.t, windowId = _this$props.windowId;
                return(/*#__PURE__*/ _react["default"].createElement(_Paper["default"], {
                    component: "section",
                    elevation: 1,
                    id: windowId,
                    className: _classnames["default"](classes.window, _cssNs["default"]('placeholder-window')),
                    "aria-label": label && ariaLabel ? t('window', {
                        label: label
                    }) : null
                }, /*#__PURE__*/ _react["default"].createElement(_AppBar["default"], {
                    position: "relative",
                    color: "default"
                }, /*#__PURE__*/ _react["default"].createElement(_Toolbar["default"], {
                    disableGutters: true,
                    className: _classnames["default"](classes.windowTopBarStyle, _cssNs["default"]('window-top-bar')),
                    variant: "dense"
                }, allowWindowSideBar && /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-label": t('toggleWindowSideBar'),
                    disabled: true
                }, /*#__PURE__*/ _react["default"].createElement(_MenuSharp["default"], null)), /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "h2",
                    noWrap: true,
                    color: "inherit",
                    className: classes.title
                }, label), allowClose && removeWindow && /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-label": t('closeWindow'),
                    className: _classnames["default"](classes.button, _cssNs["default"]('window-close')),
                    onClick: removeWindow,
                    TooltipProps: {
                        tabIndex: ariaLabel ? '0' : '-1'
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_CloseSharp["default"], null)))), children));
            }
        }
    ]);
    return MinimalWindow2;
}(_react.Component);
exports.MinimalWindow = MinimalWindow1;
MinimalWindow1.defaultProps = {
    allowClose: true,
    allowWindowSideBar: true,
    ariaLabel: true,
    children: null,
    classes: {
    },
    label: '',
    removeWindow: function removeWindow() {
    },
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","@material-ui/icons/MenuSharp":"71alR","classnames":"5aJRc","@material-ui/core/Paper":"5Fj22","@material-ui/core/AppBar":"3NZOv","@material-ui/core/Toolbar":"3jiG5","@material-ui/core/Typography":"3wcF9","@material-ui/icons/CloseSharp":"1IIc1","../containers/MiradorMenuButton":"4qUlt","../config/css-ns":"6ABf8"}],"2NG7p":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _manifesto = require("manifesto.js");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _selectors = require("../state/selectors");
var _IIIFAuthentication = require("../components/IIIFAuthentication");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapStateToProps - to hook up connect
 * @memberof FullScreenButton
 * @private
 */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    var services = _selectors.selectCurrentAuthServices(state, {
        windowId: windowId
    }); // TODO: get the most actionable auth service...
    var service = services[0];
    var accessTokenService = service && (_manifesto.Utils.getService(service, 'http://iiif.io/api/auth/1/token') || _manifesto.Utils.getService(service, 'http://iiif.io/api/auth/0/token'));
    var logoutService = service && (_manifesto.Utils.getService(service, 'http://iiif.io/api/auth/1/logout') || _manifesto.Utils.getService(service, 'http://iiif.io/api/auth/0/logout'));
    var authStatuses = _selectors.getAuth(state);
    var authStatus = service && authStatuses[service.id];
    var accessTokens = _selectors.getAccessTokens(state);
    var accessTokenStatus = accessTokenService && accessTokens[accessTokenService.id];
    var status = null;
    if (!authStatus) status = null;
    else if (authStatus.isFetching) {
        if (authStatus.windowId === windowId) status = 'cookie';
    } else if (accessTokenStatus && accessTokenStatus.isFetching) {
        if (authStatus.windowId === windowId) status = 'token';
    } else if (authStatus.ok) status = 'ok';
    else if (authStatus.ok === false) status = 'failed';
    var authProfiles = _selectors.getAuthProfiles(state);
    var profile = service && service.getProfile();
    var isInteractive = authProfiles.some(function(config) {
        return config.profile === profile && !(config.external || config.kiosk);
    });
    return {
        accessTokenServiceId: accessTokenService && accessTokenService.id,
        authServiceId: service && service.id,
        confirm: service && service.getConfirmLabel(),
        description: service && service.getDescription(),
        failureDescription: service && service.getFailureDescription(),
        failureHeader: service && service.getFailureHeader(),
        header: service && service.getHeader(),
        isInteractive: isInteractive,
        label: service && service.getLabel()[0].value,
        logoutConfirm: logoutService && logoutService.getLabel()[0] && logoutService.getLabel()[0].value,
        logoutServiceId: logoutService && logoutService.id,
        profile: profile,
        status: status
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */ var mapDispatchToProps = {
    handleAuthInteraction: actions.addAuthenticationRequest,
    resetAuthenticationState: actions.resetAuthenticationState,
    resolveAccessTokenRequest: actions.resolveAccessTokenRequest,
    resolveAuthenticationRequest: actions.resolveAuthenticationRequest
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('IIIFAuthentication'));
var _default = enhance(_IIIFAuthentication.IIIFAuthentication);
exports["default"] = _default;

},{"react-redux":"47SrY","redux":"7panR","react-i18next":"6hlRL","manifesto.js":"5sQww","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/IIIFAuthentication":"7fsEu"}],"7fsEu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IIIFAuthentication = void 0;
var _react = _interopRequireWildcard(require("react"));
var _AccessTokenSender = require("./AccessTokenSender");
var _NewWindow = require("./NewWindow");
var _WindowAuthenticationBar = _interopRequireDefault(require("../containers/WindowAuthenticationBar"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Opens a new window for click
 */ var IIIFAuthentication1 = /*#__PURE__*/ function(_Component) {
    _inherits(IIIFAuthentication2, _Component);
    var _super = _createSuper(IIIFAuthentication2);
    /** */ function IIIFAuthentication2(props) {
        var _this;
        _classCallCheck(this, IIIFAuthentication2);
        _this = _super.call(this, props);
        _this.performLogout = _this.performLogout.bind(_assertThisInitialized(_this));
        _this.onReceiveAccessTokenMessage = _this.onReceiveAccessTokenMessage.bind(_assertThisInitialized(_this));
        return _this;
    }
    /** */ _createClass(IIIFAuthentication2, [
        {
            key: "onReceiveAccessTokenMessage",
            value: function onReceiveAccessTokenMessage(payload) {
                var _this$props = this.props, authServiceId = _this$props.authServiceId, accessTokenServiceId = _this$props.accessTokenServiceId, resolveAccessTokenRequest = _this$props.resolveAccessTokenRequest;
                resolveAccessTokenRequest(authServiceId, accessTokenServiceId, payload);
            }
        },
        {
            key: "defaultAuthBarProps",
            value: function defaultAuthBarProps() {
                var _this$props2 = this.props, authServiceId = _this$props2.authServiceId, windowId = _this$props2.windowId, status = _this$props2.status, logoutServiceId = _this$props2.logoutServiceId;
                return {
                    authServiceId: authServiceId,
                    hasLogoutService: !!logoutServiceId,
                    status: status,
                    windowId: windowId
                };
            }
        },
        {
            key: "performLogout",
            value: function performLogout() {
                var _this$props3 = this.props, accessTokenServiceId = _this$props3.accessTokenServiceId, authServiceId = _this$props3.authServiceId, features = _this$props3.features, logoutServiceId = _this$props3.logoutServiceId, resetAuthenticationState = _this$props3.resetAuthenticationState, openWindow = _this$props3.openWindow;
                openWindow(logoutServiceId, undefined, features);
                resetAuthenticationState({
                    authServiceId: authServiceId,
                    tokenServiceId: accessTokenServiceId
                });
            }
        },
        {
            key: "renderLoggedIn",
            value: function renderLoggedIn() {
                var _this$props4 = this.props, isInteractive = _this$props4.isInteractive, logoutConfirm = _this$props4.logoutConfirm, t = _this$props4.t;
                if (!isInteractive) return null;
                return(/*#__PURE__*/ _react["default"].createElement(_WindowAuthenticationBar["default"], Object.assign({
                    confirmButton: logoutConfirm || t('logout'),
                    onConfirm: this.performLogout
                }, this.defaultAuthBarProps())));
            }
        },
        {
            key: "renderFailure",
            value: function renderFailure() {
                var _this$props5 = this.props, handleAuthInteraction = _this$props5.handleAuthInteraction, header = _this$props5.failureHeader, description = _this$props5.failureDescription, t = _this$props5.t, authServiceId = _this$props5.authServiceId, windowId = _this$props5.windowId;
                return(/*#__PURE__*/ _react["default"].createElement(_WindowAuthenticationBar["default"], Object.assign({
                    header: header,
                    description: description,
                    confirmButton: t('retry'),
                    onConfirm: function onConfirm() {
                        return handleAuthInteraction(windowId, authServiceId);
                    }
                }, this.defaultAuthBarProps())));
            }
        },
        {
            key: "renderLoggingInCookie",
            value: function renderLoggingInCookie() {
                var _this$props6 = this.props, accessTokenServiceId = _this$props6.accessTokenServiceId, authServiceId = _this$props6.authServiceId, resolveAuthenticationRequest = _this$props6.resolveAuthenticationRequest, features = _this$props6.features;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, this.renderLogin(), /*#__PURE__*/ _react["default"].createElement(_NewWindow.NewWindow, {
                    name: "IiifLoginSender",
                    url: "".concat(authServiceId, "?origin=").concat(window.origin),
                    features: features,
                    onClose: function onClose() {
                        return resolveAuthenticationRequest(authServiceId, accessTokenServiceId);
                    }
                })));
            }
        },
        {
            key: "renderLoggingInToken",
            value: function renderLoggingInToken() {
                var accessTokenServiceId = this.props.accessTokenServiceId;
                return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null, this.renderLogin(), /*#__PURE__*/ _react["default"].createElement(_AccessTokenSender.AccessTokenSender, {
                    handleAccessTokenMessage: this.onReceiveAccessTokenMessage,
                    url: accessTokenServiceId
                })));
            }
        },
        {
            key: "renderLogin",
            value: function renderLogin() {
                var _this$props7 = this.props, confirm = _this$props7.confirm, description = _this$props7.description, handleAuthInteraction = _this$props7.handleAuthInteraction, header = _this$props7.header, isInteractive = _this$props7.isInteractive, label = _this$props7.label, authServiceId = _this$props7.authServiceId, windowId = _this$props7.windowId;
                if (!isInteractive) return null;
                return(/*#__PURE__*/ _react["default"].createElement(_WindowAuthenticationBar["default"], Object.assign({
                    header: header,
                    description: description,
                    label: label,
                    confirmButton: confirm,
                    onConfirm: function onConfirm() {
                        return handleAuthInteraction(windowId, authServiceId);
                    }
                }, this.defaultAuthBarProps())));
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props8 = this.props, authServiceId = _this$props8.authServiceId, status = _this$props8.status;
                if (!authServiceId) return null;
                if (status === null) return this.renderLogin();
                if (status === 'cookie') return this.renderLoggingInCookie();
                if (status === 'token') return this.renderLoggingInToken();
                if (status === 'failed') return this.renderFailure();
                if (status === 'ok') return this.renderLoggedIn();
                return null;
            }
        }
    ]);
    return IIIFAuthentication2;
}(_react.Component);
exports.IIIFAuthentication = IIIFAuthentication1;
IIIFAuthentication1.defaultProps = {
    confirm: undefined,
    description: undefined,
    failureDescription: undefined,
    failureHeader: undefined,
    features: 'centerscreen',
    header: undefined,
    isInteractive: true,
    label: undefined,
    logoutConfirm: undefined,
    logoutServiceId: undefined,
    openWindow: window.open,
    status: null,
    t: function t(k) {
        return k;
    }
};

},{"react":"3b2NM","./AccessTokenSender":"5LPYV","./NewWindow":"2xKjZ","../containers/WindowAuthenticationBar":"3Qdds"}],"5LPYV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AccessTokenSender = void 0;
var _react = _interopRequireWildcard(require("react"));
var _icomcomReact = _interopRequireDefault(require("icomcom-react"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Opens a new window for click
 */ var AccessTokenSender1 = /*#__PURE__*/ function(_Component) {
    _inherits(AccessTokenSender2, _Component);
    var _super = _createSuper(AccessTokenSender2);
    /** */ function AccessTokenSender2(props) {
        var _this;
        _classCallCheck(this, AccessTokenSender2);
        _this = _super.call(this, props);
        _this.onReceiveAccessTokenMessage = _this.onReceiveAccessTokenMessage.bind(_assertThisInitialized(_this));
        return _this;
    }
    /** @private */ _createClass(AccessTokenSender2, [
        {
            key: "onReceiveAccessTokenMessage",
            value: function onReceiveAccessTokenMessage(e) {
                var _this$props = this.props, handleAccessTokenMessage = _this$props.handleAccessTokenMessage, url = _this$props.url;
                if (e.data && e.data.messageId && e.data.messageId === url) handleAccessTokenMessage(e.data);
            }
        },
        {
            key: "render",
            value: function render() {
                var url = this.props.url;
                if (!url) return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null));
                /**
      login, clickthrough/kiosk open @id, wait for close
      external, no-op
      */ return(/*#__PURE__*/ _react["default"].createElement(_icomcomReact["default"], {
                    attributes: {
                        'aria-hidden': true,
                        height: 1,
                        src: "".concat(url, "?origin=").concat(window.origin, "&messageId=").concat(url),
                        style: {
                            visibility: 'hidden'
                        },
                        width: 1
                    },
                    handleReceiveMessage: this.onReceiveAccessTokenMessage
                }));
            }
        }
    ]);
    return AccessTokenSender2;
}(_react.Component);
exports.AccessTokenSender = AccessTokenSender1;
AccessTokenSender1.defaultProps = {
    url: undefined
};

},{"react":"3b2NM","icomcom-react":"4rHz2"}],"4rHz2":[function(require,module,exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');
var _propTypes2 = _interopRequireDefault(_propTypes);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(self, call) {
    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var IComCom1 = function(_React$Component) {
    _inherits(IComCom2, _React$Component);
    function IComCom2(args) {
        _classCallCheck(this, IComCom2);
        var _this = _possibleConstructorReturn(this, (IComCom2.__proto__ || Object.getPrototypeOf(IComCom2)).call(this, args));
        _this.onReceiveMessage = _this.onReceiveMessage.bind(_this);
        _this.onLoad = _this.onLoad.bind(_this);
        _this.sendMessage = _this.sendMessage.bind(_this);
        return _this;
    }
    _createClass(IComCom2, [
        {
            key: 'componentDidMount',
            value: function componentDidMount() {
                window.addEventListener('message', this.onReceiveMessage);
                if (this._frame) this._frame.addEventListener('load', this.onLoad);
            }
        },
        {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                window.removeEventListener('message', this.onReceiveMessage, false);
            }
        },
        {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (this.props.postMessageData !== nextProps.postMessageData) this.sendMessage(nextProps.postMessageData);
            }
        },
        {
            key: 'onReceiveMessage',
            value: function onReceiveMessage(event) {
                var handleReceiveMessage = this.props.handleReceiveMessage;
                if (handleReceiveMessage) handleReceiveMessage(event);
            }
        },
        {
            key: 'onLoad',
            value: function onLoad() {
                var handleReady = this.props.handleReady;
                if (handleReady) handleReady();
                this.sendMessage(this.props.postMessageData);
            }
        },
        {
            key: 'sendMessage',
            value: function sendMessage(postMessageData) {
                this._frame.contentWindow.postMessage(postMessageData, this.props.targetOrigin);
            }
        },
        {
            key: 'render',
            value: function render() {
                var _this2 = this;
                var attributes = this.props.attributes;
                return _react2.default.createElement('iframe', _extends({
                    ref: function ref(el) {
                        _this2._frame = el;
                    }
                }, Object.assign({
                }, IComCom2.defaultAttributes, attributes)));
            }
        }
    ]);
    return IComCom2;
}(_react2.default.Component);
IComCom1.propTypes = {
    attributes: _propTypes2.default.shape({
        frameBorder: _propTypes2.default.oneOfType([
            _propTypes2.default.string,
            _propTypes2.default.number
        ]),
        height: _propTypes2.default.oneOfType([
            _propTypes2.default.string,
            _propTypes2.default.number
        ]),
        name: _propTypes2.default.string,
        scrolling: _propTypes2.default.string,
        sandbox: _propTypes2.default.string,
        srcDoc: _propTypes2.default.string,
        src: _propTypes2.default.string.isRequired,
        width: _propTypes2.default.oneOfType([
            _propTypes2.default.string,
            _propTypes2.default.number
        ])
    }),
    handleReceiveMessage: _propTypes2.default.func,
    handleReady: _propTypes2.default.func,
    postMessageData: _propTypes2.default.any,
    targetOrigin: _propTypes2.default.string
};
IComCom1.defaultProps = {
    targetOrigin: '*'
};
IComCom1.defaultAttributes = {
    frameBorder: 0
};
exports.default = IComCom1;

},{"react":"3b2NM","prop-types":"4dfy5"}],"2xKjZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NewWindow = void 0;
var _react = require("react");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Opens a new window for click
 */ var NewWindow1 = /*#__PURE__*/ function(_Component) {
    _inherits(NewWindow2, _Component);
    var _super = _createSuper(NewWindow2);
    /** */ function NewWindow2(props) {
        var _this;
        _classCallCheck(this, NewWindow2);
        _this = _super.call(this, props);
        _this.released = undefined;
        _this.window = null;
        _this.checkIfWindowClosed = null;
        return _this;
    }
    /** */ _createClass(NewWindow2, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.openWindow();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.window) this.window.close();
            }
        },
        {
            key: "onClose",
            value: function onClose() {
                var _this$props = this.props, onClose = _this$props.onClose, url = _this$props.url;
                if (this.released) return;
                this.released = true;
                clearInterval(this.checkIfWindowClosed);
                onClose(url);
            }
        },
        {
            key: "openWindow",
            value: function openWindow() {
                var _this2 = this;
                var _this$props2 = this.props, depWindow = _this$props2.depWindow, features = _this$props2.features, name = _this$props2.name, url = _this$props2.url;
                this.window = (depWindow || window).open(url, name, features);
                this.released = false;
                this.checkIfWindowClosed = setInterval(function() {
                    if (!_this2.window || _this2.window.closed) _this2.onClose();
                }, 250);
            }
        },
        {
            key: "render",
            value: function render() {
                return null;
            }
        }
    ]);
    return NewWindow2;
}(_react.Component);
exports.NewWindow = NewWindow1;
NewWindow1.defaultProps = {
    depWindow: undefined,
    features: undefined,
    name: undefined
};

},{"react":"3b2NM"}],"3Qdds":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _colorManipulator = require("@material-ui/core/styles/colorManipulator");
var _withPlugins = require("../extend/withPlugins");
var _WindowAuthenticationBar = require("../components/WindowAuthenticationBar");
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */ var styles = function styles1(theme) {
    return {
        buttonInvert: {
            '&:hover': {
                backgroundColor: _colorManipulator.fade(theme.palette.secondary.contrastText, 1 - theme.palette.action.hoverOpacity)
            },
            backgroundColor: theme.palette.secondary.contrastText,
            marginLeft: theme.spacing(5),
            paddingBottom: 0,
            paddingTop: 0
        },
        expanded: {
            paddingLeft: theme.spacing(),
            paddingRight: theme.spacing()
        },
        failure: {
            backgroundColor: theme.palette.error.dark
        },
        fauxButton: {
            marginLeft: theme.spacing(2.5)
        },
        icon: {
            marginRight: theme.spacing(1.5),
            verticalAlign: 'text-bottom'
        },
        label: {
            lineHeight: 2.25
        },
        paper: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            cursor: 'pointer'
        },
        topBar: {
            '&:hover': {
                backgroundColor: theme.palette.secondary.main
            },
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'inherit',
            padding: theme.spacing(1),
            textTransform: 'none'
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _styles.withStyles(styles), _withPlugins.withPlugins('WindowAuthenticationBar'));
var _default = enhance(_WindowAuthenticationBar.WindowAuthenticationBar);
exports["default"] = _default;

},{"redux":"7panR","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","@material-ui/core/styles/colorManipulator":"3UFHE","../extend/withPlugins":"5PNwJ","../components/WindowAuthenticationBar":"KOlMc"}],"KOlMc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowAuthenticationBar = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));
var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _LockSharp = _interopRequireDefault(require("@material-ui/icons/LockSharp"));
var _SanitizedHtml = _interopRequireDefault(require("../containers/SanitizedHtml"));
var _PluginHook = require("./PluginHook");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/** */ var WindowAuthenticationBar1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowAuthenticationBar2, _Component);
    var _super = _createSuper(WindowAuthenticationBar2);
    /** */ function WindowAuthenticationBar2(props) {
        var _this;
        _classCallCheck(this, WindowAuthenticationBar2);
        _this = _super.call(this, props);
        _this.state = {
            open: false
        };
        _this.setOpen = _this.setOpen.bind(_assertThisInitialized(_this));
        _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
        return _this;
    }
    /** */ _createClass(WindowAuthenticationBar2, [
        {
            key: "onSubmit",
            value: function onSubmit() {
                var onConfirm = this.props.onConfirm;
                this.setOpen(false);
                onConfirm();
            }
        },
        {
            key: "setOpen",
            value: function setOpen(open) {
                this.setState(function(state) {
                    return _objectSpread(_objectSpread({
                    }, state), {
                    }, {
                        open: open
                    });
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props = this.props, classes = _this$props.classes, confirmButton = _this$props.confirmButton, continueLabel = _this$props.continueLabel, header = _this$props.header, description = _this$props.description, icon = _this$props.icon, label = _this$props.label, t = _this$props.t, ruleSet = _this$props.ruleSet, hasLogoutService = _this$props.hasLogoutService, status = _this$props.status, ConfirmProps = _this$props.ConfirmProps;
                if (status === 'ok' && !hasLogoutService) return null;
                var open = this.state.open;
                var button = /*#__PURE__*/ _react["default"].createElement(_Button["default"], Object.assign({
                    onClick: this.onSubmit,
                    className: classes.buttonInvert,
                    color: "secondary"
                }, ConfirmProps), confirmButton || t('login'));
                if (!description && !header) return(/*#__PURE__*/ _react["default"].createElement(_Paper["default"], {
                    square: true,
                    elevation: 4,
                    color: "secondary",
                    classes: {
                        root: classes.paper
                    }
                }, /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.topBar
                }, icon || /*#__PURE__*/ _react["default"].createElement(_LockSharp["default"], {
                    className: classes.icon
                }), /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    className: classes.label,
                    component: "h3",
                    variant: "body1",
                    color: "inherit"
                }, ruleSet ? /*#__PURE__*/ _react["default"].createElement(_SanitizedHtml["default"], {
                    htmlString: label,
                    ruleSet: ruleSet
                }) : label), /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, this.props), button)));
                return(/*#__PURE__*/ _react["default"].createElement(_Paper["default"], {
                    square: true,
                    elevation: 4,
                    color: "secondary",
                    classes: {
                        root: classes.paper
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_Button["default"], {
                    fullWidth: true,
                    className: classes.topBar,
                    onClick: function onClick() {
                        return _this2.setOpen(true);
                    },
                    component: "div",
                    color: "inherit"
                }, icon || /*#__PURE__*/ _react["default"].createElement(_LockSharp["default"], {
                    className: classes.icon
                }), /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    className: classes.label,
                    component: "h3",
                    variant: "body1",
                    color: "inherit"
                }, ruleSet ? /*#__PURE__*/ _react["default"].createElement(_SanitizedHtml["default"], {
                    htmlString: label,
                    ruleSet: ruleSet
                }) : label), /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, this.props), /*#__PURE__*/ _react["default"].createElement("span", {
                    className: classes.fauxButton
                }, !open && /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "button",
                    color: "inherit"
                }, continueLabel || t('continue')))), /*#__PURE__*/ _react["default"].createElement(_Collapse["default"], {
                    "in": open,
                    onClose: function onClose() {
                        return _this2.setOpen(false);
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "body1",
                    color: "inherit",
                    className: classes.expanded
                }, ruleSet ? /*#__PURE__*/ _react["default"].createElement(_SanitizedHtml["default"], {
                    htmlString: header,
                    ruleSet: ruleSet
                }) : header, header && description ? ': ' : '', ruleSet ? /*#__PURE__*/ _react["default"].createElement(_SanitizedHtml["default"], {
                    htmlString: description,
                    ruleSet: ruleSet
                }) : description), /*#__PURE__*/ _react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/ _react["default"].createElement(_Button["default"], {
                    onClick: function onClick() {
                        return _this2.setOpen(false);
                    },
                    color: "inherit"
                }, t('cancel')), button))));
            }
        }
    ]);
    return WindowAuthenticationBar2;
}(_react.Component);
exports.WindowAuthenticationBar = WindowAuthenticationBar1;
WindowAuthenticationBar1.defaultProps = {
    confirmButton: undefined,
    ConfirmProps: {
    },
    continueLabel: undefined,
    description: undefined,
    hasLogoutService: true,
    header: undefined,
    icon: undefined,
    ruleSet: 'iiif',
    status: undefined,
    t: function t(k) {
        return k;
    }
};

},{"react":"3b2NM","@material-ui/core/Button":"1Xm5M","@material-ui/core/Paper":"5Fj22","@material-ui/core/Collapse":"59lvF","@material-ui/core/DialogActions":"6sBoT","@material-ui/core/Typography":"3wcF9","@material-ui/icons/LockSharp":"5yeXS","../containers/SanitizedHtml":"6lY1p","./PluginHook":"6m4WL"}],"5yeXS":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M20 8h-3V6.21c0-2.61-1.91-4.94-4.51-5.19C9.51.74 7 3.08 7 6v2H4v14h16V8zm-8 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"
}), 'LockSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"2Nlmv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var actions = _interopRequireWildcard(require("../state/actions"));
var _WorkspaceMosaic = require("../components/WorkspaceMosaic");
var _reactMosaicComponent = _interopRequireDefault(require("../styles/react-mosaic-component"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        layout: _selectors.getWorkspace(state).layout,
        windowIds: _selectors.getWorkspace(state).windowIds,
        workspaceId: _selectors.getWorkspace(state).id
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */ var mapDispatchToProps = {
    updateWorkspaceMosaicLayout: actions.updateWorkspaceMosaicLayout
};
var styles = _objectSpread({
    root: {
        '& .mosaic-preview': {
            boxShadow: 'none'
        },
        '& .mosaic-tile': {
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .2), 0 2px 1px -1px rgba(0, 0, 0, .2)'
        },
        '& .mosaic-window': {
            boxShadow: 'none'
        },
        '& .mosaic-window-toolbar': {
            display: 'none !important'
        }
    }
}, _reactMosaicComponent["default"]);
var enhance = _redux.compose(_styles.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('WorkspaceMosaic')// further HOC go here
);
var _default = enhance(_WorkspaceMosaic.WorkspaceMosaic);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../state/selectors":"5Trnc","../state/actions":"4t2dD","../components/WorkspaceMosaic":"1zWjg","../styles/react-mosaic-component":"5Prfu"}],"1zWjg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceMosaic = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactMosaicComponent = require("react-mosaic-component");
var _difference = _interopRequireDefault(require("lodash/difference"));
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _classnames = _interopRequireDefault(require("classnames"));
var _MosaicRenderPreview = _interopRequireDefault(require("../containers/MosaicRenderPreview"));
var _Window = _interopRequireDefault(require("../containers/Window"));
var _MosaicLayout = _interopRequireDefault(require("../lib/MosaicLayout"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */ var WorkspaceMosaic1 = /*#__PURE__*/ function(_React$Component) {
    _inherits(WorkspaceMosaic2, _React$Component);
    var _super = _createSuper(WorkspaceMosaic2);
    /**
   */ function WorkspaceMosaic2(props) {
        var _this;
        _classCallCheck(this, WorkspaceMosaic2);
        _this = _super.call(this, props);
        _this.tileRenderer = _this.tileRenderer.bind(_assertThisInitialized(_this));
        _this.mosaicChange = _this.mosaicChange.bind(_assertThisInitialized(_this));
        _this.determineWorkspaceLayout = _this.determineWorkspaceLayout.bind(_assertThisInitialized(_this));
        _this.zeroStateView = /*#__PURE__*/ _react["default"].createElement("div", null);
        _this.windowPaths = {
        };
        _this.toolbarControls = [];
        _this.additionalControls = [];
        return _this;
    }
    /** */ _createClass(WorkspaceMosaic2, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var updateWorkspaceMosaicLayout = this.props.updateWorkspaceMosaicLayout;
                var newLayout = this.determineWorkspaceLayout();
                if (newLayout) updateWorkspaceMosaicLayout(newLayout);
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var _this$props = this.props, windowIds = _this$props.windowIds, layout = _this$props.layout, updateWorkspaceMosaicLayout = _this$props.updateWorkspaceMosaicLayout;
                var prevWindows = prevProps.windowIds; // Handles when Windows are added (not via Add Resource UI) Could be a workspace import
                if (!windowIds.every(function(e) {
                    return prevWindows.includes(e);
                })) {
                    var newLayout = this.determineWorkspaceLayout();
                    if (!_isEqual["default"](newLayout, layout)) updateWorkspaceMosaicLayout(newLayout);
                    return;
                } // Handles when Windows are removed from the state
                if (!prevWindows.every(function(e) {
                    return windowIds.includes(e);
                })) {
                    // There are no more remaining Windows, just return an empty layout
                    if (windowIds.length === 0) {
                        updateWorkspaceMosaicLayout(null);
                        return;
                    }
                    var removedWindows = _difference["default"](prevWindows, windowIds);
                    var _newLayout = new _MosaicLayout["default"](layout);
                    _newLayout.removeWindows(removedWindows, this.windowPaths);
                    updateWorkspaceMosaicLayout(_newLayout.layout);
                }
            }
        },
        {
            key: "bookkeepPath",
            value: function bookkeepPath(windowId, path) {
                this.windowPaths[windowId] = path;
            }
        },
        {
            key: "determineWorkspaceLayout",
            value: function determineWorkspaceLayout() {
                var _this$props2 = this.props, windowIds = _this$props2.windowIds, layout = _this$props2.layout;
                var leaveKeys = _reactMosaicComponent.getLeaves(layout); // Windows were added
                if (!windowIds.every(function(e) {
                    return leaveKeys.includes(e);
                })) {
                    // No current layout, so just generate a new one
                    if (leaveKeys.length < 2) return _reactMosaicComponent.createBalancedTreeFromLeaves(windowIds);
                     // Add new windows to layout
                    var addedWindows = _difference["default"](windowIds, leaveKeys);
                    var newLayout = new _MosaicLayout["default"](layout);
                    newLayout.addWindows(addedWindows);
                    return newLayout.layout;
                } // Windows were removed (perhaps in a different Workspace). We don't have a
                // way to reconfigure.. so we have to random generate
                if (!leaveKeys.every(function(e) {
                    return windowIds.includes(e);
                })) return _reactMosaicComponent.createBalancedTreeFromLeaves(windowIds);
                return layout;
            }
        },
        {
            key: "tileRenderer",
            value: /**
     * Render a tile (Window) in the Mosaic.
     */ function tileRenderer(id, path) {
                var _this$props3 = this.props, windowIds = _this$props3.windowIds, workspaceId = _this$props3.workspaceId;
                if (!windowIds.includes(id)) return null;
                this.bookkeepPath(id, path);
                return(/*#__PURE__*/ _react["default"].createElement(_reactMosaicComponent.MosaicWindow, {
                    toolbarControls: this.toolbarControls,
                    additionalControls: this.additionalControls,
                    path: path,
                    windowId: id,
                    renderPreview: WorkspaceMosaic2.renderPreview
                }, /*#__PURE__*/ _react["default"].createElement(_Window["default"], {
                    key: "".concat(id, "-").concat(workspaceId),
                    windowId: id
                })));
            }
        },
        {
            key: "mosaicChange",
            value: function mosaicChange(newLayout) {
                var updateWorkspaceMosaicLayout = this.props.updateWorkspaceMosaicLayout;
                updateWorkspaceMosaicLayout(newLayout);
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props4 = this.props, layout = _this$props4.layout, classes = _this$props4.classes;
                return(/*#__PURE__*/ _react["default"].createElement(_reactMosaicComponent.MosaicWithoutDragDropContext, {
                    renderTile: this.tileRenderer,
                    initialValue: layout || this.determineWorkspaceLayout(),
                    onChange: this.mosaicChange,
                    className: _classnames["default"]('mirador-mosaic', classes.root),
                    zeroStateView: this.zeroStateView
                }));
            }
        }
    ], [
        {
            key: "renderPreview",
            value: function renderPreview(mosaicProps) {
                return(/*#__PURE__*/ _react["default"].createElement("div", {
                    className: "mosaic-preview",
                    "aria-hidden": true
                }, /*#__PURE__*/ _react["default"].createElement(_MosaicRenderPreview["default"], {
                    windowId: mosaicProps.windowId
                })));
            }
        }
    ]);
    return WorkspaceMosaic2;
}(_react["default"].Component);
exports.WorkspaceMosaic = WorkspaceMosaic1;
WorkspaceMosaic1.defaultProps = {
    layout: undefined,
    windowIds: []
};

},{"react":"3b2NM","react-mosaic-component":"3UksC","lodash/difference":"1yAum","lodash/isEqual":"2pVP2","classnames":"5aJRc","../containers/MosaicRenderPreview":"3bYdt","../containers/Window":"6Jd3H","../lib/MosaicLayout":"39qzX"}],"3UksC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @license
 * Copyright 2019 Kevin Verdieck, originally developed at Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Mosaic_1 = require("./Mosaic");
Object.defineProperty(exports, "Mosaic", {
    enumerable: true,
    get: function() {
        return Mosaic_1.Mosaic;
    }
});
Object.defineProperty(exports, "MosaicWithoutDragDropContext", {
    enumerable: true,
    get: function() {
        return Mosaic_1.MosaicWithoutDragDropContext;
    }
});
var types_1 = require("./types");
Object.defineProperty(exports, "MosaicDragType", {
    enumerable: true,
    get: function() {
        return types_1.MosaicDragType;
    }
});
var contextTypes_1 = require("./contextTypes");
Object.defineProperty(exports, "MosaicContext", {
    enumerable: true,
    get: function() {
        return contextTypes_1.MosaicContext;
    }
});
Object.defineProperty(exports, "MosaicWindowContext", {
    enumerable: true,
    get: function() {
        return contextTypes_1.MosaicWindowContext;
    }
});
var mosaicUpdates_1 = require("./util/mosaicUpdates");
Object.defineProperty(exports, "buildSpecFromUpdate", {
    enumerable: true,
    get: function() {
        return mosaicUpdates_1.buildSpecFromUpdate;
    }
});
Object.defineProperty(exports, "createDragToUpdates", {
    enumerable: true,
    get: function() {
        return mosaicUpdates_1.createDragToUpdates;
    }
});
Object.defineProperty(exports, "createExpandUpdate", {
    enumerable: true,
    get: function() {
        return mosaicUpdates_1.createExpandUpdate;
    }
});
Object.defineProperty(exports, "createHideUpdate", {
    enumerable: true,
    get: function() {
        return mosaicUpdates_1.createHideUpdate;
    }
});
Object.defineProperty(exports, "createRemoveUpdate", {
    enumerable: true,
    get: function() {
        return mosaicUpdates_1.createRemoveUpdate;
    }
});
Object.defineProperty(exports, "updateTree", {
    enumerable: true,
    get: function() {
        return mosaicUpdates_1.updateTree;
    }
});
var mosaicUtilities_1 = require("./util/mosaicUtilities");
Object.defineProperty(exports, "createBalancedTreeFromLeaves", {
    enumerable: true,
    get: function() {
        return mosaicUtilities_1.createBalancedTreeFromLeaves;
    }
});
Object.defineProperty(exports, "Corner", {
    enumerable: true,
    get: function() {
        return mosaicUtilities_1.Corner;
    }
});
Object.defineProperty(exports, "getAndAssertNodeAtPathExists", {
    enumerable: true,
    get: function() {
        return mosaicUtilities_1.getAndAssertNodeAtPathExists;
    }
});
Object.defineProperty(exports, "getLeaves", {
    enumerable: true,
    get: function() {
        return mosaicUtilities_1.getLeaves;
    }
});
Object.defineProperty(exports, "getNodeAtPath", {
    enumerable: true,
    get: function() {
        return mosaicUtilities_1.getNodeAtPath;
    }
});
Object.defineProperty(exports, "getOtherBranch", {
    enumerable: true,
    get: function() {
        return mosaicUtilities_1.getOtherBranch;
    }
});
Object.defineProperty(exports, "getOtherDirection", {
    enumerable: true,
    get: function() {
        return mosaicUtilities_1.getOtherDirection;
    }
});
Object.defineProperty(exports, "getPathToCorner", {
    enumerable: true,
    get: function() {
        return mosaicUtilities_1.getPathToCorner;
    }
});
Object.defineProperty(exports, "isParent", {
    enumerable: true,
    get: function() {
        return mosaicUtilities_1.isParent;
    }
});
var MosaicWindow_1 = require("./MosaicWindow");
Object.defineProperty(exports, "MosaicWindow", {
    enumerable: true,
    get: function() {
        return MosaicWindow_1.MosaicWindow;
    }
});
var MosaicButton_1 = require("./buttons/MosaicButton");
Object.defineProperty(exports, "createDefaultToolbarButton", {
    enumerable: true,
    get: function() {
        return MosaicButton_1.createDefaultToolbarButton;
    }
});
var MosaicZeroState_1 = require("./MosaicZeroState");
Object.defineProperty(exports, "MosaicZeroState", {
    enumerable: true,
    get: function() {
        return MosaicZeroState_1.MosaicZeroState;
    }
});
var Separator_1 = require("./buttons/Separator");
Object.defineProperty(exports, "Separator", {
    enumerable: true,
    get: function() {
        return Separator_1.Separator;
    }
});
var ExpandButton_1 = require("./buttons/ExpandButton");
Object.defineProperty(exports, "ExpandButton", {
    enumerable: true,
    get: function() {
        return ExpandButton_1.ExpandButton;
    }
});
var ReplaceButton_1 = require("./buttons/ReplaceButton");
Object.defineProperty(exports, "ReplaceButton", {
    enumerable: true,
    get: function() {
        return ReplaceButton_1.ReplaceButton;
    }
});
var SplitButton_1 = require("./buttons/SplitButton");
Object.defineProperty(exports, "SplitButton", {
    enumerable: true,
    get: function() {
        return SplitButton_1.SplitButton;
    }
});
var RemoveButton_1 = require("./buttons/RemoveButton");
Object.defineProperty(exports, "RemoveButton", {
    enumerable: true,
    get: function() {
        return RemoveButton_1.RemoveButton;
    }
});
var defaultToolbarControls_1 = require("./buttons/defaultToolbarControls");
Object.defineProperty(exports, "DEFAULT_CONTROLS_WITH_CREATION", {
    enumerable: true,
    get: function() {
        return defaultToolbarControls_1.DEFAULT_CONTROLS_WITH_CREATION;
    }
});
Object.defineProperty(exports, "DEFAULT_CONTROLS_WITHOUT_CREATION", {
    enumerable: true,
    get: function() {
        return defaultToolbarControls_1.DEFAULT_CONTROLS_WITHOUT_CREATION;
    }
});

},{"./Mosaic":"4Uy8a","./types":"2FDE8","./contextTypes":"1y8z5","./util/mosaicUpdates":"4Mkld","./util/mosaicUtilities":"3sR9b","./MosaicWindow":"53z8g","./buttons/MosaicButton":"6vGOt","./MosaicZeroState":"2gNU7","./buttons/Separator":"4pwmQ","./buttons/ExpandButton":"194NE","./buttons/ReplaceButton":"4ww95","./buttons/SplitButton":"3WKnb","./buttons/RemoveButton":"3ldgP","./buttons/defaultToolbarControls":"Gks8R"}],"4Uy8a":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (b1.hasOwnProperty(p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Mosaic = exports.MosaicWithoutDragDropContext = void 0;
var classnames_1 = __importDefault(require("classnames"));
var countBy_1 = __importDefault(require("lodash/countBy"));
var keys_1 = __importDefault(require("lodash/keys"));
var pickBy_1 = __importDefault(require("lodash/pickBy"));
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var react_dnd_multi_backend_1 = __importDefault(require("react-dnd-multi-backend"));
var HTML5toTouch_1 = __importDefault(require("react-dnd-multi-backend/dist/cjs/HTML5toTouch"));
var uuid_1 = require("uuid");
var contextTypes_1 = require("./contextTypes");
var MosaicRoot_1 = require("./MosaicRoot");
var MosaicZeroState_1 = require("./MosaicZeroState");
var RootDropTargets_1 = require("./RootDropTargets");
var mosaicUpdates_1 = require("./util/mosaicUpdates");
var mosaicUtilities_1 = require("./util/mosaicUtilities");
var DEFAULT_EXPAND_PERCENTAGE = 70;
function isUncontrolled(props) {
    return props.initialValue != null;
}
var MosaicWithoutDragDropContext1 = function(_super) {
    __extends(MosaicWithoutDragDropContext2, _super);
    function MosaicWithoutDragDropContext2() {
        var _a;
        var _this = _super.apply(this, arguments) || this;
        _this.state = {
            currentNode: null,
            lastInitialValue: null,
            mosaicId: (_a = _this.props.mosaicId) !== null && _a !== void 0 ? _a : uuid_1.v4()
        };
        _this.updateRoot = function(updates, suppressOnRelease) {
            if (suppressOnRelease === void 0) suppressOnRelease = false;
            var currentNode = _this.getRoot() || {
            };
            _this.replaceRoot(mosaicUpdates_1.updateTree(currentNode, updates), suppressOnRelease);
        };
        _this.replaceRoot = function(currentNode, suppressOnRelease) {
            if (suppressOnRelease === void 0) suppressOnRelease = false;
            _this.props.onChange(currentNode);
            if (!suppressOnRelease && _this.props.onRelease) _this.props.onRelease(currentNode);
            if (isUncontrolled(_this.props)) _this.setState({
                currentNode: currentNode
            });
        };
        _this.actions = {
            updateTree: _this.updateRoot,
            remove: function(path) {
                if (path.length === 0) _this.replaceRoot(null);
                else _this.updateRoot([
                    mosaicUpdates_1.createRemoveUpdate(_this.getRoot(), path)
                ]);
            },
            expand: function(path, percentage) {
                if (percentage === void 0) percentage = DEFAULT_EXPAND_PERCENTAGE;
                return _this.updateRoot([
                    mosaicUpdates_1.createExpandUpdate(path, percentage)
                ]);
            },
            getRoot: function() {
                return _this.getRoot();
            },
            hide: function(path) {
                return _this.updateRoot([
                    mosaicUpdates_1.createHideUpdate(path)
                ]);
            },
            replaceWith: function(path, newNode) {
                return _this.updateRoot([
                    {
                        path: path,
                        spec: {
                            $set: newNode
                        }
                    }, 
                ]);
            }
        };
        _this.childContext = {
            mosaicActions: _this.actions,
            mosaicId: _this.state.mosaicId
        };
        return _this;
    }
    MosaicWithoutDragDropContext2.getDerivedStateFromProps = function(nextProps, prevState) {
        if (nextProps.mosaicId && prevState.mosaicId !== nextProps.mosaicId && true) throw new Error('Mosaic does not support updating the mosaicId after instantiation');
        if (isUncontrolled(nextProps) && nextProps.initialValue !== prevState.lastInitialValue) return {
            lastInitialValue: nextProps.initialValue,
            currentNode: nextProps.initialValue
        };
        return null;
    };
    MosaicWithoutDragDropContext2.prototype.render = function() {
        var className = this.props.className;
        return react_1.default.createElement(contextTypes_1.MosaicContext.Provider, {
            value: this.childContext
        }, react_1.default.createElement("div", {
            className: classnames_1.default(className, 'mosaic mosaic-drop-target')
        }, this.renderTree(), react_1.default.createElement(RootDropTargets_1.RootDropTargets, null)));
    };
    MosaicWithoutDragDropContext2.prototype.getRoot = function() {
        if (isUncontrolled(this.props)) return this.state.currentNode;
        else return this.props.value;
    };
    MosaicWithoutDragDropContext2.prototype.renderTree = function() {
        var root = this.getRoot();
        this.validateTree(root);
        if (root === null || root === undefined) return this.props.zeroStateView;
        else {
            var _a = this.props, renderTile = _a.renderTile, resize = _a.resize;
            return react_1.default.createElement(MosaicRoot_1.MosaicRoot, {
                root: root,
                renderTile: renderTile,
                resize: resize
            });
        }
    };
    MosaicWithoutDragDropContext2.prototype.validateTree = function(node) {
        var duplicates = keys_1.default(pickBy_1.default(countBy_1.default(mosaicUtilities_1.getLeaves(node)), function(n) {
            return n > 1;
        }));
        if (duplicates.length > 0) throw new Error("Duplicate IDs [" + duplicates.join(', ') + "] detected. Mosaic does not support leaves with the same ID");
    };
    MosaicWithoutDragDropContext2.defaultProps = {
        onChange: function() {
            return void 0;
        },
        zeroStateView: react_1.default.createElement(MosaicZeroState_1.MosaicZeroState, null),
        className: 'mosaic-blueprint-theme'
    };
    return MosaicWithoutDragDropContext2;
}(react_1.default.PureComponent);
exports.MosaicWithoutDragDropContext = MosaicWithoutDragDropContext1;
var Mosaic1 = function(_super) {
    __extends(Mosaic2, _super);
    function Mosaic2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mosaic2.prototype.render = function() {
        return react_1.default.createElement(react_dnd_1.DndProvider, {
            backend: react_dnd_multi_backend_1.default,
            options: HTML5toTouch_1.default
        }, react_1.default.createElement(MosaicWithoutDragDropContext1, __assign({
        }, this.props)));
    };
    return Mosaic2;
}(react_1.default.PureComponent);
exports.Mosaic = Mosaic1;

},{"classnames":"5aJRc","lodash/countBy":"6lzOi","lodash/keys":"31WSp","lodash/pickBy":"7MIzK","react":"3b2NM","react-dnd":"6x32O","react-dnd-multi-backend":"3V4HC","react-dnd-multi-backend/dist/cjs/HTML5toTouch":"lZ83c","uuid":"55aGJ","./contextTypes":"1y8z5","./MosaicRoot":"4kfwg","./MosaicZeroState":"2gNU7","./RootDropTargets":"1XroQ","./util/mosaicUpdates":"4Mkld","./util/mosaicUtilities":"3sR9b"}],"6lzOi":[function(require,module,exports) {
var baseAssignValue = require('./_baseAssignValue'), createAggregator = require('./_createAggregator');
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.countBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': 1, '6': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.countBy(['one', 'two', 'three'], 'length');
 * // => { '3': 2, '5': 1 }
 */ var countBy = createAggregator(function(result, value, key) {
    if (hasOwnProperty.call(result, key)) ++result[key];
    else baseAssignValue(result, key, 1);
});
module.exports = countBy;

},{"./_baseAssignValue":"3nIC3","./_createAggregator":"56cf6"}],"7MIzK":[function(require,module,exports) {
var arrayMap = require('./_arrayMap'), baseIteratee = require('./_baseIteratee'), basePickBy = require('./_basePickBy'), getAllKeysIn = require('./_getAllKeysIn');
/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */ function pickBy(object, predicate) {
    if (object == null) return {
    };
    var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [
            prop
        ];
    });
    predicate = baseIteratee(predicate);
    return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
    });
}
module.exports = pickBy;

},{"./_arrayMap":"QWvrI","./_baseIteratee":"6BtQg","./_basePickBy":"6cgNx","./_getAllKeysIn":"54oJG"}],"6cgNx":[function(require,module,exports) {
var baseGet = require('./_baseGet'), baseSet = require('./_baseSet'), castPath = require('./_castPath');
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */ function basePickBy(object, paths, predicate) {
    var index = -1, length = paths.length, result = {
    };
    while((++index) < length){
        var path = paths[index], value = baseGet(object, path);
        if (predicate(value, path)) baseSet(result, castPath(path, object), value);
    }
    return result;
}
module.exports = basePickBy;

},{"./_baseGet":"46Wis","./_baseSet":"7iBHS","./_castPath":"7pi32"}],"55aGJ":[function(require,module,exports) {
var v1 = require('./v1');
var v4 = require('./v4');
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
module.exports = uuid;

},{"./v1":"5nP2W","./v4":"4PdPT"}],"5nP2W":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');
// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;
var _clockseq;
// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;
// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];
    options = options || {
    };
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
    // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        var seedBytes = rng();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 1,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
    // Time since last uuid creation (in msecs)
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;
    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 16383;
    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;
    // `time_low`
    var tl = ((msecs & 268435455) * 10000 + nsecs) % 4294967296;
    b[i++] = tl >>> 24 & 255;
    b[i++] = tl >>> 16 & 255;
    b[i++] = tl >>> 8 & 255;
    b[i++] = tl & 255;
    // `time_mid`
    var tmh = msecs / 4294967296 * 10000 & 268435455;
    b[i++] = tmh >>> 8 & 255;
    b[i++] = tmh & 255;
    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 15 | 16; // include version
    b[i++] = tmh >>> 16 & 255;
    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 128;
    // `clock_seq_low`
    b[i++] = clockseq & 255;
    // `node`
    for(var n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf ? buf : bytesToUuid(b);
}
module.exports = v1;

},{"./lib/rng":"3iwbt","./lib/bytesToUuid":"5sgUX"}],"4kfwg":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (b1.hasOwnProperty(p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MosaicRoot = void 0;
var flatten_1 = __importDefault(require("lodash/flatten"));
var react_1 = __importDefault(require("react"));
var contextTypes_1 = require("./contextTypes");
var Split_1 = require("./Split");
var BoundingBox_1 = require("./util/BoundingBox");
var mosaicUtilities_1 = require("./util/mosaicUtilities");
var MosaicRoot1 = function(_super) {
    __extends(MosaicRoot2, _super);
    function MosaicRoot2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onResize = function(percentage, path, suppressOnRelease) {
            _this.context.mosaicActions.updateTree([
                {
                    path: path,
                    spec: {
                        splitPercentage: {
                            $set: percentage
                        }
                    }
                }, 
            ], suppressOnRelease);
        };
        return _this;
    }
    MosaicRoot2.prototype.render = function() {
        var root = this.props.root;
        return react_1.default.createElement("div", {
            className: "mosaic-root"
        }, this.renderRecursively(root, BoundingBox_1.BoundingBox.empty(), []));
    };
    MosaicRoot2.prototype.renderRecursively = function(node, boundingBox, path) {
        if (mosaicUtilities_1.isParent(node)) {
            var splitPercentage = node.splitPercentage == null ? 50 : node.splitPercentage;
            var _a = BoundingBox_1.BoundingBox.split(boundingBox, splitPercentage, node.direction), first = _a.first, second = _a.second;
            return flatten_1.default([
                this.renderRecursively(node.first, first, path.concat('first')),
                this.renderSplit(node.direction, boundingBox, splitPercentage, path),
                this.renderRecursively(node.second, second, path.concat('second')), 
            ].filter(nonNullElement));
        } else return react_1.default.createElement("div", {
            key: node,
            className: "mosaic-tile",
            style: __assign({
            }, BoundingBox_1.BoundingBox.asStyles(boundingBox))
        }, this.props.renderTile(node, path));
    };
    MosaicRoot2.prototype.renderSplit = function(direction, boundingBox, splitPercentage, path) {
        var _this = this;
        var resize = this.props.resize;
        if (resize !== 'DISABLED') return react_1.default.createElement(Split_1.Split, __assign({
            key: path.join(',') + 'splitter'
        }, resize, {
            boundingBox: boundingBox,
            splitPercentage: splitPercentage,
            direction: direction,
            onChange: function(percentage) {
                return _this.onResize(percentage, path, true);
            },
            onRelease: function(percentage) {
                return _this.onResize(percentage, path, false);
            }
        }));
        else return null;
    };
    MosaicRoot2.contextType = contextTypes_1.MosaicContext;
    return MosaicRoot2;
}(react_1.default.PureComponent);
exports.MosaicRoot = MosaicRoot1;
function nonNullElement(x) {
    return x !== null;
}

},{"lodash/flatten":"4yCrt","react":"3b2NM","./contextTypes":"1y8z5","./Split":"5zCmr","./util/BoundingBox":"WZBdf","./util/mosaicUtilities":"3sR9b"}],"5zCmr":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (b1.hasOwnProperty(p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Split = void 0;
var classnames_1 = __importDefault(require("classnames"));
var clamp_1 = __importDefault(require("lodash/clamp"));
var throttle_1 = __importDefault(require("lodash/throttle"));
var react_1 = __importDefault(require("react"));
var BoundingBox_1 = require("./util/BoundingBox");
var RESIZE_THROTTLE_MS = 1000 / 30; // 30 fps
var TOUCH_EVENT_OPTIONS = {
    capture: true,
    passive: false
};
var Split1 = function(_super) {
    __extends(Split2, _super);
    function Split2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElement = react_1.default.createRef();
        _this.listenersBound = false;
        _this.onMouseDown = function(event) {
            if (!isTouchEvent(event)) {
                if (event.button !== 0) return;
            }
            event.preventDefault();
            _this.bindListeners();
        };
        _this.onMouseUp = function(event) {
            _this.unbindListeners();
            var percentage = _this.calculateRelativePercentage(event);
            _this.props.onRelease(percentage);
        };
        _this.onMouseMove = function(event) {
            event.preventDefault();
            event.stopPropagation();
            _this.throttledUpdatePercentage(event);
        };
        _this.throttledUpdatePercentage = throttle_1.default(function(event) {
            var percentage = _this.calculateRelativePercentage(event);
            if (percentage !== _this.props.splitPercentage) _this.props.onChange(percentage);
        }, RESIZE_THROTTLE_MS);
        return _this;
    }
    Split2.prototype.render = function() {
        var direction = this.props.direction;
        return react_1.default.createElement("div", {
            className: classnames_1.default('mosaic-split', {
                '-row': direction === 'row',
                '-column': direction === 'column'
            }),
            ref: this.rootElement,
            onMouseDown: this.onMouseDown,
            style: this.computeStyle()
        }, react_1.default.createElement("div", {
            className: "mosaic-split-line"
        }));
    };
    Split2.prototype.componentDidMount = function() {
        this.rootElement.current.addEventListener('touchstart', this.onMouseDown, TOUCH_EVENT_OPTIONS);
    };
    Split2.prototype.componentWillUnmount = function() {
        this.unbindListeners();
        if (this.rootElement.current) this.rootElement.current.ownerDocument.removeEventListener('touchstart', this.onMouseDown, TOUCH_EVENT_OPTIONS);
    };
    Split2.prototype.bindListeners = function() {
        if (!this.listenersBound) {
            this.rootElement.current.ownerDocument.addEventListener('mousemove', this.onMouseMove, true);
            this.rootElement.current.ownerDocument.addEventListener('touchmove', this.onMouseMove, TOUCH_EVENT_OPTIONS);
            this.rootElement.current.ownerDocument.addEventListener('mouseup', this.onMouseUp, true);
            this.rootElement.current.ownerDocument.addEventListener('touchend', this.onMouseUp, true);
            this.listenersBound = true;
        }
    };
    Split2.prototype.unbindListeners = function() {
        if (this.rootElement.current) {
            this.rootElement.current.ownerDocument.removeEventListener('mousemove', this.onMouseMove, true);
            this.rootElement.current.ownerDocument.removeEventListener('touchmove', this.onMouseMove, TOUCH_EVENT_OPTIONS);
            this.rootElement.current.ownerDocument.removeEventListener('mouseup', this.onMouseUp, true);
            this.rootElement.current.ownerDocument.removeEventListener('touchend', this.onMouseUp, true);
            this.listenersBound = false;
        }
    };
    Split2.prototype.computeStyle = function() {
        var _a;
        var _b = this.props, boundingBox = _b.boundingBox, direction = _b.direction, splitPercentage = _b.splitPercentage;
        var positionStyle = direction === 'column' ? 'top' : 'left';
        var absolutePercentage = BoundingBox_1.BoundingBox.getAbsoluteSplitPercentage(boundingBox, splitPercentage, direction);
        return __assign(__assign({
        }, BoundingBox_1.BoundingBox.asStyles(boundingBox)), (_a = {
        }, _a[positionStyle] = absolutePercentage + "%", _a));
    };
    Split2.prototype.calculateRelativePercentage = function(event) {
        var _a = this.props, minimumPaneSizePercentage = _a.minimumPaneSizePercentage, direction = _a.direction, boundingBox = _a.boundingBox;
        var parentBBox = this.rootElement.current.parentElement.getBoundingClientRect();
        var location = isTouchEvent(event) ? event.changedTouches[0] : event;
        var absolutePercentage;
        if (direction === 'column') absolutePercentage = (location.clientY - parentBBox.top) / parentBBox.height * 100;
        else absolutePercentage = (location.clientX - parentBBox.left) / parentBBox.width * 100;
        var relativePercentage = BoundingBox_1.BoundingBox.getRelativeSplitPercentage(boundingBox, absolutePercentage, direction);
        return clamp_1.default(relativePercentage, minimumPaneSizePercentage, 100 - minimumPaneSizePercentage);
    };
    Split2.defaultProps = {
        onChange: function() {
            return void 0;
        },
        onRelease: function() {
            return void 0;
        },
        minimumPaneSizePercentage: 20
    };
    return Split2;
}(react_1.default.PureComponent);
exports.Split = Split1;
function isTouchEvent(event) {
    return event.changedTouches != null;
}

},{"classnames":"5aJRc","lodash/clamp":"1h8mP","lodash/throttle":"38vsZ","react":"3b2NM","./util/BoundingBox":"WZBdf"}],"1h8mP":[function(require,module,exports) {
var baseClamp = require('./_baseClamp'), toNumber = require('./toNumber');
/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */ function clamp(number, lower, upper) {
    if (upper === undefined) {
        upper = lower;
        lower = undefined;
    }
    if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
    }
    if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
    }
    return baseClamp(toNumber(number), lower, upper);
}
module.exports = clamp;

},{"./_baseClamp":"xrLwq","./toNumber":"3OPjX"}],"xrLwq":[function(require,module,exports) {
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */ function baseClamp(number, lower, upper) {
    if (number === number) {
        if (upper !== undefined) number = number <= upper ? number : upper;
        if (lower !== undefined) number = number >= lower ? number : lower;
    }
    return number;
}
module.exports = baseClamp;

},{}],"38vsZ":[function(require,module,exports) {
var debounce = require('./debounce'), isObject = require('./isObject');
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */ function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
    if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
    });
}
module.exports = throttle;

},{"./debounce":"t5j8A","./isObject":"3LQRi"}],"WZBdf":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BoundingBox = void 0;
var assertNever_1 = require("./assertNever");
var BoundingBox;
(function(BoundingBox1) {
    function empty() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    }
    BoundingBox1.empty = empty;
    function split(boundingBox, relativeSplitPercentage, direction) {
        var absolutePercentage = getAbsoluteSplitPercentage(boundingBox, relativeSplitPercentage, direction);
        if (direction === 'column') return {
            first: __assign(__assign({
            }, boundingBox), {
                bottom: 100 - absolutePercentage
            }),
            second: __assign(__assign({
            }, boundingBox), {
                top: absolutePercentage
            })
        };
        else if (direction === 'row') return {
            first: __assign(__assign({
            }, boundingBox), {
                right: 100 - absolutePercentage
            }),
            second: __assign(__assign({
            }, boundingBox), {
                left: absolutePercentage
            })
        };
        else return assertNever_1.assertNever(direction);
    }
    BoundingBox1.split = split;
    function getAbsoluteSplitPercentage(boundingBox, relativeSplitPercentage, direction) {
        var top = boundingBox.top, right = boundingBox.right, bottom = boundingBox.bottom, left = boundingBox.left;
        if (direction === 'column') {
            var height = 100 - top - bottom;
            return height * relativeSplitPercentage / 100 + top;
        } else if (direction === 'row') {
            var width = 100 - right - left;
            return width * relativeSplitPercentage / 100 + left;
        } else return assertNever_1.assertNever(direction);
    }
    BoundingBox1.getAbsoluteSplitPercentage = getAbsoluteSplitPercentage;
    function getRelativeSplitPercentage(boundingBox, absoluteSplitPercentage, direction) {
        var top = boundingBox.top, right = boundingBox.right, bottom = boundingBox.bottom, left = boundingBox.left;
        if (direction === 'column') {
            var height = 100 - top - bottom;
            return (absoluteSplitPercentage - top) / height * 100;
        } else if (direction === 'row') {
            var width = 100 - right - left;
            return (absoluteSplitPercentage - left) / width * 100;
        } else return assertNever_1.assertNever(direction);
    }
    BoundingBox1.getRelativeSplitPercentage = getRelativeSplitPercentage;
    function asStyles(_a) {
        var top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        return {
            top: top + "%",
            right: right + "%",
            bottom: bottom + "%",
            left: left + "%"
        };
    }
    BoundingBox1.asStyles = asStyles;
})(BoundingBox = exports.BoundingBox || (exports.BoundingBox = {
}));

},{"./assertNever":"1vPa1"}],"1vPa1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.assertNever = void 0;
function assertNever(shouldBeNever) {
    throw new Error('Unhandled case: ' + JSON.stringify(shouldBeNever));
}
exports.assertNever = assertNever;

},{}],"3sR9b":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAndAssertNodeAtPathExists = exports.getNodeAtPath = exports.getLeaves = exports.getPathToCorner = exports.getOtherDirection = exports.getOtherBranch = exports.createBalancedTreeFromLeaves = exports.isParent = exports.Corner = void 0;
var clone_1 = __importDefault(require("lodash/clone"));
var get_1 = __importDefault(require("lodash/get"));
function alternateDirection(node, direction) {
    if (direction === void 0) direction = 'row';
    if (isParent(node)) {
        var nextDirection = getOtherDirection(direction);
        return {
            direction: direction,
            first: alternateDirection(node.first, nextDirection),
            second: alternateDirection(node.second, nextDirection)
        };
    } else return node;
}
var Corner;
(function(Corner1) {
    Corner1[Corner1["TOP_LEFT"] = 1] = "TOP_LEFT";
    Corner1[Corner1["TOP_RIGHT"] = 2] = "TOP_RIGHT";
    Corner1[Corner1["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    Corner1[Corner1["BOTTOM_RIGHT"] = 4] = "BOTTOM_RIGHT";
})(Corner = exports.Corner || (exports.Corner = {
}));
/**
 * Returns `true` if `node` is a MosaicParent
 * @param node
 * @returns {boolean}
 */ function isParent(node) {
    return node.direction != null;
}
exports.isParent = isParent;
/**
 * Creates a balanced binary tree from `leaves` with the goal of making them as equal area as possible
 * @param leaves
 * @param startDirection
 * @returns {MosaicNode<T>}
 */ function createBalancedTreeFromLeaves(leaves, startDirection) {
    if (startDirection === void 0) startDirection = 'row';
    if (leaves.length === 0) return null;
    var current = clone_1.default(leaves);
    var next = [];
    while(current.length > 1){
        while(current.length > 0)if (current.length > 1) next.push({
            direction: 'row',
            first: current.shift(),
            second: current.shift()
        });
        else next.unshift(current.shift());
        current = next;
        next = [];
    }
    return alternateDirection(current[0], startDirection);
}
exports.createBalancedTreeFromLeaves = createBalancedTreeFromLeaves;
/**
 * Gets the sibling of `branch`
 * @param branch
 * @returns {any}
 */ function getOtherBranch(branch) {
    if (branch === 'first') return 'second';
    else if (branch === 'second') return 'first';
    else throw new Error("Branch '" + branch + "' not a valid branch");
}
exports.getOtherBranch = getOtherBranch;
/**
 * Gets the opposite of `direction`
 * @param direction
 * @returns {any}
 */ function getOtherDirection(direction) {
    if (direction === 'row') return 'column';
    else return 'row';
}
exports.getOtherDirection = getOtherDirection;
/**
 * Traverses `tree` to find the path to the specified `corner`
 * @param tree
 * @param corner
 * @returns {MosaicPath}
 */ function getPathToCorner(tree, corner) {
    var currentNode = tree;
    var currentPath = [];
    while(isParent(currentNode)){
        if (currentNode.direction === 'row' && (corner === Corner.TOP_LEFT || corner === Corner.BOTTOM_LEFT)) {
            currentPath.push('first');
            currentNode = currentNode.first;
        } else if (currentNode.direction === 'column' && (corner === Corner.TOP_LEFT || corner === Corner.TOP_RIGHT)) {
            currentPath.push('first');
            currentNode = currentNode.first;
        } else {
            currentPath.push('second');
            currentNode = currentNode.second;
        }
    }
    return currentPath;
}
exports.getPathToCorner = getPathToCorner;
/**
 * Gets all leaves of `tree`
 * @param tree
 * @returns {T[]}
 */ function getLeaves(tree) {
    if (tree == null) return [];
    else if (isParent(tree)) return getLeaves(tree.first).concat(getLeaves(tree.second));
    else return [
        tree
    ];
}
exports.getLeaves = getLeaves;
/**
 * Gets node at `path` from `tree`
 * @param tree
 * @param path
 * @returns {MosaicNode<T>|null}
 */ function getNodeAtPath(tree, path) {
    if (path.length > 0) return get_1.default(tree, path, null);
    else return tree;
}
exports.getNodeAtPath = getNodeAtPath;
/**
 * Gets node at `path` from `tree` and verifies that neither `tree` nor the result are null
 * @param tree
 * @param path
 * @returns {MosaicNode<T>}
 */ function getAndAssertNodeAtPathExists(tree, path) {
    if (tree == null) throw new Error('Root is empty, cannot fetch path');
    var node = getNodeAtPath(tree, path);
    if (node == null) throw new Error("Path [" + path.join(', ') + "] did not resolve to a node");
    return node;
}
exports.getAndAssertNodeAtPathExists = getAndAssertNodeAtPathExists;

},{"lodash/clone":"2rEpM","lodash/get":"50hr1"}],"2gNU7":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (b1.hasOwnProperty(p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MosaicZeroState = void 0;
var classnames_1 = __importDefault(require("classnames"));
var noop_1 = __importDefault(require("lodash/noop"));
var react_1 = __importDefault(require("react"));
var contextTypes_1 = require("./contextTypes");
var OptionalBlueprint_1 = require("./util/OptionalBlueprint");
var MosaicZeroState1 = function(_super) {
    __extends(MosaicZeroState2, _super);
    function MosaicZeroState2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.replace = function() {
            return Promise.resolve(_this.props.createNode()).then(function(node) {
                return _this.context.mosaicActions.replaceWith([], node);
            }).catch(noop_1.default);
        }; // Swallow rejections (i.e. on user cancel)
        return _this;
    }
    MosaicZeroState2.prototype.render = function() {
        return react_1.default.createElement("div", {
            className: classnames_1.default('mosaic-zero-state', OptionalBlueprint_1.OptionalBlueprint.getClasses('NON_IDEAL_STATE'))
        }, react_1.default.createElement("div", {
            className: OptionalBlueprint_1.OptionalBlueprint.getClasses('NON_IDEAL_STATE_VISUAL')
        }, react_1.default.createElement(OptionalBlueprint_1.OptionalBlueprint.Icon, {
            iconSize: 120,
            icon: "applications"
        })), react_1.default.createElement("h4", {
            className: OptionalBlueprint_1.OptionalBlueprint.getClasses('HEADING')
        }, "No Windows Present"), react_1.default.createElement("div", null, this.props.createNode && react_1.default.createElement("button", {
            className: classnames_1.default(OptionalBlueprint_1.OptionalBlueprint.getClasses('BUTTON'), OptionalBlueprint_1.OptionalBlueprint.getIconClass('ADD')),
            onClick: this.replace
        }, "Add New Window")));
    };
    MosaicZeroState2.contextType = contextTypes_1.MosaicContext;
    return MosaicZeroState2;
}(react_1.default.PureComponent);
exports.MosaicZeroState = MosaicZeroState1;

},{"classnames":"5aJRc","lodash/noop":"72A6N","react":"3b2NM","./contextTypes":"1y8z5","./util/OptionalBlueprint":"5xUbU"}],"5xUbU":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OptionalBlueprint = void 0;
var React = __importStar(require("react"));
var OptionalBlueprint;
(function(OptionalBlueprint1) {
    var _a;
    var Classes;
    var IconNames;
    try {
        // Webpack is quieter about these errors
        // https://github.com/nomcopter/react-mosaic/issues/109
        undefined.resolve('@blueprintjs/core');
        undefined.resolve('@blueprintjs/icons');
        _a = require('@blueprintjs/core'), Classes = _a.Classes, OptionalBlueprint1.Icon = _a.Icon;
        IconNames = require('@blueprintjs/icons').IconNames;
    } catch (_b) {
        OptionalBlueprint1.Icon = function(_a1) {
            var icon = _a1.icon;
            return React.createElement("span", null, icon);
        };
    }
    function getClasses() {
        var names = [];
        for(var _i = 0; _i < arguments.length; _i++)names[_i] = arguments[_i];
        if (Classes) return names.map(function(name) {
            return Classes[name];
        }).join(' ');
        return '';
    }
    OptionalBlueprint1.getClasses = getClasses;
    function getIconClass(iconName) {
        if (Classes && IconNames) return Classes.iconClass(IconNames[iconName]);
        return '';
    }
    OptionalBlueprint1.getIconClass = getIconClass;
})(OptionalBlueprint = exports.OptionalBlueprint || (exports.OptionalBlueprint = {
}));

},{"react":"3b2NM"}],"1XroQ":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (b1.hasOwnProperty(p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RootDropTargets = void 0;
var classnames_1 = __importDefault(require("classnames"));
var values_1 = __importDefault(require("lodash/values"));
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var internalTypes_1 = require("./internalTypes");
var MosaicDropTarget_1 = require("./MosaicDropTarget");
var types_1 = require("./types");
var RootDropTargetsClass1 = function(_super) {
    __extends(RootDropTargetsClass2, _super);
    function RootDropTargetsClass2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootDropTargetsClass2.prototype.render = function() {
        return react_1.default.createElement("div", {
            className: classnames_1.default('drop-target-container', {
                '-dragging': this.props.isDragging
            })
        }, values_1.default(internalTypes_1.MosaicDropTargetPosition).map(function(position) {
            return react_1.default.createElement(MosaicDropTarget_1.MosaicDropTarget, {
                position: position,
                path: [],
                key: position
            });
        }));
    };
    return RootDropTargetsClass2;
}(react_1.default.PureComponent);
var dropTarget = {
};
exports.RootDropTargets = react_dnd_1.DropTarget(types_1.MosaicDragType.WINDOW, dropTarget, function(_connect, monitor) {
    return {
        isDragging: monitor.getItem() !== null && monitor.getItemType() === types_1.MosaicDragType.WINDOW
    };
})(RootDropTargetsClass1);

},{"classnames":"5aJRc","lodash/values":"4m1fx","react":"3b2NM","react-dnd":"6x32O","./internalTypes":"30wZX","./MosaicDropTarget":"20enK","./types":"2FDE8"}],"30wZX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MosaicDropTargetPosition = void 0;
exports.MosaicDropTargetPosition = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right'
};

},{}],"20enK":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (b1.hasOwnProperty(p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MosaicDropTarget = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var contextTypes_1 = require("./contextTypes");
var types_1 = require("./types");
var dropTarget = {
    drop: function(props, monitor, component) {
        if (component.context.mosaicId === (monitor.getItem() || {
        }).mosaicId) return {
            path: props.path,
            position: props.position
        };
        else return {
        };
    }
};
var MosaicDropTargetClass1 = function(_super) {
    __extends(MosaicDropTargetClass2, _super);
    function MosaicDropTargetClass2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MosaicDropTargetClass2.prototype.render = function() {
        var _a = this.props, position = _a.position, isOver = _a.isOver, connectDropTarget = _a.connectDropTarget, draggedMosaicId = _a.draggedMosaicId;
        return connectDropTarget(react_1.default.createElement("div", {
            className: classnames_1.default('drop-target', position, {
                'drop-target-hover': isOver && draggedMosaicId === this.context.mosaicId
            })
        }));
    };
    MosaicDropTargetClass2.contextType = contextTypes_1.MosaicContext;
    return MosaicDropTargetClass2;
}(react_1.default.PureComponent);
exports.MosaicDropTarget = react_dnd_1.DropTarget(types_1.MosaicDragType.WINDOW, dropTarget, function(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        draggedMosaicId: (monitor.getItem() || {
        }).mosaicId
    };
})(MosaicDropTargetClass1);

},{"classnames":"5aJRc","react":"3b2NM","react-dnd":"6x32O","./contextTypes":"1y8z5","./types":"2FDE8"}],"2FDE8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MosaicDragType = void 0;
/**
 * Used by `react-dnd`
 * @type {{WINDOW: string}}
 */ exports.MosaicDragType = {
    WINDOW: 'MosaicWindow'
};

},{}],"4Mkld":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createExpandUpdate = exports.createHideUpdate = exports.createDragToUpdates = exports.createRemoveUpdate = exports.updateTree = exports.buildSpecFromUpdate = void 0;
var immutability_helper_1 = __importDefault(require("immutability-helper"));
var drop_1 = __importDefault(require("lodash/drop"));
var dropRight_1 = __importDefault(require("lodash/dropRight"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var last_1 = __importDefault(require("lodash/last"));
var set_1 = __importDefault(require("lodash/set"));
var take_1 = __importDefault(require("lodash/take"));
var internalTypes_1 = require("../internalTypes");
var mosaicUtilities_1 = require("./mosaicUtilities");
/**
 * Used to prepare `update` for `immutability-helper`
 * @param mosaicUpdate
 * @returns {any}
 */ function buildSpecFromUpdate(mosaicUpdate) {
    if (mosaicUpdate.path.length > 0) return set_1.default({
    }, mosaicUpdate.path, mosaicUpdate.spec);
    else return mosaicUpdate.spec;
}
exports.buildSpecFromUpdate = buildSpecFromUpdate;
/**
 * Applies `updates` to `root`
 * @param root
 * @param updates
 * @returns {MosaicNode<T>}
 */ function updateTree(root, updates) {
    var currentNode = root;
    updates.forEach(function(mUpdate) {
        currentNode = immutability_helper_1.default(currentNode, buildSpecFromUpdate(mUpdate));
    });
    return currentNode;
}
exports.updateTree = updateTree;
/**
 * Creates a `MosaicUpdate<T>` to remove the node at `path` from `root`
 * @param root
 * @param path
 * @returns {{path: T[], spec: {$set: MosaicNode<T>}}}
 */ function createRemoveUpdate(root, path) {
    var parentPath = dropRight_1.default(path);
    var nodeToRemove = last_1.default(path);
    var siblingPath = parentPath.concat(mosaicUtilities_1.getOtherBranch(nodeToRemove));
    var sibling = mosaicUtilities_1.getAndAssertNodeAtPathExists(root, siblingPath);
    return {
        path: parentPath,
        spec: {
            $set: sibling
        }
    };
}
exports.createRemoveUpdate = createRemoveUpdate;
function isPathPrefixEqual(a, b, length) {
    return isEqual_1.default(take_1.default(a, length), take_1.default(b, length));
}
/**
 * Creates a `MosaicUpdate<T>` to split the _leaf_ at `destinationPath` into a node of it and the node from `sourcePath`
 * placing the node from `sourcePath` in `position`.
 * @param root
 * @param sourcePath
 * @param destinationPath
 * @param position
 * @returns {(MosaicUpdate<T>|{path: MosaicPath, spec: {$set: {first: MosaicNode<T>, second: MosaicNode<T>, direction: MosaicDirection}}})[]}
 */ function createDragToUpdates(root, sourcePath, destinationPath, position) {
    var destinationNode = mosaicUtilities_1.getAndAssertNodeAtPathExists(root, destinationPath);
    var updates = [];
    var destinationIsParentOfSource = isPathPrefixEqual(sourcePath, destinationPath, destinationPath.length);
    if (destinationIsParentOfSource) // Must explicitly remove source from the destination node
    destinationNode = updateTree(destinationNode, [
        createRemoveUpdate(destinationNode, drop_1.default(sourcePath, destinationPath.length)), 
    ]);
    else {
        // Can remove source normally
        updates.push(createRemoveUpdate(root, sourcePath));
        // Have to drop in the correct destination after the source has been removed
        var removedNodeParentIsInPath = isPathPrefixEqual(sourcePath, destinationPath, sourcePath.length - 1);
        if (removedNodeParentIsInPath) destinationPath.splice(sourcePath.length - 1, 1);
    }
    var sourceNode = mosaicUtilities_1.getAndAssertNodeAtPathExists(root, sourcePath);
    var first;
    var second;
    if (position === internalTypes_1.MosaicDropTargetPosition.LEFT || position === internalTypes_1.MosaicDropTargetPosition.TOP) {
        first = sourceNode;
        second = destinationNode;
    } else {
        first = destinationNode;
        second = sourceNode;
    }
    var direction = 'column';
    if (position === internalTypes_1.MosaicDropTargetPosition.LEFT || position === internalTypes_1.MosaicDropTargetPosition.RIGHT) direction = 'row';
    updates.push({
        path: destinationPath,
        spec: {
            $set: {
                first: first,
                second: second,
                direction: direction
            }
        }
    });
    return updates;
}
exports.createDragToUpdates = createDragToUpdates;
/**
 * Sets the splitPercentage to hide the node at `path`
 * @param path
 * @returns {{path: T[], spec: {splitPercentage: {$set: number}}}}
 */ function createHideUpdate(path) {
    var targetPath = dropRight_1.default(path);
    var thisBranch = last_1.default(path);
    var splitPercentage;
    if (thisBranch === 'first') splitPercentage = 0;
    else splitPercentage = 100;
    return {
        path: targetPath,
        spec: {
            splitPercentage: {
                $set: splitPercentage
            }
        }
    };
}
exports.createHideUpdate = createHideUpdate;
/**
 * Sets the splitPercentage of node at `path` and all of its parents to `percentage` in order to expand it
 * @param path
 * @param percentage
 * @returns {{spec: MosaicUpdateSpec<T>, path: Array}}
 */ function createExpandUpdate(path, percentage) {
    var _a;
    var spec = {
    };
    for(var i = path.length - 1; i >= 0; i--){
        var branch = path[i];
        var splitPercentage = branch === 'first' ? percentage : 100 - percentage;
        spec = (_a = {
            splitPercentage: {
                $set: splitPercentage
            }
        }, _a[branch] = spec, _a);
    }
    return {
        spec: spec,
        path: []
    };
}
exports.createExpandUpdate = createExpandUpdate;

},{"immutability-helper":"1a715","lodash/drop":"2mumW","lodash/dropRight":"3GObN","lodash/isEqual":"2pVP2","lodash/last":"3UNgA","lodash/set":"4e3lV","lodash/take":"2sNKt","../internalTypes":"30wZX","./mosaicUtilities":"3sR9b"}],"1a715":[function(require,module,exports) {
var process = require("process");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function stringifiable(obj) {
    // Safely stringify Object.create(null)
    /* istanbul ignore next */ return typeof obj === 'object' && !('toString' in obj) ? Object.prototype.toString.call(obj).slice(8, -1) : obj;
}
var isProduction = typeof process === 'object' && false;
function invariant(condition, message) {
    if (!condition) {
        /* istanbul ignore next */ if (isProduction) throw new Error('Invariant failed');
        throw new Error(message());
    }
}
exports.invariant = invariant;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;
var toString = Object.prototype.toString;
function type(obj) {
    return toString.call(obj).slice(8, -1);
}
var assign = Object.assign || function(target, source) {
    getAllKeys(source).forEach(function(key) {
        if (hasOwnProperty.call(source, key)) target[key] = source[key];
    });
    return target;
};
var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ? function(obj) {
    return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj));
} : function(obj) {
    return Object.keys(obj);
};
function copy(object) {
    return Array.isArray(object) ? assign(object.constructor(object.length), object) : type(object) === 'Map' ? new Map(object) : type(object) === 'Set' ? new Set(object) : object && typeof object === 'object' ? assign(Object.create(Object.getPrototypeOf(object)), object) : object;
}
var Context = function() {
    function Context1() {
        this.commands = assign({
        }, defaultCommands);
        this.update = this.update.bind(this);
        // Deprecated: update.extend, update.isEquals and update.newContext
        this.update.extend = this.extend = this.extend.bind(this);
        this.update.isEquals = function(x, y) {
            return x === y;
        };
        this.update.newContext = function() {
            return new Context1().update;
        };
    }
    Object.defineProperty(Context1.prototype, "isEquals", {
        get: function() {
            return this.update.isEquals;
        },
        set: function(value) {
            this.update.isEquals = value;
        },
        enumerable: true,
        configurable: true
    });
    Context1.prototype.extend = function(directive, fn) {
        this.commands[directive] = fn;
    };
    Context1.prototype.update = function(object, $spec) {
        var _this = this;
        var spec = typeof $spec === 'function' ? {
            $apply: $spec
        } : $spec;
        if (!(Array.isArray(object) && Array.isArray(spec))) invariant(!Array.isArray(spec), function() {
            return "update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value.";
        });
        invariant(typeof spec === 'object' && spec !== null, function() {
            return "update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the " + ("following commands: " + Object.keys(_this.commands).join(', ') + ".");
        });
        var nextObject = object;
        getAllKeys(spec).forEach(function(key) {
            if (hasOwnProperty.call(_this.commands, key)) {
                var objectWasNextObject = object === nextObject;
                nextObject = _this.commands[key](spec[key], nextObject, spec, object);
                if (objectWasNextObject && _this.isEquals(nextObject, object)) nextObject = object;
            } else {
                var nextValueForKey = type(object) === 'Map' ? _this.update(object.get(key), spec[key]) : _this.update(object[key], spec[key]);
                var nextObjectValue = type(nextObject) === 'Map' ? nextObject.get(key) : nextObject[key];
                if (!_this.isEquals(nextValueForKey, nextObjectValue) || typeof nextValueForKey === 'undefined' && !hasOwnProperty.call(object, key)) {
                    if (nextObject === object) nextObject = copy(object);
                    if (type(nextObject) === 'Map') nextObject.set(key, nextValueForKey);
                    else nextObject[key] = nextValueForKey;
                }
            }
        });
        return nextObject;
    };
    return Context1;
}();
exports.Context = Context;
var defaultCommands = {
    $push: function(value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$push');
        return value.length ? nextObject.concat(value) : nextObject;
    },
    $unshift: function(value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$unshift');
        return value.length ? value.concat(nextObject) : nextObject;
    },
    $splice: function(value, nextObject, spec, originalObject) {
        invariantSplices(nextObject, spec);
        value.forEach(function(args) {
            invariantSplice(args);
            if (nextObject === originalObject && args.length) nextObject = copy(originalObject);
            splice.apply(nextObject, args);
        });
        return nextObject;
    },
    $set: function(value, _nextObject, spec) {
        invariantSet(spec);
        return value;
    },
    $toggle: function(targets, nextObject) {
        invariantSpecArray(targets, '$toggle');
        var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;
        targets.forEach(function(target) {
            nextObjectCopy[target] = !nextObject[target];
        });
        return nextObjectCopy;
    },
    $unset: function(value, nextObject, _spec, originalObject) {
        invariantSpecArray(value, '$unset');
        value.forEach(function(key) {
            if (Object.hasOwnProperty.call(nextObject, key)) {
                if (nextObject === originalObject) nextObject = copy(originalObject);
                delete nextObject[key];
            }
        });
        return nextObject;
    },
    $add: function(values, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$add');
        invariantSpecArray(values, '$add');
        if (type(nextObject) === 'Map') values.forEach(function(_a) {
            var key = _a[0], value = _a[1];
            if (nextObject === originalObject && nextObject.get(key) !== value) nextObject = copy(originalObject);
            nextObject.set(key, value);
        });
        else values.forEach(function(value) {
            if (nextObject === originalObject && !nextObject.has(value)) nextObject = copy(originalObject);
            nextObject.add(value);
        });
        return nextObject;
    },
    $remove: function(value, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$remove');
        invariantSpecArray(value, '$remove');
        value.forEach(function(key) {
            if (nextObject === originalObject && nextObject.has(key)) nextObject = copy(originalObject);
            nextObject.delete(key);
        });
        return nextObject;
    },
    $merge: function(value, nextObject, _spec, originalObject) {
        invariantMerge(nextObject, value);
        getAllKeys(value).forEach(function(key) {
            if (value[key] !== nextObject[key]) {
                if (nextObject === originalObject) nextObject = copy(originalObject);
                nextObject[key] = value[key];
            }
        });
        return nextObject;
    },
    $apply: function(value, original) {
        invariantApply(value);
        return value(original);
    }
};
var defaultContext = new Context();
exports.isEquals = defaultContext.update.isEquals;
exports.extend = defaultContext.extend;
exports.default = defaultContext.update;
// @ts-ignore
exports.default.default = module.exports = assign(exports.default, exports);
// invariants
function invariantPushAndUnshift(value, spec, command) {
    invariant(Array.isArray(value), function() {
        return "update(): expected target of " + stringifiable(command) + " to be an array; got " + stringifiable(value) + ".";
    });
    invariantSpecArray(spec[command], command);
}
function invariantSpecArray(spec, command) {
    invariant(Array.isArray(spec), function() {
        return "update(): expected spec of " + stringifiable(command) + " to be an array; got " + stringifiable(spec) + ". " + "Did you forget to wrap your parameter in an array?";
    });
}
function invariantSplices(value, spec) {
    invariant(Array.isArray(value), function() {
        return "Expected $splice target to be an array; got " + stringifiable(value);
    });
    invariantSplice(spec.$splice);
}
function invariantSplice(value) {
    invariant(Array.isArray(value), function() {
        return "update(): expected spec of $splice to be an array of arrays; got " + stringifiable(value) + ". " + "Did you forget to wrap your parameters in an array?";
    });
}
function invariantApply(fn) {
    invariant(typeof fn === 'function', function() {
        return "update(): expected spec of $apply to be a function; got " + stringifiable(fn) + ".";
    });
}
function invariantSet(spec) {
    invariant(Object.keys(spec).length === 1, function() {
        return "Cannot have more than one key in an object with $set";
    });
}
function invariantMerge(target, specValue) {
    invariant(specValue && typeof specValue === 'object', function() {
        return "update(): $merge expects a spec of type 'object'; got " + stringifiable(specValue);
    });
    invariant(target && typeof target === 'object', function() {
        return "update(): $merge expects a target of type 'object'; got " + stringifiable(target);
    });
}
function invariantMapOrSet(target, command) {
    var typeOfTarget = type(target);
    invariant(typeOfTarget === 'Map' || typeOfTarget === 'Set', function() {
        return "update(): " + stringifiable(command) + " expects a target of type Set or Map; got " + stringifiable(typeOfTarget);
    });
}

},{"process":"7AgFc"}],"2mumW":[function(require,module,exports) {
var baseSlice = require('./_baseSlice'), toInteger = require('./toInteger');
/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */ function drop(array, n, guard) {
    var length = array == null ? 0 : array.length;
    if (!length) return [];
    n = guard || n === undefined ? 1 : toInteger(n);
    return baseSlice(array, n < 0 ? 0 : n, length);
}
module.exports = drop;

},{"./_baseSlice":"4SBSI","./toInteger":"782uM"}],"3GObN":[function(require,module,exports) {
var baseSlice = require('./_baseSlice'), toInteger = require('./toInteger');
/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * _.dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * _.dropRight([1, 2, 3], 5);
 * // => []
 *
 * _.dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */ function dropRight(array, n, guard) {
    var length = array == null ? 0 : array.length;
    if (!length) return [];
    n = guard || n === undefined ? 1 : toInteger(n);
    n = length - n;
    return baseSlice(array, 0, n < 0 ? 0 : n);
}
module.exports = dropRight;

},{"./_baseSlice":"4SBSI","./toInteger":"782uM"}],"2pVP2":[function(require,module,exports) {
var baseIsEqual = require('./_baseIsEqual');
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */ function isEqual(value, other) {
    return baseIsEqual(value, other);
}
module.exports = isEqual;

},{"./_baseIsEqual":"LqWEv"}],"2sNKt":[function(require,module,exports) {
var baseSlice = require('./_baseSlice'), toInteger = require('./toInteger');
/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */ function take(array, n, guard) {
    if (!(array && array.length)) return [];
    n = guard || n === undefined ? 1 : toInteger(n);
    return baseSlice(array, 0, n < 0 ? 0 : n);
}
module.exports = take;

},{"./_baseSlice":"4SBSI","./toInteger":"782uM"}],"53z8g":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (b1.hasOwnProperty(p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MosaicWindow = exports.SourceDropConnectedInternalMosaicWindow = exports.SourceConnectedInternalMosaicWindow = exports.InternalMosaicWindow = void 0;
var classnames_1 = __importDefault(require("classnames"));
var defer_1 = __importDefault(require("lodash/defer"));
var dropRight_1 = __importDefault(require("lodash/dropRight"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var values_1 = __importDefault(require("lodash/values"));
var react_1 = __importDefault(require("react"));
var react_dnd_1 = require("react-dnd");
var defaultToolbarControls_1 = require("./buttons/defaultToolbarControls");
var Separator_1 = require("./buttons/Separator");
var contextTypes_1 = require("./contextTypes");
var internalTypes_1 = require("./internalTypes");
var MosaicDropTarget_1 = require("./MosaicDropTarget");
var types_1 = require("./types");
var mosaicUpdates_1 = require("./util/mosaicUpdates");
var mosaicUtilities_1 = require("./util/mosaicUtilities");
var OptionalBlueprint_1 = require("./util/OptionalBlueprint");
var InternalMosaicWindow1 = function(_super) {
    __extends(InternalMosaicWindow2, _super);
    function InternalMosaicWindow2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            additionalControlsOpen: false
        };
        _this.rootElement = null;
        _this.renderDropTarget = function(position) {
            var path = _this.props.path;
            return react_1.default.createElement(MosaicDropTarget_1.MosaicDropTarget, {
                position: position,
                path: path,
                key: position
            });
        };
        _this.split = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            _this.checkCreateNode();
            var _a = _this.props, createNode = _a.createNode, path = _a.path;
            var mosaicActions = _this.context.mosaicActions;
            var root = mosaicActions.getRoot();
            var direction = _this.rootElement.offsetWidth > _this.rootElement.offsetHeight ? 'row' : 'column';
            return Promise.resolve(createNode.apply(void 0, args)).then(function(second) {
                return mosaicActions.replaceWith(path, {
                    direction: direction,
                    second: second,
                    first: mosaicUtilities_1.getAndAssertNodeAtPathExists(root, path)
                });
            });
        };
        _this.swap = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            _this.checkCreateNode();
            var mosaicActions = _this.context.mosaicActions;
            var _a = _this.props, createNode = _a.createNode, path = _a.path;
            return Promise.resolve(createNode.apply(void 0, args)).then(function(node) {
                return mosaicActions.replaceWith(path, node);
            });
        };
        _this.setAdditionalControlsOpen = function(additionalControlsOpen) {
            _this.setState({
                additionalControlsOpen: additionalControlsOpen
            });
        };
        _this.getPath = function() {
            return _this.props.path;
        };
        _this.connectDragSource = function(connectedElements) {
            var connectDragSource = _this.props.connectDragSource;
            return connectDragSource(connectedElements);
        };
        _this.childContext = {
            mosaicWindowActions: {
                split: _this.split,
                replaceWithNew: _this.swap,
                setAdditionalControlsOpen: _this.setAdditionalControlsOpen,
                getPath: _this.getPath,
                connectDragSource: _this.connectDragSource
            }
        };
        return _this;
    }
    InternalMosaicWindow2.prototype.render = function() {
        var _this = this;
        var _a = this.props, className = _a.className, isOver = _a.isOver, renderPreview = _a.renderPreview, additionalControls = _a.additionalControls, connectDropTarget = _a.connectDropTarget, connectDragPreview = _a.connectDragPreview, draggedMosaicId = _a.draggedMosaicId;
        return react_1.default.createElement(contextTypes_1.MosaicWindowContext.Provider, {
            value: this.childContext
        }, connectDropTarget(react_1.default.createElement("div", {
            className: classnames_1.default('mosaic-window mosaic-drop-target', className, {
                'drop-target-hover': isOver && draggedMosaicId === this.context.mosaicId,
                'additional-controls-open': this.state.additionalControlsOpen
            }),
            ref: function(element) {
                return _this.rootElement = element;
            }
        }, this.renderToolbar(), react_1.default.createElement("div", {
            className: "mosaic-window-body"
        }, this.props.children), react_1.default.createElement("div", {
            className: "mosaic-window-body-overlay",
            onClick: function() {
                return _this.setAdditionalControlsOpen(false);
            }
        }), react_1.default.createElement("div", {
            className: "mosaic-window-additional-actions-bar"
        }, additionalControls), connectDragPreview(renderPreview(this.props)), react_1.default.createElement("div", {
            className: "drop-target-container"
        }, values_1.default(internalTypes_1.MosaicDropTargetPosition).map(this.renderDropTarget)))));
    };
    InternalMosaicWindow2.prototype.getToolbarControls = function() {
        var _a = this.props, toolbarControls = _a.toolbarControls, createNode = _a.createNode;
        if (toolbarControls) return toolbarControls;
        else if (createNode) return defaultToolbarControls_1.DEFAULT_CONTROLS_WITH_CREATION;
        else return defaultToolbarControls_1.DEFAULT_CONTROLS_WITHOUT_CREATION;
    };
    InternalMosaicWindow2.prototype.renderToolbar = function() {
        var _a;
        var _this = this;
        var _b = this.props, title = _b.title, draggable = _b.draggable, additionalControls = _b.additionalControls, additionalControlButtonText = _b.additionalControlButtonText, path = _b.path, renderToolbar = _b.renderToolbar;
        var additionalControlsOpen = this.state.additionalControlsOpen;
        var toolbarControls = this.getToolbarControls();
        var draggableAndNotRoot = draggable && path.length > 0;
        var connectIfDraggable = draggableAndNotRoot ? this.props.connectDragSource : function(el) {
            return el;
        };
        if (renderToolbar) {
            var connectedToolbar = connectIfDraggable(renderToolbar(this.props, draggable));
            return react_1.default.createElement("div", {
                className: classnames_1.default('mosaic-window-toolbar', {
                    draggable: draggableAndNotRoot
                })
            }, connectedToolbar);
        }
        var titleDiv = connectIfDraggable(react_1.default.createElement("div", {
            title: title,
            className: "mosaic-window-title"
        }, title));
        var hasAdditionalControls = !isEmpty_1.default(additionalControls);
        return react_1.default.createElement("div", {
            className: classnames_1.default('mosaic-window-toolbar', {
                draggable: draggableAndNotRoot
            })
        }, titleDiv, react_1.default.createElement("div", {
            className: classnames_1.default('mosaic-window-controls', OptionalBlueprint_1.OptionalBlueprint.getClasses('BUTTON_GROUP'))
        }, hasAdditionalControls && react_1.default.createElement("button", {
            onClick: function() {
                return _this.setAdditionalControlsOpen(!additionalControlsOpen);
            },
            className: classnames_1.default(OptionalBlueprint_1.OptionalBlueprint.getClasses('BUTTON', 'MINIMAL'), OptionalBlueprint_1.OptionalBlueprint.getIconClass('MORE'), (_a = {
            }, _a[OptionalBlueprint_1.OptionalBlueprint.getClasses('ACTIVE')] = additionalControlsOpen, _a))
        }, react_1.default.createElement("span", {
            className: "control-text"
        }, additionalControlButtonText)), hasAdditionalControls && react_1.default.createElement(Separator_1.Separator, null), toolbarControls));
    };
    InternalMosaicWindow2.prototype.checkCreateNode = function() {
        if (this.props.createNode == null) throw new Error('Operation invalid unless `createNode` is defined');
    };
    InternalMosaicWindow2.defaultProps = {
        additionalControlButtonText: 'More',
        draggable: true,
        renderPreview: function(_a) {
            var title = _a.title;
            return react_1.default.createElement("div", {
                className: "mosaic-preview"
            }, react_1.default.createElement("div", {
                className: "mosaic-window-toolbar"
            }, react_1.default.createElement("div", {
                className: "mosaic-window-title"
            }, title)), react_1.default.createElement("div", {
                className: "mosaic-window-body"
            }, react_1.default.createElement("h4", null, title), react_1.default.createElement(OptionalBlueprint_1.OptionalBlueprint.Icon, {
                iconSize: 72,
                icon: "application"
            })));
        },
        renderToolbar: null
    };
    InternalMosaicWindow2.contextType = contextTypes_1.MosaicContext;
    return InternalMosaicWindow2;
}(react_1.default.Component);
exports.InternalMosaicWindow = InternalMosaicWindow1;
var dragSource = {
    beginDrag: function(props, _monitor, component) {
        if (props.onDragStart) props.onDragStart();
        // TODO: Actually just delete instead of hiding
        // The defer is necessary as the element must be present on start for HTML DnD to not cry
        var hideTimer = defer_1.default(function() {
            return component.context.mosaicActions.hide(component.props.path);
        });
        return {
            mosaicId: component.context.mosaicId,
            hideTimer: hideTimer
        };
    },
    endDrag: function(props, monitor, component) {
        var hideTimer = monitor.getItem().hideTimer;
        // If the hide call hasn't happened yet, cancel it
        window.clearTimeout(hideTimer);
        var ownPath = component.props.path;
        var dropResult = monitor.getDropResult() || {
        };
        var mosaicActions = component.context.mosaicActions;
        var position = dropResult.position, destinationPath = dropResult.path;
        if (position != null && destinationPath != null && !isEqual_1.default(destinationPath, ownPath)) {
            mosaicActions.updateTree(mosaicUpdates_1.createDragToUpdates(mosaicActions.getRoot(), ownPath, destinationPath, position));
            if (props.onDragEnd) props.onDragEnd('drop');
        } else {
            // TODO: restore node from captured state
            mosaicActions.updateTree([
                {
                    path: dropRight_1.default(ownPath),
                    spec: {
                        splitPercentage: {
                            $set: null
                        }
                    }
                }, 
            ]);
            if (props.onDragEnd) props.onDragEnd('reset');
        }
    }
};
var dropTarget = {
};
// Each step exported here just to keep react-hot-loader happy
exports.SourceConnectedInternalMosaicWindow = react_dnd_1.DragSource(types_1.MosaicDragType.WINDOW, dragSource, function(connect, _monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview()
    };
})(InternalMosaicWindow1);
exports.SourceDropConnectedInternalMosaicWindow = react_dnd_1.DropTarget(types_1.MosaicDragType.WINDOW, dropTarget, function(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        draggedMosaicId: (monitor.getItem() || {
        }).mosaicId
    };
})(exports.SourceConnectedInternalMosaicWindow);
var MosaicWindow1 = function(_super) {
    __extends(MosaicWindow2, _super);
    function MosaicWindow2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MosaicWindow2.prototype.render = function() {
        return react_1.default.createElement(exports.SourceDropConnectedInternalMosaicWindow, __assign({
        }, this.props));
    };
    return MosaicWindow2;
}(react_1.default.PureComponent);
exports.MosaicWindow = MosaicWindow1;

},{"classnames":"5aJRc","lodash/defer":"72nCu","lodash/dropRight":"3GObN","lodash/isEmpty":"6SdK4","lodash/isEqual":"2pVP2","lodash/values":"4m1fx","react":"3b2NM","react-dnd":"6x32O","./buttons/defaultToolbarControls":"Gks8R","./buttons/Separator":"4pwmQ","./contextTypes":"1y8z5","./internalTypes":"30wZX","./MosaicDropTarget":"20enK","./types":"2FDE8","./util/mosaicUpdates":"4Mkld","./util/mosaicUtilities":"3sR9b","./util/OptionalBlueprint":"5xUbU"}],"72nCu":[function(require,module,exports) {
var baseDelay = require('./_baseDelay'), baseRest = require('./_baseRest');
/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function(text) {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one millisecond.
 */ var defer = baseRest(function(func, args) {
    return baseDelay(func, 1, args);
});
module.exports = defer;

},{"./_baseDelay":"7f5gd","./_baseRest":"6dIcq"}],"7f5gd":[function(require,module,exports) {
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */ function baseDelay(func, wait, args) {
    if (typeof func != 'function') throw new TypeError(FUNC_ERROR_TEXT);
    return setTimeout(function() {
        func.apply(undefined, args);
    }, wait);
}
module.exports = baseDelay;

},{}],"Gks8R":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_CONTROLS_WITHOUT_CREATION = exports.DEFAULT_CONTROLS_WITH_CREATION = void 0;
var react_1 = __importDefault(require("react"));
var ExpandButton_1 = require("./ExpandButton");
var RemoveButton_1 = require("./RemoveButton");
var ReplaceButton_1 = require("./ReplaceButton");
var SplitButton_1 = require("./SplitButton");
exports.DEFAULT_CONTROLS_WITH_CREATION = react_1.default.Children.toArray([
    react_1.default.createElement(ReplaceButton_1.ReplaceButton, null),
    react_1.default.createElement(SplitButton_1.SplitButton, null),
    react_1.default.createElement(ExpandButton_1.ExpandButton, null),
    react_1.default.createElement(RemoveButton_1.RemoveButton, null), 
]);
exports.DEFAULT_CONTROLS_WITHOUT_CREATION = react_1.default.Children.toArray([
    react_1.default.createElement(ExpandButton_1.ExpandButton, null),
    react_1.default.createElement(RemoveButton_1.RemoveButton, null)
]);

},{"react":"3b2NM","./ExpandButton":"194NE","./RemoveButton":"3ldgP","./ReplaceButton":"4ww95","./SplitButton":"3WKnb"}],"194NE":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (b1.hasOwnProperty(p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExpandButton = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var contextTypes_1 = require("../contextTypes");
var OptionalBlueprint_1 = require("../util/OptionalBlueprint");
var MosaicButton_1 = require("./MosaicButton");
var ExpandButton1 = function(_super) {
    __extends(ExpandButton2, _super);
    function ExpandButton2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpandButton2.prototype.render = function() {
        var _this = this;
        return react_1.default.createElement(contextTypes_1.MosaicContext.Consumer, null, function(_a) {
            var mosaicActions = _a.mosaicActions;
            return MosaicButton_1.createDefaultToolbarButton('Expand', classnames_1.default('expand-button', OptionalBlueprint_1.OptionalBlueprint.getIconClass('MAXIMIZE')), _this.createExpand(mosaicActions));
        });
    };
    ExpandButton2.prototype.createExpand = function(mosaicActions) {
        var _this = this;
        return function() {
            mosaicActions.expand(_this.context.mosaicWindowActions.getPath());
            if (_this.props.onClick) _this.props.onClick();
        };
    };
    ExpandButton2.contextType = contextTypes_1.MosaicWindowContext;
    return ExpandButton2;
}(react_1.default.PureComponent);
exports.ExpandButton = ExpandButton1;

},{"classnames":"5aJRc","react":"3b2NM","../contextTypes":"1y8z5","../util/OptionalBlueprint":"5xUbU","./MosaicButton":"6vGOt"}],"6vGOt":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDefaultToolbarButton = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var OptionalBlueprint_1 = require("../util/OptionalBlueprint");
function createDefaultToolbarButton(title, className, onClick, text) {
    return react_1.default.createElement("button", {
        title: title,
        onClick: onClick,
        className: classnames_1.default('mosaic-default-control', OptionalBlueprint_1.OptionalBlueprint.getClasses('BUTTON', 'MINIMAL'), className)
    }, text && react_1.default.createElement("span", {
        className: "control-text"
    }, text));
}
exports.createDefaultToolbarButton = createDefaultToolbarButton;

},{"classnames":"5aJRc","react":"3b2NM","../util/OptionalBlueprint":"5xUbU"}],"3ldgP":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (b1.hasOwnProperty(p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RemoveButton = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var contextTypes_1 = require("../contextTypes");
var OptionalBlueprint_1 = require("../util/OptionalBlueprint");
var MosaicButton_1 = require("./MosaicButton");
var RemoveButton1 = function(_super) {
    __extends(RemoveButton2, _super);
    function RemoveButton2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoveButton2.prototype.render = function() {
        var _this = this;
        return react_1.default.createElement(contextTypes_1.MosaicContext.Consumer, null, function(_a) {
            var mosaicActions = _a.mosaicActions;
            return MosaicButton_1.createDefaultToolbarButton('Close Window', classnames_1.default('close-button', OptionalBlueprint_1.OptionalBlueprint.getIconClass('CROSS')), _this.createRemove(mosaicActions));
        });
    };
    RemoveButton2.prototype.createRemove = function(mosaicActions) {
        var _this = this;
        return function() {
            mosaicActions.remove(_this.context.mosaicWindowActions.getPath());
            if (_this.props.onClick) _this.props.onClick();
        };
    };
    RemoveButton2.contextType = contextTypes_1.MosaicWindowContext;
    return RemoveButton2;
}(react_1.default.PureComponent);
exports.RemoveButton = RemoveButton1;

},{"classnames":"5aJRc","react":"3b2NM","../contextTypes":"1y8z5","../util/OptionalBlueprint":"5xUbU","./MosaicButton":"6vGOt"}],"4ww95":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (b1.hasOwnProperty(p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReplaceButton = void 0;
var classnames_1 = __importDefault(require("classnames"));
var noop_1 = __importDefault(require("lodash/noop"));
var react_1 = __importDefault(require("react"));
var contextTypes_1 = require("../contextTypes");
var OptionalBlueprint_1 = require("../util/OptionalBlueprint");
var MosaicButton_1 = require("./MosaicButton");
var ReplaceButton1 = function(_super) {
    __extends(ReplaceButton2, _super);
    function ReplaceButton2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.replace = function() {
            _this.context.mosaicWindowActions.replaceWithNew().then(function() {
                if (_this.props.onClick) _this.props.onClick();
            }).catch(noop_1.default); // Swallow rejections (i.e. on user cancel)
        };
        return _this;
    }
    ReplaceButton2.prototype.render = function() {
        return MosaicButton_1.createDefaultToolbarButton('Replace Window', classnames_1.default('replace-button', OptionalBlueprint_1.OptionalBlueprint.getIconClass('EXCHANGE')), this.replace);
    };
    ReplaceButton2.contextType = contextTypes_1.MosaicWindowContext;
    return ReplaceButton2;
}(react_1.default.PureComponent);
exports.ReplaceButton = ReplaceButton1;

},{"classnames":"5aJRc","lodash/noop":"72A6N","react":"3b2NM","../contextTypes":"1y8z5","../util/OptionalBlueprint":"5xUbU","./MosaicButton":"6vGOt"}],"3WKnb":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (b1.hasOwnProperty(p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SplitButton = void 0;
var classnames_1 = __importDefault(require("classnames"));
var noop_1 = __importDefault(require("lodash/noop"));
var react_1 = __importDefault(require("react"));
var contextTypes_1 = require("../contextTypes");
var OptionalBlueprint_1 = require("../util/OptionalBlueprint");
var MosaicButton_1 = require("./MosaicButton");
var SplitButton1 = function(_super) {
    __extends(SplitButton2, _super);
    function SplitButton2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.split = function() {
            _this.context.mosaicWindowActions.split().then(function() {
                if (_this.props.onClick) _this.props.onClick();
            }).catch(noop_1.default); // Swallow rejections (i.e. on user cancel)
        };
        return _this;
    }
    SplitButton2.prototype.render = function() {
        return MosaicButton_1.createDefaultToolbarButton('Split Window', classnames_1.default('split-button', OptionalBlueprint_1.OptionalBlueprint.getIconClass('ADD_COLUMN_RIGHT')), this.split);
    };
    SplitButton2.contextType = contextTypes_1.MosaicWindowContext;
    return SplitButton2;
}(react_1.default.PureComponent);
exports.SplitButton = SplitButton1;

},{"classnames":"5aJRc","lodash/noop":"72A6N","react":"3b2NM","../contextTypes":"1y8z5","../util/OptionalBlueprint":"5xUbU","./MosaicButton":"6vGOt"}],"4pwmQ":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (b1.hasOwnProperty(p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Separator = void 0;
var react_1 = __importDefault(require("react"));
var Separator1 = function(_super) {
    __extends(Separator2, _super);
    function Separator2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Separator2.prototype.render = function() {
        return react_1.default.createElement("div", {
            className: "separator"
        });
    };
    return Separator2;
}(react_1.default.PureComponent);
exports.Separator = Separator1;

},{"react":"3b2NM"}],"1yAum":[function(require,module,exports) {
var baseDifference = require('./_baseDifference'), baseFlatten = require('./_baseFlatten'), baseRest = require('./_baseRest'), isArrayLikeObject = require('./isArrayLikeObject');
/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */ var difference = baseRest(function(array, values) {
    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
});
module.exports = difference;

},{"./_baseDifference":"5EXCM","./_baseFlatten":"6zliP","./_baseRest":"6dIcq","./isArrayLikeObject":"2KV7l"}],"3bYdt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _styles = require("@material-ui/core/styles");
var _reactI18next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _MosaicRenderPreview = require("../components/MosaicRenderPreview");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
/** */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    return {
        title: _selectors.getManifestTitle(state, {
            windowId: windowId
        })
    };
};
/**
 *
 * @param theme
 */ var styles = function styles1(theme) {
    return {
        preview: _objectSpread({
        }, theme.typography.h4)
    };
};
var enhance = _redux.compose(_styles.withStyles(styles), _reactI18next.withTranslation(), _reactRedux.connect(mapStateToProps, null), _withPlugins.withPlugins('MosaicRenderPreview'));
var _default = enhance(_MosaicRenderPreview.MosaicRenderPreview);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","@material-ui/core/styles":"1Rdvd","react-i18next":"6hlRL","../extend/withPlugins":"5PNwJ","../state/selectors":"5Trnc","../components/MosaicRenderPreview":"6Te54"}],"6Te54":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MosaicRenderPreview = MosaicRenderPreview;
var _react = _interopRequireDefault(require("react"));
var _MinimalWindow = _interopRequireDefault(require("../containers/MinimalWindow"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * MosaicRenderPreview is used to for the preview when dragging a mosaic window/tile
*/ function MosaicRenderPreview(props) {
    var t = props.t, title = props.title, windowId = props.windowId;
    return(/*#__PURE__*/ _react["default"].createElement(_MinimalWindow["default"], {
        windowId: "".concat(windowId, "-preview"),
        label: t('previewWindowTitle', {
            title: title
        }),
        ariaLabel: false
    }));
}
MosaicRenderPreview.defaultProps = {
    t: function t(k) {
        return k;
    },
    title: ''
};

},{"react":"3b2NM","../containers/MinimalWindow":"4tk35"}],"39qzX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _mosaicUpdates = require("react-mosaic-component/lib/util/mosaicUpdates");
var _mosaicUtilities = require("react-mosaic-component/lib/util/mosaicUtilities");
var _dropRight = _interopRequireDefault(require("lodash/dropRight"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
/** */ var MosaicLayout = /*#__PURE__*/ function() {
    /** */ function MosaicLayout1(layout) {
        _classCallCheck(this, MosaicLayout1);
        this.layout = layout;
    }
    /** */ _createClass(MosaicLayout1, [
        {
            key: "pathToCorner",
            value: function pathToCorner() {
                var corner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _mosaicUtilities.Corner.TOP_RIGHT;
                return _mosaicUtilities.getPathToCorner(this.layout, corner);
            }
        },
        {
            key: "pathToParent",
            value: function pathToParent(path) {
                return _mosaicUtilities.getNodeAtPath(this.layout, _dropRight["default"](path));
            }
        },
        {
            key: "nodeAtPath",
            value: function nodeAtPath(path) {
                return _mosaicUtilities.getNodeAtPath(this.layout, path);
            }
        },
        {
            key: "addWindows",
            value: function addWindows(addedWindowIds) {
                var _this = this;
                addedWindowIds.forEach(function(windowId, i) {
                    var path = _this.pathToCorner();
                    var parent = _this.pathToParent(path);
                    var destination = _this.nodeAtPath(path);
                    var direction = parent ? _mosaicUtilities.getOtherDirection(parent.direction) : 'row';
                    var first;
                    var second;
                    if (direction === 'row') {
                        first = destination;
                        second = addedWindowIds[i];
                    } else {
                        first = addedWindowIds[i];
                        second = destination;
                    }
                    var update = {
                        path: path,
                        spec: {
                            $set: {
                                direction: direction,
                                first: first,
                                second: second
                            }
                        }
                    }; // We cannot batch the updates together because we need to recalculate
                    // the new location for each new window
                    _this.layout = _mosaicUpdates.updateTree(_this.layout, [
                        update
                    ]);
                });
            }
        },
        {
            key: "removeWindows",
            value: function removeWindows(removedWindowIds, windowPaths) {
                var _this2 = this;
                var removeUpdates = removedWindowIds.map(function(windowId) {
                    return _mosaicUpdates.createRemoveUpdate(_this2.layout, windowPaths[windowId]);
                });
                this.layout = _mosaicUpdates.updateTree(this.layout, removeUpdates);
            }
        }
    ]);
    return MosaicLayout1;
}();
exports["default"] = MosaicLayout;

},{"react-mosaic-component/lib/util/mosaicUpdates":"4Mkld","react-mosaic-component/lib/util/mosaicUtilities":"3sR9b","lodash/dropRight":"3GObN"}],"5Prfu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
// Generated using jss convert node_modules/react-mosaic-component/react-mosaic-component.css > src/styles/react-mosaic-component.js
// .mosaic-blueprint-theme styles have also been removed
var globalReactMosaicStyles = {
    '@global': {
        '.mosaic': {
            height: '100%',
            width: '100%'
        },
        '.mosaic, .mosaic > *': {
            boxSizing: 'border-box'
        },
        '.mosaic .mosaic-zero-state': {
            position: 'absolute',
            top: 6,
            right: 6,
            bottom: 6,
            left: 6,
            width: 'auto',
            height: 'auto',
            zIndex: '1'
        },
        '.mosaic-root': {
            position: 'absolute',
            top: 3,
            right: 3,
            bottom: 3,
            left: 3
        },
        '.mosaic-split': {
            position: 'absolute',
            zIndex: '1',
            touchAction: 'none'
        },
        '.mosaic-split:hover': {
            background: 'black'
        },
        '.mosaic-split .mosaic-split-line': {
            position: 'absolute'
        },
        '.mosaic-split.-row': {
            marginLeft: -3,
            width: 6,
            cursor: 'ew-resize'
        },
        '.mosaic-split.-row .mosaic-split-line': {
            top: '0',
            bottom: '0',
            left: 3,
            right: 3
        },
        '.mosaic-split.-column': {
            marginTop: -3,
            height: 6,
            cursor: 'ns-resize'
        },
        '.mosaic-split.-column .mosaic-split-line': {
            top: 3,
            bottom: 3,
            left: '0',
            right: '0'
        },
        '.mosaic-tile': {
            position: 'absolute',
            margin: 3
        },
        '.mosaic-tile > *': {
            height: '100%',
            width: '100%'
        },
        '.mosaic-drop-target': {
            position: 'relative'
        },
        '.mosaic-drop-target.drop-target-hover .drop-target-container': {
            display: 'block'
        },
        '.mosaic-drop-target.mosaic > .drop-target-container .drop-target.left': {
            right: 'calc(100% -  10px )'
        },
        '.mosaic-drop-target.mosaic > .drop-target-container .drop-target.right': {
            left: 'calc(100% -  10px )'
        },
        '.mosaic-drop-target.mosaic > .drop-target-container .drop-target.bottom': {
            top: 'calc(100% -  10px )'
        },
        '.mosaic-drop-target.mosaic > .drop-target-container .drop-target.top': {
            bottom: 'calc(100% -  10px )'
        },
        '.mosaic-drop-target .drop-target-container': {
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            display: 'none'
        },
        '.mosaic-drop-target .drop-target-container.-dragging': {
            display: 'block'
        },
        '.mosaic-drop-target .drop-target-container .drop-target': {
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            background: 'rgba(0, 0, 0, 0.2)',
            border: '2px solid black',
            opacity: '0',
            zIndex: '5'
        },
        '.mosaic-drop-target .drop-target-container .drop-target.left': {
            right: 'calc(100% -  30% )'
        },
        '.mosaic-drop-target .drop-target-container .drop-target.right': {
            left: 'calc(100% -  30% )'
        },
        '.mosaic-drop-target .drop-target-container .drop-target.bottom': {
            top: 'calc(100% -  30% )'
        },
        '.mosaic-drop-target .drop-target-container .drop-target.top': {
            bottom: 'calc(100% -  30% )'
        },
        '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover': {
            opacity: '1'
        },
        '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover.left': {
            right: 'calc(100% -  50% )'
        },
        '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover.right': {
            left: 'calc(100% -  50% )'
        },
        '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover.bottom': {
            top: 'calc(100% -  50% )'
        },
        '.mosaic-drop-target .drop-target-container .drop-target.drop-target-hover.top': {
            bottom: 'calc(100% -  50% )'
        },
        '.mosaic-window, .mosaic-preview': {
            position: 'relative',
            display: 'flex',
            fallbacks: [
                {
                    display: '-webkit-box'
                }
            ],
            webkitBoxOrient: 'vertical',
            webkitBoxDirection: 'normal',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 0 1px rgba(0, 0, 0, 0.2)'
        },
        '.mosaic-window .mosaic-window-toolbar, .mosaic-preview .mosaic-window-toolbar': {
            zIndex: '4',
            display: 'flex',
            fallbacks: [
                {
                    display: '-webkit-box'
                }
            ],
            webkitBoxPack: 'justify',
            justifyContent: 'space-between',
            webkitBoxAlign: 'center',
            alignItems: 'center',
            flexShrink: '0',
            height: 30,
            background: 'white',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
        },
        '.mosaic-window .mosaic-window-toolbar.draggable, .mosaic-preview .mosaic-window-toolbar.draggable': {
            cursor: 'move'
        },
        '.mosaic-window .mosaic-window-title, .mosaic-preview .mosaic-window-title': {
            paddingLeft: 15,
            webkitBoxFlex: '1',
            flex: '1',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            minHeight: 18
        },
        '.mosaic-window .mosaic-window-controls, .mosaic-preview .mosaic-window-controls': {
            display: 'flex',
            fallbacks: [
                {
                    display: '-webkit-box'
                }
            ],
            height: '100%'
        },
        '.mosaic-window .mosaic-window-controls .separator, .mosaic-preview .mosaic-window-controls .separator': {
            height: 20,
            borderLeft: '1px solid black',
            margin: '5px 4px'
        },
        '.mosaic-window .mosaic-window-body, .mosaic-preview .mosaic-window-body': {
            position: 'relative',
            webkitBoxFlex: '1',
            flex: '1',
            height: '0',
            background: 'white',
            zIndex: '1',
            overflow: 'hidden'
        },
        '.mosaic-window .mosaic-window-additional-actions-bar, .mosaic-preview .mosaic-window-additional-actions-bar': {
            position: 'absolute',
            top: 30,
            right: '0',
            bottom: 'initial',
            left: '0',
            height: '0',
            overflow: 'hidden',
            background: 'white',
            webkitBoxPack: 'end',
            justifyContent: 'flex-end',
            display: 'flex',
            fallbacks: [
                {
                    display: '-webkit-box'
                }
            ],
            zIndex: '3'
        },
        '.mosaic-window .mosaic-window-additional-actions-bar .bp3-button, .mosaic-preview .mosaic-window-additional-actions-bar .bp3-button': {
            margin: '0'
        },
        '.mosaic-window .mosaic-window-additional-actions-bar .bp3-button:after, .mosaic-preview .mosaic-window-additional-actions-bar .bp3-button:after': {
            display: 'none'
        },
        '.mosaic-window .mosaic-window-body-overlay, .mosaic-preview .mosaic-window-body-overlay': {
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            opacity: '0',
            background: 'white',
            display: 'none',
            zIndex: '2'
        },
        '.mosaic-window.additional-controls-open .mosaic-window-additional-actions-bar, .mosaic-preview.additional-controls-open .mosaic-window-additional-actions-bar': {
            height: 30
        },
        '.mosaic-window.additional-controls-open .mosaic-window-body-overlay, .mosaic-preview.additional-controls-open .mosaic-window-body-overlay': {
            display: 'block'
        },
        '.mosaic-window .mosaic-preview, .mosaic-preview .mosaic-preview': {
            height: '100%',
            width: '100%',
            position: 'absolute',
            zIndex: '0',
            border: '1px solid black',
            maxHeight: 400
        },
        '.mosaic-window .mosaic-preview .mosaic-window-body, .mosaic-preview .mosaic-preview .mosaic-window-body': {
            display: 'flex',
            fallbacks: [
                {
                    display: '-webkit-box'
                }
            ],
            webkitBoxOrient: 'vertical',
            webkitBoxDirection: 'normal',
            flexDirection: 'column',
            webkitBoxAlign: 'center',
            alignItems: 'center',
            webkitBoxPack: 'center',
            justifyContent: 'center'
        },
        '.mosaic-window .mosaic-preview h4, .mosaic-preview .mosaic-preview h4': {
            marginBottom: 10
        },
        '.mosaic:not(.mosaic-blueprint-theme) .mosaic-default-control.close-button:before': {
            content: '\'Close\''
        },
        '.mosaic:not(.mosaic-blueprint-theme) .mosaic-default-control.split-button:before': {
            content: '\'Split\''
        },
        '.mosaic:not(.mosaic-blueprint-theme) .mosaic-default-control.replace-button:before': {
            content: '\'Replace\''
        },
        '.mosaic:not(.mosaic-blueprint-theme) .mosaic-default-control.expand-button:before': {
            content: '\'Expand\''
        }
    }
};
var _default = globalReactMosaicStyles;
exports["default"] = _default;

},{}],"77O49":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _WorkspaceElastic = _interopRequireDefault(require("../components/WorkspaceElastic"));
var _selectors = require("../state/selectors");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        elasticLayout: _selectors.getElasticLayout(state),
        workspace: _selectors.getWorkspace(state)
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */ var mapDispatchToProps = function mapDispatchToProps1(dispatch, props) {
    return {
        setWorkspaceViewportDimensions: function setWorkspaceViewportDimensions(position) {
            dispatch(actions.setWorkspaceViewportDimensions(position));
        },
        setWorkspaceViewportPosition: function setWorkspaceViewportPosition(position) {
            dispatch(actions.setWorkspaceViewportPosition(position));
        },
        updateElasticWindowLayout: function updateElasticWindowLayout(windowId, position) {
            dispatch(actions.updateElasticWindowLayout(windowId, position));
        }
    };
};
var styles = {
    workspace: {
        boxSizing: 'border-box',
        margin: 0,
        position: 'absolute',
        transitionDuration: '.7s',
        // order matters
        // eslint-disable-next-line sort-keys
        '& .react-draggable-dragging': {
            transitionDuration: 'unset'
        }
    }
};
var enhance = _redux.compose(_styles.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('WorkspaceElastic')// further HOC go here
);
var _default = enhance(_WorkspaceElastic["default"]);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../components/WorkspaceElastic":"7vhHN","../state/selectors":"5Trnc"}],"7vhHN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRnd = require("react-rnd");
var _reactResizeObserver = _interopRequireDefault(require("react-resize-observer"));
var _classnames = _interopRequireDefault(require("classnames"));
var _WorkspaceElasticWindow = _interopRequireDefault(require("../containers/WorkspaceElasticWindow"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */ var WorkspaceElastic1 = /*#__PURE__*/ function(_React$Component) {
    _inherits(WorkspaceElastic2, _React$Component);
    var _super = _createSuper(WorkspaceElastic2);
    function WorkspaceElastic2() {
        _classCallCheck(this, WorkspaceElastic2);
        return _super.apply(this, arguments);
    }
    _createClass(WorkspaceElastic2, [
        {
            key: "render",
            value: /**
     */ function render() {
                var _this$props = this.props, classes = _this$props.classes, workspace = _this$props.workspace, elasticLayout = _this$props.elasticLayout, setWorkspaceViewportDimensions = _this$props.setWorkspaceViewportDimensions, setWorkspaceViewportPosition = _this$props.setWorkspaceViewportPosition;
                var viewportPosition = workspace.viewportPosition;
                var offsetX = workspace.width / 2;
                var offsetY = workspace.height / 2;
                return(/*#__PURE__*/ _react["default"].createElement("div", {
                    style: {
                        height: '100%',
                        position: 'relative',
                        width: '100%'
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_reactResizeObserver["default"], {
                    onResize: function onResize(rect) {
                        setWorkspaceViewportDimensions(rect);
                    }
                }), /*#__PURE__*/ _react["default"].createElement(_reactRnd.Rnd, {
                    size: {
                        height: workspace.height,
                        width: workspace.width
                    },
                    position: {
                        x: -1 * viewportPosition.x - offsetX,
                        y: -1 * viewportPosition.y - offsetY
                    },
                    enableResizing: {
                        bottom: false,
                        bottomLeft: false,
                        bottomRight: false,
                        left: false,
                        right: false,
                        top: false,
                        topLeft: false,
                        topRight: false
                    },
                    onDragStop: function onDragStop(e, d) {
                        setWorkspaceViewportPosition({
                            x: -1 * d.x - offsetX,
                            y: -1 * d.y - offsetY
                        });
                    },
                    cancel: ".".concat(_cssNs["default"]('window')),
                    className: _classnames["default"](classes.workspace, _cssNs["default"]('workspace')),
                    disableDragging: !workspace.draggingEnabled
                }, Object.keys(elasticLayout).map(function(windowId) {
                    return(/*#__PURE__*/ _react["default"].createElement(_WorkspaceElasticWindow["default"], {
                        key: windowId,
                        windowId: windowId
                    }));
                }))));
            }
        }
    ]);
    return WorkspaceElastic2;
}(_react["default"].Component);
var _default = WorkspaceElastic1;
exports["default"] = _default;

},{"react":"3b2NM","react-rnd":"BOMvt","react-resize-observer":"7wrsX","classnames":"5aJRc","../containers/WorkspaceElasticWindow":"eLRrc","../config/css-ns":"6ABf8"}],"7wrsX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof1(obj1) {
        return typeof obj1;
    };
    else _typeof = function _typeof2(obj1) {
        return obj1 && typeof Symbol === "function" && obj1.constructor === Symbol && obj1 !== Symbol.prototype ? "symbol" : typeof obj1;
    };
    return _typeof(obj);
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    _setPrototypeOf(subClass.prototype, superClass && superClass.prototype);
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf1(o1) {
        return o1.__proto__;
    };
    return _getPrototypeOf(o);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var style = {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: -1,
    visibility: 'hidden',
    pointerEvents: 'none'
};
var styleChild = {
    position: 'absolute',
    left: 0,
    top: 0,
    transition: '0s'
};
function isAncestor(node, ancestor) {
    var current = node.parentNode;
    while(current){
        if (current === ancestor) return true;
        current = current.parentNode;
    }
    return false;
}
var ResizeObserver1 = /*#__PURE__*/ function(_React$Component) {
    function ResizeObserver2() {
        var _getPrototypeOf2;
        var _temp, _this;
        _classCallCheck(this, ResizeObserver2);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResizeObserver2)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_expandRef", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_shrinkRef", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_node", null), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_lastWidth", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_lastHeight", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_lastRect", void 0), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_hasResize", false), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleScroll", function(event) {
            if ((_this.props.onPosition || _this.props.onReflow || _this.props.onResize) && (_this._globalScollTarget(event.target) || _this._refScrollTarget(event.target) || _this._ancestorScollTarget(event.target))) _this._reflow();
        }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_globalScollTarget", function(target) {
            return target instanceof Node && (_this.props.onPosition || _this.props.onReflow) && (target === document || target === document.documentElement || target === document.body);
        }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_refScrollTarget", function(target) {
            if (target instanceof HTMLElement && (target === _this._expandRef || target === _this._shrinkRef)) {
                var width = target.offsetWidth;
                var height = target.offsetHeight;
                if (width !== _this._lastWidth || height !== _this._lastHeight) {
                    _this._lastWidth = width;
                    _this._lastHeight = height;
                    _this._reset(_this._expandRef);
                    _this._reset(_this._shrinkRef);
                    return true;
                }
            }
            return false;
        }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_ancestorScollTarget", function(target) {
            return target instanceof Node && (_this.props.onPosition || _this.props.onReflow) && _this._node && isAncestor(_this._node, target);
        }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_reflow", function() {
            if (!_this._node || !(_this._node.parentNode instanceof Element)) return;
            var rect = _this._node.parentNode.getBoundingClientRect();
            var sizeChanged = true;
            var positionChanged = true;
            if (_this._lastRect) {
                sizeChanged = rect.width !== _this._lastRect.width || rect.height !== _this._lastRect.height;
                positionChanged = rect.top !== _this._lastRect.top || rect.left !== _this._lastRect.left;
            }
            _this._lastRect = rect;
            if (sizeChanged && _this.props.onResize) _this.props.onResize(rect);
            if (positionChanged && _this.props.onPosition) _this.props.onPosition(rect);
            if ((sizeChanged || positionChanged) && _this.props.onReflow) _this.props.onReflow(rect);
        }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleRef", function(node) {
            _this._node = node;
        }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleExpandRef", function(node) {
            _this._reset(node);
            _this._expandRef = node;
        }), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_handleShrinkRef", function(node) {
            _this._reset(node);
            _this._shrinkRef = node;
        }), _temp));
    }
    _createClass(ResizeObserver2, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this._reflow();
                window.addEventListener('scroll', this._handleScroll, true);
                if (this.props.onPosition || this.props.onReflow) {
                    window.addEventListener('resize', this._reflow, true);
                    this._hasResize = true;
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if ((this.props.onPosition || this.props.onReflow) && !this._hasResize) {
                    window.addEventListener('resize', this._reflow, true);
                    this._hasResize = true;
                } else if (!(this.props.onPosition || this.props.onReflow) && this._hasResize) {
                    window.removeEventListener('resize', this._reflow, true);
                    this._hasResize = false;
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                window.removeEventListener('scroll', this._handleScroll, true);
                if (this._hasResize) window.removeEventListener('resize', this._reflow, true);
            }
        },
        {
            key: "_reset",
            value: function _reset(node) {
                if (node) {
                    node.scrollLeft = 100000;
                    node.scrollTop = 100000;
                }
            }
        },
        {
            key: "render",
            value: function render() {
                if (this.props.onResize || this.props.onReflow) return _react.default.createElement("div", {
                    style: style,
                    ref: this._handleRef
                }, _react.default.createElement("div", {
                    ref: this._handleExpandRef,
                    style: style
                }, _react.default.createElement("div", {
                    style: _objectSpread({
                    }, styleChild, {
                        width: 100000,
                        height: 100000
                    })
                })), _react.default.createElement("div", {
                    ref: this._handleShrinkRef,
                    style: style
                }, _react.default.createElement("div", {
                    style: _objectSpread({
                    }, styleChild, {
                        width: '200%',
                        height: '200%'
                    })
                })));
                return _react.default.createElement("noscript", {
                    ref: this._handleRef
                });
            }
        }
    ]);
    _inherits(ResizeObserver2, _React$Component);
    return ResizeObserver2;
}(_react.default.Component);
_defineProperty(ResizeObserver1, "displayName", 'ResizeObserver');
var _default = ResizeObserver1;
exports.default = _default;

},{"react":"3b2NM"}],"eLRrc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _core = require("@material-ui/core");
var actions = _interopRequireWildcard(require("../state/actions"));
var _WorkspaceElasticWindow = _interopRequireDefault(require("../components/WorkspaceElasticWindow"));
var _selectors = require("../state/selectors");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    return {
        companionWindowDimensions: _selectors.selectCompanionWindowDimensions(state, {
            windowId: windowId
        }),
        focused: _selectors.isFocused(state, {
            windowId: windowId
        }),
        layout: _selectors.getElasticLayout(state)[windowId],
        workspace: _selectors.getWorkspace(state)
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */ var mapDispatchToProps = function mapDispatchToProps1(dispatch, props) {
    return {
        updateElasticWindowLayout: function updateElasticWindowLayout(windowId, position) {
            dispatch(actions.updateElasticWindowLayout(windowId, position));
        }
    };
};
/**
 * @param theme
 */ var styles = function styles1(theme) {
    return {
        focused: {
            zIndex: theme.zIndex.modal - 1
        }
    };
};
var enhance = _redux.compose(_core.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps)// further HOC go here
);
var _default = enhance(_WorkspaceElasticWindow["default"]);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","@material-ui/core":"6DoV9","../state/actions":"4t2dD","../components/WorkspaceElasticWindow":"6mHzy","../state/selectors":"5Trnc"}],"6mHzy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRnd = require("react-rnd");
var _Window = _interopRequireDefault(require("../containers/Window"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */ var WorkspaceElasticWindow1 = /*#__PURE__*/ function(_React$Component) {
    _inherits(WorkspaceElasticWindow2, _React$Component);
    var _super = _createSuper(WorkspaceElasticWindow2);
    function WorkspaceElasticWindow2() {
        _classCallCheck(this, WorkspaceElasticWindow2);
        return _super.apply(this, arguments);
    }
    _createClass(WorkspaceElasticWindow2, [
        {
            key: "render",
            value: /**
     */ function render() {
                var _this$props = this.props, classes = _this$props.classes, companionWindowDimensions = _this$props.companionWindowDimensions, focused = _this$props.focused, layout = _this$props.layout, workspace = _this$props.workspace, updateElasticWindowLayout = _this$props.updateElasticWindowLayout;
                var offsetX = workspace.width / 2;
                var offsetY = workspace.height / 2;
                return(/*#__PURE__*/ _react["default"].createElement(_reactRnd.Rnd, {
                    key: "".concat(layout.windowId, "-").concat(workspace.id),
                    size: {
                        height: layout.height + companionWindowDimensions.height,
                        width: layout.width + companionWindowDimensions.width
                    },
                    position: {
                        x: layout.x + offsetX,
                        y: layout.y + offsetY
                    },
                    bounds: "parent",
                    onDragStop: function onDragStop(e, d) {
                        updateElasticWindowLayout(layout.windowId, {
                            x: d.x - offsetX,
                            y: d.y - offsetY
                        });
                    },
                    onResize: function onResize(e, direction, ref, delta, position) {
                        updateElasticWindowLayout(layout.windowId, {
                            height: Number.parseInt(ref.style.height, 10) - companionWindowDimensions.height,
                            width: Number.parseInt(ref.style.width, 10) - companionWindowDimensions.width,
                            x: position.x - offsetX,
                            y: position.y - offsetY
                        });
                    },
                    dragHandleClassName: _cssNs["default"]('window-top-bar'),
                    className: focused ? classes.focused : null
                }, /*#__PURE__*/ _react["default"].createElement(_Window["default"], {
                    windowId: layout.windowId
                })));
            }
        }
    ]);
    return WorkspaceElasticWindow2;
}(_react["default"].Component);
WorkspaceElasticWindow1.defaultProps = {
    classes: {
    },
    companionWindowDimensions: {
        height: 0,
        width: 0
    },
    focused: false
};
var _default = WorkspaceElasticWindow1;
exports["default"] = _default;

},{"react":"3b2NM","react-rnd":"BOMvt","../containers/Window":"6Jd3H","../config/css-ns":"6ABf8"}],"1Lsie":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleDrop = exports.IIIFDropTarget = void 0;
var _react = _interopRequireDefault(require("react"));
var _Backdrop = _interopRequireDefault(require("@material-ui/core/Backdrop"));
var _InsertDriveFileSharp = _interopRequireDefault(require("@material-ui/icons/InsertDriveFileSharp"));
var _colors = require("@material-ui/core/colors");
var _uuid = require("uuid");
var _reactDndHtml5Backend = require("react-dnd-html5-backend");
var _reactDnd = require("react-dnd");
var _readImageMetadata = require("../lib/readImageMetadata");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/** */ var handleDrop = function handleDrop1(item, monitor, props) {
    var onDrop = props.onDrop;
    if (item.urls) item.urls.forEach(function(str) {
        var url = new URL(str);
        var manifestId = url.searchParams.get('manifest');
        var canvasId = url.searchParams.get('canvas');
        if (manifestId) onDrop({
            canvasId: canvasId,
            manifestId: manifestId
        }, props, monitor);
    });
    if (item.files) {
        var manifestFiles = item.files.filter(function(f) {
            return f.type === 'application/json';
        });
        var manifestPromises = manifestFiles.map(function(file) {
            return new Promise(function(resolve, reject) {
                var reader = new FileReader();
                reader.addEventListener('load', function() {
                    var manifestJson = reader.result;
                    var manifestId = _uuid.v4();
                    if (manifestJson) onDrop({
                        manifestId: manifestId,
                        manifestJson: manifestJson
                    }, props, monitor);
                    resolve();
                });
                reader.readAsText(file);
            });
        });
        var imageFiles = item.files.filter(function(_ref) {
            var type = _ref.type;
            return type.startsWith('image/');
        });
        var imagePromise;
        if (imageFiles.length > 0) {
            var id = _uuid.v4();
            var imageData = imageFiles.map(function(file) {
                return _readImageMetadata.readImageMetadata(file);
            });
            imagePromise = Promise.all(imageData).then(function(images) {
                var manifestJson = {
                    '@context': 'http://iiif.io/api/presentation/3/context.json',
                    id: id,
                    items: images.map(function(_ref2, index) {
                        var name = _ref2.name, type = _ref2.type, width = _ref2.width, height = _ref2.height, url = _ref2.url;
                        return {
                            height: height,
                            id: "".concat(id, "/canvas/").concat(index),
                            items: [
                                {
                                    id: "".concat(id, "/canvas/").concat(index, "/1"),
                                    items: [
                                        {
                                            body: {
                                                format: type,
                                                id: url,
                                                type: 'Image'
                                            },
                                            height: height,
                                            id: "".concat(id, "/canvas/").concat(index, "/1/image"),
                                            motivation: 'painting',
                                            target: "".concat(id, "/canvas/").concat(index, "/1"),
                                            type: 'Annotation',
                                            width: width
                                        }
                                    ],
                                    type: 'AnnotationPage'
                                }
                            ],
                            label: name,
                            type: 'Canvas',
                            width: width
                        };
                    }),
                    label: images[0].name,
                    type: 'Manifest'
                };
                var manifestId = _uuid.v4();
                if (manifestJson) onDrop({
                    manifestId: manifestId,
                    manifestJson: manifestJson
                }, props, monitor);
            });
        }
        return Promise.all([].concat(_toConsumableArray(manifestPromises), [
            imagePromise
        ]));
    }
    return undefined;
};
/** */ exports.handleDrop = handleDrop;
var IIIFDropTarget = function IIIFDropTarget1(props) {
    var children = props.children, onDrop = props.onDrop;
    var _useDrop = _reactDnd.useDrop({
        accept: [
            _reactDndHtml5Backend.NativeTypes.URL,
            _reactDndHtml5Backend.NativeTypes.FILE
        ],
        collect: function collect(monitor) {
            return {
                canDrop: monitor.canDrop(),
                isOver: monitor.isOver()
            };
        },
        /** */ drop: function drop(item, monitor) {
            if (!onDrop) return;
            handleDrop(item, monitor, props);
        }
    }), _useDrop2 = _slicedToArray(_useDrop, 2), _useDrop2$ = _useDrop2[0], canDrop = _useDrop2$.canDrop, isOver = _useDrop2$.isOver, drop = _useDrop2[1];
    /**
   * Safari reports drag+drop'ed urls as both a file and uri-list
   * which gets mis-classified by react-dnd.
   */ var hackForSafari = function hackForSafari1(e) {
        if (!window.safari || !onDrop || !e.dataTransfer) return;
        if (e.dataTransfer.types.includes('Files') && e.dataTransfer.types.includes('text/uri-list')) {
            var url = e.dataTransfer.getData('text/uri-list');
            if (!url) return;
            handleDrop({
                urls: [
                    url
                ]
            }, null, props);
        }
    };
    var isActive = canDrop && isOver;
    return(/*#__PURE__*/ _react["default"].createElement("div", {
        ref: drop,
        onDrop: hackForSafari,
        style: {
            height: '100%',
            width: '100%'
        }
    }, children, /*#__PURE__*/ _react["default"].createElement(_Backdrop["default"], {
        open: isActive,
        style: {
            zIndex: 9999
        }
    }, /*#__PURE__*/ _react["default"].createElement(_InsertDriveFileSharp["default"], {
        style: {
            color: _colors.grey[400],
            fontSize: 256
        }
    }))));
};
exports.IIIFDropTarget = IIIFDropTarget;

},{"react":"3b2NM","@material-ui/core/Backdrop":"xIA45","@material-ui/icons/InsertDriveFileSharp":"1YWF0","@material-ui/core/colors":"5HAG6","uuid":"7rynw","react-dnd-html5-backend":"D2DDD","react-dnd":"6x32O","../lib/readImageMetadata":"1vnik"}],"1YWF0":[function(require,module,exports) {
"use strict";
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _createSvgIcon = _interopRequireDefault(require("./utils/createSvgIcon"));
var _default = _createSvgIcon.default(/*#__PURE__*/ React.createElement("path", {
    d: "M4.01 2L4 22h16V8l-6-6H4.01zM13 9V3.5L18.5 9H13z"
}), 'InsertDriveFileSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"1vnik":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readImageMetadata = readImageMetadata;
/** Extract metadata from an image File */ function readImageMetadata(file) {
    return new Promise(function(resolve, reject) {
        var reader = new FileReader();
        reader.addEventListener('load', function() {
            var image = new Image();
            image.addEventListener('load', function() {
                resolve({
                    height: image.height,
                    name: file.name,
                    type: file.type,
                    url: reader.result,
                    width: image.width
                });
            });
            image.src = reader.result;
        });
        reader.readAsDataURL(file);
    });
}

},{}],"7q5lM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _WorkspaceAdd = require("../components/WorkspaceAdd");
var _selectors = require("../state/selectors");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */ var mapStateToProps = function mapStateToProps1(state) {
    return {
        catalog: _selectors.getCatalog(state)
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */ var mapDispatchToProps = {
    addResource: actions.addResource,
    setWorkspaceAddVisibility: actions.setWorkspaceAddVisibility
};
/**
 *
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: string},
 * form: {paddingBottom: number, paddingTop: number, marginTop: number},
 * fab: {bottom: number, position: string, right: number},
 * menuButton: {marginRight: number, marginLeft: number}}}
 */ var styles = function styles1(theme) {
    return {
        displayNone: {
            display: 'none'
        },
        fab: {
            bottom: theme.spacing(2),
            position: 'absolute',
            right: theme.spacing(2)
        },
        form: _objectSpread(_objectSpread({
        }, theme.mixins.gutters()), {
        }, {
            left: '0',
            marginTop: 48,
            paddingBottom: theme.spacing(2),
            paddingTop: theme.spacing(2),
            right: '0'
        }),
        list: {
            margin: '16px'
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20
        },
        paper: _defineProperty({
            borderTop: '0',
            left: '0'
        }, theme.breakpoints.up('sm'), {
            left: '65px'
        }),
        typographyBody: {
            flexGrow: 1
        },
        workspaceAdd: {
            boxSizing: 'border-box',
            height: '100%',
            overflowX: 'hidden',
            overflowY: 'auto',
            paddingTop: 68
        },
        // injection order matters
        // eslint-disable-next-line sort-keys
        '@media (min-width: 600px)': {
            workspaceAdd: {
                paddingLeft: 68,
                paddingTop: 0
            }
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('WorkspaceAdd'));
var _default = enhance(_WorkspaceAdd.WorkspaceAdd);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core":"6DoV9","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../components/WorkspaceAdd":"7clQi","../state/selectors":"5Trnc"}],"7clQi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WorkspaceAdd = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _AddSharp = _interopRequireDefault(require("@material-ui/icons/AddSharp"));
var _ExpandMoreSharp = _interopRequireDefault(require("@material-ui/icons/ExpandMoreSharp"));
var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));
var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));
var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));
var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));
var _List = _interopRequireDefault(require("@material-ui/core/List"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _ManifestForm = _interopRequireDefault(require("../containers/ManifestForm"));
var _ManifestListItem = _interopRequireDefault(require("../containers/ManifestListItem"));
var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));
var _IIIFDropTarget = require("./IIIFDropTarget");
var _PluginHook = require("./PluginHook");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * An area for managing manifests and adding them to workspace
 * @memberof Workspace
 * @private
 */ var WorkspaceAdd1 = /*#__PURE__*/ function(_React$Component) {
    _inherits(WorkspaceAdd2, _React$Component);
    var _super = _createSuper(WorkspaceAdd2);
    /** */ function WorkspaceAdd2(props) {
        var _this;
        _classCallCheck(this, WorkspaceAdd2);
        _this = _super.call(this, props);
        _this.state = {
            addResourcesOpen: false
        };
        _this.ref = /*#__PURE__*/ _react["default"].createRef();
        _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
        _this.setAddResourcesVisibility = _this.setAddResourcesVisibility.bind(_assertThisInitialized(_this));
        _this.handleDrop = _this.handleDrop.bind(_assertThisInitialized(_this));
        return _this;
    }
    /** */ _createClass(WorkspaceAdd2, [
        {
            key: "handleDrop",
            value: function handleDrop(_ref, props, monitor) {
                var manifestId = _ref.manifestId, manifestJson = _ref.manifestJson;
                var addResource = this.props.addResource;
                if (manifestJson) addResource(manifestId, manifestJson, {
                    provider: 'file'
                });
                else addResource(manifestId);
                this.scrollToTop();
            }
        },
        {
            key: "onSubmit",
            value: function onSubmit() {
                this.setAddResourcesVisibility(false);
                this.scrollToTop();
            }
        },
        {
            key: "setAddResourcesVisibility",
            value: function setAddResourcesVisibility(bool) {
                this.setState({
                    addResourcesOpen: bool
                });
            }
        },
        {
            key: "scrollToTop",
            value: function scrollToTop() {
                if (this.ref.current) {
                    var el = this.ref.current;
                    el.scrollTo({
                        behavior: 'smooth',
                        left: 0,
                        top: 0
                    });
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props = this.props, catalog = _this$props.catalog, setWorkspaceAddVisibility = _this$props.setWorkspaceAddVisibility, t = _this$props.t, classes = _this$props.classes;
                var addResourcesOpen = this.state.addResourcesOpen;
                var manifestList = catalog.map(function(resource, index) {
                    return(/*#__PURE__*/ _react["default"].createElement(_ManifestListItem["default"], Object.assign({
                    }, index === 0 && {
                        buttonRef: function buttonRef(ref) {
                            return ref && ref.focus();
                        }
                    }, {
                        key: resource.manifestId,
                        manifestId: resource.manifestId,
                        provider: resource.provider,
                        handleClose: function handleClose() {
                            return setWorkspaceAddVisibility(false);
                        }
                    })));
                });
                return(/*#__PURE__*/ _react["default"].createElement(_IIIFDropTarget.IIIFDropTarget, {
                    onDrop: this.handleDrop
                }, /*#__PURE__*/ _react["default"].createElement("div", {
                    ref: this.ref,
                    className: _classnames["default"](_cssNs["default"]('workspace-add'), classes.workspaceAdd)
                }, catalog.length < 1 ? /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    alignItems: "center",
                    container: true,
                    style: {
                        height: '100%'
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    xs: 12,
                    item: true
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "h1",
                    component: "div",
                    align: "center"
                }, t('emptyResourceList')))) : /*#__PURE__*/ _react["default"].createElement(_Paper["default"], {
                    className: classes.list
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "srOnly",
                    component: "h1"
                }, t('miradorResources')), /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, this.props), /*#__PURE__*/ _react["default"].createElement(_List["default"], {
                    disablePadding: true
                }, manifestList)), /*#__PURE__*/ _react["default"].createElement(_Fab["default"], {
                    variant: "extended",
                    disabled: addResourcesOpen,
                    className: _classnames["default"](classes.fab, _cssNs["default"]('add-resource-button')),
                    color: "primary",
                    onClick: function onClick() {
                        return _this2.setAddResourcesVisibility(true);
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_AddSharp["default"], null), t('addResource')), /*#__PURE__*/ _react["default"].createElement(_Drawer["default"], {
                    className: _classnames["default"](_defineProperty({
                    }, classes.displayNone, !addResourcesOpen)),
                    classes: {
                        paper: classes.paper
                    },
                    variant: "persistent",
                    anchor: "bottom",
                    open: addResourcesOpen,
                    ModalProps: {
                        disablePortal: true,
                        hideBackdrop: true,
                        style: {
                            position: 'absolute'
                        }
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_Paper["default"], {
                    className: classes.form
                }, /*#__PURE__*/ _react["default"].createElement(_AppBar["default"], {
                    position: "absolute",
                    color: "primary",
                    onClick: function onClick() {
                        return _this2.setAddResourcesVisibility(false);
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_Toolbar["default"], {
                    variant: "dense"
                }, /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-label": t('closeAddResourceForm'),
                    className: classes.menuButton,
                    color: "inherit"
                }, /*#__PURE__*/ _react["default"].createElement(_ExpandMoreSharp["default"], null)), /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "h2",
                    noWrap: true,
                    color: "inherit",
                    className: classes.typographyBody
                }, t('addResource')))), /*#__PURE__*/ _react["default"].createElement(_ManifestForm["default"], {
                    addResourcesOpen: addResourcesOpen,
                    onSubmit: this.onSubmit,
                    onCancel: function onCancel() {
                        return _this2.setAddResourcesVisibility(false);
                    }
                }))))));
            }
        }
    ]);
    return WorkspaceAdd2;
}(_react["default"].Component);
exports.WorkspaceAdd = WorkspaceAdd1;
WorkspaceAdd1.defaultProps = {
    addResource: function addResource() {
    },
    catalog: [],
    classes: {
    },
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","classnames":"5aJRc","@material-ui/icons/AddSharp":"7vsPR","@material-ui/icons/ExpandMoreSharp":"6I5Wl","@material-ui/core/AppBar":"3NZOv","@material-ui/core/Drawer":"7l2O8","@material-ui/core/Grid":"5T6Yd","@material-ui/core/Fab":"78dXn","@material-ui/core/List":"5yMsX","@material-ui/core/Paper":"5Fj22","@material-ui/core/Toolbar":"3jiG5","@material-ui/core/Typography":"3wcF9","../config/css-ns":"6ABf8","../containers/ManifestForm":"3200g","../containers/ManifestListItem":"7EM7i","../containers/MiradorMenuButton":"4qUlt","./IIIFDropTarget":"1Lsie","./PluginHook":"6m4WL"}],"3200g":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var actions = _interopRequireWildcard(require("../state/actions"));
var _ManifestForm = require("../components/ManifestForm");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */ var mapDispatchToProps = {
    addResource: actions.addResource
};
/**
 *
 * @param theme
 */ var styles = function styles1(theme) {
    return {
        buttons: _defineProperty({
            textAlign: 'right'
        }, theme.breakpoints.up('sm'), {
            textAlign: 'inherit'
        }),
        input: _objectSpread({
        }, theme.typography.body1)
    };
};
var enhance = _redux.compose(_core.withStyles(styles), _reactI18next.withTranslation(), _reactRedux.connect(null, mapDispatchToProps), _withPlugins.withPlugins('ManifestForm'));
var _default = enhance(_ManifestForm.ManifestForm);
exports["default"] = _default;

},{"react-redux":"47SrY","redux":"7panR","react-i18next":"6hlRL","@material-ui/core":"6DoV9","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../components/ManifestForm":"5oLw3"}],"5oLw3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ManifestForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));
var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Provides a form for user input of a manifest url
 * @prop {Function} fetchManifest
 */ var ManifestForm1 = /*#__PURE__*/ function(_Component) {
    _inherits(ManifestForm2, _Component);
    var _super = _createSuper(ManifestForm2);
    /**
   * constructor -
   */ function ManifestForm2(props) {
        var _this;
        _classCallCheck(this, ManifestForm2);
        _this = _super.call(this, props);
        _this.state = {
            formValue: ''
        };
        _this.formSubmit = _this.formSubmit.bind(_assertThisInitialized(_this));
        _this.handleCancel = _this.handleCancel.bind(_assertThisInitialized(_this));
        _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * Reset the form state
   */ _createClass(ManifestForm2, [
        {
            key: "handleCancel",
            value: function handleCancel() {
                var onCancel = this.props.onCancel;
                onCancel();
                this.setState({
                    formValue: ''
                });
            }
        },
        {
            key: "handleInputChange",
            value: function handleInputChange(event) {
                var that = this;
                event.preventDefault();
                that.setState({
                    formValue: event.target.value
                });
            }
        },
        {
            key: "formSubmit",
            value: function formSubmit(event) {
                var _this$props = this.props, addResource = _this$props.addResource, onSubmit = _this$props.onSubmit;
                var formValue = this.state.formValue;
                event.preventDefault();
                onSubmit();
                addResource(formValue);
                this.setState({
                    formValue: ''
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var formValue = this.state.formValue;
                var _this$props2 = this.props, addResourcesOpen = _this$props2.addResourcesOpen, classes = _this$props2.classes, onCancel = _this$props2.onCancel, t = _this$props2.t;
                if (!addResourcesOpen) return null;
                return(/*#__PURE__*/ _react["default"].createElement("form", {
                    onSubmit: this.formSubmit
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    container: true,
                    spacing: 2
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 12,
                    sm: 8,
                    md: 9
                }, /*#__PURE__*/ _react["default"].createElement(_TextField["default"], {
                    autoFocus: true,
                    fullWidth: true,
                    value: formValue,
                    id: "manifestURL",
                    type: "text",
                    onChange: this.handleInputChange,
                    variant: "filled",
                    label: t('addManifestUrl'),
                    helperText: t('addManifestUrlHelp'),
                    InputLabelProps: {
                        shrink: true
                    },
                    InputProps: {
                        className: classes.input
                    }
                })), /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 12,
                    sm: 4,
                    md: 3,
                    className: classes.buttons
                }, onCancel && /*#__PURE__*/ _react["default"].createElement(_Button["default"], {
                    onClick: this.handleCancel
                }, t('cancel')), /*#__PURE__*/ _react["default"].createElement(_Button["default"], {
                    id: "fetchBtn",
                    type: "submit",
                    variant: "contained",
                    color: "primary"
                }, t('fetchManifest'))))));
            }
        }
    ]);
    return ManifestForm2;
}(_react.Component);
exports.ManifestForm = ManifestForm1;
ManifestForm1.defaultProps = {
    classes: {
    },
    onCancel: null,
    onSubmit: function onSubmit() {
    },
    t: function t(key) {
        return key;
    }
};

},{"react":"3b2NM","@material-ui/core/Button":"1Xm5M","@material-ui/core/Grid":"5T6Yd","@material-ui/core/TextField":"2Ywrl"}],"7EM7i":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _core = require("@material-ui/core");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var actions = _interopRequireWildcard(require("../state/actions"));
var _ManifestListItem = require("../components/ManifestListItem");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
/** */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var manifestId = _ref.manifestId, provider = _ref.provider;
    var manifest = _selectors.getManifest(state, {
        manifestId: manifestId
    }) || {
    };
    var manifesto = _selectors.getManifestoInstance(state, {
        manifestId: manifestId
    });
    var isCollection = (manifesto || {
        isCollection: function isCollection1() {
            return false;
        }
    }).isCollection();
    var size = isCollection ? manifesto.getTotalItems() : _selectors.getCanvases(state, {
        manifestId: manifestId
    }).length;
    return {
        active: _selectors.getWindowManifests(state).includes(manifestId),
        error: manifest.error,
        isCollection: isCollection,
        isFetching: manifest.isFetching,
        isMultipart: isCollection && _selectors.getSequenceBehaviors(state, {
            manifestId: manifestId
        }).includes('multi-part'),
        manifestLogo: _selectors.getManifestLogo(state, {
            manifestId: manifestId
        }),
        provider: provider || _selectors.getManifestProvider(state, {
            manifestId: manifestId
        }),
        ready: !!manifest.json,
        size: size,
        thumbnail: _selectors.getManifestThumbnail(state, {
            manifestId: manifestId
        }),
        title: _selectors.getManifestTitle(state, {
            manifestId: manifestId
        })
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */ var mapDispatchToProps = {
    addWindow: actions.addWindow,
    fetchManifest: actions.fetchManifest
};
/**
 *
 * @param theme
 * @returns {{root: {}, label: {textAlign: string, textTransform: string}}}
 */ var styles = function styles1(theme) {
    return {
        active: {
        },
        buttonGrid: {
        },
        label: {
            textAlign: 'left',
            textTransform: 'initial'
        },
        logo: {
            height: '2.5rem',
            maxWidth: '100%',
            objectFit: 'contain',
            paddingRight: 8
        },
        placeholder: {
            backgroundColor: theme.palette.grey[300]
        },
        root: _objectSpread(_objectSpread({
        }, theme.mixins.gutters()), {
        }, {
            '&$active': {
                borderLeft: "4px solid ".concat(theme.palette.primary.main)
            },
            '&:hover,&:focus-within': {
                '&$active': {
                    borderLeft: "4px solid ".concat(theme.palette.primary.main)
                },
                backgroundColor: theme.palette.action.hover,
                borderLeft: "4px solid ".concat(theme.palette.action.hover)
            },
            borderLeft: '4px solid transparent'
        }),
        thumbnail: {
            maxWidth: '100%',
            objectFit: 'contain'
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('ManifestListItem'));
var _default = enhance(_ManifestListItem.ManifestListItem);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core":"6DoV9","../extend/withPlugins":"5PNwJ","../state/selectors":"5Trnc","../state/actions":"4t2dD","../components/ManifestListItem":"1abEU"}],"1abEU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ManifestListItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));
var _ButtonBase = _interopRequireDefault(require("@material-ui/core/ButtonBase"));
var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _Skeleton = _interopRequireDefault(require("@material-ui/lab/Skeleton"));
var _reactImage = require("react-image");
var _ManifestListItemError = _interopRequireDefault(require("../containers/ManifestListItemError"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * Represents an item in a list of currently-loaded or loading manifests
 * @param {object} props
 * @param {object} [props.manifest = string]
 */ /** */ var ManifestListItem1 = /*#__PURE__*/ function(_React$Component) {
    _inherits(ManifestListItem2, _React$Component);
    var _super = _createSuper(ManifestListItem2);
    /** */ function ManifestListItem2(props) {
        var _this;
        _classCallCheck(this, ManifestListItem2);
        _this = _super.call(this, props);
        _this.handleOpenButtonClick = _this.handleOpenButtonClick.bind(_assertThisInitialized(_this));
        return _this;
    }
    /** */ _createClass(ManifestListItem2, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this$props = this.props, fetchManifest = _this$props.fetchManifest, manifestId = _this$props.manifestId, ready = _this$props.ready, isFetching = _this$props.isFetching, error = _this$props.error, provider = _this$props.provider;
                if (!ready && !error && !isFetching && provider !== 'file') fetchManifest(manifestId);
            }
        },
        {
            key: "handleOpenButtonClick",
            value: function handleOpenButtonClick() {
                var _this$props2 = this.props, addWindow = _this$props2.addWindow, handleClose = _this$props2.handleClose, manifestId = _this$props2.manifestId;
                addWindow({
                    manifestId: manifestId
                });
                handleClose();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props3 = this.props, active = _this$props3.active, buttonRef = _this$props3.buttonRef, manifestId = _this$props3.manifestId, ready = _this$props3.ready, title = _this$props3.title, thumbnail = _this$props3.thumbnail, manifestLogo = _this$props3.manifestLogo, size = _this$props3.size, classes = _this$props3.classes, provider = _this$props3.provider, t = _this$props3.t, error = _this$props3.error, isCollection = _this$props3.isCollection, isMultipart = _this$props3.isMultipart;
                var placeholder = /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    container: true,
                    className: _cssNs["default"]('manifest-list-item'),
                    spacing: 2
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 3,
                    sm: 2
                }, /*#__PURE__*/ _react["default"].createElement(_Skeleton["default"], {
                    className: classes.placeholder,
                    variant: "rect",
                    height: 80,
                    width: 120
                })), /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 9,
                    sm: 6
                }, /*#__PURE__*/ _react["default"].createElement(_Skeleton["default"], {
                    className: classes.placeholder,
                    variant: "text"
                })), /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 8,
                    sm: 2
                }, /*#__PURE__*/ _react["default"].createElement(_Skeleton["default"], {
                    className: classes.placeholder,
                    variant: "text"
                }), /*#__PURE__*/ _react["default"].createElement(_Skeleton["default"], {
                    className: classes.placeholder,
                    variant: "text"
                })), /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 4,
                    sm: 2
                }, /*#__PURE__*/ _react["default"].createElement(_Skeleton["default"], {
                    className: classes.placeholder,
                    variant: "rect",
                    height: 60,
                    width: 60
                })));
                if (error) return(/*#__PURE__*/ _react["default"].createElement(_ListItem["default"], {
                    divider: true,
                    className: classes.root,
                    "data-manifestid": manifestId
                }, /*#__PURE__*/ _react["default"].createElement(_ManifestListItemError["default"], {
                    manifestId: manifestId
                })));
                return(/*#__PURE__*/ _react["default"].createElement(_ListItem["default"], {
                    divider: true,
                    className: [
                        classes.root,
                        active ? classes.active : ''
                    ].join(' '),
                    "data-manifestid": manifestId
                }, ready ? /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    container: true,
                    className: _cssNs["default"]('manifest-list-item'),
                    spacing: 2
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 12,
                    sm: 6,
                    className: classes.buttonGrid
                }, /*#__PURE__*/ _react["default"].createElement(_ButtonBase["default"], {
                    ref: buttonRef,
                    className: _cssNs["default"]('manifest-list-item-title'),
                    style: {
                        width: '100%'
                    },
                    onClick: this.handleOpenButtonClick
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    container: true,
                    spacing: 2,
                    className: classes.label,
                    component: "span"
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 4,
                    sm: 3,
                    component: "span"
                }, thumbnail ? /*#__PURE__*/ _react["default"].createElement(_reactImage.Img, {
                    className: [
                        classes.thumbnail,
                        _cssNs["default"]('manifest-list-item-thumb')
                    ].join(' '),
                    src: [
                        thumbnail
                    ],
                    alt: "",
                    height: "80",
                    unloader: /*#__PURE__*/ _react["default"].createElement(_Skeleton["default"], {
                        variant: "rect",
                        animation: false,
                        className: classes.placeholder,
                        height: 80,
                        width: 120
                    })
                }) : /*#__PURE__*/ _react["default"].createElement(_Skeleton["default"], {
                    className: classes.placeholder,
                    variant: "rect",
                    height: 80,
                    width: 120
                })), /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 8,
                    sm: 9,
                    component: "span"
                }, isCollection && /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    component: "div",
                    variant: "overline"
                }, t(isMultipart ? 'multipartCollection' : 'collection')), /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    component: "span",
                    variant: "h6"
                }, title || manifestId))))), /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 8,
                    sm: 4
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    className: _cssNs["default"]('manifest-list-item-provider')
                }, provider), /*#__PURE__*/ _react["default"].createElement(_Typography["default"], null, t('numItems', {
                    count: size,
                    number: size
                }))), /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 4,
                    sm: 2
                }, manifestLogo && /*#__PURE__*/ _react["default"].createElement(_reactImage.Img, {
                    src: [
                        manifestLogo
                    ],
                    alt: "",
                    role: "presentation",
                    className: classes.logo,
                    unloader: /*#__PURE__*/ _react["default"].createElement(_Skeleton["default"], {
                        variant: "rect",
                        animation: false,
                        className: classes.placeholder,
                        height: 60,
                        width: 60
                    })
                }))) : placeholder));
            }
        }
    ]);
    return ManifestListItem2;
}(_react["default"].Component);
exports.ManifestListItem = ManifestListItem1;
ManifestListItem1.defaultProps = {
    active: false,
    buttonRef: undefined,
    classes: {
    },
    error: null,
    handleClose: function handleClose() {
    },
    isCollection: false,
    isFetching: false,
    isMultipart: false,
    manifestLogo: null,
    provider: null,
    ready: false,
    size: 0,
    t: function t(key) {
        return key;
    },
    thumbnail: null,
    title: null
};

},{"react":"3b2NM","@material-ui/core/ListItem":"2DNb3","@material-ui/core/ButtonBase":"6tm0a","@material-ui/core/Grid":"5T6Yd","@material-ui/core/Typography":"3wcF9","@material-ui/lab/Skeleton":"5mlkx","react-image":"1xAn6","../containers/ManifestListItemError":"6teSD","../config/css-ns":"6ABf8"}],"6teSD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18next = require("react-i18next");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _actions = require("../state/actions");
var _ManifestListItemError = require("../components/ManifestListItemError");
/** */ var mapDispatchToProps = {
    onDismissClick: _actions.removeResource,
    onTryAgainClick: _actions.fetchManifest
};
/**
 *
 * @param theme
 * @returns {{manifestIdText: {wordBreak: string},
 * errorIcon: {color: string, width: string, height: string}}}
 */ var styles = function styles1(theme) {
    return {
        errorIcon: {
            color: theme.palette.error.main,
            height: '2rem',
            width: '2rem'
        },
        manifestIdText: {
            wordBreak: 'break-all'
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _styles.withStyles(styles), _reactRedux.connect(null, mapDispatchToProps), _withPlugins.withPlugins('ManifestListItemError'));
var _default = enhance(_ManifestListItemError.ManifestListItemError);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../components/ManifestListItemError":"6bjX1"}],"6bjX1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ManifestListItemError = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("@material-ui/core/Button"));
var _ErrorOutlineSharp = _interopRequireDefault(require("@material-ui/icons/ErrorOutlineSharp"));
var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache1(nodeInterop1) {
        return nodeInterop1 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf1(o1, p1) {
        o1.__proto__ = p1;
        return o1;
    };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf1(o1) {
        return o1.__proto__ || Object.getPrototypeOf(o1);
    };
    return _getPrototypeOf(o);
}
/**
 * ManifestListItemError renders a component displaying a
 * message to the user about a problem loading a manifest
*/ var ManifestListItemError1 = /*#__PURE__*/ function(_Component) {
    _inherits(ManifestListItemError2, _Component);
    var _super = _createSuper(ManifestListItemError2);
    function ManifestListItemError2() {
        _classCallCheck(this, ManifestListItemError2);
        return _super.apply(this, arguments);
    }
    _createClass(ManifestListItemError2, [
        {
            key: "render",
            value: /**
     * Returns the rendered component
    */ function render() {
                var _this$props = this.props, classes = _this$props.classes, manifestId = _this$props.manifestId, onDismissClick = _this$props.onDismissClick, onTryAgainClick = _this$props.onTryAgainClick, t = _this$props.t;
                return(/*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    container: true
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    container: true
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    container: true,
                    item: true,
                    xs: 12,
                    sm: 6
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 4,
                    sm: 3
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    container: true,
                    justify: "center"
                }, /*#__PURE__*/ _react["default"].createElement(_ErrorOutlineSharp["default"], {
                    className: classes.errorIcon
                }))), /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true,
                    xs: 8,
                    sm: 9
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], null, t('manifestError')), /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    className: classes.manifestIdText
                }, manifestId)))), /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    container: true
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    container: true,
                    item: true,
                    xs: 12,
                    sm: 6,
                    justify: "flex-end"
                }, /*#__PURE__*/ _react["default"].createElement(_Grid["default"], {
                    item: true
                }, /*#__PURE__*/ _react["default"].createElement(_Button["default"], {
                    onClick: function onClick() {
                        onDismissClick(manifestId);
                    }
                }, t('dismiss')), /*#__PURE__*/ _react["default"].createElement(_Button["default"], {
                    onClick: function onClick() {
                        onTryAgainClick(manifestId);
                    }
                }, t('tryAgain')))))));
            }
        }
    ]);
    return ManifestListItemError2;
}(_react.Component);
exports.ManifestListItemError = ManifestListItemError1;

},{"react":"3b2NM","@material-ui/core/Button":"1Xm5M","@material-ui/icons/ErrorOutlineSharp":"4CXaR","@material-ui/core/Grid":"5T6Yd","@material-ui/core/Typography":"3wcF9"}],"1tgyv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _withPlugins = require("../extend/withPlugins");
var _BackgroundPluginArea = require("../components/BackgroundPluginArea");
var _default = _withPlugins.withPlugins('BackgroundPluginArea')(_BackgroundPluginArea.BackgroundPluginArea);
exports["default"] = _default;

},{"../extend/withPlugins":"5PNwJ","../components/BackgroundPluginArea":"2S8TB"}],"2S8TB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BackgroundPluginArea = void 0;
var _react = _interopRequireDefault(require("react"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
var _PluginHook = require("./PluginHook");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/** invisible area where background plugins can add to */ var BackgroundPluginArea = function BackgroundPluginArea1(props) {
    return(/*#__PURE__*/ _react["default"].createElement("div", {
        className: _cssNs["default"]('background-plugin-area'),
        style: {
            display: 'none'
        }
    }, /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, props)));
};
exports.BackgroundPluginArea = BackgroundPluginArea;
BackgroundPluginArea.defaultProps = {
    PluginComponents: []
};

},{"react":"3b2NM","../config/css-ns":"6ABf8","./PluginHook":"6m4WL"}]},["1j6wU","29lPd"], null, "parcelRequire10e3")

//# sourceMappingURL=WorkspaceArea.2d98f91e.js.map
