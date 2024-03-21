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

},{"react-refresh/runtime":"592mh"}],"7AhYa":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "08acdbaaaa621ecda773001d3fa87f0a"; // @flow
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

},{}],"4T98Y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _withPlugins = require("../extend/withPlugins");
var _WindowViewer = require("../components/WindowViewer");
var enhance = _redux.compose(_withPlugins.withPlugins('WindowViewer')// further HOC go here
);
var _default = enhance(_WindowViewer.WindowViewer);
exports["default"] = _default;

},{"redux":"7panR","../extend/withPlugins":"5PNwJ","../components/WindowViewer":"7uEeV"}],"7uEeV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowViewer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _WindowCanvasNavigationControls = _interopRequireDefault(require("../containers/WindowCanvasNavigationControls"));
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
var OSDViewer = /*#__PURE__*/ _react.lazy(function() {
    return Promise.resolve().then(function() {
        return require('../containers/OpenSeadragonViewer');
    }).then(function(res) {
        return _interopRequireWildcard(res);
    });
});
/**
 * Represents a WindowViewer in the mirador workspace. Responsible for mounting
 * OSD and Navigation
 */ var WindowViewer1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowViewer2, _Component);
    var _super = _createSuper(WindowViewer2);
    /** */ function WindowViewer2(props) {
        var _this;
        _classCallCheck(this, WindowViewer2);
        _this = _super.call(this, props);
        _this.state = {
        };
        return _this;
    }
    /** */ _createClass(WindowViewer2, [
        {
            key: "render",
            value: /**
     * Renders things
     */ function render() {
                var windowId = this.props.windowId;
                var hasError = this.state.hasError;
                if (hasError) return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null));
                return(/*#__PURE__*/ _react["default"].createElement(_react.Suspense, {
                    fallback: /*#__PURE__*/ _react["default"].createElement("div", null)
                }, /*#__PURE__*/ _react["default"].createElement(OSDViewer, {
                    windowId: windowId
                }, /*#__PURE__*/ _react["default"].createElement(_WindowCanvasNavigationControls["default"], {
                    windowId: windowId
                }))));
            }
        }
    ], [
        {
            key: "getDerivedStateFromError",
            value: function getDerivedStateFromError(error) {
                // Update state so the next render will show the fallback UI.
                return {
                    hasError: true
                };
            }
        }
    ]);
    return WindowViewer2;
}(_react.Component);
exports.WindowViewer = WindowViewer1;

},{"react":"3b2NM","../containers/WindowCanvasNavigationControls":"6pgor","../containers/OpenSeadragonViewer":"3dlqQ"}],"6pgor":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactSizeme = require("react-sizeme");
var _core = require("@material-ui/core");
var _colorManipulator = require("@material-ui/core/styles/colorManipulator");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _WindowCanvasNavigationControls = require("../components/WindowCanvasNavigationControls");
/** */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    return {
        visible: _selectors.getWorkspace(state).focusedWindowId === windowId
    };
};
/**
 *
 * @param theme
 */ var styles = function styles1(theme) {
    return {
        canvasNav: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            textAlign: 'center'
        },
        canvasNavStacked: {
            flexDirection: 'column'
        },
        controls: {
            backgroundColor: _colorManipulator.fade(theme.palette.background.paper, 0.5),
            bottom: 0,
            position: 'absolute',
            width: '100%',
            zIndex: 50
        }
    };
};
var enhance = _redux.compose(_reactRedux.connect(mapStateToProps), _core.withStyles(styles), _reactSizeme.withSize(), _withPlugins.withPlugins('WindowCanvasNavigationControls'));
var _default = enhance(_WindowCanvasNavigationControls.WindowCanvasNavigationControls);
exports["default"] = _default;

},{"react-redux":"47SrY","redux":"7panR","react-sizeme":"rxfYf","@material-ui/core":"6DoV9","@material-ui/core/styles/colorManipulator":"3UFHE","../extend/withPlugins":"5PNwJ","../state/selectors":"5Trnc","../components/WindowCanvasNavigationControls":"39scz"}],"39scz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WindowCanvasNavigationControls = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _ZoomControls = _interopRequireDefault(require("../containers/ZoomControls"));
var _ViewerInfo = _interopRequireDefault(require("../containers/ViewerInfo"));
var _ViewerNavigation = _interopRequireDefault(require("../containers/ViewerNavigation"));
var _cssNs = _interopRequireDefault(require("../config/css-ns"));
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
 * Represents the viewer controls in the mirador workspace.
 */ var WindowCanvasNavigationControls1 = /*#__PURE__*/ function(_Component) {
    _inherits(WindowCanvasNavigationControls2, _Component);
    var _super = _createSuper(WindowCanvasNavigationControls2);
    function WindowCanvasNavigationControls2() {
        _classCallCheck(this, WindowCanvasNavigationControls2);
        return _super.apply(this, arguments);
    }
    _createClass(WindowCanvasNavigationControls2, [
        {
            key: "canvasNavControlsAreStacked",
            value: /**
     * Determine if canvasNavControls are stacked (based on a hard-coded width)
    */ function canvasNavControlsAreStacked() {
                var size = this.props.size;
                return size && size.width && size.width <= 253;
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props = this.props, classes = _this$props.classes, visible = _this$props.visible, windowId = _this$props.windowId, zoomToWorld = _this$props.zoomToWorld;
                if (!visible) return(/*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    variant: "srOnly",
                    component: "div"
                }, /*#__PURE__*/ _react["default"].createElement(_ViewerInfo["default"], {
                    windowId: windowId
                })));
                return(/*#__PURE__*/ _react["default"].createElement(_Paper["default"], {
                    square: true,
                    className: _classnames["default"](classes.controls, _cssNs["default"]('canvas-nav'), classes.canvasNav, this.canvasNavControlsAreStacked() ? _cssNs["default"]('canvas-nav-stacked') : null, this.canvasNavControlsAreStacked() ? classes.canvasNavStacked : null),
                    elevation: 0
                }, /*#__PURE__*/ _react["default"].createElement(_ZoomControls["default"], {
                    displayDivider: !this.canvasNavControlsAreStacked(),
                    windowId: windowId,
                    zoomToWorld: zoomToWorld
                }), /*#__PURE__*/ _react["default"].createElement(_ViewerNavigation["default"], {
                    windowId: windowId
                }), /*#__PURE__*/ _react["default"].createElement(_ViewerInfo["default"], {
                    windowId: windowId
                }), /*#__PURE__*/ _react["default"].createElement(_PluginHook.PluginHook, this.props)));
            }
        }
    ]);
    return WindowCanvasNavigationControls2;
}(_react.Component);
exports.WindowCanvasNavigationControls = WindowCanvasNavigationControls1;
WindowCanvasNavigationControls1.defaultProps = {
    classes: {
    },
    visible: true
};

},{"react":"3b2NM","classnames":"5aJRc","@material-ui/core/Paper":"5Fj22","@material-ui/core/Typography":"3wcF9","../containers/ZoomControls":"XPSLi","../containers/ViewerInfo":"1KpJz","../containers/ViewerNavigation":"4KOKZ","../config/css-ns":"6ABf8","./PluginHook":"6m4WL"}],"XPSLi":[function(require,module,exports) {
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
var _ZoomControls = require("../components/ZoomControls");
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
        showZoomControls: _selectors.getShowZoomControlsConfig(state),
        viewer: _selectors.getViewer(state, {
            windowId: windowId
        })
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */ var mapDispatchToProps = {
    updateViewport: actions.updateViewport
};
/**
 *
 * @param theme
 * @returns {{zoom_controls: {position: string, right: number},
 * ListItem: {paddingBottom: number, paddingTop: number}}}
 */ var styles = function styles1(theme) {
    return {
        divider: {
            borderRight: '1px solid #808080',
            display: 'inline-block',
            height: '24px',
            margin: '12px 6px'
        },
        ListItem: {
            paddingBottom: 0,
            paddingTop: 0
        },
        zoom_controls: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        }
    };
};
var enhance = _redux.compose(_reactI18next.withTranslation(), _core.withStyles(styles), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('ZoomControls'));
var _default = enhance(_ZoomControls.ZoomControls);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core":"6DoV9","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/ZoomControls":"7nDxt"}],"7nDxt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ZoomControls = void 0;
var _react = _interopRequireWildcard(require("react"));
var _AddCircleOutlineSharp = _interopRequireDefault(require("@material-ui/icons/AddCircleOutlineSharp"));
var _RemoveCircleOutlineSharp = _interopRequireDefault(require("@material-ui/icons/RemoveCircleOutlineSharp"));
var _RestoreZoomIcon = _interopRequireDefault(require("./icons/RestoreZoomIcon"));
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
 */ var ZoomControls1 = /*#__PURE__*/ function(_Component) {
    _inherits(ZoomControls2, _Component);
    var _super = _createSuper(ZoomControls2);
    /**
   * constructor -
   */ function ZoomControls2(props) {
        var _this;
        _classCallCheck(this, ZoomControls2);
        _this = _super.call(this, props);
        _this.handleZoomInClick = _this.handleZoomInClick.bind(_assertThisInitialized(_this));
        _this.handleZoomOutClick = _this.handleZoomOutClick.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * @private
   */ _createClass(ZoomControls2, [
        {
            key: "handleZoomInClick",
            value: function handleZoomInClick() {
                var _this$props = this.props, windowId = _this$props.windowId, updateViewport = _this$props.updateViewport, viewer = _this$props.viewer;
                updateViewport(windowId, {
                    zoom: viewer.zoom * 2
                });
            }
        },
        {
            key: "handleZoomOutClick",
            value: function handleZoomOutClick() {
                var _this$props2 = this.props, windowId = _this$props2.windowId, updateViewport = _this$props2.updateViewport, viewer = _this$props2.viewer;
                updateViewport(windowId, {
                    zoom: viewer.zoom / 2
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props3 = this.props, displayDivider = _this$props3.displayDivider, showZoomControls = _this$props3.showZoomControls, classes = _this$props3.classes, t = _this$props3.t, zoomToWorld = _this$props3.zoomToWorld;
                if (!showZoomControls) return(/*#__PURE__*/ _react["default"].createElement(_react["default"].Fragment, null));
                return(/*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.zoom_controls
                }, /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-label": t('zoomIn'),
                    onClick: this.handleZoomInClick
                }, /*#__PURE__*/ _react["default"].createElement(_AddCircleOutlineSharp["default"], null)), /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-label": t('zoomOut'),
                    onClick: this.handleZoomOutClick
                }, /*#__PURE__*/ _react["default"].createElement(_RemoveCircleOutlineSharp["default"], null)), /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-label": t('zoomReset'),
                    onClick: function onClick() {
                        return zoomToWorld(false);
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_RestoreZoomIcon["default"], null)), displayDivider && /*#__PURE__*/ _react["default"].createElement("span", {
                    className: classes.divider
                })));
            }
        }
    ]);
    return ZoomControls2;
}(_react.Component);
exports.ZoomControls = ZoomControls1;
ZoomControls1.defaultProps = {
    displayDivider: true,
    showZoomControls: false,
    t: function t(key) {
        return key;
    },
    updateViewport: function updateViewport() {
    },
    viewer: {
    },
    windowId: ''
};

},{"react":"3b2NM","@material-ui/icons/AddCircleOutlineSharp":"GvnUs","@material-ui/icons/RemoveCircleOutlineSharp":"5bIra","./icons/RestoreZoomIcon":"3TlmC","../containers/MiradorMenuButton":"4qUlt"}],"GvnUs":[function(require,module,exports) {
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
    d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'AddCircleOutlineSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"5bIra":[function(require,module,exports) {
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
    d: "M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'RemoveCircleOutlineSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"3TlmC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = RestoreZoomIcon;
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
/**
 * RestoreZoomIcon ~
*/ function RestoreZoomIcon(props) {
    return(/*#__PURE__*/ _react["default"].createElement(_SvgIcon["default"], props, /*#__PURE__*/ _react["default"].createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M6,15H9v3h2V13H6Zm9-6V6H13v5h5V9Z"
    }), /*#__PURE__*/ _react["default"].createElement("path", {
        d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8,8,8,0,0,1-8,8Z"
    }))));
}

},{"react":"3b2NM","@material-ui/core/SvgIcon":"2ubNB"}],"1KpJz":[function(require,module,exports) {
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
var _ViewerInfo = require("../components/ViewerInfo");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof Window
 * @private
 */ var mapStateToProps = function mapStateToProps1(state, props) {
    var windowId = props.windowId;
    var canvases = _selectors.getCanvases(state, {
        windowId: windowId
    });
    var canvasIndex = _selectors.getCanvasIndex(state, {
        windowId: windowId
    });
    var canvasId = (_selectors.getCurrentCanvas(state, {
        windowId: windowId
    }) || {
    }).id;
    return {
        canvasCount: canvases.length,
        canvasIndex: canvasIndex,
        canvasLabel: _selectors.getCanvasLabel(state, {
            canvasId: canvasId,
            windowId: windowId
        })
    };
};
var styles = {
    osdInfo: {
        order: 2,
        overflow: 'hidden',
        paddingBottom: 3,
        textOverflow: 'ellipsis',
        unicodeBidi: 'plaintext',
        whiteSpace: 'nowrap',
        width: '100%'
    }
};
var enhance = _redux.compose(_styles.withStyles(styles), _reactI18next.withTranslation(), _reactRedux.connect(mapStateToProps, null), _withPlugins.withPlugins('ViewerInfo'));
var _default = enhance(_ViewerInfo.ViewerInfo);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../components/ViewerInfo":"d5YKc","../state/selectors":"5Trnc"}],"d5YKc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ViewerInfo = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _classnames = _interopRequireDefault(require("classnames"));
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
 */ var ViewerInfo1 = /*#__PURE__*/ function(_Component) {
    _inherits(ViewerInfo2, _Component);
    var _super = _createSuper(ViewerInfo2);
    function ViewerInfo2() {
        _classCallCheck(this, ViewerInfo2);
        return _super.apply(this, arguments);
    }
    _createClass(ViewerInfo2, [
        {
            key: "render",
            value: /** */ function render() {
                var _this$props = this.props, canvasCount = _this$props.canvasCount, canvasIndex = _this$props.canvasIndex, canvasLabel = _this$props.canvasLabel, classes = _this$props.classes, t = _this$props.t;
                return(/*#__PURE__*/ _react["default"].createElement("div", {
                    className: _classnames["default"](_cssNs["default"]('osd-info'), classes.osdInfo)
                }, /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    display: "inline",
                    variant: "caption",
                    className: _cssNs["default"]('canvas-count')
                }, t('pagination', {
                    current: canvasIndex + 1,
                    total: canvasCount
                })), /*#__PURE__*/ _react["default"].createElement(_Typography["default"], {
                    display: "inline",
                    variant: "caption",
                    className: _cssNs["default"]('canvas-label')
                }, canvasLabel && " \u2022 ".concat(canvasLabel))));
            }
        }
    ]);
    return ViewerInfo2;
}(_react.Component);
exports.ViewerInfo = ViewerInfo1;
ViewerInfo1.defaultProps = {
    canvasLabel: undefined,
    t: function t() {
    }
};

},{"react":"3b2NM","@material-ui/core/Typography":"3wcF9","classnames":"5aJRc","../config/css-ns":"6ABf8"}],"4KOKZ":[function(require,module,exports) {
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
var _ViewerNavigation = require("../components/ViewerNavigation");
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
    var windowId = _ref.windowId;
    return {
        hasNextCanvas: !!_selectors.getNextCanvasGrouping(state, {
            windowId: windowId
        }),
        hasPreviousCanvas: !!_selectors.getPreviousCanvasGrouping(state, {
            windowId: windowId
        }),
        viewingDirection: _selectors.getSequenceViewingDirection(state, {
            windowId: windowId
        })
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */ var mapDispatchToProps = function mapDispatchToProps1(dispatch, _ref2) {
    var windowId = _ref2.windowId;
    return {
        setNextCanvas: function setNextCanvas() {
            return dispatch(actions.setNextCanvas(windowId));
        },
        setPreviousCanvas: function setPreviousCanvas() {
            return dispatch(actions.setPreviousCanvas(windowId));
        }
    };
};
var styles = {
    osdNavigation: {
        order: 1
    }
};
var enhance = _redux.compose(_styles.withStyles(styles), _reactI18next.withTranslation(), _reactRedux.connect(mapStateToProps, mapDispatchToProps), _withPlugins.withPlugins('ViewerNavigation')// further HOC go here
);
var _default = enhance(_ViewerNavigation.ViewerNavigation);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","react-i18next":"6hlRL","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../state/actions":"4t2dD","../state/selectors":"5Trnc","../components/ViewerNavigation":"4QcJa"}],"4QcJa":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ViewerNavigation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PlayCircleOutlineSharp = _interopRequireDefault(require("@material-ui/icons/PlayCircleOutlineSharp"));
var _classnames = _interopRequireDefault(require("classnames"));
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
/**
 */ var ViewerNavigation1 = /*#__PURE__*/ function(_Component) {
    _inherits(ViewerNavigation2, _Component);
    var _super = _createSuper(ViewerNavigation2);
    function ViewerNavigation2() {
        _classCallCheck(this, ViewerNavigation2);
        return _super.apply(this, arguments);
    }
    _createClass(ViewerNavigation2, [
        {
            key: "render",
            value: /**
     * Renders things
     */ function render() {
                var _this$props = this.props, hasNextCanvas = _this$props.hasNextCanvas, hasPreviousCanvas = _this$props.hasPreviousCanvas, setNextCanvas = _this$props.setNextCanvas, setPreviousCanvas = _this$props.setPreviousCanvas, t = _this$props.t, classes = _this$props.classes, viewingDirection = _this$props.viewingDirection;
                var htmlDir = 'ltr';
                var previousIconStyle = {
                };
                var nextIconStyle = {
                };
                switch(viewingDirection){
                    case 'top-to-bottom':
                        previousIconStyle = {
                            transform: 'rotate(270deg)'
                        };
                        nextIconStyle = {
                            transform: 'rotate(90deg)'
                        };
                        break;
                    case 'bottom-to-top':
                        previousIconStyle = {
                            transform: 'rotate(90deg)'
                        };
                        nextIconStyle = {
                            transform: 'rotate(270deg)'
                        };
                        break;
                    case 'right-to-left':
                        htmlDir = 'rtl';
                        previousIconStyle = {
                        };
                        nextIconStyle = {
                            transform: 'rotate(180deg)'
                        };
                        break;
                    default:
                        previousIconStyle = {
                            transform: 'rotate(180deg)'
                        };
                        nextIconStyle = {
                        };
                }
                return(/*#__PURE__*/ _react["default"].createElement("div", {
                    className: _classnames["default"](_cssNs["default"]('osd-navigation'), classes.osdNavigation),
                    dir: htmlDir
                }, /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-label": t('previousCanvas'),
                    className: _cssNs["default"]('previous-canvas-button'),
                    disabled: !hasPreviousCanvas,
                    onClick: function onClick() {
                        hasPreviousCanvas && setPreviousCanvas();
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_PlayCircleOutlineSharp["default"], {
                    style: previousIconStyle
                })), /*#__PURE__*/ _react["default"].createElement(_MiradorMenuButton["default"], {
                    "aria-label": t('nextCanvas'),
                    className: _cssNs["default"]('next-canvas-button'),
                    disabled: !hasNextCanvas,
                    onClick: function onClick() {
                        hasNextCanvas && setNextCanvas();
                    }
                }, /*#__PURE__*/ _react["default"].createElement(_PlayCircleOutlineSharp["default"], {
                    style: nextIconStyle
                }))));
            }
        }
    ]);
    return ViewerNavigation2;
}(_react.Component);
exports.ViewerNavigation = ViewerNavigation1;
ViewerNavigation1.defaultProps = {
    hasNextCanvas: false,
    hasPreviousCanvas: false,
    setNextCanvas: function setNextCanvas() {
    },
    setPreviousCanvas: function setPreviousCanvas() {
    },
    viewingDirection: ''
};

},{"react":"3b2NM","@material-ui/icons/PlayCircleOutlineSharp":"gSSpJ","classnames":"5aJRc","../containers/MiradorMenuButton":"4qUlt","../config/css-ns":"6ABf8"}],"gSSpJ":[function(require,module,exports) {
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
    d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'PlayCircleOutlineSharp');
exports.default = _default;

},{"@babel/runtime/helpers/interopRequireDefault":"4ttVj","@babel/runtime/helpers/interopRequireWildcard":"28En5","react":"3b2NM","./utils/createSvgIcon":"1M7MC"}],"3dlqQ":[function(require,module,exports) {
module.exports = require("./loaders/browser/js-loader")(require('./bundle-url').getBundleURL() + "OpenSeadragonViewer.2d5f424b.js").catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root('VHOIN')
);

},{"./loaders/browser/js-loader":"2Ucmd","./bundle-url":"3seVR"}]},["1j6wU","7AhYa"], null, "parcelRequire10e3")

//# sourceMappingURL=WindowViewer.3fa87f0a.js.map
