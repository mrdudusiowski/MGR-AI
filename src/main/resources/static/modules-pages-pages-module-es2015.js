(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pages-pages-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dashboard/dashboard.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dashboard/dashboard.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1 class=\"m-0 text-dark\">Dashboard</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"'../dashboard'\">CPMA</a></li>\n          <li class=\"breadcrumb-item active\">Dashboard</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #loading>\n  <app-component-spinner></app-component-spinner>\n</ng-template>\n<section class=\"content\" *ngIf=\"loadedData; else loading\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-6\">\n        <div class=\"small-box bg-info\">\n          <div class=\"inner\">\n            <h3>{{userCount}}</h3>\n            <p>Users</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-person\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-6\">\n        <div class=\"small-box bg-info\">\n          <div class=\"inner\">\n            <h3>{{deviceCount}}</h3>\n            <p>Devices</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-android-phone-portrait\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-6\">\n        <div class=\"small-box bg-success\">\n          <div class=\"inner\">\n            <h3>{{batteryGood}}</h3>\n            <p>Good Battery</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-battery-full\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-6\">\n        <div class=\"small-box bg-warning\">\n          <div class=\"inner\">\n            <h3>{{batteryMedium}}</h3>\n            <p>Medium Battery</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-battery-half\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-6\">\n        <div class=\"small-box bg-danger\">\n          <div class=\"inner\">\n            <h3>{{batteryLow}}</h3>\n            <p>Low Battery</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-battery-low\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-map></app-map>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/devices/devices.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/devices/devices.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1 class=\"m-0 text-dark\">Devices</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"'../dashboard'\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Devices</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-template #loading>\n  <app-component-spinner></app-component-spinner>\n</ng-template>\n<div style=\"padding: 30px\" class=\"table-responsive\" *ngIf=\"loadedData; else loading\">\n  <table class=\"table table-striped table-hover\">\n    <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Android ID</th>\n      <th scope=\"col\">Manufacturer</th>\n      <th scope=\"col\">Phone model</th>\n      <th scope=\"col\">Product</th>\n      <th scope=\"col\">SDK</th>\n      <th scope=\"col\">Width</th>\n      <th scope=\"col\">Height</th>\n      <th scope=\"col\">Owner</th>\n      <th scope=\"col\">Battery</th>\n      <th scope=\"col\" style=\"text-align: center;\">Localisation</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let device of devices; let i = index\" [attr.id]=\"device.id\">\n      <th scope=\"row\">{{ i + 1 }}</th>\n      <td>{{ device.androidID }}</td>\n      <td>{{ device.manufacturer }}</td>\n      <td>{{ device.phoneModel }}</td>\n      <td>{{ device.product }}</td>\n      <td>{{ device.androidVersion }}</td>\n      <td>{{ device.width }}</td>\n      <td>{{ device.height }}</td>\n      <td>{{ device?.user.name }} {{ device?.user.surname }}</td>\n      <td>{{ device?.battery.batteryLevel }}%</td>\n      <td><button class=\"btn\" (click)=\"openMapModal(device)\"><i class=\"fas fa-map-marked-alt\"></i> Map</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"modal fade\" id=\"mapModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mapModal\">\n  <div class=\"modal-dialog modal-xl\" role=\"document\">\n    <div class=\"modal-content\">\n      <app-map></app-map>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/pages.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/pages.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <app-header></app-header>\n  <app-side-nav></app-side-nav>\n  <div class=\"content-wrapper\">\n    <router-outlet></router-outlet>\n  </div>\n  <app-footer></app-footer>\n  <app-settings></app-settings>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/profile/profile.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/profile/profile.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1 class=\"m-0 text-dark\">Profile</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a [routerLink]=\"'../dashboard'\">Home</a></li>\n          <li class=\"breadcrumb-item active\">Users</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n<div class=\"col-md-10 center-block\">\n\n  <input class=\"hidden-input\" type=\"file\" (change)=\"fileSelected($event)\" #fileInput>\n  <div class=\"container\">\n      <img id=\"user-image\" src=\"{{imageURL}}\">\n    <div class=\"middle\">\n      <div (click)=\"fileInput.click()\" class=\"upload-button\"><i class=\"fa fa-upload\"></i></div>\n    </div>\n  </div>\n\n  <div id=\"fullname\">\n    <h3 class=\"title\">{{user?.name}} {{user?.surname}}</h3>\n    <h6>{{user?.username}}</h6>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 text-center\">\n      <span class=\"title-header\"><i class=\"fa fa-envelope\"></i>: </span><span class=\"text-value\">{{user?.email}}</span>\n    </div>\n    <div class=\"col-md-6\">\n      <span class=\"title-header\"><i class=\"fa fa-phone\"></i>: </span><span class=\"text-value\">{{user?.phone}}</span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n      <a class=\"btn btn-app\">\n        <i (click)=\"openEditModal(user)\" class=\"fas fa-edit\"></i> Edit\n      </a>\n      <a class=\"btn btn-app\">\n        <i (click)=\"openChangePasswordModal(user)\" class=\"fas fa-key\"></i> Password\n      </a>\n    </div>\n  </div>\n</div>\n\n  <div class=\"modal fade\" id=\"editUserModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editUserModal\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit user</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n          <form name=\"editUserForm\" [formGroup]=\"editUserForm\" (ngSubmit)=\"updateUser()\" novalidate>\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" placeholder=\"Name\" [ngClass]=\"submittedEdit && e.name.errors ? 'is-invalid' : ''\"/>\n                  <span *ngIf=\"e.name.errors?.required\" class=\"error invalid-feedback\">Name is required</span>\n                </div>\n                <div class=\"col-md-6\">\n                  <input type=\"text\" class=\"form-control\"  formControlName=\"surname\" name=\"surname\" placeholder=\"Surname\" [ngClass]=\"submittedEdit && e.surname.errors ? 'is-invalid' : ''\"/>\n                  <span *ngIf=\"e.surname.errors?.required\" class=\"error invalid-feedback\">Surname is required</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"username\" readonly name=\"username\" placeholder=\"Username\"/>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fas fa-envelope\"></i></span>\n                </div>\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\" name=\"email\" placeholder=\"E-mail\" [ngClass]=\"submittedEdit && e.email?.errors ? 'is-invalid' : ''\"/>\n                <span *ngIf=\"e.email.errors?.required\" class=\"error invalid-feedback\">E-mail is required</span>\n                <span *ngIf=\"e.email.errors?.email\" class=\"error invalid-feedback\">Invalid E-mail pattern</span>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fas fa-phone\"></i></span>\n                </div>\n                <input type=\"text\" class=\"form-control\" formControlName=\"phone\" name=\"phone\" placeholder=\"Phone\"/>\n              </div>\n              <!-- /.input group -->\n            </div>\n            <div class=\"form-group\">\n              <div class=\"row\" [hidden]=\"true\">\n                <div class=\"col-md-6\" style=\"text-align: center;\">\n                  <div class=\"checkbox icheck-carrot\">\n                    <input type=\"checkbox\" class=\"input-checkbox\" formControlName=\"isAdmin\" id=\"admin\" name=\"admin\">\n                    <label for=\"admin\">ADMIN</label>\n                  </div>\n                </div>\n                <div class=\"col-md-6\" style=\"text-align: center;\">\n                  <div class=\"checkbox icheck-carrot\">\n                    <input type=\"checkbox\" class=\"input-checkbox\" formControlName=\"isMod\" id=\"mod\"  name=\"mod\">\n                    <label for=\"mod\">MOD</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"submit\" class=\"btn btn-outline-success\">Save</button>\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n          </form>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div>\n\n  <div class=\"modal fade\" id=\"passwordChangeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"passwordChangeModal\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Change password</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n          <form name=\"changePasswordForm\" [formGroup]=\"changePasswordForm\" (ngSubmit)=\"changePassword()\" novalidate>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"username\" readonly name=\"username\" placeholder=\"Username\"/>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\" placeholder=\"Password\" [ngClass]=\"submittedPasswordChange && g.password?.errors ? 'is-invalid' : ''\"/>\n              <span *ngIf=\"g.password.errors?.required\" class=\"error invalid-feedback\">Password is required</span>\n              <span *ngIf=\"g.password.errors?.minlength\" class=\"error invalid-feedback\">Password can't be shorter than 6 characters</span>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" name=\"confirmPassword\" placeholder=\"Confirm Password\" [ngClass]=\"submittedPasswordChange && g.confirmPassword?.errors ? 'is-invalid' : ''\"/>\n              <span *ngIf=\"g.confirmPassword.errors?.required\" class=\"error invalid-feedback\">Confirm Password is required</span>\n              <span *ngIf=\"g.confirmPassword.errors?.mustMatch\" class=\"error invalid-feedback\">Passwords didn't match</span>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"submit\" class=\"btn btn-outline-warning\">Change password</button>\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n          </form>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users/users.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users/users.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-header\">\n    <div class=\"container-fluid\">\n      <div class=\"row mb-2\">\n        <div class=\"col-sm-6\">\n          <h1 class=\"m-0 text-dark\">Users</h1>\n        </div>\n        <div class=\"col-sm-6\">\n          <ol class=\"breadcrumb float-sm-right\">\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"'../dashboard'\">Home</a></li>\n            <li class=\"breadcrumb-item active\">Users</li>\n          </ol>\n        </div>\n      </div>\n    </div>\n</div>\n<ng-template #loading>\n  <app-component-spinner></app-component-spinner>\n</ng-template>\n<div style=\"padding: 30px\" class=\"table-responsive\" *ngIf=\"loadedData; else loading\">\n  <div class=\"button-section\">\n    <button class=\"btn\" (click)=\"openAddModal()\"><i class=\"fas fa-plus\"></i> Add user</button>\n    <button class=\"btn\" (click)=\"getReport()\"><i class=\"far fa-file-pdf\"></i> Get report</button>\n  </div>\n  <table class=\"table table-striped table-hover\">\n    <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Username</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Surname</th>\n      <th scope=\"col\">E-Mail</th>\n      <th scope=\"col\">Phone</th>\n      <th scope=\"col\" style=\"text-align: center;\">Roles</th>\n      <th scope=\"col\" style=\"text-align: center;\">Edit</th>\n      <th scope=\"col\" style=\"text-align: center;\">Password</th>\n      <th scope=\"col\" style=\"text-align: center;\">Delete</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let user of users; let i = index\" [attr.id]=\"user.id\"> <!--each row id == id-->\n      <th scope=\"row\">{{ i + 1 }}</th>\n      <td>{{ user.username }}</td>\n      <td>{{ user.name }}</td>\n      <td>{{ user.surname }}</td>\n      <td>{{ user.email }}</td>\n      <td>{{ user.phone }}</td>\n      <td style=\"text-align: center;\"><span *ngFor=\"let role of user.roles\">\n          <i *ngIf=\"role.name == 'ROLE_ADMIN'\" class=\"fas fa-crown\"></i>\n          <i *ngIf=\"role.name == 'ROLE_MODERATOR'\" class=\"fas fa-wrench\"></i>\n        </span>\n      </td>\n      <td style=\"text-align: center;\"><button id=\"edit\" (click)=\"openEditModal(user)\" class=\"btn btn-light\"><i class=\"fas fa-edit\"></i></button></td>\n      <td style=\"text-align: center;\"><button id=\"changePassword\" (click)=\"openChangePasswordModal(user)\" class=\"btn btn-light\"><i class=\"fas fa-key\"></i></button></td>\n      <td style=\"text-align: center;\"><button id=\"remove\" (click)=\"openDeleteModal(user)\" class=\"btn btn-light\"><i class=\"fa fa-trash\"></i></button></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"deleteUserModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModal\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Delete user</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n      <div class=\"modal-body\">\n        Are you sure delete user {{user?.name}} {{user?.surname}}?\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"deleteRow(user.id)\" id=\"delete-button\" class=\"btn btn-outline-danger\">Delete</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"addUserModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addUserModal\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add user</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n      <div class=\"modal-body\">\n        <form name=\"addUserForm\" [formGroup]=\"addUserForm\" (ngSubmit)=\"addUser()\" novalidate>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\" name=\"name\" placeholder=\"Name\" [ngClass]=\"submittedAdd && f.name.errors ? 'is-invalid' : ''\"/>\n                <span *ngIf=\"f.name.errors?.required\" class=\"error invalid-feedback\">Name is required</span>\n               </div>\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" id=\"surname\" formControlName=\"surname\" name=\"surname\" placeholder=\"Surname\" [ngClass]=\"submittedAdd && f.surname.errors ? 'is-invalid' : ''\"/>\n                <span *ngIf=\"f.surname.errors?.required\" class=\"error invalid-feedback\">Surname is required</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" id=\"username\" formControlName=\"username\" name=\"username\" placeholder=\"Username\" [ngClass]=\"submittedAdd && f.username?.errors ? 'is-invalid' : ''\"/>\n            <span *ngIf=\"f.username.errors?.required\" class=\"error invalid-feedback\">Username is required</span>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fas fa-envelope\"></i></span>\n              </div>\n              <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\" name=\"email\" placeholder=\"E-mail\" [ngClass]=\"submittedAdd && f.email?.errors ? 'is-invalid' : ''\"/>\n              <span *ngIf=\"f.email.errors?.required\" class=\"error invalid-feedback\">E-mail is required</span>\n              <span *ngIf=\"f.email.errors?.email\" class=\"error invalid-feedback\">Invalid E-mail pattern</span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fas fa-phone\"></i></span>\n              </div>\n              <input type=\"text\" class=\"form-control\" id=\"phone\" formControlName=\"phone\" name=\"phone\" placeholder=\"Phone\"/>\n            </div>\n            <!-- /.input group -->\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"Password\" [ngClass]=\"submittedAdd && f.password?.errors ? 'is-invalid' : ''\"/>\n            <span *ngIf=\"f.password.errors?.required\" class=\"error invalid-feedback\">Password is required</span>\n            <span *ngIf=\"f.password.errors?.minlength\" class=\"error invalid-feedback\">Password can't be shorter than 6 characters</span>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" formControlName=\"confirmPassword\" name=\"confirmPassword\" placeholder=\"Confirm Password\" [ngClass]=\"submittedAdd && f.confirmPassword?.errors ? 'is-invalid' : ''\"/>\n            <span *ngIf=\"f.confirmPassword.errors?.required\" class=\"error invalid-feedback\">Confirm Password is required</span>\n            <span *ngIf=\"f.confirmPassword.errors?.mustMatch\" class=\"error invalid-feedback\">Passwords didn't match</span>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-6\" style=\"text-align: center;\">\n                <div class=\"checkbox icheck-carrot\">\n                  <input type=\"checkbox\" formControlName=\"isAdmin\" id=\"admin\" name=\"admin\">\n                  <label for=\"admin\">ADMIN</label>\n                </div>\n              </div>\n              <div class=\"col-md-6\" style=\"text-align: center;\">\n                <div class=\"checkbox icheck-carrot\">\n                  <input type=\"checkbox\" formControlName=\"isMod\" id=\"mod\"  name=\"mod\">\n                  <label for=\"mod\">MOD</label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-outline-primary btn-lg btn-block\">Add</button>\n        </form>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div class=\"modal fade\" id=\"editUserModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editUserModal\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit user</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      </div>\n      <div class=\"modal-body\">\n        <form name=\"editUserForm\" [formGroup]=\"editUserForm\" (ngSubmit)=\"updateUser()\" novalidate>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" name=\"name\" placeholder=\"Name\" [ngClass]=\"submittedEdit && e.name.errors ? 'is-invalid' : ''\"/>\n                <span *ngIf=\"e.name.errors?.required\" class=\"error invalid-feedback\">Name is required</span>\n              </div>\n              <div class=\"col-md-6\">\n                <input type=\"text\" class=\"form-control\"  formControlName=\"surname\" name=\"surname\" placeholder=\"Surname\" [ngClass]=\"submittedEdit && e.surname.errors ? 'is-invalid' : ''\"/>\n                <span *ngIf=\"e.surname.errors?.required\" class=\"error invalid-feedback\">Surname is required</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"username\" readonly name=\"username\" placeholder=\"Username\"/>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fas fa-envelope\"></i></span>\n              </div>\n              <input type=\"email\" class=\"form-control\" formControlName=\"email\" name=\"email\" placeholder=\"E-mail\" [ngClass]=\"submittedEdit && e.email?.errors ? 'is-invalid' : ''\"/>\n              <span *ngIf=\"e.email.errors?.required\" class=\"error invalid-feedback\">E-mail is required</span>\n              <span *ngIf=\"e.email.errors?.email\" class=\"error invalid-feedback\">Invalid E-mail pattern</span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"fas fa-phone\"></i></span>\n              </div>\n              <input type=\"text\" class=\"form-control\" formControlName=\"phone\" name=\"phone\" placeholder=\"Phone\"/>\n            </div>\n            <!-- /.input group -->\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-md-6\" style=\"text-align: center;\">\n                <div class=\"checkbox icheck-carrot\">\n                  <input type=\"checkbox\" class=\"input-checkbox\" formControlName=\"isAdmin2\" id=\"admin2\" name=\"admin2\">\n                  <label for=\"admin2\">ADMIN</label>\n                </div>\n              </div>\n              <div class=\"col-md-6\" style=\"text-align: center;\">\n                <div class=\"checkbox icheck-carrot\">\n                  <input type=\"checkbox\" class=\"input-checkbox\" formControlName=\"isMod2\" id=\"mod2\"  name=\"mod2\">\n                  <label for=\"mod2\">MOD</label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"submit\" class=\"btn btn-outline-success\">Save</button>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n        </form>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div>\n\n<div class=\"modal fade\" id=\"passwordChangeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"passwordChangeModal\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Change password</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n          <form name=\"changePasswordForm\" [formGroup]=\"changePasswordForm\" (ngSubmit)=\"changePassword()\" novalidate>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"username\" readonly name=\"username\" placeholder=\"Username\"/>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\" placeholder=\"Password\" [ngClass]=\"submittedPasswordChange && g.password?.errors ? 'is-invalid' : ''\"/>\n              <span *ngIf=\"g.password.errors?.required\" class=\"error invalid-feedback\">Password is required</span>\n              <span *ngIf=\"g.password.errors?.minlength\" class=\"error invalid-feedback\">Password can't be shorter than 6 characters</span>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\" name=\"confirmPassword\" placeholder=\"Confirm Password\" [ngClass]=\"submittedPasswordChange && g.confirmPassword?.errors ? 'is-invalid' : ''\"/>\n              <span *ngIf=\"g.confirmPassword.errors?.required\" class=\"error invalid-feedback\">Confirm Password is required</span>\n              <span *ngIf=\"g.confirmPassword.errors?.mustMatch\" class=\"error invalid-feedback\">Passwords didn't match</span>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"submit\" class=\"btn btn-outline-warning\">Change password</button>\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n          </form>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n");

/***/ }),

/***/ "./src/app/_helpers/must-match.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/must-match.validator.ts ***!
  \**************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/_services/_api/dashboard.api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/_services/_api/dashboard.api.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const API_URL = 'http://localhost:8080/api/dashboard/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let DashboardService = class DashboardService {
    constructor(http) {
        this.http = http;
    }
    getDashboardInfo() {
        return this.http.get(API_URL + 'getData');
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashboardService);



/***/ }),

/***/ "./src/app/_services/_api/device.api.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_services/_api/device.api.service.ts ***!
  \******************************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const API_URL = 'http://localhost:8080/api/device/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let DeviceService = class DeviceService {
    constructor(http) {
        this.http = http;
    }
    getAllDevices() {
        return this.http.get(API_URL + 'getAll');
    }
};
DeviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DeviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DeviceService);



/***/ }),

/***/ "./src/app/_services/_api/upload.api.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_services/_api/upload.api.service.ts ***!
  \******************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const API_URL = 'http://localhost:8080/api/files/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let UploadService = class UploadService {
    constructor(http) {
        this.http = http;
    }
    uploadImage(data, id) {
        return this.http.post(API_URL + 'upload/', data, { params: { id } });
    }
};
UploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UploadService);



/***/ }),

/***/ "./src/app/modules/pages/dashboard/dashboard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/pages/dashboard/dashboard.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pages/dashboard/dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/pages/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_device_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/_api/device.api.service */ "./src/app/_services/_api/device.api.service.ts");
/* harmony import */ var _layout_map_service_localisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/map/service/localisation.service */ "./src/app/modules/layout/map/service/localisation.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_api_dashboard_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/_api/dashboard.api.service */ "./src/app/_services/_api/dashboard.api.service.ts");






let DashboardComponent = class DashboardComponent {
    constructor(deviceService, toastr, localisationService, dashboardService) {
        this.deviceService = deviceService;
        this.toastr = toastr;
        this.localisationService = localisationService;
        this.dashboardService = dashboardService;
        this.userCount = 0;
        this.deviceCount = 0;
        this.batteryGood = 0;
        this.batteryMedium = 0;
        this.batteryLow = 0;
        this.loadedData = false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.localisationService.clearMarkersList();
            this.getDevices();
            this.dashboardService.getDashboardInfo().subscribe(response => {
                this.userCount = response.userCount;
                this.deviceCount = response.deviceCount;
                this.batteryGood = response.batteryGood;
                this.batteryMedium = response.batteryMedium;
                this.batteryLow = response.batteryLow;
                this.loadedData = true;
            }, err => {
                this.toastr.error(err.error.message, 'Error!');
            });
            this.interval = setInterval(() => {
                this.localisationService.clearMarkersList();
                this.getDevices();
                this.refreshDashboardInfo();
            }, 50000);
        });
    }
    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    refreshDashboardInfo() {
        this.dashboardService.getDashboardInfo().subscribe(response => {
            this.userCount = response.userCount;
            this.deviceCount = response.deviceCount;
            this.batteryGood = response.batteryGood;
            this.batteryMedium = response.batteryMedium;
            this.batteryLow = response.batteryLow;
        }, err => {
            this.toastr.error(err.error.message, 'Error!');
        });
    }
    getDevices() {
        this.deviceService.getAllDevices().subscribe(response => {
            response.forEach(device => {
                const title = 'Owner: ' + device.user.name + ' ' + device.user.surname + '<br>'
                    + 'Phone: ' + device.manufacturer + ' ' + device.phoneModel;
                this.localisationService.addMarker({ lat: device.localisation.latitude, lng: device.localisation.longitude, title });
            });
        }, err => {
            this.toastr.error(err.error.message, 'Error!');
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_api_device_api_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _layout_map_service_localisation_service__WEBPACK_IMPORTED_MODULE_3__["LocalisationService"] },
    { type: _services_api_dashboard_api_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dash-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/pages/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/modules/pages/devices/devices.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/pages/devices/devices.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-striped tbody tr:nth-of-type(odd) {\n  background-color: #fd7e14c2 !important;\n}\n\n.table-striped tbody tr:nth-of-type(odd):hover {\n  background-color: rgba(255, 123, 49, 0.66) !important;\n}\n\n.table-striped tbody tr:nth-of-type(2n) > td > .btn-light {\n  background-color: #fa9b4b;\n  border-color: #f58c34;\n}\n\n.table-striped tbody tr:nth-of-type(2n) > td > .btn-light:hover {\n  background-color: #ffbd85;\n}\n\n.btn {\n  background-color: white;\n  margin: 5px;\n  padding: 12px 16px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9kZXZpY2VzL0U6XFxTdHVkaWFcXE1hZ2lzdGVya2FcXEFJXFxNR1ItQUlcXHNyY1xcbWFpblxcYW5ndWxhci9zcmNcXGFwcFxcbW9kdWxlc1xccGFnZXNcXGRldmljZXNcXGRldmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGFnZXMvZGV2aWNlcy9kZXZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7QUNDRjs7QURFQTtFQUNFLHFEQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2RldmljZXMvZGV2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDdlMTRjMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTIzLCA0OSwgMC42NikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUoMm4pID4gdGQgPiAuYnRuLWxpZ2h0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTliNGI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjU4YzM0O1xyXG59XHJcbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKDJuKSA+IHRkID4gLmJ0bi1saWdodDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZDg1O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbiIsIi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ3ZTE0YzIgIWltcG9ydGFudDtcbn1cblxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjMsIDQ5LCAwLjY2KSAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZSgybikgPiB0ZCA+IC5idG4tbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE5YjRiO1xuICBib3JkZXItY29sb3I6ICNmNThjMzQ7XG59XG5cbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKDJuKSA+IHRkID4gLmJ0bi1saWdodDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJkODU7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/pages/devices/devices.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pages/devices/devices.component.ts ***!
  \************************************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages.component */ "./src/app/modules/pages/pages.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_api_device_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/_api/device.api.service */ "./src/app/_services/_api/device.api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_map_service_localisation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/map/service/localisation.service */ "./src/app/modules/layout/map/service/localisation.service.ts");







let DevicesComponent = class DevicesComponent {
    constructor(pagesComponent, toastr, deviceService, activatedRoute, localisationService) {
        this.pagesComponent = pagesComponent;
        this.toastr = toastr;
        this.deviceService = deviceService;
        this.activatedRoute = activatedRoute;
        this.localisationService = localisationService;
        this.loadedData = false;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(value => {
            if (value.devices != null) {
                this.devices = value.devices;
                this.loadedData = true;
            }
        });
        this.interval = setInterval(() => {
            this.refreshDevices();
        }, 50000);
    }
    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    refreshDevices() {
        this.deviceService.getAllDevices().subscribe(response => {
            this.devices = response;
        }, err => {
            this.toastr.error(err.error.message, 'Error!');
        });
    }
    openMapModal(device) {
        const title = 'Owner: ' + device.user.name + ' ' + device.user.surname + '<br>'
            + 'Phone: ' + device.manufacturer + ' ' + device.phoneModel;
        this.localisationService.clearMarkersList();
        this.localisationService.addMarker({ lat: device.localisation.latitude, lng: device.localisation.longitude, title });
        $('#mapModal').modal('show');
    }
};
DevicesComponent.ctorParameters = () => [
    { type: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _services_api_device_api_service__WEBPACK_IMPORTED_MODULE_4__["DeviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _layout_map_service_localisation_service__WEBPACK_IMPORTED_MODULE_6__["LocalisationService"] }
];
DevicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-devices',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./devices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/devices/devices.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./devices.component.scss */ "./src/app/modules/pages/devices/devices.component.scss")).default]
    })
], DevicesComponent);



/***/ }),

/***/ "./src/app/modules/pages/devices/service/get.devices.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pages/devices/service/get.devices.service.ts ***!
  \**********************************************************************/
/*! exports provided: GetDevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDevicesService", function() { return GetDevicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_device_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_services/_api/device.api.service */ "./src/app/_services/_api/device.api.service.ts");



let GetDevicesService = class GetDevicesService {
    constructor(deviceService) {
        this.deviceService = deviceService;
    }
    resolve(route, state) {
        return this.deviceService.getAllDevices();
    }
};
GetDevicesService.ctorParameters = () => [
    { type: _services_api_device_api_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] }
];
GetDevicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetDevicesService);



/***/ }),

/***/ "./src/app/modules/pages/pages-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/pages/pages-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/modules/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.component */ "./src/app/modules/pages/users/users.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/modules/pages/profile/profile.component.ts");
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devices/devices.component */ "./src/app/modules/pages/devices/devices.component.ts");
/* harmony import */ var _users_service_get_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/service/get.users.service */ "./src/app/modules/pages/users/service/get.users.service.ts");
/* harmony import */ var _devices_service_get_devices_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./devices/service/get.devices.service */ "./src/app/modules/pages/devices/service/get.devices.service.ts");










const routes = [{
        path: '', component: _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
            { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], resolve: { users: _users_service_get_users_service__WEBPACK_IMPORTED_MODULE_8__["GetUsersService"] },
                children: [{ path: 'table', component: _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"] }] },
            { path: 'devices', component: _devices_devices_component__WEBPACK_IMPORTED_MODULE_7__["DevicesComponent"], resolve: { devices: _devices_service_get_devices_service__WEBPACK_IMPORTED_MODULE_9__["GetDevicesService"] },
                children: [{ path: 'table', component: _devices_devices_component__WEBPACK_IMPORTED_MODULE_7__["DevicesComponent"] }] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] }
        ]
    }
];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PagesRoutingModule);



/***/ }),

/***/ "./src/app/modules/pages/pages.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/pages/pages.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pages/pages.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/pages/pages.component.ts ***!
  \**************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PagesComponent = class PagesComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        $('body').addClass('hold-transition skin-blue sidebar-mini');
    }
};
PagesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/pages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pages.component.scss */ "./src/app/modules/pages/pages.component.scss")).default]
    })
], PagesComponent);



/***/ }),

/***/ "./src/app/modules/pages/pages.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/pages/pages.module.ts ***!
  \***********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/modules/pages/pages-routing.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.component */ "./src/app/modules/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/modules/layout/layout.module.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users.component */ "./src/app/modules/pages/users/users.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/modules/pages/profile/profile.component.ts");
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./devices/devices.component */ "./src/app/modules/pages/devices/devices.component.ts");











let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], _devices_devices_component__WEBPACK_IMPORTED_MODULE_10__["DevicesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]
    })
], PagesModule);



/***/ }),

/***/ "./src/app/modules/pages/profile/profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/pages/profile/profile.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".h6, h6 {\n  font-size: 0.75rem !important;\n  font-weight: 500;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  line-height: 1.5em;\n  text-transform: uppercase;\n}\n\n.center-block {\n  background-color: #fff;\n  margin-top: 75px;\n  display: block;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n}\n\n#user-image {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  margin-top: -75px;\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  transition: 0.5s ease;\n}\n\n.container {\n  position: relative;\n  width: 50%;\n}\n\n.middle {\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.container:hover #user-image {\n  opacity: 0.3;\n}\n\n.container:hover .middle {\n  opacity: 1;\n}\n\n.upload-button {\n  color: black;\n  font-size: 75px;\n  margin-bottom: 75px;\n}\n\n#fullname {\n  text-align: center;\n  width: 100%;\n}\n\n.title-header {\n  font-size: 20px;\n  font-weight: bold;\n  color: #fd7e14;\n}\n\n.text-value {\n  font-size: 18px;\n}\n\n.title {\n  margin-top: 10px;\n  min-height: 32px;\n  color: #3C4858;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.hidden-input {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9wcm9maWxlL0U6XFxTdHVkaWFcXE1hZ2lzdGVya2FcXEFJXFxNR1ItQUlcXHNyY1xcbWFpblxcYW5ndWxhci9zcmNcXGFwcFxcbW9kdWxlc1xccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaDYsIGg2IHtcclxuICBmb250LXNpemU6IC43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90byxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNlbnRlci1ibG9ja3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN1c2VyLWltYWdle1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtNzVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubWlkZGxlIHtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpob3ZlciAjdXNlci1pbWFnZSB7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4uY29udGFpbmVyOmhvdmVyIC5taWRkbGUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi51cGxvYWQtYnV0dG9uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiA3NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDc1cHg7XHJcbn1cclxuXHJcbiNmdWxsbmFtZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGUtaGVhZGVye1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2ZkN2UxNDtcclxufVxyXG5cclxuLnRleHQtdmFsdWV7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWluLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogIzNDNDg1ODtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5oaWRkZW4taW5wdXR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCIuaDYsIGg2IHtcbiAgZm9udC1zaXplOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNlbnRlci1ibG9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3VzZXItaW1hZ2Uge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTc1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5taWRkbGUge1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyOmhvdmVyICN1c2VyLWltYWdlIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5taWRkbGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4udXBsb2FkLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiA3NXB4O1xuICBtYXJnaW4tYm90dG9tOiA3NXB4O1xufVxuXG4jZnVsbG5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZDdlMTQ7XG59XG5cbi50ZXh0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogIzNDNDg1ODtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhpZGRlbi1pbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/pages/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pages/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages.component */ "./src/app/modules/pages/pages.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/_api/user.api.service */ "./src/app/_services/_api/user.api.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");
/* harmony import */ var _services_api_upload_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_services/_api/upload.api.service */ "./src/app/_services/_api/upload.api.service.ts");









let ProfileComponent = class ProfileComponent {
    constructor(pagesComponent, toastr, tokenStorage, formBuilder, userService, uploadService) {
        this.pagesComponent = pagesComponent;
        this.toastr = toastr;
        this.tokenStorage = tokenStorage;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.uploadService = uploadService;
        this.submittedEdit = false;
        this.submittedPasswordChange = false;
    }
    get e() { return this.editUserForm.controls; }
    get g() { return this.changePasswordForm.controls; }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.runFormBuilders();
            yield this.getUser(this.tokenStorage.getUser().id);
        });
    }
    openEditModal(user) {
        this.editUserForm.get('name').setValue(user.name);
        this.editUserForm.get('surname').setValue(user.surname);
        this.editUserForm.get('username').setValue(user.username);
        this.editUserForm.get('email').setValue(user.email);
        this.editUserForm.get('phone').setValue(user.phone);
        this.editUserForm.get('isMod').setValue(false);
        this.editUserForm.get('isAdmin').setValue(false);
        for (const role of user.roles) {
            if (role.name === 'ROLE_ADMIN') {
                this.editUserForm.get('isAdmin').setValue(true);
            }
            if (role.name === 'ROLE_MODERATOR') {
                this.editUserForm.get('isMod').setValue(true);
            }
        }
        $('#editUserModal').modal('show');
    }
    updateUser() {
        this.submittedEdit = true;
        if (this.editUserForm.invalid) {
            return;
        }
        else {
            this.userService.updateUser(this.editUserForm.value).subscribe(response => {
                this.toastr.success(response.message, 'Success!!');
                $('#editUserModal').modal('hide');
            }, err => {
                this.toastr.error(err.error.message, 'Error!');
            });
        }
        this.editUserForm.reset();
        this.submittedEdit = false;
    }
    /* Change password */
    openChangePasswordModal(user) {
        this.changePasswordForm.get('username').setValue(user.username);
        $('#passwordChangeModal').modal('show');
    }
    changePassword() {
        this.submittedPasswordChange = true;
        if (this.changePasswordForm.invalid) {
            return;
        }
        else {
            this.userService.changePassword(this.changePasswordForm.value).subscribe(response => {
                this.toastr.success(response.message, 'Success!!');
                $('#passwordChangeModal').modal('hide');
            }, err => {
                this.toastr.error(err.error.message, 'Error!');
            });
        }
        this.changePasswordForm.reset();
        this.submittedPasswordChange = false;
    }
    runFormBuilders() {
        this.editUserForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            phone: ['',],
            isAdmin: [,],
            isMod: [,]
        }, {});
        this.changePasswordForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__["MustMatch"])('password', 'confirmPassword')
        });
    }
    getUser(id) {
        this.userService.getUser(id).subscribe(data => {
            this.user = data;
            this.imageURL = 'data:' + this.user.imageModel.type + ';base64,' + this.user.imageModel.pic;
        }, err => {
            this.toastr.error(err.error.message, 'Error!');
        });
    }
    fileSelected(event) {
        if (event.target.files[0].type.includes('image')) {
            this.onUpload(event.target.files[0]);
        }
        else {
            this.toastr.error('This isn\'t image file!', 'Error!');
        }
    }
    onUpload(data) {
        const uploadData = new FormData();
        uploadData.append('myFile', data, data.name);
        this.uploadService.uploadImage(uploadData, this.user.id).subscribe(response => {
            this.toastr.success(response.message, 'Success!!');
            window.location.reload();
        }, err => {
            this.toastr.error(err.error.message, 'Error!');
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_api_upload_api_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/modules/pages/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/modules/pages/users/service/get.users.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/pages/users/service/get.users.service.ts ***!
  \******************************************************************/
/*! exports provided: GetUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsersService", function() { return GetUsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_services/_api/user.api.service */ "./src/app/_services/_api/user.api.service.ts");



let GetUsersService = class GetUsersService {
    constructor(userService) {
        this.userService = userService;
    }
    resolve(route, state) {
        return this.userService.getAllUsers();
    }
};
GetUsersService.ctorParameters = () => [
    { type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
GetUsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GetUsersService);



/***/ }),

/***/ "./src/app/modules/pages/users/users.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/pages/users/users.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-striped tbody tr:nth-of-type(odd) {\n  background-color: #fd7e14c2 !important;\n}\n\n.table-striped tbody tr:nth-of-type(odd):hover {\n  background-color: rgba(255, 123, 49, 0.66) !important;\n}\n\n.table-striped tbody tr:nth-of-type(2n) > td > .btn-light {\n  background-color: #fa9b4b;\n  border-color: #f58c34;\n}\n\n.table-striped tbody tr:nth-of-type(2n) > td > .btn-light:hover {\n  background-color: #ffbd85;\n}\n\n.button-section {\n  padding: 30px 30px 30px 0px;\n}\n\n.button-section > .btn {\n  background-color: white;\n  margin: 5px;\n  padding: 12px 16px;\n  font-size: 16px;\n}\n\n.button-section > .btn:hover {\n  background-color: #f47d3c;\n}\n\n.modal-footer > #delete-button:hover {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy91c2Vycy9FOlxcU3R1ZGlhXFxNYWdpc3RlcmthXFxBSVxcTUdSLUFJXFxzcmNcXG1haW5cXGFuZ3VsYXIvc3JjXFxhcHBcXG1vZHVsZXNcXHBhZ2VzXFx1c2Vyc1xcdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGFnZXMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtBQ0NGOztBREVBO0VBQ0UscURBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQUE7RUFDRSwyQkFBQTtBQ0dGOztBREFBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQUE7RUFDRSx5QkFBQTtBQ0dGOztBREFBO0VBQ0UscUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ3ZTE0YzIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyMywgNDksIDAuNjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKDJuKSA+IHRkID4gLmJ0bi1saWdodHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE5YjRiO1xyXG4gIGJvcmRlci1jb2xvcjogI2Y1OGMzNDtcclxufVxyXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZSgybikgPiB0ZCA+IC5idG4tbGlnaHQ6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmQ4NTtcclxufVxyXG4uYnV0dG9uLXNlY3Rpb257XHJcbiAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXNlY3Rpb24gPiAuYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXNlY3Rpb24gPiAuYnRuOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDdkM2M7XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIgPiAjZGVsZXRlLWJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuIiwiLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDdlMTRjMiAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyMywgNDksIDAuNjYpICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKDJuKSA+IHRkID4gLmJ0bi1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTliNGI7XG4gIGJvcmRlci1jb2xvcjogI2Y1OGMzNDtcbn1cblxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUoMm4pID4gdGQgPiAuYnRuLWxpZ2h0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmQ4NTtcbn1cblxuLmJ1dHRvbi1zZWN0aW9uIHtcbiAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMHB4O1xufVxuXG4uYnV0dG9uLXNlY3Rpb24gPiAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmJ1dHRvbi1zZWN0aW9uID4gLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDdkM2M7XG59XG5cbi5tb2RhbC1mb290ZXIgPiAjZGVsZXRlLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pages/users/users.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/pages/users/users.component.ts ***!
  \********************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages.component */ "./src/app/modules/pages/pages.component.ts");
/* harmony import */ var _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/_api/user.api.service */ "./src/app/_services/_api/user.api.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_helpers/must-match.validator */ "./src/app/_helpers/must-match.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let UsersComponent = class UsersComponent {
    constructor(pagesComponent, toastr, userService, formBuilder, activatedRoute) {
        this.pagesComponent = pagesComponent;
        this.toastr = toastr;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.submittedAdd = false;
        this.submittedEdit = false;
        this.submittedPasswordChange = false;
        this.loadedData = false;
    }
    get f() { return this.addUserForm.controls; }
    get e() { return this.editUserForm.controls; }
    get g() { return this.changePasswordForm.controls; }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.activatedRoute.data.subscribe(value => {
                if (value.users != null) {
                    this.users = value.users;
                    this.loadedData = true;
                }
            });
            this.runFormBuilders();
            this.interval = setInterval(() => {
                this.refreshUsers();
            }, 50000);
        });
    }
    ngOnDestroy() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    /* Add user */
    openAddModal() {
        this.addUserForm.get('name').setValue('');
        this.addUserForm.get('surname').setValue('');
        this.addUserForm.get('username').setValue('');
        this.addUserForm.get('email').setValue('');
        this.addUserForm.get('phone').setValue('');
        this.addUserForm.get('isMod').setValue(false);
        this.addUserForm.get('isAdmin').setValue(false);
        $('#addUserModal').modal('show');
    }
    addUser() {
        this.submittedAdd = true;
        if (this.addUserForm.invalid) {
            return;
        }
        else {
            this.userService.addUser(this.addUserForm.value).subscribe(response => {
                this.toastr.success(response.message, 'Success!!');
                this.refreshUsers();
                $('#addUserModal').modal('hide');
            }, err => {
                this.toastr.error(err.error.message, 'Error!');
            });
        }
        this.addUserForm.reset();
        this.submittedAdd = false;
    }
    /* Update user */
    openEditModal(user) {
        this.editUserForm.get('name').setValue(user.name);
        this.editUserForm.get('surname').setValue(user.surname);
        this.editUserForm.get('username').setValue(user.username);
        this.editUserForm.get('email').setValue(user.email);
        this.editUserForm.get('phone').setValue(user.phone);
        this.editUserForm.get('isMod2').setValue(false);
        this.editUserForm.get('isAdmin2').setValue(false);
        for (const role of user.roles) {
            if (role.name === 'ROLE_ADMIN') {
                this.editUserForm.get('isAdmin2').setValue(true);
            }
            if (role.name === 'ROLE_MODERATOR') {
                this.editUserForm.get('isMod2').setValue(true);
            }
        }
        $('#editUserModal').modal('show');
    }
    updateUser() {
        this.submittedEdit = true;
        if (this.editUserForm.invalid) {
            return;
        }
        else {
            this.userService.updateUser(this.editUserForm.value).subscribe(response => {
                this.toastr.success(response.message, 'Success!!');
                this.refreshUsers();
                $('#editUserModal').modal('hide');
            }, err => {
                this.toastr.error(err.error.message, 'Error!');
            });
        }
        this.editUserForm.reset();
        this.submittedEdit = false;
    }
    /* Change password */
    openChangePasswordModal(user) {
        this.changePasswordForm.get('username').setValue(user.username);
        $('#passwordChangeModal').modal('show');
    }
    changePassword() {
        this.submittedPasswordChange = true;
        if (this.changePasswordForm.invalid) {
            return;
        }
        else {
            this.userService.changePassword(this.changePasswordForm.value).subscribe(response => {
                this.toastr.success(response.message, 'Success!!');
                this.refreshUsers();
                $('#passwordChangeModal').modal('hide');
            }, err => {
                this.toastr.error(err.error.message, 'Error!');
            });
        }
        this.changePasswordForm.reset();
        this.submittedPasswordChange = false;
    }
    /* Delete user */
    openDeleteModal(user) {
        this.user = user;
        $('#deleteUserModal').modal('show');
    }
    deleteRow(id) {
        this.userService.deleteUser(id).subscribe((response) => {
            this.toastr.success(response.message, 'Success!!');
            this.refreshUsers();
            $('#deleteUserModal').modal('hide');
        }, err => { this.toastr.error(err.error.message, 'Error!'); });
    }
    /* Download PDF report */
    getReport() {
        const mediaType = 'application/pdf';
        this.userService.getReport().subscribe((response) => {
            const blob = new Blob([response], { type: mediaType });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, 'user-report.pdf');
        }, err => { this.toastr.error(err.error.message, 'Error!'); });
    }
    /* Download User Data */
    refreshUsers() {
        this.userService.getAllUsers().subscribe(response => {
            this.users = response;
        }, err => {
            this.toastr.error(err.error.message, 'Error!');
        });
    }
    /* Run form builders */
    runFormBuilders() {
        this.addUserForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            phone: ['',],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            isAdmin: [,],
            isMod: [,]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__["MustMatch"])('password', 'confirmPassword')
        });
        this.editUserForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]],
            phone: ['',],
            isAdmin2: [,],
            isMod2: [,]
        }, {});
        this.changePasswordForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        }, {
            validator: Object(_helpers_must_match_validator__WEBPACK_IMPORTED_MODULE_7__["MustMatch"])('password', 'confirmPassword')
        });
    }
};
UsersComponent.ctorParameters = () => [
    { type: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _services_api_user_api_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.scss */ "./src/app/modules/pages/users/users.component.scss")).default]
    })
], UsersComponent);



/***/ })

}]);
//# sourceMappingURL=modules-pages-pages-module-es2015.js.map