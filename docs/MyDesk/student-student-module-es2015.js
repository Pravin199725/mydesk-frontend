(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-student-module"],{

/***/ "./src/app/services/api/api.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/storage.service */ "./src/app/services/storage/storage.service.ts");






class ApiService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    get(endpoint, params, headers, options) {
        if (headers || params) {
            let httpOptions = Object.assign({ params: this.getHttpParams(params), headers: this.getHttpHeaders(headers) }, options);
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL + '/' + endpoint, httpOptions);
        }
        else {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL + '/' + endpoint);
        }
    }
    post(endpoint, body, headers) {
        const httpOptions = { headers: this.getHttpHeaders(headers) };
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL + '/' + endpoint, this.getHttpParams(body), httpOptions);
    }
    postByBody(endpoint, body, headers) {
        // const httpOptions = {headers: this.getHttpHeaders(headers)};
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL + '/' + endpoint, body);
    }
    put(endpoint, body, headers) {
        const httpOptions = { headers: this.getHttpHeaders(headers) };
        return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL + '/' + endpoint, body, httpOptions);
    }
    patch(endpoint, body, headers) {
        const httpOptions = { headers: this.getHttpHeaders(headers) };
        return this.http.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL + '/' + endpoint, body, httpOptions);
    }
    getHttpHeaders(headers = {}) {
        var _a;
        if (!headers || !headers.Authorization) {
            headers.Authorization = 'token ' + ((_a = this.storageService.getData('userData')) === null || _a === void 0 ? void 0 : _a.key);
        }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headers);
    }
    getHttpParams(params) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.keys(params).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        });
        return httpParams;
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ "./src/app/services/api/api.service.ts");



class AuthService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    login(userInfo) {
        return this.apiService.postByBody('auth/login/', userInfo);
    }
    registration(userInfo) {
        return this.apiService.post('auth/registration/', userInfo);
    }
    getClasses() {
        return this.apiService.get('classes/', {});
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student/assignment/assignment.component.ts":
/*!************************************************************!*\
  !*** ./src/app/student/assignment/assignment.component.ts ***!
  \************************************************************/
/*! exports provided: AssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentComponent", function() { return AssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mobileView/mobile-view.service */ "./src/app/services/mobileView/mobile-view.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../discussions/discussions.component */ "./src/app/student/discussions/discussions.component.ts");






function AssignmentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Quadratic Equation Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Short Discription About the Assignment In that structure of assignment Short Discription About the Assignment In that structure of assignment Short Discription About the Assignment In that structure of assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Due Date: 06th November 2020 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quadratic Equation.PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Choose file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-discussions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssignmentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Quadratic Equation Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Short Discription About the Assignment In that structure of assignment Short Discription About the Assignment In that structure of assignment Short Discription About the Assignment In that structure of assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Due Date: 06th November 2020 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quadratic Equation.PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Choose file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-discussions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AssignmentComponent {
    constructor(router, responsiveService) {
        this.router = router;
        this.responsiveService = responsiveService;
    }
    ngOnInit() {
        this.onResize();
        this.responsiveService.checkWidth();
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobileView = isMobile;
        });
    }
    closeGrade() {
        this.router.navigate([`/student/course`]);
    }
}
AssignmentComponent.ɵfac = function AssignmentComponent_Factory(t) { return new (t || AssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"])); };
AssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentComponent, selectors: [["app-assignment"]], decls: 2, vars: 2, consts: [["class", "m-5", "style", "background: white;", 4, "ngIf"], ["class", "m-5", "style", "background: white; padding-bottom: 60px;", 4, "ngIf"], [1, "m-5", 2, "background", "white"], [1, "card"], [1, "card-header", "d-flex", 2, "font-size", "20px", "text-align", "left", "background-color", "#1B2D3F", "color", "#ffffff", "padding-left", "50px"], ["height", "25", "src", "../../../assets/img/edit (1).svg", "alt", "img", 1, "m-3"], [2, "padding-top", "10px", "padding-left", "10px"], [1, "card-body", 2, "font-size", "15px", "padding", "50px"], [1, "fw-700"], [1, "card-footer", 2, "padding-right", "50px", "padding-left", "50px", "background-color", "#ffffff", "border", "none"], [1, "d-flex"], ["type", "button", 1, "btn"], ["height", "25", "src", "../../../assets/img/download-to-storage-drive.svg", "alt", "img"], ["href", "", 2, "font-size", "15px", "font-weight", "bold", "padding-left", "10px", "padding-top", "10px", "color", "#000000"], [1, "card-footer"], [1, "input-group"], [1, "custom-file"], ["type", "file", "id", "inputGroupFile04", 1, "custom-file-input"], ["for", "inputGroupFile04", 1, "custom-file-label"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 2, "background-color", "#1B2D3F", "color", "#ffffff", "padding-left", "40px", "padding-right", "40px"], ["id", "accordionExample", 1, "accordion", "pt-3"], ["id", "headingOne", 1, "card-header", 2, "background-color", "#1B2D3F"], ["data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "mb-0", "d-flex"], [1, "courseMonth"], ["height", "20", "src", "../../../assets/img/chevron-arrow-down.svg", "alt", "img", 1, "m-2"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse"], [1, "card-body"], [1, "cardDetail"], [1, "m-5", 2, "background", "white", "padding-bottom", "60px"]], template: function AssignmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AssignmentComponent_div_0_Template, 37, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AssignmentComponent_div_1_Template, 37, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_4__["DiscussionsComponent"]], styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\n.courseMonth[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 100%;\n  text-align: left;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zdHVkZW50L2Fzc2lnbm1lbnQvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFxzYXNzXFxiYXNlXFxfbWl4aW4uc2NzcyIsIi4uLy4uL2FwcC9zdHVkZW50L2Fzc2lnbm1lbnQvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFxzYXNzXFxiYXNlXFxfY29sb3JzLnNjc3MiLCIuLi8uLi9hcHAvc3R1ZGVudC9hc3NpZ25tZW50L0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvYXNzaWdubWVudC9hc3NpZ25tZW50LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvYXNzaWdubWVudC9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXC4uXFxhcHBcXHN0dWRlbnRcXGFzc2lnbm1lbnRcXGFzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7Ozs7Ozs7O0NBQUE7QUFXQTs7Ozs7Ozs7OztDQUFBO0FDWEk7RUFDSSxjQ0ZTO0FDb0JqQjtBRmhCSTtFQUNJLGNDRFU7QUNtQmxCO0FGaEJJO0VBQ0ksY0NMSztBQ3VCYjtBRmhCSTtFQUNJLGNDTFc7QUN1Qm5CO0FGWkk7RUFDSSx5QkNsQlM7QUNpQ2pCO0FGYkk7RUFDSSx5QkNwQlM7QUNtQ2pCO0FGYkk7RUFDSSx5QkNwQlU7QUNtQ2xCO0FGYkk7RUFDSSx5QkN4Qks7QUN1Q2I7QUZiSTtFQUNJLHlCQ3hCVztBQ3VDbkI7QUMzQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRDhDSiIsImZpbGUiOiIuLi8uLi9hcHAvc3R1ZGVudC9hc3NpZ25tZW50L2Fzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIE1FRElBIFFVRVJZIE1BTkFHRVJcblxuLypcbjBweCAtIDM2MHB4Olx0XHRYUyBQaG9uZVxuMzYwcHggLSA1NzZweDogXHRcdFBob25lXG41NzZweCAtIDc2OHB4OiBcdFx0VGFibGV0IFBvcnRyYWl0XG43NjhweCAtIDk5MnB4Olx0XHRUYWJsZXQgTGFuZHNjYXBlXG45OTJweCAtIDEyMDBweDogXHRkZXNrdG9wXG4xMjAwcHggLSAxOTIwcHg6XHRub3JtYWwgTWVkaWEgcXVlcmllc1xuMTkyMHB4IGFuZCB1cDogIFx0RnVsbCBIRFxuKi9cblxuXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuXG5AbWl4aW4gcmVzcG9uZE1heCgkYnJlYWtwb2ludCkge1xuXHRAaWYgJGJyZWFrcG9pbnQgPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuICB9XG4gIEBpZiAkYnJlYWtwb2ludCA9PSBoZC1kZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTBlbSkgeyBAY29udGVudCB9OyAvLzE0NDBweFxuICB9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5AbWl4aW4gcmVzcG9uZE1pbigkYnJlYWtwb2ludG1pbikge1xuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5cblxuXG4kcmVtLWJhc2VsaW5lOiAxNnB4ICFkZWZhdWx0O1xuJHJlbS1mYWxsYmFjazogZmFsc2UgIWRlZmF1bHQ7XG4kcmVtLXB4LW9ubHk6IGZhbHNlICFkZWZhdWx0O1xuXG5AZnVuY3Rpb24gcmVtLXNlcGFyYXRvcigkbGlzdCwgJHNlcGFyYXRvcjogZmFsc2UpIHtcbiAgQGlmICRzZXBhcmF0b3IgPT0gXCJjb21tYVwiIG9yICRzZXBhcmF0b3IgPT0gXCJzcGFjZVwiIHtcbiAgICBAcmV0dXJuIGFwcGVuZCgkbGlzdCwgbnVsbCwgJHNlcGFyYXRvcik7XG4gIH0gXG4gIFxuICBAaWYgZnVuY3Rpb24tZXhpc3RzKFwibGlzdC1zZXBhcmF0b3JcIikgPT0gdHJ1ZSB7XG4gICAgQHJldHVybiBsaXN0LXNlcGFyYXRvcigkbGlzdCk7XG4gIH1cblxuICAvLyBsaXN0LXNlcGFyYXRvciBwb2x5ZmlsbCBieSBIdWdvIEdpcmF1ZGVsIChodHRwczovL3Nhc3MtY29tcGF0aWJpbGl0eS5naXRodWIuaW8vI2xpc3Rfc2VwYXJhdG9yX2Z1bmN0aW9uKVxuICAkdGVzdC1saXN0OiAoKTtcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xuICAgICR0ZXN0LWxpc3Q6IGFwcGVuZCgkdGVzdC1saXN0LCAkaXRlbSwgc3BhY2UpO1xuICB9XG5cbiAgQHJldHVybiBpZigkdGVzdC1saXN0ID09ICRsaXN0LCBzcGFjZSwgY29tbWEpO1xufVxuXG5AbWl4aW4gcmVtLWJhc2VsaW5lKCR6b29tOiAxMDAlKSB7XG4gIGZvbnQtc2l6ZTogJHpvb20gLyAxNnB4ICogJHJlbS1iYXNlbGluZTtcbn1cblxuQGZ1bmN0aW9uIHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlcy4uLikge1xuICAkcmVzdWx0OiAoKTtcbiAgJHNlcGFyYXRvcjogcmVtLXNlcGFyYXRvcigkdmFsdWVzKTtcbiAgXG4gIEBlYWNoICR2YWx1ZSBpbiAkdmFsdWVzIHtcbiAgICBAaWYgdHlwZS1vZigkdmFsdWUpID09IFwibnVtYmVyXCIgYW5kIHVuaXQoJHZhbHVlKSA9PSBcInJlbVwiIGFuZCAkdG8gPT0gXCJweFwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAxcmVtICogJHJlbS1iYXNlbGluZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicHhcIiBhbmQgJHRvID09IFwicmVtXCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvICRyZW0tYmFzZWxpbmUgKiAxcmVtLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcImxpc3RcIiB7XG4gICAgICAkdmFsdWUtc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSk7XG4gICAgICAkdmFsdWU6IHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlLi4uKTtcbiAgICAgICR2YWx1ZTogcmVtLXNlcGFyYXRvcigkdmFsdWUsICR2YWx1ZS1zZXBhcmF0b3IpO1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKGxlbmd0aCgkcmVzdWx0KSA9PSAxLCBudGgoJHJlc3VsdCwgMSksICRyZXN1bHQpO1xufVxuXG5AZnVuY3Rpb24gcmVtKCR2YWx1ZXMuLi4pIHtcbiAgQGlmICRyZW0tcHgtb25seSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgfVxufVxuXG5AbWl4aW4gcmVtKCRwcm9wZXJ0aWVzLCAkdmFsdWVzLi4uKSB7XG4gIEBpZiB0eXBlLW9mKCRwcm9wZXJ0aWVzKSA9PSBcIm1hcFwiIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gbWFwLWtleXMoJHByb3BlcnRpZXMpIHtcbiAgICAgIEBpbmNsdWRlIHJlbSgkcHJvcGVydHksIG1hcC1nZXQoJHByb3BlcnRpZXMsICRwcm9wZXJ0eSkpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgIEBpZiAkcmVtLWZhbGxiYWNrIG9yICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocHgsICR2YWx1ZXMuLi4pO1xuICAgICAgfVxuICAgICAgQGlmIG5vdCAkcmVtLXB4LW9ubHkge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1peGluIGNvbnRlbnQtY2VudGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn0iLCJAaW1wb3J0IFwiLi4vYmFzZS92YXJpYWJsZXNcIjtcblxuLnRleHQge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrO1xuICAgIH1cbiAgICAmLWdyZXkge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG4gICBcbn1cblxuLmJnIHtcbiAgICAmLXByaW1hcnkxIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLXByaW1hcnkyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkyO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xuICAgIH1cbiAgICAmLWdyZXktbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG59IiwiLy8gQ29sb3JzXG5cbiRjb2xvci1wcmltYXJ5MTogcmdiYSgyNyw0NSw2MywxKTtcbiRjb2xvci1wcmltYXJ5MjogcmdiYSg1Myw3MCw4OCwxKTtcblxuJGNvbG9yLWdyZXk6IHJnYmEoMTAzLCAxMDMsIDEwMywgMSk7XG4kY29sb3ItZ3JleS1kYXJrOiByZ2JhKDUyLCA1OCwgNjQsIDEpO1xuXG4kY29sb3ItZ3JleS1saWdodDogI0VCRUNGMDtcblxuJGNvbG9yLXN1Y2Nlc3M6IHJnYmEoODIsIDIwOSwgMTQ1LCAxKTtcbiRjb2xvci1lcnJvcjogcmdiYSgyMzQsIDg1LCA4NSwgMSk7XG5cbi8vIEZvbnRzXG5cbiR0aGluOiAxMDA7XG4kZXh0cmEtbGlnaHQ6IDIwMDtcbiRsaWdodDogMzAwO1xuJHJlZ3VsYXItNDAwOiA0MDA7XG4kbWVkaXVtOiA1MDA7XG4kc2VtaS1ib2xkOiA2MDA7XG4kYm9sZDogNzAwO1xuJGV4dHJhLWJvbGQ6IDgwMDtcbiRibGFjay05MDA6IDkwMDsiLCIvKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuLypcbiRicmVha3BvaW50IGFyZ3VlbWVudCBjaG9pY2VzOlxuLSB4cy1waG9uZVxuLSBwaG9uZVxuLSB0YWItcG9ydFxuLSB0YWItbGFuZFxuLSBkZXNrdG9wXG4tIGZ1bGwtaGRcblxuMWVtID0gMTZweFxuKi9cbi50ZXh0LXByaW1hcnkxIHtcbiAgY29sb3I6ICMxYjJkM2Y7XG59XG4udGV4dC1ncmV5LWRhcmsge1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbi50ZXh0LWdyZXkge1xuICBjb2xvcjogIzY3Njc2Nztcbn1cbi50ZXh0LWdyZXktbGlnaHQge1xuICBjb2xvcjogI0VCRUNGMDtcbn1cblxuLmJnLXByaW1hcnkxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmQzZjtcbn1cbi5iZy1wcmltYXJ5MiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NTg7XG59XG4uYmctZ3JleS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3Njc2Nztcbn1cbi5iZy1ncmV5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUNGMDtcbn1cblxuLmNvdXJzZU1vbnRoIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmZmZmY7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL2Jhc2UvbWl4aW5cIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL2Jhc2UvY29sb3JzXCI7XHJcblxyXG5cclxuLmNvdXJzZU1vbnRoIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59IFxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assignment',
                templateUrl: './assignment.component.html',
                styleUrls: ['./assignment.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student/course/course.component.ts":
/*!****************************************************!*\
  !*** ./src/app/student/course/course.component.ts ***!
  \****************************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mobileView/mobile-view.service */ "./src/app/services/mobileView/mobile-view.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _common_dot_progress_bar_dot_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/dot-progress-bar/dot-progress-bar.component */ "./src/app/common/dot-progress-bar/dot-progress-bar.component.ts");
/* harmony import */ var _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../discussions/discussions.component */ "./src/app/student/discussions/discussions.component.ts");
/* harmony import */ var _grade_grade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../grade/grade.component */ "./src/app/student/grade/grade.component.ts");
/* harmony import */ var _live_live_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../live/live.component */ "./src/app/student/live/live.component.ts");
/* harmony import */ var _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assignment/assignment.component */ "./src/app/student/assignment/assignment.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");













function CourseComponent_div_0_button_46_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 57);
} }
function CourseComponent_div_0_button_46_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 58);
} }
function CourseComponent_div_0_button_46_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 59);
} }
function CourseComponent_div_0_button_46_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_button_46_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_button_46_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_0_button_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.goToCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CourseComponent_div_0_button_46_img_3_Template, 1, 0, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CourseComponent_div_0_button_46_img_4_Template, 1, 0, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CourseComponent_div_0_button_46_img_5_Template, 1, 0, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CourseComponent_div_0_button_46_span_11_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CourseComponent_div_0_button_46_span_12_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r7.type == "Lecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r7.type == "Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r7.type == "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r7.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r7.tag == "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r7.tag == "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r7.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Uploaded on: ", list_r7.uploaded, "");
} }
function CourseComponent_div_0_div_64__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_div_64__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_div_64__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_div_64_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_div_64_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CourseComponent_div_0_div_64__svg_svg_3_Template, 2, 0, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CourseComponent_div_0_div_64__svg_svg_4_Template, 3, 0, "svg", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CourseComponent_div_0_div_64__svg_svg_5_Template, 4, 0, "svg", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CourseComponent_div_0_div_64_span_10_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CourseComponent_div_0_div_64_span_11_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "rect", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pattern", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "use", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "image", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r15.type == "Lecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r15.type == "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r15.type == "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r15.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r15.type == "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r15.type == "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r15.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Uploaded on: ", list_r15.uploaded, "");
} }
function CourseComponent_div_0_div_82__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_div_82__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_div_82__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_div_82_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_div_82_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CourseComponent_div_0_div_82__svg_svg_3_Template, 2, 0, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CourseComponent_div_0_div_82__svg_svg_4_Template, 3, 0, "svg", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CourseComponent_div_0_div_82__svg_svg_5_Template, 4, 0, "svg", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CourseComponent_div_0_div_82_span_10_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CourseComponent_div_0_div_82_span_11_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "rect", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pattern", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "use", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "image", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r21.type == "Lecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r21.type == "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r21.type == "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r21.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r21.type == "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r21.type == "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r21.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Uploaded on: ", list_r21.uploaded, "");
} }
function CourseComponent_div_0_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Maths");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mr.Kale");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Classwork");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Discussion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Grade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " October ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-dot-progress-bar", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_0_Template_span_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.handleWeekChange("left"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " <");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_0_Template_span_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.handleWeekChange("right"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CourseComponent_div_0_button_46_Template, 20, 8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " November ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-dot-progress-bar", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_0_Template_span_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.handleWeekChange("left"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " <");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_0_Template_span_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.handleWeekChange("right"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, CourseComponent_div_0_div_64_Template, 23, 8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " December ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-dot-progress-bar", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_0_Template_span_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.handleWeekChange("left"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " <");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_0_Template_span_click_80_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.handleWeekChange("right"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, CourseComponent_div_0_div_82_Template, 23, 8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, CourseComponent_div_0_div_83_Template, 2, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "app-discussions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "app-grade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "app-live");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weekLists", ctx_r0.weekLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.currentWeek.week, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cousesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weekLists", ctx_r0.weekLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.currentWeek.week, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cousesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weekLists", ctx_r0.weekLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.currentWeek.week, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cousesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.openGradeView);
} }
function CourseComponent_div_1_div_32_button_8_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 118);
} }
function CourseComponent_div_1_div_32_button_8_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 119);
} }
function CourseComponent_div_1_div_32_button_8_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 120);
} }
function CourseComponent_div_1_div_32_button_8_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_1_div_32_button_8_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_1_div_32_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_1_div_32_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r45.goToCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CourseComponent_div_1_div_32_button_8_img_3_Template, 1, 0, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CourseComponent_div_1_div_32_button_8_img_4_Template, 1, 0, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CourseComponent_div_1_div_32_button_8_img_5_Template, 1, 0, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CourseComponent_div_1_div_32_button_8_span_11_Template, 2, 0, "span", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CourseComponent_div_1_div_32_button_8_span_12_Template, 2, 0, "span", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r39.type == "Lecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r39.type == "Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r39.type == "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r39.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r39.tag == "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r39.tag == "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r39.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Uploaded on: ", list_r39.uploaded, "");
} }
function CourseComponent_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_1_div_32_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.handleWeekChange("left"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " <");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_1_div_32_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.handleWeekChange("right"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CourseComponent_div_1_div_32_button_8_Template, 21, 8, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wlist_r37 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", wlist_r37.week, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r34.cousesList);
} }
function CourseComponent_div_1_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Title of course ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This is short discription");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Uploaded on: 5th June");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "rect", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "pattern", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "use", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "image", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_1_div_68__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_1_div_68__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_1_div_68__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_1_div_68_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_1_div_68_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CourseComponent_div_1_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CourseComponent_div_1_div_68__svg_svg_3_Template, 2, 0, "svg", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CourseComponent_div_1_div_68__svg_svg_4_Template, 3, 0, "svg", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CourseComponent_div_1_div_68__svg_svg_5_Template, 4, 0, "svg", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CourseComponent_div_1_div_68_span_10_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CourseComponent_div_1_div_68_span_11_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "rect", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "pattern", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "use", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "image", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r51.type == "Lecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r51.type == "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r51.type == "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r51.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r51.type == "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r51.type == "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r51.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Uploaded on: ", list_r51.uploaded, "");
} }
const _c0 = function (a0) { return { "fixed-top": a0 }; };
function CourseComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Computer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Classwork");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Grade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " October ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-dot-progress-bar", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CourseComponent_div_1_div_32_Template, 9, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " November ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-dot-progress-bar", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_1_Template_span_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.handleWeekChange("left"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " <");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_1_Template_span_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.handleWeekChange("right"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CourseComponent_div_1_div_50_Template, 21, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " December ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "app-dot-progress-bar", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_1_Template_span_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.handleWeekChange("left"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " <");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseComponent_div_1_Template_span_click_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.handleWeekChange("right"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, CourseComponent_div_1_div_68_Template, 23, 8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "app-discussions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "app-grade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "app-live");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "app-footer", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r1.isMobileView));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weekLists", ctx_r1.weekLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.weekLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weekLists", ctx_r1.weekLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.currentWeek.week, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cousesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weekLists", ctx_r1.weekLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.currentWeek.week, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cousesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "student");
} }
function CourseComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CourseComponent {
    constructor(router, responsiveService) {
        this.router = router;
        this.responsiveService = responsiveService;
        this.cousesList = [
            {
                title: 'Lecture: Maths',
                msg: 'This is short description of Lecture this paragraph for the testing of overflow text in this div',
                uploaded: '5th June ',
                type: 'Lecture',
            },
            {
                title: 'Assignment - Maths with differential',
                msg: 'This is short description of Lecture this paragraph for the testing of overflow text in this div',
                uploaded: '5th June ',
                type: 'Assignment',
                tag: 'Upcoming',
            },
            {
                title: 'Quiz - Quadratic Equation',
                msg: 'This is short description of Lecture this paragraph for the testing of overflow text in this div jahdj fkhasd hasjdgh fgsahfadh udafiuahsdfg uaisd asduiasgu  adhiugasdiuc uduias ajdhskAHDIJiajd kansdkaIO',
                uploaded: '5th June ',
                type: 'Quiz',
                tag: 'Overdue',
            }
        ];
        this.weekLists = [{
                id: 1,
                week: '1st - 3rd',
                status: 'active',
                isCurrent: false
            }, {
                id: 2,
                week: '4th - 10th',
                status: 'active',
                isCurrent: false
            }, {
                id: 3,
                week: '11th - 17th',
                status: 'active',
                isCurrent: true
            }, {
                id: 4,
                week: '18th - 24th',
                status: 'inactive',
                isCurrent: false
            }, {
                id: 5,
                week: '25th - 31th',
                status: 'inactive',
                isCurrent: false
            }];
        this.currentWeek = this.weekLists[2];
        // const scrollFunction = this.scroll.bind(this);
        // window.onscroll = function() {
        //   scrollFunction()
        // };
    }
    ngOnInit() {
        this.onResize();
        this.responsiveService.checkWidth();
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobileView = isMobile;
        });
    }
    goToCourse() {
        this.router.navigate([`/student/lecture`]);
    }
    goBack() {
        this.router.navigate([`/student/home`]);
    }
    openGrade() {
        this.openGradeView = true;
    }
    scroll() {
        // if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 150) {
        //   document.getElementById("couse-header").classList.add('d-none');
        // } else {
        //   document.getElementById("couse-header").classList.remove('d-none');
        // }
    }
    handleWeekChange(direction) {
        const currentWeekIndex = this.weekLists.findIndex(v => v.id === this.currentWeek.id);
        if (direction === 'left' && this.weekLists[currentWeekIndex - 1]) {
            this.weekLists[currentWeekIndex].isCurrent = false;
            this.weekLists[currentWeekIndex - 1].isCurrent = true;
            this.currentWeek = this.weekLists[currentWeekIndex - 1];
        }
        else if (direction === 'right' && this.weekLists[currentWeekIndex + 1]) {
            this.weekLists[currentWeekIndex].isCurrent = false;
            this.weekLists[currentWeekIndex + 1].isCurrent = true;
            this.currentWeek = this.weekLists[currentWeekIndex + 1];
        }
    }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"])); };
CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["app-course"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["style", "background: white;", 4, "ngIf"], ["class", "m-3", 4, "ngIf"], [1, "fixed-top"], [1, "wrapper", 2, "margin-top", "47px"], [1, "fixed-sidebar"], ["id", "content", 1, "courseContent"], [1, "couse-header", 2, "background", "#354658", "height", "180px"], ["id", "couse-header", 1, "text-center"], [1, "courseName"], [1, "courseTeacher"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#classwork", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-toggle", "tab", "href", "#discussion", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["id", "contact-tab", "data-toggle", "tab", "href", "#grade", "role", "tab", "aria-controls", "contact", "aria-selected", "false", 1, "nav-link"], ["id", "contact-tab", "data-toggle", "tab", "href", "#live", "role", "tab", "aria-controls", "contact", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "classwork", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "courseMonths", "active"], ["id", "accordionExample", 1, "accordion", "p-2"], [1, "card"], ["id", "headingOne", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "mb-0", "d-flex"], [1, "courseMonth"], ["height", "12", "src", "../../../assets/img/Drop-Arrow.svg", "alt", "img", 1, "m-2"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse", "show"], [1, "card-body"], [3, "weekLists"], [1, "cardDetail"], [1, "d-flex", "justify-content-between", "p-2", "m-3", 2, "font-size", "24px"], [1, "pointer", 3, "click"], ["type", "button", "class", "cardDetailBox btn-block", 3, "click", 4, "ngFor", "ngForOf"], ["id", "headingTwo", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "true", "aria-controls", "collapseTwo", 1, "mb-0", "d-flex"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordionExample", 1, "collapse"], ["class", "cardDetailBox", 4, "ngFor", "ngForOf"], ["id", "headingThree", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "true", "aria-controls", "collapseThree", 1, "mb-0", "d-flex"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#accordionExample", 1, "collapse"], ["class", "tab-pane fade", "id", "discussion", "role", "tabpanel", "aria-labelledby", "profile-tab", 4, "ngIf"], ["id", "discussion", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], ["id", "grade", "role", "tabpanel", "aria-labelledby", "contact-tab", 1, "tab-pane", "fade"], ["id", "live", "role", "tabpanel", "aria-labelledby", "contact-tab", 1, "tab-pane", "fade"], ["type", "button", 1, "cardDetailBox", "btn-block", 3, "click"], [1, "d-flex", "p-3"], [2, "align-self", "center", "margin", "0px 15px"], ["height", "28", "src", "../../../assets/img/google-docs.svg", "alt", "img", 4, "ngIf"], ["height", "28", "src", "../../../assets/img/exam.svg", "alt", "img", 4, "ngIf"], ["height", "28", "src", "../../../assets/img/puzzle-piece.svg", "alt", "img", 4, "ngIf"], [1, "w-100", 2, "align-self", "center", "margin-left", "2rem"], [1, "d-flex"], ["class", "ml-5 upcoming", 4, "ngIf"], ["class", "ml-5 overdue", 4, "ngIf"], [1, "overflow", "ellipsis", "m-0", 2, "color", "#757575"], [1, "m-0", 2, "color", "#757575", "font-size", "12px"], [2, "align-self", "center", "margin", "0px 10px"], ["height", "25", "src", "../../../assets/img/download.svg", "alt", "img"], ["height", "28", "src", "../../../assets/img/google-docs.svg", "alt", "img"], ["height", "28", "src", "../../../assets/img/exam.svg", "alt", "img"], ["height", "28", "src", "../../../assets/img/puzzle-piece.svg", "alt", "img"], [1, "ml-5", "upcoming"], [1, "ml-5", "overdue"], [1, "cardDetailBox"], ["width", "31", "height", "30", "viewBox", "0 0 31 30", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "25", "height", "25", "viewBox", "0 0 25 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], [1, "m-0"], ["width", "30", "height", "28", "viewBox", "0 0 30 28", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["y", "0.801559", "width", "30", "height", "26.9845", "fill", "url(#pattern0)"], ["id", "pattern0", "patternContentUnits", "objectBoundingBox", "width", "1", "height", "1"], [0, "xlink", "href", "#image0", "transform", "translate(0 -0.0476993) scale(0.0147059 0.0163492)"], ["id", "image0", "width", "68", "height", "67", 0, "xlink", "href", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABDCAYAAAAlFqMKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAARfSURBVHhe7ZrNK3VBHMd/z6O8psjOAgspCwslrzsWEgtbShLJzsvSH+CuFElJyUJRVhZKFpZeE8lCJLGxk7e8Rp77PWY89/m5c++Ze+aee/XMp07XmZlzZubjNzPnzrm/PoKQ5Yvf4tMisEIYVgjDCmFYIQwrhOHrsnt/f0+Hh4f09PREGRkZIpW+zsvKyig7O1ukJggI8YO3t7eP5uZmyFceyEe5ROJbhNzc3FBubi7l5+eLlO9cXl7S9fU15eTkiBT/sXMIwwphWCEMK4RhhTCsEIYVwrBCGFYIwwphWCEMK4RhhTCsEIYVwjCyH/L+/k7b29t0cnJCWVlZVFlZSYWFhSL3Ey/7IRcXF7Szs0MPDw9UUlJCVVVVlJKSInINAyFeCHYg7E5YIBAQJT5BOaQHhSgP5KNcKLhP6H1xoD5ezhSehdTU1HykpaWF7dzAwIAoFZsQXB/uGtSHeuOBpzlkbW2NNjc3KS8vT6T8JdhwGhsbo8HBQefcbYjLcrgO1+M+HNSHelG/aTwJOTg4cOYFFVxK8D/rfKqQ+ZFkSFAv6jeNJyGZmZniLzVSytDQEBUVFYnU8CAf5aLJkLipXxdPq8zGxgbV1dW5ajx/F6PCbTmsSOvr61RbWytSzOApQtCYnp4ep3HRcNNJ4FYG6jUtA3h+MJuYmKCOjg5XUkyAelAf6o0HnoWkp6fT5OSkL1KkDNSHeuOBsTd3z8/P1NvbS3Nzc67mFF2kjOnp6bjJAJ4jRBLPSPEjMiTG3+2ajhS/IkNiLEIkJiPFz8iQxO3tP34L0tfXR/Pz8zFFCmS0t7fT1NSUr78ZiSpkf3+fVldXKTU1lZqamqi0tFTkRAfDp7u7W1uKlDEzM6MVGUdHR7SyskKvr6/U2NhI5eXlIkcDCFGxuLgIWf8ce3t7Itcdd3d3H8HOOdcGpUQ9UA7lcZ0OaFdoO3Gg/booIwQbOtXV1U7oS/BYDeu63zIRKW1tbbS0tBQxUhAZra2ttLCwoD1nNDQ0ONEc+qSLoba1taX1AxzlpHp7e0vHx8fi7BNUdnZ25uyQ6YDOoZPorGqi9SID7UG7+GM/2o9+6GB8lVEhpdTX1zudR7QBfOIc6bHIMI1vQgA6i+E2OjpKBQUFTkjjE+dIT7QMoJxDsLGL/Qk+5rHanJ6eet7kRZg/Pj46exom7lVcXOysLqEg8s7Pz79teEfC1wgJBRIQIV5lmCYmIcnWCZPt0R4yAA9MyQYeADmxDBmlkKurK6qoqPg2LgHyko1wO/+Y73Z3d8PmqVAKwUTV1dVFy8vLrrf/kgks5y0tLTQ7O6s1pJRzCG7S2dnpvFr8iaDdaL/u/BJxUsXjcCAQcMbiTwLtRbvRfl2UQ0aCoTM+Pk7Dw8P08vIS8cVUokFU4GXXyMgI9ff3x7T6RBUiwaqDr9Z4FwNJyQY6j9cS2KLQWVU4roX8LyTsSTVZsUIYVgjDCmFYIQwrhGGFMKwQhhXCsEL+gegP5vtJO5j9igYAAAAASUVORK5CYII="], ["width", "31", "height", "30", "viewBox", "0 0 31 30", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.4", "d", "M27.1259 10.6748C26.3291 10.6748 25.2737 10.6604 23.9597 10.6604C20.7551 10.6604 18.1201 8.49737 18.1201 5.85936V1.23097C18.1201 0.866859 17.7637 0.570389 17.3216 0.570389H7.98734C3.63123 0.570389 0.110352 3.48616 0.110352 7.05963V22.5667C0.110352 26.3158 3.79898 29.3539 8.35079 29.3539H22.2508C26.5912 29.3539 30.1104 26.4568 30.1104 22.8805V11.3225C30.1104 10.9569 29.7556 10.6619 29.3118 10.6633C28.5657 10.6676 27.6711 10.6748 27.1259 10.6748Z", "fill", "#200E32"], ["width", "25", "height", "25", "viewBox", "0 0 25 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.4", "d", "M17.595 0H21.8274C23.5803 0 25.0006 1.43231 25.0006 3.19995V7.46815C25.0006 9.23579 23.5803 10.6681 21.8274 10.6681H17.595C15.8422 10.6681 14.4219 9.23579 14.4219 7.46815V3.19995C14.4219 1.43231 15.8422 0 17.595 0Z", "fill", "#200E32"], ["d", "M7.40557 14.3319C9.15839 14.3319 10.5787 15.7642 10.5787 17.5318V21.8C10.5787 23.5665 9.15839 25 7.40557 25H3.17314C1.42031 25 0 23.5665 0 21.8V17.5318C0 15.7642 1.42031 14.3319 3.17314 14.3319H7.40557ZM21.8267 14.3319C23.5795 14.3319 24.9998 15.7642 24.9998 17.5318V21.8C24.9998 23.5665 23.5795 25 21.8267 25H17.5943C15.8415 25 14.4211 23.5665 14.4211 21.8V17.5318C14.4211 15.7642 15.8415 14.3319 17.5943 14.3319H21.8267ZM7.40557 0C9.15839 0 10.5787 1.43231 10.5787 3.19995V7.46816C10.5787 9.2358 9.15839 10.6681 7.40557 10.6681H3.17314C1.42031 10.6681 0 9.2358 0 7.46816V3.19995C0 1.43231 1.42031 0 3.17314 0H7.40557Z", "fill", "#200E32"], ["opacity", "0.4", "d", "M23.6004 22.1574H15.6921C14.9205 22.1574 14.293 22.7948 14.293 23.5787C14.293 24.364 14.9205 25 15.6921 25H23.6004C24.372 25 24.9996 24.364 24.9996 23.5787C24.9996 22.7948 24.372 22.1574 23.6004 22.1574Z", "fill", "#200E32"], ["d", "M10.1509 5.42284L17.6448 11.4783C17.8256 11.6231 17.8564 11.8889 17.7154 12.074L8.83116 23.6505C8.27268 24.3656 7.44966 24.7702 6.56785 24.7851L1.71792 24.8449C1.45925 24.8478 1.23292 24.6687 1.17414 24.4119L0.0718781 19.6195C-0.11918 18.7386 0.0718781 17.8279 0.630356 17.1262L9.55865 5.4945C9.70268 5.30788 9.96869 5.27503 10.1509 5.42284Z", "fill", "#200E32"], ["opacity", "0.4", "d", "M20.999 7.8684L19.5543 9.6719C19.4088 9.85554 19.1472 9.8854 18.9665 9.73909C17.2102 8.31778 12.713 4.67046 11.4652 3.65972C11.283 3.51043 11.258 3.24468 11.405 3.05955L12.7982 1.3292C14.0621 -0.298133 16.2667 -0.44743 18.045 0.970889L20.0878 2.59822C20.9255 3.25513 21.484 4.12105 21.6751 5.03176C21.8955 6.03354 21.6604 7.01741 20.999 7.8684Z", "fill", "#200E32"], [2, "background", "white"], [1, "couse-header", 2, "background", "#1b2d3f", 3, "ngClass"], [1, "d-flex", "justify-content-between", "p-2"], ["type", "button", 1, "btn", 2, "padding-top", "10px", "padding-bottom", "25px", 3, "click"], ["height", "25", "src", "../../../assets/img/left-arrow.svg", "alt", "img", 1, "m-2"], [2, "font-size", "3rem", "padding-top", "25px", "padding-bottom", "25px"], ["type", "button", "id", "profile-tab", "data-toggle", "tab", "href", "#discussion", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "btn", 2, "right", "2px"], ["height", "25", "src", "../../../assets/img/chatting.svg", "alt", "img", 1, "m-2"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs", 2, "font-size", "15px"], ["id", "myTabContent", 1, "tab-content", 2, "background", "#EBECF0", "margin-top", "110px"], [1, "card", 2, "border-radius", "10px"], ["id", "headingOne", 1, "card-header", 2, "border-radius", "10px"], [1, "card-body", 2, "height", "auto"], [1, "scrollmenu", 2, "height", "auto"], ["id", "cardDetail", "class", "cardDetail", "style", "height: auto; width: 100%; margin-left: 1px;", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2", "m-3", "fw-600", 2, "font-size", "12px"], ["id", "discussion", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade", 2, "background", "#EBECF0"], ["id", "grade", "role", "tabpanel", "aria-labelledby", "contact-tab", 1, "tab-pane", "fade", 2, "background", "#EBECF0"], ["id", "live", "role", "tabpanel", "aria-labelledby", "contact-tab", 1, "tab-pane", "fade", 2, "background", "#EBECF0"], [3, "type"], ["id", "cardDetail", 1, "cardDetail", 2, "height", "auto", "width", "100%", "margin-left", "1px"], [1, "d-flex", "justify-content-between", "p-1", "m-2", "fw-600", 2, "font-size", "12px"], [1, "pointer", 2, "font-size", "15px", 3, "click"], [2, "font-size", "15px"], ["type", "button", "class", "cardDetailBox btn-block", "style", "width: 92%; height:90px;", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "cardDetailBox", "btn-block", 2, "width", "92%", "height", "90px", 3, "click"], [1, "d-flex", "p-2"], [2, "align-self", "center", "margin", "0px 5px"], ["height", "20", "src", "../../../assets/img/google-docs.svg", "alt", "img", 4, "ngIf"], ["height", "20", "src", "../../../assets/img/exam.svg", "alt", "img", 4, "ngIf"], ["height", "20", "src", "../../../assets/img/puzzle-piece.svg", "alt", "img", 4, "ngIf"], [1, "w-100", 2, "margin-left", "1rem"], [1, "m-0", 2, "font-size", "12px", "width", "130px", "overflow", "hidden", "text-overflow", "ellipsis"], ["class", "ml-2 upcoming", 4, "ngIf"], ["class", "ml-2 overdue", 4, "ngIf"], [1, "m-0", 2, "font-size", "11px", "width", "130px", "overflow", "hidden", "text-overflow", "ellipsis", "color", "#757575"], [1, "m-0", 2, "font-size", "10px", "color", "#757575"], ["type", "button", 1, "btn", 2, "align-self", "right", "margin-right", "-10px"], ["height", "20", "src", "../../../assets/img/download.svg", "alt", "img"], ["height", "20", "src", "../../../assets/img/google-docs.svg", "alt", "img"], ["height", "20", "src", "../../../assets/img/exam.svg", "alt", "img"], ["height", "20", "src", "../../../assets/img/puzzle-piece.svg", "alt", "img"], [1, "ml-2", "upcoming"], [1, "ml-2", "overdue"], [1, "badge", "badge-danger"], [1, "m-3"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CourseComponent_div_0_Template, 90, 10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourseComponent_div_1_Template, 76, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CourseComponent_div_2_Template, 2, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView && ctx.openGradeView);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _common_dot_progress_bar_dot_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__["DotProgressBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_7__["DiscussionsComponent"], _grade_grade_component__WEBPACK_IMPORTED_MODULE_8__["GradeComponent"], _live_live_component__WEBPACK_IMPORTED_MODULE_9__["LiveComponent"], _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_10__["AssignmentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\n.courseContent[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 200px;\n}\n.courseContentActive[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 80px !important;\n}\n.nav-tabs[_ngcontent-%COMP%] {\n  font-size: 12px;\n  justify-content: space-around;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  border: 1px solid transparent;\n}\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 700;\n  background: none;\n  border-bottom: 5px solid #28baa2;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n.fixed-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n}\n.couse-header[_ngcontent-%COMP%] {\n  color: white;\n  background: linear-gradient(180deg, #409fe5 0%, #0098ee 100%);\n}\n.courseName[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding-top: 40px;\n}\n.courseTeacher[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-bottom: 35px;\n}\n.courseMonths[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding-top: 30px;\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.courseMonth[_ngcontent-%COMP%] {\n  background-color: transparent;\n  font-size: 24px;\n  width: 95%;\n  text-align: left;\n}\n.cardDetail[_ngcontent-%COMP%] {\n  margin: 5px;\n  overflow: auto;\n  background: #f7f4f4;\n  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.14), 0px 6px 6px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.2);\n  height: auto;\n}\n#cardDetail[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 5px;\n  overflow: auto;\n  background: #f7f4f4;\n  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.14), 0px 6px 6px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.2);\n}\n.cardDetailBox[_ngcontent-%COMP%] {\n  margin: 15px;\n  background: #ffffff;\n  border: 0.2px solid #ffffff;\n  width: 97%;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.m-0[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: left;\n}\n@media (max-width: 700px) {\n  .courseMonths[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n.upcoming[_ngcontent-%COMP%] {\n  border: 1px solid #0EB11E;\n  border-radius: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  color: #0eb11e;\n  font-size: 12px;\n}\n.overdue[_ngcontent-%COMP%] {\n  border: 1px solid #F50505;\n  border-radius: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  color: #f50505;\n  font-size: 12px;\n}\ndiv.scrollmenu[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  height: 300px;\n  white-space: nowrap;\n}\n.ellipsis[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding-top: 8px;\n  text-overflow: ellipsis;\n  width: 60em;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.ellipsi[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  text-overflow: ellipsis;\n  width: 90%;\n  margin-left: -50px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zdHVkZW50L2NvdXJzZS9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXHNhc3NcXGJhc2VcXF9taXhpbi5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvY291cnNlL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX2NvbG9ycy5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvY291cnNlL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvY291cnNlL2NvdXJzZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2FwcC9zdHVkZW50L2NvdXJzZS9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXC4uXFxhcHBcXHN0dWRlbnRcXGNvdXJzZVxcY291cnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOzs7Ozs7OztDQUFBO0FBV0E7Ozs7Ozs7Ozs7Q0FBQTtBQ1hJO0VBQ0ksY0NGUztBQ29CakI7QUZoQkk7RUFDSSxjQ0RVO0FDbUJsQjtBRmhCSTtFQUNJLGNDTEs7QUN1QmI7QUZoQkk7RUFDSSxjQ0xXO0FDdUJuQjtBRlpJO0VBQ0kseUJDbEJTO0FDaUNqQjtBRmJJO0VBQ0kseUJDcEJTO0FDbUNqQjtBRmJJO0VBQ0kseUJDcEJVO0FDbUNsQjtBRmJJO0VBQ0kseUJDeEJLO0FDdUNiO0FGYkk7RUFDSSx5QkN4Qlc7QUN1Q25CO0FDNUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FEK0NGO0FDNUNBO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0FEK0NGO0FDNUNBO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0FEK0NGO0FDNUNBO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0FEK0NGO0FDNUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBRCtDRjtBQzVDQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBRCtDRjtBQzVDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FEK0NGO0FDNUNBO0VBQ0UsWUFBQTtFQUNBLDZEQUFBO0FEK0NGO0FDN0NBO0VBRUUsZUFBQTtFQUNBLGlCQUFBO0FEK0NGO0FDNUNBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FEK0NGO0FDNUNBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUQrQ0Y7QUM3Q0E7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QURnREY7QUM3Q0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEdBQUE7RUFFRSxZQUFBO0FEK0NKO0FDN0NBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEdBQUE7QURnREY7QUM1Q0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FEK0NGO0FDN0NBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FEZ0RGO0FDOUNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RURpREY7QUFDRjtBQzlDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURnREY7QUM3Q0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEZ0RGO0FDOUNBO0VBRUUsa0JBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRGdESjtBQzlDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBRGlETjtBQy9DRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QURrRE4iLCJmaWxlIjoiLi4vLi4vYXBwL3N0dWRlbnQvY291cnNlL2NvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gTUVESUEgUVVFUlkgTUFOQUdFUlxuXG4vKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuXG5cbi8qXG4kYnJlYWtwb2ludCBhcmd1ZW1lbnQgY2hvaWNlczpcbi0geHMtcGhvbmVcbi0gcGhvbmVcbi0gdGFiLXBvcnRcbi0gdGFiLWxhbmRcbi0gZGVza3RvcFxuLSBmdWxsLWhkXG5cbjFlbSA9IDE2cHhcbiovXG5cbkBtaXhpbiByZXNwb25kTWF4KCRicmVha3BvaW50KSB7XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4cy1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDIyLjVlbSkgeyBAY29udGVudCB9OyAvLzM2MHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IHNtLXBob25lIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMzZlbSkgeyBAY29udGVudCB9OyAvLzU3NnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IG1kLXRhYiB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHsgQGNvbnRlbnQgfTsgLy83NjhweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBsZy1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNjJlbSkgeyBAY29udGVudCB9OyAvLzk5MnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IHhsLWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7IEBjb250ZW50IH07IC8vMTIwMHB4XG4gIH1cbiAgQGlmICRicmVha3BvaW50ID09IGhkLWRlc2t0b3Age1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7IEBjb250ZW50IH07IC8vMTQ0MHB4XG4gIH1cblx0QGlmICRicmVha3BvaW50ID09IGZ1bGwtaGQge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAxMjBlbSkgeyBAY29udGVudCB9OyAvLzE5MjBweFxuXHR9XG59XG5cbkBtaXhpbiByZXNwb25kTWluKCRicmVha3BvaW50bWluKSB7XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4cy1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDIyLjVlbSkgeyBAY29udGVudCB9OyAvLzM2MHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IHNtLXBob25lIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMzZlbSkgeyBAY29udGVudCB9OyAvLzU3NnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IG1kLXRhYiB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHsgQGNvbnRlbnQgfTsgLy83NjhweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBsZy1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjJlbSkgeyBAY29udGVudCB9OyAvLzk5MnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IHhsLWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7IEBjb250ZW50IH07IC8vMTIwMHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IGZ1bGwtaGQge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAxMjBlbSkgeyBAY29udGVudCB9OyAvLzE5MjBweFxuXHR9XG59XG5cblxuXG5cbiRyZW0tYmFzZWxpbmU6IDE2cHggIWRlZmF1bHQ7XG4kcmVtLWZhbGxiYWNrOiBmYWxzZSAhZGVmYXVsdDtcbiRyZW0tcHgtb25seTogZmFsc2UgIWRlZmF1bHQ7XG5cbkBmdW5jdGlvbiByZW0tc2VwYXJhdG9yKCRsaXN0LCAkc2VwYXJhdG9yOiBmYWxzZSkge1xuICBAaWYgJHNlcGFyYXRvciA9PSBcImNvbW1hXCIgb3IgJHNlcGFyYXRvciA9PSBcInNwYWNlXCIge1xuICAgIEByZXR1cm4gYXBwZW5kKCRsaXN0LCBudWxsLCAkc2VwYXJhdG9yKTtcbiAgfSBcbiAgXG4gIEBpZiBmdW5jdGlvbi1leGlzdHMoXCJsaXN0LXNlcGFyYXRvclwiKSA9PSB0cnVlIHtcbiAgICBAcmV0dXJuIGxpc3Qtc2VwYXJhdG9yKCRsaXN0KTtcbiAgfVxuXG4gIC8vIGxpc3Qtc2VwYXJhdG9yIHBvbHlmaWxsIGJ5IEh1Z28gR2lyYXVkZWwgKGh0dHBzOi8vc2Fzcy1jb21wYXRpYmlsaXR5LmdpdGh1Yi5pby8jbGlzdF9zZXBhcmF0b3JfZnVuY3Rpb24pXG4gICR0ZXN0LWxpc3Q6ICgpO1xuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XG4gICAgJHRlc3QtbGlzdDogYXBwZW5kKCR0ZXN0LWxpc3QsICRpdGVtLCBzcGFjZSk7XG4gIH1cblxuICBAcmV0dXJuIGlmKCR0ZXN0LWxpc3QgPT0gJGxpc3QsIHNwYWNlLCBjb21tYSk7XG59XG5cbkBtaXhpbiByZW0tYmFzZWxpbmUoJHpvb206IDEwMCUpIHtcbiAgZm9udC1zaXplOiAkem9vbSAvIDE2cHggKiAkcmVtLWJhc2VsaW5lO1xufVxuXG5AZnVuY3Rpb24gcmVtLWNvbnZlcnQoJHRvLCAkdmFsdWVzLi4uKSB7XG4gICRyZXN1bHQ6ICgpO1xuICAkc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZXMpO1xuICBcbiAgQGVhY2ggJHZhbHVlIGluICR2YWx1ZXMge1xuICAgIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicmVtXCIgYW5kICR0byA9PSBcInB4XCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvIDFyZW0gKiAkcmVtLWJhc2VsaW5lLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcIm51bWJlclwiIGFuZCB1bml0KCR2YWx1ZSkgPT0gXCJweFwiIGFuZCAkdG8gPT0gXCJyZW1cIiB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlIC8gJHJlbS1iYXNlbGluZSAqIDFyZW0sICRzZXBhcmF0b3IpO1xuICAgIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpID09IFwibGlzdFwiIHtcbiAgICAgICR2YWx1ZS1zZXBhcmF0b3I6IHJlbS1zZXBhcmF0b3IoJHZhbHVlKTtcbiAgICAgICR2YWx1ZTogcmVtLWNvbnZlcnQoJHRvLCAkdmFsdWUuLi4pO1xuICAgICAgJHZhbHVlOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSwgJHZhbHVlLXNlcGFyYXRvcik7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUsICRzZXBhcmF0b3IpO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gaWYobGVuZ3RoKCRyZXN1bHQpID09IDEsIG50aCgkcmVzdWx0LCAxKSwgJHJlc3VsdCk7XG59XG5cbkBmdW5jdGlvbiByZW0oJHZhbHVlcy4uLikge1xuICBAaWYgJHJlbS1weC1vbmx5IHtcbiAgICBAcmV0dXJuIHJlbS1jb252ZXJ0KHB4LCAkdmFsdWVzLi4uKTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChyZW0sICR2YWx1ZXMuLi4pO1xuICB9XG59XG5cbkBtaXhpbiByZW0oJHByb3BlcnRpZXMsICR2YWx1ZXMuLi4pIHtcbiAgQGlmIHR5cGUtb2YoJHByb3BlcnRpZXMpID09IFwibWFwXCIge1xuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiBtYXAta2V5cygkcHJvcGVydGllcykge1xuICAgICAgQGluY2x1ZGUgcmVtKCRwcm9wZXJ0eSwgbWFwLWdldCgkcHJvcGVydGllcywgJHByb3BlcnR5KSk7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xuICAgICAgQGlmICRyZW0tZmFsbGJhY2sgb3IgJHJlbS1weC1vbmx5IHtcbiAgICAgICAgI3skcHJvcGVydHl9OiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgICBAaWYgbm90ICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5AbWl4aW4gY29udGVudC1jZW50ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDUwJTtcblx0dG9wOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xufSIsIkBpbXBvcnQgXCIuLi9iYXNlL3ZhcmlhYmxlc1wiO1xuXG4udGV4dCB7XG4gICAgJi1wcmltYXJ5MSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTE7XG4gICAgfVxuICAgICYtZ3JleS1kYXJrIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleTtcbiAgICB9XG4gICAgJi1ncmV5LWxpZ2h0IHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0O1xuICAgIH1cbiAgIFxufVxuXG4uYmcge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTE7XG4gICAgfVxuICAgICYtcHJpbWFyeTIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTI7XG4gICAgfVxuICAgICYtZ3JleS1kYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktZGFyaztcbiAgICB9XG4gICAgJi1ncmV5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0O1xuICAgIH1cbn0iLCIvLyBDb2xvcnNcblxuJGNvbG9yLXByaW1hcnkxOiByZ2JhKDI3LDQ1LDYzLDEpO1xuJGNvbG9yLXByaW1hcnkyOiByZ2JhKDUzLDcwLDg4LDEpO1xuXG4kY29sb3ItZ3JleTogcmdiYSgxMDMsIDEwMywgMTAzLCAxKTtcbiRjb2xvci1ncmV5LWRhcms6IHJnYmEoNTIsIDU4LCA2NCwgMSk7XG5cbiRjb2xvci1ncmV5LWxpZ2h0OiAjRUJFQ0YwO1xuXG4kY29sb3Itc3VjY2VzczogcmdiYSg4MiwgMjA5LCAxNDUsIDEpO1xuJGNvbG9yLWVycm9yOiByZ2JhKDIzNCwgODUsIDg1LCAxKTtcblxuLy8gRm9udHNcblxuJHRoaW46IDEwMDtcbiRleHRyYS1saWdodDogMjAwO1xuJGxpZ2h0OiAzMDA7XG4kcmVndWxhci00MDA6IDQwMDtcbiRtZWRpdW06IDUwMDtcbiRzZW1pLWJvbGQ6IDYwMDtcbiRib2xkOiA3MDA7XG4kZXh0cmEtYm9sZDogODAwO1xuJGJsYWNrLTkwMDogOTAwOyIsIi8qXG4wcHggLSAzNjBweDpcdFx0WFMgUGhvbmVcbjM2MHB4IC0gNTc2cHg6IFx0XHRQaG9uZVxuNTc2cHggLSA3NjhweDogXHRcdFRhYmxldCBQb3J0cmFpdFxuNzY4cHggLSA5OTJweDpcdFx0VGFibGV0IExhbmRzY2FwZVxuOTkycHggLSAxMjAwcHg6IFx0ZGVza3RvcFxuMTIwMHB4IC0gMTkyMHB4Olx0bm9ybWFsIE1lZGlhIHF1ZXJpZXNcbjE5MjBweCBhbmQgdXA6ICBcdEZ1bGwgSERcbiovXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuLnRleHQtcHJpbWFyeTEge1xuICBjb2xvcjogIzFiMmQzZjtcbn1cbi50ZXh0LWdyZXktZGFyayB7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuLnRleHQtZ3JleSB7XG4gIGNvbG9yOiAjNjc2NzY3O1xufVxuLnRleHQtZ3JleS1saWdodCB7XG4gIGNvbG9yOiAjRUJFQ0YwO1xufVxuXG4uYmctcHJpbWFyeTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyZDNmO1xufVxuLmJnLXByaW1hcnkyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDY1ODtcbn1cbi5iZy1ncmV5LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xufVxuLmJnLWdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc2NzY3O1xufVxuLmJnLWdyZXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQ0YwO1xufVxuXG4uY291cnNlQ29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG59XG5cbi5jb3Vyc2VDb250ZW50QWN0aXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtdGFicyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5uYXYtdGFicyAubmF2LWxpbmsge1xuICBjb2xvcjogI2M0YzRjNDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzI4YmFhMjtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLmZpeGVkLXNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvdXNlLWhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQwOWZlNSAwJSwgIzAwOThlZSAxMDAlKTtcbn1cblxuLmNvdXJzZU5hbWUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4uY291cnNlVGVhY2hlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG59XG5cbi5jb3Vyc2VNb250aHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cblxuLmNvdXJzZU1vbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDk1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhcmREZXRhaWwge1xuICBtYXJnaW46IDVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmN2Y0ZjQ7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jY2FyZERldGFpbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA1cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZjdmNGY0O1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5jYXJkRGV0YWlsQm94IHtcbiAgbWFyZ2luOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDAuMnB4IHNvbGlkICNmZmZmZmY7XG4gIHdpZHRoOiA5NyU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5tLTAge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY291cnNlTW9udGhzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuLnVwY29taW5nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBFQjExRTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzBlYjExZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ub3ZlcmR1ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGNTA1MDU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY29sb3I6ICNmNTA1MDU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuZGl2LnNjcm9sbG1lbnUge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmVsbGlwc2lzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDYwZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5lbGxpcHNpIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvYmFzZS9taXhpblwiO1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL2Jhc2UvY29sb3JzXCI7XG5cbi5jb3Vyc2VDb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbn1cblxuLmNvdXJzZUNvbnRlbnRBY3RpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDgwcHggIWltcG9ydGFudDtcbn1cblxuLm5hdi10YWJzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjYzRjNGM0O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMjhiYWEyO1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoOyBcbn1cblxuLmZpeGVkLXNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvdXNlLWhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQwOWZlNSAwJSwgIzAwOThlZSAxMDAlKTtcbn1cbi5jb3Vyc2VOYW1lIHtcbiAgXG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5jb3Vyc2VUZWFjaGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbn1cblxuLmNvdXJzZU1vbnRoc3sgXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuLmNvdXJzZU1vbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDk1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNhcmREZXRhaWwge1xuICBtYXJnaW46IDVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmN2Y0ZjQ7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGhlaWdodDogYXV0bztcbn1cbiNjYXJkRGV0YWlsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDVweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmN2Y0ZjQ7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gIDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNhcmREZXRhaWxCb3gge1xuICBtYXJnaW46IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMC4ycHggc29saWQgI2ZmZmZmZjtcbiAgd2lkdGg6IDk3JTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5tLTB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuY291cnNlTW9udGhzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG4udXBjb21pbmcge1xuICBib3JkZXI6IDFweCBzb2xpZCMwRUIxMUU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY29sb3I6ICMwZWIxMWU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm92ZXJkdWUge1xuICBib3JkZXI6IDFweCBzb2xpZCNGNTA1MDU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY29sb3I6ICNmNTA1MDU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmRpdi5zY3JvbGxtZW51IHtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7IFxuICAgIG92ZXJmbG93LXk6aGlkZGVuOyBcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZWxsaXBzaXN7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDYwZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5lbGxpcHNpe1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course',
                templateUrl: './course.component.html',
                styleUrls: ['./course.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student/discussions/discussions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/student/discussions/discussions.component.ts ***!
  \**************************************************************/
/*! exports provided: DiscussionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionsComponent", function() { return DiscussionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mobileView/mobile-view.service */ "./src/app/services/mobileView/mobile-view.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DiscussionsComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiscussionsComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DiscussionsComponent {
    constructor(responsiveService) {
        this.responsiveService = responsiveService;
    }
    ngOnInit() {
        this.onResize();
        this.responsiveService.checkWidth();
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobileView = isMobile;
        });
    }
}
DiscussionsComponent.ɵfac = function DiscussionsComponent_Factory(t) { return new (t || DiscussionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__["MobileViewService"])); };
DiscussionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscussionsComponent, selectors: [["app-discussions"]], decls: 73, vars: 11, consts: [[3, "ngClass"], [1, "incoming_msg", "d-flex", "flex-column"], [1, "badge", "badge-secondary", "teacherBadge"], ["src", "https://i.imgur.com/k2PZLZa.png", "alt", "User avatar"], [1, "received_msg"], [1, "name"], [1, "received_withd_msg"], [1, "d-flex", "justify-content-between", 2, "background", "none"], [1, "outgoing_msg"], [1, "sent_msg"], ["class", "type_msg", 4, "ngIf"], ["class", "type_msg", "style", "left: 0;", 4, "ngIf"], [1, "type_msg"], [1, "input_msg_write", "d-flex"], ["type", "button", 1, "btn", 2, "background", "#05728f none repeat scroll 0 0", "border", "medium none", "border-radius", "50%", "color", "#fff", "cursor", "pointer", "font-size", "17px", "height", "33px", "position", "absolute", "top", "11px", "width", "33px"], ["type", "button", 1, "btn", 2, "background", "#05728f none repeat scroll 0 0", "border", "medium none", "border-radius", "50%", "color", "#fff", "cursor", "pointer", "font-size", "17px", "height", "33px", "position", "absolute", "top", "11px", "width", "33px", "left", "40px !important"], ["type", "text", "placeholder", "Type a message", "name", "newMessage", 1, "write_msg", 2, "margin-left", "80px"], ["type", "button", 1, "msg_send_btn", 2, "right", "40px !important"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane-o"], ["type", "button", 1, "msg_send_btn", "one"], [1, "type_msg", 2, "left", "0"]], template: function DiscussionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nirav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Hii ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Nirav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Hii ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Nirav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Hii ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Nirav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Hii ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Nirav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "How are you ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "I am fine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, DiscussionsComponent_div_71_Template, 11, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, DiscussionsComponent_div_72_Template, 11, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mesgs " + (ctx.isMobileView ? "mobile" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isMobileView ? "msg_mobile_history" : "msg_history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.inbox_people[_ngcontent-%COMP%] {\n  background: #f8f8f8 none repeat scroll 0 0;\n  float: left;\n  overflow: hidden;\n  width: 40%;\n  border-right: 1px solid #c4c4c4;\n}\n\n.inbox_msg[_ngcontent-%COMP%] {\n  border: 1px solid #c4c4c4;\n  clear: both;\n  overflow: hidden;\n}\n\n.top_spac[_ngcontent-%COMP%] {\n  margin: 20px 0 0;\n}\n\n.channel_heading[_ngcontent-%COMP%] {\n  float: left;\n  width: 40%;\n}\n\n.srch_bar[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: right;\n  width: 60%;\n}\n\n.headind_srch[_ngcontent-%COMP%] {\n  padding: 10px 29px 10px 20px;\n  overflow: hidden;\n  border-bottom: 1px solid #c4c4c4;\n}\n\n.channel_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #05728f;\n  font-size: 21px;\n  margin: auto;\n}\n\n.srch_bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #cdcdcd;\n  border-width: 0 0 1px 0;\n  width: 80%;\n  padding: 2px 0 4px 6px;\n  background: none;\n}\n\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  padding: 0;\n  color: #707070;\n  font-size: 18px;\n}\n\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n  margin: 0 0 0 -27px;\n}\n\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #464646;\n  margin: 0 0 8px 0;\n}\n\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  float: right;\n}\n\n.chat_ib[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #989898;\n  margin: auto;\n}\n\n.chat_img[_ngcontent-%COMP%] {\n  float: left;\n  width: 11%;\n}\n\n.chat_ib[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 0 0 15px;\n  width: 88%;\n}\n\n.chat_people[_ngcontent-%COMP%] {\n  overflow: hidden;\n  clear: both;\n}\n\n.chat_list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 18px 16px 10px;\n}\n\n.inbox_chat[_ngcontent-%COMP%] {\n  height: 550px;\n  overflow-y: scroll;\n}\n\n.active_chat[_ngcontent-%COMP%] {\n  background: #ebebeb;\n}\n\n.incoming_msg_img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  background: #ffebeb;\n  width: 50%;\n  position: relative;\n  border-radius: 10px;\n  margin-top: 5px;\n}\n\n.incoming_msg_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  align-self: center;\n  margin-left: 5px;\n}\n\n.incoming_msg_img[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0px;\n}\n\n.incoming_msg_img_mobile[_ngcontent-%COMP%] {\n  background: #ffebeb;\n  width: 50%;\n  position: relative;\n  border-radius: 10px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.incoming_msg_img_mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  align-self: center;\n  margin-left: 5px;\n}\n\n.teacherBadge[_ngcontent-%COMP%] {\n  right: 0;\n  position: absolute !important;\n  top: -5px !important;\n  font-size: 12px;\n  z-index: auto;\n}\n\n.received_msg[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 0 0 10px;\n  vertical-align: top;\n  width: 92%;\n}\n\n.received_withd_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #646464;\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.time_date[_ngcontent-%COMP%] {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0;\n}\n\n.received_withd_msg[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\n.mesgs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sent_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: #05728f none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #fff;\n  padding: 5px 10px 5px 12px;\n  width: 100%;\n}\n\n.outgoing_msg[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 26px 0 26px;\n}\n\n.sent_msg[_ngcontent-%COMP%] {\n  float: right;\n  width: 46%;\n}\n\n.input_msg_write[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  color: #4c4c4c;\n  font-size: 15px;\n  min-height: 50px;\n  width: 100%;\n}\n\n.type_msg[_ngcontent-%COMP%] {\n  border-top: 1px solid #c4c4c4;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: white;\n}\n\n.msg_send_btn[_ngcontent-%COMP%] {\n  background: #05728f none repeat scroll 0 0;\n  border: medium none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 17px;\n  height: 33px;\n  position: absolute;\n  left: 79%;\n  top: 11px;\n  width: 33px;\n}\n\n@media (max-width: 660px) {\n  .msg_send_btn[_ngcontent-%COMP%] {\n    left: 88%;\n  }\n}\n\n.msg_send_btn.one[_ngcontent-%COMP%] {\n  left: 74.5%;\n}\n\n@media (max-width: 660px) {\n  .msg_send_btn.one[_ngcontent-%COMP%] {\n    left: 78%;\n  }\n}\n\n.messaging[_ngcontent-%COMP%] {\n  padding: 0 0 50px 0;\n}\n\n.msg_history[_ngcontent-%COMP%] {\n  height: 565px;\n  overflow-y: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 10px;\n}\n\n.msg_mobile_history[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n\n.mobile[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.mobile[_ngcontent-%COMP%]   .msg_mobile_history[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 15px;\n}\n\n.mobile[_ngcontent-%COMP%]   .type_msg[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 65px;\n  width: 100%;\n  background: white;\n  z-index: 100;\n}\n\n.message[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.badge[_ngcontent-%COMP%] {\n  top: -1.5rem;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zdHVkZW50L2Rpc2N1c3Npb25zL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcLi5cXGFwcFxcc3R1ZGVudFxcZGlzY3Vzc2lvbnNcXGRpc2N1c3Npb25zLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvZGlzY3Vzc2lvbnMvZGlzY3Vzc2lvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBR0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0RGOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQUo7O0FESUE7RUFHRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSEY7O0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURRQTtFQUNFLFFBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNMRjs7QURRQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNMRjs7QURhQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ1ZGOztBRGFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1ZGOztBRGFBO0VBQ0UsVUFBQTtBQ1ZGOztBRGFBO0VBQ0UsV0FBQTtBQ1ZGOztBRGFBO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ1ZGOztBRGFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNWRjs7QURhQTtFQUNFLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1ZGOztBRGFBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDVkY7O0FEV0U7RUFaRjtJQWFJLFNBQUE7RUNSRjtBQUNGOztBRFNFO0VBQ0UsV0FBQTtBQ1BKOztBRFFJO0VBRkY7SUFHSSxTQUFBO0VDTEo7QUFDRjs7QURTQTtFQUNFLG1CQUFBO0FDTkY7O0FEU0E7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURTQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDTkY7O0FET0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURPRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFNBO0VBQ0UscUJBQUE7QUNORjs7QURTQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ05GIiwiZmlsZSI6Ii4uLy4uL2FwcC9zdHVkZW50L2Rpc2N1c3Npb25zL2Rpc2N1c3Npb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaW5ib3hfcGVvcGxlIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmOCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDQwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M0YzRjNDtcbn1cblxuLmluYm94X21zZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gIGNsZWFyOiBib3RoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udG9wX3NwYWMge1xuICBtYXJnaW46IDIwcHggMCAwO1xufVxuXG4uY2hhbm5lbF9oZWFkaW5nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5zcmNoX2JhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5oZWFkaW5kX3NyY2gge1xuICBwYWRkaW5nOiAxMHB4IDI5cHggMTBweCAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcbn1cblxuLmNoYW5uZWxfaGVhZGluZyBoNCB7XG4gIGNvbG9yOiAjMDU3MjhmO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNyY2hfYmFyIGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDJweCAwIDRweCA2cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5zcmNoX2JhciAuaW5wdXQtZ3JvdXAtYWRkb24gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgbWFyZ2luOiAwIDAgMCAtMjdweDtcbn1cblxuLmNoYXRfaWIgaDUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNDY0NjQ2O1xuICBtYXJnaW46IDAgMCA4cHggMDtcbn1cblxuLmNoYXRfaWIgaDUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY2hhdF9pYiBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk4OTg5ODtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2hhdF9pbWcge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDExJTtcbn1cblxuLmNoYXRfaWIge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMCAwIDAgMTVweDtcbiAgd2lkdGg6IDg4JTtcbn1cblxuLmNoYXRfcGVvcGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jaGF0X2xpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxOHB4IDE2cHggMTBweDtcbn1cblxuLmluYm94X2NoYXQge1xuICBoZWlnaHQ6IDU1MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5hY3RpdmVfY2hhdCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG59XG5cbi5pbmNvbWluZ19tc2dfaW1nIHtcbiAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvLyB3aWR0aDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZWJlYjtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGltZyB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG4gIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuXG4uaW5jb21pbmdfbXNnX2ltZ19tb2JpbGUge1xuICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vIHdpZHRoOiA4JTtcbiAgYmFja2dyb3VuZDogI2ZmZWJlYjtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcblxuICBpbWcge1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuICBcbn1cblxuLnRlYWNoZXJCYWRnZSB7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgdG9wOiAtNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgei1pbmRleDogYXV0bztcbn1cblxuLnJlY2VpdmVkX21zZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDkyJTtcbiAgLy8gLm5hbWUge1xuICAvLyAgIGZvbnQtc2l6ZTogMTRweDtcbiAgLy8gICBmb250LXdlaWdodDogNjAwO1xuICAvLyAgIG1hcmdpbjogNXB4O1xuICAvLyB9XG59XG5cbi5yZWNlaXZlZF93aXRoZF9tc2cgcCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzY0NjQ2NDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGltZV9kYXRlIHtcbiAgY29sb3I6ICM3NDc0NzQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogOHB4IDAgMDtcbn1cblxuLnJlY2VpdmVkX3dpdGhkX21zZyB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi5tZXNncyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VudF9tc2cgcCB7XG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm91dGdvaW5nX21zZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMjZweCAwIDI2cHg7XG59XG5cbi5zZW50X21zZyB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDQ2JTtcbn1cblxuLmlucHV0X21zZ193cml0ZSBpbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50eXBlX21zZyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzRjNGM0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubXNnX3NlbmRfYnRuIHtcbiAgYmFja2dyb3VuZDogIzA1NzI4ZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDc5JTtcbiAgdG9wOiAxMXB4O1xuICB3aWR0aDogMzNweDtcbiAgQG1lZGlhKG1heC13aWR0aCA6IDY2MHB4KSB7XG4gICAgbGVmdDogODglO1xuICB9XG4gICYub25lIHtcbiAgICBsZWZ0OiA3NC41JTtcbiAgICBAbWVkaWEobWF4LXdpZHRoIDogNjYwcHgpIHtcbiAgICAgIGxlZnQ6IDc4JTtcbiAgICB9XG4gIH1cbn1cblxuLm1lc3NhZ2luZyB7XG4gIHBhZGRpbmc6IDAgMCA1MHB4IDA7XG59XG5cbi5tc2dfaGlzdG9yeSB7XG4gIGhlaWdodDogNTY1cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1zZ19tb2JpbGVfaGlzdG9yeSB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1vYmlsZSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgLm1zZ19tb2JpbGVfaGlzdG9yeSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICAudHlwZV9tc2cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDY1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG59XG5cbi5tZXNzYWdlIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uYmFkZ2Uge1xuICB0b3A6IC0xLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiIsImltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmluYm94X3Blb3BsZSB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjggbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA0MCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjNGM0YzQ7XG59XG5cbi5pbmJveF9tc2cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICBjbGVhcjogYm90aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRvcF9zcGFjIHtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbn1cblxuLmNoYW5uZWxfaGVhZGluZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDAlO1xufVxuXG4uc3JjaF9iYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogNjAlO1xufVxuXG4uaGVhZGluZF9zcmNoIHtcbiAgcGFkZGluZzogMTBweCAyOXB4IDEwcHggMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XG59XG5cbi5jaGFubmVsX2hlYWRpbmcgaDQge1xuICBjb2xvcjogIzA1NzI4ZjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zcmNoX2JhciBpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGNkY2Q7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAycHggMCA0cHggNnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIG1hcmdpbjogMCAwIDAgLTI3cHg7XG59XG5cbi5jaGF0X2liIGg1IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzQ2NDY0NjtcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XG59XG5cbi5jaGF0X2liIGg1IHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNoYXRfaWIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5ODk4OTg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNoYXRfaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMSU7XG59XG5cbi5jaGF0X2liIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMCAwIDE1cHg7XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5jaGF0X3Blb3BsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY2hhdF9saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMThweCAxNnB4IDEwcHg7XG59XG5cbi5pbmJveF9jaGF0IHtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uYWN0aXZlX2NoYXQge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xufVxuXG4uaW5jb21pbmdfbXNnX2ltZyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZWJlYjtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uaW5jb21pbmdfbXNnX2ltZyBpbWcge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uaW5jb21pbmdfbXNnX2ltZyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5pbmNvbWluZ19tc2dfaW1nX21vYmlsZSB7XG4gIGJhY2tncm91bmQ6ICNmZmViZWI7XG4gIHdpZHRoOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uaW5jb21pbmdfbXNnX2ltZ19tb2JpbGUgaW1nIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4udGVhY2hlckJhZGdlIHtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IC01cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB6LWluZGV4OiBhdXRvO1xufVxuXG4ucmVjZWl2ZWRfbXNnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogOTIlO1xufVxuXG4ucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICM2NDY0NjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpbWVfZGF0ZSB7XG4gIGNvbG9yOiAjNzQ3NDc0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDhweCAwIDA7XG59XG5cbi5yZWNlaXZlZF93aXRoZF9tc2cge1xuICB3aWR0aDogNDUlO1xufVxuXG4ubWVzZ3Mge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlbnRfbXNnIHAge1xuICBiYWNrZ3JvdW5kOiAjMDU3MjhmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdXRnb2luZ19tc2cge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDI2cHggMCAyNnB4O1xufVxuXG4uc2VudF9tc2cge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0NiU7XG59XG5cbi5pbnB1dF9tc2dfd3JpdGUgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udHlwZV9tc2cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm1zZ19zZW5kX2J0biB7XG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGhlaWdodDogMzNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA3OSU7XG4gIHRvcDogMTFweDtcbiAgd2lkdGg6IDMzcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgLm1zZ19zZW5kX2J0biB7XG4gICAgbGVmdDogODglO1xuICB9XG59XG4ubXNnX3NlbmRfYnRuLm9uZSB7XG4gIGxlZnQ6IDc0LjUlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gIC5tc2dfc2VuZF9idG4ub25lIHtcbiAgICBsZWZ0OiA3OCU7XG4gIH1cbn1cblxuLm1lc3NhZ2luZyB7XG4gIHBhZGRpbmc6IDAgMCA1MHB4IDA7XG59XG5cbi5tc2dfaGlzdG9yeSB7XG4gIGhlaWdodDogNTY1cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1zZ19tb2JpbGVfaGlzdG9yeSB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1vYmlsZSB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5tb2JpbGUgLm1zZ19tb2JpbGVfaGlzdG9yeSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5tb2JpbGUgLnR5cGVfbXNnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDY1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4ubWVzc2FnZSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmJhZGdlIHtcbiAgdG9wOiAtMS41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscussionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-discussions',
                templateUrl: './discussions.component.html',
                styleUrls: ['./discussions.component.scss']
            }]
    }], function () { return [{ type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__["MobileViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student/grade/grade.component.ts":
/*!**************************************************!*\
  !*** ./src/app/student/grade/grade.component.ts ***!
  \**************************************************/
/*! exports provided: GradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeComponent", function() { return GradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mobileView/mobile-view.service */ "./src/app/services/mobileView/mobile-view.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../discussions/discussions.component */ "./src/app/student/discussions/discussions.component.ts");






function GradeComponent_div_0_button_12_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} }
function GradeComponent_div_0_button_12_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} }
function GradeComponent_div_0_button_12_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GradeComponent_div_0_button_12_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GradeComponent_div_0_button_12_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GradeComponent_div_0_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_div_0_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.openGrade(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GradeComponent_div_0_button_12_img_4_Template, 1, 0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GradeComponent_div_0_button_12_img_5_Template, 1, 0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GradeComponent_div_0_button_12_span_10_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GradeComponent_div_0_button_12_span_11_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GradeComponent_div_0_button_12_span_12_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r5.type == "Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r5.type == "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r5.tag == "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r5.tag == "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r5.tag == "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Due : ", list_r5.uploaded, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r5.marks);
} }
function GradeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Obtained Marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GradeComponent_div_0_button_12_Template, 18, 8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cousesList);
} }
function GradeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Quadratic Equation Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Short Discription About the Assignment In that structure of assignment Short Discription About the Assignment In that structure of assignment Short Discription About the Assignment In that structure of assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Due Date: 06th November 2020 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quadratic Equation.PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Choose file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-discussions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GradeComponent_div_2_button_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 68);
} }
function GradeComponent_div_2_button_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 69);
} }
function GradeComponent_div_2_button_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GradeComponent_div_2_button_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GradeComponent_div_2_button_1_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GradeComponent_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GradeComponent_div_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.openGrade(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GradeComponent_div_2_button_1_img_3_Template, 1, 0, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GradeComponent_div_2_button_1_img_4_Template, 1, 0, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GradeComponent_div_2_button_1_span_12_Template, 2, 0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GradeComponent_div_2_button_1_span_13_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GradeComponent_div_2_button_1_span_14_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r14.type == "Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r14.type == "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r14.tag == "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r14.tag == "Upcoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r14.tag == "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Due : ", list_r14.uploaded, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r14.marks);
} }
function GradeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GradeComponent_div_2_button_1_Template, 20, 8, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.cousesList);
} }
function GradeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Quadratic Equation Assignment vghf hgyg jhgyg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Short Discription About the Assignment In that structure of assignment Short Discription About the Assignment In that structure of assignment Short Discription About the Assignment In that structure of assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Due Date: 06th November 2020 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quadratic Equation.PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Choose file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-discussions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GradeComponent {
    constructor(router, responsiveService) {
        this.router = router;
        this.responsiveService = responsiveService;
        this.cousesList = [
            {
                title: 'Assignment - Maths',
                msg: 'This is short description of Lecture.....',
                uploaded: '5th June ',
                type: 'Assignment',
                tag: 'Upcoming',
                marks: '--',
            },
            {
                title: 'Assignment - Maths',
                msg: 'This is short description of Lecture.....',
                uploaded: '3rd June ',
                type: 'Assignment',
                tag: 'Submitted',
                marks: '8/10',
            },
            {
                title: 'Quiz - Quadratic Equation abdjkahdha',
                msg: 'This is short description of Lecture.....',
                uploaded: '4th June ',
                type: 'Quiz',
                tag: 'Overdue',
                marks: '--',
            }
        ];
        this.openGradeView = false;
    }
    ngOnInit() {
        this.onResize();
        this.responsiveService.checkWidth();
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobileView = isMobile;
        });
    }
    openGrade() {
        this.openGradeView = true;
    }
    closeGrade() {
        this.openGradeView = false;
    }
    goToLec() {
        this.router.navigate([`/student/lecture`]);
    }
}
GradeComponent.ɵfac = function GradeComponent_Factory(t) { return new (t || GradeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"])); };
GradeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeComponent, selectors: [["app-grade"]], decls: 4, vars: 4, consts: [["style", "background: #EBECF0;", 4, "ngIf"], ["class", "m-3", "style", "background: white;", 4, "ngIf"], ["class", "m-3", 4, "ngIf"], ["class", "m-3", "style", "background: white; margin-top: 110px;", 4, "ngIf"], [2, "background", "#EBECF0"], ["id", "customers", 2, "width", "100%", "padding-top", "30px", "border-bottom", "1px solid #000000"], [1, "header"], [1, "text-left", 2, "padding-left", "60px"], [1, "text-center", 2, "padding-left", "250px"], [1, "text-center", 2, "padding-left", "60px"], ["type", "button", "class", "cardDetailBox btn btn-block", "style", " background-color: #ffffff; width: 98%; padding: 5px;", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "cardDetailBox", "btn", "btn-block", 2, "background-color", "#ffffff", "width", "98%", "padding", "5px", 3, "click"], [1, "d-flex", "justify-content-between", "p-2"], [1, "d-flex"], [2, "align-self", "center", "margin", "0px 5px"], ["height", "20", "src", "../../../assets/img/edit (1).svg", "alt", "img", 4, "ngIf"], ["height", "20", "src", "../../../assets/img/puzzle-piece.svg", "alt", "img", 4, "ngIf"], [1, "overflow", "ellipsis"], ["class", "ml-2 submitted", 4, "ngIf"], ["class", "ml-2 upcoming", 4, "ngIf"], ["class", "ml-2 overdue", 4, "ngIf"], [1, "m-0", 2, "font-size", "12px", "color", "#757575", "padding-top", "10px"], [1, "btn", 2, "align-self", "center", "margin", "0px 50px", "background-color", "#1B2D3F", "color", "white", "width", "50px", "font-size", "16px", "border-radius", "5px"], ["height", "20", "src", "../../../assets/img/edit (1).svg", "alt", "img"], ["height", "20", "src", "../../../assets/img/puzzle-piece.svg", "alt", "img"], [1, "ml-2", "submitted"], [1, "ml-2", "upcoming"], [1, "ml-2", "overdue"], [1, "m-3", 2, "background", "white"], [1, "card"], [1, "card-header", "d-flex", 2, "font-size", "20px", "text-align", "left", "background-color", "#1B2D3F", "color", "#ffffff", "padding-left", "50px"], ["height", "25", "src", "../../../assets/img/edit (1).svg", "alt", "img", 1, "m-3"], [2, "padding-top", "10px", "padding-left", "10px"], [1, "card-body", 2, "font-size", "15px", "padding", "50px"], [1, "fw-700"], [1, "card-footer", 2, "padding-right", "50px", "padding-left", "50px", "background-color", "#ffffff", "border", "none"], ["type", "button", 1, "btn"], ["height", "25", "src", "../../../assets/img/download-to-storage-drive.svg", "alt", "img"], ["href", "", 2, "font-size", "15px", "font-weight", "bold", "padding-left", "10px", "padding-top", "10px", "color", "#000000"], [1, "card-footer"], [1, "input-group"], [1, "custom-file"], ["type", "file", "id", "inputGroupFile04", 1, "custom-file-input"], ["for", "inputGroupFile04", 1, "custom-file-label"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 2, "background-color", "#1B2D3F", "color", "#ffffff", "padding-left", "40px", "padding-right", "40px"], ["id", "accordionExample", 1, "accordion", "pt-3"], ["id", "headingOne", 1, "card-header", 2, "background-color", "#1B2D3F"], ["data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "mb-0", "d-flex"], [1, "courseMonth"], ["height", "20", "src", "../../../assets/img/chevron-arrow-down.svg", "alt", "img", 1, "m-2"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse"], [1, "card-body"], [1, "cardDetail"], [1, "m-3"], ["type", "button", "class", "cardDetailBox btn btn-block", "style", " background-color: #ffffff; width: 92%; padding: 5px;", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "cardDetailBox", "btn", "btn-block", 2, "background-color", "#ffffff", "width", "92%", "padding", "5px", 3, "click"], [1, "d-flex", "p-3"], ["height", "25", "src", "../../../assets/img/edit (1).svg", "alt", "img", 4, "ngIf"], ["height", "25", "src", "../../../assets/img/puzzle-piece.svg", "alt", "img", 4, "ngIf"], [1, "w-100", 2, "margin-left", "1rem"], [1, "overflow", "ellipsis", 2, "width", "200px"], [1, "d-flex", "justify-content-between", "p-2", 2, "width", "80%"], ["class", "ml-2 submit", 4, "ngIf"], ["class", "ml-2 upcom", 4, "ngIf"], ["class", "ml-2 over", 4, "ngIf"], [1, "m-0", 2, "font-size", "12px", "color", "#757575"], [1, "btn", 2, "align-self", "center", "margin", "0px 2px", "background-color", "#1B2D3F", "color", "white", "width", "20%", "font-size", "16px", "border-radius", "5px"], ["height", "25", "src", "../../../assets/img/edit (1).svg", "alt", "img"], ["height", "25", "src", "../../../assets/img/puzzle-piece.svg", "alt", "img"], [1, "ml-2", "submit"], [1, "ml-2", "upcom"], [1, "ml-2", "over"], [1, "m-3", 2, "background", "white", "margin-top", "110px"], ["height", "25", "src", "../../../assets/img/edit (1).svg", "alt", "img", 2, "margin", "auto", "margin-left", "5px"], [1, "overflow", "ellipsi"]], template: function GradeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GradeComponent_div_0_Template, 13, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GradeComponent_div_1_Template, 37, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GradeComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GradeComponent_div_3_Template, 37, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView && !ctx.openGradeView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView && ctx.openGradeView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView && !ctx.openGradeView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView && ctx.openGradeView);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_4__["DiscussionsComponent"]], styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\n.header[_ngcontent-%COMP%] {\n  border-bottom: 3px solid black;\n  font-size: 16px;\n  font-weight: 700;\n}\n.headerMobile[_ngcontent-%COMP%] {\n  border-bottom: 3px solid black;\n  font-size: 12px;\n  font-weight: 700;\n}\ntable#customers[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 5px;\n}\ntable#customers[_ngcontent-%COMP%]   .rowData[_ngcontent-%COMP%], table#customers[_ngcontent-%COMP%]   .rowDataMobile[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\ntable#customers[_ngcontent-%COMP%]   .rowData[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table#customers[_ngcontent-%COMP%]   .rowDataMobile[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 0px 4px 10px;\n}\ntable#customers[_ngcontent-%COMP%]   .rowData[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, table#customers[_ngcontent-%COMP%]   .rowDataMobile[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\ntable#customers[_ngcontent-%COMP%]   .rowData[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, table#customers[_ngcontent-%COMP%]   .rowDataMobile[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\ntable#customers[_ngcontent-%COMP%]   .rowDataMobile[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\ntable#customers[_ngcontent-%COMP%]   .rowDataMobile[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 5px 0px 5px 5px;\n}\n.submit[_ngcontent-%COMP%] {\n  padding: 2px;\n  background: green;\n  border-radius: 10px;\n  color: white;\n  border: 1px solid green;\n  font-size: 10px;\n  height: 20px;\n  width: 50% !important;\n  padding-bottom: 10px;\n}\n.over[_ngcontent-%COMP%] {\n  padding: 2px;\n  background: #ffffff;\n  border-radius: 10px;\n  color: red;\n  border: 1px solid red;\n  font-size: 10px;\n  height: 20px;\n  width: 50% !important;\n  padding-bottom: 10px;\n}\n.upcom[_ngcontent-%COMP%] {\n  padding: 2px;\n  background: white;\n  border-radius: 10px;\n  color: green;\n  border: 1px solid green;\n  font-size: 10px;\n  height: 20px;\n  width: 50% !important;\n  padding-bottom: 10px;\n}\n.submitted[_ngcontent-%COMP%] {\n  padding: 2px;\n  background: green;\n  border-radius: 10px;\n  color: white;\n  border: 1px solid green;\n  font-size: 12px;\n  height: 25px;\n  width: 100px !important;\n  padding-bottom: 10px;\n  margin-top: 6px;\n}\n.overdue[_ngcontent-%COMP%] {\n  padding: 2px;\n  background: #ffffff;\n  border-radius: 10px;\n  color: red;\n  border: 1px solid red;\n  font-size: 12px;\n  height: 25px;\n  width: 100px !important;\n  padding-bottom: 10px;\n  margin-top: 6px;\n}\n.upcoming[_ngcontent-%COMP%] {\n  padding: 2px;\n  background: white;\n  border-radius: 10px;\n  color: green;\n  border: 1px solid green;\n  font-size: 12px;\n  height: 25px;\n  width: 100px !important;\n  padding-bottom: 10px;\n  margin-top: 6px;\n}\n.courseMonth[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 100%;\n  text-align: left;\n}\n.cardDetailBox[_ngcontent-%COMP%] {\n  margin: 15px;\n  background: #ffffff;\n  border: 0.2px solid #ffffff;\n  overflow: auto;\n  width: 93%;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.m-0[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ellipsis[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding-top: 8px;\n  text-overflow: ellipsis;\n  width: 15em;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.ellipsi[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  text-overflow: ellipsis;\n  width: 90%;\n  margin-left: -50px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.courseMonth[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 100%;\n  text-align: left;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zdHVkZW50L2dyYWRlL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX21peGluLnNjc3MiLCIuLi8uLi9hcHAvc3R1ZGVudC9ncmFkZS9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXHNhc3NcXGJhc2VcXF9jb2xvcnMuc2NzcyIsIi4uLy4uL2FwcC9zdHVkZW50L2dyYWRlL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvZ3JhZGUvZ3JhZGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi9hcHAvc3R1ZGVudC9ncmFkZS9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXC4uXFxhcHBcXHN0dWRlbnRcXGdyYWRlXFxncmFkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7Ozs7Q0FBQTtBQVdBOzs7Ozs7Ozs7O0NBQUE7QUNYSTtFQUNJLGNDRlM7QUNvQmpCO0FGaEJJO0VBQ0ksY0NEVTtBQ21CbEI7QUZoQkk7RUFDSSxjQ0xLO0FDdUJiO0FGaEJJO0VBQ0ksY0NMVztBQ3VCbkI7QUZaSTtFQUNJLHlCQ2xCUztBQ2lDakI7QUZiSTtFQUNJLHlCQ3BCUztBQ21DakI7QUZiSTtFQUNJLHlCQ3BCVTtBQ21DbEI7QUZiSTtFQUNJLHlCQ3hCSztBQ3VDYjtBRmJJO0VBQ0kseUJDeEJXO0FDdUNuQjtBQzVDQTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEK0NKO0FDNUNBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQrQ0o7QUM1Q0E7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FEK0NKO0FDOUNJOztFQUVJLGVBQUE7QURnRFI7QUMvQ1E7O0VBQ0kseUJBQUE7QURrRFo7QUNoRFE7O0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtBRG1EWjtBQ2pEUTs7RUFDSSw2QkFBQTtFQUNBLGdDQUFBO0FEb0RaO0FDaERJO0VBQ0ksZUFBQTtBRGtEUjtBQ2pEUTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtBRG1EWjtBQzdDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FEK0NKO0FDNUNBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUQ4Q0o7QUMzQ0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBRDZDSjtBQ3pDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRDRDSjtBQ3pDQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRDJDSjtBQ3hDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRDBDSjtBQ3ZDQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUQwQ0o7QUN4Q0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBRDJDSjtBQ3pDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUQ0Q0o7QUMxQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUQ2Q047QUMzQ0U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FEOENOO0FDNUNFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUQrQ0oiLCJmaWxlIjoiLi4vLi4vYXBwL3N0dWRlbnQvZ3JhZGUvZ3JhZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIE1FRElBIFFVRVJZIE1BTkFHRVJcblxuLypcbjBweCAtIDM2MHB4Olx0XHRYUyBQaG9uZVxuMzYwcHggLSA1NzZweDogXHRcdFBob25lXG41NzZweCAtIDc2OHB4OiBcdFx0VGFibGV0IFBvcnRyYWl0XG43NjhweCAtIDk5MnB4Olx0XHRUYWJsZXQgTGFuZHNjYXBlXG45OTJweCAtIDEyMDBweDogXHRkZXNrdG9wXG4xMjAwcHggLSAxOTIwcHg6XHRub3JtYWwgTWVkaWEgcXVlcmllc1xuMTkyMHB4IGFuZCB1cDogIFx0RnVsbCBIRFxuKi9cblxuXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuXG5AbWl4aW4gcmVzcG9uZE1heCgkYnJlYWtwb2ludCkge1xuXHRAaWYgJGJyZWFrcG9pbnQgPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuICB9XG4gIEBpZiAkYnJlYWtwb2ludCA9PSBoZC1kZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTBlbSkgeyBAY29udGVudCB9OyAvLzE0NDBweFxuICB9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5AbWl4aW4gcmVzcG9uZE1pbigkYnJlYWtwb2ludG1pbikge1xuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5cblxuXG4kcmVtLWJhc2VsaW5lOiAxNnB4ICFkZWZhdWx0O1xuJHJlbS1mYWxsYmFjazogZmFsc2UgIWRlZmF1bHQ7XG4kcmVtLXB4LW9ubHk6IGZhbHNlICFkZWZhdWx0O1xuXG5AZnVuY3Rpb24gcmVtLXNlcGFyYXRvcigkbGlzdCwgJHNlcGFyYXRvcjogZmFsc2UpIHtcbiAgQGlmICRzZXBhcmF0b3IgPT0gXCJjb21tYVwiIG9yICRzZXBhcmF0b3IgPT0gXCJzcGFjZVwiIHtcbiAgICBAcmV0dXJuIGFwcGVuZCgkbGlzdCwgbnVsbCwgJHNlcGFyYXRvcik7XG4gIH0gXG4gIFxuICBAaWYgZnVuY3Rpb24tZXhpc3RzKFwibGlzdC1zZXBhcmF0b3JcIikgPT0gdHJ1ZSB7XG4gICAgQHJldHVybiBsaXN0LXNlcGFyYXRvcigkbGlzdCk7XG4gIH1cblxuICAvLyBsaXN0LXNlcGFyYXRvciBwb2x5ZmlsbCBieSBIdWdvIEdpcmF1ZGVsIChodHRwczovL3Nhc3MtY29tcGF0aWJpbGl0eS5naXRodWIuaW8vI2xpc3Rfc2VwYXJhdG9yX2Z1bmN0aW9uKVxuICAkdGVzdC1saXN0OiAoKTtcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xuICAgICR0ZXN0LWxpc3Q6IGFwcGVuZCgkdGVzdC1saXN0LCAkaXRlbSwgc3BhY2UpO1xuICB9XG5cbiAgQHJldHVybiBpZigkdGVzdC1saXN0ID09ICRsaXN0LCBzcGFjZSwgY29tbWEpO1xufVxuXG5AbWl4aW4gcmVtLWJhc2VsaW5lKCR6b29tOiAxMDAlKSB7XG4gIGZvbnQtc2l6ZTogJHpvb20gLyAxNnB4ICogJHJlbS1iYXNlbGluZTtcbn1cblxuQGZ1bmN0aW9uIHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlcy4uLikge1xuICAkcmVzdWx0OiAoKTtcbiAgJHNlcGFyYXRvcjogcmVtLXNlcGFyYXRvcigkdmFsdWVzKTtcbiAgXG4gIEBlYWNoICR2YWx1ZSBpbiAkdmFsdWVzIHtcbiAgICBAaWYgdHlwZS1vZigkdmFsdWUpID09IFwibnVtYmVyXCIgYW5kIHVuaXQoJHZhbHVlKSA9PSBcInJlbVwiIGFuZCAkdG8gPT0gXCJweFwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAxcmVtICogJHJlbS1iYXNlbGluZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicHhcIiBhbmQgJHRvID09IFwicmVtXCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvICRyZW0tYmFzZWxpbmUgKiAxcmVtLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcImxpc3RcIiB7XG4gICAgICAkdmFsdWUtc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSk7XG4gICAgICAkdmFsdWU6IHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlLi4uKTtcbiAgICAgICR2YWx1ZTogcmVtLXNlcGFyYXRvcigkdmFsdWUsICR2YWx1ZS1zZXBhcmF0b3IpO1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKGxlbmd0aCgkcmVzdWx0KSA9PSAxLCBudGgoJHJlc3VsdCwgMSksICRyZXN1bHQpO1xufVxuXG5AZnVuY3Rpb24gcmVtKCR2YWx1ZXMuLi4pIHtcbiAgQGlmICRyZW0tcHgtb25seSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgfVxufVxuXG5AbWl4aW4gcmVtKCRwcm9wZXJ0aWVzLCAkdmFsdWVzLi4uKSB7XG4gIEBpZiB0eXBlLW9mKCRwcm9wZXJ0aWVzKSA9PSBcIm1hcFwiIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gbWFwLWtleXMoJHByb3BlcnRpZXMpIHtcbiAgICAgIEBpbmNsdWRlIHJlbSgkcHJvcGVydHksIG1hcC1nZXQoJHByb3BlcnRpZXMsICRwcm9wZXJ0eSkpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgIEBpZiAkcmVtLWZhbGxiYWNrIG9yICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocHgsICR2YWx1ZXMuLi4pO1xuICAgICAgfVxuICAgICAgQGlmIG5vdCAkcmVtLXB4LW9ubHkge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1peGluIGNvbnRlbnQtY2VudGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn0iLCJAaW1wb3J0IFwiLi4vYmFzZS92YXJpYWJsZXNcIjtcblxuLnRleHQge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrO1xuICAgIH1cbiAgICAmLWdyZXkge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG4gICBcbn1cblxuLmJnIHtcbiAgICAmLXByaW1hcnkxIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLXByaW1hcnkyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkyO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xuICAgIH1cbiAgICAmLWdyZXktbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG59IiwiLy8gQ29sb3JzXG5cbiRjb2xvci1wcmltYXJ5MTogcmdiYSgyNyw0NSw2MywxKTtcbiRjb2xvci1wcmltYXJ5MjogcmdiYSg1Myw3MCw4OCwxKTtcblxuJGNvbG9yLWdyZXk6IHJnYmEoMTAzLCAxMDMsIDEwMywgMSk7XG4kY29sb3ItZ3JleS1kYXJrOiByZ2JhKDUyLCA1OCwgNjQsIDEpO1xuXG4kY29sb3ItZ3JleS1saWdodDogI0VCRUNGMDtcblxuJGNvbG9yLXN1Y2Nlc3M6IHJnYmEoODIsIDIwOSwgMTQ1LCAxKTtcbiRjb2xvci1lcnJvcjogcmdiYSgyMzQsIDg1LCA4NSwgMSk7XG5cbi8vIEZvbnRzXG5cbiR0aGluOiAxMDA7XG4kZXh0cmEtbGlnaHQ6IDIwMDtcbiRsaWdodDogMzAwO1xuJHJlZ3VsYXItNDAwOiA0MDA7XG4kbWVkaXVtOiA1MDA7XG4kc2VtaS1ib2xkOiA2MDA7XG4kYm9sZDogNzAwO1xuJGV4dHJhLWJvbGQ6IDgwMDtcbiRibGFjay05MDA6IDkwMDsiLCIvKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuLypcbiRicmVha3BvaW50IGFyZ3VlbWVudCBjaG9pY2VzOlxuLSB4cy1waG9uZVxuLSBwaG9uZVxuLSB0YWItcG9ydFxuLSB0YWItbGFuZFxuLSBkZXNrdG9wXG4tIGZ1bGwtaGRcblxuMWVtID0gMTZweFxuKi9cbi50ZXh0LXByaW1hcnkxIHtcbiAgY29sb3I6ICMxYjJkM2Y7XG59XG4udGV4dC1ncmV5LWRhcmsge1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbi50ZXh0LWdyZXkge1xuICBjb2xvcjogIzY3Njc2Nztcbn1cbi50ZXh0LWdyZXktbGlnaHQge1xuICBjb2xvcjogI0VCRUNGMDtcbn1cblxuLmJnLXByaW1hcnkxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmQzZjtcbn1cbi5iZy1wcmltYXJ5MiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NTg7XG59XG4uYmctZ3JleS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3Njc2Nztcbn1cbi5iZy1ncmV5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUNGMDtcbn1cblxuLmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaGVhZGVyTW9iaWxlIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnRhYmxlI2N1c3RvbWVycyB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwIDVweDtcbn1cbnRhYmxlI2N1c3RvbWVycyAucm93RGF0YSxcbnRhYmxlI2N1c3RvbWVycyAucm93RGF0YU1vYmlsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbnRhYmxlI2N1c3RvbWVycyAucm93RGF0YSB0ZCxcbnRhYmxlI2N1c3RvbWVycyAucm93RGF0YU1vYmlsZSB0ZCB7XG4gIHBhZGRpbmc6IDVweCAwcHggNHB4IDEwcHg7XG59XG50YWJsZSNjdXN0b21lcnMgLnJvd0RhdGEgdGQ6Zmlyc3QtY2hpbGQsXG50YWJsZSNjdXN0b21lcnMgLnJvd0RhdGFNb2JpbGUgdGQ6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxudGFibGUjY3VzdG9tZXJzIC5yb3dEYXRhIHRkOmxhc3QtY2hpbGQsXG50YWJsZSNjdXN0b21lcnMgLnJvd0RhdGFNb2JpbGUgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cbnRhYmxlI2N1c3RvbWVycyAucm93RGF0YU1vYmlsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbnRhYmxlI2N1c3RvbWVycyAucm93RGF0YU1vYmlsZSB0ZCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogNXB4IDBweCA1cHggNXB4O1xufVxuXG4uc3VibWl0IHtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5vdmVyIHtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogcmVkO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4udXBjb20ge1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogZ3JlZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnN1Ym1pdHRlZCB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLm92ZXJkdWUge1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4udXBjb21pbmcge1xuICBwYWRkaW5nOiAycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogZ3JlZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5jb3Vyc2VNb250aCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYXJkRGV0YWlsQm94IHtcbiAgbWFyZ2luOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDAuMnB4IHNvbGlkICNmZmZmZmY7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogOTMlO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubS0wIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmVsbGlwc2lzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDE1ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5lbGxpcHNpIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvdXJzZU1vbnRoIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmZmZmY7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL2Jhc2UvbWl4aW5cIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL2NvbG9yc1wiO1xuXG4uaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5oZWFkZXJNb2JpbGUge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxudGFibGUjY3VzdG9tZXJzIHtcbiAgICBib3JkZXItY29sbGFwc2U6c2VwYXJhdGU7IFxuICAgIGJvcmRlci1zcGFjaW5nOjAgNXB4O1xuICAgIC5yb3dEYXRhLFxuICAgIC5yb3dEYXRhTW9iaWxlIHsgXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGQge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweCA0cHggMTBweDtcbiAgICAgICAgfVxuICAgICAgICB0ZDpmaXJzdC1jaGlsZCB7IFxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7IFxuICAgICAgICB9XG4gICAgICAgIHRkOmxhc3QtY2hpbGQgeyBcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnJvd0RhdGFNb2JpbGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRkIHsgXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLnN1Ym1pdCB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIC8vIHdpZHRoOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ub3ZlciB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAvLyB3aWR0aDogMjVweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnVwY29tIHtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgLy8gd2lkdGg6IDI1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cblxuLnN1Ym1pdHRlZCB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ub3ZlcmR1ZSB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAvLyB3aWR0aDogMjVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAxMDBweCAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi51cGNvbWluZyB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgIC8vIHdpZHRoOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uY291cnNlTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufSAgIFxuLmNhcmREZXRhaWxCb3gge1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMC4ycHggc29saWQgI2ZmZmZmZjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogOTMlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAubS0we1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIC5lbGxpcHNpc3tcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aWR0aDogMTVlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmVsbGlwc2l7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmNvdXJzZU1vbnRoIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GradeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grade',
                templateUrl: './grade.component.html',
                styleUrls: ['./grade.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/student/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mobileView/mobile-view.service */ "./src/app/services/mobileView/mobile-view.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _common_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/home/home.component */ "./src/app/common/home/home.component.ts");
/* harmony import */ var _common_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/mobile-header/mobile-header.component */ "./src/app/common/mobile-header/mobile-header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");











function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-common-home", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "student");
} }
const _c0 = function (a0) { return { "fixed-top": a0 }; };
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-mobile-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-common-home", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.isMobileView));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "student");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "student");
} }
class HomeComponent {
    constructor(router, responsiveService, authService) {
        this.router = router;
        this.responsiveService = responsiveService;
        this.authService = authService;
    }
    ngOnInit() {
        this.onResize();
        this.responsiveService.checkWidth();
        // this.authService.getClasses().subscribe(res => console.log(res))
    }
    toggle() {
        $('#sidebar').toggleClass('active');
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobileView = isMobile;
        });
    }
    goToCourse() {
        this.router.navigate(['/student/course']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "fixed-top"], [1, "wrapper", 2, "margin-top", "47px"], [1, "fixed-sidebar"], ["id", "content", 1, "courseContent"], [3, "type"], [3, "ngClass"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 8, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 6, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _common_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeCommonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _common_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_8__["MobileHeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\nh1[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #000;\n  line-height: 0.1em;\n  margin: 10px 0 20px;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ebecf0;\n  padding: 0 15px 0 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  margin-top: 0.4rem;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n.fixed-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n}\n.courseContent[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 200px;\n}\n.courseContentActive[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 80px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zdHVkZW50L2hvbWUvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFxzYXNzXFxiYXNlXFxfbWl4aW4uc2NzcyIsIi4uLy4uL2FwcC9zdHVkZW50L2hvbWUvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFxzYXNzXFxiYXNlXFxfY29sb3JzLnNjc3MiLCIuLi8uLi9hcHAvc3R1ZGVudC9ob21lL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvaG9tZS9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXC4uXFxhcHBcXHN0dWRlbnRcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7Ozs7Ozs7O0NBQUE7QUFXQTs7Ozs7Ozs7OztDQUFBO0FDWEk7RUFDSSxjQ0ZTO0FDb0JqQjtBRmhCSTtFQUNJLGNDRFU7QUNtQmxCO0FGaEJJO0VBQ0ksY0NMSztBQ3VCYjtBRmhCSTtFQUNJLGNDTFc7QUN1Qm5CO0FGWkk7RUFDSSx5QkNsQlM7QUNpQ2pCO0FGYkk7RUFDSSx5QkNwQlM7QUNtQ2pCO0FGYkk7RUFDSSx5QkNwQlU7QUNtQ2xCO0FGYkk7RUFDSSx5QkN4Qks7QUN1Q2I7QUZiSTtFQUNJLHlCQ3hCVztBQ3VDbkI7QUMzQ0E7RUFDSSxXQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FENkNKO0FDMUNBO0VBRUksbUJBQUE7RUFDQSxtQkFBQTtBRDRDSjtBQ3pDQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUQ0Q0o7QUN6Q0E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QUQ0Q0o7QUN6Q0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBRDRDSjtBQzFDQTtFQUNJLFdBQUE7RUFDRixrQkFBQTtBRDZDRjtBQzNDQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBRDhDQSIsImZpbGUiOiIuLi8uLi9hcHAvc3R1ZGVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIE1FRElBIFFVRVJZIE1BTkFHRVJcblxuLypcbjBweCAtIDM2MHB4Olx0XHRYUyBQaG9uZVxuMzYwcHggLSA1NzZweDogXHRcdFBob25lXG41NzZweCAtIDc2OHB4OiBcdFx0VGFibGV0IFBvcnRyYWl0XG43NjhweCAtIDk5MnB4Olx0XHRUYWJsZXQgTGFuZHNjYXBlXG45OTJweCAtIDEyMDBweDogXHRkZXNrdG9wXG4xMjAwcHggLSAxOTIwcHg6XHRub3JtYWwgTWVkaWEgcXVlcmllc1xuMTkyMHB4IGFuZCB1cDogIFx0RnVsbCBIRFxuKi9cblxuXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuXG5AbWl4aW4gcmVzcG9uZE1heCgkYnJlYWtwb2ludCkge1xuXHRAaWYgJGJyZWFrcG9pbnQgPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuICB9XG4gIEBpZiAkYnJlYWtwb2ludCA9PSBoZC1kZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTBlbSkgeyBAY29udGVudCB9OyAvLzE0NDBweFxuICB9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5AbWl4aW4gcmVzcG9uZE1pbigkYnJlYWtwb2ludG1pbikge1xuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5cblxuXG4kcmVtLWJhc2VsaW5lOiAxNnB4ICFkZWZhdWx0O1xuJHJlbS1mYWxsYmFjazogZmFsc2UgIWRlZmF1bHQ7XG4kcmVtLXB4LW9ubHk6IGZhbHNlICFkZWZhdWx0O1xuXG5AZnVuY3Rpb24gcmVtLXNlcGFyYXRvcigkbGlzdCwgJHNlcGFyYXRvcjogZmFsc2UpIHtcbiAgQGlmICRzZXBhcmF0b3IgPT0gXCJjb21tYVwiIG9yICRzZXBhcmF0b3IgPT0gXCJzcGFjZVwiIHtcbiAgICBAcmV0dXJuIGFwcGVuZCgkbGlzdCwgbnVsbCwgJHNlcGFyYXRvcik7XG4gIH0gXG4gIFxuICBAaWYgZnVuY3Rpb24tZXhpc3RzKFwibGlzdC1zZXBhcmF0b3JcIikgPT0gdHJ1ZSB7XG4gICAgQHJldHVybiBsaXN0LXNlcGFyYXRvcigkbGlzdCk7XG4gIH1cblxuICAvLyBsaXN0LXNlcGFyYXRvciBwb2x5ZmlsbCBieSBIdWdvIEdpcmF1ZGVsIChodHRwczovL3Nhc3MtY29tcGF0aWJpbGl0eS5naXRodWIuaW8vI2xpc3Rfc2VwYXJhdG9yX2Z1bmN0aW9uKVxuICAkdGVzdC1saXN0OiAoKTtcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xuICAgICR0ZXN0LWxpc3Q6IGFwcGVuZCgkdGVzdC1saXN0LCAkaXRlbSwgc3BhY2UpO1xuICB9XG5cbiAgQHJldHVybiBpZigkdGVzdC1saXN0ID09ICRsaXN0LCBzcGFjZSwgY29tbWEpO1xufVxuXG5AbWl4aW4gcmVtLWJhc2VsaW5lKCR6b29tOiAxMDAlKSB7XG4gIGZvbnQtc2l6ZTogJHpvb20gLyAxNnB4ICogJHJlbS1iYXNlbGluZTtcbn1cblxuQGZ1bmN0aW9uIHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlcy4uLikge1xuICAkcmVzdWx0OiAoKTtcbiAgJHNlcGFyYXRvcjogcmVtLXNlcGFyYXRvcigkdmFsdWVzKTtcbiAgXG4gIEBlYWNoICR2YWx1ZSBpbiAkdmFsdWVzIHtcbiAgICBAaWYgdHlwZS1vZigkdmFsdWUpID09IFwibnVtYmVyXCIgYW5kIHVuaXQoJHZhbHVlKSA9PSBcInJlbVwiIGFuZCAkdG8gPT0gXCJweFwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAxcmVtICogJHJlbS1iYXNlbGluZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicHhcIiBhbmQgJHRvID09IFwicmVtXCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvICRyZW0tYmFzZWxpbmUgKiAxcmVtLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcImxpc3RcIiB7XG4gICAgICAkdmFsdWUtc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSk7XG4gICAgICAkdmFsdWU6IHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlLi4uKTtcbiAgICAgICR2YWx1ZTogcmVtLXNlcGFyYXRvcigkdmFsdWUsICR2YWx1ZS1zZXBhcmF0b3IpO1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKGxlbmd0aCgkcmVzdWx0KSA9PSAxLCBudGgoJHJlc3VsdCwgMSksICRyZXN1bHQpO1xufVxuXG5AZnVuY3Rpb24gcmVtKCR2YWx1ZXMuLi4pIHtcbiAgQGlmICRyZW0tcHgtb25seSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgfVxufVxuXG5AbWl4aW4gcmVtKCRwcm9wZXJ0aWVzLCAkdmFsdWVzLi4uKSB7XG4gIEBpZiB0eXBlLW9mKCRwcm9wZXJ0aWVzKSA9PSBcIm1hcFwiIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gbWFwLWtleXMoJHByb3BlcnRpZXMpIHtcbiAgICAgIEBpbmNsdWRlIHJlbSgkcHJvcGVydHksIG1hcC1nZXQoJHByb3BlcnRpZXMsICRwcm9wZXJ0eSkpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgIEBpZiAkcmVtLWZhbGxiYWNrIG9yICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocHgsICR2YWx1ZXMuLi4pO1xuICAgICAgfVxuICAgICAgQGlmIG5vdCAkcmVtLXB4LW9ubHkge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1peGluIGNvbnRlbnQtY2VudGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn0iLCJAaW1wb3J0IFwiLi4vYmFzZS92YXJpYWJsZXNcIjtcblxuLnRleHQge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrO1xuICAgIH1cbiAgICAmLWdyZXkge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG4gICBcbn1cblxuLmJnIHtcbiAgICAmLXByaW1hcnkxIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLXByaW1hcnkyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkyO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xuICAgIH1cbiAgICAmLWdyZXktbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG59IiwiLy8gQ29sb3JzXG5cbiRjb2xvci1wcmltYXJ5MTogcmdiYSgyNyw0NSw2MywxKTtcbiRjb2xvci1wcmltYXJ5MjogcmdiYSg1Myw3MCw4OCwxKTtcblxuJGNvbG9yLWdyZXk6IHJnYmEoMTAzLCAxMDMsIDEwMywgMSk7XG4kY29sb3ItZ3JleS1kYXJrOiByZ2JhKDUyLCA1OCwgNjQsIDEpO1xuXG4kY29sb3ItZ3JleS1saWdodDogI0VCRUNGMDtcblxuJGNvbG9yLXN1Y2Nlc3M6IHJnYmEoODIsIDIwOSwgMTQ1LCAxKTtcbiRjb2xvci1lcnJvcjogcmdiYSgyMzQsIDg1LCA4NSwgMSk7XG5cbi8vIEZvbnRzXG5cbiR0aGluOiAxMDA7XG4kZXh0cmEtbGlnaHQ6IDIwMDtcbiRsaWdodDogMzAwO1xuJHJlZ3VsYXItNDAwOiA0MDA7XG4kbWVkaXVtOiA1MDA7XG4kc2VtaS1ib2xkOiA2MDA7XG4kYm9sZDogNzAwO1xuJGV4dHJhLWJvbGQ6IDgwMDtcbiRibGFjay05MDA6IDkwMDsiLCIvKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuLypcbiRicmVha3BvaW50IGFyZ3VlbWVudCBjaG9pY2VzOlxuLSB4cy1waG9uZVxuLSBwaG9uZVxuLSB0YWItcG9ydFxuLSB0YWItbGFuZFxuLSBkZXNrdG9wXG4tIGZ1bGwtaGRcblxuMWVtID0gMTZweFxuKi9cbi50ZXh0LXByaW1hcnkxIHtcbiAgY29sb3I6ICMxYjJkM2Y7XG59XG4udGV4dC1ncmV5LWRhcmsge1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbi50ZXh0LWdyZXkge1xuICBjb2xvcjogIzY3Njc2Nztcbn1cbi50ZXh0LWdyZXktbGlnaHQge1xuICBjb2xvcjogI0VCRUNGMDtcbn1cblxuLmJnLXByaW1hcnkxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmQzZjtcbn1cbi5iZy1wcmltYXJ5MiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NTg7XG59XG4uYmctZ3JleS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3Njc2Nztcbn1cbi5iZy1ncmV5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUNGMDtcbn1cblxuaDEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjFlbTtcbiAgbWFyZ2luOiAxMHB4IDAgMjBweDtcbn1cblxuaDEgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNlYmVjZjA7XG4gIHBhZGRpbmc6IDAgMTVweCAwIDA7XG59XG5cbmg1IHtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICBtYXJnaW4tdG9wOiAwLjRyZW07XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5maXhlZC1zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb3Vyc2VDb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbn1cblxuLmNvdXJzZUNvbnRlbnRBY3RpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDgwcHggIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvYmFzZS9taXhpblwiO1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL2Jhc2UvY29sb3JzXCI7XG5cblxuaDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgbGluZS1oZWlnaHQ6IDAuMWVtO1xuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XG59XG5cbmgxIHNwYW4ge1xuICAgIC8vIHotaW5kZXg6IDEwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZWJlY2YwO1xuICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XG59XG5cbmg1IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gICAgbWFyZ2luLXRvcDogMC40cmVtO1xufVxuXG4ud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuICBcbiAgLmZpeGVkLXNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbi5jb3Vyc2VDb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG59ICBcbi5jb3Vyc2VDb250ZW50QWN0aXZlIHtcbndpZHRoOiAxMDAlO1xubWFyZ2luLWxlZnQ6IDgwcHggIWltcG9ydGFudDtcblxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"] }, { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student/lecture/lecture.component.ts":
/*!******************************************************!*\
  !*** ./src/app/student/lecture/lecture.component.ts ***!
  \******************************************************/
/*! exports provided: LectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LectureComponent", function() { return LectureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mobileView/mobile-view.service */ "./src/app/services/mobileView/mobile-view.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assignment/assignment.component */ "./src/app/student/assignment/assignment.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");









function LectureComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LectureComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "student");
} }
class LectureComponent {
    constructor(router, responsiveService) {
        this.router = router;
        this.responsiveService = responsiveService;
        this.openGradeView = false;
    }
    ngOnInit() {
        this.onResize();
        this.responsiveService.checkWidth();
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobileView = isMobile;
        });
    }
    closeGrade() {
        this.router.navigate([`/student/course`]);
    }
}
LectureComponent.ɵfac = function LectureComponent_Factory(t) { return new (t || LectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"])); };
LectureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LectureComponent, selectors: [["app-lecture"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "fixed-top"], [1, "wrapper", 2, "margin-top", "47px"], [1, "fixed-sidebar"], ["id", "content", 1, "courseContent"], [2, "margin-top", "70px"], [3, "type"]], template: function LectureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LectureComponent_div_0_Template, 8, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LectureComponent_div_1_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_6__["AssignmentComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n.fixed-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0px;\n  height: 100%;\n}\n.courseContent[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 200px;\n}\n.courseContentActive[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 80px !important;\n}\n.courseMonth[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 100%;\n  text-align: left;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zdHVkZW50L2xlY3R1cmUvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFxzYXNzXFxiYXNlXFxfbWl4aW4uc2NzcyIsIi4uLy4uL2FwcC9zdHVkZW50L2xlY3R1cmUvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFxzYXNzXFxiYXNlXFxfY29sb3JzLnNjc3MiLCIuLi8uLi9hcHAvc3R1ZGVudC9sZWN0dXJlL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvbGVjdHVyZS9sZWN0dXJlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvbGVjdHVyZS9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXC4uXFxhcHBcXHN0dWRlbnRcXGxlY3R1cmVcXGxlY3R1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7Ozs7Ozs7O0NBQUE7QUFXQTs7Ozs7Ozs7OztDQUFBO0FDWEk7RUFDSSxjQ0ZTO0FDb0JqQjtBRmhCSTtFQUNJLGNDRFU7QUNtQmxCO0FGaEJJO0VBQ0ksY0NMSztBQ3VCYjtBRmhCSTtFQUNJLGNDTFc7QUN1Qm5CO0FGWkk7RUFDSSx5QkNsQlM7QUNpQ2pCO0FGYkk7RUFDSSx5QkNwQlM7QUNtQ2pCO0FGYkk7RUFDSSx5QkNwQlU7QUNtQ2xCO0FGYkk7RUFDSSx5QkN4Qks7QUN1Q2I7QUZiSTtFQUNJLHlCQ3hCVztBQ3VDbkI7QUM1Q0E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QUQrQ0o7QUM1Q0U7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUQrQ0o7QUM3Q0E7RUFDSSxXQUFBO0VBQ0Ysa0JBQUE7QURnREY7QUM5Q0E7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QURpREE7QUM3Q0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRGdESiIsImZpbGUiOiIuLi8uLi9hcHAvc3R1ZGVudC9sZWN0dXJlL2xlY3R1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIE1FRElBIFFVRVJZIE1BTkFHRVJcblxuLypcbjBweCAtIDM2MHB4Olx0XHRYUyBQaG9uZVxuMzYwcHggLSA1NzZweDogXHRcdFBob25lXG41NzZweCAtIDc2OHB4OiBcdFx0VGFibGV0IFBvcnRyYWl0XG43NjhweCAtIDk5MnB4Olx0XHRUYWJsZXQgTGFuZHNjYXBlXG45OTJweCAtIDEyMDBweDogXHRkZXNrdG9wXG4xMjAwcHggLSAxOTIwcHg6XHRub3JtYWwgTWVkaWEgcXVlcmllc1xuMTkyMHB4IGFuZCB1cDogIFx0RnVsbCBIRFxuKi9cblxuXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuXG5AbWl4aW4gcmVzcG9uZE1heCgkYnJlYWtwb2ludCkge1xuXHRAaWYgJGJyZWFrcG9pbnQgPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuICB9XG4gIEBpZiAkYnJlYWtwb2ludCA9PSBoZC1kZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTBlbSkgeyBAY29udGVudCB9OyAvLzE0NDBweFxuICB9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5AbWl4aW4gcmVzcG9uZE1pbigkYnJlYWtwb2ludG1pbikge1xuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5cblxuXG4kcmVtLWJhc2VsaW5lOiAxNnB4ICFkZWZhdWx0O1xuJHJlbS1mYWxsYmFjazogZmFsc2UgIWRlZmF1bHQ7XG4kcmVtLXB4LW9ubHk6IGZhbHNlICFkZWZhdWx0O1xuXG5AZnVuY3Rpb24gcmVtLXNlcGFyYXRvcigkbGlzdCwgJHNlcGFyYXRvcjogZmFsc2UpIHtcbiAgQGlmICRzZXBhcmF0b3IgPT0gXCJjb21tYVwiIG9yICRzZXBhcmF0b3IgPT0gXCJzcGFjZVwiIHtcbiAgICBAcmV0dXJuIGFwcGVuZCgkbGlzdCwgbnVsbCwgJHNlcGFyYXRvcik7XG4gIH0gXG4gIFxuICBAaWYgZnVuY3Rpb24tZXhpc3RzKFwibGlzdC1zZXBhcmF0b3JcIikgPT0gdHJ1ZSB7XG4gICAgQHJldHVybiBsaXN0LXNlcGFyYXRvcigkbGlzdCk7XG4gIH1cblxuICAvLyBsaXN0LXNlcGFyYXRvciBwb2x5ZmlsbCBieSBIdWdvIEdpcmF1ZGVsIChodHRwczovL3Nhc3MtY29tcGF0aWJpbGl0eS5naXRodWIuaW8vI2xpc3Rfc2VwYXJhdG9yX2Z1bmN0aW9uKVxuICAkdGVzdC1saXN0OiAoKTtcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xuICAgICR0ZXN0LWxpc3Q6IGFwcGVuZCgkdGVzdC1saXN0LCAkaXRlbSwgc3BhY2UpO1xuICB9XG5cbiAgQHJldHVybiBpZigkdGVzdC1saXN0ID09ICRsaXN0LCBzcGFjZSwgY29tbWEpO1xufVxuXG5AbWl4aW4gcmVtLWJhc2VsaW5lKCR6b29tOiAxMDAlKSB7XG4gIGZvbnQtc2l6ZTogJHpvb20gLyAxNnB4ICogJHJlbS1iYXNlbGluZTtcbn1cblxuQGZ1bmN0aW9uIHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlcy4uLikge1xuICAkcmVzdWx0OiAoKTtcbiAgJHNlcGFyYXRvcjogcmVtLXNlcGFyYXRvcigkdmFsdWVzKTtcbiAgXG4gIEBlYWNoICR2YWx1ZSBpbiAkdmFsdWVzIHtcbiAgICBAaWYgdHlwZS1vZigkdmFsdWUpID09IFwibnVtYmVyXCIgYW5kIHVuaXQoJHZhbHVlKSA9PSBcInJlbVwiIGFuZCAkdG8gPT0gXCJweFwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAxcmVtICogJHJlbS1iYXNlbGluZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicHhcIiBhbmQgJHRvID09IFwicmVtXCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvICRyZW0tYmFzZWxpbmUgKiAxcmVtLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcImxpc3RcIiB7XG4gICAgICAkdmFsdWUtc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSk7XG4gICAgICAkdmFsdWU6IHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlLi4uKTtcbiAgICAgICR2YWx1ZTogcmVtLXNlcGFyYXRvcigkdmFsdWUsICR2YWx1ZS1zZXBhcmF0b3IpO1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKGxlbmd0aCgkcmVzdWx0KSA9PSAxLCBudGgoJHJlc3VsdCwgMSksICRyZXN1bHQpO1xufVxuXG5AZnVuY3Rpb24gcmVtKCR2YWx1ZXMuLi4pIHtcbiAgQGlmICRyZW0tcHgtb25seSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgfVxufVxuXG5AbWl4aW4gcmVtKCRwcm9wZXJ0aWVzLCAkdmFsdWVzLi4uKSB7XG4gIEBpZiB0eXBlLW9mKCRwcm9wZXJ0aWVzKSA9PSBcIm1hcFwiIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gbWFwLWtleXMoJHByb3BlcnRpZXMpIHtcbiAgICAgIEBpbmNsdWRlIHJlbSgkcHJvcGVydHksIG1hcC1nZXQoJHByb3BlcnRpZXMsICRwcm9wZXJ0eSkpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgIEBpZiAkcmVtLWZhbGxiYWNrIG9yICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocHgsICR2YWx1ZXMuLi4pO1xuICAgICAgfVxuICAgICAgQGlmIG5vdCAkcmVtLXB4LW9ubHkge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1peGluIGNvbnRlbnQtY2VudGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn0iLCJAaW1wb3J0IFwiLi4vYmFzZS92YXJpYWJsZXNcIjtcblxuLnRleHQge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrO1xuICAgIH1cbiAgICAmLWdyZXkge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG4gICBcbn1cblxuLmJnIHtcbiAgICAmLXByaW1hcnkxIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLXByaW1hcnkyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkyO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xuICAgIH1cbiAgICAmLWdyZXktbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG59IiwiLy8gQ29sb3JzXG5cbiRjb2xvci1wcmltYXJ5MTogcmdiYSgyNyw0NSw2MywxKTtcbiRjb2xvci1wcmltYXJ5MjogcmdiYSg1Myw3MCw4OCwxKTtcblxuJGNvbG9yLWdyZXk6IHJnYmEoMTAzLCAxMDMsIDEwMywgMSk7XG4kY29sb3ItZ3JleS1kYXJrOiByZ2JhKDUyLCA1OCwgNjQsIDEpO1xuXG4kY29sb3ItZ3JleS1saWdodDogI0VCRUNGMDtcblxuJGNvbG9yLXN1Y2Nlc3M6IHJnYmEoODIsIDIwOSwgMTQ1LCAxKTtcbiRjb2xvci1lcnJvcjogcmdiYSgyMzQsIDg1LCA4NSwgMSk7XG5cbi8vIEZvbnRzXG5cbiR0aGluOiAxMDA7XG4kZXh0cmEtbGlnaHQ6IDIwMDtcbiRsaWdodDogMzAwO1xuJHJlZ3VsYXItNDAwOiA0MDA7XG4kbWVkaXVtOiA1MDA7XG4kc2VtaS1ib2xkOiA2MDA7XG4kYm9sZDogNzAwO1xuJGV4dHJhLWJvbGQ6IDgwMDtcbiRibGFjay05MDA6IDkwMDsiLCIvKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuLypcbiRicmVha3BvaW50IGFyZ3VlbWVudCBjaG9pY2VzOlxuLSB4cy1waG9uZVxuLSBwaG9uZVxuLSB0YWItcG9ydFxuLSB0YWItbGFuZFxuLSBkZXNrdG9wXG4tIGZ1bGwtaGRcblxuMWVtID0gMTZweFxuKi9cbi50ZXh0LXByaW1hcnkxIHtcbiAgY29sb3I6ICMxYjJkM2Y7XG59XG4udGV4dC1ncmV5LWRhcmsge1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbi50ZXh0LWdyZXkge1xuICBjb2xvcjogIzY3Njc2Nztcbn1cbi50ZXh0LWdyZXktbGlnaHQge1xuICBjb2xvcjogI0VCRUNGMDtcbn1cblxuLmJnLXByaW1hcnkxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmQzZjtcbn1cbi5iZy1wcmltYXJ5MiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NTg7XG59XG4uYmctZ3JleS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3Njc2Nztcbn1cbi5iZy1ncmV5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUNGMDtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLmZpeGVkLXNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY291cnNlQ29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG59XG5cbi5jb3Vyc2VDb250ZW50QWN0aXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb3Vyc2VNb250aCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL21peGluXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL2NvbG9yc1wiO1xyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuICBcclxuICAuZml4ZWQtc2lkZWJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4uY291cnNlQ29udGVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufSAgXHJcbi5jb3Vyc2VDb250ZW50QWN0aXZlIHtcclxud2lkdGg6IDEwMCU7XHJcbm1hcmdpbi1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uY291cnNlTW9udGgge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn0gXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LectureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lecture',
                templateUrl: './lecture.component.html',
                styleUrls: ['./lecture.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student/live/live.component.ts":
/*!************************************************!*\
  !*** ./src/app/student/live/live.component.ts ***!
  \************************************************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mobileView/mobile-view.service */ "./src/app/services/mobileView/mobile-view.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function LiveComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiveComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiveComponent_div_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r6.class);
} }
function LiveComponent_div_5_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiveComponent_div_5_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Join Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiveComponent_div_5_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Join Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiveComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LiveComponent_div_5_span_3_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LiveComponent_div_5_button_6_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LiveComponent_div_5_button_7_Template, 3, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LiveComponent_div_5_button_8_Template, 3, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.type == "teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r6.subjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.type == "teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isMobileView);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isMobileView);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Speaker name: ", subject_r6.teacherName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", subject_r6.date, " : ", subject_r6.start, " to ", subject_r6.end, " ");
} }
function LiveComponent_h3_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upcomming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiveComponent_h2_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upcomming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiveComponent_div_10_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r12.class);
} }
function LiveComponent_div_10_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiveComponent_div_10_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Join Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiveComponent_div_10_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Join Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiveComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LiveComponent_div_10_span_3_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LiveComponent_div_10_button_6_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LiveComponent_div_10_button_7_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LiveComponent_div_10_button_8_Template, 3, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r12 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.type == "teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r12.subjectName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.type == "teacher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isMobileView);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isMobileView);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Speaker name: ", subject_r12.teacherName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", subject_r12.date, " : ", subject_r12.start, " to ", subject_r12.end, " ");
} }
class LiveComponent {
    constructor(router, responsiveService, zone) {
        this.router = router;
        this.responsiveService = responsiveService;
        this.zone = zone;
        this.type = 'student';
        this.subjectData = [
            {
                subjectName: 'Computer',
                class: '10th B',
                teacherName: 'M Patil',
                date: '10 dec',
                start: '10:15AM',
                end: '12:15AM'
            },
            {
                subjectName: 'English',
                class: '10th B',
                teacherName: 'Mr Kale',
                date: '10 dec',
                start: '10:15AM',
                end: '12:15AM'
            }
        ];
        this.upcoming = [
            {
                subjectName: 'Marathi',
                class: '10th B',
                teacherName: 'Mr Pravin',
                studenLength: '50',
                subjectCode: 'ASWS32',
                date: '10 dec',
                start: '10:15AM',
                end: '12:15AM'
            },
            {
                subjectName: 'Science',
                class: '10th B',
                teacherName: 'Mr arsh',
                date: '10 dec',
                start: '10:15AM',
                end: '12:15AM'
            },
            {
                subjectName: 'History',
                class: '10th B',
                teacherName: 'Mr Animesh',
                date: '10 dec',
                start: '10:15AM',
                end: '12:15AM'
            },
            {
                subjectName: 'Geography',
                class: '10th B',
                teacherName: 'Mr prashant',
                date: '10 dec',
                start: '10:15AM',
                end: '12:15AM'
            },
            {
                subjectName: 'Hindi',
                class: '10th B',
                teacherName: 'Mrs Patil',
                date: '10 dec',
                start: '10:15AM',
                end: '12:15AM'
            }
        ];
    }
    ngOnInit() {
        this.onResize();
        this.responsiveService.checkWidth();
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.zone.run(() => { this.isMobileView = isMobile; });
        });
    }
}
LiveComponent.ɵfac = function LiveComponent_Factory(t) { return new (t || LiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
LiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiveComponent, selectors: [["app-live"]], inputs: { type: "type" }, decls: 11, vars: 6, consts: [[1, "d-flex", "flex-wrap", "pt-3", 2, "padding-bottom", "80px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pt-5"], [1, "row", "m-0"], [4, "ngIf"], ["class", "mt-4", "style", "background: white; width: 100%;border-radius: 5px;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);", 4, "ngFor", "ngForOf"], [1, "mt-4", 2, "background", "white", "width", "100%", "border-radius", "5px", "box-shadow", "0px 4px 4px rgba(0, 0, 0, 0.25)"], [1, "d-flex", "justify-content-between", "p-2"], ["style", "font-size: 1.5rem;", "class", "mr-3", 4, "ngIf"], [2, "font-size", "1.5rem", "font-weight", "bold"], ["style", "border-radius: 5px;font-size: 10px;", "class", "ml-3", 4, "ngIf"], ["class", "btn", "style", "border-radius: 5px;background: #1b2d3f;color: white; width: 100px; height: 25px; font-size: 12px;", 4, "ngIf"], ["class", "btn", "style", "border-radius: 5px;background:  #1b2d3f;color: white; width: 60px; height: 20px; font-size: 10px;", 4, "ngIf"], [2, "margin", "0px 5px", "border-top", "1px solid lightgray", "padding-left", "1px"], [2, "font-size", "11px", "color", "#757575"], [2, "font-size", "11px", "color", "#000000"], [1, "mr-3", 2, "font-size", "1.5rem"], [1, "ml-3", 2, "border-radius", "5px", "font-size", "10px"], [1, "btn", 2, "border-radius", "5px", "background", "#1b2d3f", "color", "white", "width", "100px", "height", "25px", "font-size", "12px"], [1, "btn", 2, "border-radius", "5px", "background", "#1b2d3f", "color", "white", "width", "60px", "height", "20px", "font-size", "10px"], ["style", "border-radius: 5px;font-size: 12px;", "class", "ml-3", 4, "ngIf"], ["class", "btn", "style", "border-radius: 5px;background: #1b2d3f;color: white; width: 80px; height: 25px; font-size: 12px;", 4, "ngIf"], ["class", "btn", "style", "border-radius: 5px;background: #1b2d3f;color: white; width: 60px; height: 20px; font-size: 10px;", 4, "ngIf"], [1, "ml-3", 2, "border-radius", "5px", "font-size", "12px"], [1, "btn", 2, "border-radius", "5px", "background", "#1b2d3f", "color", "white", "width", "80px", "height", "25px", "font-size", "12px"]], template: function LiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LiveComponent_h3_3_Template, 3, 0, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LiveComponent_h2_4_Template, 3, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LiveComponent_div_5_Template, 15, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LiveComponent_h3_8_Template, 3, 0, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LiveComponent_h2_9_Template, 3, 0, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LiveComponent_div_10_Template, 15, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjectData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.upcoming);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\nh3[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #000;\n  line-height: 0.1em;\n  margin: 10px 0 10px;\n}\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ebecf0;\n  padding: 0 15px 0 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  margin-top: 0.4rem;\n}\nh2[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #000;\n  line-height: 0.1em;\n  margin: 10px 0 10px;\n}\nh2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ebecf0;\n  padding: 0 15px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zdHVkZW50L2xpdmUvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFxzYXNzXFxiYXNlXFxfbWl4aW4uc2NzcyIsIi4uLy4uL2FwcC9zdHVkZW50L2xpdmUvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFxzYXNzXFxiYXNlXFxfY29sb3JzLnNjc3MiLCIuLi8uLi9hcHAvc3R1ZGVudC9saXZlL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvbGl2ZS9saXZlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvbGl2ZS9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXC4uXFxhcHBcXHN0dWRlbnRcXGxpdmVcXGxpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7Ozs7Ozs7O0NBQUE7QUFXQTs7Ozs7Ozs7OztDQUFBO0FDWEk7RUFDSSxjQ0ZTO0FDb0JqQjtBRmhCSTtFQUNJLGNDRFU7QUNtQmxCO0FGaEJJO0VBQ0ksY0NMSztBQ3VCYjtBRmhCSTtFQUNJLGNDTFc7QUN1Qm5CO0FGWkk7RUFDSSx5QkNsQlM7QUNpQ2pCO0FGYkk7RUFDSSx5QkNwQlM7QUNtQ2pCO0FGYkk7RUFDSSx5QkNwQlU7QUNtQ2xCO0FGYkk7RUFDSSx5QkN4Qks7QUN1Q2I7QUZiSTtFQUNJLHlCQ3hCVztBQ3VDbkI7QUM3Q0E7RUFDSSxXQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEK0NKO0FDNUNBO0VBRUksbUJBQUE7RUFDQSxtQkFBQTtBRDhDSjtBQzNDQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUQ4Q0o7QUM1Q0E7RUFDSSxXQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEOENKO0FDM0NBO0VBRUksbUJBQUE7RUFDQSxtQkFBQTtBRDZDSiIsImZpbGUiOiIuLi8uLi9hcHAvc3R1ZGVudC9saXZlL2xpdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIE1FRElBIFFVRVJZIE1BTkFHRVJcblxuLypcbjBweCAtIDM2MHB4Olx0XHRYUyBQaG9uZVxuMzYwcHggLSA1NzZweDogXHRcdFBob25lXG41NzZweCAtIDc2OHB4OiBcdFx0VGFibGV0IFBvcnRyYWl0XG43NjhweCAtIDk5MnB4Olx0XHRUYWJsZXQgTGFuZHNjYXBlXG45OTJweCAtIDEyMDBweDogXHRkZXNrdG9wXG4xMjAwcHggLSAxOTIwcHg6XHRub3JtYWwgTWVkaWEgcXVlcmllc1xuMTkyMHB4IGFuZCB1cDogIFx0RnVsbCBIRFxuKi9cblxuXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuXG5AbWl4aW4gcmVzcG9uZE1heCgkYnJlYWtwb2ludCkge1xuXHRAaWYgJGJyZWFrcG9pbnQgPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuICB9XG4gIEBpZiAkYnJlYWtwb2ludCA9PSBoZC1kZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTBlbSkgeyBAY29udGVudCB9OyAvLzE0NDBweFxuICB9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5AbWl4aW4gcmVzcG9uZE1pbigkYnJlYWtwb2ludG1pbikge1xuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5cblxuXG4kcmVtLWJhc2VsaW5lOiAxNnB4ICFkZWZhdWx0O1xuJHJlbS1mYWxsYmFjazogZmFsc2UgIWRlZmF1bHQ7XG4kcmVtLXB4LW9ubHk6IGZhbHNlICFkZWZhdWx0O1xuXG5AZnVuY3Rpb24gcmVtLXNlcGFyYXRvcigkbGlzdCwgJHNlcGFyYXRvcjogZmFsc2UpIHtcbiAgQGlmICRzZXBhcmF0b3IgPT0gXCJjb21tYVwiIG9yICRzZXBhcmF0b3IgPT0gXCJzcGFjZVwiIHtcbiAgICBAcmV0dXJuIGFwcGVuZCgkbGlzdCwgbnVsbCwgJHNlcGFyYXRvcik7XG4gIH0gXG4gIFxuICBAaWYgZnVuY3Rpb24tZXhpc3RzKFwibGlzdC1zZXBhcmF0b3JcIikgPT0gdHJ1ZSB7XG4gICAgQHJldHVybiBsaXN0LXNlcGFyYXRvcigkbGlzdCk7XG4gIH1cblxuICAvLyBsaXN0LXNlcGFyYXRvciBwb2x5ZmlsbCBieSBIdWdvIEdpcmF1ZGVsIChodHRwczovL3Nhc3MtY29tcGF0aWJpbGl0eS5naXRodWIuaW8vI2xpc3Rfc2VwYXJhdG9yX2Z1bmN0aW9uKVxuICAkdGVzdC1saXN0OiAoKTtcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xuICAgICR0ZXN0LWxpc3Q6IGFwcGVuZCgkdGVzdC1saXN0LCAkaXRlbSwgc3BhY2UpO1xuICB9XG5cbiAgQHJldHVybiBpZigkdGVzdC1saXN0ID09ICRsaXN0LCBzcGFjZSwgY29tbWEpO1xufVxuXG5AbWl4aW4gcmVtLWJhc2VsaW5lKCR6b29tOiAxMDAlKSB7XG4gIGZvbnQtc2l6ZTogJHpvb20gLyAxNnB4ICogJHJlbS1iYXNlbGluZTtcbn1cblxuQGZ1bmN0aW9uIHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlcy4uLikge1xuICAkcmVzdWx0OiAoKTtcbiAgJHNlcGFyYXRvcjogcmVtLXNlcGFyYXRvcigkdmFsdWVzKTtcbiAgXG4gIEBlYWNoICR2YWx1ZSBpbiAkdmFsdWVzIHtcbiAgICBAaWYgdHlwZS1vZigkdmFsdWUpID09IFwibnVtYmVyXCIgYW5kIHVuaXQoJHZhbHVlKSA9PSBcInJlbVwiIGFuZCAkdG8gPT0gXCJweFwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAxcmVtICogJHJlbS1iYXNlbGluZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicHhcIiBhbmQgJHRvID09IFwicmVtXCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvICRyZW0tYmFzZWxpbmUgKiAxcmVtLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcImxpc3RcIiB7XG4gICAgICAkdmFsdWUtc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSk7XG4gICAgICAkdmFsdWU6IHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlLi4uKTtcbiAgICAgICR2YWx1ZTogcmVtLXNlcGFyYXRvcigkdmFsdWUsICR2YWx1ZS1zZXBhcmF0b3IpO1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKGxlbmd0aCgkcmVzdWx0KSA9PSAxLCBudGgoJHJlc3VsdCwgMSksICRyZXN1bHQpO1xufVxuXG5AZnVuY3Rpb24gcmVtKCR2YWx1ZXMuLi4pIHtcbiAgQGlmICRyZW0tcHgtb25seSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgfVxufVxuXG5AbWl4aW4gcmVtKCRwcm9wZXJ0aWVzLCAkdmFsdWVzLi4uKSB7XG4gIEBpZiB0eXBlLW9mKCRwcm9wZXJ0aWVzKSA9PSBcIm1hcFwiIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gbWFwLWtleXMoJHByb3BlcnRpZXMpIHtcbiAgICAgIEBpbmNsdWRlIHJlbSgkcHJvcGVydHksIG1hcC1nZXQoJHByb3BlcnRpZXMsICRwcm9wZXJ0eSkpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgIEBpZiAkcmVtLWZhbGxiYWNrIG9yICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocHgsICR2YWx1ZXMuLi4pO1xuICAgICAgfVxuICAgICAgQGlmIG5vdCAkcmVtLXB4LW9ubHkge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1peGluIGNvbnRlbnQtY2VudGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn0iLCJAaW1wb3J0IFwiLi4vYmFzZS92YXJpYWJsZXNcIjtcblxuLnRleHQge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrO1xuICAgIH1cbiAgICAmLWdyZXkge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG4gICBcbn1cblxuLmJnIHtcbiAgICAmLXByaW1hcnkxIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLXByaW1hcnkyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkyO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xuICAgIH1cbiAgICAmLWdyZXktbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG59IiwiLy8gQ29sb3JzXG5cbiRjb2xvci1wcmltYXJ5MTogcmdiYSgyNyw0NSw2MywxKTtcbiRjb2xvci1wcmltYXJ5MjogcmdiYSg1Myw3MCw4OCwxKTtcblxuJGNvbG9yLWdyZXk6IHJnYmEoMTAzLCAxMDMsIDEwMywgMSk7XG4kY29sb3ItZ3JleS1kYXJrOiByZ2JhKDUyLCA1OCwgNjQsIDEpO1xuXG4kY29sb3ItZ3JleS1saWdodDogI0VCRUNGMDtcblxuJGNvbG9yLXN1Y2Nlc3M6IHJnYmEoODIsIDIwOSwgMTQ1LCAxKTtcbiRjb2xvci1lcnJvcjogcmdiYSgyMzQsIDg1LCA4NSwgMSk7XG5cbi8vIEZvbnRzXG5cbiR0aGluOiAxMDA7XG4kZXh0cmEtbGlnaHQ6IDIwMDtcbiRsaWdodDogMzAwO1xuJHJlZ3VsYXItNDAwOiA0MDA7XG4kbWVkaXVtOiA1MDA7XG4kc2VtaS1ib2xkOiA2MDA7XG4kYm9sZDogNzAwO1xuJGV4dHJhLWJvbGQ6IDgwMDtcbiRibGFjay05MDA6IDkwMDsiLCIvKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuLypcbiRicmVha3BvaW50IGFyZ3VlbWVudCBjaG9pY2VzOlxuLSB4cy1waG9uZVxuLSBwaG9uZVxuLSB0YWItcG9ydFxuLSB0YWItbGFuZFxuLSBkZXNrdG9wXG4tIGZ1bGwtaGRcblxuMWVtID0gMTZweFxuKi9cbi50ZXh0LXByaW1hcnkxIHtcbiAgY29sb3I6ICMxYjJkM2Y7XG59XG4udGV4dC1ncmV5LWRhcmsge1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbi50ZXh0LWdyZXkge1xuICBjb2xvcjogIzY3Njc2Nztcbn1cbi50ZXh0LWdyZXktbGlnaHQge1xuICBjb2xvcjogI0VCRUNGMDtcbn1cblxuLmJnLXByaW1hcnkxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmQzZjtcbn1cbi5iZy1wcmltYXJ5MiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NTg7XG59XG4uYmctZ3JleS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3Njc2Nztcbn1cbi5iZy1ncmV5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUNGMDtcbn1cblxuaDMge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjFlbTtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweDtcbn1cblxuaDMgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNlYmVjZjA7XG4gIHBhZGRpbmc6IDAgMTVweCAwIDA7XG59XG5cbmg1IHtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICBtYXJnaW4tdG9wOiAwLjRyZW07XG59XG5cbmgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBsaW5lLWhlaWdodDogMC4xZW07XG4gIG1hcmdpbjogMTBweCAwIDEwcHg7XG59XG5cbmgyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZWJlY2YwO1xuICBwYWRkaW5nOiAwIDE1cHggMCAwO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL21peGluXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL2NvbG9yc1wiO1xyXG5oMyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjFlbTtcclxuICAgIG1hcmdpbjogMTBweCAwIDEwcHg7XHJcbn1cclxuXHJcbmgzIHNwYW4ge1xyXG4gICAgLy8gei1pbmRleDogMTAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ViZWNmMDtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcclxufVxyXG5oMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjFlbTtcclxuICAgIG1hcmdpbjogMTBweCAwIDEwcHg7XHJcbn1cclxuXHJcbmgyIHNwYW4ge1xyXG4gICAgLy8gei1pbmRleDogMTAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ViZWNmMDtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-live',
                templateUrl: './live.component.html',
                styleUrls: ['./live.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/student/message/message.component.ts":
/*!******************************************************!*\
  !*** ./src/app/student/message/message.component.ts ***!
  \******************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mobileView/mobile-view.service */ "./src/app/services/mobileView/mobile-view.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _common_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/message/message.component */ "./src/app/common/message/message.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");








const _c0 = function (a0) { return { "fixed-top": a0 }; };
function MessageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-common-message", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.isMobileView));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "student")("isMobileView", ctx_r0.isMobileView);
} }
function MessageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-common-message", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r1.isMobileView));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "student")("isMobileView", ctx_r1.isMobileView);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "student");
} }
class MessageComponent {
    constructor(responsiveService) {
        this.responsiveService = responsiveService;
        this.msgView = false;
    }
    ngOnInit() {
        this.onResize();
        this.responsiveService.checkWidth();
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe((isMobile) => {
            console.log('isMobile', isMobile);
            this.isMobileView = isMobile;
        });
    }
    openMsg() {
        this.msgView = true;
    }
    back() {
        this.msgView = false;
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__["MobileViewService"])); };
MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "ngClass"], [1, "wrapper"], ["id", "content", 2, "border-top", "1px solid black"], [3, "type", "isMobileView"], [3, "type"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageComponent_div_0_Template, 6, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageComponent_div_1_Template, 4, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _common_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\nh1[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #000;\n  line-height: 0.1em;\n  margin: 10px 0 20px;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ebecf0;\n  padding: 0 15px 0 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  margin-top: 0.4rem;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.inbox_people[_ngcontent-%COMP%] {\n  background: #f8f8f8 none repeat scroll 0 0;\n  float: left;\n  overflow: hidden;\n  width: 40%;\n  border-right: 1px solid #c4c4c4;\n}\n.inbox_msg[_ngcontent-%COMP%] {\n  border: 1px solid #c4c4c4;\n  clear: both;\n  overflow: hidden;\n}\n.top_spac[_ngcontent-%COMP%] {\n  margin: 20px 0 0;\n}\n.channel_heading[_ngcontent-%COMP%] {\n  float: left;\n  width: 40%;\n}\n.srch_bar[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: right;\n  width: 60%;\n}\n.headind_srch[_ngcontent-%COMP%] {\n  padding: 10px 29px 10px 20px;\n  overflow: hidden;\n  border-bottom: 1px solid #c4c4c4;\n}\n.channel_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #05728f;\n  font-size: 21px;\n  margin: auto;\n}\n.srch_bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #cdcdcd;\n  border-width: 0 0 1px 0;\n  width: 80%;\n  padding: 2px 0 4px 6px;\n  background: none;\n}\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  padding: 0;\n  color: #707070;\n  font-size: 18px;\n}\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n  margin: 0 0 0 -27px;\n}\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #464646;\n  margin: 0 0 8px 0;\n}\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  float: right;\n}\n.chat_ib[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #989898;\n  margin: auto;\n}\n.chat_img[_ngcontent-%COMP%] {\n  float: left;\n  width: 11%;\n}\n.chat_ib[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 0 0 15px;\n  width: 88%;\n}\n.chat_people[_ngcontent-%COMP%] {\n  overflow: hidden;\n  clear: both;\n}\n.chat_list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 18px 16px 10px;\n}\n.inbox_chat[_ngcontent-%COMP%] {\n  height: 550px;\n  overflow-y: scroll;\n}\n.active_chat[_ngcontent-%COMP%] {\n  background: #ebebeb;\n}\n.incoming_msg_img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  background: #ffebeb;\n  width: 50%;\n  position: relative;\n  border-radius: 10px;\n  margin-top: 5px;\n}\n.incoming_msg_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  align-self: center;\n  margin-left: 5px;\n}\n.incoming_msg_img[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0px;\n}\n.incoming_msg_img_mobile[_ngcontent-%COMP%] {\n  background: #ffebeb;\n  width: 50%;\n  position: relative;\n  border-radius: 10px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.incoming_msg_img_mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  align-self: center;\n  margin-left: 5px;\n}\n.teacherBadge[_ngcontent-%COMP%] {\n  right: 0;\n  position: absolute !important;\n  top: -5px !important;\n  font-size: 12px;\n  z-index: auto;\n}\n.received_msg[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 0 0 10px;\n  vertical-align: top;\n  width: 92%;\n}\n.received_withd_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #646464;\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.time_date[_ngcontent-%COMP%] {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0;\n}\n.received_withd_msg[_ngcontent-%COMP%] {\n  width: 45%;\n}\n.mesgs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sent_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: #05728f none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #fff;\n  padding: 5px 10px 5px 12px;\n  width: 100%;\n}\n.outgoing_msg[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 26px 0 26px;\n}\n.sent_msg[_ngcontent-%COMP%] {\n  float: right;\n  width: 46%;\n}\n.input_msg_write[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  color: #4c4c4c;\n  font-size: 15px;\n  min-height: 50px;\n  width: 100%;\n}\n.type_msg[_ngcontent-%COMP%] {\n  border-top: 1px solid #c4c4c4;\n  bottom: 0;\n  width: 100%;\n  background: white;\n}\n.msg_send_btn[_ngcontent-%COMP%] {\n  background: #05728f none repeat scroll 0 0;\n  border: medium none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 17px;\n  margin: 5px;\n  width: 40px;\n}\n@media (max-width: 660px) {\n  .msg_send_btn[_ngcontent-%COMP%] {\n    left: 88%;\n  }\n}\n@media (max-width: 660px) {\n  .msg_send_btn.one[_ngcontent-%COMP%] {\n    left: 78%;\n  }\n}\n.messaging[_ngcontent-%COMP%] {\n  padding: 0 0 50px 0;\n}\n.msg_history[_ngcontent-%COMP%] {\n  height: 605px;\n  overflow-y: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 10px;\n}\n.msg_mobile_history[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n.mobile[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mobile[_ngcontent-%COMP%]   .msg_mobile_history[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 15px;\n}\n.mobile[_ngcontent-%COMP%]   .type_msg[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 65px;\n  width: 100%;\n  background: white;\n  z-index: 100;\n}\n.message[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.badge[_ngcontent-%COMP%] {\n  top: -1.5rem;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zdHVkZW50L21lc3NhZ2UvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFxzYXNzXFxiYXNlXFxfbWl4aW4uc2NzcyIsIi4uLy4uL2FwcC9zdHVkZW50L21lc3NhZ2UvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFxzYXNzXFxiYXNlXFxfY29sb3JzLnNjc3MiLCIuLi8uLi9hcHAvc3R1ZGVudC9tZXNzYWdlL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvbWVzc2FnZS9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXC4uXFxhcHBcXHN0dWRlbnRcXG1lc3NhZ2VcXG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7Ozs7Ozs7O0NBQUE7QUFXQTs7Ozs7Ozs7OztDQUFBO0FDWEk7RUFDSSxjQ0ZTO0FDb0JqQjtBRmhCSTtFQUNJLGNDRFU7QUNtQmxCO0FGaEJJO0VBQ0ksY0NMSztBQ3VCYjtBRmhCSTtFQUNJLGNDTFc7QUN1Qm5CO0FGWkk7RUFDSSx5QkNsQlM7QUNpQ2pCO0FGYkk7RUFDSSx5QkNwQlM7QUNtQ2pCO0FGYkk7RUFDSSx5QkNwQlU7QUNtQ2xCO0FGYkk7RUFDSSx5QkN4Qks7QUN1Q2I7QUZiSTtFQUNJLHlCQ3hCVztBQ3VDbkI7QUM1Q0E7RUFDRSxXQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEOENGO0FDM0NBO0VBRUUsbUJBQUE7RUFDQSxtQkFBQTtBRDZDRjtBQzFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUQ2Q0Y7QUMxQ0E7RUFDRSxlQUFBO0FENkNGO0FDMUNBO0VBQ0UsMENBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUQ2Q0Y7QUMxQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRDZDRjtBQzFDQTtFQUNFLGdCQUFBO0FENkNGO0FDMUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUQ2Q0Y7QUMxQ0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBRDZDRjtBQzFDQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBRDZDRjtBQzFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRDZDRjtBQzFDQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBRDZDRjtBQzFDQTtFQUNFLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQ2Q0Y7QUMxQ0E7RUFDRSxtQkFBQTtBRDZDRjtBQzFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUQ2Q0Y7QUMxQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBRDZDRjtBQzFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBRDZDRjtBQzFDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FENkNGO0FDMUNBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBRDZDRjtBQzFDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBRDZDRjtBQzFDQTtFQUNFLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FENkNGO0FDMUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FENkNGO0FDMUNBO0VBQ0UsbUJBQUE7QUQ2Q0Y7QUMxQ0E7RUFHRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEMkNGO0FDMUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FENENKO0FDMUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBRDRDSjtBQ3hDQTtFQUdFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUR5Q0Y7QUN2Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUR5Q0o7QUNyQ0E7RUFDRSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FEd0NGO0FDckNBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBRHdDRjtBQ2hDQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRG1DRjtBQ2hDQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QURtQ0Y7QUNoQ0E7RUFDRSxVQUFBO0FEbUNGO0FDaENBO0VBQ0UsV0FBQTtBRG1DRjtBQ2hDQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QURtQ0Y7QUNoQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FEbUNGO0FDaENBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QURtQ0Y7QUNoQ0E7RUFDRSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QURtQ0Y7QUNoQ0E7RUFDRSw2QkFBQTtFQUVBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QURrQ0Y7QUMvQkE7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFLQSxXQUFBO0VBQ0EsV0FBQTtBRDhCRjtBQzdCRTtFQWJGO0lBY0ksU0FBQTtFRGdDRjtBQUNGO0FDN0JJO0VBRkY7SUFHSSxTQUFBO0VEZ0NKO0FBQ0Y7QUM1QkE7RUFDRSxtQkFBQTtBRCtCRjtBQzVCQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRCtCRjtBQzVCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBRCtCRjtBQzVCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRCtCRjtBQzlCRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRGdDSjtBQzlCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRGdDSjtBQzVCQTtFQUNFLHFCQUFBO0FEK0JGO0FDNUJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FEK0JGIiwiZmlsZSI6Ii4uLy4uL2FwcC9zdHVkZW50L21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gTUVESUEgUVVFUlkgTUFOQUdFUlxuXG4vKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuXG5cbi8qXG4kYnJlYWtwb2ludCBhcmd1ZW1lbnQgY2hvaWNlczpcbi0geHMtcGhvbmVcbi0gcGhvbmVcbi0gdGFiLXBvcnRcbi0gdGFiLWxhbmRcbi0gZGVza3RvcFxuLSBmdWxsLWhkXG5cbjFlbSA9IDE2cHhcbiovXG5cbkBtaXhpbiByZXNwb25kTWF4KCRicmVha3BvaW50KSB7XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4cy1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDIyLjVlbSkgeyBAY29udGVudCB9OyAvLzM2MHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IHNtLXBob25lIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMzZlbSkgeyBAY29udGVudCB9OyAvLzU3NnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IG1kLXRhYiB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHsgQGNvbnRlbnQgfTsgLy83NjhweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBsZy1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNjJlbSkgeyBAY29udGVudCB9OyAvLzk5MnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IHhsLWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7IEBjb250ZW50IH07IC8vMTIwMHB4XG4gIH1cbiAgQGlmICRicmVha3BvaW50ID09IGhkLWRlc2t0b3Age1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7IEBjb250ZW50IH07IC8vMTQ0MHB4XG4gIH1cblx0QGlmICRicmVha3BvaW50ID09IGZ1bGwtaGQge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAxMjBlbSkgeyBAY29udGVudCB9OyAvLzE5MjBweFxuXHR9XG59XG5cbkBtaXhpbiByZXNwb25kTWluKCRicmVha3BvaW50bWluKSB7XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4cy1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDIyLjVlbSkgeyBAY29udGVudCB9OyAvLzM2MHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IHNtLXBob25lIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMzZlbSkgeyBAY29udGVudCB9OyAvLzU3NnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IG1kLXRhYiB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHsgQGNvbnRlbnQgfTsgLy83NjhweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBsZy1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjJlbSkgeyBAY29udGVudCB9OyAvLzk5MnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IHhsLWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7IEBjb250ZW50IH07IC8vMTIwMHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IGZ1bGwtaGQge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAxMjBlbSkgeyBAY29udGVudCB9OyAvLzE5MjBweFxuXHR9XG59XG5cblxuXG5cbiRyZW0tYmFzZWxpbmU6IDE2cHggIWRlZmF1bHQ7XG4kcmVtLWZhbGxiYWNrOiBmYWxzZSAhZGVmYXVsdDtcbiRyZW0tcHgtb25seTogZmFsc2UgIWRlZmF1bHQ7XG5cbkBmdW5jdGlvbiByZW0tc2VwYXJhdG9yKCRsaXN0LCAkc2VwYXJhdG9yOiBmYWxzZSkge1xuICBAaWYgJHNlcGFyYXRvciA9PSBcImNvbW1hXCIgb3IgJHNlcGFyYXRvciA9PSBcInNwYWNlXCIge1xuICAgIEByZXR1cm4gYXBwZW5kKCRsaXN0LCBudWxsLCAkc2VwYXJhdG9yKTtcbiAgfSBcbiAgXG4gIEBpZiBmdW5jdGlvbi1leGlzdHMoXCJsaXN0LXNlcGFyYXRvclwiKSA9PSB0cnVlIHtcbiAgICBAcmV0dXJuIGxpc3Qtc2VwYXJhdG9yKCRsaXN0KTtcbiAgfVxuXG4gIC8vIGxpc3Qtc2VwYXJhdG9yIHBvbHlmaWxsIGJ5IEh1Z28gR2lyYXVkZWwgKGh0dHBzOi8vc2Fzcy1jb21wYXRpYmlsaXR5LmdpdGh1Yi5pby8jbGlzdF9zZXBhcmF0b3JfZnVuY3Rpb24pXG4gICR0ZXN0LWxpc3Q6ICgpO1xuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XG4gICAgJHRlc3QtbGlzdDogYXBwZW5kKCR0ZXN0LWxpc3QsICRpdGVtLCBzcGFjZSk7XG4gIH1cblxuICBAcmV0dXJuIGlmKCR0ZXN0LWxpc3QgPT0gJGxpc3QsIHNwYWNlLCBjb21tYSk7XG59XG5cbkBtaXhpbiByZW0tYmFzZWxpbmUoJHpvb206IDEwMCUpIHtcbiAgZm9udC1zaXplOiAkem9vbSAvIDE2cHggKiAkcmVtLWJhc2VsaW5lO1xufVxuXG5AZnVuY3Rpb24gcmVtLWNvbnZlcnQoJHRvLCAkdmFsdWVzLi4uKSB7XG4gICRyZXN1bHQ6ICgpO1xuICAkc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZXMpO1xuICBcbiAgQGVhY2ggJHZhbHVlIGluICR2YWx1ZXMge1xuICAgIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicmVtXCIgYW5kICR0byA9PSBcInB4XCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvIDFyZW0gKiAkcmVtLWJhc2VsaW5lLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcIm51bWJlclwiIGFuZCB1bml0KCR2YWx1ZSkgPT0gXCJweFwiIGFuZCAkdG8gPT0gXCJyZW1cIiB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlIC8gJHJlbS1iYXNlbGluZSAqIDFyZW0sICRzZXBhcmF0b3IpO1xuICAgIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpID09IFwibGlzdFwiIHtcbiAgICAgICR2YWx1ZS1zZXBhcmF0b3I6IHJlbS1zZXBhcmF0b3IoJHZhbHVlKTtcbiAgICAgICR2YWx1ZTogcmVtLWNvbnZlcnQoJHRvLCAkdmFsdWUuLi4pO1xuICAgICAgJHZhbHVlOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSwgJHZhbHVlLXNlcGFyYXRvcik7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUsICRzZXBhcmF0b3IpO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gaWYobGVuZ3RoKCRyZXN1bHQpID09IDEsIG50aCgkcmVzdWx0LCAxKSwgJHJlc3VsdCk7XG59XG5cbkBmdW5jdGlvbiByZW0oJHZhbHVlcy4uLikge1xuICBAaWYgJHJlbS1weC1vbmx5IHtcbiAgICBAcmV0dXJuIHJlbS1jb252ZXJ0KHB4LCAkdmFsdWVzLi4uKTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChyZW0sICR2YWx1ZXMuLi4pO1xuICB9XG59XG5cbkBtaXhpbiByZW0oJHByb3BlcnRpZXMsICR2YWx1ZXMuLi4pIHtcbiAgQGlmIHR5cGUtb2YoJHByb3BlcnRpZXMpID09IFwibWFwXCIge1xuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiBtYXAta2V5cygkcHJvcGVydGllcykge1xuICAgICAgQGluY2x1ZGUgcmVtKCRwcm9wZXJ0eSwgbWFwLWdldCgkcHJvcGVydGllcywgJHByb3BlcnR5KSk7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xuICAgICAgQGlmICRyZW0tZmFsbGJhY2sgb3IgJHJlbS1weC1vbmx5IHtcbiAgICAgICAgI3skcHJvcGVydHl9OiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgICBAaWYgbm90ICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5AbWl4aW4gY29udGVudC1jZW50ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDUwJTtcblx0dG9wOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xufSIsIkBpbXBvcnQgXCIuLi9iYXNlL3ZhcmlhYmxlc1wiO1xuXG4udGV4dCB7XG4gICAgJi1wcmltYXJ5MSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTE7XG4gICAgfVxuICAgICYtZ3JleS1kYXJrIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleTtcbiAgICB9XG4gICAgJi1ncmV5LWxpZ2h0IHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0O1xuICAgIH1cbiAgIFxufVxuXG4uYmcge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTE7XG4gICAgfVxuICAgICYtcHJpbWFyeTIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTI7XG4gICAgfVxuICAgICYtZ3JleS1kYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktZGFyaztcbiAgICB9XG4gICAgJi1ncmV5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0O1xuICAgIH1cbn0iLCIvLyBDb2xvcnNcblxuJGNvbG9yLXByaW1hcnkxOiByZ2JhKDI3LDQ1LDYzLDEpO1xuJGNvbG9yLXByaW1hcnkyOiByZ2JhKDUzLDcwLDg4LDEpO1xuXG4kY29sb3ItZ3JleTogcmdiYSgxMDMsIDEwMywgMTAzLCAxKTtcbiRjb2xvci1ncmV5LWRhcms6IHJnYmEoNTIsIDU4LCA2NCwgMSk7XG5cbiRjb2xvci1ncmV5LWxpZ2h0OiAjRUJFQ0YwO1xuXG4kY29sb3Itc3VjY2VzczogcmdiYSg4MiwgMjA5LCAxNDUsIDEpO1xuJGNvbG9yLWVycm9yOiByZ2JhKDIzNCwgODUsIDg1LCAxKTtcblxuLy8gRm9udHNcblxuJHRoaW46IDEwMDtcbiRleHRyYS1saWdodDogMjAwO1xuJGxpZ2h0OiAzMDA7XG4kcmVndWxhci00MDA6IDQwMDtcbiRtZWRpdW06IDUwMDtcbiRzZW1pLWJvbGQ6IDYwMDtcbiRib2xkOiA3MDA7XG4kZXh0cmEtYm9sZDogODAwO1xuJGJsYWNrLTkwMDogOTAwOyIsIi8qXG4wcHggLSAzNjBweDpcdFx0WFMgUGhvbmVcbjM2MHB4IC0gNTc2cHg6IFx0XHRQaG9uZVxuNTc2cHggLSA3NjhweDogXHRcdFRhYmxldCBQb3J0cmFpdFxuNzY4cHggLSA5OTJweDpcdFx0VGFibGV0IExhbmRzY2FwZVxuOTkycHggLSAxMjAwcHg6IFx0ZGVza3RvcFxuMTIwMHB4IC0gMTkyMHB4Olx0bm9ybWFsIE1lZGlhIHF1ZXJpZXNcbjE5MjBweCBhbmQgdXA6ICBcdEZ1bGwgSERcbiovXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuLnRleHQtcHJpbWFyeTEge1xuICBjb2xvcjogIzFiMmQzZjtcbn1cbi50ZXh0LWdyZXktZGFyayB7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuLnRleHQtZ3JleSB7XG4gIGNvbG9yOiAjNjc2NzY3O1xufVxuLnRleHQtZ3JleS1saWdodCB7XG4gIGNvbG9yOiAjRUJFQ0YwO1xufVxuXG4uYmctcHJpbWFyeTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyZDNmO1xufVxuLmJnLXByaW1hcnkyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDY1ODtcbn1cbi5iZy1ncmV5LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xufVxuLmJnLWdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc2NzY3O1xufVxuLmJnLWdyZXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQ0YwO1xufVxuXG5oMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDAuMWVtO1xuICBtYXJnaW46IDEwcHggMCAyMHB4O1xufVxuXG5oMSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2ViZWNmMDtcbiAgcGFkZGluZzogMCAxNXB4IDAgMDtcbn1cblxuaDUge1xuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaW5ib3hfcGVvcGxlIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmOCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDQwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M0YzRjNDtcbn1cblxuLmluYm94X21zZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG4gIGNsZWFyOiBib3RoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udG9wX3NwYWMge1xuICBtYXJnaW46IDIwcHggMCAwO1xufVxuXG4uY2hhbm5lbF9oZWFkaW5nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5zcmNoX2JhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5oZWFkaW5kX3NyY2gge1xuICBwYWRkaW5nOiAxMHB4IDI5cHggMTBweCAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcbn1cblxuLmNoYW5uZWxfaGVhZGluZyBoNCB7XG4gIGNvbG9yOiAjMDU3MjhmO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNyY2hfYmFyIGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmc6IDJweCAwIDRweCA2cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5zcmNoX2JhciAuaW5wdXQtZ3JvdXAtYWRkb24gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICBib3JkZXI6IG1lZGl1bSBub25lO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIHtcbiAgbWFyZ2luOiAwIDAgMCAtMjdweDtcbn1cblxuLmNoYXRfaWIgaDUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNDY0NjQ2O1xuICBtYXJnaW46IDAgMCA4cHggMDtcbn1cblxuLmNoYXRfaWIgaDUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY2hhdF9pYiBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk4OTg5ODtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2hhdF9pbWcge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDExJTtcbn1cblxuLmNoYXRfaWIge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMCAwIDAgMTVweDtcbiAgd2lkdGg6IDg4JTtcbn1cblxuLmNoYXRfcGVvcGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jaGF0X2xpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxOHB4IDE2cHggMTBweDtcbn1cblxuLmluYm94X2NoYXQge1xuICBoZWlnaHQ6IDU1MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5hY3RpdmVfY2hhdCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG59XG5cbi5pbmNvbWluZ19tc2dfaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZlYmViO1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5pbmNvbWluZ19tc2dfaW1nIGltZyB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5pbmNvbWluZ19tc2dfaW1nIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDBweDtcbn1cblxuLmluY29taW5nX21zZ19pbWdfbW9iaWxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZWJlYjtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5pbmNvbWluZ19tc2dfaW1nX21vYmlsZSBpbWcge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50ZWFjaGVyQmFkZ2Uge1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogLTVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG4gIHotaW5kZXg6IGF1dG87XG59XG5cbi5yZWNlaXZlZF9tc2cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiA5MiU7XG59XG5cbi5yZWNlaXZlZF93aXRoZF9tc2cgcCB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzY0NjQ2NDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGltZV9kYXRlIHtcbiAgY29sb3I6ICM3NDc0NzQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogOHB4IDAgMDtcbn1cblxuLnJlY2VpdmVkX3dpdGhkX21zZyB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbi5tZXNncyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VudF9tc2cgcCB7XG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm91dGdvaW5nX21zZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMjZweCAwIDI2cHg7XG59XG5cbi5zZW50X21zZyB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDQ2JTtcbn1cblxuLmlucHV0X21zZ193cml0ZSBpbnB1dCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgY29sb3I6ICM0YzRjNGM7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50eXBlX21zZyB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzRjNGM0O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm1zZ19zZW5kX2J0biB7XG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogNDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xuICAubXNnX3NlbmRfYnRuIHtcbiAgICBsZWZ0OiA4OCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xuICAubXNnX3NlbmRfYnRuLm9uZSB7XG4gICAgbGVmdDogNzglO1xuICB9XG59XG5cbi5tZXNzYWdpbmcge1xuICBwYWRkaW5nOiAwIDAgNTBweCAwO1xufVxuXG4ubXNnX2hpc3Rvcnkge1xuICBoZWlnaHQ6IDYwNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tc2dfbW9iaWxlX2hpc3Rvcnkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5tb2JpbGUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ubW9iaWxlIC5tc2dfbW9iaWxlX2hpc3Rvcnkge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubW9iaWxlIC50eXBlX21zZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA2NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLm1lc3NhZ2Uge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5iYWRnZSB7XG4gIHRvcDogLTEuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL21peGluXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvYmFzZS9jb2xvcnNcIjtcblxuaDEge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDAuMWVtO1xuICBtYXJnaW46IDEwcHggMCAyMHB4O1xufVxuXG5oMSBzcGFuIHtcbiAgLy8gei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kOiAjZWJlY2YwO1xuICBwYWRkaW5nOiAwIDE1cHggMCAwO1xufVxuXG5oNSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbiAgbWFyZ2luLXRvcDogMC40cmVtO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5pbmJveF9wZW9wbGUge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNDAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzRjNGM0O1xufVxuXG4uaW5ib3hfbXNnIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgY2xlYXI6IGJvdGg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50b3Bfc3BhYyB7XG4gIG1hcmdpbjogMjBweCAwIDA7XG59XG5cbi5jaGFubmVsX2hlYWRpbmcge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLnNyY2hfYmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmhlYWRpbmRfc3JjaCB7XG4gIHBhZGRpbmc6IDEwcHggMjlweCAxMHB4IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xufVxuXG4uY2hhbm5lbF9oZWFkaW5nIGg0IHtcbiAgY29sb3I6ICMwNTcyOGY7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc3JjaF9iYXIgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2RjZGNkO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMnB4IDAgNHB4IDZweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zcmNoX2JhciAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICBtYXJnaW46IDAgMCAwIC0yN3B4O1xufVxuXG4uY2hhdF9pYiBoNSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM0NjQ2NDY7XG4gIG1hcmdpbjogMCAwIDhweCAwO1xufVxuXG4uY2hhdF9pYiBoNSBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jaGF0X2liIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTg5ODk4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jaGF0X2ltZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTElO1xufVxuXG4uY2hhdF9pYiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xuICB3aWR0aDogODglO1xufVxuXG4uY2hhdF9wZW9wbGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNoYXRfbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE4cHggMTZweCAxMHB4O1xufVxuXG4uaW5ib3hfY2hhdCB7XG4gIGhlaWdodDogNTUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmFjdGl2ZV9jaGF0IHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbn1cblxuLmluY29taW5nX21zZ19pbWcge1xuICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vIHdpZHRoOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZlYmViO1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbiAgLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG5cbi5pbmNvbWluZ19tc2dfaW1nX21vYmlsZSB7XG4gIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gd2lkdGg6IDglO1xuICBiYWNrZ3JvdW5kOiAjZmZlYmViO1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG5cbi50ZWFjaGVyQmFkZ2Uge1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogLTVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG4gIHotaW5kZXg6IGF1dG87XG59XG5cbi5yZWNlaXZlZF9tc2cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiA5MiU7XG4gIC8vIC5uYW1lIHtcbiAgLy8gICBmb250LXNpemU6IDE0cHg7XG4gIC8vICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLy8gICBtYXJnaW46IDVweDtcbiAgLy8gfVxufVxuXG4ucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICM2NDY0NjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpbWVfZGF0ZSB7XG4gIGNvbG9yOiAjNzQ3NDc0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDhweCAwIDA7XG59XG5cbi5yZWNlaXZlZF93aXRoZF9tc2cge1xuICB3aWR0aDogNDUlO1xufVxuXG4ubWVzZ3Mge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlbnRfbXNnIHAge1xuICBiYWNrZ3JvdW5kOiAjMDU3MjhmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdXRnb2luZ19tc2cge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDI2cHggMCAyNnB4O1xufVxuXG4uc2VudF9tc2cge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0NiU7XG59XG5cbi5pbnB1dF9tc2dfd3JpdGUgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udHlwZV9tc2cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm1zZ19zZW5kX2J0biB7XG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIC8vIGhlaWdodDogMzNweDtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBsZWZ0OiA3OSU7XG4gIC8vIHRvcDogMTFweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICBsZWZ0OiA4OCU7XG4gIH1cbiAgJi5vbmUge1xuICAgIC8vIGxlZnQ6IDc0LjUlO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xuICAgICAgbGVmdDogNzglO1xuICAgIH1cbiAgfVxufVxuXG4ubWVzc2FnaW5nIHtcbiAgcGFkZGluZzogMCAwIDUwcHggMDtcbn1cblxuLm1zZ19oaXN0b3J5IHtcbiAgaGVpZ2h0OiA2MDVweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubXNnX21vYmlsZV9oaXN0b3J5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubW9iaWxlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAubXNnX21vYmlsZV9oaXN0b3J5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG4gIC50eXBlX21zZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gIH1cbn1cblxuLm1lc3NhZ2Uge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5iYWRnZSB7XG4gIHRvcDogLTEuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message',
                templateUrl: './message.component.html',
                styleUrls: ['./message.component.scss']
            }]
    }], function () { return [{ type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__["MobileViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student/more/more.component.ts":
/*!************************************************!*\
  !*** ./src/app/student/more/more.component.ts ***!
  \************************************************/
/*! exports provided: MoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreComponent", function() { return MoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mobileView/mobile-view.service */ "./src/app/services/mobileView/mobile-view.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");








function MoreComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0\u00A0 About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0\u00A0 Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0\u00A0 Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00A0\u00A0 Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A0\u00A0 Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0\u00A0 Previous Year Papers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00A0\u00A0 Google Drive Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoreComponent_div_1_app_footer_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "student");
} }
function MoreComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0 About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0\u00A0 Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0\u00A0 Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A0\u00A0 Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A0\u00A0 Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00A0\u00A0 About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0\u00A0 Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MoreComponent_div_1_app_footer_29_Template, 1, 1, "app-footer", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isMobileView);
} }
class MoreComponent {
    constructor(router, responsiveService, zone) {
        this.router = router;
        this.responsiveService = responsiveService;
        this.zone = zone;
    }
    ngOnInit() {
        this.onResize();
        this.responsiveService.checkWidth();
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.zone.run(() => { this.isMobileView = isMobile; });
        });
    }
}
MoreComponent.ɵfac = function MoreComponent_Factory(t) { return new (t || MoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoreComponent, selectors: [["app-more"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "fixed-top"], [1, "wrapper", 2, "margin-top", "47px"], ["id", "content", 1, "courseContent"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pt-5"], [1, "row", "m-0"], ["type", "button", 1, "btn", "btn-block"], ["height", "20", "src", "../../../assets/img/settings.svg", "alt", "img"], [2, "margin-top", "15px", "border-bottom", "1px solid rgb(0, 0, 0)", "padding-left", "1px", "width", "100%", "height", "auto"], [1, "wrapper"], [1, "row"], ["id", "btn1", "type", "button", 1, "btn", "btn-block"], ["height", "18", "src", "../../../assets/img/settings.svg", "alt", "img"], [3, "type", 4, "ngIf"], [3, "type"]], template: function MoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MoreComponent_div_0_Template, 31, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MoreComponent_div_1_Template, 30, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\n.btn[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 1.5em;\n  text-align: left;\n  margin-left: 10px;\n  font-weight: bold;\n}\n#btn1[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zdHVkZW50L21vcmUvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFxzYXNzXFxiYXNlXFxfbWl4aW4uc2NzcyIsIi4uLy4uL2FwcC9zdHVkZW50L21vcmUvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFxzYXNzXFxiYXNlXFxfY29sb3JzLnNjc3MiLCIuLi8uLi9hcHAvc3R1ZGVudC9tb3JlL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvbW9yZS9tb3JlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvbW9yZS9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXC4uXFxhcHBcXHN0dWRlbnRcXG1vcmVcXG1vcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7Ozs7Ozs7O0NBQUE7QUFXQTs7Ozs7Ozs7OztDQUFBO0FDWEk7RUFDSSxjQ0ZTO0FDb0JqQjtBRmhCSTtFQUNJLGNDRFU7QUNtQmxCO0FGaEJJO0VBQ0ksY0NMSztBQ3VCYjtBRmhCSTtFQUNJLGNDTFc7QUN1Qm5CO0FGWkk7RUFDSSx5QkNsQlM7QUNpQ2pCO0FGYkk7RUFDSSx5QkNwQlM7QUNtQ2pCO0FGYkk7RUFDSSx5QkNwQlU7QUNtQ2xCO0FGYkk7RUFDSSx5QkN4Qks7QUN1Q2I7QUZiSTtFQUNJLHlCQ3hCVztBQ3VDbkI7QUM3Q0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FEZ0RSO0FDOUNJO0VBQ0ksZUFBQTtBRGlEUiIsImZpbGUiOiIuLi8uLi9hcHAvc3R1ZGVudC9tb3JlL21vcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIE1FRElBIFFVRVJZIE1BTkFHRVJcblxuLypcbjBweCAtIDM2MHB4Olx0XHRYUyBQaG9uZVxuMzYwcHggLSA1NzZweDogXHRcdFBob25lXG41NzZweCAtIDc2OHB4OiBcdFx0VGFibGV0IFBvcnRyYWl0XG43NjhweCAtIDk5MnB4Olx0XHRUYWJsZXQgTGFuZHNjYXBlXG45OTJweCAtIDEyMDBweDogXHRkZXNrdG9wXG4xMjAwcHggLSAxOTIwcHg6XHRub3JtYWwgTWVkaWEgcXVlcmllc1xuMTkyMHB4IGFuZCB1cDogIFx0RnVsbCBIRFxuKi9cblxuXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuXG5AbWl4aW4gcmVzcG9uZE1heCgkYnJlYWtwb2ludCkge1xuXHRAaWYgJGJyZWFrcG9pbnQgPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuICB9XG4gIEBpZiAkYnJlYWtwb2ludCA9PSBoZC1kZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTBlbSkgeyBAY29udGVudCB9OyAvLzE0NDBweFxuICB9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5AbWl4aW4gcmVzcG9uZE1pbigkYnJlYWtwb2ludG1pbikge1xuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5cblxuXG4kcmVtLWJhc2VsaW5lOiAxNnB4ICFkZWZhdWx0O1xuJHJlbS1mYWxsYmFjazogZmFsc2UgIWRlZmF1bHQ7XG4kcmVtLXB4LW9ubHk6IGZhbHNlICFkZWZhdWx0O1xuXG5AZnVuY3Rpb24gcmVtLXNlcGFyYXRvcigkbGlzdCwgJHNlcGFyYXRvcjogZmFsc2UpIHtcbiAgQGlmICRzZXBhcmF0b3IgPT0gXCJjb21tYVwiIG9yICRzZXBhcmF0b3IgPT0gXCJzcGFjZVwiIHtcbiAgICBAcmV0dXJuIGFwcGVuZCgkbGlzdCwgbnVsbCwgJHNlcGFyYXRvcik7XG4gIH0gXG4gIFxuICBAaWYgZnVuY3Rpb24tZXhpc3RzKFwibGlzdC1zZXBhcmF0b3JcIikgPT0gdHJ1ZSB7XG4gICAgQHJldHVybiBsaXN0LXNlcGFyYXRvcigkbGlzdCk7XG4gIH1cblxuICAvLyBsaXN0LXNlcGFyYXRvciBwb2x5ZmlsbCBieSBIdWdvIEdpcmF1ZGVsIChodHRwczovL3Nhc3MtY29tcGF0aWJpbGl0eS5naXRodWIuaW8vI2xpc3Rfc2VwYXJhdG9yX2Z1bmN0aW9uKVxuICAkdGVzdC1saXN0OiAoKTtcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xuICAgICR0ZXN0LWxpc3Q6IGFwcGVuZCgkdGVzdC1saXN0LCAkaXRlbSwgc3BhY2UpO1xuICB9XG5cbiAgQHJldHVybiBpZigkdGVzdC1saXN0ID09ICRsaXN0LCBzcGFjZSwgY29tbWEpO1xufVxuXG5AbWl4aW4gcmVtLWJhc2VsaW5lKCR6b29tOiAxMDAlKSB7XG4gIGZvbnQtc2l6ZTogJHpvb20gLyAxNnB4ICogJHJlbS1iYXNlbGluZTtcbn1cblxuQGZ1bmN0aW9uIHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlcy4uLikge1xuICAkcmVzdWx0OiAoKTtcbiAgJHNlcGFyYXRvcjogcmVtLXNlcGFyYXRvcigkdmFsdWVzKTtcbiAgXG4gIEBlYWNoICR2YWx1ZSBpbiAkdmFsdWVzIHtcbiAgICBAaWYgdHlwZS1vZigkdmFsdWUpID09IFwibnVtYmVyXCIgYW5kIHVuaXQoJHZhbHVlKSA9PSBcInJlbVwiIGFuZCAkdG8gPT0gXCJweFwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAxcmVtICogJHJlbS1iYXNlbGluZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicHhcIiBhbmQgJHRvID09IFwicmVtXCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvICRyZW0tYmFzZWxpbmUgKiAxcmVtLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcImxpc3RcIiB7XG4gICAgICAkdmFsdWUtc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSk7XG4gICAgICAkdmFsdWU6IHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlLi4uKTtcbiAgICAgICR2YWx1ZTogcmVtLXNlcGFyYXRvcigkdmFsdWUsICR2YWx1ZS1zZXBhcmF0b3IpO1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKGxlbmd0aCgkcmVzdWx0KSA9PSAxLCBudGgoJHJlc3VsdCwgMSksICRyZXN1bHQpO1xufVxuXG5AZnVuY3Rpb24gcmVtKCR2YWx1ZXMuLi4pIHtcbiAgQGlmICRyZW0tcHgtb25seSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgfVxufVxuXG5AbWl4aW4gcmVtKCRwcm9wZXJ0aWVzLCAkdmFsdWVzLi4uKSB7XG4gIEBpZiB0eXBlLW9mKCRwcm9wZXJ0aWVzKSA9PSBcIm1hcFwiIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gbWFwLWtleXMoJHByb3BlcnRpZXMpIHtcbiAgICAgIEBpbmNsdWRlIHJlbSgkcHJvcGVydHksIG1hcC1nZXQoJHByb3BlcnRpZXMsICRwcm9wZXJ0eSkpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgIEBpZiAkcmVtLWZhbGxiYWNrIG9yICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocHgsICR2YWx1ZXMuLi4pO1xuICAgICAgfVxuICAgICAgQGlmIG5vdCAkcmVtLXB4LW9ubHkge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1peGluIGNvbnRlbnQtY2VudGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn0iLCJAaW1wb3J0IFwiLi4vYmFzZS92YXJpYWJsZXNcIjtcblxuLnRleHQge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrO1xuICAgIH1cbiAgICAmLWdyZXkge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG4gICBcbn1cblxuLmJnIHtcbiAgICAmLXByaW1hcnkxIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLXByaW1hcnkyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkyO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xuICAgIH1cbiAgICAmLWdyZXktbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG59IiwiLy8gQ29sb3JzXG5cbiRjb2xvci1wcmltYXJ5MTogcmdiYSgyNyw0NSw2MywxKTtcbiRjb2xvci1wcmltYXJ5MjogcmdiYSg1Myw3MCw4OCwxKTtcblxuJGNvbG9yLWdyZXk6IHJnYmEoMTAzLCAxMDMsIDEwMywgMSk7XG4kY29sb3ItZ3JleS1kYXJrOiByZ2JhKDUyLCA1OCwgNjQsIDEpO1xuXG4kY29sb3ItZ3JleS1saWdodDogI0VCRUNGMDtcblxuJGNvbG9yLXN1Y2Nlc3M6IHJnYmEoODIsIDIwOSwgMTQ1LCAxKTtcbiRjb2xvci1lcnJvcjogcmdiYSgyMzQsIDg1LCA4NSwgMSk7XG5cbi8vIEZvbnRzXG5cbiR0aGluOiAxMDA7XG4kZXh0cmEtbGlnaHQ6IDIwMDtcbiRsaWdodDogMzAwO1xuJHJlZ3VsYXItNDAwOiA0MDA7XG4kbWVkaXVtOiA1MDA7XG4kc2VtaS1ib2xkOiA2MDA7XG4kYm9sZDogNzAwO1xuJGV4dHJhLWJvbGQ6IDgwMDtcbiRibGFjay05MDA6IDkwMDsiLCIvKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuLypcbiRicmVha3BvaW50IGFyZ3VlbWVudCBjaG9pY2VzOlxuLSB4cy1waG9uZVxuLSBwaG9uZVxuLSB0YWItcG9ydFxuLSB0YWItbGFuZFxuLSBkZXNrdG9wXG4tIGZ1bGwtaGRcblxuMWVtID0gMTZweFxuKi9cbi50ZXh0LXByaW1hcnkxIHtcbiAgY29sb3I6ICMxYjJkM2Y7XG59XG4udGV4dC1ncmV5LWRhcmsge1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbi50ZXh0LWdyZXkge1xuICBjb2xvcjogIzY3Njc2Nztcbn1cbi50ZXh0LWdyZXktbGlnaHQge1xuICBjb2xvcjogI0VCRUNGMDtcbn1cblxuLmJnLXByaW1hcnkxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmQzZjtcbn1cbi5iZy1wcmltYXJ5MiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NTg7XG59XG4uYmctZ3JleS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3Njc2Nztcbn1cbi5iZy1ncmV5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUNGMDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2J0bjEge1xuICBmb250LXNpemU6IDE1cHg7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL2Jhc2UvbWl4aW5cIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL2Jhc2UvY29sb3JzXCI7XHJcbiAgICAuYnRue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgI2J0bjF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-more',
                templateUrl: './more.component.html',
                styleUrls: ['./more.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student/quiz/quiz.component.ts":
/*!************************************************!*\
  !*** ./src/app/student/quiz/quiz.component.ts ***!
  \************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class QuizComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuizComponent.ɵfac = function QuizComponent_Factory(t) { return new (t || QuizComponent)(); };
QuizComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizComponent, selectors: [["app-quiz"]], decls: 2, vars: 0, template: function QuizComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "quiz works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hcHAvc3R1ZGVudC9xdWl6L3F1aXouY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz',
                templateUrl: './quiz.component.html',
                styleUrls: ['./quiz.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/student/recent/recent.component.ts":
/*!****************************************************!*\
  !*** ./src/app/student/recent/recent.component.ts ***!
  \****************************************************/
/*! exports provided: RecentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentComponent", function() { return RecentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mobileView/mobile-view.service */ "./src/app/services/mobileView/mobile-view.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");








function RecentComponent_div_0_button_13_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} }
function RecentComponent_div_0_button_13_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
} }
function RecentComponent_div_0_button_13_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
} }
function RecentComponent_div_0_button_13_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
} }
function RecentComponent_div_0_button_13_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Live Class started on Zoom in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " course on 17th June at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overdue_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r3.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r3.endtime);
} }
function RecentComponent_div_0_button_13_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lecture uploaded in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " course titiled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " on 18th June at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overdue_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r3.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r3.endtime);
} }
function RecentComponent_div_0_button_13_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assignement uploaded in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " course titiled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " on 18th June at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overdue_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r3.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r3.endtime);
} }
function RecentComponent_div_0_button_13_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quiz uploaded in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " course titiled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " on 17th June at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overdue_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r3.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r3.endtime);
} }
function RecentComponent_div_0_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecentComponent_div_0_button_13_img_3_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecentComponent_div_0_button_13_img_4_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecentComponent_div_0_button_13_img_5_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecentComponent_div_0_button_13_img_6_Template, 1, 0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RecentComponent_div_0_button_13_div_8_Template, 10, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RecentComponent_div_0_button_13_div_9_Template, 11, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RecentComponent_div_0_button_13_div_10_Template, 11, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RecentComponent_div_0_button_13_div_11_Template, 11, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overdue_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r3.type == "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r3.type == "Lecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r3.type == "Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r3.type == "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r3.type == "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r3.type == "Lecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r3.type == "Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r3.type == "Quiz");
} }
function RecentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Recent Activities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RecentComponent_div_0_button_13_Template, 12, 8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.overdues);
} }
function RecentComponent_div_1_button_10_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
} }
function RecentComponent_div_1_button_10_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
} }
function RecentComponent_div_1_button_10_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} }
function RecentComponent_div_1_button_10_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
} }
function RecentComponent_div_1_button_10_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Live Class started on Zoom in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " course on 17th June at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overdue_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r17.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r17.endtime);
} }
function RecentComponent_div_1_button_10_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lecture uploaded in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " course titiled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " on 18th June at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overdue_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r17.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r17.endtime);
} }
function RecentComponent_div_1_button_10_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assignement uploaded in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " course titiled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " on 18th June at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overdue_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r17.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r17.endtime);
} }
function RecentComponent_div_1_button_10_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quiz uploaded in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " course titiled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " on 17th June at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overdue_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r17.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r17.endtime);
} }
function RecentComponent_div_1_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecentComponent_div_1_button_10_img_3_Template, 1, 0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecentComponent_div_1_button_10_img_4_Template, 1, 0, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecentComponent_div_1_button_10_img_5_Template, 1, 0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecentComponent_div_1_button_10_img_6_Template, 1, 0, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RecentComponent_div_1_button_10_div_8_Template, 11, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RecentComponent_div_1_button_10_div_9_Template, 11, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RecentComponent_div_1_button_10_div_10_Template, 11, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RecentComponent_div_1_button_10_div_11_Template, 11, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overdue_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r17.type == "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r17.type == "Lecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r17.type == "Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r17.type == "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r17.type == "Live");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r17.type == "Lecture");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r17.type == "Assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", overdue_r17.type == "Quiz");
} }
const _c0 = function (a0) { return { "fixed-top": a0 }; };
function RecentComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Recent Activities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RecentComponent_div_1_button_10_Template, 12, 8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.isMobileView));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.overdues);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "student");
} }
class RecentComponent {
    constructor(responsiveService) {
        this.responsiveService = responsiveService;
        this.type = 'student';
        this.overdues = [
            {
                date: '7',
                month: 'Jan',
                msg: 'Math ',
                type: 'Live',
                endtime: '7:00 pm',
                title: ' Quadratic Equation'
            },
            {
                date: '7',
                month: 'Jan',
                msg: 'Math ',
                type: 'Quiz',
                endtime: '7:00 pm',
                title: ' Quadratic Equation'
            },
            {
                date: '7',
                month: 'Jan',
                msg: 'Math ',
                type: 'Lecture',
                endtime: '7:00 pm',
                title: ' Quadratic Equation'
            },
            {
                date: '7',
                month: 'Jan',
                msg: 'Math ',
                type: 'Assignment',
                endtime: '7:00 pm',
                title: ' Quadratic Equation'
            }
        ];
    }
    ngOnInit() {
        this.onResize();
        this.responsiveService.checkWidth();
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobileView = isMobile;
        });
    }
}
RecentComponent.ɵfac = function RecentComponent_Factory(t) { return new (t || RecentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__["MobileViewService"])); };
RecentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecentComponent, selectors: [["app-recent"]], inputs: { type: "type" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "fixed-top"], [1, "wrapper", 2, "margin-top", "47px"], ["id", "content", 1, "courseContent"], [1, "d-flex", "flex-wrap", "pt-3", 2, "padding-bottom", "80px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pt-3"], [1, "row", "m-0"], ["id", "mt-4", 1, "mt-4"], ["type", "button", "class", "btn btn-block", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-block"], [1, "d-flex", "p-3"], [2, "align-self", "center", "margin", "0px 10px"], ["height", "28", "src", "../../../assets/img/video-camera.svg", "alt", "img", 4, "ngIf"], ["height", "28", "src", "../../../assets/img/google-docs.svg", "alt", "img", 4, "ngIf"], ["height", "28", "src", "../../../assets/img/edit (1).svg", "alt", "img", 4, "ngIf"], ["height", "28", "src", "../../../assets/img/puzzle-piece.svg", "alt", "img", 4, "ngIf"], [1, "w-100"], ["height", "28", "src", "../../../assets/img/video-camera.svg", "alt", "img"], ["height", "28", "src", "../../../assets/img/google-docs.svg", "alt", "img"], ["height", "28", "src", "../../../assets/img/edit (1).svg", "alt", "img"], ["height", "28", "src", "../../../assets/img/puzzle-piece.svg", "alt", "img"], [3, "ngClass"], [1, "mt-4"], [3, "type"], [2, "align-self", "center", "margin", "0px 5px"], ["height", "22", "src", "../../../assets/img/video-camera.svg", "alt", "img", 4, "ngIf"], ["height", "22", "src", "../../../assets/img/google-docs.svg", "alt", "img", 4, "ngIf"], ["height", "22", "src", "../../../assets/img/edit (1).svg", "alt", "img", 4, "ngIf"], ["height", "22", "src", "../../../assets/img/puzzle-piece.svg", "alt", "img", 4, "ngIf"], [1, "w-100", 2, "font-size", "12px"], ["height", "22", "src", "../../../assets/img/video-camera.svg", "alt", "img"], ["height", "22", "src", "../../../assets/img/google-docs.svg", "alt", "img"], ["height", "22", "src", "../../../assets/img/edit (1).svg", "alt", "img"], ["height", "22", "src", "../../../assets/img/puzzle-piece.svg", "alt", "img"]], template: function RecentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RecentComponent_div_0_Template, 14, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecentComponent_div_1_Template, 12, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\nh1[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #000;\n  line-height: 0.1em;\n  margin: 10px 0 10px;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ebecf0;\n  padding: 0 15px 0 0;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid #28baa2;\n  border-radius: 10px 10px 10px 10px;\n  background-color: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  margin-top: 5px;\n}\n#mt-4[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.w-100[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 2rem;\n  font-size: 16px;\n  color: #757575;\n}\n.w-100[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zdHVkZW50L3JlY2VudC9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXHNhc3NcXGJhc2VcXF9taXhpbi5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvcmVjZW50L0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX2NvbG9ycy5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvcmVjZW50L0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvcmVjZW50L3JlY2VudC5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2FwcC9zdHVkZW50L3JlY2VudC9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXC4uXFxhcHBcXHN0dWRlbnRcXHJlY2VudFxccmVjZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOzs7Ozs7OztDQUFBO0FBV0E7Ozs7Ozs7Ozs7Q0FBQTtBQ1hJO0VBQ0ksY0NGUztBQ29CakI7QUZoQkk7RUFDSSxjQ0RVO0FDbUJsQjtBRmhCSTtFQUNJLGNDTEs7QUN1QmI7QUZoQkk7RUFDSSxjQ0xXO0FDdUJuQjtBRlpJO0VBQ0kseUJDbEJTO0FDaUNqQjtBRmJJO0VBQ0kseUJDcEJTO0FDbUNqQjtBRmJJO0VBQ0kseUJDcEJVO0FDbUNsQjtBRmJJO0VBQ0kseUJDeEJLO0FDdUNiO0FGYkk7RUFDSSx5QkN4Qlc7QUN1Q25CO0FDNUNBO0VBQ0ksV0FBQTtFQUVBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRDhDSjtBQzVDQTtFQUVJLG1CQUFBO0VBQ0EsbUJBQUE7QUQ4Q0o7QUM1Q0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0FEK0NKO0FDNUNBO0VBQ0ksV0FBQTtBRCtDSjtBQzdDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRGdESjtBQzlDQTtFQUNJLGNBQUE7QURpREoiLCJmaWxlIjoiLi4vLi4vYXBwL3N0dWRlbnQvcmVjZW50L3JlY2VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gTUVESUEgUVVFUlkgTUFOQUdFUlxuXG4vKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuXG5cbi8qXG4kYnJlYWtwb2ludCBhcmd1ZW1lbnQgY2hvaWNlczpcbi0geHMtcGhvbmVcbi0gcGhvbmVcbi0gdGFiLXBvcnRcbi0gdGFiLWxhbmRcbi0gZGVza3RvcFxuLSBmdWxsLWhkXG5cbjFlbSA9IDE2cHhcbiovXG5cbkBtaXhpbiByZXNwb25kTWF4KCRicmVha3BvaW50KSB7XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4cy1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDIyLjVlbSkgeyBAY29udGVudCB9OyAvLzM2MHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IHNtLXBob25lIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMzZlbSkgeyBAY29udGVudCB9OyAvLzU3NnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IG1kLXRhYiB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHsgQGNvbnRlbnQgfTsgLy83NjhweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBsZy1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNjJlbSkgeyBAY29udGVudCB9OyAvLzk5MnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IHhsLWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7IEBjb250ZW50IH07IC8vMTIwMHB4XG4gIH1cbiAgQGlmICRicmVha3BvaW50ID09IGhkLWRlc2t0b3Age1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7IEBjb250ZW50IH07IC8vMTQ0MHB4XG4gIH1cblx0QGlmICRicmVha3BvaW50ID09IGZ1bGwtaGQge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAxMjBlbSkgeyBAY29udGVudCB9OyAvLzE5MjBweFxuXHR9XG59XG5cbkBtaXhpbiByZXNwb25kTWluKCRicmVha3BvaW50bWluKSB7XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4cy1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDIyLjVlbSkgeyBAY29udGVudCB9OyAvLzM2MHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IHNtLXBob25lIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMzZlbSkgeyBAY29udGVudCB9OyAvLzU3NnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IG1kLXRhYiB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHsgQGNvbnRlbnQgfTsgLy83NjhweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBsZy1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjJlbSkgeyBAY29udGVudCB9OyAvLzk5MnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IHhsLWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7IEBjb250ZW50IH07IC8vMTIwMHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IGZ1bGwtaGQge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAxMjBlbSkgeyBAY29udGVudCB9OyAvLzE5MjBweFxuXHR9XG59XG5cblxuXG5cbiRyZW0tYmFzZWxpbmU6IDE2cHggIWRlZmF1bHQ7XG4kcmVtLWZhbGxiYWNrOiBmYWxzZSAhZGVmYXVsdDtcbiRyZW0tcHgtb25seTogZmFsc2UgIWRlZmF1bHQ7XG5cbkBmdW5jdGlvbiByZW0tc2VwYXJhdG9yKCRsaXN0LCAkc2VwYXJhdG9yOiBmYWxzZSkge1xuICBAaWYgJHNlcGFyYXRvciA9PSBcImNvbW1hXCIgb3IgJHNlcGFyYXRvciA9PSBcInNwYWNlXCIge1xuICAgIEByZXR1cm4gYXBwZW5kKCRsaXN0LCBudWxsLCAkc2VwYXJhdG9yKTtcbiAgfSBcbiAgXG4gIEBpZiBmdW5jdGlvbi1leGlzdHMoXCJsaXN0LXNlcGFyYXRvclwiKSA9PSB0cnVlIHtcbiAgICBAcmV0dXJuIGxpc3Qtc2VwYXJhdG9yKCRsaXN0KTtcbiAgfVxuXG4gIC8vIGxpc3Qtc2VwYXJhdG9yIHBvbHlmaWxsIGJ5IEh1Z28gR2lyYXVkZWwgKGh0dHBzOi8vc2Fzcy1jb21wYXRpYmlsaXR5LmdpdGh1Yi5pby8jbGlzdF9zZXBhcmF0b3JfZnVuY3Rpb24pXG4gICR0ZXN0LWxpc3Q6ICgpO1xuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XG4gICAgJHRlc3QtbGlzdDogYXBwZW5kKCR0ZXN0LWxpc3QsICRpdGVtLCBzcGFjZSk7XG4gIH1cblxuICBAcmV0dXJuIGlmKCR0ZXN0LWxpc3QgPT0gJGxpc3QsIHNwYWNlLCBjb21tYSk7XG59XG5cbkBtaXhpbiByZW0tYmFzZWxpbmUoJHpvb206IDEwMCUpIHtcbiAgZm9udC1zaXplOiAkem9vbSAvIDE2cHggKiAkcmVtLWJhc2VsaW5lO1xufVxuXG5AZnVuY3Rpb24gcmVtLWNvbnZlcnQoJHRvLCAkdmFsdWVzLi4uKSB7XG4gICRyZXN1bHQ6ICgpO1xuICAkc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZXMpO1xuICBcbiAgQGVhY2ggJHZhbHVlIGluICR2YWx1ZXMge1xuICAgIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicmVtXCIgYW5kICR0byA9PSBcInB4XCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvIDFyZW0gKiAkcmVtLWJhc2VsaW5lLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcIm51bWJlclwiIGFuZCB1bml0KCR2YWx1ZSkgPT0gXCJweFwiIGFuZCAkdG8gPT0gXCJyZW1cIiB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlIC8gJHJlbS1iYXNlbGluZSAqIDFyZW0sICRzZXBhcmF0b3IpO1xuICAgIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpID09IFwibGlzdFwiIHtcbiAgICAgICR2YWx1ZS1zZXBhcmF0b3I6IHJlbS1zZXBhcmF0b3IoJHZhbHVlKTtcbiAgICAgICR2YWx1ZTogcmVtLWNvbnZlcnQoJHRvLCAkdmFsdWUuLi4pO1xuICAgICAgJHZhbHVlOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSwgJHZhbHVlLXNlcGFyYXRvcik7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUsICRzZXBhcmF0b3IpO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gaWYobGVuZ3RoKCRyZXN1bHQpID09IDEsIG50aCgkcmVzdWx0LCAxKSwgJHJlc3VsdCk7XG59XG5cbkBmdW5jdGlvbiByZW0oJHZhbHVlcy4uLikge1xuICBAaWYgJHJlbS1weC1vbmx5IHtcbiAgICBAcmV0dXJuIHJlbS1jb252ZXJ0KHB4LCAkdmFsdWVzLi4uKTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChyZW0sICR2YWx1ZXMuLi4pO1xuICB9XG59XG5cbkBtaXhpbiByZW0oJHByb3BlcnRpZXMsICR2YWx1ZXMuLi4pIHtcbiAgQGlmIHR5cGUtb2YoJHByb3BlcnRpZXMpID09IFwibWFwXCIge1xuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiBtYXAta2V5cygkcHJvcGVydGllcykge1xuICAgICAgQGluY2x1ZGUgcmVtKCRwcm9wZXJ0eSwgbWFwLWdldCgkcHJvcGVydGllcywgJHByb3BlcnR5KSk7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xuICAgICAgQGlmICRyZW0tZmFsbGJhY2sgb3IgJHJlbS1weC1vbmx5IHtcbiAgICAgICAgI3skcHJvcGVydHl9OiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgICBAaWYgbm90ICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5AbWl4aW4gY29udGVudC1jZW50ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDUwJTtcblx0dG9wOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xufSIsIkBpbXBvcnQgXCIuLi9iYXNlL3ZhcmlhYmxlc1wiO1xuXG4udGV4dCB7XG4gICAgJi1wcmltYXJ5MSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTE7XG4gICAgfVxuICAgICYtZ3JleS1kYXJrIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleTtcbiAgICB9XG4gICAgJi1ncmV5LWxpZ2h0IHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0O1xuICAgIH1cbiAgIFxufVxuXG4uYmcge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTE7XG4gICAgfVxuICAgICYtcHJpbWFyeTIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTI7XG4gICAgfVxuICAgICYtZ3JleS1kYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktZGFyaztcbiAgICB9XG4gICAgJi1ncmV5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0O1xuICAgIH1cbn0iLCIvLyBDb2xvcnNcblxuJGNvbG9yLXByaW1hcnkxOiByZ2JhKDI3LDQ1LDYzLDEpO1xuJGNvbG9yLXByaW1hcnkyOiByZ2JhKDUzLDcwLDg4LDEpO1xuXG4kY29sb3ItZ3JleTogcmdiYSgxMDMsIDEwMywgMTAzLCAxKTtcbiRjb2xvci1ncmV5LWRhcms6IHJnYmEoNTIsIDU4LCA2NCwgMSk7XG5cbiRjb2xvci1ncmV5LWxpZ2h0OiAjRUJFQ0YwO1xuXG4kY29sb3Itc3VjY2VzczogcmdiYSg4MiwgMjA5LCAxNDUsIDEpO1xuJGNvbG9yLWVycm9yOiByZ2JhKDIzNCwgODUsIDg1LCAxKTtcblxuLy8gRm9udHNcblxuJHRoaW46IDEwMDtcbiRleHRyYS1saWdodDogMjAwO1xuJGxpZ2h0OiAzMDA7XG4kcmVndWxhci00MDA6IDQwMDtcbiRtZWRpdW06IDUwMDtcbiRzZW1pLWJvbGQ6IDYwMDtcbiRib2xkOiA3MDA7XG4kZXh0cmEtYm9sZDogODAwO1xuJGJsYWNrLTkwMDogOTAwOyIsIi8qXG4wcHggLSAzNjBweDpcdFx0WFMgUGhvbmVcbjM2MHB4IC0gNTc2cHg6IFx0XHRQaG9uZVxuNTc2cHggLSA3NjhweDogXHRcdFRhYmxldCBQb3J0cmFpdFxuNzY4cHggLSA5OTJweDpcdFx0VGFibGV0IExhbmRzY2FwZVxuOTkycHggLSAxMjAwcHg6IFx0ZGVza3RvcFxuMTIwMHB4IC0gMTkyMHB4Olx0bm9ybWFsIE1lZGlhIHF1ZXJpZXNcbjE5MjBweCBhbmQgdXA6ICBcdEZ1bGwgSERcbiovXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuLnRleHQtcHJpbWFyeTEge1xuICBjb2xvcjogIzFiMmQzZjtcbn1cbi50ZXh0LWdyZXktZGFyayB7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuLnRleHQtZ3JleSB7XG4gIGNvbG9yOiAjNjc2NzY3O1xufVxuLnRleHQtZ3JleS1saWdodCB7XG4gIGNvbG9yOiAjRUJFQ0YwO1xufVxuXG4uYmctcHJpbWFyeTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyZDNmO1xufVxuLmJnLXByaW1hcnkyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDY1ODtcbn1cbi5iZy1ncmV5LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xufVxuLmJnLWdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc2NzY3O1xufVxuLmJnLWdyZXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQ0YwO1xufVxuXG5oMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDAuMWVtO1xuICBtYXJnaW46IDEwcHggMCAxMHB4O1xufVxuXG5oMSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2ViZWNmMDtcbiAgcGFkZGluZzogMCAxNXB4IDAgMDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjhiYWEyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbiNtdC00IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53LTEwMCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xufVxuXG4udy0xMDAgYiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL21peGluXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL2NvbG9yc1wiO1xyXG5cclxuaDEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMC4xZW07XHJcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4O1xyXG59XHJcbmgxIHNwYW4ge1xyXG4gICAgLy8gei1pbmRleDogMTAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ViZWNmMDtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDA7XHJcbn1cclxuLmJ0bntcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyOGJhYTI7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxufVxyXG4jbXQtNHtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxufVxyXG4udy0xMDB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtOyBcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG59XHJcbi53LTEwMCBie1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recent',
                templateUrl: './recent.component.html',
                styleUrls: ['./recent.component.scss']
            }]
    }], function () { return [{ type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__["MobileViewService"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/student/student-header/student-header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/student/student-header/student-header.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentHeaderComponent", function() { return StudentHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mobileView/mobile-view.service */ "./src/app/services/mobileView/mobile-view.service.ts");



class StudentHeaderComponent {
    constructor(responsiveService) {
        this.responsiveService = responsiveService;
    }
    ngOnInit() {
        this.onResize();
        this.responsiveService.checkWidth();
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobileView = isMobile;
        });
    }
}
StudentHeaderComponent.ɵfac = function StudentHeaderComponent_Factory(t) { return new (t || StudentHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__["MobileViewService"])); };
StudentHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentHeaderComponent, selectors: [["app-student-header"]], decls: 33, vars: 0, consts: [[1, "navbar", "navbar-expand", "navbar-dark", "bg-dark", "flex-md-column", "flex-row", "align-items-start", "py-2"], [1, "collapse", "navbar-collapse"], [1, "flex-md-column", "flex-row", "navbar-nav", "w-100", "justify-content-between"], [1, "nav-item"], ["href", "#", 1, "nav-link", "pl-0", "text-nowrap"], [1, "fa", "fa-bullseye", "fa-fw"], [1, "font-weight-bold"], ["href", "#", 1, "nav-link", "pl-0"], [1, "fa", "fa-book", "fa-fw"], [1, "d-none", "d-md-inline"], [1, "fa", "fa-cog", "fa-fw"], [1, "fa", "fa-heart", "codeply", "fa-fw"], [1, "fa", "fa-star", "codeply", "fa-fw"], [1, "fa", "fa-star", "fa-fw"]], template: function StudentHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Codeply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hcHAvc3R1ZGVudC9zdHVkZW50LWhlYWRlci9zdHVkZW50LWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-header',
                templateUrl: './student-header.component.html',
                styleUrls: ['./student-header.component.scss']
            }]
    }], function () { return [{ type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__["MobileViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student/student-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-routing.module.ts ***!
  \***************************************************/
/*! exports provided: StudentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function() { return StudentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/student/home/home.component.ts");
/* harmony import */ var _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./discussions/discussions.component */ "./src/app/student/discussions/discussions.component.ts");
/* harmony import */ var _recent_recent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recent/recent.component */ "./src/app/student/recent/recent.component.ts");
/* harmony import */ var _grade_grade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grade/grade.component */ "./src/app/student/grade/grade.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course/course.component */ "./src/app/student/course/course.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/student/timetable/timetable.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message/message.component */ "./src/app/student/message/message.component.ts");
/* harmony import */ var _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lecture/lecture.component */ "./src/app/student/lecture/lecture.component.ts");
/* harmony import */ var _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assignment/assignment.component */ "./src/app/student/assignment/assignment.component.ts");
/* harmony import */ var _live_live_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./live/live.component */ "./src/app/student/live/live.component.ts");
/* harmony import */ var _more_more_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./more/more.component */ "./src/app/student/more/more.component.ts");















const routes = [
    {
        path: '',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'discussions',
        component: _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_3__["DiscussionsComponent"]
    },
    {
        path: 'recent',
        component: _recent_recent_component__WEBPACK_IMPORTED_MODULE_4__["RecentComponent"]
    },
    {
        path: 'grade',
        component: _grade_grade_component__WEBPACK_IMPORTED_MODULE_5__["GradeComponent"]
    },
    {
        path: 'schedule',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_7__["TimetableComponent"]
    },
    {
        path: 'message',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"]
    },
    {
        path: 'lecture',
        component: _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_9__["LectureComponent"]
    },
    {
        path: 'assignment',
        component: _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_10__["AssignmentComponent"]
    },
    {
        path: 'course',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_6__["CourseComponent"]
    },
    {
        path: 'live',
        component: _live_live_component__WEBPACK_IMPORTED_MODULE_11__["LiveComponent"]
    },
    {
        path: 'more',
        component: _more_more_component__WEBPACK_IMPORTED_MODULE_12__["MoreComponent"]
    },
];
class StudentRoutingModule {
}
StudentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentRoutingModule });
StudentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentRoutingModule_Factory(t) { return new (t || StudentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/student/student.module.ts":
/*!*******************************************!*\
  !*** ./src/app/student/student.module.ts ***!
  \*******************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-routing.module */ "./src/app/student/student-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/student/home/home.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _student_header_student_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-header/student-header.component */ "./src/app/student/student-header/student-header.component.ts");
/* harmony import */ var _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discussions/discussions.component */ "./src/app/student/discussions/discussions.component.ts");
/* harmony import */ var _recent_recent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recent/recent.component */ "./src/app/student/recent/recent.component.ts");
/* harmony import */ var _grade_grade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grade/grade.component */ "./src/app/student/grade/grade.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./course/course.component */ "./src/app/student/course/course.component.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/student/timetable/timetable.component.ts");
/* harmony import */ var _timetable_weekview_weekview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timetable/weekview/weekview.component */ "./src/app/student/timetable/weekview/weekview.component.ts");
/* harmony import */ var _timetable_dayview_dayview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timetable/dayview/dayview.component */ "./src/app/student/timetable/dayview/dayview.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./message/message.component */ "./src/app/student/message/message.component.ts");
/* harmony import */ var _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lecture/lecture.component */ "./src/app/student/lecture/lecture.component.ts");
/* harmony import */ var _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assignment/assignment.component */ "./src/app/student/assignment/assignment.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/student/quiz/quiz.component.ts");
/* harmony import */ var _live_live_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./live/live.component */ "./src/app/student/live/live.component.ts");
/* harmony import */ var _more_more_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./more/more.component */ "./src/app/student/more/more.component.ts");






















class StudentModule {
}
StudentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StudentModule });
StudentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StudentModule_Factory(t) { return new (t || StudentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
            _common_common_module__WEBPACK_IMPORTED_MODULE_11__["EventSectionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StudentModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _student_header_student_header_component__WEBPACK_IMPORTED_MODULE_5__["StudentHeaderComponent"],
        _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_6__["DiscussionsComponent"], _recent_recent_component__WEBPACK_IMPORTED_MODULE_7__["RecentComponent"],
        _grade_grade_component__WEBPACK_IMPORTED_MODULE_8__["GradeComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponent"], _course_course_component__WEBPACK_IMPORTED_MODULE_10__["CourseComponent"], _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_12__["TimetableComponent"], _timetable_weekview_weekview_component__WEBPACK_IMPORTED_MODULE_13__["WeekviewComponent"], _timetable_dayview_dayview_component__WEBPACK_IMPORTED_MODULE_14__["DayviewComponent"], _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_16__["LectureComponent"], _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_17__["AssignmentComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_18__["QuizComponent"], _live_live_component__WEBPACK_IMPORTED_MODULE_19__["LiveComponent"], _more_more_component__WEBPACK_IMPORTED_MODULE_20__["MoreComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
        _common_common_module__WEBPACK_IMPORTED_MODULE_11__["EventSectionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _student_header_student_header_component__WEBPACK_IMPORTED_MODULE_5__["StudentHeaderComponent"],
                    _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_6__["DiscussionsComponent"], _recent_recent_component__WEBPACK_IMPORTED_MODULE_7__["RecentComponent"],
                    _grade_grade_component__WEBPACK_IMPORTED_MODULE_8__["GradeComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponent"], _course_course_component__WEBPACK_IMPORTED_MODULE_10__["CourseComponent"], _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_12__["TimetableComponent"], _timetable_weekview_weekview_component__WEBPACK_IMPORTED_MODULE_13__["WeekviewComponent"], _timetable_dayview_dayview_component__WEBPACK_IMPORTED_MODULE_14__["DayviewComponent"], _lecture_lecture_component__WEBPACK_IMPORTED_MODULE_16__["LectureComponent"], _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_17__["AssignmentComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_18__["QuizComponent"], _live_live_component__WEBPACK_IMPORTED_MODULE_19__["LiveComponent"], _more_more_component__WEBPACK_IMPORTED_MODULE_20__["MoreComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _student_routing_module__WEBPACK_IMPORTED_MODULE_2__["StudentRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                    _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                    _common_common_module__WEBPACK_IMPORTED_MODULE_11__["EventSectionModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/student/timetable/dayview/dayview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/student/timetable/dayview/dayview.component.ts ***!
  \****************************************************************/
/*! exports provided: DayviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayviewComponent", function() { return DayviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function DayviewComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timetableData_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "pills-" + timetableData_r2.day + "-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "#pills-" + timetableData_r2.day, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", timetableData_r2.day == "Mon" ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](timetableData_r2.day);
} }
function DayviewComponent_div_12_tr_9_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timetable_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](timetable_r5.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](timetable_r5.teacherName);
} }
function DayviewComponent_div_12_tr_9_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RECESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DayviewComponent_div_12_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DayviewComponent_div_12_tr_9_td_3_Template, 5, 2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DayviewComponent_div_12_tr_9_th_4_Template, 2, 0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timetable_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](timetable_r5.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", timetable_r5.recess == "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", timetable_r5.recess == "true");
} }
function DayviewComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DayviewComponent_div_12_tr_9_Template, 5, 3, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timetableData_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "pills-" + timetableData_r3.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", timetableData_r3.day == "Mon" ? "show active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](timetableData_r3.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", timetableData_r3.data);
} }
class DayviewComponent {
    constructor() {
        this.timeTable = [
            {
                day: 'Mon',
                today: 'Monday',
                data: [
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        recess: 'true'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    }
                ],
            },
            {
                day: 'Tue',
                today: 'Tuesday',
                data: [
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        recess: 'true'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    }
                ],
            },
            {
                day: 'Wed',
                today: 'Wednesday',
                data: [
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        recess: 'true'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    }
                ],
            },
            {
                day: 'Thu',
                today: 'Thursday',
                data: [
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        recess: 'true'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    }
                ],
            },
            {
                day: 'Fri',
                today: 'Friday',
                data: [
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        recess: 'true'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    }
                ],
            },
            {
                day: 'Sat',
                today: 'saturday',
                data: [
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        recess: 'true'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    },
                    {
                        time: '8:30AM-9:30AM	',
                        subject: 'Maths',
                        teacherName: `Teachers's Name`,
                        recess: 'false'
                    }
                ],
            }
        ];
    }
    ngOnInit() {
    }
}
DayviewComponent.ɵfac = function DayviewComponent_Factory(t) { return new (t || DayviewComponent)(); };
DayviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayviewComponent, selectors: [["app-dayview"]], decls: 13, vars: 2, consts: [["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#timetable", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-toggle", "tab", "href", "#calander", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "timetable", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "courseMonths", "active"], ["id", "pills-tab", "role", "tablist", 1, "scrollmenu", "nav", "nav-pills", "flex-nowrap"], ["class", "nav-item mr-2", 4, "ngFor", "ngForOf"], ["id", "pills-tabContent", 1, "day-view", "tab-content"], ["class", "tab-pane fade", "role", "tabpanel", 3, "ngClass", "id", 4, "ngFor", "ngForOf"], [1, "nav-item", "mr-2"], ["data-toggle", "pill", "role", "tab", "aria-selected", "true", 1, "nav-link", "tab-text", "ml-3", "mr-2", 3, "ngClass", "id", "href"], ["role", "tabpanel", 1, "tab-pane", "fade", 3, "ngClass", "id"], [1, "table", "table-bordered", "table-hover"], ["scope", "col", 2, "padding-left", "10px"], [4, "ngFor", "ngForOf"], ["scope", "row", 2, "font-style", "ubantu", "font-weight", "500", "padding-left", "10px"], ["style", "font-style: Roboto ; font-weight: 450; padding-left: 10px;", 4, "ngIf"], ["style", "padding-left: 10px;", 4, "ngIf"], [2, "font-style", "Roboto", "font-weight", "450", "padding-left", "10px"], [2, "color", "#757575"], [2, "padding-left", "10px"]], template: function DayviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Timetable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Calander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DayviewComponent_li_10_Template, 3, 4, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DayviewComponent_div_12_Template, 10, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeTable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\n.scrollmenu[_ngcontent-%COMP%] {\n  overflow: auto;\n  white-space: nowrap;\n  padding-top: 10px;\n  background-color: #354658;\n}\n.scrollmenu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n}\n.scrollmenu[_ngcontent-%COMP%]   .tab-text[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.day-view.tab-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .day-view.tab-content[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .day-view.tab-content[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.card-fixed[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  max-width: 100px;\n  min-width: 100px;\n  margin-right: 2rem;\n}\n#myTab[_ngcontent-%COMP%] {\n  font-size: 15px;\n  justify-content: space-around;\n  background-color: #1b2d3f;\n  border: none;\n  padding-top: 15px;\n}\n#myTab[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  border: none;\n}\n#myTab[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 700;\n  background: none;\n  border-bottom: 5px solid #28baa2;\n}\n.scrollmenu[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  border: 1px solid transparent;\n}\n.scrollmenu[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n  background-color: #354658;\n  border-bottom: 5px solid #28baa2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zdHVkZW50L3RpbWV0YWJsZS9kYXl2aWV3L0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX21peGluLnNjc3MiLCIuLi8uLi9hcHAvc3R1ZGVudC90aW1ldGFibGUvZGF5dmlldy9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXHNhc3NcXGJhc2VcXF9jb2xvcnMuc2NzcyIsIi4uLy4uL2FwcC9zdHVkZW50L3RpbWV0YWJsZS9kYXl2aWV3L0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvdGltZXRhYmxlL2RheXZpZXcvZGF5dmlldy5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2FwcC9zdHVkZW50L3RpbWV0YWJsZS9kYXl2aWV3L0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcLi5cXGFwcFxcc3R1ZGVudFxcdGltZXRhYmxlXFxkYXl2aWV3XFxkYXl2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOzs7Ozs7OztDQUFBO0FBV0E7Ozs7Ozs7Ozs7Q0FBQTtBQ1hJO0VBQ0ksY0NGUztBQ29CakI7QUZoQkk7RUFDSSxjQ0RVO0FDbUJsQjtBRmhCSTtFQUNJLGNDTEs7QUN1QmI7QUZoQkk7RUFDSSxjQ0xXO0FDdUJuQjtBRlpJO0VBQ0kseUJDbEJTO0FDaUNqQjtBRmJJO0VBQ0kseUJDcEJTO0FDbUNqQjtBRmJJO0VBQ0kseUJDcEJVO0FDbUNsQjtBRmJJO0VBQ0kseUJDeEJLO0FDdUNiO0FGYkk7RUFDSSx5QkN4Qlc7QUN1Q25CO0FDNUNBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRCtDSjtBQzVDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUQrQ0Y7QUM1Q0E7RUFDRSxlQUFBO0FEK0NGO0FDM0NFO0VBQ0UsaUJBQUE7QUQ4Q0o7QUMzQ0E7RUFDSSxZQUFBO0VBR0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRDRDSjtBQzFDQTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FENkNKO0FDM0NBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUQ4Q0o7QUMzQ0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FEOENKO0FDNUNFO0VBQ0UsY0FBQTtFQUNBLDZCQUFBO0FEK0NKO0FDNUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBRCtDSiIsImZpbGUiOiIuLi8uLi9hcHAvc3R1ZGVudC90aW1ldGFibGUvZGF5dmlldy9kYXl2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBNRURJQSBRVUVSWSBNQU5BR0VSXG5cbi8qXG4wcHggLSAzNjBweDpcdFx0WFMgUGhvbmVcbjM2MHB4IC0gNTc2cHg6IFx0XHRQaG9uZVxuNTc2cHggLSA3NjhweDogXHRcdFRhYmxldCBQb3J0cmFpdFxuNzY4cHggLSA5OTJweDpcdFx0VGFibGV0IExhbmRzY2FwZVxuOTkycHggLSAxMjAwcHg6IFx0ZGVza3RvcFxuMTIwMHB4IC0gMTkyMHB4Olx0bm9ybWFsIE1lZGlhIHF1ZXJpZXNcbjE5MjBweCBhbmQgdXA6ICBcdEZ1bGwgSERcbiovXG5cblxuLypcbiRicmVha3BvaW50IGFyZ3VlbWVudCBjaG9pY2VzOlxuLSB4cy1waG9uZVxuLSBwaG9uZVxuLSB0YWItcG9ydFxuLSB0YWItbGFuZFxuLSBkZXNrdG9wXG4tIGZ1bGwtaGRcblxuMWVtID0gMTZweFxuKi9cblxuQG1peGluIHJlc3BvbmRNYXgoJGJyZWFrcG9pbnQpIHtcblx0QGlmICRicmVha3BvaW50ID09IHhzLXBob25lIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMjIuNWVtKSB7IEBjb250ZW50IH07IC8vMzYwcHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0gc20tcGhvbmUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAzNmVtKSB7IEBjb250ZW50IH07IC8vNTc2cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0gbWQtdGFiIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNDhlbSkgeyBAY29udGVudCB9OyAvLzc2OHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IGxnLWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA2MmVtKSB7IEBjb250ZW50IH07IC8vOTkycHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0geGwtZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc1ZW0pIHsgQGNvbnRlbnQgfTsgLy8xMjAwcHhcbiAgfVxuICBAaWYgJGJyZWFrcG9pbnQgPT0gaGQtZGVza3RvcCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwZW0pIHsgQGNvbnRlbnQgfTsgLy8xNDQwcHhcbiAgfVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0gZnVsbC1oZCB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDEyMGVtKSB7IEBjb250ZW50IH07IC8vMTkyMHB4XG5cdH1cbn1cblxuQG1peGluIHJlc3BvbmRNaW4oJGJyZWFrcG9pbnRtaW4pIHtcblx0QGlmICRicmVha3BvaW50bWluID09IHhzLXBob25lIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMjIuNWVtKSB7IEBjb250ZW50IH07IC8vMzYwcHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0gc20tcGhvbmUge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAzNmVtKSB7IEBjb250ZW50IH07IC8vNTc2cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0gbWQtdGFiIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNDhlbSkgeyBAY29udGVudCB9OyAvLzc2OHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IGxnLWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7IEBjb250ZW50IH07IC8vOTkycHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0geGwtZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHsgQGNvbnRlbnQgfTsgLy8xMjAwcHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0gZnVsbC1oZCB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDEyMGVtKSB7IEBjb250ZW50IH07IC8vMTkyMHB4XG5cdH1cbn1cblxuXG5cblxuJHJlbS1iYXNlbGluZTogMTZweCAhZGVmYXVsdDtcbiRyZW0tZmFsbGJhY2s6IGZhbHNlICFkZWZhdWx0O1xuJHJlbS1weC1vbmx5OiBmYWxzZSAhZGVmYXVsdDtcblxuQGZ1bmN0aW9uIHJlbS1zZXBhcmF0b3IoJGxpc3QsICRzZXBhcmF0b3I6IGZhbHNlKSB7XG4gIEBpZiAkc2VwYXJhdG9yID09IFwiY29tbWFcIiBvciAkc2VwYXJhdG9yID09IFwic3BhY2VcIiB7XG4gICAgQHJldHVybiBhcHBlbmQoJGxpc3QsIG51bGwsICRzZXBhcmF0b3IpO1xuICB9IFxuICBcbiAgQGlmIGZ1bmN0aW9uLWV4aXN0cyhcImxpc3Qtc2VwYXJhdG9yXCIpID09IHRydWUge1xuICAgIEByZXR1cm4gbGlzdC1zZXBhcmF0b3IoJGxpc3QpO1xuICB9XG5cbiAgLy8gbGlzdC1zZXBhcmF0b3IgcG9seWZpbGwgYnkgSHVnbyBHaXJhdWRlbCAoaHR0cHM6Ly9zYXNzLWNvbXBhdGliaWxpdHkuZ2l0aHViLmlvLyNsaXN0X3NlcGFyYXRvcl9mdW5jdGlvbilcbiAgJHRlc3QtbGlzdDogKCk7XG4gIEBlYWNoICRpdGVtIGluICRsaXN0IHtcbiAgICAkdGVzdC1saXN0OiBhcHBlbmQoJHRlc3QtbGlzdCwgJGl0ZW0sIHNwYWNlKTtcbiAgfVxuXG4gIEByZXR1cm4gaWYoJHRlc3QtbGlzdCA9PSAkbGlzdCwgc3BhY2UsIGNvbW1hKTtcbn1cblxuQG1peGluIHJlbS1iYXNlbGluZSgkem9vbTogMTAwJSkge1xuICBmb250LXNpemU6ICR6b29tIC8gMTZweCAqICRyZW0tYmFzZWxpbmU7XG59XG5cbkBmdW5jdGlvbiByZW0tY29udmVydCgkdG8sICR2YWx1ZXMuLi4pIHtcbiAgJHJlc3VsdDogKCk7XG4gICRzZXBhcmF0b3I6IHJlbS1zZXBhcmF0b3IoJHZhbHVlcyk7XG4gIFxuICBAZWFjaCAkdmFsdWUgaW4gJHZhbHVlcyB7XG4gICAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcIm51bWJlclwiIGFuZCB1bml0KCR2YWx1ZSkgPT0gXCJyZW1cIiBhbmQgJHRvID09IFwicHhcIiB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlIC8gMXJlbSAqICRyZW0tYmFzZWxpbmUsICRzZXBhcmF0b3IpO1xuICAgIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpID09IFwibnVtYmVyXCIgYW5kIHVuaXQoJHZhbHVlKSA9PSBcInB4XCIgYW5kICR0byA9PSBcInJlbVwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAkcmVtLWJhc2VsaW5lICogMXJlbSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJsaXN0XCIge1xuICAgICAgJHZhbHVlLXNlcGFyYXRvcjogcmVtLXNlcGFyYXRvcigkdmFsdWUpO1xuICAgICAgJHZhbHVlOiByZW0tY29udmVydCgkdG8sICR2YWx1ZS4uLik7XG4gICAgICAkdmFsdWU6IHJlbS1zZXBhcmF0b3IoJHZhbHVlLCAkdmFsdWUtc2VwYXJhdG9yKTtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUsICRzZXBhcmF0b3IpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBpZihsZW5ndGgoJHJlc3VsdCkgPT0gMSwgbnRoKCRyZXN1bHQsIDEpLCAkcmVzdWx0KTtcbn1cblxuQGZ1bmN0aW9uIHJlbSgkdmFsdWVzLi4uKSB7XG4gIEBpZiAkcmVtLXB4LW9ubHkge1xuICAgIEByZXR1cm4gcmVtLWNvbnZlcnQocHgsICR2YWx1ZXMuLi4pO1xuICB9IEBlbHNlIHtcbiAgICBAcmV0dXJuIHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XG4gIH1cbn1cblxuQG1peGluIHJlbSgkcHJvcGVydGllcywgJHZhbHVlcy4uLikge1xuICBAaWYgdHlwZS1vZigkcHJvcGVydGllcykgPT0gXCJtYXBcIiB7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluIG1hcC1rZXlzKCRwcm9wZXJ0aWVzKSB7XG4gICAgICBAaW5jbHVkZSByZW0oJHByb3BlcnR5LCBtYXAtZ2V0KCRwcm9wZXJ0aWVzLCAkcHJvcGVydHkpKTtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XG4gICAgICBAaWYgJHJlbS1mYWxsYmFjayBvciAkcmVtLXB4LW9ubHkge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHB4LCAkdmFsdWVzLi4uKTtcbiAgICAgIH1cbiAgICAgIEBpZiBub3QgJHJlbS1weC1vbmx5IHtcbiAgICAgICAgI3skcHJvcGVydHl9OiByZW0tY29udmVydChyZW0sICR2YWx1ZXMuLi4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbkBtaXhpbiBjb250ZW50LWNlbnRlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogNTAlO1xuXHR0b3A6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG59IiwiQGltcG9ydCBcIi4uL2Jhc2UvdmFyaWFibGVzXCI7XG5cbi50ZXh0IHtcbiAgICAmLXByaW1hcnkxIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5MTtcbiAgICB9XG4gICAgJi1ncmV5LWRhcmsge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWdyZXktZGFyaztcbiAgICB9XG4gICAgJi1ncmV5IHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ncmV5O1xuICAgIH1cbiAgICAmLWdyZXktbGlnaHQge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWdyZXktbGlnaHQ7XG4gICAgfVxuICAgXG59XG5cbi5iZyB7XG4gICAgJi1wcmltYXJ5MSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5MTtcbiAgICB9XG4gICAgJi1wcmltYXJ5MiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5MjtcbiAgICB9XG4gICAgJi1ncmV5LWRhcmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1kYXJrO1xuICAgIH1cbiAgICAmLWdyZXkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleTtcbiAgICB9XG4gICAgJi1ncmV5LWxpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktbGlnaHQ7XG4gICAgfVxufSIsIi8vIENvbG9yc1xuXG4kY29sb3ItcHJpbWFyeTE6IHJnYmEoMjcsNDUsNjMsMSk7XG4kY29sb3ItcHJpbWFyeTI6IHJnYmEoNTMsNzAsODgsMSk7XG5cbiRjb2xvci1ncmV5OiByZ2JhKDEwMywgMTAzLCAxMDMsIDEpO1xuJGNvbG9yLWdyZXktZGFyazogcmdiYSg1MiwgNTgsIDY0LCAxKTtcblxuJGNvbG9yLWdyZXktbGlnaHQ6ICNFQkVDRjA7XG5cbiRjb2xvci1zdWNjZXNzOiByZ2JhKDgyLCAyMDksIDE0NSwgMSk7XG4kY29sb3ItZXJyb3I6IHJnYmEoMjM0LCA4NSwgODUsIDEpO1xuXG4vLyBGb250c1xuXG4kdGhpbjogMTAwO1xuJGV4dHJhLWxpZ2h0OiAyMDA7XG4kbGlnaHQ6IDMwMDtcbiRyZWd1bGFyLTQwMDogNDAwO1xuJG1lZGl1bTogNTAwO1xuJHNlbWktYm9sZDogNjAwO1xuJGJvbGQ6IDcwMDtcbiRleHRyYS1ib2xkOiA4MDA7XG4kYmxhY2stOTAwOiA5MDA7IiwiLypcbjBweCAtIDM2MHB4Olx0XHRYUyBQaG9uZVxuMzYwcHggLSA1NzZweDogXHRcdFBob25lXG41NzZweCAtIDc2OHB4OiBcdFx0VGFibGV0IFBvcnRyYWl0XG43NjhweCAtIDk5MnB4Olx0XHRUYWJsZXQgTGFuZHNjYXBlXG45OTJweCAtIDEyMDBweDogXHRkZXNrdG9wXG4xMjAwcHggLSAxOTIwcHg6XHRub3JtYWwgTWVkaWEgcXVlcmllc1xuMTkyMHB4IGFuZCB1cDogIFx0RnVsbCBIRFxuKi9cbi8qXG4kYnJlYWtwb2ludCBhcmd1ZW1lbnQgY2hvaWNlczpcbi0geHMtcGhvbmVcbi0gcGhvbmVcbi0gdGFiLXBvcnRcbi0gdGFiLWxhbmRcbi0gZGVza3RvcFxuLSBmdWxsLWhkXG5cbjFlbSA9IDE2cHhcbiovXG4udGV4dC1wcmltYXJ5MSB7XG4gIGNvbG9yOiAjMWIyZDNmO1xufVxuLnRleHQtZ3JleS1kYXJrIHtcbiAgY29sb3I6ICMzNDNhNDA7XG59XG4udGV4dC1ncmV5IHtcbiAgY29sb3I6ICM2NzY3Njc7XG59XG4udGV4dC1ncmV5LWxpZ2h0IHtcbiAgY29sb3I6ICNFQkVDRjA7XG59XG5cbi5iZy1wcmltYXJ5MSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjJkM2Y7XG59XG4uYmctcHJpbWFyeTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0NjU4O1xufVxuLmJnLWdyZXktZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG59XG4uYmctZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzY3Njc7XG59XG4uYmctZ3JleS1saWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVDRjA7XG59XG5cbi5zY3JvbGxtZW51IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0NjU4O1xufVxuXG4uc2Nyb2xsbWVudSBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2Nyb2xsbWVudSAudGFiLXRleHQge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5kYXktdmlldy50YWItY29udGVudCB0YWJsZSwgLmRheS12aWV3LnRhYi1jb250ZW50IHRoLCAuZGF5LXZpZXcudGFiLWNvbnRlbnQgdHIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNhcmQtZml4ZWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbiNteVRhYiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjJkM2Y7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbiNteVRhYiAubmF2LWxpbmsge1xuICBjb2xvcjogI2M0YzRjNDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jbXlUYWIgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMyOGJhYTI7XG59XG5cbi5zY3JvbGxtZW51IC5uYXYtbGluayB7XG4gIGNvbG9yOiAjYzRjNGM0O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLnNjcm9sbG1lbnUgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDY1ODtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMyOGJhYTI7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zYXNzL2Jhc2UvbWl4aW5cIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL2NvbG9yc1wiO1xuXG4uc2Nyb2xsbWVudSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU0NjU4O1xuICB9XG4gIFxuLnNjcm9sbG1lbnUgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNjcm9sbG1lbnUgLnRhYi10ZXh0IHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZGF5LXZpZXcudGFiLWNvbnRlbnQge1xuICB0YWJsZSx0aCx0ciB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbi5jYXJkLWZpeGVkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gbWluLWhlaWdodDogMTAwcHg7XG4gICAgLy8gbWF4LWhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbiNteVRhYntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmQzZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cbiNteVRhYiAubmF2LWxpbmsge1xuICAgIGNvbG9yOiAjYzRjNGM0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiNteVRhYiAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjMjhiYWEyO1xuICB9XG4gIC5zY3JvbGxtZW51IC5uYXYtbGluayB7XG4gICAgY29sb3I6ICNjNGM0YzQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5zY3JvbGxtZW51IC5uYXYtbGluay5hY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NTg7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICMyOGJhYTI7XG4gIH1cbiAgXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dayview',
                templateUrl: './dayview.component.html',
                styleUrls: ['./dayview.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/student/timetable/timetable.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/student/timetable/timetable.component.ts ***!
  \**********************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mobileView/mobile-view.service */ "./src/app/services/mobileView/mobile-view.service.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _weekview_weekview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weekview/weekview.component */ "./src/app/student/timetable/weekview/weekview.component.ts");
/* harmony import */ var _dayview_dayview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dayview/dayview.component */ "./src/app/student/timetable/dayview/dayview.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");









function TimetableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-weekview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimetableComponent_div_2_app_sidebar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
} }
function TimetableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimetableComponent_div_2_app_sidebar_1_Template, 1, 0, "app-sidebar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-dayview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isMobileView);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "student");
} }
const _c0 = function (a0) { return { "fixed-top": a0 }; };
class TimetableComponent {
    constructor(responsiveService) {
        this.responsiveService = responsiveService;
        this.calenderView = 'weekview';
    }
    ngOnInit() {
        this.onResize();
        this.responsiveService.checkWidth();
    }
    onResize() {
        this.responsiveService.getMobileStatus().subscribe(isMobile => {
            this.isMobileView = isMobile;
        });
    }
    showCalenderView(view) {
        this.calenderView = view;
    }
}
TimetableComponent.ɵfac = function TimetableComponent_Factory(t) { return new (t || TimetableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__["MobileViewService"])); };
TimetableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimetableComponent, selectors: [["app-timetable"]], decls: 3, vars: 5, consts: [[3, "ngClass"], ["class", "wrapper", 4, "ngIf"], [1, "wrapper"], ["id", "content"], [4, "ngIf"], ["id", "content", 1, ""], [3, "type"]], template: function TimetableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimetableComponent_div_1_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimetableComponent_div_2_Template, 5, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isMobileView));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
    } }, directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _weekview_weekview_component__WEBPACK_IMPORTED_MODULE_5__["WeekviewComponent"], _dayview_dayview_component__WEBPACK_IMPORTED_MODULE_6__["DayviewComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hcHAvc3R1ZGVudC90aW1ldGFibGUvdGltZXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimetableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timetable',
                templateUrl: './timetable.component.html',
                styleUrls: ['./timetable.component.scss']
            }]
    }], function () { return [{ type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_1__["MobileViewService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student/timetable/weekview/weekview.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/student/timetable/weekview/weekview.component.ts ***!
  \******************************************************************/
/*! exports provided: WeekviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekviewComponent", function() { return WeekviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function WeekviewComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r2 === "Tuesday" ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r2, " ");
} }
function WeekviewComponent_tr_12_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timetable_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](timetable_r3.time);
} }
function WeekviewComponent_tr_12_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timetable_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](timetable_r3.time);
} }
function WeekviewComponent_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "RECESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeekviewComponent_tr_12_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", data_r10.day === "Tuesday" ? "selected" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r10.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r10.teacherName);
} }
function WeekviewComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeekviewComponent_tr_12_td_1_Template, 3, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeekviewComponent_tr_12_td_2_Template, 3, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WeekviewComponent_tr_12_td_3_Template, 3, 0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WeekviewComponent_tr_12_td_4_Template, 6, 3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timetable_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", timetable_r3.recess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", timetable_r3.recess == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", timetable_r3.recess);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", timetable_r3.data);
} }
class WeekviewComponent {
    constructor() {
        this.timeTable = {
            columns: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            data: [
                {
                    time: '8:30AM-9:30AM',
                    recess: false,
                    data: [{
                            day: 'Monday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Tuesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Wednesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Thursday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Friday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Saturday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        }
                    ]
                },
                {
                    time: '9:30AM-10:30AM',
                    recess: false,
                    data: [{
                            day: 'Monday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Tuesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Wednesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Thursday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Friday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Saturday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                    ]
                },
                {
                    time: '10:30AM-11:30AM',
                    recess: false,
                    data: [{
                            day: 'Monday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Tuesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Wednesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Thursday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Friday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Saturday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        }]
                },
                {
                    time: '11:30AM-12:30AM',
                    recess: false,
                    data: [{
                            day: 'Monday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Tuesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Wednesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Thursday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Friday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'saturday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        }]
                },
                {
                    time: '12:30AM-1:30AM',
                    recess: true,
                    data: []
                },
                {
                    time: '1:30AM-2:30AM',
                    recess: false,
                    data: [{
                            day: 'Monday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Tuesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Wednesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Thursday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Friday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Saturday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        }]
                },
                {
                    time: '2:30AM-3:30AM',
                    recess: false,
                    data: [{
                            day: 'Monday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Tuesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Wednesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Thursday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Friday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'saturday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        }]
                },
                {
                    time: '3:30AM-4:30AM',
                    recess: false, data: [{
                            day: 'Monday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Tuesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Wednesday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Thursday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'Friday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        },
                        {
                            day: 'saturday',
                            subject: 'Maths',
                            teacherName: `Teachers's Name`,
                            recess: 'false'
                        }]
                }
            ]
        };
    }
    ngOnInit() {
    }
}
WeekviewComponent.ɵfac = function WeekviewComponent_Factory(t) { return new (t || WeekviewComponent)(); };
WeekviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeekviewComponent, selectors: [["app-weekview"]], decls: 13, vars: 2, consts: [[2, "padding-left", "10px", "padding-right", "10px", "padding-top", "10px"], [1, "table-responsive-sm", "weekview", 2, "padding-top", "30px"], [1, "table", "table-bordered", "table-hover"], ["scope", "col"], ["scope", "col", "style", " background-color: #1b2d3f;\n        color: #ffffff;", 3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["scope", "col", 2, "background-color", "#1b2d3f", "color", "#ffffff", 3, "ngClass"], ["scope", "row", "id", "time", "style", "background-color: #1b2d3f; color: #ffffff;", 4, "ngIf"], ["scope", "row", "id", "time", 4, "ngIf"], ["colspan", "6", "style", "text-align: center; background-color: #1b2d3f; color: #ffffff;", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["scope", "row", "id", "time", 2, "background-color", "#1b2d3f", "color", "#ffffff"], ["scope", "row", "id", "time"], ["colspan", "6", 2, "text-align", "center", "background-color", "#1b2d3f", "color", "#ffffff"], [3, "ngClass"], ["id", "teacher"]], template: function WeekviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Timetable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WeekviewComponent_th_10_Template, 2, 2, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WeekviewComponent_tr_12_Template, 5, 4, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeTable.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeTable.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["h1[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #000;\n  line-height: 0.1em;\n  margin: 10px 0 10px;\n}\n\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ebecf0;\n  padding: 0 15px 0 0;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: #28baa2;\n  color: #ffffff;\n}\n\n.selected[_ngcontent-%COMP%]   #teacher[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n#teacher[_ngcontent-%COMP%] {\n  color: #757575;\n}\n\n.weekview[_ngcontent-%COMP%]   table[_ngcontent-%COMP%], .weekview[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .weekview[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n  color: #ffffff;\n}\n\n#time[_ngcontent-%COMP%] {\n  background-color: #28baa2;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zdHVkZW50L3RpbWV0YWJsZS93ZWVrdmlldy9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXC4uXFxhcHBcXHN0dWRlbnRcXHRpbWV0YWJsZVxcd2Vla3ZpZXdcXHdlZWt2aWV3LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vYXBwL3N0dWRlbnQvdGltZXRhYmxlL3dlZWt2aWV3L3dlZWt2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUVBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdBO0VBRUksbUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0FDREo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0k7RUFDSSxpQkFBQTtBQ0FSOztBREdBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiIuLi8uLi9hcHAvc3R1ZGVudC90aW1ldGFibGUvd2Vla3ZpZXcvd2Vla3ZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjFlbTtcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4O1xufVxuaDEgc3BhbiB7XG4gICAgLy8gei1pbmRleDogMTAwO1xuICAgIGJhY2tncm91bmQ6ICNlYmVjZjA7XG4gICAgcGFkZGluZzogMCAxNXB4IDAgMDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhiYWEyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2VsZWN0ZWQgI3RlYWNoZXJ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4jdGVhY2hlcntcbiAgICBjb2xvcjogIzc1NzU3NTtcbn1cbi53ZWVrdmlldyB7XG4gICAgdGFibGUsdGgsdHIge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG59XG50aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyZDNmO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIFxufVxuI3RpbWV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YmFhMjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn0iLCJoMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDAuMWVtO1xuICBtYXJnaW46IDEwcHggMCAxMHB4O1xufVxuXG5oMSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2ViZWNmMDtcbiAgcGFkZGluZzogMCAxNXB4IDAgMDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YmFhMjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zZWxlY3RlZCAjdGVhY2hlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4jdGVhY2hlciB7XG4gIGNvbG9yOiAjNzU3NTc1O1xufVxuXG4ud2Vla3ZpZXcgdGFibGUsIC53ZWVrdmlldyB0aCwgLndlZWt2aWV3IHRyIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmQzZjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiN0aW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YmFhMjtcbiAgY29sb3I6ICNmZmZmZmY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeekviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weekview',
                templateUrl: './weekview.component.html',
                styleUrls: ['./weekview.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=student-student-module-es2015.js.map