(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+VyE":
/*!**************************************************************************!*\
  !*** ./src/app/interaction-module/components/header/header.component.ts ***!
  \**************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 5, vars: 0, consts: [[1, "body"], ["aria-hidden", "false", "aria-label", "Example home icon", 1, "disable-dbl-tap-zoom"], [1, "logo"], ["src", "assets/logo-haw.svg", "alt", "KlausurenAPP Logo"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".body[_ngcontent-%COMP%]{\n    height: 100%;\n    background-color: #004C99;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; \n    box-shadow: 0px 6px 11px -6px #000000;\n}\n\n.logo[_ngcontent-%COMP%]{\n    margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUVuQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNEM5OTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDZweCAxMXB4IC02cHggIzAwMDAwMDsgXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCAxMXB4IC02cHggIzAwMDAwMDtcbn1cblxuLmxvZ297XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/buzzet/Programming/uni/HAW/SEA2/frontend/KlausurenApp/src/main.ts */"zUnb");


/***/ }),

/***/ "3OaD":
/*!****************************************************************************************!*\
  !*** ./src/app/interaction-module/components/dropdown-list/dropdown-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DropdownListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownListComponent", function() { return DropdownListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





function DropdownListComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1, " ");
} }
class DropdownListComponent {
    constructor() { }
    ngOnInit() {
    }
}
DropdownListComponent.ɵfac = function DropdownListComponent_Factory(t) { return new (t || DropdownListComponent)(); };
DropdownListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownListComponent, selectors: [["dropdown-list"]], inputs: { list: "list", placeholder: "placeholder" }, decls: 6, vars: 2, consts: [[1, "list"], ["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DropdownListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DropdownListComponent_mat_option_5_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"]], styles: [".list[_ngcontent-%COMP%]{\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoiZHJvcGRvd24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3R7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ "7AfM":
/*!**********************************************************************!*\
  !*** ./src/app/interaction-module/components/tabs/tabs.component.ts ***!
  \**********************************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



class TabsComponent {
    constructor(router) {
        this.router = router;
        this.colorView = '#FFFFFF';
        this.colorPost = '#727272';
        this.colorProfile = '#727272';
        this.colorSettings = '#727272';
    }
    ngOnInit() {
    }
    onClickView() {
        this.colorPost = '#727272';
        this.colorView = '#FFFFFF';
        this.router.navigate(['view']);
    }
    onClickPost() {
        this.colorView = '#727273';
        this.colorPost = '#FFFFFF';
        this.router.navigate(['post']);
    }
}
TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["app-tabs"]], decls: 13, vars: 8, consts: [[1, "body"], [1, "btn", "post", "disable-dbl-tap-zoom"], [3, "inline", "click"], [1, "btn", "view", "disable-dbl-tap-zoom"], [1, "btn", "profile", "disable-dbl-tap-zoom"], [3, "inline"], [1, "btn", "settings", "disable-dbl-tap-zoom"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_mat_icon_click_2_listener() { return ctx.onClickPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "file_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_Template_mat_icon_click_5_listener() { return ctx.onClickView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.colorPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.colorView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".body[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    background-color: #333333;\n    display: flex;\n    justify-content: space-around;\n    align-items: center; \nbox-shadow: 0px -6px 11px -6px #000000;\n}\n\n.body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    height: 40px;\n    font-size: 40px;\n    text-align: center;\n    vertical-align: middle;\n}\n\nmat-icon[_ngcontent-%COMP%]{\n    color: #727272;\n}\n\n.btn[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBRXZCLHNDQUFzQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InRhYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAtNnB4IDExcHggLTZweCAjMDAwMDAwOyBcbmJveC1zaGFkb3c6IDBweCAtNnB4IDExcHggLTZweCAjMDAwMDAwO1xufVxuXG4uYm9keSA+IGRpdntcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxubWF0LWljb257XG4gICAgY29sb3I6ICM3MjcyNzI7XG59XG4uYnRuOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    klausurenService: 'http://87.237.54.34:8201',
    emailValidationService: 'http://87.237.54.34:8202',
    nutzerService: 'http://87.237.54.34:8203'
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

/***/ "CdGR":
/*!***********************************************************!*\
  !*** ./src/app/login-module/services/register.service.ts ***!
  \***********************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RegisterService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].nutzerService + '/users/userPersistence';
    }
    register(user) {
        this.http.post(this.url, user).subscribe(ref => { });
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "DePx":
/*!********************************************************************!*\
  !*** ./src/app/login-module/services/e-mail-controller.service.ts ***!
  \********************************************************************/
/*! exports provided: EMailControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMailControllerService", function() { return EMailControllerService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class EMailControllerService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].emailValidationService;
    }
    postEmailToService(eMail) {
        this.http.post(this.url + '/emailVerification', eMail).subscribe(ref => {
            console.log(ref);
        }, error => {
            console.log(error);
        });
        return true;
    }
}
EMailControllerService.ɵfac = function EMailControllerService_Factory(t) { return new (t || EMailControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EMailControllerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EMailControllerService, factory: EMailControllerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "HQMW":
/*!**************************************************************************************!*\
  !*** ./src/app/interaction-module/components/post-klausur/post-klausur.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PostKlausurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostKlausurComponent", function() { return PostKlausurComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_klausuren_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/klausuren.service */ "YQ7o");
/* harmony import */ var _dropdown_list_dropdown_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dropdown-list/dropdown-list.component */ "3OaD");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







function PostKlausurComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_r0.files.item(0).name);
} }
class PostKlausurComponent {
    constructor(klausurenService) {
        this.klausurenService = klausurenService;
        this.files = undefined;
        this.btnKlausurDisable = true;
        this.studiengaenge = ['Wirtschaftsinformatik', 'Betriebswirtschaftslehre', 'Angewante Informatik'];
        this.semesters = ['Semester 1', 'Semester 2', 'Semester 3'];
        this.moduls = ['PM2', 'IN2', 'SEA'];
    }
    ngOnInit() {
    }
    onFileInput(files) {
        this.btnKlausurDisable = false;
        this.files = files;
    }
    upload() {
        console.log(this.files);
        const response = this.klausurenService.uploadKlausur(this.files);
        response.subscribe(event => {
            console.log(event);
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].UploadProgress) {
                this.progress.percentage = Math.round(100 * event.loaded / event.total);
                console.log(this.progress);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                alert('File Successfully Uploaded');
            }
        });
    }
}
PostKlausurComponent.ɵfac = function PostKlausurComponent_Factory(t) { return new (t || PostKlausurComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_klausuren_service__WEBPACK_IMPORTED_MODULE_2__["KlausurenService"])); };
PostKlausurComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostKlausurComponent, selectors: [["app-post-klausur"]], decls: 13, vars: 5, consts: [[1, "body"], ["placeholder", "Studiengang", 3, "list"], ["placeholder", "Semester", 3, "list"], ["placeholder", "Modul", 3, "list"], [1, "uploadBtn"], ["for", "file-upload", 1, "custom-file-upload"], [1, "uploadIcon"], ["id", "file-upload", "type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], ["class", "files", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "btn", 3, "disabled", "click"], [1, "files"], ["mat-icon-button", "", "color", "warn"]], template: function PostKlausurComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "dropdown-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "dropdown-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "dropdown-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "upload_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PostKlausurComponent_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); return ctx.onFileInput(_r0.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PostKlausurComponent_div_10_Template, 6, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostKlausurComponent_Template_button_click_11_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Klausur Hochladen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("list", ctx.studiengaenge);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("list", ctx.semesters);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("list", ctx.moduls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.files.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.btnKlausurDisable);
    } }, directives: [_dropdown_list_dropdown_list_component__WEBPACK_IMPORTED_MODULE_3__["DropdownListComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".body[_ngcontent-%COMP%]{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n\n}\n\n.btn[_ngcontent-%COMP%]{\n    width: 70%;\n}\n\n.uploadBtn[_ngcontent-%COMP%]{\n    height: 70px;\n    width: 70px;\n    font-size: 70px;\n    margin-bottom: 20px;\n}\n\n.uploadIcon[_ngcontent-%COMP%]{\n    font-size: 70px;\n}\n\n.custom-file-upload[_ngcontent-%COMP%] {\n   display: inline-block;\n   padding: 6px 12px;\n   cursor: pointer;\n }\n\n.files[_ngcontent-%COMP%]{\n  display: flex;\n  width: 80%;\n  justify-content: space-around;\n}\n\ndropdown-list[_ngcontent-%COMP%]{\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Qta2xhdXN1ci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtHQUNHLHFCQUFxQjtHQUNyQixpQkFBaUI7R0FDakIsZUFBZTtDQUNqQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InBvc3Qta2xhdXN1ci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG59XG5cbi5idG57XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLnVwbG9hZEJ0bntcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi51cGxvYWRJY29ue1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbn1cblxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICBwYWRkaW5nOiA2cHggMTJweDtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiB9XG5cbi5maWxlc3tcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDgwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5kcm9wZG93bi1saXN0e1xuICB3aWR0aDogODAlO1xufVxuIl19 */"] });


/***/ }),

/***/ "K8jm":
/*!**********************************************************************************************!*\
  !*** ./src/app/login-module/components/register-email-send/register-email-send.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: RegisterEmailSendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEmailSendComponent", function() { return RegisterEmailSendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RegisterEmailSendComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterEmailSendComponent.ɵfac = function RegisterEmailSendComponent_Factory(t) { return new (t || RegisterEmailSendComponent)(); };
RegisterEmailSendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterEmailSendComponent, selectors: [["app-register-email-send"]], decls: 21, vars: 0, consts: [[1, "body"], [1, "logo"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 194 85.5", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 194 85.5"], ["type", "text/css"], ["x", "0", "y", "0.1", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "0", "y", "13.4", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "0", "y", "26.7", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "0", "y", "40.1", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "13.3", "y", "6.7", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "13.3", "y", "20.1", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "13.3", "y", "33.4", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "13.3", "y", "46.7", "width", "36.7", "height", "3.3", 1, "st0"], ["d", "M121.8,0.1h-3.5l-2.1,9.1c-0.1,0.5-0.3,1.3-0.5,2.1c-0.2,0.9-0.3,1.6-0.4,2.2c-0.1-0.6-0.2-1.4-0.4-2.2\nc-0.2-0.9-0.3-1.5-0.4-1.9l-2.4-9.3h-3.3l-2.4,9.3c-0.1,0.5-0.3,1.2-0.5,2.1c-0.2,0.9-0.3,1.6-0.3,2c-0.2-1.2-0.4-2.7-0.8-4.4\nl-2.1-9.1h-3.5l4.2,16.7h4l2.2-8.7c0.1-0.4,0.2-1,0.4-1.9c0.2-0.9,0.3-1.6,0.3-2c0,0.3,0.1,1,0.3,2c0.2,1,0.3,1.6,0.4,1.9l2.3,8.7h4\nL121.8,0.1z M87.4,9.8c1.2-3.8,1.9-6.2,2.2-7.2c0.1,0.3,0.2,0.6,0.3,1.1c0.1,0.5,0.8,2.5,1.9,6.1L87.4,9.8L87.4,9.8z M97.6,16.7\nL91.7,0h-4.3l-5.9,16.7h3.8l1.2-4h6.1l1.2,4H97.6z M77,0.1h-3.5v6.5h-6.6V0.1h-3.5v16.7h3.5V9.5h6.6v7.2H77C77,16.7,77,0.1,77,0.1z", 1, "st0"], ["d", "M187,37h3.2v3.5c-0.8,0.2-1.5,0.2-2.2,0.2c-1.4,0-2.5-0.5-3.2-1.4c-0.7-1-1.1-2.3-1.1-4.1\nc0-1.7,0.5-3.1,1.4-4.1c0.9-1,2.1-1.5,3.7-1.5c1.3,0,2.6,0.3,3.8,0.9l1.2-2.8c-1.6-0.7-3.2-1-4.9-1c-2.7,0-4.9,0.8-6.4,2.3\nc-1.5,1.5-2.3,3.6-2.3,6.3c0,2.8,0.7,4.9,2,6.4c1.3,1.5,3.2,2.2,5.8,2.2c1,0,2-0.1,2.9-0.2c0.9-0.1,2-0.4,3-0.7v-8.6H187L187,37\nL187,37z M169,37l4,6.4h3.9c-0.8-1.1-2.4-3.5-4.9-7.3c1-0.4,1.8-1,2.3-1.8c0.5-0.8,0.8-1.6,0.8-2.6c0-1.7-0.5-2.9-1.6-3.8\nc-1.1-0.8-2.8-1.2-5-1.2h-4.9v16.7h3.5V37H169z M167.1,29.7h1.1c1.1,0,2,0.2,2.5,0.5c0.5,0.3,0.8,0.9,0.8,1.7c0,0.8-0.3,1.4-0.8,1.8\nc-0.5,0.4-1.4,0.6-2.5,0.6h-1.1V29.7z M153.9,26.8v10.2c0,1.3-0.3,2.2-0.8,2.8c-0.5,0.6-1.4,0.9-2.5,0.9c-1.2,0-2-0.3-2.6-0.9\nc-0.5-0.6-0.8-1.5-0.8-2.8V26.8h-3.5v10.7c0,1.9,0.6,3.4,1.8,4.5c1.2,1.1,2.8,1.6,5,1.6c1.4,0,2.7-0.2,3.7-0.7\nc1-0.5,1.8-1.2,2.4-2.1c0.6-0.9,0.8-2,0.8-3.2V26.8H153.9z M131.9,36.2c2,0,3,0.7,3,2.1c0,0.8-0.2,1.3-0.7,1.7\nc-0.5,0.4-1.2,0.6-2.2,0.6h-2.3v-4.3L131.9,36.2L131.9,36.2z M129.7,29.7h1.9c1,0,1.7,0.1,2.2,0.4c0.5,0.3,0.7,0.7,0.7,1.4\nc0,0.7-0.2,1.2-0.6,1.5c-0.4,0.3-1.1,0.4-2.1,0.4h-2.1V29.7z M126.1,43.4h6.2c1.9,0,3.4-0.4,4.5-1.3c1.1-0.9,1.6-2,1.6-3.6\nc0-1.1-0.2-1.9-0.7-2.6c-0.5-0.6-1.2-1.1-2.3-1.3v-0.1c0.8-0.1,1.4-0.5,1.9-1.2c0.5-0.6,0.7-1.5,0.7-2.4c0-1.5-0.5-2.5-1.6-3.2\nc-1.1-0.7-2.8-1-5.1-1h-5.2V43.4z M112.4,43.4l4.3-13h0.1c-0.1,2.1-0.1,3.4-0.2,3.9c0,0.5,0,0.9,0,1.3v7.9h3.3V26.8h-4.8l-4.2,12.7\nh-0.1l-3.9-12.7h-4.8v16.7h3.2v-7.7c0-0.9-0.1-2.7-0.2-5.3h0.1l4,13.1H112.4z M87.4,36.5c1.2-3.8,1.9-6.2,2.2-7.2\nc0.1,0.3,0.2,0.6,0.3,1.1c0.1,0.5,0.8,2.5,1.9,6.1L87.4,36.5L87.4,36.5z M97.6,43.4l-5.9-16.7h-4.3l-5.9,16.7h3.8l1.2-4h6.1l1.2,4\nH97.6z M77,26.8h-3.5v6.5h-6.6v-6.5h-3.5v16.7h3.5v-7.2h6.6v7.2H77C77,43.4,77,26.8,77,26.8z", 1, "st0"], ["x", "63.2", "y", "54.7", "width", "53", "height", "3.3", 1, "st0"], ["transform", "matrix(1.1183 0 0 1 70.1475 74.959)", 1, "st0", "st1", "st2"], [1, "text"]], template: function RegisterEmailSendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "style", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n.st0{fill:#ffffff;}\n.st1{font-family:'OpenSans-Regular';}\n.st2{font-size:12px;}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "text", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "KLAUSUREN APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Vielen Dank f\u00FCr Ihre Gedult. Wir pr\u00FCfen ihre eMail-Adresse und senden Ihnen zeitnah einen Best\u00E4tigungslink zu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".body[_ngcontent-%COMP%]{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}   \n\n.logo[_ngcontent-%COMP%]{\n    height: 17vh;\n    width: 80vw;\n    background-color: #004C99;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}   \n\nsvg[_ngcontent-%COMP%]{\n    width: 70vw;\n}   \n\n.text[_ngcontent-%COMP%]{\n    width: 80vw;\n    margin-top: 20vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWVtYWlsLXNlbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InJlZ2lzdGVyLWVtYWlsLXNlbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSAgIFxuXG4ubG9nb3tcbiAgICBoZWlnaHQ6IDE3dmg7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNEM5OTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc3Zne1xuICAgIHdpZHRoOiA3MHZ3O1xufVxuXG4udGV4dHtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xufSJdfQ== */"] });


/***/ }),

/***/ "KJ4f":
/*!******************************************************************************************!*\
  !*** ./src/app/login-module/components/register-password/register-password.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RegisterPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPasswordComponent", function() { return RegisterPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/register.service */ "CdGR");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








class RegisterPasswordComponent {
    constructor(route, regSvc, router) {
        this.route = route;
        this.regSvc = regSvc;
        this.router = router;
        this.email = 'test123';
        this.pw = '';
        this.hide = true;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.email = atob(params.email);
            console.log(this.email);
        });
    }
    onClickRegister() {
        const user = {
            userPassword: this.pw,
            userMail: this.email
        };
        this.regSvc.register(user);
        this.router.navigateByUrl('/');
    }
}
RegisterPasswordComponent.ɵfac = function RegisterPasswordComponent_Factory(t) { return new (t || RegisterPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RegisterPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterPasswordComponent, selectors: [["app-register-password"]], decls: 41, vars: 6, consts: [[1, "body"], [1, "logo"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 194 85.5", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 194 85.5"], ["type", "text/css"], ["x", "0", "y", "0.1", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "0", "y", "13.4", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "0", "y", "26.7", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "0", "y", "40.1", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "13.3", "y", "6.7", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "13.3", "y", "20.1", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "13.3", "y", "33.4", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "13.3", "y", "46.7", "width", "36.7", "height", "3.3", 1, "st0"], ["d", "M121.8,0.1h-3.5l-2.1,9.1c-0.1,0.5-0.3,1.3-0.5,2.1c-0.2,0.9-0.3,1.6-0.4,2.2c-0.1-0.6-0.2-1.4-0.4-2.2\nc-0.2-0.9-0.3-1.5-0.4-1.9l-2.4-9.3h-3.3l-2.4,9.3c-0.1,0.5-0.3,1.2-0.5,2.1c-0.2,0.9-0.3,1.6-0.3,2c-0.2-1.2-0.4-2.7-0.8-4.4\nl-2.1-9.1h-3.5l4.2,16.7h4l2.2-8.7c0.1-0.4,0.2-1,0.4-1.9c0.2-0.9,0.3-1.6,0.3-2c0,0.3,0.1,1,0.3,2c0.2,1,0.3,1.6,0.4,1.9l2.3,8.7h4\nL121.8,0.1z M87.4,9.8c1.2-3.8,1.9-6.2,2.2-7.2c0.1,0.3,0.2,0.6,0.3,1.1c0.1,0.5,0.8,2.5,1.9,6.1L87.4,9.8L87.4,9.8z M97.6,16.7\nL91.7,0h-4.3l-5.9,16.7h3.8l1.2-4h6.1l1.2,4H97.6z M77,0.1h-3.5v6.5h-6.6V0.1h-3.5v16.7h3.5V9.5h6.6v7.2H77C77,16.7,77,0.1,77,0.1z", 1, "st0"], ["d", "M187,37h3.2v3.5c-0.8,0.2-1.5,0.2-2.2,0.2c-1.4,0-2.5-0.5-3.2-1.4c-0.7-1-1.1-2.3-1.1-4.1\nc0-1.7,0.5-3.1,1.4-4.1c0.9-1,2.1-1.5,3.7-1.5c1.3,0,2.6,0.3,3.8,0.9l1.2-2.8c-1.6-0.7-3.2-1-4.9-1c-2.7,0-4.9,0.8-6.4,2.3\nc-1.5,1.5-2.3,3.6-2.3,6.3c0,2.8,0.7,4.9,2,6.4c1.3,1.5,3.2,2.2,5.8,2.2c1,0,2-0.1,2.9-0.2c0.9-0.1,2-0.4,3-0.7v-8.6H187L187,37\nL187,37z M169,37l4,6.4h3.9c-0.8-1.1-2.4-3.5-4.9-7.3c1-0.4,1.8-1,2.3-1.8c0.5-0.8,0.8-1.6,0.8-2.6c0-1.7-0.5-2.9-1.6-3.8\nc-1.1-0.8-2.8-1.2-5-1.2h-4.9v16.7h3.5V37H169z M167.1,29.7h1.1c1.1,0,2,0.2,2.5,0.5c0.5,0.3,0.8,0.9,0.8,1.7c0,0.8-0.3,1.4-0.8,1.8\nc-0.5,0.4-1.4,0.6-2.5,0.6h-1.1V29.7z M153.9,26.8v10.2c0,1.3-0.3,2.2-0.8,2.8c-0.5,0.6-1.4,0.9-2.5,0.9c-1.2,0-2-0.3-2.6-0.9\nc-0.5-0.6-0.8-1.5-0.8-2.8V26.8h-3.5v10.7c0,1.9,0.6,3.4,1.8,4.5c1.2,1.1,2.8,1.6,5,1.6c1.4,0,2.7-0.2,3.7-0.7\nc1-0.5,1.8-1.2,2.4-2.1c0.6-0.9,0.8-2,0.8-3.2V26.8H153.9z M131.9,36.2c2,0,3,0.7,3,2.1c0,0.8-0.2,1.3-0.7,1.7\nc-0.5,0.4-1.2,0.6-2.2,0.6h-2.3v-4.3L131.9,36.2L131.9,36.2z M129.7,29.7h1.9c1,0,1.7,0.1,2.2,0.4c0.5,0.3,0.7,0.7,0.7,1.4\nc0,0.7-0.2,1.2-0.6,1.5c-0.4,0.3-1.1,0.4-2.1,0.4h-2.1V29.7z M126.1,43.4h6.2c1.9,0,3.4-0.4,4.5-1.3c1.1-0.9,1.6-2,1.6-3.6\nc0-1.1-0.2-1.9-0.7-2.6c-0.5-0.6-1.2-1.1-2.3-1.3v-0.1c0.8-0.1,1.4-0.5,1.9-1.2c0.5-0.6,0.7-1.5,0.7-2.4c0-1.5-0.5-2.5-1.6-3.2\nc-1.1-0.7-2.8-1-5.1-1h-5.2V43.4z M112.4,43.4l4.3-13h0.1c-0.1,2.1-0.1,3.4-0.2,3.9c0,0.5,0,0.9,0,1.3v7.9h3.3V26.8h-4.8l-4.2,12.7\nh-0.1l-3.9-12.7h-4.8v16.7h3.2v-7.7c0-0.9-0.1-2.7-0.2-5.3h0.1l4,13.1H112.4z M87.4,36.5c1.2-3.8,1.9-6.2,2.2-7.2\nc0.1,0.3,0.2,0.6,0.3,1.1c0.1,0.5,0.8,2.5,1.9,6.1L87.4,36.5L87.4,36.5z M97.6,43.4l-5.9-16.7h-4.3l-5.9,16.7h3.8l1.2-4h6.1l1.2,4\nH97.6z M77,26.8h-3.5v6.5h-6.6v-6.5h-3.5v16.7h3.5v-7.2h6.6v7.2H77C77,43.4,77,26.8,77,26.8z", 1, "st0"], ["x", "63.2", "y", "54.7", "width", "53", "height", "3.3", 1, "st0"], ["transform", "matrix(1.1183 0 0 1 70.1475 74.959)", 1, "st0", "st1", "st2"], [1, "checkMark"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 100 100", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 100 100"], ["x", "13.34", "y", "58.82", "transform", "matrix(0.7472 0.6646 -0.6646 0.7472 49.1209 -4.77)", "width", "34.98", "height", "6.72", 1, "check"], ["x", "30.08", "y", "50.09", "transform", "matrix(-0.6646 0.7472 -0.7472 -0.6646 136.3611 45.6979)", "width", "55.68", "height", "6.72", 1, "check"], [1, "text"], [1, "credentials"], [1, "loginInput"], ["matInput", "", "disabled", "true", 3, "value"], ["matInput", "", "placeholder", "Nicht dein HAW Passwort!", 3, "ngModel", "type", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function RegisterPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "style", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n.st0{fill:#ffffff;}\n.st1{font-family:'OpenSans-Regular';}\n.st2{font-size:12px;}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "text", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "KLAUSUREN APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "style", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " .check{fill:#3AAA35;}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "rect", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "rect", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Deine E-Mail Adresse wurde erfolgreich best\u00E4tigt. Bitte vergeben Sie jetzt ihr Passwort!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterPasswordComponent_Template_input_ngModelChange_35_listener($event) { return ctx.pw = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterPasswordComponent_Template_button_click_36_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterPasswordComponent_Template_button_click_39_listener() { return ctx.onClickRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Registrieren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pw)("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: [".body[_ngcontent-%COMP%]{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.logo[_ngcontent-%COMP%]{\n    height: 17vh;\n    width: 80vw;\n    background-color: #004C99;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nsvg[_ngcontent-%COMP%]{\n    width: 70vw;\n}\n\n.text[_ngcontent-%COMP%]{\n    width: 80vw;\n}\n\n.checkMark[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n    height: 20vh;\n}\n\n.credentials[_ngcontent-%COMP%]{\n    width: 80vw;\n    height: 20vh;\n    margin-top: 8vh;\n}\n\n.loginInput[_ngcontent-%COMP%]{\n    width: 100%;\n\n }\n\nbutton[_ngcontent-%COMP%]{\n     width: 80vw;\n     height: 6vh;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUdBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7O0NBRWQ7O0FBRUE7S0FDSSxXQUFXO0tBQ1gsV0FBVztDQUNmIiwiZmlsZSI6InJlZ2lzdGVyLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmxvZ297XG4gICAgaGVpZ2h0OiAxN3ZoO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRDOTk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnN2Z3tcbiAgICB3aWR0aDogNzB2dztcbn1cblxuLnRleHR7XG4gICAgd2lkdGg6IDgwdnc7XG59XG5cblxuLmNoZWNrTWFyayA+IHN2ZyB7XG4gICAgaGVpZ2h0OiAyMHZoO1xufVxuXG4uY3JlZGVudGlhbHN7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIG1hcmdpbi10b3A6IDh2aDtcbn1cblxuLmxvZ2luSW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiB9XG5cbiBidXR0b257XG4gICAgIHdpZHRoOiA4MHZ3O1xuICAgICBoZWlnaHQ6IDZ2aDtcbiB9XG4iXX0= */"] });


/***/ }),

/***/ "LTMn":
/*!********************************************************!*\
  !*** ./src/app/login-module/services/login.service.ts ***!
  \********************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class LoginService {
    constructor(http, router) {
        this.http = http;
        this.loginSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.login$ = this.loginSubject$.asObservable();
        this.loggedInSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.loggedIn$ = this.loggedInSubject$.asObservable();
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].nutzerService + '/users/login';
    }
    logIn(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.http.post(this.url, user).toPromise();
            this.loginSubject$.next(response);
            console.log(response.jwtBearer);
            if (response.jwtBearer !== null) {
                this.loggedInSubject$.next(true);
            }
            return response;
        });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MV7R":
/*!**********************************************!*\
  !*** ./src/app/login-module/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ "X0zH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "yz5m");
/* harmony import */ var _components_register_email_send_register_email_send_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register-email-send/register-email-send.component */ "K8jm");
/* harmony import */ var _components_register_password_register_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register-password/register-password.component */ "KJ4f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _components_register_email_send_register_email_send_component__WEBPACK_IMPORTED_MODULE_7__["RegisterEmailSendComponent"],
        _components_register_password_register_password_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _components_register_email_send_register_email_send_component__WEBPACK_IMPORTED_MODULE_7__["RegisterEmailSendComponent"],
        _components_register_password_register_password_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPasswordComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_interface_user_interface_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-interface/user-interface.component */ "ZU9A");


class AppComponent {
    constructor() {
        this.title = 'KlausurenApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-interface");
    } }, directives: [_user_interface_user_interface_component__WEBPACK_IMPORTED_MODULE_1__["UserInterfaceComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "X0zH":
/*!******************************************************************!*\
  !*** ./src/app/login-module/components/login/login.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "LTMn");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









class LoginComponent {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.hide = true;
        this.mail = '';
        this.pw = '';
    }
    ngOnInit() {
    }
    onClickLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = {
                userMail: this.mail,
                userPassword: this.pw,
            };
            const promise = yield this.loginService.logIn(user);
            this.router.navigate(['view']);
        });
    }
    onClickRegister() {
        this.router.navigate(['register']);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 6, consts: [[1, "body"], [1, "logo"], ["src", "assets/logo.svg", "alt", "logo klausurenapp", 1, "logoHAW"], [1, "credentials"], [1, "loginInput"], ["matInput", "", "placeholder", "Your HAW-Mail", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Nicht dein HAW Passwort!", 3, "type", "ngModel", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", 2, "margin-top", "2vh", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.mail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.pw = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_15_listener() { return ctx.onClickLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.onClickRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Registrieren");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.mail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngModel", ctx.pw);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".body[_ngcontent-%COMP%]{\n     height: 100vh;\n     width: 100vw;\n     display: flex;\n     align-items: center;\n     flex-direction: column;\n }\n\n .logo[_ngcontent-%COMP%]{\n     height: 18vh;\n     width: 80vw;\n     background-color: #004C99;\n     border-radius: 10px;\n     display: flex;\n     justify-content: center;\n     align-items: center;\n }\n\n .credentials[_ngcontent-%COMP%]{\n      width: 80vw;\n      height: 20vh;\n      margin-top: 8vh;\n  }\n\n .loginInput[_ngcontent-%COMP%]{\n      width: 100%;\n\n   }\n\n button[_ngcontent-%COMP%]{\n       width: 80vw;\n       height: 6vh;\n   }\n\n .logoHAW[_ngcontent-%COMP%]{\n     width: 70%;\n     max-height: 90%;\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7S0FDSSxhQUFhO0tBQ2IsWUFBWTtLQUNaLGFBQWE7S0FDYixtQkFBbUI7S0FDbkIsc0JBQXNCO0NBQzFCOztDQUVBO0tBQ0ksWUFBWTtLQUNaLFdBQVc7S0FDWCx5QkFBeUI7S0FDekIsbUJBQW1CO0tBQ25CLGFBQWE7S0FDYix1QkFBdUI7S0FDdkIsbUJBQW1CO0NBQ3ZCOztDQUVDO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO0VBQ25COztDQUVBO01BQ0ksV0FBVzs7R0FFZDs7Q0FFQTtPQUNJLFdBQVc7T0FDWCxXQUFXO0dBQ2Y7O0NBRUE7S0FDRSxVQUFVO0tBQ1YsZUFBZTtHQUNqQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5ib2R5e1xuICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICB3aWR0aDogMTAwdnc7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gfVxuXG4gLmxvZ297XG4gICAgIGhlaWdodDogMTh2aDtcbiAgICAgd2lkdGg6IDgwdnc7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRDOTk7XG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuIH1cblxuICAuY3JlZGVudGlhbHN7XG4gICAgICB3aWR0aDogODB2dztcbiAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgIG1hcmdpbi10b3A6IDh2aDtcbiAgfVxuXG4gIC5sb2dpbklucHV0e1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgIH1cblxuICAgYnV0dG9ue1xuICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgIGhlaWdodDogNnZoO1xuICAgfVxuXG4gICAubG9nb0hBV3tcbiAgICAgd2lkdGg6IDcwJTtcbiAgICAgbWF4LWhlaWdodDogOTAlO1xuICAgfVxuIl19 */"] });


/***/ }),

/***/ "YQ7o":
/*!******************************************************************!*\
  !*** ./src/app/interaction-module/services/klausuren.service.ts ***!
  \******************************************************************/
/*! exports provided: KlausurenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KlausurenService", function() { return KlausurenService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class KlausurenService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].klausurenService;
    }
    uploadKlausur(files) {
        const data = new FormData();
        data.append('fileArray', files[0]);
        let body = { 'title': files[0].name, 'fileArray': files };
        return this.httpClient.post(this.url + "/test/klausurUpload", data, {
            reportProgress: true,
            responseType: 'text'
        });
    }
}
KlausurenService.ɵfac = function KlausurenService_Factory(t) { return new (t || KlausurenService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
KlausurenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: KlausurenService, factory: KlausurenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _login_module_login_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-module/login.module */ "MV7R");
/* harmony import */ var _interaction_module_interaction_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interaction-module/interaction.module */ "cM3N");
/* harmony import */ var _user_interface_user_interface_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-interface/user-interface.component */ "ZU9A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _login_module_login_module__WEBPACK_IMPORTED_MODULE_10__["LoginModule"],
            _interaction_module_interaction_module__WEBPACK_IMPORTED_MODULE_11__["InteractionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _user_interface_user_interface_component__WEBPACK_IMPORTED_MODULE_12__["UserInterfaceComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _login_module_login_module__WEBPACK_IMPORTED_MODULE_10__["LoginModule"],
        _interaction_module_interaction_module__WEBPACK_IMPORTED_MODULE_11__["InteractionModule"]] }); })();


/***/ }),

/***/ "ZU9A":
/*!************************************************************!*\
  !*** ./src/app/user-interface/user-interface.component.ts ***!
  \************************************************************/
/*! exports provided: UserInterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInterfaceComponent", function() { return UserInterfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_module_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login-module/services/login.service */ "LTMn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _interaction_module_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interaction-module/components/header/header.component */ "+VyE");
/* harmony import */ var _interaction_module_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interaction-module/components/tabs/tabs.component */ "7AfM");






function UserInterfaceComponent_app_header_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
} }
function UserInterfaceComponent_app_tabs_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tabs");
} }
function UserInterfaceComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
} }
class UserInterfaceComponent {
    constructor(loginService) {
        this.loginService = loginService;
    }
    ngOnInit() {
    }
    isIPhoneCordovaApp() {
        if (document.location.protocol === 'file:' && navigator.userAgent.toLocaleLowerCase().indexOf('iphone') !== -1) {
            return true;
        }
        return false;
    }
}
UserInterfaceComponent.ɵfac = function UserInterfaceComponent_Factory(t) { return new (t || UserInterfaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_module_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
UserInterfaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserInterfaceComponent, selectors: [["app-user-interface"]], decls: 9, vars: 9, consts: [[1, "body"], [4, "ngIf"], [1, "router"], ["class", "ios-lower", 4, "ngIf"], [1, "ios-lower"]], template: function UserInterfaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserInterfaceComponent_app_header_1_Template, 1, 0, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserInterfaceComponent_app_tabs_5_Template, 1, 0, "app-tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserInterfaceComponent_div_7_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.loginService.loggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx.loginService.loggedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, ctx.loginService.loggedIn$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _interaction_module_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _interaction_module_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".body[_ngcontent-%COMP%]{\n    display:grid;\n    height: 100vh;\n    width: 100%;\n    grid-template-rows: 70px auto 70px;\n}\n\napp-header[_ngcontent-%COMP%]{\n        grid-row: 1;\n}\n\napp-tabs[_ngcontent-%COMP%]{\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 70px;\n}\n\n\n\n.ios-lower[_ngcontent-%COMP%]{\n  grid-row: 3;\n  width: 100%;\n  height: 100%;\n  background-color: #333333;\n}\n\n.router[_ngcontent-%COMP%]{\n    grid-row:2;\n}\n\n.cordova-ios[_ngcontent-%COMP%]{\n  display:grid;\n  height: 100vh;\n  width: 100%;\n  grid-template-rows: 70px auto 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItaW50ZXJmYWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxrQ0FBa0M7QUFDdEM7O0FBRUE7UUFDUSxXQUFXO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVk7QUFDZDs7QUFFQSx3QkFBd0I7O0FBRXhCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6InVzZXItaW50ZXJmYWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggYXV0byA3MHB4O1xufVxuXG5hcHAtaGVhZGVye1xuICAgICAgICBncmlkLXJvdzogMTtcbn1cblxuYXBwLXRhYnN7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4vKiBGaXhpbmcgYm90dG9tIG9uIGlPUyovXG5cbi5pb3MtbG93ZXJ7XG4gIGdyaWQtcm93OiAzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xufVxuXG4ucm91dGVye1xuICAgIGdyaWQtcm93OjI7XG59XG4uY29yZG92YS1pb3N7XG4gIGRpc3BsYXk6Z3JpZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCBhdXRvIDEwMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "cM3N":
/*!**********************************************************!*\
  !*** ./src/app/interaction-module/interaction.module.ts ***!
  \**********************************************************/
/*! exports provided: InteractionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionModule", function() { return InteractionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "7AfM");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "+VyE");
/* harmony import */ var _components_view_klausur_view_klausur_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/view-klausur/view-klausur.component */ "m4zX");
/* harmony import */ var _components_post_klausur_post_klausur_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/post-klausur/post-klausur.component */ "HQMW");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_dropdown_list_dropdown_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dropdown-list/dropdown-list.component */ "3OaD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class InteractionModule {
}
InteractionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: InteractionModule });
InteractionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function InteractionModule_Factory(t) { return new (t || InteractionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](InteractionModule, { declarations: [_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_view_klausur_view_klausur_component__WEBPACK_IMPORTED_MODULE_3__["ViewKlausurComponent"],
        _components_post_klausur_post_klausur_component__WEBPACK_IMPORTED_MODULE_4__["PostKlausurComponent"],
        _components_dropdown_list_dropdown_list_component__WEBPACK_IMPORTED_MODULE_11__["DropdownListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]], exports: [_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_view_klausur_view_klausur_component__WEBPACK_IMPORTED_MODULE_3__["ViewKlausurComponent"],
        _components_post_klausur_post_klausur_component__WEBPACK_IMPORTED_MODULE_4__["PostKlausurComponent"]] }); })();


/***/ }),

/***/ "m4zX":
/*!**************************************************************************************!*\
  !*** ./src/app/interaction-module/components/view-klausur/view-klausur.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ViewKlausurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewKlausurComponent", function() { return ViewKlausurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dropdown_list_dropdown_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown-list/dropdown-list.component */ "3OaD");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class ViewKlausurComponent {
    constructor() {
        this.studiengaenge = ['Wirtschaftsinformatik', 'Betriebswirtschaftslehre', 'Angewante Informatik'];
        this.semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'];
        this.moduls = ['PM2', 'IN2', 'SEA'];
    }
    ngOnInit() {
    }
    getKlausur() {
    }
}
ViewKlausurComponent.ɵfac = function ViewKlausurComponent_Factory(t) { return new (t || ViewKlausurComponent)(); };
ViewKlausurComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewKlausurComponent, selectors: [["app-view-klausur"]], decls: 9, vars: 3, consts: [[1, "body"], ["placeholder", "Studiengang", 3, "list"], ["placeholder", "Semester", 3, "list"], ["placeholder", "Modul", 3, "list"], ["mat-raised-button", "", "color", "primary", "disabled", "false", 1, "btn", 3, "click"], [1, "informationBox"], [1, "informationText"]], template: function ViewKlausurComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dropdown-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dropdown-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dropdown-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewKlausurComponent_Template_button_click_4_listener() { return ctx.getKlausur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Klausuren Anfordern");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Du findest deinen Studiengang, dein Semester oder dein Modul nicht wieder? Dann sind f\u00FCr diese wahrscheinlich noch keine Klausuren vorhanden. Sorry!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx.studiengaenge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx.semesters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx.moduls);
    } }, directives: [_dropdown_list_dropdown_list_component__WEBPACK_IMPORTED_MODULE_1__["DropdownListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".body[_ngcontent-%COMP%]{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n\n}\n\n.studiengang[_ngcontent-%COMP%]{\n    width: 70%;\n    display: flex;\n    justify-content: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.btn[_ngcontent-%COMP%]{\n    width: 70%;\n}\n\n.informationText[_ngcontent-%COMP%]{\n    font-style: italic;\n    color:rgb(105, 105, 105);\n    font-size: 12px;\n}\n\n.informationBox[_ngcontent-%COMP%]{\n    width: 70%;\n}\n\ndropdown-list[_ngcontent-%COMP%]{\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcta2xhdXN1ci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoidmlldy1rbGF1c3VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbn1cblxuLnN0dWRpZW5nYW5ne1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5idG57XG4gICAgd2lkdGg6IDcwJTtcbn1cbi5pbmZvcm1hdGlvblRleHR7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOnJnYigxMDUsIDEwNSwgMTA1KTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pbmZvcm1hdGlvbkJveHtcbiAgICB3aWR0aDogNzAlO1xufVxuZHJvcGRvd24tbGlzdHtcbiAgd2lkdGg6IDgwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_module_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-module/services/login.service */ "LTMn");


class AuthGuard {
    constructor(loginService) {
        this.loginService = loginService;
    }
    canActivate(route, state) {
        return this.loginService.loggedIn$;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_module_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_module_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-module/components/login/login.component */ "X0zH");
/* harmony import */ var _interaction_module_components_post_klausur_post_klausur_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interaction-module/components/post-klausur/post-klausur.component */ "HQMW");
/* harmony import */ var _login_module_components_register_email_send_register_email_send_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-module/components/register-email-send/register-email-send.component */ "K8jm");
/* harmony import */ var _login_module_components_register_password_register_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-module/components/register-password/register-password.component */ "KJ4f");
/* harmony import */ var _login_module_components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-module/components/register/register.component */ "yz5m");
/* harmony import */ var _interaction_module_components_view_klausur_view_klausur_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interaction-module/components/view-klausur/view-klausur.component */ "m4zX");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: 'view', component: _interaction_module_components_view_klausur_view_klausur_component__WEBPACK_IMPORTED_MODULE_6__["ViewKlausurComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'post', component: _interaction_module_components_post_klausur_post_klausur_component__WEBPACK_IMPORTED_MODULE_2__["PostKlausurComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'register', component: _login_module_components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'register/send', component: _login_module_components_register_email_send_register_email_send_component__WEBPACK_IMPORTED_MODULE_3__["RegisterEmailSendComponent"] },
    { path: 'register/password', component: _login_module_components_register_password_register_password_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPasswordComponent"] },
    { path: '**', component: _login_module_components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];
;
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yz5m":
/*!************************************************************************!*\
  !*** ./src/app/login-module/components/register/register.component.ts ***!
  \************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_e_mail_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/e-mail-controller.service */ "DePx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/register.service */ "CdGR");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function RegisterComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nur HAW E-Mail Adressen erlaubt. Die Endung @haw-hamburg.de ist schon vorgegeben. Bitte gebe diese nicht noch mit an");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(emailService, router, register) {
        this.emailService = emailService;
        this.router = router;
        this.register = register;
        this.emailAddress = "";
        this.validationFailed = false;
    }
    ngOnInit() {
    }
    onClickRegister() {
        if (this.emailAddress.includes('@')) {
            this.validationFailed = true;
            return;
        }
        console.log('emailServiceAufrufen');
        this.emailService.postEmailToService(this.emailAddress + '@haw-hamburg.de');
        this.router.navigate(['register/send']);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_e_mail_controller_service__WEBPACK_IMPORTED_MODULE_1__["EMailControllerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 31, vars: 2, consts: [[1, "body"], [1, "logo"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 194 85.5", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 194 85.5"], ["type", "text/css"], ["x", "0", "y", "0.1", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "0", "y", "13.4", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "0", "y", "26.7", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "0", "y", "40.1", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "13.3", "y", "6.7", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "13.3", "y", "20.1", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "13.3", "y", "33.4", "width", "36.7", "height", "3.3", 1, "st0"], ["x", "13.3", "y", "46.7", "width", "36.7", "height", "3.3", 1, "st0"], ["d", "M121.8,0.1h-3.5l-2.1,9.1c-0.1,0.5-0.3,1.3-0.5,2.1c-0.2,0.9-0.3,1.6-0.4,2.2c-0.1-0.6-0.2-1.4-0.4-2.2\nc-0.2-0.9-0.3-1.5-0.4-1.9l-2.4-9.3h-3.3l-2.4,9.3c-0.1,0.5-0.3,1.2-0.5,2.1c-0.2,0.9-0.3,1.6-0.3,2c-0.2-1.2-0.4-2.7-0.8-4.4\nl-2.1-9.1h-3.5l4.2,16.7h4l2.2-8.7c0.1-0.4,0.2-1,0.4-1.9c0.2-0.9,0.3-1.6,0.3-2c0,0.3,0.1,1,0.3,2c0.2,1,0.3,1.6,0.4,1.9l2.3,8.7h4\nL121.8,0.1z M87.4,9.8c1.2-3.8,1.9-6.2,2.2-7.2c0.1,0.3,0.2,0.6,0.3,1.1c0.1,0.5,0.8,2.5,1.9,6.1L87.4,9.8L87.4,9.8z M97.6,16.7\nL91.7,0h-4.3l-5.9,16.7h3.8l1.2-4h6.1l1.2,4H97.6z M77,0.1h-3.5v6.5h-6.6V0.1h-3.5v16.7h3.5V9.5h6.6v7.2H77C77,16.7,77,0.1,77,0.1z", 1, "st0"], ["d", "M187,37h3.2v3.5c-0.8,0.2-1.5,0.2-2.2,0.2c-1.4,0-2.5-0.5-3.2-1.4c-0.7-1-1.1-2.3-1.1-4.1\nc0-1.7,0.5-3.1,1.4-4.1c0.9-1,2.1-1.5,3.7-1.5c1.3,0,2.6,0.3,3.8,0.9l1.2-2.8c-1.6-0.7-3.2-1-4.9-1c-2.7,0-4.9,0.8-6.4,2.3\nc-1.5,1.5-2.3,3.6-2.3,6.3c0,2.8,0.7,4.9,2,6.4c1.3,1.5,3.2,2.2,5.8,2.2c1,0,2-0.1,2.9-0.2c0.9-0.1,2-0.4,3-0.7v-8.6H187L187,37\nL187,37z M169,37l4,6.4h3.9c-0.8-1.1-2.4-3.5-4.9-7.3c1-0.4,1.8-1,2.3-1.8c0.5-0.8,0.8-1.6,0.8-2.6c0-1.7-0.5-2.9-1.6-3.8\nc-1.1-0.8-2.8-1.2-5-1.2h-4.9v16.7h3.5V37H169z M167.1,29.7h1.1c1.1,0,2,0.2,2.5,0.5c0.5,0.3,0.8,0.9,0.8,1.7c0,0.8-0.3,1.4-0.8,1.8\nc-0.5,0.4-1.4,0.6-2.5,0.6h-1.1V29.7z M153.9,26.8v10.2c0,1.3-0.3,2.2-0.8,2.8c-0.5,0.6-1.4,0.9-2.5,0.9c-1.2,0-2-0.3-2.6-0.9\nc-0.5-0.6-0.8-1.5-0.8-2.8V26.8h-3.5v10.7c0,1.9,0.6,3.4,1.8,4.5c1.2,1.1,2.8,1.6,5,1.6c1.4,0,2.7-0.2,3.7-0.7\nc1-0.5,1.8-1.2,2.4-2.1c0.6-0.9,0.8-2,0.8-3.2V26.8H153.9z M131.9,36.2c2,0,3,0.7,3,2.1c0,0.8-0.2,1.3-0.7,1.7\nc-0.5,0.4-1.2,0.6-2.2,0.6h-2.3v-4.3L131.9,36.2L131.9,36.2z M129.7,29.7h1.9c1,0,1.7,0.1,2.2,0.4c0.5,0.3,0.7,0.7,0.7,1.4\nc0,0.7-0.2,1.2-0.6,1.5c-0.4,0.3-1.1,0.4-2.1,0.4h-2.1V29.7z M126.1,43.4h6.2c1.9,0,3.4-0.4,4.5-1.3c1.1-0.9,1.6-2,1.6-3.6\nc0-1.1-0.2-1.9-0.7-2.6c-0.5-0.6-1.2-1.1-2.3-1.3v-0.1c0.8-0.1,1.4-0.5,1.9-1.2c0.5-0.6,0.7-1.5,0.7-2.4c0-1.5-0.5-2.5-1.6-3.2\nc-1.1-0.7-2.8-1-5.1-1h-5.2V43.4z M112.4,43.4l4.3-13h0.1c-0.1,2.1-0.1,3.4-0.2,3.9c0,0.5,0,0.9,0,1.3v7.9h3.3V26.8h-4.8l-4.2,12.7\nh-0.1l-3.9-12.7h-4.8v16.7h3.2v-7.7c0-0.9-0.1-2.7-0.2-5.3h0.1l4,13.1H112.4z M87.4,36.5c1.2-3.8,1.9-6.2,2.2-7.2\nc0.1,0.3,0.2,0.6,0.3,1.1c0.1,0.5,0.8,2.5,1.9,6.1L87.4,36.5L87.4,36.5z M97.6,43.4l-5.9-16.7h-4.3l-5.9,16.7h3.8l1.2-4h6.1l1.2,4\nH97.6z M77,26.8h-3.5v6.5h-6.6v-6.5h-3.5v16.7h3.5v-7.2h6.6v7.2H77C77,43.4,77,26.8,77,26.8z", 1, "st0"], ["x", "63.2", "y", "54.7", "width", "53", "height", "3.3", 1, "st0"], ["transform", "matrix(1.1183 0 0 1 70.1475 74.959)", 1, "st0", "st1", "st2"], [1, "disclaimer"], [1, "emailField"], [1, "loginInput"], ["id", "email", "matInput", "", "placeholder", "Deine HAW E-Mail", "required", "", 3, "ngModel", "ngModelChange"], ["class", "alert", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 2, "width", "80vw", "margin-top", "4vh", 3, "click"], [1, "alert"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "style", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n.st0{fill:#ffffff;}\n.st1{font-family:'OpenSans-Regular';}\n.st2{font-size:12px;}\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "rect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "text", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "KLAUSUREN APP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Aus Datenschutzgr\u00FCnden ist das Registrieren nur mit einer g\u00FCltigen HAW Email-Adresse m\u00F6glich. Bitte geben Sie ihre Email Adresse ein und warten Sie auf unsere Best\u00E4tigungsemail.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_25_listener($event) { return ctx.emailAddress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "@haw-hamburg.de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_29_listener() { return ctx.onClickRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Registrieren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validationFailed);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".body[_ngcontent-%COMP%]{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}   \n\n.logo[_ngcontent-%COMP%]{\n    height: 17vh;\n    width: 80vw;\n    background-color: #004C99;\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}   \n\nsvg[_ngcontent-%COMP%]{\n    width: 70vw;\n}   \n\n.disclaimer[_ngcontent-%COMP%]{\n    margin-top: 2vh;\n    font-size: 0.7rem;\n    width: 80vw;\n    height: 15vh;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-style: italic;\n}   \n\n.emailField[_ngcontent-%COMP%]{\n    display: flex;\n\n}   \n\n.alert[_ngcontent-%COMP%]{\n    color: red;\n    font-size: 0.8rem;\n    width: 80vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdJQUF3STtJQUN4SSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsV0FBVztBQUNmIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keXtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0gICBcblxuLmxvZ297XG4gICAgaGVpZ2h0OiAxN3ZoO1xuICAgIHdpZHRoOiA4MHZ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRDOTk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnN2Z3tcbiAgICB3aWR0aDogNzB2dztcbn1cbi5kaXNjbGFpbWVye1xuICAgIG1hcmdpbi10b3A6IDJ2aDtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB3aWR0aDogODB2dztcbiAgICBoZWlnaHQ6IDE1dmg7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5lbWFpbEZpZWxke1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbn1cblxuLmFsZXJ0e1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgd2lkdGg6IDgwdnc7XG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
const bootstrap = () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
};
if (typeof window['cordova'] !== 'undefined') {
    document.addEventListener('deviceready', bootstrap, false);
}
else {
    bootstrap();
}


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map