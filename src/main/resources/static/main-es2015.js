(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!active; else loading\">\n  <router-outlet></router-outlet>\n</div>\n<ng-template #loading>\n  <app-loading-spinner></app-loading-spinner>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/404/page-not-found.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/404/page-not-found.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-404\">\n    <div class=\"page-404\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n            <img class=\"top-image-404\" src=\"assets/img/404-1.png\">\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div (click)=\"goToPage()\" class=\"fallback-button\">Return!</div>\n        </div>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/footer/footer.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/footer/footer.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"main-footer\">\n  <strong>Copyright &copy; 2020 Patryk Duduś</strong>\n  <div class=\"float-right d-none d-sm-inline-block\">\n    <b>Version</b> 1.0\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/header/header.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/header/header.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Navbar -->\n<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n  <!-- Left navbar links -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\" role=\"button\"><i class=\"fas fa-bars\"></i></a>\n    </li>\n  </ul>\n  <!-- Right navbar links -->\n  <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item dropdown\" style=\"margin-right: 20px\">\n      <a data-toggle=\"dropdown\" href=\"#\">\n        <div class=\"user-panel mt-1 pb-1 mb-1 d-flex\">\n          <div class=\"image\">\n            <img src=\"{{imageURL}}\" class=\"img-circle elevation-2\" alt=\"User Image\">\n          </div>\n        </div>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-lg dropdown-menu-right text-center\">\n        <div class=\"dropdown-block\">\n          <div class=\"image\" style=\"width: 100%;\">\n            <img id=\"user-image\" src=\"{{imageURL}}\" class=\"img-circle\" alt=\"User Image\">\n          </div>\n          <div class=\"dropdown-block info\">\n            <a [routerLink]=\"'profile'\" class=\"d-block\">{{user?.name}} {{user?.surname}}</a>\n          </div>\n        </div>\n        <a [routerLink]=\"'profile'\" style=\"color: #212529 !important;\" class=\"btn btn-app\">\n          <i class=\"fas fa-edit\"></i> Edit\n        </a>\n        <a (click)=\"onSignOut()\" class=\"btn btn-app\">\n          <i class=\"fas fa-sign-out-alt\"></i> Logout\n        </a>\n      </div>\n\n    </li>\n  </ul>\n</nav>\n<!-- /.navbar -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/map/map.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/map/map.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #mapContainer id=\"map\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/settings/settings.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/settings/settings.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Control Sidebar -->\n<aside class=\"control-sidebar control-sidebar-dark\">\n  <!-- Control sidebar content goes here -->\n</aside>\n<!-- /.control-sidebar -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/side-nav/side-nav.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/side-nav/side-nav.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Main Sidebar Container -->\n<aside class=\"main-sidebar sidebar-light-orange elevation-4\">\n  <!-- Brand Logo -->\n  <a [routerLink]=\"'dashboard'\" class=\"brand-link\">\n    <img src=\"assets/img/logo.png\" alt=\"CPMA Logo\" class=\"brand-image img-circle elevation-3\"\n         style=\"opacity: .8\">\n    <span class=\"brand-text font-weight-light\">CPMA</span>\n  </a>\n\n  <!-- Sidebar -->\n  <div class=\"sidebar\">\n <!-- Sidebar Menu -->\n    <nav class=\"mt-2\">\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\n        <!-- Add icons to the links using the .nav-icon class\n             with font-awesome or any other icon font library -->\n        <li class=\"nav-item\">\n          <a [routerLink]=\"'dashboard'\"  routerLinkActive=\"active\" class=\"nav-link\">\n            <i class=\"nav-icon fas fa-tachometer-alt\"></i>\n            <p>\n              Dashboard\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a [routerLink]=\"'devices'\" routerLinkActive=\"active\"  class=\"nav-link\">\n            <i class=\"nav-icon fas fa-mobile-alt\"></i>\n            <p>\n              Devices\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item has-treeview\">\n          <a class=\"nav-link\">\n            <i class=\"nav-icon fas fa-tools\"></i>\n            <p>\n              Administration\n              <i class=\"fas fa-angle-left right\"></i>\n            </p>\n          </a>\n          <ul class=\"nav nav-treeview\">\n            <li class=\"nav-item\">\n              <a [routerLink]=\"'users'\" routerLinkActive=\"active\"  class=\"nav-link\">\n                <i class=\"fas fa-users nav-icon\"></i>\n                <p>Users</p>\n              </a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </nav>\n    <!-- /.sidebar-menu -->\n  </div>\n  <!-- /.sidebar -->\n</aside>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/spinners/component-spinner/component-spinner.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/spinners/component-spinner/component-spinner.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-main\"style=\"\">\n  <div class=\"content-inner\">\n    <div class=\"sk-chase\">\n      <div class=\"sk-chase-dot\"></div>\n      <div class=\"sk-chase-dot\"></div>\n      <div class=\"sk-chase-dot\"></div>\n      <div class=\"sk-chase-dot\"></div>\n      <div class=\"sk-chase-dot\"></div>\n      <div class=\"sk-chase-dot\"></div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/spinners/main-spinner/main-spinner.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/spinners/main-spinner/main-spinner.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"all-page\">\n  <div class=\"sk-folding-cube\">\n    <div class=\"sk-cube1 sk-cube\"></div>\n    <div class=\"sk-cube2 sk-cube\"></div>\n    <div class=\"sk-cube4 sk-cube\"></div>\n    <div class=\"sk-cube3 sk-cube\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_helpers/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







const TOKEN_HEADER_KEY = 'Authorization';
let AuthInterceptor = class AuthInterceptor {
    constructor(token, router) {
        this.token = token;
        this.router = router;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
            return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err, caught) => {
                if (err.status === 401) {
                    this.handleAuthError();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(err);
                }
            }));
        }
        return next.handle(authReq);
    }
    handleAuthError() {
        this.token.signOut();
        this.router.navigateByUrl('login');
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptor);

const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/_services/_api/user.api.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/_api/user.api.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const API_URL = 'http://localhost:8080/api/user/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAllUsers() {
        return this.http.get(API_URL + 'getAll');
    }
    getUser(id) {
        return this.http.get(API_URL + 'getUser/', { params: { id } });
    }
    addUser(data) {
        return this.http.post(API_URL + 'register', {
            username: data.username,
            email: data.email,
            password: data.password,
            name: data.name,
            surname: data.surname,
            phone: data.phone,
            isAdmin: data.isAdmin,
            isMod: data.isMod
        }, httpOptions);
    }
    deleteUser(id) {
        return this.http.delete(API_URL + 'delete/', { params: { id } });
    }
    updateUser(data) {
        return this.http.put(API_URL + 'update/', {
            username: data.username,
            email: data.email,
            name: data.name,
            surname: data.surname,
            phone: data.phone,
            isAdmin: data.isAdmin2,
            isMod: data.isMod2
        }, httpOptions);
    }
    changePassword(data) {
        return this.http.put(API_URL + 'changePassword/', {
            username: data.username,
            password: data.password,
        }, httpOptions);
    }
    getReport() {
        return this.http.get(API_URL + 'getReport', { responseType: 'blob' });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/_services/routing-guard.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/routing-guard.service.ts ***!
  \****************************************************/
/*! exports provided: RoutingGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingGuardService", function() { return RoutingGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/_services/token-storage.service.ts");




let RoutingGuardService = class RoutingGuardService {
    constructor(router, tokenStorage) {
        this.router = router;
        this.tokenStorage = tokenStorage;
    }
    canActivate() {
        if (this.tokenStorage.getToken() != null) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
};
RoutingGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
RoutingGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RoutingGuardService);



/***/ }),

/***/ "./src/app/_services/token-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
};
TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenStorageService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_routing_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/routing-guard.service */ "./src/app/_services/routing-guard.service.ts");
/* harmony import */ var _modules_layout_404_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/layout/404/page-not-found.component */ "./src/app/modules/layout/404/page-not-found.component.ts");





const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => __webpack_require__.e(/*! import() | modules-auth-auth-module */ "modules-auth-auth-module").then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts")).then(m => m.AuthModule) },
    { path: 'cpma', loadChildren: () => __webpack_require__.e(/*! import() | modules-pages-pages-module */ "modules-pages-pages-module").then(__webpack_require__.bind(null, /*! ./modules/pages/pages.module */ "./src/app/modules/pages/pages.module.ts")).then(m => m.PagesModule), canActivate: [_services_routing_guard_service__WEBPACK_IMPORTED_MODULE_3__["RoutingGuardService"]] },
    { path: '**', component: _modules_layout_404_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'CPMA';
        this.router.events.subscribe(value => {
            if (value instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.active = true;
            }
            else if (value instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                this.active = false;
            }
            else if (value instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                this.active = false;
            }
            else if (value instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.active = false;
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/layout/layout.module */ "./src/app/modules/layout/layout.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_helpers/auth.interceptor */ "./src/app/_helpers/auth.interceptor.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot()
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
                multi: true,
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/layout/404/page-not-found.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/layout/404/page-not-found.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-404 {\n  background-color: #2f3030 !important;\n  width: 100%;\n  overflow: hidden;\n  height: 100vh;\n}\n\n.page-404 {\n  text-align: center;\n  width: 100%;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.top-image-404 {\n  width: 100%;\n  max-width: 850px;\n  max-height: 90vh;\n}\n\n.fallback-button {\n  width: 90%;\n  max-width: 650px;\n  height: 5vh;\n  background-color: #dd5d3c;\n  border: solid 5px #eed3b7;\n  color: #eed3b7;\n  margin-left: auto;\n  border-radius: 10px;\n  margin-right: auto;\n  font-size: 26px;\n  font-weight: bold;\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n  -moz-text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n  -webkit-text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n.fallback-button:hover {\n  background-color: #eed3b7;\n  border: solid 5px #dd5d3c;\n  color: #dd5d3c;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvNDA0L0U6XFxTdHVkaWFcXE1hZ2lzdGVya2FcXEFJXFxNR1ItQUlcXHNyY1xcbWFpblxcYW5ndWxhci9zcmNcXGFwcFxcbW9kdWxlc1xcbGF5b3V0XFw0MDRcXHBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2xheW91dC80MDQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbURBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvNDA0L3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tNDA0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMDMwICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ucGFnZS00MDQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLnRvcC1pbWFnZS00MDR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA4NTBweDtcclxuICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG59XHJcblxyXG4uZmFsbGJhY2stYnV0dG9ue1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA2NTBweDtcclxuICBoZWlnaHQ6IDV2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ1ZDNjO1xyXG4gIGJvcmRlcjogc29saWQgNXB4ICNlZWQzYjc7XHJcbiAgY29sb3I6ICNlZWQzYjc7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgLW1vei10ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uZmFsbGJhY2stYnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWQzYjc7XHJcbiAgYm9yZGVyOiBzb2xpZCA1cHggI2RkNWQzYztcclxuICBjb2xvcjogI2RkNWQzYztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbiIsIi5tYWluLTQwNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjMwMzAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5wYWdlLTQwNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnRvcC1pbWFnZS00MDQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4NTBweDtcbiAgbWF4LWhlaWdodDogOTB2aDtcbn1cblxuLmZhbGxiYWNrLWJ1dHRvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIGhlaWdodDogNXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ1ZDNjO1xuICBib3JkZXI6IHNvbGlkIDVweCAjZWVkM2I3O1xuICBjb2xvcjogI2VlZDNiNztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLW1vei10ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5mYWxsYmFjay1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVkM2I3O1xuICBib3JkZXI6IHNvbGlkIDVweCAjZGQ1ZDNjO1xuICBjb2xvcjogI2RkNWQzYztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/layout/404/page-not-found.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/layout/404/page-not-found.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PageNotFoundComponent = class PageNotFoundComponent {
    constructor(router, tokenStorage) {
        this.router = router;
        this.tokenStorage = tokenStorage;
    }
    ngOnInit() {
    }
    goToPage() {
        if (this.tokenStorage.getUser() == null) {
            this.router.navigate(['/']);
        }
        else {
            this.router.navigate(['/cpma/dashboard']);
        }
    }
};
PageNotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }
];
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/404/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/modules/layout/404/page-not-found.component.scss")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/modules/layout/footer/footer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/layout/footer/footer.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/layout/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/layout/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/layout/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/modules/layout/header/header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/layout/header/header.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Dropdown user menu */\n#user-image {\n  width: 140px;\n  height: 140px;\n  margin: 13px;\n}\n.dropdown-block {\n  width: 100%;\n  margin-bottom: 5px;\n  float: left;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvaGVhZGVyL0U6XFxTdHVkaWFcXE1hZ2lzdGVya2FcXEFJXFxNR1ItQUlcXHNyY1xcbWFpblxcYW5ndWxhci9zcmNcXGFwcFxcbW9kdWxlc1xcbGF5b3V0XFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBQTtBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUY7QURHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERyb3Bkb3duIHVzZXIgbWVudSAqL1xyXG5cclxuI3VzZXItaW1hZ2V7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgbWFyZ2luOiAxM3B4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tYmxvY2t7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIvKiBEcm9wZG93biB1c2VyIG1lbnUgKi9cbiN1c2VyLWltYWdlIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBtYXJnaW46IDEzcHg7XG59XG5cbi5kcm9wZG93bi1ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/layout/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/layout/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/_api/user.api.service */ "./src/app/_services/_api/user.api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let HeaderComponent = class HeaderComponent {
    constructor(tokenStorage, router, toastr, userService) {
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toastr = toastr;
        this.userService = userService;
    }
    ngOnInit() {
        this.getUser(this.tokenStorage.getUser().id);
    }
    onSignOut() {
        this.tokenStorage.signOut();
        this.router.navigate(['login']);
    }
    getUser(id) {
        this.userService.getUser(id).subscribe(data => {
            this.user = data;
            this.imageURL = 'data:' + this.user.imageModel.type + ';base64,' + this.user.imageModel.pic;
        }, err => {
            this.toastr.error(err.error.message, 'Error!');
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/layout/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/modules/layout/layout.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/layout/layout.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/modules/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/modules/layout/footer/footer.component.ts");
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-nav/side-nav.component */ "./src/app/modules/layout/side-nav/side-nav.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/modules/layout/settings/settings.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _spinners_main_spinner_main_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spinners/main-spinner/main-spinner.component */ "./src/app/modules/layout/spinners/main-spinner/main-spinner.component.ts");
/* harmony import */ var _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./404/page-not-found.component */ "./src/app/modules/layout/404/page-not-found.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map/map.component */ "./src/app/modules/layout/map/map.component.ts");
/* harmony import */ var _spinners_component_spinner_component_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./spinners/component-spinner/component-spinner.component */ "./src/app/modules/layout/spinners/component-spinner/component-spinner.component.ts");












let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
            _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__["SideNavComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
            _spinners_main_spinner_main_spinner_component__WEBPACK_IMPORTED_MODULE_8__["MainSpinnerComponent"],
            _404_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"],
            _spinners_component_spinner_component_spinner_component__WEBPACK_IMPORTED_MODULE_11__["ComponentSpinnerComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
            _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__["SideNavComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
            _spinners_main_spinner_main_spinner_component__WEBPACK_IMPORTED_MODULE_8__["MainSpinnerComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"],
            _spinners_component_spinner_component_spinner_component__WEBPACK_IMPORTED_MODULE_11__["ComponentSpinnerComponent"]
        ]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/modules/layout/map/map.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/layout/map/map.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 500px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvbWFwL0U6XFxTdHVkaWFcXE1hZ2lzdGVya2FcXEFJXFxNR1ItQUlcXHNyY1xcbWFpblxcYW5ndWxhci9zcmNcXGFwcFxcbW9kdWxlc1xcbGF5b3V0XFxtYXBcXG1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xheW91dC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIjbWFwIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/layout/map/map.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/layout/map/map.component.ts ***!
  \*****************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_localisation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/localisation.service */ "./src/app/modules/layout/map/service/localisation.service.ts");



let MapComponent = class MapComponent {
    constructor(localisationService) {
        this.localisationService = localisationService;
        this.lat = 51.9189;
        this.lng = 19.1344;
        this.markers = [];
        this.coordinates = new google.maps.LatLng(this.lat, this.lng);
        this.mapOptions = {
            center: this.coordinates,
            zoom: 8
        };
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.mapInitializer();
        this.localisationService.getMarkers().subscribe(value => {
            this.deleteMarkers();
            if (value.length === 1) {
                this.map.setCenter(new google.maps.LatLng(value[0].lat, value[0].lng));
                this.map.setZoom(17);
            }
            else {
                this.map.setCenter(this.coordinates);
                this.map.setZoom(6);
            }
            this.saveMarkers(value);
            this.setMapOnAll(this.map);
        });
    }
    saveMarkers(markers) {
        markers.forEach(markerInfo => {
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(markerInfo.lat, markerInfo.lng),
                map: this.map,
                title: markerInfo.title
            });
            this.markers.push(marker);
        });
    }
    mapInitializer() {
        this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    }
    setMapOnAll(map) {
        for (let i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
            if (this.markers[i] != null) {
                const infoWindow = new google.maps.InfoWindow({
                    content: this.markers[i].getTitle()
                });
                this.markers[i].addListener('click', () => {
                    infoWindow.open(this.markers[i].getMap(), this.markers[i]);
                });
            }
        }
    }
    clearMarkers() {
        this.setMapOnAll(null);
    }
    deleteMarkers() {
        this.clearMarkers();
        this.markers = [];
    }
};
MapComponent.ctorParameters = () => [
    { type: _service_localisation_service__WEBPACK_IMPORTED_MODULE_2__["LocalisationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapContainer', { static: false })
], MapComponent.prototype, "gmap", void 0);
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.scss */ "./src/app/modules/layout/map/map.component.scss")).default]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/modules/layout/map/service/localisation.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/layout/map/service/localisation.service.ts ***!
  \********************************************************************/
/*! exports provided: LocalisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalisationService", function() { return LocalisationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LocalisationService = class LocalisationService {
    constructor() {
        this.cordinates = [];
        this.markers = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    getMarkers() {
        return this.markers.asObservable();
    }
    addMarker(cordinate) {
        this.cordinates.push(cordinate);
        this.markers.next(this.cordinates);
    }
    clearMarkersList() {
        this.cordinates = [];
        this.markers.next(this.cordinates);
    }
};
LocalisationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocalisationService);



/***/ }),

/***/ "./src/app/modules/layout/settings/settings.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/layout/settings/settings.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/layout/settings/settings.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/layout/settings/settings.component.ts ***!
  \***************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/modules/layout/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/modules/layout/side-nav/side-nav.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/layout/side-nav/side-nav.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/layout/side-nav/side-nav.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/layout/side-nav/side-nav.component.ts ***!
  \***************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SideNavComponent = class SideNavComponent {
    constructor() {
    }
    ngOnInit() {
        $('[data-widget="treeview"]').Treeview('init');
    }
};
SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/side-nav/side-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/modules/layout/side-nav/side-nav.component.scss")).default]
    })
], SideNavComponent);



/***/ }),

/***/ "./src/app/modules/layout/spinners/component-spinner/component-spinner.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/layout/spinners/component-spinner/component-spinner.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-main {\n  height: 100vh;\n  z-index: 99999;\n  width: 100%;\n  text-align: center;\n  line-height: 200px;\n}\n\n.content-inner {\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: 25%;\n}\n\n.sk-chase {\n  width: 80px;\n  height: 80px;\n  -webkit-animation: sk-chase 2.5s infinite linear both;\n          animation: sk-chase 2.5s infinite linear both;\n}\n\n.sk-chase-dot {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-animation: sk-chase-dot 2s infinite ease-in-out both;\n          animation: sk-chase-dot 2s infinite ease-in-out both;\n}\n\n.sk-chase-dot:before {\n  content: \"\";\n  display: block;\n  width: 25%;\n  height: 25%;\n  background-color: #fd7e14;\n  border-radius: 100%;\n  -webkit-animation: sk-chase-dot-before 2s infinite ease-in-out both;\n          animation: sk-chase-dot-before 2s infinite ease-in-out both;\n}\n\n.sk-chase-dot:nth-child(1) {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n\n.sk-chase-dot:nth-child(2) {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n.sk-chase-dot:nth-child(3) {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n\n.sk-chase-dot:nth-child(4) {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n\n.sk-chase-dot:nth-child(5) {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n}\n\n.sk-chase-dot:nth-child(6) {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n}\n\n.sk-chase-dot:nth-child(1):before {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n\n.sk-chase-dot:nth-child(2):before {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n.sk-chase-dot:nth-child(3):before {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n\n.sk-chase-dot:nth-child(4):before {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n\n.sk-chase-dot:nth-child(5):before {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n}\n\n.sk-chase-dot:nth-child(6):before {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n}\n\n@-webkit-keyframes sk-chase {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chase {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes sk-chase-dot {\n  80%, 100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chase-dot {\n  80%, 100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes sk-chase-dot-before {\n  50% {\n    transform: scale(0.4);\n  }\n  100%, 0% {\n    transform: scale(1);\n  }\n}\n\n@keyframes sk-chase-dot-before {\n  50% {\n    transform: scale(0.4);\n  }\n  100%, 0% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvc3Bpbm5lcnMvY29tcG9uZW50LXNwaW5uZXIvRTpcXFN0dWRpYVxcTWFnaXN0ZXJrYVxcQUlcXE1HUi1BSVxcc3JjXFxtYWluXFxhbmd1bGFyL3NyY1xcYXBwXFxtb2R1bGVzXFxsYXlvdXRcXHNwaW5uZXJzXFxjb21wb25lbnQtc3Bpbm5lclxcY29tcG9uZW50LXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L3NwaW5uZXJzL2NvbXBvbmVudC1zcGlubmVyL2NvbXBvbmVudC1zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0FDQ0Y7O0FERUE7RUFBNkIsOEJBQUE7VUFBQSxzQkFBQTtBQ0U3Qjs7QUREQTtFQUE2Qiw0QkFBQTtVQUFBLG9CQUFBO0FDSzdCOztBREpBO0VBQTZCLDhCQUFBO1VBQUEsc0JBQUE7QUNRN0I7O0FEUEE7RUFBNkIsOEJBQUE7VUFBQSxzQkFBQTtBQ1c3Qjs7QURWQTtFQUE2Qiw4QkFBQTtVQUFBLHNCQUFBO0FDYzdCOztBRGJBO0VBQTZCLDhCQUFBO1VBQUEsc0JBQUE7QUNpQjdCOztBRGhCQTtFQUFvQyw4QkFBQTtVQUFBLHNCQUFBO0FDb0JwQzs7QURuQkE7RUFBb0MsNEJBQUE7VUFBQSxvQkFBQTtBQ3VCcEM7O0FEdEJBO0VBQW9DLDhCQUFBO1VBQUEsc0JBQUE7QUMwQnBDOztBRHpCQTtFQUFvQyw4QkFBQTtVQUFBLHNCQUFBO0FDNkJwQzs7QUQ1QkE7RUFBb0MsOEJBQUE7VUFBQSxzQkFBQTtBQ2dDcEM7O0FEL0JBO0VBQW9DLDhCQUFBO1VBQUEsc0JBQUE7QUNtQ3BDOztBRGpDQTtFQUNFO0lBQU8seUJBQUE7RUNxQ1A7QUFDRjs7QUR2Q0E7RUFDRTtJQUFPLHlCQUFBO0VDcUNQO0FBQ0Y7O0FEbkNBO0VBQ0U7SUFBWSx5QkFBQTtFQ3NDWjtBQUNGOztBRHhDQTtFQUNFO0lBQVkseUJBQUE7RUNzQ1o7QUFDRjs7QURwQ0E7RUFDRTtJQUNFLHFCQUFBO0VDc0NGO0VEckNFO0lBQ0UsbUJBQUE7RUN1Q0o7QUFDRjs7QUQ1Q0E7RUFDRTtJQUNFLHFCQUFBO0VDc0NGO0VEckNFO0lBQ0UsbUJBQUE7RUN1Q0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L3NwaW5uZXJzL2NvbXBvbmVudC1zcGlubmVyL2NvbXBvbmVudC1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtbWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1pbm5lcntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tdG9wOiAyNSU7XHJcbn1cclxuXHJcbi5zay1jaGFzZSB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGFuaW1hdGlvbjogc2stY2hhc2UgMi41cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBhbmltYXRpb246IHNrLWNoYXNlLWRvdCAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbn1cclxuXHJcbi5zay1jaGFzZS1kb3Q6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjUlO1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDdlMTQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBhbmltYXRpb246IHNrLWNoYXNlLWRvdC1iZWZvcmUgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG59XHJcblxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgxKSB7IGFuaW1hdGlvbi1kZWxheTogLTEuMXM7IH1cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IC0xLjBzOyB9XHJcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC45czsgfVxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCg0KSB7IGFuaW1hdGlvbi1kZWxheTogLTAuOHM7IH1cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNSkgeyBhbmltYXRpb24tZGVsYXk6IC0wLjdzOyB9XHJcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDYpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC42czsgfVxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgxKTpiZWZvcmUgeyBhbmltYXRpb24tZGVsYXk6IC0xLjFzOyB9XHJcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDIpOmJlZm9yZSB7IGFuaW1hdGlvbi1kZWxheTogLTEuMHM7IH1cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMyk6YmVmb3JlIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC45czsgfVxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCg0KTpiZWZvcmUgeyBhbmltYXRpb24tZGVsYXk6IC0wLjhzOyB9XHJcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDUpOmJlZm9yZSB7IGFuaW1hdGlvbi1kZWxheTogLTAuN3M7IH1cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNik6YmVmb3JlIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC42czsgfVxyXG5cclxuQGtleWZyYW1lcyBzay1jaGFzZSB7XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1jaGFzZS1kb3Qge1xyXG4gIDgwJSwgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1jaGFzZS1kb3QtYmVmb3JlIHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xyXG4gIH0gMTAwJSwgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLmNvbnRlbnQtbWFpbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDk5OTk5O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjAwcHg7XG59XG5cbi5jb250ZW50LWlubmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tdG9wOiAyNSU7XG59XG5cbi5zay1jaGFzZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGFuaW1hdGlvbjogc2stY2hhc2UgMi41cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcbn1cblxuLnNrLWNoYXNlLWRvdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBhbmltYXRpb246IHNrLWNoYXNlLWRvdCAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuXG4uc2stY2hhc2UtZG90OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDI1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkN2UxNDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYW5pbWF0aW9uOiBzay1jaGFzZS1kb3QtYmVmb3JlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbn1cblxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0xcztcbn1cblxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xufVxuXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG59XG5cbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbn1cblxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjZzO1xufVxuXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgxKTpiZWZvcmUge1xuICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xufVxuXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgyKTpiZWZvcmUge1xuICBhbmltYXRpb24tZGVsYXk6IC0xcztcbn1cblxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMyk6YmVmb3JlIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbn1cblxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNCk6YmVmb3JlIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbn1cblxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNSk6YmVmb3JlIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbn1cblxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNik6YmVmb3JlIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcbn1cblxuQGtleWZyYW1lcyBzay1jaGFzZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stY2hhc2UtZG90IHtcbiAgODAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLWNoYXNlLWRvdC1iZWZvcmUge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcbiAgfVxuICAxMDAlLCAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/layout/spinners/component-spinner/component-spinner.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/layout/spinners/component-spinner/component-spinner.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ComponentSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentSpinnerComponent", function() { return ComponentSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComponentSpinnerComponent = class ComponentSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
ComponentSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-component-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./component-spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/spinners/component-spinner/component-spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./component-spinner.component.scss */ "./src/app/modules/layout/spinners/component-spinner/component-spinner.component.scss")).default]
    })
], ComponentSpinnerComponent);



/***/ }),

/***/ "./src/app/modules/layout/spinners/main-spinner/main-spinner.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/layout/spinners/main-spinner/main-spinner.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".all-page {\n  height: 100vh;\n  background-color: white;\n  position: fixed;\n  z-index: 99999;\n  width: 100%;\n  text-align: center;\n}\n\n.sk-folding-cube {\n  margin: auto;\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  transform: rotateZ(45deg);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.sk-folding-cube .sk-cube {\n  float: left;\n  width: 50%;\n  height: 50%;\n  position: relative;\n  transform: scale(1.1);\n}\n\n.sk-folding-cube .sk-cube:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fd7e14;\n  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n  animation: sk-foldCubeAngle 2.4s infinite linear both;\n  transform-origin: 100% 100%;\n}\n\n.sk-folding-cube .sk-cube2 {\n  transform: scale(1.1) rotateZ(90deg);\n}\n\n.sk-folding-cube .sk-cube3 {\n  transform: scale(1.1) rotateZ(180deg);\n}\n\n.sk-folding-cube .sk-cube4 {\n  transform: scale(1.1) rotateZ(270deg);\n}\n\n.sk-folding-cube .sk-cube2:before {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n\n.sk-folding-cube .sk-cube3:before {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n\n.sk-folding-cube .sk-cube4:before {\n  -webkit-animation-delay: 0.9s;\n  animation-delay: 0.9s;\n}\n\n@-webkit-keyframes sk-foldCubeAngle {\n  0%, 10% {\n    transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n  }\n  25%, 75% {\n    transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n  }\n  90%, 100% {\n    transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n  }\n}\n\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    transform: perspective(140px) rotateX(-180deg);\n    opacity: 0;\n  }\n  25%, 75% {\n    transform: perspective(140px) rotateX(0deg);\n    opacity: 1;\n  }\n  90%, 100% {\n    transform: perspective(140px) rotateY(180deg);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvc3Bpbm5lcnMvbWFpbi1zcGlubmVyL0U6XFxTdHVkaWFcXE1hZ2lzdGVya2FcXEFJXFxNR1ItQUlcXHNyY1xcbWFpblxcYW5ndWxhci9zcmNcXGFwcFxcbW9kdWxlc1xcbGF5b3V0XFxzcGlubmVyc1xcbWFpbi1zcGlubmVyXFxtYWluLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L3NwaW5uZXJzL21haW4tc3Bpbm5lci9tYWluLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBR0EscUJBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZEQUFBO0VBQ0EscURBQUE7RUFHQSwyQkFBQTtBQ0VGOztBREFBO0VBRUUsb0NBQUE7QUNHRjs7QUREQTtFQUVFLHFDQUFBO0FDSUY7O0FERkE7RUFFRSxxQ0FBQTtBQ0tGOztBREhBO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtBQ01GOztBREpBO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtBQ09GOztBRExBO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtBQ1FGOztBRE5BO0VBQ0U7SUFFRSw4Q0FBQTtJQUNBLFVBQUE7RUNTRjtFRFJFO0lBRUUsMkNBQUE7SUFDQSxVQUFBO0VDVUo7RURUSTtJQUVFLDZDQUFBO0lBQ0EsVUFBQTtFQ1dOO0FBQ0Y7O0FEUkE7RUFDRTtJQUVFLDhDQUFBO0lBQ0EsVUFBQTtFQ1VGO0VEVEU7SUFFRSwyQ0FBQTtJQUNBLFVBQUE7RUNXSjtFRFZJO0lBRUUsNkNBQUE7SUFDQSxVQUFBO0VDWU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L3NwaW5uZXJzL21haW4tc3Bpbm5lci9tYWluLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsLXBhZ2V7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2stZm9sZGluZy1jdWJlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkN2UxNDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2stZm9sZEN1YmVBbmdsZSAyLjRzIGluZmluaXRlIGxpbmVhciBib3RoO1xyXG4gIGFuaW1hdGlvbjogc2stZm9sZEN1YmVBbmdsZSAyLjRzIGluZmluaXRlIGxpbmVhciBib3RoO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xyXG59XHJcbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmUyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDkwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWig5MGRlZyk7XHJcbn1cclxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTMge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooMTgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigxODBkZWcpO1xyXG59XHJcbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmU0IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVaKDI3MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooMjcwZGVnKTtcclxufVxyXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlMjpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcclxufVxyXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlMzpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxufVxyXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlNDpiZWZvcmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC45cztcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stZm9sZEN1YmVBbmdsZSB7XHJcbiAgMCUsIDEwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9IDI1JSwgNzUlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfSA5MCUsIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stZm9sZEN1YmVBbmdsZSB7XHJcbiAgMCUsIDEwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9IDI1JSwgNzUlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfSA5MCUsIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbn1cclxuIiwiLmFsbC1wYWdlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTk7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zay1mb2xkaW5nLWN1YmUge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDdlMTQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1mb2xkQ3ViZUFuZ2xlIDIuNHMgaW5maW5pdGUgbGluZWFyIGJvdGg7XG4gIGFuaW1hdGlvbjogc2stZm9sZEN1YmVBbmdsZSAyLjRzIGluZmluaXRlIGxpbmVhciBib3RoO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xufVxuXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooOTBkZWcpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWig5MGRlZyk7XG59XG5cbi5zay1mb2xkaW5nLWN1YmUgLnNrLWN1YmUzIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigxODBkZWcpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWigxODBkZWcpO1xufVxuXG4uc2stZm9sZGluZy1jdWJlIC5zay1jdWJlNCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooMjcwZGVnKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVooMjcwZGVnKTtcbn1cblxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTI6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cblxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTM6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuLnNrLWZvbGRpbmctY3ViZSAuc2stY3ViZTQ6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC45cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWZvbGRDdWJlQW5nbGUge1xuICAwJSwgMTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoLTE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDI1JSwgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVgoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDkwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWSgxODBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stZm9sZEN1YmVBbmdsZSB7XG4gIDAlLCAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgtMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKC0xODBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMjUlLCA3NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNDBweCkgcm90YXRlWCgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVYKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgOTAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTQwcHgpIHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE0MHB4KSByb3RhdGVZKDE4MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/layout/spinners/main-spinner/main-spinner.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/layout/spinners/main-spinner/main-spinner.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSpinnerComponent", function() { return MainSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainSpinnerComponent = class MainSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/spinners/main-spinner/main-spinner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-spinner.component.scss */ "./src/app/modules/layout/spinners/main-spinner/main-spinner.component.scss")).default]
    })
], MainSpinnerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Studia\Magisterka\AI\MGR-AI\src\main\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map