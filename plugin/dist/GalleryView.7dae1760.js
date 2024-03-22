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

},{"react-refresh/runtime":"592mh"}],"4FSMg":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "2944dd51b3fc1c94632b663a7dae1760"; // @flow
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

},{}],"0RGQe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _styles = require("@material-ui/core/styles");
var _withPlugins = require("../extend/withPlugins");
var _GalleryView = require("../components/GalleryView");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var windowId = _ref.windowId;
    return {
        canvases: _selectors.getCanvases(state, {
            windowId: windowId
        }),
        viewingDirection: _selectors.getSequenceViewingDirection(state, {
            windowId: windowId
        })
    };
};
/**
 * Styles to be passed to the withStyles HOC
 */ var styles = function styles1(theme) {
    return {
        galleryContainer: {
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            overflowX: 'hidden',
            overflowY: 'scroll',
            padding: '50px 0 50px 20px',
            width: '100%'
        }
    };
};
var enhance = _redux.compose(_styles.withStyles(styles), _reactRedux.connect(mapStateToProps), _withPlugins.withPlugins('GalleryView')// further HOC go here
);
var _default = enhance(_GalleryView.GalleryView);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","@material-ui/core/styles":"1Rdvd","../extend/withPlugins":"5PNwJ","../components/GalleryView":"n0ig9","../state/selectors":"5Trnc"}],"n0ig9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GalleryView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));
var _GalleryViewThumbnail = _interopRequireDefault(require("../containers/GalleryViewThumbnail"));
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
 * Renders a GalleryView overview of the manifest.
 */ var GalleryView1 = /*#__PURE__*/ function(_Component) {
    _inherits(GalleryView2, _Component);
    var _super = _createSuper(GalleryView2);
    function GalleryView2() {
        _classCallCheck(this, GalleryView2);
        return _super.apply(this, arguments);
    }
    _createClass(GalleryView2, [
        {
            key: "render",
            value: /**
     * Renders things
     */ function render() {
                var _this$props = this.props, canvases = _this$props.canvases, classes = _this$props.classes, viewingDirection = _this$props.viewingDirection, windowId = _this$props.windowId;
                var htmlDir = viewingDirection === 'right-to-left' ? 'rtl' : 'ltr';
                return(/*#__PURE__*/ _react["default"].createElement(_Paper["default"], {
                    component: "section",
                    dir: htmlDir,
                    square: true,
                    elevation: 0,
                    className: classes.galleryContainer,
                    id: "".concat(windowId, "-gallery")
                }, canvases.map(function(canvas) {
                    return(/*#__PURE__*/ _react["default"].createElement(_GalleryViewThumbnail["default"], {
                        key: canvas.id,
                        windowId: windowId,
                        canvas: canvas
                    }));
                })));
            }
        }
    ]);
    return GalleryView2;
}(_react.Component);
exports.GalleryView = GalleryView1;
GalleryView1.defaultProps = {
    classes: {
    },
    viewingDirection: ''
};

},{"react":"3b2NM","@material-ui/core/Paper":"5Fj22","../containers/GalleryViewThumbnail":"WUl1F"}],"WUl1F":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _flatten = _interopRequireDefault(require("lodash/flatten"));
var _styles = require("@material-ui/core/styles");
var actions = _interopRequireWildcard(require("../state/actions"));
var _GalleryViewThumbnail = require("../components/GalleryViewThumbnail");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
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
 * Styles to be passed to the withStyles HOC
 */ var styles = function styles1(theme) {
    return {
        annotationIcon: {
            height: '1rem',
            width: '1rem'
        },
        annotationsChip: _objectSpread({
        }, theme.typography.caption),
        avatar: {
            backgroundColor: 'transparent'
        },
        chips: {
            opacity: 0.875,
            position: 'absolute',
            right: 0,
            textAlign: 'right',
            top: 0
        },
        galleryViewItem: {
            '&$hasAnnotations': {
                border: "2px solid ".concat(theme.palette.action.selected)
            },
            '&$selected,&$selected$hasAnnotations': {
                border: "2px solid ".concat(theme.palette.primary.main)
            },
            '&:focus': {
                outline: 'none'
            },
            '&:hover': {
                backgroundColor: theme.palette.action.hover
            },
            border: '2px solid transparent',
            cursor: 'pointer',
            display: 'inline-block',
            margin: "".concat(theme.spacing(1), "px ").concat(theme.spacing(0.5), "px"),
            maxHeight: function maxHeight(props) {
                return props.config.height + 45;
            },
            minWidth: '60px',
            overflow: 'hidden',
            padding: theme.spacing(0.5),
            position: 'relative',
            width: 'min-content'
        },
        hasAnnotations: {
        },
        searchChip: _objectSpread(_objectSpread({
        }, theme.typography.caption), {
        }, {
            '&$selected $avatar': {
                backgroundColor: theme.palette.highlights.primary
            },
            marginTop: 2
        }),
        selected: {
        }
    };
};
/** */ var mapStateToProps = function mapStateToProps1(state, _ref) {
    var canvas = _ref.canvas, windowId = _ref.windowId;
    var currentCanvas = _selectors.getCurrentCanvas(state, {
        windowId: windowId
    });
    var searchAnnotations = _selectors.getSearchAnnotationsForWindow(state, {
        windowId: windowId
    });
    var canvasAnnotations = _flatten["default"](searchAnnotations.map(function(a) {
        return a.resources;
    })).filter(function(a) {
        return a.targetId === canvas.id;
    });
    var hasOpenAnnotationsWindow = _selectors.getCompanionWindowsForContent(state, {
        content: 'annotations',
        windowId: windowId
    }).length > 0;
    return {
        annotationsCount: (function() {
            if (!hasOpenAnnotationsWindow) return undefined;
            var annotations = _selectors.getPresentAnnotationsOnSelectedCanvases(state, {
                canvasId: canvas.id
            });
            return annotations.reduce(function(v, a) {
                return v + a.resources.filter(function(r) {
                    return r.targetId === canvas.id;
                }).length;
            }, 0);
        })(),
        config: _selectors.getConfig(state).galleryView,
        searchAnnotationsCount: canvasAnnotations.length,
        selected: currentCanvas && currentCanvas.id === canvas.id
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WindowViewer
 * @private
 */ var mapDispatchToProps = function mapDispatchToProps1(dispatch, _ref2) {
    var canvas = _ref2.canvas, id = _ref2.id, windowId = _ref2.windowId;
    return {
        focusOnCanvas: function focusOnCanvas() {
            return dispatch(actions.setWindowViewType(windowId, 'single'));
        },
        requestCanvasAnnotations: function requestCanvasAnnotations() {
            return dispatch(actions.requestCanvasAnnotations(windowId, canvas.id));
        },
        setCanvas: function setCanvas() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            return dispatch(actions.setCanvas.apply(actions, [
                windowId
            ].concat(args)));
        }
    };
};
var enhance = _redux.compose(_reactRedux.connect(mapStateToProps, mapDispatchToProps), _styles.withStyles(styles)// further HOC go here
);
var _default = enhance(_GalleryViewThumbnail.GalleryViewThumbnail);
exports["default"] = _default;

},{"redux":"7panR","react-redux":"47SrY","lodash/flatten":"4yCrt","@material-ui/core/styles":"1Rdvd","../state/actions":"4t2dD","../components/GalleryViewThumbnail":"plJ3H","../state/selectors":"5Trnc"}],"plJ3H":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GalleryViewThumbnail = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));
var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));
var _CommentSharp = _interopRequireDefault(require("@material-ui/icons/CommentSharp"));
var _SearchSharp = _interopRequireDefault(require("@material-ui/icons/SearchSharp"));
var _classnames = _interopRequireDefault(require("classnames"));
require("intersection-observer");
var _reactIntersectionObserver = _interopRequireDefault(require("@researchgate/react-intersection-observer"));
var _MiradorCanvas = _interopRequireDefault(require("../lib/MiradorCanvas"));
var _IIIFThumbnail = _interopRequireDefault(require("../containers/IIIFThumbnail"));
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
 * Represents a WindowViewer in the mirador workspace. Responsible for mounting
 * OSD and Navigation
 */ var GalleryViewThumbnail1 = /*#__PURE__*/ function(_Component) {
    _inherits(GalleryViewThumbnail2, _Component);
    var _super = _createSuper(GalleryViewThumbnail2);
    /** */ function GalleryViewThumbnail2(props) {
        var _this;
        _classCallCheck(this, GalleryViewThumbnail2);
        _this = _super.call(this, props);
        _this.state = {
            requestedAnnotations: false
        };
        _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
        _this.handleKey = _this.handleKey.bind(_assertThisInitialized(_this));
        _this.handleIntersection = _this.handleIntersection.bind(_assertThisInitialized(_this));
        return _this;
    }
    /** @private */ _createClass(GalleryViewThumbnail2, [
        {
            key: "handleSelect",
            value: function handleSelect() {
                var _this$props = this.props, canvas = _this$props.canvas, selected = _this$props.selected, setCanvas = _this$props.setCanvas, focusOnCanvas = _this$props.focusOnCanvas;
                if (selected) focusOnCanvas();
                else setCanvas(canvas.id);
            }
        },
        {
            key: "handleKey",
            value: function handleKey(event) {
                var _this$props2 = this.props, canvas = _this$props2.canvas, setCanvas = _this$props2.setCanvas, focusOnCanvas = _this$props2.focusOnCanvas;
                this.keys = {
                    enter: 'Enter',
                    space: ' '
                };
                this.chars = {
                    enter: 13,
                    space: 32
                };
                var enterOrSpace = event.key === this.keys.enter || event.which === this.chars.enter || event.key === this.keys.space || event.which === this.chars.space;
                if (enterOrSpace) focusOnCanvas();
                else setCanvas(canvas.id);
            }
        },
        {
            key: "handleIntersection",
            value: function handleIntersection(_ref) {
                var isIntersecting = _ref.isIntersecting;
                var _this$props3 = this.props, annotationsCount = _this$props3.annotationsCount, requestCanvasAnnotations = _this$props3.requestCanvasAnnotations;
                var requestedAnnotations = this.state.requestedAnnotations;
                if (!isIntersecting || annotationsCount === undefined || annotationsCount > 0 || requestedAnnotations) return;
                this.setState({
                    requestedAnnotations: true
                });
                requestCanvasAnnotations();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this$props4 = this.props, annotationsCount = _this$props4.annotationsCount, searchAnnotationsCount = _this$props4.searchAnnotationsCount, canvas = _this$props4.canvas, classes = _this$props4.classes, config = _this$props4.config, selected = _this$props4.selected;
                var miradorCanvas = new _MiradorCanvas["default"](canvas);
                return(/*#__PURE__*/ _react["default"].createElement(_reactIntersectionObserver["default"], {
                    onChange: this.handleIntersection
                }, /*#__PURE__*/ _react["default"].createElement("div", {
                    key: canvas.index,
                    className: _classnames["default"](classes.galleryViewItem, selected ? classes.selected : '', searchAnnotationsCount > 0 ? classes.hasAnnotations : ''),
                    onClick: this.handleSelect,
                    onKeyUp: this.handleKey,
                    role: "button",
                    tabIndex: 0
                }, /*#__PURE__*/ _react["default"].createElement(_IIIFThumbnail["default"], {
                    resource: canvas,
                    labelled: true,
                    variant: "outside",
                    maxWidth: config.width,
                    maxHeight: config.height,
                    style: {
                        margin: '0 auto',
                        maxWidth: "".concat(Math.ceil(config.height * miradorCanvas.aspectRatio), "px")
                    }
                }, /*#__PURE__*/ _react["default"].createElement("div", {
                    className: classes.chips
                }, searchAnnotationsCount > 0 && /*#__PURE__*/ _react["default"].createElement(_Chip["default"], {
                    avatar: /*#__PURE__*/ _react["default"].createElement(_Avatar["default"], {
                        className: classes.avatar,
                        classes: {
                            circle: classes.avatarIcon
                        }
                    }, /*#__PURE__*/ _react["default"].createElement(_SearchSharp["default"], {
                        fontSize: "small"
                    })),
                    label: searchAnnotationsCount,
                    className: _classnames["default"](classes.searchChip),
                    size: "small"
                }), (annotationsCount || 0) > 0 && /*#__PURE__*/ _react["default"].createElement(_Chip["default"], {
                    avatar: /*#__PURE__*/ _react["default"].createElement(_Avatar["default"], {
                        className: classes.avatar,
                        classes: {
                            circle: classes.avatarIcon
                        }
                    }, /*#__PURE__*/ _react["default"].createElement(_CommentSharp["default"], {
                        className: classes.annotationIcon
                    })),
                    label: annotationsCount,
                    className: _classnames["default"](classes.annotationsChip),
                    size: "small"
                }))))));
            }
        }
    ]);
    return GalleryViewThumbnail2;
}(_react.Component);
exports.GalleryViewThumbnail = GalleryViewThumbnail1;
GalleryViewThumbnail1.defaultProps = {
    annotationsCount: undefined,
    config: {
        height: 100,
        width: null
    },
    requestCanvasAnnotations: function requestCanvasAnnotations() {
    },
    searchAnnotationsCount: 0,
    selected: false
};

},{"react":"3b2NM","@material-ui/core/Avatar":"OJ7h6","@material-ui/core/Chip":"5xHma","@material-ui/icons/CommentSharp":"2cY4S","@material-ui/icons/SearchSharp":"68kAI","classnames":"5aJRc","intersection-observer":"3oj57","@researchgate/react-intersection-observer":"5mKhi","../lib/MiradorCanvas":"ZawEC","../containers/IIIFThumbnail":"4HFuf"}]},["1j6wU","4FSMg"], null, "parcelRequire10e3")

//# sourceMappingURL=GalleryView.7dae1760.js.map
