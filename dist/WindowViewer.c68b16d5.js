// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6VQCq":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "64ae1125c68b16d5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
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
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"aSiPs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redux = require("redux");
var _withPlugins = require("../extend/withPlugins");
var _windowViewer = require("../components/WindowViewer");
var enhance = (0, _redux.compose)((0, _withPlugins.withPlugins)("WindowViewer"));
exports.default = enhance((0, _windowViewer.WindowViewer));

},{"redux":"anWnS","../extend/withPlugins":"8qYrm","../components/WindowViewer":"abyX6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"abyX6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WindowViewer", ()=>WindowViewer);
var _react = require("react");
var _windowCanvasNavigationControls = require("../containers/WindowCanvasNavigationControls");
var _windowCanvasNavigationControlsDefault = parcelHelpers.interopDefault(_windowCanvasNavigationControls);
var _jsxRuntime = require("react/jsx-runtime");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var OSDViewer = /*#__PURE__*/ (0, _react.lazy)(function() {
    return require("2ff5a55c2d8cb392");
});
var WindowViewer = /*#__PURE__*/ function(_Component) {
    _inherits(WindowViewer, _Component);
    /** */ function WindowViewer(props) {
        var _this;
        _classCallCheck(this, WindowViewer);
        _this = _callSuper(this, WindowViewer, [
            props
        ]);
        _this.state = {};
        return _this;
    }
    /** */ _createClass(WindowViewer, [
        {
            key: "render",
            value: /**
     * Renders things
     */ function render() {
                var windowId = this.props.windowId;
                var hasError = this.state.hasError;
                if (hasError) return null;
                return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _react.Suspense), {
                    fallback: /*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {}),
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)(OSDViewer, {
                        windowId: windowId,
                        children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _windowCanvasNavigationControlsDefault.default), {
                            windowId: windowId
                        })
                    })
                });
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
    return WindowViewer;
}((0, _react.Component));

},{"react":"21dqq","../containers/WindowCanvasNavigationControls":"35kJC","react/jsx-runtime":"6AEwr","2ff5a55c2d8cb392":"kZBYg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"35kJC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactSizeme = require("react-sizeme");
var _withPlugins = require("../extend/withPlugins");
var _selectors = require("../state/selectors");
var _windowCanvasNavigationControls = require("../components/WindowCanvasNavigationControls");
/** */ var mapStateToProps = function mapStateToProps(state, _ref) {
    var windowId = _ref.windowId;
    return {
        showZoomControls: (0, _selectors.getShowZoomControlsConfig)(state),
        visible: (0, _selectors.getWorkspace)(state).focusedWindowId === windowId
    };
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _reactSizeme.withSize)(), (0, _withPlugins.withPlugins)("WindowCanvasNavigationControls"));
exports.default = enhance((0, _windowCanvasNavigationControls.WindowCanvasNavigationControls));

},{"react-redux":"62sf7","redux":"anWnS","react-sizeme":"7lRp3","../extend/withPlugins":"8qYrm","../state/selectors":"5r9Wj","../components/WindowCanvasNavigationControls":"91O8K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"91O8K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WindowCanvasNavigationControls", ()=>WindowCanvasNavigationControls);
var _react = require("react");
var _styles = require("@mui/material/styles");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _paper = require("@mui/material/Paper");
var _paperDefault = parcelHelpers.interopDefault(_paper);
var _stack = require("@mui/material/Stack");
var _stackDefault = parcelHelpers.interopDefault(_stack);
var _divider = require("@mui/material/Divider");
var _dividerDefault = parcelHelpers.interopDefault(_divider);
var _typography = require("@mui/material/Typography");
var _typographyDefault = parcelHelpers.interopDefault(_typography);
var _utils = require("@mui/utils");
var _zoomControls = require("../containers/ZoomControls");
var _zoomControlsDefault = parcelHelpers.interopDefault(_zoomControls);
var _viewerInfo = require("../containers/ViewerInfo");
var _viewerInfoDefault = parcelHelpers.interopDefault(_viewerInfo);
var _viewerNavigation = require("../containers/ViewerNavigation");
var _viewerNavigationDefault = parcelHelpers.interopDefault(_viewerNavigation);
var _cssNs = require("../config/css-ns");
var _cssNsDefault = parcelHelpers.interopDefault(_cssNs);
var _pluginHook = require("./PluginHook");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
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
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var Root = (0, _styles.styled)((0, _paperDefault.default), {
    name: "WindowCanvasNavigationControls",
    slot: "root"
})(function(_ref) {
    var theme = _ref.theme;
    return {
        alignItems: "center",
        backgroundColor: (0, _styles.alpha)(theme.palette.background.paper, 0.5),
        bottom: 0,
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        position: "absolute",
        textAlign: "center",
        width: "100%",
        zIndex: 50
    };
});
var WindowCanvasNavigationControls = /*#__PURE__*/ function(_Component) {
    _inherits(WindowCanvasNavigationControls, _Component);
    function WindowCanvasNavigationControls() {
        _classCallCheck(this, WindowCanvasNavigationControls);
        return _callSuper(this, WindowCanvasNavigationControls, arguments);
    }
    _createClass(WindowCanvasNavigationControls, [
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
                var _this$props = this.props, showZoomControls = _this$props.showZoomControls, visible = _this$props.visible, windowId = _this$props.windowId, zoomToWorld = _this$props.zoomToWorld;
                if (!visible) return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _typographyDefault.default), {
                    style: (0, _utils.visuallyHidden),
                    component: "div",
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _viewerInfoDefault.default), {
                        windowId: windowId
                    })
                });
                return /*#__PURE__*/ (0, _jsxRuntime.jsxs)(Root, {
                    square: true,
                    className: (0, _classnamesDefault.default)((0, _cssNsDefault.default)("canvas-nav"), this.canvasNavControlsAreStacked() ? (0, _cssNsDefault.default)("canvas-nav-stacked") : null),
                    elevation: 0,
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsxs)((0, _stackDefault.default), {
                            direction: this.canvasNavControlsAreStacked() ? "column" : "row",
                            divider: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _dividerDefault.default), {
                                orientation: this.canvasNavControlsAreStacked() ? "horizontal" : "vertical",
                                variant: "middle",
                                flexItem: true
                            }),
                            spacing: 0,
                            children: [
                                showZoomControls && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _zoomControlsDefault.default), {
                                    windowId: windowId,
                                    zoomToWorld: zoomToWorld
                                }),
                                /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _viewerNavigationDefault.default), {
                                    windowId: windowId
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _viewerInfoDefault.default), {
                            windowId: windowId
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _pluginHook.PluginHook), _objectSpread({}, this.props))
                    ]
                });
            }
        }
    ]);
    return WindowCanvasNavigationControls;
}((0, _react.Component));
WindowCanvasNavigationControls.defaultProps = {
    showZoomControls: false,
    visible: true
};

},{"react":"21dqq","@mui/material/styles":"1lzai","classnames":"jocGM","@mui/material/Paper":"6IiTP","@mui/material/Stack":"cuThX","@mui/material/Divider":"lHE5Y","@mui/material/Typography":"faxSz","@mui/utils":"iivny","../containers/ZoomControls":"589iG","../containers/ViewerInfo":"g7lH1","../containers/ViewerNavigation":"ciZJ6","../config/css-ns":"7FzFf","./PluginHook":"btJE7","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"589iG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18Next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _actions = require("../state/actions");
var _selectors = require("../state/selectors");
var _zoomControls = require("../components/ZoomControls");
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */ var mapStateToProps = function mapStateToProps(state, _ref) {
    var windowId = _ref.windowId;
    return {
        viewer: (0, _selectors.getViewer)(state, {
            windowId: windowId
        })
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */ var mapDispatchToProps = {
    updateViewport: _actions.updateViewport
};
var enhance = (0, _redux.compose)((0, _reactI18Next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)("ZoomControls"));
exports.default = enhance((0, _zoomControls.ZoomControls));

},{"redux":"anWnS","react-redux":"62sf7","react-i18next":"faThV","../extend/withPlugins":"8qYrm","../state/actions":"bqnXe","../state/selectors":"5r9Wj","../components/ZoomControls":"5FRmg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5FRmg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZoomControls", ()=>ZoomControls);
var _react = require("react");
var _addCircleOutlineSharp = require("@mui/icons-material/AddCircleOutlineSharp");
var _addCircleOutlineSharpDefault = parcelHelpers.interopDefault(_addCircleOutlineSharp);
var _removeCircleOutlineSharp = require("@mui/icons-material/RemoveCircleOutlineSharp");
var _removeCircleOutlineSharpDefault = parcelHelpers.interopDefault(_removeCircleOutlineSharp);
var _styles = require("@mui/material/styles");
var _restoreZoomIcon = require("./icons/RestoreZoomIcon");
var _restoreZoomIconDefault = parcelHelpers.interopDefault(_restoreZoomIcon);
var _miradorMenuButton = require("../containers/MiradorMenuButton");
var _miradorMenuButtonDefault = parcelHelpers.interopDefault(_miradorMenuButton);
var _jsxRuntime = require("react/jsx-runtime");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
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
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var StyledZoomControlsWrapper = (0, _styles.styled)("div")({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
});
var ZoomControls = /*#__PURE__*/ function(_Component) {
    _inherits(ZoomControls, _Component);
    /**
   * constructor -
   */ function ZoomControls(props) {
        var _this;
        _classCallCheck(this, ZoomControls);
        _this = _callSuper(this, ZoomControls, [
            props
        ]);
        _this.handleZoomInClick = _this.handleZoomInClick.bind(_assertThisInitialized(_this));
        _this.handleZoomOutClick = _this.handleZoomOutClick.bind(_assertThisInitialized(_this));
        return _this;
    }
    /**
   * @private
   */ _createClass(ZoomControls, [
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
                var _this$props3 = this.props, t = _this$props3.t, zoomToWorld = _this$props3.zoomToWorld;
                return /*#__PURE__*/ (0, _jsxRuntime.jsxs)(StyledZoomControlsWrapper, {
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _miradorMenuButtonDefault.default), {
                            "aria-label": t("zoomIn"),
                            onClick: this.handleZoomInClick,
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _addCircleOutlineSharpDefault.default), {})
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _miradorMenuButtonDefault.default), {
                            "aria-label": t("zoomOut"),
                            onClick: this.handleZoomOutClick,
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _removeCircleOutlineSharpDefault.default), {})
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _miradorMenuButtonDefault.default), {
                            "aria-label": t("zoomReset"),
                            onClick: function onClick() {
                                return zoomToWorld(false);
                            },
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _restoreZoomIconDefault.default), {})
                        })
                    ]
                });
            }
        }
    ]);
    return ZoomControls;
}((0, _react.Component));
ZoomControls.defaultProps = {
    t: function t(key) {
        return key;
    },
    updateViewport: function updateViewport() {},
    viewer: {},
    windowId: ""
};

},{"react":"21dqq","@mui/icons-material/AddCircleOutlineSharp":"Bkkoq","@mui/icons-material/RemoveCircleOutlineSharp":"bfgAp","@mui/material/styles":"1lzai","./icons/RestoreZoomIcon":"qH77w","../containers/MiradorMenuButton":"bMCeK","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Bkkoq":[function(require,module,exports) {
"use strict";
"use client";
var _interopRequireDefault = require("5a28de3bdb9ca802");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _createSvgIcon = _interopRequireDefault(require("61bce0e2e91ebe3b"));
var _jsxRuntime = require("ce5aadcec83b489");
var _default = exports.default = (0, _createSvgIcon.default)(/*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
    d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), "AddCircleOutlineSharp");

},{"5a28de3bdb9ca802":"7XM86","61bce0e2e91ebe3b":"lVV9C","ce5aadcec83b489":"6AEwr"}],"bfgAp":[function(require,module,exports) {
"use strict";
"use client";
var _interopRequireDefault = require("1080b253e6a6b89e");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _createSvgIcon = _interopRequireDefault(require("1c2f3c31b0acc562"));
var _jsxRuntime = require("23efac29bcce1b33");
var _default = exports.default = (0, _createSvgIcon.default)(/*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
    d: "M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), "RemoveCircleOutlineSharp");

},{"1080b253e6a6b89e":"7XM86","1c2f3c31b0acc562":"lVV9C","23efac29bcce1b33":"6AEwr"}],"qH77w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RestoreZoomIcon);
var _svgIcon = require("@mui/material/SvgIcon");
var _svgIconDefault = parcelHelpers.interopDefault(_svgIcon);
/**
 * RestoreZoomIcon ~
*/ var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function RestoreZoomIcon(props) {
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _svgIconDefault.default), _objectSpread(_objectSpread({}, props), {}, {
        children: /*#__PURE__*/ (0, _jsxRuntime.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    d: "M6,15H9v3h2V13H6Zm9-6V6H13v5h5V9Z"
                }),
                /*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
                    d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8,8,8,0,0,1-8,8Z"
                })
            ]
        })
    }));
}

},{"@mui/material/SvgIcon":"egDpG","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7lH1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18Next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _viewerInfo = require("../components/ViewerInfo");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - to hook up connect
 * @memberof Window
 * @private
 */ var mapStateToProps = function mapStateToProps(state, props) {
    var windowId = props.windowId;
    var canvases = (0, _selectors.getCanvases)(state, {
        windowId: windowId
    });
    var canvasIndex = (0, _selectors.getCanvasIndex)(state, {
        windowId: windowId
    });
    var canvasId = ((0, _selectors.getCurrentCanvas)(state, {
        windowId: windowId
    }) || {}).id;
    return {
        canvasCount: canvases.length,
        canvasIndex: canvasIndex,
        canvasLabel: (0, _selectors.getCanvasLabel)(state, {
            canvasId: canvasId,
            windowId: windowId
        })
    };
};
var enhance = (0, _redux.compose)((0, _reactI18Next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, null), (0, _withPlugins.withPlugins)("ViewerInfo"));
exports.default = enhance((0, _viewerInfo.ViewerInfo));

},{"redux":"anWnS","react-redux":"62sf7","react-i18next":"faThV","../extend/withPlugins":"8qYrm","../components/ViewerInfo":"iNXPy","../state/selectors":"5r9Wj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNXPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ViewerInfo", ()=>ViewerInfo);
var _react = require("react");
var _typography = require("@mui/material/Typography");
var _typographyDefault = parcelHelpers.interopDefault(_typography);
var _styles = require("@mui/material/styles");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _cssNs = require("../config/css-ns");
var _cssNsDefault = parcelHelpers.interopDefault(_cssNs);
var _jsxRuntime = require("react/jsx-runtime");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var StyledOsdInfo = (0, _styles.styled)("div")(function() {
    return {
        overflow: "hidden",
        paddingBottom: 0.5,
        textOverflow: "ellipsis",
        unicodeBidi: "plaintext",
        whiteSpace: "nowrap",
        width: "100%"
    };
});
var ViewerInfo = /*#__PURE__*/ function(_Component) {
    _inherits(ViewerInfo, _Component);
    function ViewerInfo() {
        _classCallCheck(this, ViewerInfo);
        return _callSuper(this, ViewerInfo, arguments);
    }
    _createClass(ViewerInfo, [
        {
            key: "render",
            value: /** */ function render() {
                var _this$props = this.props, canvasCount = _this$props.canvasCount, canvasIndex = _this$props.canvasIndex, canvasLabel = _this$props.canvasLabel, t = _this$props.t;
                return /*#__PURE__*/ (0, _jsxRuntime.jsxs)(StyledOsdInfo, {
                    className: (0, _classnamesDefault.default)((0, _cssNsDefault.default)("osd-info")),
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _typographyDefault.default), {
                            display: "inline",
                            variant: "caption",
                            className: (0, _cssNsDefault.default)("canvas-count"),
                            children: t("pagination", {
                                current: canvasIndex + 1,
                                total: canvasCount
                            })
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _typographyDefault.default), {
                            display: "inline",
                            variant: "caption",
                            className: (0, _cssNsDefault.default)("canvas-label"),
                            children: canvasLabel && " \u2022 ".concat(canvasLabel)
                        })
                    ]
                });
            }
        }
    ]);
    return ViewerInfo;
}((0, _react.Component));
ViewerInfo.defaultProps = {
    canvasLabel: undefined,
    t: function t() {}
};

},{"react":"21dqq","@mui/material/Typography":"faxSz","@mui/material/styles":"1lzai","classnames":"jocGM","../config/css-ns":"7FzFf","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ciZJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18Next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _actions = require("../state/actions");
var _selectors = require("../state/selectors");
var _viewerNavigation = require("../components/ViewerNavigation");
/** */ var mapStateToProps = function mapStateToProps(state, _ref) {
    var windowId = _ref.windowId;
    return {
        hasNextCanvas: !!(0, _selectors.getNextCanvasGrouping)(state, {
            windowId: windowId
        }),
        hasPreviousCanvas: !!(0, _selectors.getPreviousCanvasGrouping)(state, {
            windowId: windowId
        }),
        viewingDirection: (0, _selectors.getSequenceViewingDirection)(state, {
            windowId: windowId
        })
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */ var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
    var windowId = _ref2.windowId;
    return {
        setNextCanvas: function setNextCanvas() {
            return dispatch(_actions.setNextCanvas(windowId));
        },
        setPreviousCanvas: function setPreviousCanvas() {
            return dispatch(_actions.setPreviousCanvas(windowId));
        }
    };
};
var enhance = (0, _redux.compose)((0, _reactI18Next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)("ViewerNavigation"));
exports.default = enhance((0, _viewerNavigation.ViewerNavigation));

},{"redux":"anWnS","react-redux":"62sf7","react-i18next":"faThV","../extend/withPlugins":"8qYrm","../state/actions":"bqnXe","../state/selectors":"5r9Wj","../components/ViewerNavigation":"fNIRf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNIRf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ViewerNavigation", ()=>ViewerNavigation);
var _react = require("react");
var _playCircleOutlineSharp = require("@mui/icons-material/PlayCircleOutlineSharp");
var _playCircleOutlineSharpDefault = parcelHelpers.interopDefault(_playCircleOutlineSharp);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _miradorMenuButton = require("../containers/MiradorMenuButton");
var _miradorMenuButtonDefault = parcelHelpers.interopDefault(_miradorMenuButton);
var _cssNs = require("../config/css-ns");
var _cssNsDefault = parcelHelpers.interopDefault(_cssNs);
/**
 */ var _jsxRuntime = require("react/jsx-runtime");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
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
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var ViewerNavigation = /*#__PURE__*/ function(_Component) {
    _inherits(ViewerNavigation, _Component);
    function ViewerNavigation() {
        _classCallCheck(this, ViewerNavigation);
        return _callSuper(this, ViewerNavigation, arguments);
    }
    _createClass(ViewerNavigation, [
        {
            key: "render",
            value: /**
     * Renders things
     */ function render() {
                var _this$props = this.props, hasNextCanvas = _this$props.hasNextCanvas, hasPreviousCanvas = _this$props.hasPreviousCanvas, setNextCanvas = _this$props.setNextCanvas, setPreviousCanvas = _this$props.setPreviousCanvas, t = _this$props.t, viewingDirection = _this$props.viewingDirection;
                var htmlDir = "ltr";
                var previousIconStyle = {};
                var nextIconStyle = {};
                switch(viewingDirection){
                    case "top-to-bottom":
                        previousIconStyle = {
                            transform: "rotate(270deg)"
                        };
                        nextIconStyle = {
                            transform: "rotate(90deg)"
                        };
                        break;
                    case "bottom-to-top":
                        previousIconStyle = {
                            transform: "rotate(90deg)"
                        };
                        nextIconStyle = {
                            transform: "rotate(270deg)"
                        };
                        break;
                    case "right-to-left":
                        htmlDir = "rtl";
                        previousIconStyle = {};
                        nextIconStyle = {
                            transform: "rotate(180deg)"
                        };
                        break;
                    default:
                        previousIconStyle = {
                            transform: "rotate(180deg)"
                        };
                        nextIconStyle = {};
                }
                return /*#__PURE__*/ (0, _jsxRuntime.jsxs)("div", {
                    className: (0, _classnamesDefault.default)((0, _cssNsDefault.default)("osd-navigation")),
                    dir: htmlDir,
                    children: [
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _miradorMenuButtonDefault.default), {
                            "aria-label": t("previousCanvas"),
                            className: (0, _cssNsDefault.default)("previous-canvas-button"),
                            disabled: !hasPreviousCanvas,
                            onClick: function onClick() {
                                hasPreviousCanvas && setPreviousCanvas();
                            },
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _playCircleOutlineSharpDefault.default), {
                                style: previousIconStyle
                            })
                        }),
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _miradorMenuButtonDefault.default), {
                            "aria-label": t("nextCanvas"),
                            className: (0, _cssNsDefault.default)("next-canvas-button"),
                            disabled: !hasNextCanvas,
                            onClick: function onClick() {
                                hasNextCanvas && setNextCanvas();
                            },
                            children: /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _playCircleOutlineSharpDefault.default), {
                                style: nextIconStyle
                            })
                        })
                    ]
                });
            }
        }
    ]);
    return ViewerNavigation;
}((0, _react.Component));
ViewerNavigation.defaultProps = {
    hasNextCanvas: false,
    hasPreviousCanvas: false,
    setNextCanvas: function setNextCanvas() {},
    setPreviousCanvas: function setPreviousCanvas() {},
    viewingDirection: ""
};

},{"react":"21dqq","@mui/icons-material/PlayCircleOutlineSharp":"2wnff","classnames":"jocGM","../containers/MiradorMenuButton":"bMCeK","../config/css-ns":"7FzFf","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wnff":[function(require,module,exports) {
"use strict";
"use client";
var _interopRequireDefault = require("8cea12e1b38b2e28");
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _createSvgIcon = _interopRequireDefault(require("a0bd40953c923801"));
var _jsxRuntime = require("6cc741822e138b63");
var _default = exports.default = (0, _createSvgIcon.default)(/*#__PURE__*/ (0, _jsxRuntime.jsx)("path", {
    d: "m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), "PlayCircleOutlineSharp");

},{"8cea12e1b38b2e28":"7XM86","a0bd40953c923801":"lVV9C","6cc741822e138b63":"6AEwr"}],"kZBYg":[function(require,module,exports) {
module.exports = require("569ad51cbfe7210a")(require("1c2c78da5ffb11ac").getBundleURL("8DUQY") + "OpenSeadragonViewer.570eae9d.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("aXPeV"));

},{"569ad51cbfe7210a":"61B45","1c2c78da5ffb11ac":"lgJ39"}]},["6VQCq","1xC6H"], null, "parcelRequirec023")

//# sourceMappingURL=WindowViewer.c68b16d5.js.map
