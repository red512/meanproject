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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics-page/analytics-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/analytics-page/analytics-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>analytics-page works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories-page/categories-form/categories-form.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories-page/categories-form/categories-form.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title\">\n  <h4>\n      <a routerLink=\"/categories\">Categories</a>\n      <i class=\"material-icons\">keyboard_arrow_right</i>\n      {{isNew ? 'Add': 'Edit'}} Category\n  </h4>\n  <span>\n      <button\n      *ngIf =\"!isNew\"\n      class=\"btn btn-small red\"\n      (click)=\"deleteCategory()\">\n        <i class=\"material-icons\">delete</i>\n      </button\n      >\n    </span>\n</div>\n\n<div class=\"row\">\n  <form class=\"col s12 l6\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"input-field\">\n          <input\n          formControlName=\"name\"\n          id=\"name\"\n          type=\"text\"\n          [ngClass]=\"{'invalid': form.get('name').invalid && form.get('name').touched}\">\n          <label for=\"name\">Name</label>\n          <span\n          class=\"helper-text red-text\"\n          *ngIf=\"form.get('name').invalid && form.get('name').touched\">\n          <span *ngIf=\"form.get('name').errors['required']\">\n            Field name cannot be empty\n          </span>\n          </span>\n      </div>\n\n      <div>\n        <input type=\"file\"\n         class=\"dn\"\n         (change) = \"onFileUpload($event)\"\n         #input\n        >\n          <button\n          (click)=\"triggerClick()\"\n          [disabled] = \"form.disabled\"\n          type=\"button\"\n          class=\"waves-effect waves-light btn orange lighten-2 mb2\">\n              <i class=\"material-icons left\">backup</i>\n              Load Image\n          </button>\n      </div>\n\n      <div>\n          <button\n          type=\"submit\"\n          [disabled]=\"form.invalid || form.disabled\"\n          class=\"waves-effect waves-light btn\">\n              Save\n          </button>\n      </div>\n  </form>\n\n  <div class=\"col s12 l4 center\">\n      <img\n        class=\"responsive-img h200\"\n        [src]=\"imagePreview\"\n        *ngIf=\"imagePreview\">\n  </div>\n</div>\n\n<app-positions-form\n*ngIf=\"category?._id\"\n[categoryId] = \"category._id\">\n\n\n</app-positions-form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories-page/categories-form/positions-form/positions-form.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories-page/categories-form/positions-form/positions-form.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col s12\">\n    <div class=\"page-subtitle\">\n      <h4>Positions:</h4>\n      <button\n        class=\"waves-effect waves-light btn grey darken-1 btn-small\"\n        (click)=\"onAddPosition()\"\n      >\n        App Position\n      </button>\n    </div>\n\n    <div *ngIf=\"!loading; else loader\">\n      <div class=\"collection\" *ngIf=\"positions.length !== 0; else empty\">\n        <a\n          *ngFor=\"let position of positions\"\n          class=\"collection-item collection-item-icon\"\n          (click)=\"onSelectPosition(position)\"\n        >\n          <span>\n              {{position.name}} <strong>{{position.cost}} $</strong>\n          </span>\n          <span>\n              <i class=\"material-icons\" (click)=\"onDeletePosition($event, position)\">delete</i>\n          </span>\n        </a>\n      </div>\n      <ng-template #empty>\n        <div class=\"center\">No categories in this position</div>\n      </ng-template>\n    </div>\n    <ng-template #loader>\n      <app-loader></app-loader>\n    </ng-template>\n  </div>\n</div>\n\n\n<form [formGroup] = \"form\" (ngSubmit)=\"onSubmit()\">\n  <div  class=\"modal\" #modal>\n    <div class=\"modal-content\">\n        <h4 class=\"mb1\">Add Position</h4>\n\n        <div class=\"input-field\">\n            <input\n            formControlName=\"name\"\n            id=\"pos-name\"\n            type=\"text\"\n            [ngClass]=\"{'invalid': form.get('name').invalid && form.get('name').touched}\"\n\n            >\n            <label for=\"pos-name\">name</label>\n            <span\n            *ngIf=\"form.get('name').invalid && form.get('name').touched\"\n            class=\"helper-text red-text\">\n            Name field can't be empty\n            </span>\n        </div>\n\n        <div class=\"input-field\">\n            <input\n            formControlName=\"cost\"\n            id=\"pos-cost\"\n            type=\"number\"\n            min=\"1\"\n            [ngClass]=\"{'invalid': form.get('cost').invalid && form.get('cost').touched}\"\n            >\n            <label for=\"pos-cost\">Price</label>\n\n            <span\n            *ngIf=\"form.get('cost').invalid && form.get('cost').touched\"\n            class=\"helper-text red-text\">\n            Cost field can't be empty\n            </span>\n        </div>\n\n    </div>\n    <div class=\"modal-footer\">\n      <button\n        type=\"button\"\n        (click)=\"onCancel()\"\n        class=\"modal-action waves-effect waves-black btn-flat\"\n        [disabled]='form.invalid || form.disabled'>\n        Cancel\n      </button>\n\n      <button\n        class=\"modal-action btn waves-effect\"\n        type=\"submit\"\n        [disabled]='form.invalid || form.disabled'>\n        Save\n      </button>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories-page/categories-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories-page/categories-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title\">\n  <h4>Categories</h4>\n  <button\n  class=\"waves-effect waves-light btn grey darken-1\"\n  routerLink=\"/categories/new\">\n  Add category\n</button>\n</div>\n\n<div class=\"row\"\n*ngIf=\"categories$ | async as categories;else loader\"\n>\n  <div class=\"col s12\">\n      <div class=\"collection\" *ngIf=\"categories.length !== 0; else empty\">\n          <a\n          *ngFor=\"let category of categories\"\n          [routerLink]=\"['/categories', category._id]\"\n           class=\"collection-item\">\n          {{category.name}}</a>\n      </div>\n      <ng-template #empty>\n        <div class=\"center\">You have no categories</div>\n      </ng-template>\n  </div>\n</div>\n\n<ng-template #loader>\n  <app-loader></app-loader>\n</ng-template>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/history-page/history-filter/history-filter.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history-page/history-filter/history-filter.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"filter\">\n  <div class=\"fr\">\n      <div class=\"col order\">\n          <div class=\"input-field inline order-position-input\">\n              <input type=\"number\" id=\"number\" min=\"1\" [(ngModel)]=\"order\">\n              <label for=\"number\">Order number</label>\n          </div>\n      </div>\n      <div class=\"col filter-pickers\">\n          <div class=\"input-field\">\n              <input type=\"text\" #start>\n              <label>Start</label>\n          </div>\n\n          <div class=\"input-field\">\n              <input type=\"text\" #end>\n              <label>End</label>\n          </div>\n      </div>\n  </div>\n\n  <button\n  class=\"btn waves-effect wavers-light btn-small\"\n  (click)=\"submitFilter()\"\n  [disabled]=\"!isValid\"\n  >\n  Use Filter\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/history-page/history-list/history-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history-page/history-list/history-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"highlight mb2\">\n  <thead>\n  <tr>\n      <th>Number</th>\n      <th>Date</th>\n      <th>Time</th>\n      <th>Cost</th>\n      <th></th>\n  </tr>\n  </thead>\n\n  <tbody>\n  <tr *ngFor=\"let order of orders\">\n      <td>{{order.order}}</td>\n      <td>{{order.date | date:'dd.MM.yyyy'}}</td>\n      <td>{{order.date |date:'HH.mm.ss'}}</td>\n      <td>{{computePrice(order)}} $</td>\n      <td>\n          <button class=\"btn btn-small grey darken-1\" (click)=\"selectOrder(order)\">\n              <i class=\"material-icons\">open_in_new</i>\n          </button>\n      </td>\n  </tr>\n\n  </tbody>\n</table>\n\n<div class=\"modal modal-fixed-footer\" #modal>\n  <div class=\"modal-content\" *ngIf=\"selectedOrder\">\n      <h4 class=\"mb1\">Order number {{selectedOrder.order}}</h4>\n      <table class=\"highlight\">\n          <thead>\n          <tr>\n              <th>Name</th>\n              <th>Amount</th>\n              <th>Cost</th>\n          </tr>\n          </thead>\n\n          <tbody>\n          <tr *ngFor=\"let item of selectedOrder.list\">\n              <td>{{item.name}}</td>\n              <td>{{item.quantity}}</td>\n              <td>{{item.cost}}</td>\n          </tr>\n          </tbody>\n      </table>\n      <div class=\"order-summary\">\n          <p>Total cost <strong>{{computePrice(selectedOrder)}} $.</strong></p>\n      </div>\n  </div>\n  <div class=\"modal-footer\" (click)=\"closeModal()\">\n      <button class=\"modal-action waves-effect waves-black btn-flat\">Close</button>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/history-page/history-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history-page/history-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title\">\n  <h4>Orders History</h4>\n  <button\n    (click)=\"isFilterVisible = !isFilterVisible\"\n    class=\"btn btn-small\"\n    [ngClass]=\"{\n      'active' : isFilterVisible,\n      'red' : isFiltered()\n    }\"\n    data-position=\"left\"\n    #tooltip\n  >\n    <i class=\"material-icons\">filter_list</i>\n  </button>\n</div>\n\n<app-history-filter\n  *ngIf=\"isFilterVisible\"\n  (onFilter)=\"applyFilter($event)\"\n></app-history-filter>\n\n<div *ngIf=\"!reloading; else reloadingBlock\">\n  <div *ngIf=\"orders.length > 0; else empty\">\n    <app-history-list [orders]=\"orders\"></app-history-list>\n    <div\n      class=\"center mb2\"\n      *ngIf=\"!noMoreOrders\"\n    >\n      <button\n        class=\"btn waves-effect grey darken-1 btn-small\"\n        (click)=\"loadMore()\"\n        *ngIf=\"!loading; else loader\"\n      >\n        Load More\n      </button>\n      <ng-template #loader>\n        <app-loader></app-loader>\n      </ng-template>\n    </div>\n  </div>\n  <ng-template #empty>\n    <div class=\"center\"><strong> No Orders </strong></div>\n  </ng-template>\n</div>\n\n<ng-template #reloadingBlock>\n  <app-loader></app-loader>\n</ng-template>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n class=\"card\"\n [formGroup]=\"form\"\n (ngSubmit)=\"onSubmit()\"\n>\n  <div class=\"card-content\">\n      <span class=\"card-title\">Login to application</span>\n      <div class=\"input-field\">\n          <input\n          formControlName=\"email\"\n          id=\"email\"\n          type=\"email\"\n          [ngClass]=\"{'invalid':form.get('email').invalid && form.get('email').touched}\"\n          >\n          <label for=\"email\">Email:</label>\n          <span\n          class=\"helper-text red-text\"\n          *ngIf=\"form.get('email').invalid && form.get('email').touched\"\n          >\n            <span *ngIf=\"form.get('email').errors['required']\">Email cannot be empty </span>\n            <span *ngIf=\"form.get('email').errors['email']\">Enter valid email address </span>\n\n\n          </span>\n      </div>\n      <div class=\"input-field\">\n          <input\n          formControlName=\"password\"\n          id=\"password\"\n          type=\"password\"\n          [ngClass]=\"{'invalid':form.get('password').invalid && form.get('password').touched}\"\n          >\n          <label for=\"password\">Password:</label>\n          <span\n          class=\"helper-text red-text\"\n          *ngIf=\"form.get('password').invalid && form.get('password').touched\"\n          >\n            <span *ngIf=\"form.get('password').errors['required']\">Password cannot be empty </span>\n            <span *ngIf=\"form.get('password').errors['minlength'] && form.get('password').errors['minlength']['requiredLength']\"></span>\n            Password must be minimum  {{form.get('password').errors['minlength']['requiredLength']}} symbols.\n            Now the length is {{form.get('password').errors['minlength']['actualLength']}}\n          </span>\n      </div>\n  </div>\n  <div class=\"card-action\">\n      <button type=\"submit\"\n      class=\"modal-action btn waves-effect\"\n      [disabled]=\"form.invalid || form.disabled\"\n      >\n        Login\n      </button>\n  </div>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-page/order-categories/order-categories.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-page/order-categories/order-categories.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"categories$ | async as categories ; else loader\">\n  <div class=\"frow order-row\" *ngIf=\"categories.length !==0; else empty \">\n    <div\n      *ngFor=\"let category of categories\"\n      class=\"card waves-effect pointer\"\n      [routerLink]=\"['/order', category._id]\" >\n      <div class=\"center\">\n        <img\n        [src]=\"category.imageSrc\"\n        class=\"responsive-img order-img\">\n      </div>\n      <div class=\"card-content center p10\">\n        <h5 class=\"m0\">{{category.name}}</h5>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #empty>\n    <div class=\"center\">No Categories</div>\n  </ng-template>\n\n</div>\n\n<ng-template #loader>\n  <app-loader></app-loader>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-page/order-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-page/order-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title\">\n  <h4 *ngIf=\"isRoot\">Order</h4>\n  <h4 *ngIf=\"!isRoot\">\n    <a routerLink=\"/order\">Order</a>\n    <i class=\"material-icons\">keyboard_arrow_right</i>\n    Add product\n  </h4>\n  <button\n  [disabled] =\"order.list.length === 0 \"\n  class=\"waves-effect btn grey darken-1\" (click)=\"open()\">\n    Finish\n  </button>\n</div>\n\n\n<router-outlet></router-outlet>\n\n<div #modal class=\"modal modal-fixed-footer\">\n  <div class=\"modal-content\">\n    <h4 class=\"mb1\">Your Order</h4>\n    <table class=\"highlight\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Amount</th>\n          <th>Price</th>\n          <th></th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let item of order.list\">\n          <td>{{item.name}}</td>\n          <td>{{item.quantity}}</td>\n          <td>{{item.cost}}</td>\n          <td><i class=\"material-icons pointer\" (click)=\"removePosition(item)\">delete</i></td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"order-summary\">\n      <p>Total price <strong>{{order.price}}</strong></p>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button\n    class=\"modal-action waves-effect waves-black btn-flat\"\n    (click)=\"cancel()\"\n    [disabled]=\"pending\"\n\n    >\n      Cancel\n    </button>\n    <button\n    (click)=\"submit()\"\n    class=\"modal-action btn waves-effect\"\n    [disabled]=\"order.list.length === 0 || pending\">\n      Confirm\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-page/order-positions/order-positions.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-page/order-positions/order-positions.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"positions$ | async as positions; else loader\">\n    <table class=\"highlight\" *ngIf=\"positions.length !==0; else empty\">\n      <thead>\n      <tr>\n          <th>Name</th>\n          <th>Price</th>\n          <th>Amount</th>\n          <th></th>\n      </tr>\n      </thead>\n\n      <tbody>\n      <tr *ngFor=\"let position of positions\">\n          <td>{{position.name}}</td>\n          <td>{{position.cost}} usd.</td>\n          <td>\n              <div class=\"input-field inline order-position-input\">\n                  <input type=\"number\" min=\"1\" [(ngModel)]=\"position.quantity\">\n              </div>\n          </td>\n          <td>\n              <button\n              class=\"btn waves-effect wavers-light btn-small\"\n              (click)=\"addToOrder(position)\"\n              [disabled]=\"!position.quantity\">\n              Add\n            </button>\n          </td>\n      </tr>\n      </tbody>\n  </table>\n\n  <ng-template #empty>\n    <div class=\"center\"> No Categories in this position </div>\n  </ng-template>\n\n</div>\n\n<ng-template #loader>\n  <app-loader></app-loader>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/overview-page/overview-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/overview-page/overview-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-title\">\n  <h4>Overview</h4>\n</div>\n\n\n<ul class=\"collapsible\" #dropmenu>\n  <li>\n    <div class=\"collapsible-header\" #dropmenu><i class=\"material-icons\">filter_drama</i>Products</div>\n    <div class=\"collapsible-body\"><span>Lorem ipsum dolor sit amet.</span></div>\n  </li>\n  <li>\n    <div class=\"collapsible-header\"><i class=\"material-icons\">nature_people</i>Solutions</div>\n    <div class=\"collapsible-body\"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti amet aperiam quaerat voluptatum. Pariatur sed ullam impedit aliquam iure.</span></div>\n  </li>\n  <li>\n    <div class=\"collapsible-header\"><i class=\"material-icons\">whatshot</i>Support and Services</div>\n    <div class=\"collapsible-body\"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto a perferendis aut quisquam! Necessitatibus officia dolore ad.</span></div>\n  </li>\n  <li>\n    <div class=\"collapsible-header\"><i class=\"material-icons\">slideshow</i>New Technologies</div>\n    <div class=\"collapsible-body\"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, a. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero assumenda accusamus, vel repellendus exercitationem asperiores quis accusantium, quasi, pariatur odio dolorem explicabo maxime dolor? Eveniet quae quis rerum recusandae esse modi nesciunt inventore, molestiae quod laboriosam ab officiis harum delectus, totam ex voluptatum dolorem vero vitae adipisci! Saepe, earum consequatur!.</span></div>\n  </li>\n\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register-page/register-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-page/register-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form\n class=\"card\"\n [formGroup]=\"form\"\n (ngSubmit)=\"onSubmit ()\"\n>\n  <div class=\"card-content\">\n      <span class=\"card-title\">Login to application</span>\n      <div class=\"input-field\">\n          <input\n          formControlName=\"email\"\n          id=\"email\"\n          type=\"email\"\n          [ngClass]=\"{'invalid':form.get('email').invalid && form.get('email').touched}\"\n          >\n          <label for=\"email\">Email:</label>\n          <span\n          class=\"helper-text red-text\"\n          *ngIf=\"form.get('email').invalid && form.get('email').touched\"\n          >\n            <span *ngIf=\"form.get('email').errors['required']\">Email cannot be empty </span>\n            <span *ngIf=\"form.get('email').errors['email']\">Enter valid email address </span>\n\n\n          </span>\n      </div>\n      <div class=\"input-field\">\n          <input\n          formControlName=\"password\"\n          id=\"password\"\n          type=\"password\"\n          [ngClass]=\"{'invalid':form.get('password').invalid && form.get('password').touched}\"\n          >\n          <label for=\"password\">Password:</label>\n          <span\n          class=\"helper-text red-text\"\n          *ngIf=\"form.get('password').invalid && form.get('password').touched\"\n          >\n            <span *ngIf=\"form.get('password').errors['required']\">Password cannot be empty </span>\n            <span *ngIf=\"form.get('password').errors['minlength'] && form.get('password').errors['minlength']['requiredLength']\"></span>\n            Password must be minimum  {{form.get('password').errors['minlength']['requiredLength']}} symbols.\n            Now the length is {{form.get('password').errors['minlength']['actualLength']}}\n          </span>\n      </div>\n  </div>\n  <div class=\"card-action\">\n      <button type=\"submit\"\n      class=\"modal-action btn waves-effect\"\n      [disabled]=\"form.invalid || form.disabled\"\n      >\n        Login\n      </button>\n  </div>\n</form>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n  <div class=\"col s12 center\">\n\n    <div class=\"preloader-wrapper active\">\n      <div class=\"spinner-layer spinner-red-only\">\n        <div class=\"circle-clipper left\">\n          <div class=\"circle\"></div>\n        </div><div class=\"gap-patch\">\n          <div class=\"circle\"></div>\n        </div><div class=\"circle-clipper right\">\n          <div class=\"circle\"></div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/auth-layout/auth-layout.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/auth-layout/auth-layout.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n  <div class=\"nav-wrapper grey darken-1\">\n      <a routerLink=\"/\"  class=\"brand-logo\">TM1CRM</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/login\">Login</a>\n          </li>\n          <li routerLinkActive=\"active\">\n            <a routerLink=\"/register\">Registration</a>\n          </li>\n      </ul>\n  </div>\n</nav>\n\n<div class=\"auth-block\">\n<router-outlet></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/site-layout/site-layout.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/site-layout/site-layout.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"sidenav sidenav-fixed a-sidenav\">\n  <h4>MICRM</h4>\n  <li\n    class=\"bold\"\n    *ngFor=\"let link of links\"\n    routerLinkActive=\"active\"\n  >\n    <a [routerLink]=\"[link.url]\" class=\"waves-effect waves-orange\">\n      {{link.name}}\n    </a>\n  </li>\n\n\n  <br>\n  <br>\n  <br>\n  <li class=\"center-align\">\n    v0.001\n  </li>\n\n  <li class=\"bold last\">\n    <a href=\"#\" class=\"waves-effect waves-orange\" (click)=\"logout($event)\">Exit</a>\n  </li>\n</ul>\n\n<main class=\"content\">\n  <router-outlet></router-outlet>\n</main>\n\n<div class=\"fixed-action-btn\" #floating>\n  <a class=\"btn-floating btn-large red\">\n    <i class=\"large material-icons\">add</i>\n  </a>\n  <ul>\n    <li>\n      <a class=\"btn-floating green\" routerLink=\"/order\">\n        <i class=\"material-icons\">assignment</i>\n      </a>\n    </li>\n    <li>\n      <a class=\"btn-floating blue\" routerLink=\"/categories/new\">\n        <i class=\"material-icons\">list</i>\n      </a>\n    </li>  </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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


/***/ }),

/***/ "./src/app/analytics-page/analytics-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/analytics-page/analytics-page.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWx5dGljcy1wYWdlL2FuYWx5dGljcy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/analytics-page/analytics-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/analytics-page/analytics-page.component.ts ***!
  \************************************************************/
/*! exports provided: AnalyticsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPageComponent", function() { return AnalyticsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnalyticsPageComponent = class AnalyticsPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
AnalyticsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analytics-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./analytics-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/analytics-page/analytics-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./analytics-page.component.css */ "./src/app/analytics-page/analytics-page.component.css")).default]
    })
], AnalyticsPageComponent);



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
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-page/register-page.component */ "./src/app/register-page/register-page.component.ts");
/* harmony import */ var _shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/classes/auth.guard */ "./src/app/shared/classes/auth.guard.ts");
/* harmony import */ var _overview_page_overview_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overview-page/overview-page.component */ "./src/app/overview-page/overview-page.component.ts");
/* harmony import */ var _analytics_page_analytics_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./analytics-page/analytics-page.component */ "./src/app/analytics-page/analytics-page.component.ts");
/* harmony import */ var _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history-page/history-page.component */ "./src/app/history-page/history-page.component.ts");
/* harmony import */ var _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-page/order-page.component */ "./src/app/order-page/order-page.component.ts");
/* harmony import */ var _categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categories-page/categories-page.component */ "./src/app/categories-page/categories-page.component.ts");
/* harmony import */ var _categories_page_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categories-page/categories-form/categories-form.component */ "./src/app/categories-page/categories-form/categories-form.component.ts");
/* harmony import */ var _order_page_order_categories_order_categories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order-page/order-categories/order-categories.component */ "./src/app/order-page/order-categories/order-categories.component.ts");
/* harmony import */ var _order_page_order_positions_order_positions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order-page/order-positions/order-positions.component */ "./src/app/order-page/order-positions/order-positions.component.ts");
















const routes = [
    {
        path: '', component: _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"], children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] },
            { path: 'register', component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_6__["RegisterPageComponent"] }
        ]
    },
    {
        path: '', component: _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_5__["SiteLayoutComponent"], canActivate: [_shared_classes_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], children: [
            { path: 'overview', component: _overview_page_overview_page_component__WEBPACK_IMPORTED_MODULE_8__["OverviewPageComponent"] },
            { path: 'analytics', component: _analytics_page_analytics_page_component__WEBPACK_IMPORTED_MODULE_9__["AnalyticsPageComponent"] },
            { path: 'history', component: _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_10__["HistoryPageComponent"] },
            { path: 'order', component: _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_11__["OrderPageComponent"], children: [
                    { path: '', component: _order_page_order_categories_order_categories_component__WEBPACK_IMPORTED_MODULE_14__["OrderCategoriesComponent"] },
                    { path: ':id', component: _order_page_order_positions_order_positions_component__WEBPACK_IMPORTED_MODULE_15__["OrderPositionsComponent"] },
                ] },
            { path: 'categories', component: _categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesPageComponent"] },
            { path: 'categories/new', component: _categories_page_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_13__["CategoriesFormComponent"] },
            { path: 'categories/:id', component: _categories_page_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_13__["CategoriesFormComponent"] }
        ]
    }
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
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        const potentialToken = localStorage.getItem('auth-token');
        if (potentialToken !== null) {
            this.auth.setToken(potentialToken);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>',
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
/* harmony import */ var _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layouts/auth-layout/auth-layout.component */ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/layouts/site-layout/site-layout.component */ "./src/app/shared/layouts/site-layout/site-layout.component.ts");
/* harmony import */ var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register-page/register-page.component */ "./src/app/register-page/register-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_classes_token_interceptors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/classes/token.interceptors */ "./src/app/shared/classes/token.interceptors.ts");
/* harmony import */ var _overview_page_overview_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overview-page/overview-page.component */ "./src/app/overview-page/overview-page.component.ts");
/* harmony import */ var _analytics_page_analytics_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./analytics-page/analytics-page.component */ "./src/app/analytics-page/analytics-page.component.ts");
/* harmony import */ var _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./history-page/history-page.component */ "./src/app/history-page/history-page.component.ts");
/* harmony import */ var _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order-page/order-page.component */ "./src/app/order-page/order-page.component.ts");
/* harmony import */ var _categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./categories-page/categories-page.component */ "./src/app/categories-page/categories-page.component.ts");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ "./src/app/shared/components/loader/loader.component.ts");
/* harmony import */ var _categories_page_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./categories-page/categories-form/categories-form.component */ "./src/app/categories-page/categories-form/categories-form.component.ts");
/* harmony import */ var _categories_page_categories_form_positions_form_positions_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./categories-page/categories-form/positions-form/positions-form.component */ "./src/app/categories-page/categories-form/positions-form/positions-form.component.ts");
/* harmony import */ var _order_page_order_categories_order_categories_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./order-page/order-categories/order-categories.component */ "./src/app/order-page/order-categories/order-categories.component.ts");
/* harmony import */ var _order_page_order_positions_order_positions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./order-page/order-positions/order-positions.component */ "./src/app/order-page/order-positions/order-positions.component.ts");
/* harmony import */ var _history_page_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./history-page/history-list/history-list.component */ "./src/app/history-page/history-list/history-list.component.ts");
/* harmony import */ var _history_page_history_filter_history_filter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./history-page/history-filter/history-filter.component */ "./src/app/history-page/history-filter/history-filter.component.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
            _shared_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
            _shared_layouts_site_layout_site_layout_component__WEBPACK_IMPORTED_MODULE_8__["SiteLayoutComponent"],
            _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_9__["RegisterPageComponent"],
            _overview_page_overview_page_component__WEBPACK_IMPORTED_MODULE_12__["OverviewPageComponent"],
            _analytics_page_analytics_page_component__WEBPACK_IMPORTED_MODULE_13__["AnalyticsPageComponent"],
            _history_page_history_page_component__WEBPACK_IMPORTED_MODULE_14__["HistoryPageComponent"],
            _order_page_order_page_component__WEBPACK_IMPORTED_MODULE_15__["OrderPageComponent"],
            _categories_page_categories_page_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesPageComponent"],
            _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__["LoaderComponent"],
            _categories_page_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_18__["CategoriesFormComponent"],
            _categories_page_categories_form_positions_form_positions_form_component__WEBPACK_IMPORTED_MODULE_19__["PositionsFormComponent"],
            _order_page_order_categories_order_categories_component__WEBPACK_IMPORTED_MODULE_20__["OrderCategoriesComponent"],
            _order_page_order_positions_order_positions_component__WEBPACK_IMPORTED_MODULE_21__["OrderPositionsComponent"],
            _history_page_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_22__["HistoryListComponent"],
            _history_page_history_filter_history_filter_component__WEBPACK_IMPORTED_MODULE_23__["HistoryFilterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                multi: true,
                useClass: _shared_classes_token_interceptors__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptor"]
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/categories-page/categories-form/categories-form.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/categories-page/categories-form/categories-form.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dn {\r\n  display: none;\r\n}\r\n\r\n.h200 {\r\n  height: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy1wYWdlL2NhdGVnb3JpZXMtZm9ybS9jYXRlZ29yaWVzLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMtcGFnZS9jYXRlZ29yaWVzLWZvcm0vY2F0ZWdvcmllcy1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oMjAwIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/categories-page/categories-form/categories-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/categories-page/categories-form/categories-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: CategoriesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesFormComponent", function() { return CategoriesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/classes/material.service */ "./src/app/shared/classes/material.service.ts");








let CategoriesFormComponent = class CategoriesFormComponent {
    constructor(route, categoriesService, router) {
        this.route = route;
        this.categoriesService = categoriesService;
        this.router = router;
        this.imagePreview = null;
        this.isNew = true;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        // this.route.params.subscribe((params: Params) => {
        //     if (params['id']) {
        //       // editing form
        //       this.isNew = false;
        //     }
        //   });
        this.form.disable();
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((params) => {
            if (params['id']) {
                this.isNew = false;
                return this.categoriesService.getById(params['id']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        })).subscribe((category) => {
            if (category) {
                this.category = category;
                this.form.patchValue({
                    name: category.name
                });
                this.imagePreview = category.imageSrc;
                src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_7__["MaterialService"].updateTextInputs();
            }
            this.form.enable();
        }, error => src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_7__["MaterialService"].toast(error.error.message));
    }
    triggerClick() {
        this.inputRef.nativeElement.click();
    }
    deleteCategory() {
        const decision = window.confirm('Are you sure you want to delete this category ? ' + this.category.name);
        if (decision) {
            this.categoriesService.delete(this.category._id).subscribe(response => src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_7__["MaterialService"].toast(response.message), error => src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_7__["MaterialService"].toast(error.error.message), () => this.router.navigate(['/categories']));
        }
    }
    onFileUpload(event) {
        const file = event.target.files[0];
        this.image = file;
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    onSubmit() {
        let obs$;
        if (this.isNew) {
            this.form.disable();
            obs$ = this.categoriesService.create(this.form.value.name, this.image);
        }
        else {
            obs$ = this.categoriesService.update(this.category._id, this.form.value.name, this.image);
        }
        obs$.subscribe(category => {
            src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_7__["MaterialService"].toast('Changes Saved Successfully');
            this.form.enable();
        }, error => {
            src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_7__["MaterialService"].toast(error.error.message);
            this.form.enable();
        });
    }
};
CategoriesFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input', { static: false })
], CategoriesFormComponent.prototype, "inputRef", void 0);
CategoriesFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories-page/categories-form/categories-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-form.component.css */ "./src/app/categories-page/categories-form/categories-form.component.css")).default]
    })
], CategoriesFormComponent);



/***/ }),

/***/ "./src/app/categories-page/categories-form/positions-form/positions-form.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/categories-page/categories-form/positions-form/positions-form.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMtcGFnZS9jYXRlZ29yaWVzLWZvcm0vcG9zaXRpb25zLWZvcm0vcG9zaXRpb25zLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/categories-page/categories-form/positions-form/positions-form.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/categories-page/categories-form/positions-form/positions-form.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PositionsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsFormComponent", function() { return PositionsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/position.service */ "./src/app/shared/services/position.service.ts");
/* harmony import */ var src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/classes/material.service */ "./src/app/shared/classes/material.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let PositionsFormComponent = class PositionsFormComponent {
    constructor(positionsService) {
        this.positionsService = positionsService;
        this.positions = [];
        this.loading = false;
        this.positionId = null;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)])
        });
        this.loading = true;
        this.positionsService.fetch(this.categoryId).subscribe(positions => {
            this.positions = positions;
            this.loading = false;
        });
    }
    ngOnDestroy() {
        this.modal.destroy();
    }
    ngAfterViewInit() {
        this.modal = src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].initModal(this.modalRef);
    }
    onSelectPosition(position) {
        this.positionId = position._id;
        this.form.patchValue({
            name: position.name,
            cost: position.cost
        });
        this.modal.open();
        src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].updateTextInputs();
    }
    onAddPosition() {
        this.positionId = null;
        this.form.reset({ name: null, cost: 1 });
        this.modal.open();
        src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].updateTextInputs();
    }
    onDeletePosition(event, position) {
        event.stopPropagation();
        const decision = window.confirm(`Delete Position "${position.name}"?`);
        if (decision) {
            this.positionsService.delete(position).subscribe(response => {
                const idx = this.positions.findIndex(p => p._id === position._id);
                this.positions.splice(idx, 1);
                src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].toast(response.message);
            }, error => src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].toast(error.error.message));
        }
    }
    onCancel() {
        this.modal.close();
    }
    onSubmit() {
        this.form.disable();
        const newPosition = {
            name: this.form.value.name,
            cost: this.form.value.cost,
            category: this.categoryId
        };
        const completed = () => {
            this.modal.close();
            this.form.reset({ name: '', cost: 1 });
            this.form.enable();
        };
        if (this.positionId) {
            newPosition._id = this.positionId;
            this.positionsService.update(newPosition).subscribe(position => {
                const idx = this.positions.findIndex(p => p._id === position._id);
                this.positions[idx] = position;
                src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].toast('Changes are saved');
            }, error => src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].toast(error.error.message), completed);
        }
        else {
            this.positionsService.create(newPosition).subscribe(position => {
                src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].toast('Position Created');
                this.positions.push(position);
            }, error => src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].toast(error.error.message), completed);
        }
    }
};
PositionsFormComponent.ctorParameters = () => [
    { type: src_app_shared_services_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('categoryId')
], PositionsFormComponent.prototype, "categoryId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { static: false })
], PositionsFormComponent.prototype, "modalRef", void 0);
PositionsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-positions-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./positions-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories-page/categories-form/positions-form/positions-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./positions-form.component.css */ "./src/app/categories-page/categories-form/positions-form/positions-form.component.css")).default]
    })
], PositionsFormComponent);



/***/ }),

/***/ "./src/app/categories-page/categories-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/categories-page/categories-page.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMtcGFnZS9jYXRlZ29yaWVzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/categories-page/categories-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/categories-page/categories-page.component.ts ***!
  \**************************************************************/
/*! exports provided: CategoriesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageComponent", function() { return CategoriesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");



let CategoriesPageComponent = class CategoriesPageComponent {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    ngOnInit() {
        this.categories$ = this.categoriesService.fetch();
    }
};
CategoriesPageComponent.ctorParameters = () => [
    { type: _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }
];
CategoriesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categories-page/categories-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories-page.component.css */ "./src/app/categories-page/categories-page.component.css")).default]
    })
], CategoriesPageComponent);



/***/ }),

/***/ "./src/app/history-page/history-filter/history-filter.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/history-page/history-filter/history-filter.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnktcGFnZS9oaXN0b3J5LWZpbHRlci9oaXN0b3J5LWZpbHRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/history-page/history-filter/history-filter.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/history-page/history-filter/history-filter.component.ts ***!
  \*************************************************************************/
/*! exports provided: HistoryFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryFilterComponent", function() { return HistoryFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/classes/material.service */ "./src/app/shared/classes/material.service.ts");



let HistoryFilterComponent = class HistoryFilterComponent {
    constructor() {
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isValid = true;
    }
    ngOnDestroy() {
        this.start.destroy();
        this.end.destroy();
    }
    ngAfterViewInit() {
        this.start = _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__["MaterialService"].initDatepicker(this.startRef, this.validate.bind(this));
        this.end = _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__["MaterialService"].initDatepicker(this.endRef, this.validate.bind(this));
    }
    validate() {
        if (!this.start.date || !this.end.date) {
            this.isValid = true;
            return;
        }
        this.isValid = this.start.date < this.end.date;
    }
    submitFilter() {
        const filter = {};
        if (this.order) {
            filter.order = this.order;
        }
        if (this.start.date) {
            filter.start = this.start.date;
        }
        if (this.end.date) {
            filter.end = this.end.date;
        }
        this.onFilter.emit(filter);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HistoryFilterComponent.prototype, "onFilter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('start', { static: false })
], HistoryFilterComponent.prototype, "startRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('end', { static: false })
], HistoryFilterComponent.prototype, "endRef", void 0);
HistoryFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/history-page/history-filter/history-filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history-filter.component.css */ "./src/app/history-page/history-filter/history-filter.component.css")).default]
    })
], HistoryFilterComponent);



/***/ }),

/***/ "./src/app/history-page/history-list/history-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/history-page/history-list/history-list.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnktcGFnZS9oaXN0b3J5LWxpc3QvaGlzdG9yeS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/history-page/history-list/history-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/history-page/history-list/history-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: HistoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryListComponent", function() { return HistoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/classes/material.service */ "./src/app/shared/classes/material.service.ts");



let HistoryListComponent = class HistoryListComponent {
    constructor() {
        this.orders = [];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.modal.destroy();
    }
    ngAfterViewInit() {
        this.modal = src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__["MaterialService"].initModal(this.modalRef);
    }
    selectOrder(order) {
        this.selectedOrder = order;
        this.modal.open();
    }
    closeModal() {
        this.modal.close();
    }
    computePrice(order) {
        return order.list.reduce((total, item) => {
            return total += item.quantity * item.cost;
        }, 0);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HistoryListComponent.prototype, "orders", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { static: false })
], HistoryListComponent.prototype, "modalRef", void 0);
HistoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/history-page/history-list/history-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history-list.component.css */ "./src/app/history-page/history-list/history-list.component.css")).default]
    })
], HistoryListComponent);



/***/ }),

/***/ "./src/app/history-page/history-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/history-page/history-page.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnktcGFnZS9oaXN0b3J5LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/history-page/history-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/history-page/history-page.component.ts ***!
  \********************************************************/
/*! exports provided: HistoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageComponent", function() { return HistoryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/orders.service */ "./src/app/shared/services/orders.service.ts");



const STEP = 2;
let HistoryPageComponent = class HistoryPageComponent {
    constructor(ordersService) {
        this.ordersService = ordersService;
        this.isFilterVisible = false;
        this.orders = [];
        this.filter = {};
        this.offset = 0;
        this.limit = STEP;
        this.loading = false;
        this.reloading = false;
        this.noMoreOrders = false;
    }
    ngOnInit() {
        this.reloading = true;
        this.fetch();
    }
    fetch() {
        const params = Object.assign({}, this.filter, {
            offset: this.offset,
            limit: this.limit
        });
        this.oSub = this.ordersService.fetch(params).subscribe(orders => {
            this.orders = this.orders.concat(orders);
            this.noMoreOrders = orders.length < STEP;
            this.loading = false;
            this.reloading = false;
        });
    }
    loadMore() {
        this.offset += STEP;
        this.loading = true;
        this.fetch();
    }
    ngOnDestroy() {
        //this.tooltip.destroy();
        this.oSub.unsubscribe();
    }
    applyFilter(filter) {
        this.orders = [];
        this.offset = 0;
        this.filter = filter;
        this.reloading = true;
        this.fetch();
    }
    ngAfterViewInit() {
        // this.tooltip = MaterialService.initTooltip(this.tooltipRef);
    }
    isFiltered() {
        return Object.keys(this.filter).length !== 0;
    }
};
HistoryPageComponent.ctorParameters = () => [
    { type: _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tooltip', { static: false })
], HistoryPageComponent.prototype, "tooltipRef", void 0);
HistoryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/history-page/history-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history-page.component.css */ "./src/app/history-page/history-page.component.css")).default]
    })
], HistoryPageComponent);



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/classes/material.service */ "./src/app/shared/classes/material.service.ts");






let LoginPageComponent = class LoginPageComponent {
    constructor(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])
        });
        this.route.queryParams.subscribe((params) => {
            if (params['registered']) {
                _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"].toast('Now you can login using your credentials');
            }
            else if (params['accessDenied']) {
                _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"].toast('First authorize yourself');
            }
            else if (params['sessionFailed']) {
                _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"].toast('Session wrong or expired, please login again');
            }
        });
    }
    ngOnDestroy() {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    }
    onSubmit() {
        this.form.disable();
        this.aSub = this.auth.login(this.form.value).subscribe(() => this.router.navigate(['/overview']), error => {
            _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"].toast(error.error.message);
            console.warn(error.error.message);
            this.form.enable();
        });
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/order-page/order-categories/order-categories.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/order-page/order-categories/order-categories.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXBhZ2Uvb3JkZXItY2F0ZWdvcmllcy9vcmRlci1jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/order-page/order-categories/order-categories.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/order-page/order-categories/order-categories.component.ts ***!
  \***************************************************************************/
/*! exports provided: OrderCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCategoriesComponent", function() { return OrderCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");



let OrderCategoriesComponent = class OrderCategoriesComponent {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    ngOnInit() {
        this.categories$ = this.categoriesService.fetch();
    }
};
OrderCategoriesComponent.ctorParameters = () => [
    { type: src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] }
];
OrderCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-page/order-categories/order-categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-categories.component.css */ "./src/app/order-page/order-categories/order-categories.component.css")).default]
    })
], OrderCategoriesComponent);



/***/ }),

/***/ "./src/app/order-page/order-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/order-page/order-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXBhZ2Uvb3JkZXItcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/order-page/order-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/order-page/order-page.component.ts ***!
  \****************************************************/
/*! exports provided: OrderPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageComponent", function() { return OrderPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/classes/material.service */ "./src/app/shared/classes/material.service.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.service */ "./src/app/order-page/order.service.ts");
/* harmony import */ var _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/orders.service */ "./src/app/shared/services/orders.service.ts");






let OrderPageComponent = class OrderPageComponent {
    constructor(router, order, ordersService) {
        this.router = router;
        this.order = order;
        this.ordersService = ordersService;
        this.pending = false;
    }
    ngOnInit() {
        this.isRoot = this.router.url === '/order';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.isRoot = this.router.url === '/order';
            }
        });
    }
    ngOnDestroy() {
        this.modal.destroy();
        if (this.oSub) {
            this.oSub.unsubscribe();
        }
    }
    ngAfterViewInit() {
        this.modal = _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].initModal(this.modalRef);
    }
    removePosition(orderPosition) {
        this.order.remove(orderPosition);
    }
    open() {
        this.modal.open();
    }
    cancel() {
        this.modal.close();
    }
    submit() {
        this.pending = true;
        const order = {
            list: this.order.list.map(item => {
                delete item._id;
                console.log(item);
                return item;
            })
        };
        console.log("test");
        this.oSub = this.ordersService.create(order).subscribe(newOrder => {
            _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].toast(`Order ${newOrder.order}  added.`);
            this.order.clear();
        }, error => _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"].toast(error.error.message), () => {
            this.modal.close();
            this.pending = false;
        });
    }
};
OrderPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { static: false })
], OrderPageComponent.prototype, "modalRef", void 0);
OrderPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-page/order-page.component.html")).default,
        providers: [_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-page.component.css */ "./src/app/order-page/order-page.component.css")).default]
    })
], OrderPageComponent);



/***/ }),

/***/ "./src/app/order-page/order-positions/order-positions.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/order-page/order-positions/order-positions.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLXBhZ2Uvb3JkZXItcG9zaXRpb25zL29yZGVyLXBvc2l0aW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/order-page/order-positions/order-positions.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/order-page/order-positions/order-positions.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrderPositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPositionsComponent", function() { return OrderPositionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_position_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/position.service */ "./src/app/shared/services/position.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order.service */ "./src/app/order-page/order.service.ts");
/* harmony import */ var src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/classes/material.service */ "./src/app/shared/classes/material.service.ts");







let OrderPositionsComponent = class OrderPositionsComponent {
    constructor(route, positionsService, order) {
        this.route = route;
        this.positionsService = positionsService;
        this.order = order;
    }
    ngOnInit() {
        this.positions$ = this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((params) => {
            return this.positionsService.fetch(params['id']);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((positions) => {
            return positions.map(position => {
                position.quantity = 1;
                return position;
            });
        }));
    }
    addToOrder(position) {
        src_app_shared_classes_material_service__WEBPACK_IMPORTED_MODULE_6__["MaterialService"].toast(`Added x${position.quantity} ${position.name}`);
        this.order.add(position);
    }
};
OrderPositionsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_shared_services_position_service__WEBPACK_IMPORTED_MODULE_3__["PositionsService"] },
    { type: _order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] }
];
OrderPositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-positions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-positions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-page/order-positions/order-positions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-positions.component.css */ "./src/app/order-page/order-positions/order-positions.component.css")).default]
    })
], OrderPositionsComponent);



/***/ }),

/***/ "./src/app/order-page/order.service.ts":
/*!*********************************************!*\
  !*** ./src/app/order-page/order.service.ts ***!
  \*********************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderService = class OrderService {
    constructor() {
        this.list = [];
        this.price = 0;
    }
    add(position) {
        const orderPosition = Object.assign({}, {
            name: position.name,
            cost: position.cost,
            quantity: position.quantity,
            _id: position._id
        });
        const candidate = this.list.find(p => p._id === position._id);
        if (candidate) {
            //change the amount
            candidate.quantity += orderPosition.quantity;
        }
        else {
            this.list.push(orderPosition);
        }
        this.computePrice();
    }
    remove(orderPosition) {
        const idx = this.list.findIndex(p => p._id === orderPosition._id);
        this.list.splice(idx);
        this.computePrice();
    }
    clear() {
        this.list = [];
        this.price = 0;
    }
    computePrice() {
        this.price = this.list.reduce((total, item) => {
            return total += item.quantity * item.cost;
        }, 0);
    }
};
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OrderService);



/***/ }),

/***/ "./src/app/overview-page/overview-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/overview-page/overview-page.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3LXBhZ2Uvb3ZlcnZpZXctcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/overview-page/overview-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/overview-page/overview-page.component.ts ***!
  \**********************************************************/
/*! exports provided: OverviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewPageComponent", function() { return OverviewPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/classes/material.service */ "./src/app/shared/classes/material.service.ts");



let OverviewPageComponent = class OverviewPageComponent {
    constructor() { }
    ngAfterViewInit() {
        _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_2__["MaterialService"].initDropMenu(this.dropmenuRef);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dropmenu', { static: false })
], OverviewPageComponent.prototype, "dropmenuRef", void 0);
OverviewPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-overview-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./overview-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/overview-page/overview-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./overview-page.component.css */ "./src/app/overview-page/overview-page.component.css")).default]
    })
], OverviewPageComponent);



/***/ }),

/***/ "./src/app/register-page/register-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-page/register-page.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/register-page/register-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-page/register-page.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/classes/material.service */ "./src/app/shared/classes/material.service.ts");






let RegisterPageComponent = class RegisterPageComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])
        });
    }
    ngOnDestroy() {
        if (this.aSub) {
            this.aSub.unsubscribe();
        }
    }
    onSubmit() {
        this.form.disable();
        this.aSub = this.auth.register(this.form.value).subscribe(() => {
            this.router.navigate(['/login'], {
                queryParams: {
                    registered: true
                }
            });
        }, error => {
            _shared_classes_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"].toast(error.error.message);
            console.warn(error);
            this.form.enable();
        });
    }
};
RegisterPageComponent.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register-page/register-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-page.component.css */ "./src/app/register-page/register-page.component.css")).default]
    })
], RegisterPageComponent);



/***/ }),

/***/ "./src/app/shared/classes/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/classes/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");





let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.auth.isAuthenticated()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    accessDenied: true
                }
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/classes/material.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/classes/material.service.ts ***!
  \****************************************************/
/*! exports provided: MaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return MaterialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MaterialService {
    static toast(message) {
        M.toast({ html: message });
    }
    static initializeFloatingButton(ref) {
        M.FloatingActionButton.init(ref.nativeElement);
    }
    static updateTextInputs() {
        M.updateTextFields();
    }
    static initModal(ref) {
        return M.Modal.init(ref.nativeElement);
    }
    // static initTooltip(ref: ElementRef): MaterialInstance {
    //   return M.tooltip(ref.nativeElement);
    // }
    static initDatepicker(ref, onClose) {
        return M.Datepicker.init(ref.nativeElement, {
            format: 'dd.mm.yyyy',
            showClearBtn: true,
            onClose
        });
    }
    static initDropMenu(ref) {
        M.Collapsible.init(ref.nativeElement);
    }
}


/***/ }),

/***/ "./src/app/shared/classes/token.interceptors.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/classes/token.interceptors.ts ***!
  \******************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TokenInterceptor = class TokenInterceptor {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    intercept(req, next) {
        if (this.auth.isAuthenticated()) {
            req = req.clone({
                setHeaders: {
                    Authorization: this.auth.getToken()
                }
            });
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => this.handleAuthError(error)));
    }
    handleAuthError(error) {
        if (error.status === 401) {
            this.router.navigate(['/login'], {
                queryParams: {
                    seesionFailed: true
                }
            });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/loader/loader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loader/loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.css */ "./src/app/shared/components/loader/loader.component.css")).default]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2F1dGgtbGF5b3V0L2F1dGgtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/layouts/auth-layout/auth-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/auth-layout/auth-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthLayoutComponent = class AuthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/auth-layout/auth-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-layout.component.css */ "./src/app/shared/layouts/auth-layout/auth-layout.component.css")).default]
    })
], AuthLayoutComponent);



/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL3NpdGUtbGF5b3V0L3NpdGUtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/layouts/site-layout/site-layout.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/layouts/site-layout/site-layout.component.ts ***!
  \*********************************************************************/
/*! exports provided: SiteLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteLayoutComponent", function() { return SiteLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _classes_material_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/material.service */ "./src/app/shared/classes/material.service.ts");





let SiteLayoutComponent = class SiteLayoutComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.links = [
            { url: '/overview', name: 'Overview' },
            // {url: '/analytics', name: 'Analytics'},
            { url: '/history', name: 'History' },
            { url: '/order', name: 'Add order' },
            { url: '/categories', name: 'Stock-categories' }
        ];
    }
    ngOnInit() {
    }
    logout(event) {
        event.preventDefault();
        this.auth.logout();
        this.router.navigate(['/login']);
    }
    ngAfterViewInit() {
        _classes_material_service__WEBPACK_IMPORTED_MODULE_4__["MaterialService"].initializeFloatingButton(this.floatingRef);
    }
};
SiteLayoutComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('floating', { static: false })
], SiteLayoutComponent.prototype, "floatingRef", void 0);
SiteLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-site-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./site-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/site-layout/site-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./site-layout.component.css */ "./src/app/shared/layouts/site-layout/site-layout.component.css")).default]
    })
], SiteLayoutComponent);



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.token = null;
    }
    register(user) {
        return this.http.post('/api/auth/register', user);
    }
    login(user) {
        return this.http.post('/api/auth/login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(({ token }) => {
            localStorage.setItem('auth-token', token);
            this.setToken(token);
        }));
    }
    setToken(token) {
        this.token = token;
    }
    getToken() {
        return this.token;
    }
    isAuthenticated() {
        return !!this.token;
    }
    logout() {
        this.setToken(null);
        localStorage.clear();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/categories.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/categories.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CategoriesService = class CategoriesService {
    constructor(http) {
        this.http = http;
    }
    fetch() {
        return this.http.get('/api/category');
    }
    getById(id) {
        return this.http.get(`/api/category/${id}`);
        // this.http.get<Category>('/api/category' + id);
    }
    create(name, image) {
        const fd = new FormData();
        if (image) {
            fd.append('image', image, image.name);
        }
        fd.append('name', name);
        return this.http.post('/api/category', fd);
    }
    update(id, name, image) {
        const fd = new FormData();
        if (image) {
            fd.append('image', image, image.name);
        }
        fd.append('name', name);
        return this.http.patch('/api/category/' + id, fd);
    }
    delete(id) {
        return this.http.delete('/api/category/' + id);
    }
};
CategoriesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriesService);



/***/ }),

/***/ "./src/app/shared/services/orders.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/orders.service.ts ***!
  \***************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let OrdersService = class OrdersService {
    constructor(http) {
        this.http = http;
    }
    create(order) {
        console.log('/api/order', order);
        return this.http.post('/api/order', order);
    }
    fetch(params = {}) {
        return this.http.get('/api/order', {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: params
            }),
        });
    }
};
OrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], OrdersService);



/***/ }),

/***/ "./src/app/shared/services/position.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/position.service.ts ***!
  \*****************************************************/
/*! exports provided: PositionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsService", function() { return PositionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PositionsService = class PositionsService {
    constructor(http) {
        this.http = http;
    }
    fetch(categoryId) {
        return this.http.get(`/api/position/${categoryId}`);
    }
    create(position) {
        return this.http.post('/api/position', position);
    }
    update(position) {
        return this.http.patch('/api/position/' + position._id, position);
    }
    delete(position) {
        return this.http.delete(`/api/position/${position._id}`);
    }
};
PositionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PositionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PositionsService);



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
/* harmony import */ var materialize_css_dist_js_materialize_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! materialize-css/dist/js/materialize.js */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css_dist_js_materialize_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize_js__WEBPACK_IMPORTED_MODULE_5__);






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

module.exports = __webpack_require__(/*! D:\other\PROG_You_Tube\FULLSTACK\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);