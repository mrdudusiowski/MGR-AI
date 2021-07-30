function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth/auth.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth/auth.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-page\">\r\n    <div class=\"col-lg-4 col-md-4 col-sm-12 login-page-block\">\r\n      <div class=\"vertical-center\">\r\n        <div class=\"container\">\r\n          <div class=\"text-center\" id=\"login-logo\">\r\n            <img style=\"width: 100px\" src=\"/assets/img/logo.png\">\r\n          </div>\r\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\"  #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n              <input type=\"login\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"{{'Global.Login' | translate}}\" [(ngModel)]=\"form.username\" required #username=\"ngModel\" [ngClass]=\"f.submitted && username?.invalid ? 'is-invalid' : ''\"/>\r\n              <span *ngIf=\"f.submitted && username.invalid\" class=\"error invalid-feedback\">{{'Global.LoginIsRequired' | translate}}</span>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"{{'Global.Password' | translate}}\" [(ngModel)]=\"form.password\" required #password=\"ngModel\" [ngClass]=\"f.submitted && password?.invalid ? 'is-invalid' : ''\"/>\r\n              <span *ngIf=\"password.errors?.required\" class=\"error invalid-feedback\">{{'Global.PasswordIsRequired' | translate}}</span>\r\n              <span *ngIf=\"password.errors?.minlength\" class=\"error invalid-feedback\">{{'Global.PasswordToShort' | translate}}</span>\r\n            </div>\r\n            <button class=\"btn btn-secondary btn-lg btn-block\">{{'LoginPage.LoginButton' | translate}}</button>\r\n         </form>\r\n          <div id=\"login-copyrights\">©{{currentYear}} Patryk Duduś</div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-md-8 login-page-block\" id=\"login-right-panel\"></div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/register/register.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/register/register.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"register-box\">\n  <div class=\"register-logo\">\n    <a href=\"../../index2.html\"><b>Admin</b>LTE</a>\n  </div>\n\n  <div class=\"register-box-body\">\n    <p class=\"login-box-msg\">Register a new membership</p>\n\n    <form action=\"../../index.html\" method=\"post\">\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"Full name\" type=\"text\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n      </div>\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"Retype password\" type=\"password\">\n        <span class=\"glyphicon glyphicon-log-in form-control-feedback\"></span>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <div class=\"checkbox icheck\">\n            <label>\n              <input type=\"checkbox\"> I agree to the <a href=\"#\">terms</a>\n            </label>\n          </div>\n        </div>\n        <!-- /.col -->\n        <div class=\"col-xs-4\">\n          <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Register</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n\n    <div class=\"social-auth-links text-center\">\n      <p>- OR -</p>\n      <a class=\"btn btn-block btn-social btn-facebook btn-flat\" href=\"#\"><i class=\"fa fa-facebook\"></i> Sign up using\n        Facebook</a>\n      <a class=\"btn btn-block btn-social btn-google btn-flat\" href=\"#\"><i class=\"fa fa-google-plus\"></i> Sign up using\n        Google+</a>\n    </div>\n\n    <a [routerLink]=\"'/login/'\" class=\"text-center\">I already have a membership</a>\n  </div>\n  <!-- /.form-box -->\n</div>\n<!-- /.register-box -->\n";
    /***/
  },

  /***/
  "./src/app/_services/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcApp_servicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AUTH_API = 'http://localhost:8080/api/auth/';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(credentials) {
          return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
          }, httpOptions);
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
          }, httpOptions);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/modules/auth/auth-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/auth/auth-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppModulesAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/modules/auth/auth/auth.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/modules/auth/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/modules/auth/register/register.component.ts");

    var routes = [{
      path: '',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
      children: [{
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
      }]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/auth/auth.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/auth/auth.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppModulesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/modules/auth/auth-routing.module.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/modules/auth/auth/auth.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/modules/auth/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/modules/auth/register/register.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/modules/auth/auth/auth.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/modules/auth/auth/auth.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthAuthAuthComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/auth/auth/auth.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/auth/auth/auth.component.ts ***!
    \*****************************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppModulesAuthAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent() {
        _classCallCheck(this, AuthComponent);
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthComponent;
    }();

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/auth/auth.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.scss */
      "./src/app/modules/auth/auth/auth.component.scss"))["default"]]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/modules/auth/login/login.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/modules/auth/login/login.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/auth/login/login.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/auth/login/login.component.ts ***!
    \*******************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppModulesAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../_services/auth.service */
    "./src/app/_services/auth.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../_services/token-storage.service */
    "./src/app/_services/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, tokenStorage, router, toastr) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.toastr = toastr;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.currentYear = new Date().getFullYear();
      }

      _createClass(LoginComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.authService.login(this.form).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);

            _this.tokenStorage.saveUser(data);

            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getUser().roles;

            _this.router.navigate(['cpma/dashboard']);
          }, function (err) {
            _this.toastr.error(err.error.message, 'Error!');

            _this.isLoginFailed = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          $('body').addClass('hold-transition login-page');

          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          $('body').removeClass('hold-transition login-page');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/modules/auth/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/modules/auth/register/register.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/modules/auth/register/register.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/auth/register/register.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/auth/register/register.component.ts ***!
    \*************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppModulesAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $('body').addClass('hold-transition login-page');
          $(function () {
            $('input').iCheck({
              checkboxClass: 'icheckbox_square-blue',
              radioClass: 'iradio_square-blue',
              increaseArea: '20%'
              /* optional */

            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          $('body').removeClass('hold-transition login-page');
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/modules/auth/register/register.component.scss"))["default"]]
    })], RegisterComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-auth-auth-module-es5.js.map