function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~student-student-module~teacher-teacher-module"], {
  /***/
  "./src/app/common/common.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/common/common.module.ts ***!
    \*****************************************/

  /*! exports provided: EventSectionModule */

  /***/
  function srcAppCommonCommonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventSectionModule", function () {
      return EventSectionModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _event_section_event_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./event-section/event-section.component */
    "./src/app/common/event-section/event-section.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/common/home/home.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mobile-header/mobile-header.component */
    "./src/app/common/mobile-header/mobile-header.component.ts");
    /* harmony import */


    var _dot_progress_bar_dot_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dot-progress-bar/dot-progress-bar.component */
    "./src/app/common/dot-progress-bar/dot-progress-bar.component.ts");
    /* harmony import */


    var _message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./message/message.component */
    "./src/app/common/message/message.component.ts");

    var EventSectionModule = function EventSectionModule() {
      _classCallCheck(this, EventSectionModule);
    };

    EventSectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EventSectionModule
    });
    EventSectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EventSectionModule_Factory(t) {
        return new (t || EventSectionModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EventSectionModule, {
        declarations: [_event_section_event_section_component__WEBPACK_IMPORTED_MODULE_1__["EventSectionComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeCommonComponent"], _mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_4__["MobileHeaderComponent"], _dot_progress_bar_dot_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__["DotProgressBarComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [_event_section_event_section_component__WEBPACK_IMPORTED_MODULE_1__["EventSectionComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeCommonComponent"], _mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_4__["MobileHeaderComponent"], _dot_progress_bar_dot_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__["DotProgressBarComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventSectionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_event_section_event_section_component__WEBPACK_IMPORTED_MODULE_1__["EventSectionComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeCommonComponent"], _mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_4__["MobileHeaderComponent"], _dot_progress_bar_dot_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__["DotProgressBarComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
          exports: [_event_section_event_section_component__WEBPACK_IMPORTED_MODULE_1__["EventSectionComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeCommonComponent"], _mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_4__["MobileHeaderComponent"], _dot_progress_bar_dot_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__["DotProgressBarComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/dot-progress-bar/dot-progress-bar.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/common/dot-progress-bar/dot-progress-bar.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DotProgressBarComponent */

  /***/
  function srcAppCommonDotProgressBarDotProgressBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DotProgressBarComponent", function () {
      return DotProgressBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DotProgressBarComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var weekList_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](weekList_r1.status + (weekList_r1.isCurrent == true ? " current" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](weekList_r1.week);
      }
    }

    var DotProgressBarComponent = /*#__PURE__*/function () {
      function DotProgressBarComponent() {
        _classCallCheck(this, DotProgressBarComponent);

        this.weekLists = [];
      }

      _createClass(DotProgressBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.weekLists);
        }
      }]);

      return DotProgressBarComponent;
    }();

    DotProgressBarComponent.ɵfac = function DotProgressBarComponent_Factory(t) {
      return new (t || DotProgressBarComponent)();
    };

    DotProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DotProgressBarComponent,
      selectors: [["app-dot-progress-bar"]],
      inputs: {
        weekLists: "weekLists"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "progressbar"], [3, "class", 4, "ngFor", "ngForOf"], [2, "font-size", "11px"]],
      template: function DotProgressBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DotProgressBarComponent_li_1_Template, 3, 4, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weekLists);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px auto;\n}\n\n.progressbar[_ngcontent-%COMP%] {\n  display: flex;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n.progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  width: 25%;\n  float: left;\n  font-size: 1rem;\n  position: relative;\n  text-align: center;\n  color: #c4c4c4;\n}\n\n.progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  width: 1.5rem;\n  position: relative;\n  height: 1.5rem;\n  content: \"\";\n  line-height: 30px;\n  border: 2px solid #c4c4c4;\n  display: block;\n  text-align: center;\n  margin: 0 auto 5px auto;\n  border-radius: 50%;\n  background-color: white;\n  z-index: 1;\n}\n\n\n\n.progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  width: 100%;\n  height: 2px;\n  content: \"\";\n  position: absolute;\n  background-color: #7d7d7d;\n  top: 0.6rem;\n  left: -50%;\n}\n\n.progressbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child:after {\n  content: none;\n}\n\n.progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before {\n  border-color: #55b776;\n  background-color: #55b776;\n}\n\n.progressbar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%]:after {\n  background-color: #55b776;\n}\n\n.progressbar[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]:before {\n  border-color: #55b776;\n  background-color: #55b776;\n}\n\n.progressbar[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%]:after {\n  background-color: #55b776;\n}\n\n.progressbar[_ngcontent-%COMP%]   li.inactive[_ngcontent-%COMP%]:before {\n  border-color: #c4c4c4;\n  background-color: #c4c4c4;\n}\n\n.progressbar[_ngcontent-%COMP%]   li.inactive[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%]:after {\n  background-color: #c4c4c4;\n}\n\n.progressbar[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21tb24vZG90LXByb2dyZXNzLWJhci9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXC4uXFxhcHBcXGNvbW1vblxcZG90LXByb2dyZXNzLWJhclxcZG90LXByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2FwcC9jb21tb24vZG90LXByb2dyZXNzLWJhci9kb3QtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7VUFBQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQ0dKOztBRERBOztFQUFBOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0FDTUo7O0FESkE7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDT0o7O0FETEE7RUFDSSx5QkFBQTtBQ1FKOztBRE5BO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBQ1NKOztBRFBBO0VBQ0kseUJBQUE7QUNVSjs7QURSQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNXSjs7QURUQTtFQUNJLHlCQUFBO0FDWUo7O0FEVEE7RUFDRSxrQkFBQTtBQ1lGIiwiZmlsZSI6Ii4uLy4uL2FwcC9jb21tb24vZG90LXByb2dyZXNzLWJhci9kb3QtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87IFxufVxuXG4ucHJvZ3Jlc3NiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbn1cbi5wcm9ncmVzc2JhciBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNjNGM0YzQ7XG59XG4ucHJvZ3Jlc3NiYXIgbGk6YmVmb3JlIHtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNGM0YzQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvIDVweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAxO1xufVxuLyoucHJvZ3Jlc3NiYXIgbGkuY3VycmVudDo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59Ki9cbi5wcm9ncmVzc2JhciBsaTphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZDdkN2Q7XG4gICAgdG9wOiAwLjZyZW07XG4gICAgbGVmdDogLTUwJTtcbn1cbi5wcm9ncmVzc2JhciBsaTpmaXJzdC1jaGlsZDphZnRlciB7XG4gICAgY29udGVudDogbm9uZTtcbn1cbi5wcm9ncmVzc2JhciBsaS5hY3RpdmUge1xuICAgIGNvbG9yOiBncmVlbjtcbn1cbi5wcm9ncmVzc2JhciBsaS5hY3RpdmU6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6ICM1NWI3NzY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1Yjc3Njtcbn1cbi5wcm9ncmVzc2JhciBsaS5hY3RpdmUgKyBsaTphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1Yjc3Njtcbn1cbi5wcm9ncmVzc2JhciBsaS5kb25lOmJlZm9yZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjNTViNzc2O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWI3NzY7XG59XG4ucHJvZ3Jlc3NiYXIgbGkuZG9uZSArIGxpOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTViNzc2O1xufVxuLnByb2dyZXNzYmFyIGxpLmluYWN0aXZlOmJlZm9yZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYzRjNGM0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7XG59XG4ucHJvZ3Jlc3NiYXIgbGkuaW5hY3RpdmUgKyBsaTphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0YzRjNDtcbn1cblxuLnByb2dyZXNzYmFyIGxpLmRvbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8vIC5wcm9ncmVzc2JhciBsaS5kb25lOmFmdGVyIHtcbi8vICAgY29udGVudDogXCIgXCI7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICB3aWR0aDogMC4zZW07XG4vLyAgIGhlaWdodDogMC42ZW07XG4vLyAgIGJvcmRlcjogc29saWQgd2hpdGU7XG4vLyAgIGJvcmRlci13aWR0aDogMCAwLjJlbSAwLjJlbSAwO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGxlZnQ6IDQuMmVtO1xuLy8gICB0b3A6IDI2JTtcbi8vICAgbWFyZ2luLXRvcDogLTAuMmVtO1xuLy8gICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbi8vICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4vLyAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbi8vICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuLy8gICB6LWluZGV4Ojk7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICM1NWI3NzY7XG4vLyB9IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLnByb2dyZXNzYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbn1cblxuLnByb2dyZXNzYmFyIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNjNGM0YzQ7XG59XG5cbi5wcm9ncmVzc2JhciBsaTpiZWZvcmUge1xuICB3aWR0aDogMS41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMS41cmVtO1xuICBjb250ZW50OiBcIlwiO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2M0YzRjNDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG8gNXB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qLnByb2dyZXNzYmFyIGxpLmN1cnJlbnQ6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufSovXG4ucHJvZ3Jlc3NiYXIgbGk6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkN2Q3ZDtcbiAgdG9wOiAwLjZyZW07XG4gIGxlZnQ6IC01MCU7XG59XG5cbi5wcm9ncmVzc2JhciBsaTpmaXJzdC1jaGlsZDphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbi5wcm9ncmVzc2JhciBsaS5hY3RpdmUge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5wcm9ncmVzc2JhciBsaS5hY3RpdmU6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNTViNzc2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTViNzc2O1xufVxuXG4ucHJvZ3Jlc3NiYXIgbGkuYWN0aXZlICsgbGk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTViNzc2O1xufVxuXG4ucHJvZ3Jlc3NiYXIgbGkuZG9uZTpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICM1NWI3NzY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWI3NzY7XG59XG5cbi5wcm9ncmVzc2JhciBsaS5kb25lICsgbGk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTViNzc2O1xufVxuXG4ucHJvZ3Jlc3NiYXIgbGkuaW5hY3RpdmU6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiAjYzRjNGM0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xufVxuXG4ucHJvZ3Jlc3NiYXIgbGkuaW5hY3RpdmUgKyBsaTphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7XG59XG5cbi5wcm9ncmVzc2JhciBsaS5kb25lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DotProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dot-progress-bar',
          templateUrl: './dot-progress-bar.component.html',
          styleUrls: ['./dot-progress-bar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        weekLists: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/common/event-section/event-section.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/common/event-section/event-section.component.ts ***!
    \*****************************************************************/

  /*! exports provided: EventSectionComponent */

  /***/
  function srcAppCommonEventSectionEventSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventSectionComponent", function () {
      return EventSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EventSectionComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Acknowlege");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var announcement_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r3.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r3.month);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", announcement_r3.msg, " :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r3.des);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r3.des);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Announcement from : ", announcement_r3.msg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Announcement Date : ", announcement_r3.date, " ", announcement_r3.month, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description : ", announcement_r3.des, " Change the size of the modal by adding the .modal-sm class for small modals or .modal-lg class for large modals.");
      }
    }

    function EventSectionComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventSectionComponent_div_15_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.goToLec();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var upcoming_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](upcoming_r4.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](upcoming_r4.month);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", upcoming_r4.msg, " :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](upcoming_r4.des);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](upcoming_r4.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("End Time: ", upcoming_r4.endtime, "");
      }
    }

    function EventSectionComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventSectionComponent_div_24_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.goToLec();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var overdue_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r7.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r7.month);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", overdue_r7.msg, " :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r7.des);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r7.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("End Time: ", overdue_r7.endtime, "");
      }
    }

    var EventSectionComponent = /*#__PURE__*/function () {
      function EventSectionComponent(router) {
        _classCallCheck(this, EventSectionComponent);

        this.router = router;
        this.announcements = [{
          date: '8',
          month: 'Jan',
          msg: 'School ',
          des: ' Annual Function'
        }, {
          date: '26',
          month: 'Jan',
          msg: 'School ',
          des: ' Republic Day'
        }, {
          date: '2',
          month: 'Feb',
          msg: 'School ',
          des: ' 25 Anniversary of school this was testing'
        }, {
          date: '8',
          month: 'Jan',
          msg: 'School ',
          des: ' Annual Function'
        }];
        this.upcomings = [{
          date: '9',
          month: 'Jan',
          msg: 'Math ',
          type: 'Assignment',
          endtime: '7:00 pm',
          des: ' Quadratic Equation'
        }, {
          date: '10',
          month: 'Jan',
          msg: 'Marathi ',
          type: 'Assignment',
          endtime: '7:00 pm',
          des: ' Assignment 2'
        }, {
          date: '12',
          month: 'Jan',
          msg: 'Hindi ',
          type: 'Test',
          endtime: '7:00 pm',
          des: ' Chapter 3'
        }, {
          date: '18',
          month: 'Jan',
          msg: 'Math ',
          type: 'Assignment',
          endtime: '10:00 pm',
          des: ' Quadratic Equation'
        }];
        this.overdues = [{
          date: '7',
          month: 'Jan',
          msg: 'Math ',
          type: 'Assignment',
          endtime: '7:00 pm',
          des: ' Quadratic Equation'
        }, {
          date: '6',
          month: 'Jan',
          msg: 'Science ',
          type: 'Assignment',
          endtime: '7:00 pm',
          des: ' Assignment 1'
        }, {
          date: '6',
          month: 'Jan',
          msg: 'Marathi ',
          type: 'Assignment',
          endtime: '7:00 pm',
          des: ' Assignment 1'
        }, {
          date: '5',
          month: 'Jan',
          msg: 'Math ',
          type: 'Assignment',
          endtime: '7:00 pm',
          des: ' Quadratic Equation '
        }];
      }

      _createClass(EventSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToLec",
        value: function goToLec() {
          this.router.navigate(["/student/lecture"]);
        }
      }]);

      return EventSectionComponent;
    }();

    EventSectionComponent.ɵfac = function EventSectionComponent_Factory(t) {
      return new (t || EventSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    EventSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EventSectionComponent,
      selectors: [["app-event-section"]],
      decls: 25,
      vars: 3,
      consts: [[1, "pt-3"], [1, "p-2", 2, "background", "white", "width", "100%", "border-radius", "5px", "max-height", "195px", "overflow-y", "auto"], [1, "d-flex", "flex-column", 2, "margin", "0px 5px"], [4, "ngFor", "ngForOf"], ["type", "button", "data-toggle", "modal", "data-target", "#myModal", 1, "btn", "btn-block", "d-flex", "m-2", "card", "flex-row", "card-desing"], [1, "d-flex", "flex-column", "annoucement-date-box"], [2, "font-size", "14px", "font-weight", "320"], [2, "margin-top", "-5px", "font-size", "11px"], [1, "announcment-card-body", "d-flex", "flex-row"], [1, "overflow", "ellipsis"], [2, "font-weight", "bold", "font-size", "17px"], [2, "padding-top", "3px"], ["id", "myModal", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-sm", 2, "border-radius", "10px", "margin-top", "100px"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default"], ["type", "button", 1, "btn", "btn-block", "d-flex", "m-2", "card", "flex-row", "card-desing", 3, "click"], [1, "announcment-card-body"], [1, "d-flex", "justify-content-between", 2, "font-size", "9px"], [2, "color", "#c4c4c4"], [1, "mr-3", 2, "color", "#c4c4c4"]],
      template: function EventSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Announcement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EventSectionComponent_div_6_Template, 32, 9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Upcomings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EventSectionComponent_div_15_Template, 20, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Overdue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EventSectionComponent_div_24_Template, 20, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.announcements);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.upcomings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.overdues);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\nh1[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #000;\n  line-height: 0.1em;\n  margin: 10px 0 20px;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ebecf0;\n  padding: 0 15px 0 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  margin-top: 0.4rem;\n}\n.card-fixed[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 45px;\n  max-height: 45px;\n  width: 100%;\n  max-width: 100px;\n  min-width: 100px;\n  margin-right: 2rem;\n}\n.card-desing[_ngcontent-%COMP%] {\n  background: #354658;\n  height: 50px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px -2px 5px rgba(0, 0, 0, 0.2);\n}\n.announcment-card-body[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  text-align: left;\n  padding-left: 10px;\n  width: 100%;\n  font-size: 14px;\n  color: white;\n}\n.annoucement-date-box[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  background-color: #28BAA2;\n  font-size: 10px;\n  margin: auto;\n  text-align: center;\n  padding-left: 15px;\n  padding-right: 15px;\n  border-radius: 5px;\n  color: white;\n}\n.p-2[_ngcontent-%COMP%] {\n  margin-top: 38px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px -2px 5px rgba(0, 0, 0, 0.2);\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #354658;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #8d8d8d;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #1B2D3F;\n  color: #ffffff;\n  border-radius: 10px 10px 0px 0px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border: none;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #354658;\n  color: #ffffff;\n}\n.ellipsis[_ngcontent-%COMP%] {\n  width: 250px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21tb24vZXZlbnQtc2VjdGlvbi9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXHNhc3NcXGJhc2VcXF9taXhpbi5zY3NzIiwiLi4vLi4vYXBwL2NvbW1vbi9ldmVudC1zZWN0aW9uL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX2NvbG9ycy5zY3NzIiwiLi4vLi4vYXBwL2NvbW1vbi9ldmVudC1zZWN0aW9uL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL2NvbW1vbi9ldmVudC1zZWN0aW9uL2V2ZW50LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi9hcHAvY29tbW9uL2V2ZW50LXNlY3Rpb24vQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFwuLlxcYXBwXFxjb21tb25cXGV2ZW50LXNlY3Rpb25cXGV2ZW50LXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7Ozs7Ozs7O0NBQUE7QUFXQTs7Ozs7Ozs7OztDQUFBO0FDWEk7RUFDSSxjQ0ZTO0FDb0JqQjtBRmhCSTtFQUNJLGNDRFU7QUNtQmxCO0FGaEJJO0VBQ0ksY0NMSztBQ3VCYjtBRmhCSTtFQUNJLGNDTFc7QUN1Qm5CO0FGWkk7RUFDSSx5QkNsQlM7QUNpQ2pCO0FGYkk7RUFDSSx5QkNwQlM7QUNtQ2pCO0FGYkk7RUFDSSx5QkNwQlU7QUNtQ2xCO0FGYkk7RUFDSSx5QkN4Qks7QUN1Q2I7QUZiSTtFQUNJLHlCQ3hCVztBQ3VDbkI7QUMxQ0E7RUFDSSxXQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FENENKO0FDekNBO0VBRUksbUJBQUE7RUFDQSxtQkFBQTtBRDJDSjtBQ3hDQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUQyQ0o7QUN4Q0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUQyQ0o7QUN4Q0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw4SUFBQTtBRDJDSjtBQ3hDQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEMkNKO0FDekNBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FENENKO0FDMUNBO0VBQ0ksZ0JBQUE7RUFDQSw4SUFBQTtBRDZDSjtBQzNDQTtFQUNJLFVBQUE7QUQ4Q0o7QUMzQ0UsVUFBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBRDhDSjtBQzNDRSxXQUFBO0FBQ0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FEOENKO0FDM0NFLG9CQUFBO0FBQ0E7RUFDRSxtQkFBQTtBRDhDSjtBQzVDRTtFQUNFLG1CQUFBO0FEK0NKO0FDN0NFO0VBQ0ksa0JBQUE7RUFBb0IseUJBQUE7RUFBMkIsY0FBQTtFQUFnQixnQ0FBQTtBRG1EckU7QUNqREU7RUFDRSxZQUFBO0FEb0RKO0FDbERFO0VBQ0UsWUFBQTtBRHFESjtBQ25ERTtFQUNFLGtCQUFBO0VBQW9CLHlCQUFBO0VBQTJCLGNBQUE7QUR3RG5EO0FDckRJO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRHdETiIsImZpbGUiOiIuLi8uLi9hcHAvY29tbW9uL2V2ZW50LXNlY3Rpb24vZXZlbnQtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gTUVESUEgUVVFUlkgTUFOQUdFUlxuXG4vKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuXG5cbi8qXG4kYnJlYWtwb2ludCBhcmd1ZW1lbnQgY2hvaWNlczpcbi0geHMtcGhvbmVcbi0gcGhvbmVcbi0gdGFiLXBvcnRcbi0gdGFiLWxhbmRcbi0gZGVza3RvcFxuLSBmdWxsLWhkXG5cbjFlbSA9IDE2cHhcbiovXG5cbkBtaXhpbiByZXNwb25kTWF4KCRicmVha3BvaW50KSB7XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4cy1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDIyLjVlbSkgeyBAY29udGVudCB9OyAvLzM2MHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IHNtLXBob25lIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogMzZlbSkgeyBAY29udGVudCB9OyAvLzU3NnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IG1kLXRhYiB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHsgQGNvbnRlbnQgfTsgLy83NjhweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBsZy1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNjJlbSkgeyBAY29udGVudCB9OyAvLzk5MnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50ID09IHhsLWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NWVtKSB7IEBjb250ZW50IH07IC8vMTIwMHB4XG4gIH1cbiAgQGlmICRicmVha3BvaW50ID09IGhkLWRlc2t0b3Age1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MGVtKSB7IEBjb250ZW50IH07IC8vMTQ0MHB4XG4gIH1cblx0QGlmICRicmVha3BvaW50ID09IGZ1bGwtaGQge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAxMjBlbSkgeyBAY29udGVudCB9OyAvLzE5MjBweFxuXHR9XG59XG5cbkBtaXhpbiByZXNwb25kTWluKCRicmVha3BvaW50bWluKSB7XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4cy1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDIyLjVlbSkgeyBAY29udGVudCB9OyAvLzM2MHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IHNtLXBob25lIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMzZlbSkgeyBAY29udGVudCB9OyAvLzU3NnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IG1kLXRhYiB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHsgQGNvbnRlbnQgfTsgLy83NjhweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBsZy1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNjJlbSkgeyBAY29udGVudCB9OyAvLzk5MnB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IHhsLWRlc2t0b3Age1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7IEBjb250ZW50IH07IC8vMTIwMHB4XG5cdH1cblx0QGlmICRicmVha3BvaW50bWluID09IGZ1bGwtaGQge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAxMjBlbSkgeyBAY29udGVudCB9OyAvLzE5MjBweFxuXHR9XG59XG5cblxuXG5cbiRyZW0tYmFzZWxpbmU6IDE2cHggIWRlZmF1bHQ7XG4kcmVtLWZhbGxiYWNrOiBmYWxzZSAhZGVmYXVsdDtcbiRyZW0tcHgtb25seTogZmFsc2UgIWRlZmF1bHQ7XG5cbkBmdW5jdGlvbiByZW0tc2VwYXJhdG9yKCRsaXN0LCAkc2VwYXJhdG9yOiBmYWxzZSkge1xuICBAaWYgJHNlcGFyYXRvciA9PSBcImNvbW1hXCIgb3IgJHNlcGFyYXRvciA9PSBcInNwYWNlXCIge1xuICAgIEByZXR1cm4gYXBwZW5kKCRsaXN0LCBudWxsLCAkc2VwYXJhdG9yKTtcbiAgfSBcbiAgXG4gIEBpZiBmdW5jdGlvbi1leGlzdHMoXCJsaXN0LXNlcGFyYXRvclwiKSA9PSB0cnVlIHtcbiAgICBAcmV0dXJuIGxpc3Qtc2VwYXJhdG9yKCRsaXN0KTtcbiAgfVxuXG4gIC8vIGxpc3Qtc2VwYXJhdG9yIHBvbHlmaWxsIGJ5IEh1Z28gR2lyYXVkZWwgKGh0dHBzOi8vc2Fzcy1jb21wYXRpYmlsaXR5LmdpdGh1Yi5pby8jbGlzdF9zZXBhcmF0b3JfZnVuY3Rpb24pXG4gICR0ZXN0LWxpc3Q6ICgpO1xuICBAZWFjaCAkaXRlbSBpbiAkbGlzdCB7XG4gICAgJHRlc3QtbGlzdDogYXBwZW5kKCR0ZXN0LWxpc3QsICRpdGVtLCBzcGFjZSk7XG4gIH1cblxuICBAcmV0dXJuIGlmKCR0ZXN0LWxpc3QgPT0gJGxpc3QsIHNwYWNlLCBjb21tYSk7XG59XG5cbkBtaXhpbiByZW0tYmFzZWxpbmUoJHpvb206IDEwMCUpIHtcbiAgZm9udC1zaXplOiAkem9vbSAvIDE2cHggKiAkcmVtLWJhc2VsaW5lO1xufVxuXG5AZnVuY3Rpb24gcmVtLWNvbnZlcnQoJHRvLCAkdmFsdWVzLi4uKSB7XG4gICRyZXN1bHQ6ICgpO1xuICAkc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZXMpO1xuICBcbiAgQGVhY2ggJHZhbHVlIGluICR2YWx1ZXMge1xuICAgIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicmVtXCIgYW5kICR0byA9PSBcInB4XCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvIDFyZW0gKiAkcmVtLWJhc2VsaW5lLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcIm51bWJlclwiIGFuZCB1bml0KCR2YWx1ZSkgPT0gXCJweFwiIGFuZCAkdG8gPT0gXCJyZW1cIiB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlIC8gJHJlbS1iYXNlbGluZSAqIDFyZW0sICRzZXBhcmF0b3IpO1xuICAgIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpID09IFwibGlzdFwiIHtcbiAgICAgICR2YWx1ZS1zZXBhcmF0b3I6IHJlbS1zZXBhcmF0b3IoJHZhbHVlKTtcbiAgICAgICR2YWx1ZTogcmVtLWNvbnZlcnQoJHRvLCAkdmFsdWUuLi4pO1xuICAgICAgJHZhbHVlOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSwgJHZhbHVlLXNlcGFyYXRvcik7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUsICRzZXBhcmF0b3IpO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gaWYobGVuZ3RoKCRyZXN1bHQpID09IDEsIG50aCgkcmVzdWx0LCAxKSwgJHJlc3VsdCk7XG59XG5cbkBmdW5jdGlvbiByZW0oJHZhbHVlcy4uLikge1xuICBAaWYgJHJlbS1weC1vbmx5IHtcbiAgICBAcmV0dXJuIHJlbS1jb252ZXJ0KHB4LCAkdmFsdWVzLi4uKTtcbiAgfSBAZWxzZSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChyZW0sICR2YWx1ZXMuLi4pO1xuICB9XG59XG5cbkBtaXhpbiByZW0oJHByb3BlcnRpZXMsICR2YWx1ZXMuLi4pIHtcbiAgQGlmIHR5cGUtb2YoJHByb3BlcnRpZXMpID09IFwibWFwXCIge1xuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiBtYXAta2V5cygkcHJvcGVydGllcykge1xuICAgICAgQGluY2x1ZGUgcmVtKCRwcm9wZXJ0eSwgbWFwLWdldCgkcHJvcGVydGllcywgJHByb3BlcnR5KSk7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xuICAgICAgQGlmICRyZW0tZmFsbGJhY2sgb3IgJHJlbS1weC1vbmx5IHtcbiAgICAgICAgI3skcHJvcGVydHl9OiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgICBAaWYgbm90ICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5AbWl4aW4gY29udGVudC1jZW50ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDUwJTtcblx0dG9wOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xufSIsIkBpbXBvcnQgXCIuLi9iYXNlL3ZhcmlhYmxlc1wiO1xuXG4udGV4dCB7XG4gICAgJi1wcmltYXJ5MSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTE7XG4gICAgfVxuICAgICYtZ3JleS1kYXJrIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleTtcbiAgICB9XG4gICAgJi1ncmV5LWxpZ2h0IHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0O1xuICAgIH1cbiAgIFxufVxuXG4uYmcge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTE7XG4gICAgfVxuICAgICYtcHJpbWFyeTIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTI7XG4gICAgfVxuICAgICYtZ3JleS1kYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXktZGFyaztcbiAgICB9XG4gICAgJi1ncmV5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWxpZ2h0O1xuICAgIH1cbn0iLCIvLyBDb2xvcnNcblxuJGNvbG9yLXByaW1hcnkxOiByZ2JhKDI3LDQ1LDYzLDEpO1xuJGNvbG9yLXByaW1hcnkyOiByZ2JhKDUzLDcwLDg4LDEpO1xuXG4kY29sb3ItZ3JleTogcmdiYSgxMDMsIDEwMywgMTAzLCAxKTtcbiRjb2xvci1ncmV5LWRhcms6IHJnYmEoNTIsIDU4LCA2NCwgMSk7XG5cbiRjb2xvci1ncmV5LWxpZ2h0OiAjRUJFQ0YwO1xuXG4kY29sb3Itc3VjY2VzczogcmdiYSg4MiwgMjA5LCAxNDUsIDEpO1xuJGNvbG9yLWVycm9yOiByZ2JhKDIzNCwgODUsIDg1LCAxKTtcblxuLy8gRm9udHNcblxuJHRoaW46IDEwMDtcbiRleHRyYS1saWdodDogMjAwO1xuJGxpZ2h0OiAzMDA7XG4kcmVndWxhci00MDA6IDQwMDtcbiRtZWRpdW06IDUwMDtcbiRzZW1pLWJvbGQ6IDYwMDtcbiRib2xkOiA3MDA7XG4kZXh0cmEtYm9sZDogODAwO1xuJGJsYWNrLTkwMDogOTAwOyIsIi8qXG4wcHggLSAzNjBweDpcdFx0WFMgUGhvbmVcbjM2MHB4IC0gNTc2cHg6IFx0XHRQaG9uZVxuNTc2cHggLSA3NjhweDogXHRcdFRhYmxldCBQb3J0cmFpdFxuNzY4cHggLSA5OTJweDpcdFx0VGFibGV0IExhbmRzY2FwZVxuOTkycHggLSAxMjAwcHg6IFx0ZGVza3RvcFxuMTIwMHB4IC0gMTkyMHB4Olx0bm9ybWFsIE1lZGlhIHF1ZXJpZXNcbjE5MjBweCBhbmQgdXA6ICBcdEZ1bGwgSERcbiovXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuLnRleHQtcHJpbWFyeTEge1xuICBjb2xvcjogIzFiMmQzZjtcbn1cbi50ZXh0LWdyZXktZGFyayB7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuLnRleHQtZ3JleSB7XG4gIGNvbG9yOiAjNjc2NzY3O1xufVxuLnRleHQtZ3JleS1saWdodCB7XG4gIGNvbG9yOiAjRUJFQ0YwO1xufVxuXG4uYmctcHJpbWFyeTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyZDNmO1xufVxuLmJnLXByaW1hcnkyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDY1ODtcbn1cbi5iZy1ncmV5LWRhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xufVxuLmJnLWdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc2NzY3O1xufVxuLmJnLWdyZXktbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQ0YwO1xufVxuXG5oMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDAuMWVtO1xuICBtYXJnaW46IDEwcHggMCAyMHB4O1xufVxuXG5oMSBzcGFuIHtcbiAgYmFja2dyb3VuZDogI2ViZWNmMDtcbiAgcGFkZGluZzogMCAxNXB4IDAgMDtcbn1cblxuaDUge1xuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcbn1cblxuLmNhcmQtZml4ZWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gIG1heC1oZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi5jYXJkLWRlc2luZyB7XG4gIGJhY2tncm91bmQ6ICMzNTQ2NTg7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IC0ycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmFubm91bmNtZW50LWNhcmQtYm9keSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYW5ub3VjZW1lbnQtZGF0ZS1ib3gge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhCQUEyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucC0yIHtcbiAgbWFyZ2luLXRvcDogMzhweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IC0ycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA4cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjMzU0NjU4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjOGQ4ZDhkO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQjJEM0Y7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubW9kYWwtZm9vdGVyIC5idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NTg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZWxsaXBzaXMge1xuICB3aWR0aDogMjUwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL21peGluXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvYmFzZS9jb2xvcnNcIjtcblxuXG5cbmgxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjFlbTtcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4O1xufVxuXG5oMSBzcGFuIHtcbiAgICAvLyB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogI2ViZWNmMDtcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAwO1xufVxuXG5oNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcbn1cblxuLmNhcmQtZml4ZWQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0NXB4O1xuICAgIG1heC1oZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuLmNhcmQtZGVzaW5nIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzU0NjU4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwcHggLTJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYW5ub3VuY21lbnQtY2FyZC1ib2R5IHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5hbm5vdWNlbWVudC1kYXRlLWJveCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhCQUEyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ucC0ye1xuICAgIG1hcmdpbi10b3A6IDM4cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMHB4IC0ycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA4cHg7XG4gIH1cbiAgXG4gIC8qIFRyYWNrICovXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTsgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAgXG4gIC8qIEhhbmRsZSAqL1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzU0NjU4OyBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzhkOGQ4ZDsgXG4gIH1cbiAgLm1vZGFsLWNvbnRlbnR7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgfVxuICAubW9kYWwtaGVhZGVye1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIyRDNGOyBjb2xvcjogI2ZmZmZmZjsgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG4gICAgfVxuICAubW9kYWwtdGl0bGV7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5tb2RhbC1mb290ZXJ7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC5tb2RhbC1mb290ZXIgLmJ0bntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NTg7IGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIFxuICAgIC5lbGxpcHNpc3tcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-event-section',
          templateUrl: './event-section.component.html',
          styleUrls: ['./event-section.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/home/home.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/common/home/home.component.ts ***!
    \***********************************************/

  /*! exports provided: HomeCommonComponent */

  /***/
  function srcAppCommonHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeCommonComponent", function () {
      return HomeCommonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/mobileView/mobile-view.service */
    "./src/app/services/mobileView/mobile-view.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _event_section_event_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../event-section/event-section.component */
    "./src/app/common/event-section/event-section.component.ts");

    function HomeCommonComponent_div_0_div_7_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subject_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r4["class"]);
      }
    }

    function HomeCommonComponent_div_0_div_7_button_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeCommonComponent_div_0_div_7_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeCommonComponent_div_0_div_7_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r10.goToCourse();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Go to Course");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeCommonComponent_div_0_div_7_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeCommonComponent_div_0_div_7_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r12.goToCourse();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Go to Course");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeCommonComponent_div_0_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeCommonComponent_div_0_div_7_span_3_Template, 2, 1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeCommonComponent_div_0_div_7_button_6_Template, 2, 0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeCommonComponent_div_0_div_7_button_7_Template, 3, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeCommonComponent_div_0_div_7_button_8_Template, 3, 0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subject_r4 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.type == "teacher");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r4.subjectName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.type == "teacher");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isMobileView);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isMobileView);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Teacher name: ", subject_r4.teacherName, " ");
      }
    }

    function HomeCommonComponent_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event-section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeCommonComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Courses");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeCommonComponent_div_0_div_7_Template, 13, 6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeCommonComponent_div_0_div_8_Template, 2, 0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.subjectData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isMobileView);
      }
    }

    function HomeCommonComponent_div_1_div_7_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subject_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r16["class"]);
      }
    }

    function HomeCommonComponent_div_1_div_7_button_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeCommonComponent_div_1_div_7_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeCommonComponent_div_1_div_7_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r22.goToCourse();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Go to Course");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeCommonComponent_div_1_div_7_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeCommonComponent_div_1_div_7_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r24.goToCourse();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Go to Course");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeCommonComponent_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeCommonComponent_div_1_div_7_span_3_Template, 2, 1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeCommonComponent_div_1_div_7_button_6_Template, 2, 0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeCommonComponent_div_1_div_7_button_7_Template, 3, 0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeCommonComponent_div_1_div_7_button_8_Template, 3, 0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subject_r16 = ctx.$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.type == "teacher");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subject_r16.subjectName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.type == "teacher");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.isMobileView);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isMobileView);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Teacher name: ", subject_r16.teacherName, " ");
      }
    }

    function HomeCommonComponent_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-event-section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeCommonComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Courses");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeCommonComponent_div_1_div_7_Template, 13, 6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeCommonComponent_div_1_div_8_Template, 2, 0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.subjectData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isMobileView);
      }
    }

    var HomeCommonComponent = /*#__PURE__*/function () {
      function HomeCommonComponent(router, responsiveService, zone) {
        _classCallCheck(this, HomeCommonComponent);

        this.router = router;
        this.responsiveService = responsiveService;
        this.zone = zone;
        this.type = 'student';
        this.subjectData = [{
          subjectName: 'Computer',
          "class": '10th B',
          teacherName: 'M Patil'
        }, {
          subjectName: 'English',
          "class": '10th B',
          teacherName: 'Mr Kale'
        }, {
          subjectName: 'Marathi',
          "class": '10th B',
          teacherName: 'Mr Pravin',
          studenLength: '50',
          subjectCode: 'ASWS32'
        }, {
          subjectName: 'Science',
          "class": '10th B',
          teacherName: 'Mr arsh'
        }, {
          subjectName: 'History',
          "class": '10th B',
          teacherName: 'Mr Animesh'
        }, {
          subjectName: 'Geography',
          "class": '10th B',
          teacherName: 'Mr prashant'
        }, {
          subjectName: 'Hindi',
          "class": '10th B',
          teacherName: 'Mrs Patil'
        }];
      }

      _createClass(HomeCommonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onResize();
          this.responsiveService.checkWidth();
        }
      }, {
        key: "onResize",
        value: function onResize() {
          var _this = this;

          this.responsiveService.getMobileStatus().subscribe(function (isMobile) {
            _this.zone.run(function () {
              _this.isMobileView = isMobile;
            });
          });
        }
      }, {
        key: "goToCourse",
        value: function goToCourse() {
          this.router.navigate(["/".concat(this.type, "/course")]);
        }
      }]);

      return HomeCommonComponent;
    }();

    HomeCommonComponent.ɵfac = function HomeCommonComponent_Factory(t) {
      return new (t || HomeCommonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    HomeCommonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeCommonComponent,
      selectors: [["app-common-home"]],
      inputs: {
        type: "type"
      },
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "d-flex", "flex-wrap", "pt-3", 2, "padding-bottom", "50 px"], [1, "col-lg-18", "col-md-8", "col-sm-12", "pt-3"], [1, "row", "m-0"], ["class", "mt-4", "style", "background: white; width: 100%; border-radius: 5px;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);", 4, "ngFor", "ngForOf"], ["class", "col-lg-4 col-md-4 col-sm-12", "style", "border-left: 2px solid black; padding-bottom: 50px;", 4, "ngIf"], [1, "mt-4", 2, "background", "white", "width", "100%", "border-radius", "5px", "box-shadow", "0px 4px 4px rgba(0, 0, 0, 0.25)"], [1, "d-flex", "justify-content-between", "p-2"], ["style", "font-size: 2rem;", "class", "mr-3", 4, "ngIf"], [2, "font-size", "2rem", "font-weight", "bold"], ["style", "border-radius: 5px;font-size: 12px;", "class", "ml-3", 4, "ngIf"], ["class", "btn", "style", "border-radius: 5px;background: #354658;color: white; width: 150px; height: 40px; font-size: 15px;", 3, "click", 4, "ngIf"], ["class", "btn", "style", "border-radius: 5px;background: #354658;color: white; width: 100px; height: 25px; font-size: 12px;", 3, "click", 4, "ngIf"], [2, "margin", "0px 5px", "border-top", "1px solid lightgray", "padding-left", "1px"], [2, "font-size", "1.3rem", "color", "#757575"], [1, "mr-3", 2, "font-size", "2rem"], [1, "ml-3", 2, "border-radius", "5px", "font-size", "12px"], [1, "btn", 2, "border-radius", "5px", "background", "#354658", "color", "white", "width", "150px", "height", "40px", "font-size", "15px", 3, "click"], [1, "btn", 2, "border-radius", "5px", "background", "#354658", "color", "white", "width", "100px", "height", "25px", "font-size", "12px", 3, "click"], [1, "col-lg-4", "col-md-4", "col-sm-12", 2, "border-left", "2px solid black", "padding-bottom", "50px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pt-3"], ["style", "border-radius: 5px;background: #354658;color: white; width: 150px; height: 40px; font-size: 15px;", 3, "click", 4, "ngIf"], ["style", "border-radius: 5px;background: #354658;color: white; width: 100px; height: 25px; font-size: 12px;", 3, "click", 4, "ngIf"], [2, "border-radius", "5px", "background", "#354658", "color", "white", "width", "150px", "height", "40px", "font-size", "15px", 3, "click"], [2, "border-radius", "5px", "background", "#354658", "color", "white", "width", "100px", "height", "25px", "font-size", "12px", 3, "click"]],
      template: function HomeCommonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeCommonComponent_div_0_Template, 9, 2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeCommonComponent_div_1_Template, 9, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _event_section_event_section_component__WEBPACK_IMPORTED_MODULE_4__["EventSectionComponent"]],
      styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\nh1[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #000;\n  line-height: 0.1em;\n  margin: 10px 0 10px;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ebecf0;\n  padding: 0 15px 0 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  margin-top: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21tb24vaG9tZS9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXHNhc3NcXGJhc2VcXF9taXhpbi5zY3NzIiwiLi4vLi4vYXBwL2NvbW1vbi9ob21lL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX2NvbG9ycy5zY3NzIiwiLi4vLi4vYXBwL2NvbW1vbi9ob21lL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL2NvbW1vbi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi9hcHAvY29tbW9uL2hvbWUvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFwuLlxcYXBwXFxjb21tb25cXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7Ozs7Ozs7O0NBQUE7QUFXQTs7Ozs7Ozs7OztDQUFBO0FDWEk7RUFDSSxjQ0ZTO0FDb0JqQjtBRmhCSTtFQUNJLGNDRFU7QUNtQmxCO0FGaEJJO0VBQ0ksY0NMSztBQ3VCYjtBRmhCSTtFQUNJLGNDTFc7QUN1Qm5CO0FGWkk7RUFDSSx5QkNsQlM7QUNpQ2pCO0FGYkk7RUFDSSx5QkNwQlM7QUNtQ2pCO0FGYkk7RUFDSSx5QkNwQlU7QUNtQ2xCO0FGYkk7RUFDSSx5QkN4Qks7QUN1Q2I7QUZiSTtFQUNJLHlCQ3hCVztBQ3VDbkI7QUMzQ0E7RUFDSSxXQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FENkNKO0FDMUNBO0VBRUksbUJBQUE7RUFDQSxtQkFBQTtBRDRDSjtBQ3pDQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUQ0Q0oiLCJmaWxlIjoiLi4vLi4vYXBwL2NvbW1vbi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIE1FRElBIFFVRVJZIE1BTkFHRVJcblxuLypcbjBweCAtIDM2MHB4Olx0XHRYUyBQaG9uZVxuMzYwcHggLSA1NzZweDogXHRcdFBob25lXG41NzZweCAtIDc2OHB4OiBcdFx0VGFibGV0IFBvcnRyYWl0XG43NjhweCAtIDk5MnB4Olx0XHRUYWJsZXQgTGFuZHNjYXBlXG45OTJweCAtIDEyMDBweDogXHRkZXNrdG9wXG4xMjAwcHggLSAxOTIwcHg6XHRub3JtYWwgTWVkaWEgcXVlcmllc1xuMTkyMHB4IGFuZCB1cDogIFx0RnVsbCBIRFxuKi9cblxuXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuXG5AbWl4aW4gcmVzcG9uZE1heCgkYnJlYWtwb2ludCkge1xuXHRAaWYgJGJyZWFrcG9pbnQgPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuICB9XG4gIEBpZiAkYnJlYWtwb2ludCA9PSBoZC1kZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTBlbSkgeyBAY29udGVudCB9OyAvLzE0NDBweFxuICB9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5AbWl4aW4gcmVzcG9uZE1pbigkYnJlYWtwb2ludG1pbikge1xuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5cblxuXG4kcmVtLWJhc2VsaW5lOiAxNnB4ICFkZWZhdWx0O1xuJHJlbS1mYWxsYmFjazogZmFsc2UgIWRlZmF1bHQ7XG4kcmVtLXB4LW9ubHk6IGZhbHNlICFkZWZhdWx0O1xuXG5AZnVuY3Rpb24gcmVtLXNlcGFyYXRvcigkbGlzdCwgJHNlcGFyYXRvcjogZmFsc2UpIHtcbiAgQGlmICRzZXBhcmF0b3IgPT0gXCJjb21tYVwiIG9yICRzZXBhcmF0b3IgPT0gXCJzcGFjZVwiIHtcbiAgICBAcmV0dXJuIGFwcGVuZCgkbGlzdCwgbnVsbCwgJHNlcGFyYXRvcik7XG4gIH0gXG4gIFxuICBAaWYgZnVuY3Rpb24tZXhpc3RzKFwibGlzdC1zZXBhcmF0b3JcIikgPT0gdHJ1ZSB7XG4gICAgQHJldHVybiBsaXN0LXNlcGFyYXRvcigkbGlzdCk7XG4gIH1cblxuICAvLyBsaXN0LXNlcGFyYXRvciBwb2x5ZmlsbCBieSBIdWdvIEdpcmF1ZGVsIChodHRwczovL3Nhc3MtY29tcGF0aWJpbGl0eS5naXRodWIuaW8vI2xpc3Rfc2VwYXJhdG9yX2Z1bmN0aW9uKVxuICAkdGVzdC1saXN0OiAoKTtcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xuICAgICR0ZXN0LWxpc3Q6IGFwcGVuZCgkdGVzdC1saXN0LCAkaXRlbSwgc3BhY2UpO1xuICB9XG5cbiAgQHJldHVybiBpZigkdGVzdC1saXN0ID09ICRsaXN0LCBzcGFjZSwgY29tbWEpO1xufVxuXG5AbWl4aW4gcmVtLWJhc2VsaW5lKCR6b29tOiAxMDAlKSB7XG4gIGZvbnQtc2l6ZTogJHpvb20gLyAxNnB4ICogJHJlbS1iYXNlbGluZTtcbn1cblxuQGZ1bmN0aW9uIHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlcy4uLikge1xuICAkcmVzdWx0OiAoKTtcbiAgJHNlcGFyYXRvcjogcmVtLXNlcGFyYXRvcigkdmFsdWVzKTtcbiAgXG4gIEBlYWNoICR2YWx1ZSBpbiAkdmFsdWVzIHtcbiAgICBAaWYgdHlwZS1vZigkdmFsdWUpID09IFwibnVtYmVyXCIgYW5kIHVuaXQoJHZhbHVlKSA9PSBcInJlbVwiIGFuZCAkdG8gPT0gXCJweFwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAxcmVtICogJHJlbS1iYXNlbGluZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicHhcIiBhbmQgJHRvID09IFwicmVtXCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvICRyZW0tYmFzZWxpbmUgKiAxcmVtLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcImxpc3RcIiB7XG4gICAgICAkdmFsdWUtc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSk7XG4gICAgICAkdmFsdWU6IHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlLi4uKTtcbiAgICAgICR2YWx1ZTogcmVtLXNlcGFyYXRvcigkdmFsdWUsICR2YWx1ZS1zZXBhcmF0b3IpO1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKGxlbmd0aCgkcmVzdWx0KSA9PSAxLCBudGgoJHJlc3VsdCwgMSksICRyZXN1bHQpO1xufVxuXG5AZnVuY3Rpb24gcmVtKCR2YWx1ZXMuLi4pIHtcbiAgQGlmICRyZW0tcHgtb25seSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgfVxufVxuXG5AbWl4aW4gcmVtKCRwcm9wZXJ0aWVzLCAkdmFsdWVzLi4uKSB7XG4gIEBpZiB0eXBlLW9mKCRwcm9wZXJ0aWVzKSA9PSBcIm1hcFwiIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gbWFwLWtleXMoJHByb3BlcnRpZXMpIHtcbiAgICAgIEBpbmNsdWRlIHJlbSgkcHJvcGVydHksIG1hcC1nZXQoJHByb3BlcnRpZXMsICRwcm9wZXJ0eSkpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgIEBpZiAkcmVtLWZhbGxiYWNrIG9yICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocHgsICR2YWx1ZXMuLi4pO1xuICAgICAgfVxuICAgICAgQGlmIG5vdCAkcmVtLXB4LW9ubHkge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1peGluIGNvbnRlbnQtY2VudGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn0iLCJAaW1wb3J0IFwiLi4vYmFzZS92YXJpYWJsZXNcIjtcblxuLnRleHQge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrO1xuICAgIH1cbiAgICAmLWdyZXkge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG4gICBcbn1cblxuLmJnIHtcbiAgICAmLXByaW1hcnkxIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLXByaW1hcnkyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkyO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xuICAgIH1cbiAgICAmLWdyZXktbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG59IiwiLy8gQ29sb3JzXG5cbiRjb2xvci1wcmltYXJ5MTogcmdiYSgyNyw0NSw2MywxKTtcbiRjb2xvci1wcmltYXJ5MjogcmdiYSg1Myw3MCw4OCwxKTtcblxuJGNvbG9yLWdyZXk6IHJnYmEoMTAzLCAxMDMsIDEwMywgMSk7XG4kY29sb3ItZ3JleS1kYXJrOiByZ2JhKDUyLCA1OCwgNjQsIDEpO1xuXG4kY29sb3ItZ3JleS1saWdodDogI0VCRUNGMDtcblxuJGNvbG9yLXN1Y2Nlc3M6IHJnYmEoODIsIDIwOSwgMTQ1LCAxKTtcbiRjb2xvci1lcnJvcjogcmdiYSgyMzQsIDg1LCA4NSwgMSk7XG5cbi8vIEZvbnRzXG5cbiR0aGluOiAxMDA7XG4kZXh0cmEtbGlnaHQ6IDIwMDtcbiRsaWdodDogMzAwO1xuJHJlZ3VsYXItNDAwOiA0MDA7XG4kbWVkaXVtOiA1MDA7XG4kc2VtaS1ib2xkOiA2MDA7XG4kYm9sZDogNzAwO1xuJGV4dHJhLWJvbGQ6IDgwMDtcbiRibGFjay05MDA6IDkwMDsiLCIvKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuLypcbiRicmVha3BvaW50IGFyZ3VlbWVudCBjaG9pY2VzOlxuLSB4cy1waG9uZVxuLSBwaG9uZVxuLSB0YWItcG9ydFxuLSB0YWItbGFuZFxuLSBkZXNrdG9wXG4tIGZ1bGwtaGRcblxuMWVtID0gMTZweFxuKi9cbi50ZXh0LXByaW1hcnkxIHtcbiAgY29sb3I6ICMxYjJkM2Y7XG59XG4udGV4dC1ncmV5LWRhcmsge1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbi50ZXh0LWdyZXkge1xuICBjb2xvcjogIzY3Njc2Nztcbn1cbi50ZXh0LWdyZXktbGlnaHQge1xuICBjb2xvcjogI0VCRUNGMDtcbn1cblxuLmJnLXByaW1hcnkxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmQzZjtcbn1cbi5iZy1wcmltYXJ5MiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NTg7XG59XG4uYmctZ3JleS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3Njc2Nztcbn1cbi5iZy1ncmV5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUNGMDtcbn1cblxuaDEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjFlbTtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweDtcbn1cblxuaDEgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNlYmVjZjA7XG4gIHBhZGRpbmc6IDAgMTVweCAwIDA7XG59XG5cbmg1IHtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICBtYXJnaW4tdG9wOiAwLjRyZW07XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL2Jhc2UvbWl4aW5cIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL2NvbG9yc1wiO1xuXG5cbmgxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjFlbTtcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4O1xufVxuXG5oMSBzcGFuIHtcbiAgICAvLyB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogI2ViZWNmMDtcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAwO1xufVxuXG5oNSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNHJlbTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeCommonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-common-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_services_mobileView_mobile_view_service__WEBPACK_IMPORTED_MODULE_2__["MobileViewService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/common/message/message.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/common/message/message.component.ts ***!
    \*****************************************************/

  /*! exports provided: MessageComponent */

  /***/
  function srcAppCommonMessageMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageComponent", function () {
      return MessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MessageComponent_div_0_h1_133_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subject Teachers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MessageComponent_div_0_h1_134_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Student");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MessageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "T");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nirav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Hii ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hello");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "T");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Nirav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Hii ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Hello");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "T");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Nirav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Hii ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Hello");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "T");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Nirav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Hii ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Nirav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "How are you ? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "I am fine");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "form", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " + ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " + ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Principal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "example@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Department head");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "example@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, MessageComponent_div_0_h1_133_Template, 3, 0, "h1", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, MessageComponent_div_0_h1_134_Template, 3, 0, "h1", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "example@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "example@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "example@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mesgs " + (ctx_r0.isMobileView ? "mobile" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isMobileView ? "msg_mobile_history" : "msg_history");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type == "student");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type == "teacher");
      }
    }

    function MessageComponent_div_1_div_1_h1_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subject Teachers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MessageComponent_div_1_div_1_h1_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Student");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MessageComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Principal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageComponent_div_1_div_1_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.openMsg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "example@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Department head");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageComponent_div_1_div_1_Template_div_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.openMsg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "example@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MessageComponent_div_1_div_1_h1_32_Template, 3, 0, "h1", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MessageComponent_div_1_div_1_h1_33_Template, 3, 0, "h1", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageComponent_div_1_div_1_Template_div_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.openMsg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "example@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageComponent_div_1_div_1_Template_div_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.openMsg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "example@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageComponent_div_1_div_1_Template_div_click_59_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.openMsg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "example@gmail.com");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.type == "student");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.type == "teacher");
      }
    }

    function MessageComponent_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageComponent_div_1_div_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.back();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Back ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "T");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nirav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Hii ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hello");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "T");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Nirav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Hii ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Hello");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "T");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Nirav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Hii ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Hello");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "T");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Nirav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Hii ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Nirav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "How are you ? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "I am fine");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "form", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " + ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " + ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mesgs " + (ctx_r5.isMobileView ? "mobile" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.isMobileView ? "msg_mobile_history" : "msg_history");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.isMobileView ? "incoming_msg_img_mobile d-flex" : "incoming_msg_img d-flex");
      }
    }

    function MessageComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageComponent_div_1_div_1_Template, 70, 2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MessageComponent_div_1_div_2_Template, 92, 9, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.msgView);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.msgView);
      }
    }

    var MessageComponent = /*#__PURE__*/function () {
      function MessageComponent() {
        _classCallCheck(this, MessageComponent);

        this.type = '';
        this.isMobileView = false;
        this.msgView = false;
      }

      _createClass(MessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openMsg",
        value: function openMsg() {
          this.msgView = true;
        }
      }, {
        key: "back",
        value: function back() {
          this.msgView = false;
        }
      }]);

      return MessageComponent;
    }();

    MessageComponent.ɵfac = function MessageComponent_Factory(t) {
      return new (t || MessageComponent)();
    };

    MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessageComponent,
      selectors: [["app-common-message"]],
      inputs: {
        type: "type",
        isMobileView: "isMobileView"
      },
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "d-flex"], [1, "col-9", "p-0", "h-100", 2, "border-right", "1px solid #ffffff"], [1, "p-3", "d-flex", "justify-content-between", 2, "background", "white", "border-bottom", "1px solid lightgray"], ["width", "50", "src", "https://i.imgur.com/k2PZLZa.png", "alt", "User avatar"], [1, "ml-3"], [1, "btn"], [3, "ngClass"], [1, "incoming_msg", "d-flex", "flex-column"], [1, "badge", "badge-secondary", "teacherBadge"], ["src", "https://i.imgur.com/k2PZLZa.png", "alt", "User avatar"], [1, "received_msg"], [1, "name"], [1, "received_withd_msg"], [1, "d-flex", "justify-content-between", 2, "background", "none"], [1, "outgoing_msg"], [1, "sent_msg"], [1, "type_msg"], [1, "input_msg_write", "d-flex"], ["type", "button", 1, "btn", 2, "background", "#05728f none repeat scroll 0 0", "border", "medium none", "border-radius", "50%", "color", "#fff", "cursor", "pointer", "font-size", "17px", "/* height", "33px", "*/\n                                /* position", "absolute", "*/\n                                /* top", "11px", "*/\n                                width", "40px", "margin", "5px"], ["type", "button", 1, "btn", 2, "background", "#05728f none repeat scroll 0 0", "border", "medium none", "border-radius", "50%", "color", "#fff", "cursor", "pointer", "font-size", "17px", "/* height", "33px", "*/\n                                /* position", "absolute", "*/\n                                /* top", "11px", "*/\n                                width", "40px", "/* left", "40px !important", "*/\n                                margin", "5px"], ["type", "text", "placeholder", "Type a message", "name", "newMessage", 1, "write_msg"], ["type", "button", 1, "msg_send_btn", 2, "right", "40px !important"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane-o"], ["type", "button", 1, "msg_send_btn", "one"], [1, "col-3", "p-0"], [1, "p-4", "d-flex", "justify-content-between", 2, "background", "white", "border-bottom", "1px solid lightgray", "border-bottom-left-radius", "10px", "border-bottom-right-radius", "10px"], [1, "pt-5", 2, "padding", "5px"], [2, "background", "#95a2ad", "width", "100%", "border-radius", "5px"], [1, "d-flex", "justify-content-between", "pt-3", "pb-3", 2, "margin", "0px 5px"], ["width", "30", "src", "https://i.imgur.com/k2PZLZa.png", "alt", "User avatar"], [1, "ml-3", "fw-700", 2, "font-size", "14px"], [1, "mt-3", 2, "background", "#95a2ad", "width", "100%", "border-radius", "5px"], ["class", "p-3", 4, "ngIf"], [1, "p-3"], [1, "mt-3", 2, "background", "#ffffff", "width", "100%", "border-radius", "5px"], [1, "d-flex", "justify-content-between", "pt-3", "pb-3", 2, "margin", "0px 5px", 3, "click"], [1, "btn", "btn-primary", 3, "click"]],
      template: function MessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageComponent_div_0_Template, 171, 11, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageComponent_div_1_Template, 3, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\nh1[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid #000;\n  line-height: 0.1em;\n  margin: 10px 0 20px;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ebecf0;\n  padding: 0 15px 0 0;\n}\nh5[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  margin-top: 0.4rem;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.inbox_people[_ngcontent-%COMP%] {\n  background: #f8f8f8 none repeat scroll 0 0;\n  float: left;\n  overflow: hidden;\n  width: 40%;\n  border-right: 1px solid #c4c4c4;\n}\n.inbox_msg[_ngcontent-%COMP%] {\n  border: 1px solid #c4c4c4;\n  clear: both;\n  overflow: hidden;\n}\n.top_spac[_ngcontent-%COMP%] {\n  margin: 20px 0 0;\n}\n.channel_heading[_ngcontent-%COMP%] {\n  float: left;\n  width: 40%;\n}\n.srch_bar[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: right;\n  width: 60%;\n}\n.headind_srch[_ngcontent-%COMP%] {\n  padding: 10px 29px 10px 20px;\n  overflow: hidden;\n  border-bottom: 1px solid #c4c4c4;\n}\n.channel_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #05728f;\n  font-size: 21px;\n  margin: auto;\n}\n.srch_bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #cdcdcd;\n  border-width: 0 0 1px 0;\n  width: 80%;\n  padding: 2px 0 4px 6px;\n  background: none;\n}\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  padding: 0;\n  color: #707070;\n  font-size: 18px;\n}\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n  margin: 0 0 0 -27px;\n}\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #464646;\n  margin: 0 0 8px 0;\n}\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  float: right;\n}\n.chat_ib[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #989898;\n  margin: auto;\n}\n.chat_img[_ngcontent-%COMP%] {\n  float: left;\n  width: 11%;\n}\n.chat_ib[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 0 0 15px;\n  width: 88%;\n}\n.chat_people[_ngcontent-%COMP%] {\n  overflow: hidden;\n  clear: both;\n}\n.chat_list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 18px 16px 10px;\n}\n.inbox_chat[_ngcontent-%COMP%] {\n  height: 550px;\n  overflow-y: scroll;\n}\n.active_chat[_ngcontent-%COMP%] {\n  background: #ebebeb;\n}\n.incoming_msg_img[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  background: #ffebeb;\n  width: 50%;\n  position: relative;\n  border-radius: 10px;\n  margin-top: 5px;\n}\n.incoming_msg_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  align-self: center;\n  margin-left: 5px;\n}\n.incoming_msg_img[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0px;\n}\n.incoming_msg_img_mobile[_ngcontent-%COMP%] {\n  background: #ffebeb;\n  width: 50%;\n  position: relative;\n  border-radius: 10px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.incoming_msg_img_mobile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  align-self: center;\n  margin-left: 5px;\n}\n.teacherBadge[_ngcontent-%COMP%] {\n  right: 0;\n  position: absolute !important;\n  top: -5px !important;\n  font-size: 12px;\n  z-index: auto;\n}\n.received_msg[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 0 0 10px;\n  vertical-align: top;\n  width: 92%;\n}\n.received_withd_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #646464;\n  font-size: 14px;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n.time_date[_ngcontent-%COMP%] {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0;\n}\n.received_withd_msg[_ngcontent-%COMP%] {\n  width: 45%;\n}\n.mesgs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.sent_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: #05728f none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #fff;\n  padding: 5px 10px 5px 12px;\n  width: 100%;\n}\n.outgoing_msg[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 26px 0 26px;\n}\n.sent_msg[_ngcontent-%COMP%] {\n  float: right;\n  width: 46%;\n}\n.input_msg_write[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  color: #4c4c4c;\n  font-size: 15px;\n  min-height: 50px;\n  width: 100%;\n}\n.type_msg[_ngcontent-%COMP%] {\n  border-top: 1px solid #c4c4c4;\n  bottom: 0;\n  width: 100%;\n  background: white;\n}\n.msg_send_btn[_ngcontent-%COMP%] {\n  background: #05728f none repeat scroll 0 0;\n  border: medium none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 17px;\n  margin: 5px;\n  width: 40px;\n}\n@media (max-width: 660px) {\n  .msg_send_btn[_ngcontent-%COMP%] {\n    left: 88%;\n  }\n}\n@media (max-width: 660px) {\n  .msg_send_btn.one[_ngcontent-%COMP%] {\n    left: 78%;\n  }\n}\n.messaging[_ngcontent-%COMP%] {\n  padding: 0 0 50px 0;\n}\n.msg_history[_ngcontent-%COMP%] {\n  height: 605px;\n  overflow-y: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-top: 10px;\n}\n.msg_mobile_history[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n.mobile[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.mobile[_ngcontent-%COMP%]   .msg_mobile_history[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-top: 15px;\n}\n.mobile[_ngcontent-%COMP%]   .type_msg[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 65px;\n  width: 100%;\n  background: white;\n  z-index: 100;\n}\n.message[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.badge[_ngcontent-%COMP%] {\n  top: -1.5rem;\n  position: relative;\n}\n.mt-3[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21tb24vbWVzc2FnZS9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXHNhc3NcXGJhc2VcXF9taXhpbi5zY3NzIiwiLi4vLi4vYXBwL2NvbW1vbi9tZXNzYWdlL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX2NvbG9ycy5zY3NzIiwiLi4vLi4vYXBwL2NvbW1vbi9tZXNzYWdlL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL2NvbW1vbi9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi9hcHAvY29tbW9uL21lc3NhZ2UvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFwuLlxcYXBwXFxjb21tb25cXG1lc3NhZ2VcXG1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7Ozs7Ozs7O0NBQUE7QUFXQTs7Ozs7Ozs7OztDQUFBO0FDWEk7RUFDSSxjQ0ZTO0FDb0JqQjtBRmhCSTtFQUNJLGNDRFU7QUNtQmxCO0FGaEJJO0VBQ0ksY0NMSztBQ3VCYjtBRmhCSTtFQUNJLGNDTFc7QUN1Qm5CO0FGWkk7RUFDSSx5QkNsQlM7QUNpQ2pCO0FGYkk7RUFDSSx5QkNwQlM7QUNtQ2pCO0FGYkk7RUFDSSx5QkNwQlU7QUNtQ2xCO0FGYkk7RUFDSSx5QkN4Qks7QUN1Q2I7QUZiSTtFQUNJLHlCQ3hCVztBQ3VDbkI7QUM1Q0E7RUFDRSxXQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEOENGO0FDM0NBO0VBRUUsbUJBQUE7RUFDQSxtQkFBQTtBRDZDRjtBQzFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUQ2Q0Y7QUMxQ0E7RUFDRSxlQUFBO0FENkNGO0FDMUNBO0VBQ0UsMENBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUQ2Q0Y7QUMxQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRDZDRjtBQzFDQTtFQUNFLGdCQUFBO0FENkNGO0FDMUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUQ2Q0Y7QUMxQ0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBRDZDRjtBQzFDQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBRDZDRjtBQzFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRDZDRjtBQzFDQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBRDZDRjtBQzFDQTtFQUNFLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQ2Q0Y7QUMxQ0E7RUFDRSxtQkFBQTtBRDZDRjtBQzFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUQ2Q0Y7QUMxQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBRDZDRjtBQzFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBRDZDRjtBQzFDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FENkNGO0FDMUNBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBRDZDRjtBQzFDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBRDZDRjtBQzFDQTtFQUNFLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FENkNGO0FDMUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FENkNGO0FDMUNBO0VBQ0UsbUJBQUE7QUQ2Q0Y7QUMxQ0E7RUFHRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEMkNGO0FDMUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FENENKO0FDMUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBRDRDSjtBQ3hDQTtFQUdFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUR5Q0Y7QUN2Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUR5Q0o7QUNyQ0E7RUFDRSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FEd0NGO0FDckNBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBRHdDRjtBQ2hDQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRG1DRjtBQ2hDQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QURtQ0Y7QUNoQ0E7RUFDRSxVQUFBO0FEbUNGO0FDaENBO0VBQ0UsV0FBQTtBRG1DRjtBQ2hDQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QURtQ0Y7QUNoQ0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FEbUNGO0FDaENBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QURtQ0Y7QUNoQ0E7RUFDRSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QURtQ0Y7QUNoQ0E7RUFDRSw2QkFBQTtFQUVBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QURrQ0Y7QUMvQkE7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFLQSxXQUFBO0VBQ0EsV0FBQTtBRDhCRjtBQzdCRTtFQWJGO0lBY0ksU0FBQTtFRGdDRjtBQUNGO0FDN0JJO0VBRkY7SUFHSSxTQUFBO0VEZ0NKO0FBQ0Y7QUM1QkE7RUFDRSxtQkFBQTtBRCtCRjtBQzVCQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRCtCRjtBQzVCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBRCtCRjtBQzVCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRCtCRjtBQzlCRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRGdDSjtBQzlCRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRGdDSjtBQzVCQTtFQUNFLHFCQUFBO0FEK0JGO0FDNUJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FEK0JGO0FDN0JBO0VBQ0UsMkNBQUE7QURnQ0YiLCJmaWxlIjoiLi4vLi4vYXBwL2NvbW1vbi9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIE1FRElBIFFVRVJZIE1BTkFHRVJcblxuLypcbjBweCAtIDM2MHB4Olx0XHRYUyBQaG9uZVxuMzYwcHggLSA1NzZweDogXHRcdFBob25lXG41NzZweCAtIDc2OHB4OiBcdFx0VGFibGV0IFBvcnRyYWl0XG43NjhweCAtIDk5MnB4Olx0XHRUYWJsZXQgTGFuZHNjYXBlXG45OTJweCAtIDEyMDBweDogXHRkZXNrdG9wXG4xMjAwcHggLSAxOTIwcHg6XHRub3JtYWwgTWVkaWEgcXVlcmllc1xuMTkyMHB4IGFuZCB1cDogIFx0RnVsbCBIRFxuKi9cblxuXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuXG5AbWl4aW4gcmVzcG9uZE1heCgkYnJlYWtwb2ludCkge1xuXHRAaWYgJGJyZWFrcG9pbnQgPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuICB9XG4gIEBpZiAkYnJlYWtwb2ludCA9PSBoZC1kZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTBlbSkgeyBAY29udGVudCB9OyAvLzE0NDBweFxuICB9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5AbWl4aW4gcmVzcG9uZE1pbigkYnJlYWtwb2ludG1pbikge1xuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5cblxuXG4kcmVtLWJhc2VsaW5lOiAxNnB4ICFkZWZhdWx0O1xuJHJlbS1mYWxsYmFjazogZmFsc2UgIWRlZmF1bHQ7XG4kcmVtLXB4LW9ubHk6IGZhbHNlICFkZWZhdWx0O1xuXG5AZnVuY3Rpb24gcmVtLXNlcGFyYXRvcigkbGlzdCwgJHNlcGFyYXRvcjogZmFsc2UpIHtcbiAgQGlmICRzZXBhcmF0b3IgPT0gXCJjb21tYVwiIG9yICRzZXBhcmF0b3IgPT0gXCJzcGFjZVwiIHtcbiAgICBAcmV0dXJuIGFwcGVuZCgkbGlzdCwgbnVsbCwgJHNlcGFyYXRvcik7XG4gIH0gXG4gIFxuICBAaWYgZnVuY3Rpb24tZXhpc3RzKFwibGlzdC1zZXBhcmF0b3JcIikgPT0gdHJ1ZSB7XG4gICAgQHJldHVybiBsaXN0LXNlcGFyYXRvcigkbGlzdCk7XG4gIH1cblxuICAvLyBsaXN0LXNlcGFyYXRvciBwb2x5ZmlsbCBieSBIdWdvIEdpcmF1ZGVsIChodHRwczovL3Nhc3MtY29tcGF0aWJpbGl0eS5naXRodWIuaW8vI2xpc3Rfc2VwYXJhdG9yX2Z1bmN0aW9uKVxuICAkdGVzdC1saXN0OiAoKTtcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xuICAgICR0ZXN0LWxpc3Q6IGFwcGVuZCgkdGVzdC1saXN0LCAkaXRlbSwgc3BhY2UpO1xuICB9XG5cbiAgQHJldHVybiBpZigkdGVzdC1saXN0ID09ICRsaXN0LCBzcGFjZSwgY29tbWEpO1xufVxuXG5AbWl4aW4gcmVtLWJhc2VsaW5lKCR6b29tOiAxMDAlKSB7XG4gIGZvbnQtc2l6ZTogJHpvb20gLyAxNnB4ICogJHJlbS1iYXNlbGluZTtcbn1cblxuQGZ1bmN0aW9uIHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlcy4uLikge1xuICAkcmVzdWx0OiAoKTtcbiAgJHNlcGFyYXRvcjogcmVtLXNlcGFyYXRvcigkdmFsdWVzKTtcbiAgXG4gIEBlYWNoICR2YWx1ZSBpbiAkdmFsdWVzIHtcbiAgICBAaWYgdHlwZS1vZigkdmFsdWUpID09IFwibnVtYmVyXCIgYW5kIHVuaXQoJHZhbHVlKSA9PSBcInJlbVwiIGFuZCAkdG8gPT0gXCJweFwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAxcmVtICogJHJlbS1iYXNlbGluZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicHhcIiBhbmQgJHRvID09IFwicmVtXCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvICRyZW0tYmFzZWxpbmUgKiAxcmVtLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcImxpc3RcIiB7XG4gICAgICAkdmFsdWUtc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSk7XG4gICAgICAkdmFsdWU6IHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlLi4uKTtcbiAgICAgICR2YWx1ZTogcmVtLXNlcGFyYXRvcigkdmFsdWUsICR2YWx1ZS1zZXBhcmF0b3IpO1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKGxlbmd0aCgkcmVzdWx0KSA9PSAxLCBudGgoJHJlc3VsdCwgMSksICRyZXN1bHQpO1xufVxuXG5AZnVuY3Rpb24gcmVtKCR2YWx1ZXMuLi4pIHtcbiAgQGlmICRyZW0tcHgtb25seSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgfVxufVxuXG5AbWl4aW4gcmVtKCRwcm9wZXJ0aWVzLCAkdmFsdWVzLi4uKSB7XG4gIEBpZiB0eXBlLW9mKCRwcm9wZXJ0aWVzKSA9PSBcIm1hcFwiIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gbWFwLWtleXMoJHByb3BlcnRpZXMpIHtcbiAgICAgIEBpbmNsdWRlIHJlbSgkcHJvcGVydHksIG1hcC1nZXQoJHByb3BlcnRpZXMsICRwcm9wZXJ0eSkpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgIEBpZiAkcmVtLWZhbGxiYWNrIG9yICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocHgsICR2YWx1ZXMuLi4pO1xuICAgICAgfVxuICAgICAgQGlmIG5vdCAkcmVtLXB4LW9ubHkge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1peGluIGNvbnRlbnQtY2VudGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn0iLCJAaW1wb3J0IFwiLi4vYmFzZS92YXJpYWJsZXNcIjtcblxuLnRleHQge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrO1xuICAgIH1cbiAgICAmLWdyZXkge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG4gICBcbn1cblxuLmJnIHtcbiAgICAmLXByaW1hcnkxIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLXByaW1hcnkyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkyO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xuICAgIH1cbiAgICAmLWdyZXktbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG59IiwiLy8gQ29sb3JzXG5cbiRjb2xvci1wcmltYXJ5MTogcmdiYSgyNyw0NSw2MywxKTtcbiRjb2xvci1wcmltYXJ5MjogcmdiYSg1Myw3MCw4OCwxKTtcblxuJGNvbG9yLWdyZXk6IHJnYmEoMTAzLCAxMDMsIDEwMywgMSk7XG4kY29sb3ItZ3JleS1kYXJrOiByZ2JhKDUyLCA1OCwgNjQsIDEpO1xuXG4kY29sb3ItZ3JleS1saWdodDogI0VCRUNGMDtcblxuJGNvbG9yLXN1Y2Nlc3M6IHJnYmEoODIsIDIwOSwgMTQ1LCAxKTtcbiRjb2xvci1lcnJvcjogcmdiYSgyMzQsIDg1LCA4NSwgMSk7XG5cbi8vIEZvbnRzXG5cbiR0aGluOiAxMDA7XG4kZXh0cmEtbGlnaHQ6IDIwMDtcbiRsaWdodDogMzAwO1xuJHJlZ3VsYXItNDAwOiA0MDA7XG4kbWVkaXVtOiA1MDA7XG4kc2VtaS1ib2xkOiA2MDA7XG4kYm9sZDogNzAwO1xuJGV4dHJhLWJvbGQ6IDgwMDtcbiRibGFjay05MDA6IDkwMDsiLCIvKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuLypcbiRicmVha3BvaW50IGFyZ3VlbWVudCBjaG9pY2VzOlxuLSB4cy1waG9uZVxuLSBwaG9uZVxuLSB0YWItcG9ydFxuLSB0YWItbGFuZFxuLSBkZXNrdG9wXG4tIGZ1bGwtaGRcblxuMWVtID0gMTZweFxuKi9cbi50ZXh0LXByaW1hcnkxIHtcbiAgY29sb3I6ICMxYjJkM2Y7XG59XG4udGV4dC1ncmV5LWRhcmsge1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbi50ZXh0LWdyZXkge1xuICBjb2xvcjogIzY3Njc2Nztcbn1cbi50ZXh0LWdyZXktbGlnaHQge1xuICBjb2xvcjogI0VCRUNGMDtcbn1cblxuLmJnLXByaW1hcnkxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmQzZjtcbn1cbi5iZy1wcmltYXJ5MiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NTg7XG59XG4uYmctZ3JleS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3Njc2Nztcbn1cbi5iZy1ncmV5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUNGMDtcbn1cblxuaDEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGxpbmUtaGVpZ2h0OiAwLjFlbTtcbiAgbWFyZ2luOiAxMHB4IDAgMjBweDtcbn1cblxuaDEgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNlYmVjZjA7XG4gIHBhZGRpbmc6IDAgMTVweCAwIDA7XG59XG5cbmg1IHtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICBtYXJnaW4tdG9wOiAwLjRyZW07XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmluYm94X3Blb3BsZSB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjggbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA0MCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjNGM0YzQ7XG59XG5cbi5pbmJveF9tc2cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICBjbGVhcjogYm90aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRvcF9zcGFjIHtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbn1cblxuLmNoYW5uZWxfaGVhZGluZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNDAlO1xufVxuXG4uc3JjaF9iYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogNjAlO1xufVxuXG4uaGVhZGluZF9zcmNoIHtcbiAgcGFkZGluZzogMTBweCAyOXB4IDEwcHggMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XG59XG5cbi5jaGFubmVsX2hlYWRpbmcgaDQge1xuICBjb2xvcjogIzA1NzI4ZjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zcmNoX2JhciBpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGNkY2Q7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nOiAycHggMCA0cHggNnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIG1hcmdpbjogMCAwIDAgLTI3cHg7XG59XG5cbi5jaGF0X2liIGg1IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzQ2NDY0NjtcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XG59XG5cbi5jaGF0X2liIGg1IHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNoYXRfaWIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5ODk4OTg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNoYXRfaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMSU7XG59XG5cbi5jaGF0X2liIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMCAwIDE1cHg7XG4gIHdpZHRoOiA4OCU7XG59XG5cbi5jaGF0X3Blb3BsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY2hhdF9saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMThweCAxNnB4IDEwcHg7XG59XG5cbi5pbmJveF9jaGF0IHtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uYWN0aXZlX2NoYXQge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xufVxuXG4uaW5jb21pbmdfbXNnX2ltZyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZWJlYjtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uaW5jb21pbmdfbXNnX2ltZyBpbWcge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uaW5jb21pbmdfbXNnX2ltZyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5pbmNvbWluZ19tc2dfaW1nX21vYmlsZSB7XG4gIGJhY2tncm91bmQ6ICNmZmViZWI7XG4gIHdpZHRoOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uaW5jb21pbmdfbXNnX2ltZ19tb2JpbGUgaW1nIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4udGVhY2hlckJhZGdlIHtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB0b3A6IC01cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB6LWluZGV4OiBhdXRvO1xufVxuXG4ucmVjZWl2ZWRfbXNnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogOTIlO1xufVxuXG4ucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICM2NDY0NjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpbWVfZGF0ZSB7XG4gIGNvbG9yOiAjNzQ3NDc0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDhweCAwIDA7XG59XG5cbi5yZWNlaXZlZF93aXRoZF9tc2cge1xuICB3aWR0aDogNDUlO1xufVxuXG4ubWVzZ3Mge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlbnRfbXNnIHAge1xuICBiYWNrZ3JvdW5kOiAjMDU3MjhmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdXRnb2luZ19tc2cge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDI2cHggMCAyNnB4O1xufVxuXG4uc2VudF9tc2cge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0NiU7XG59XG5cbi5pbnB1dF9tc2dfd3JpdGUgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udHlwZV9tc2cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tc2dfc2VuZF9idG4ge1xuICBiYWNrZ3JvdW5kOiAjMDU3MjhmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgLm1zZ19zZW5kX2J0biB7XG4gICAgbGVmdDogODglO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgLm1zZ19zZW5kX2J0bi5vbmUge1xuICAgIGxlZnQ6IDc4JTtcbiAgfVxufVxuXG4ubWVzc2FnaW5nIHtcbiAgcGFkZGluZzogMCAwIDUwcHggMDtcbn1cblxuLm1zZ19oaXN0b3J5IHtcbiAgaGVpZ2h0OiA2MDVweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubXNnX21vYmlsZV9oaXN0b3J5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubW9iaWxlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLm1vYmlsZSAubXNnX21vYmlsZV9oaXN0b3J5IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm1vYmlsZSAudHlwZV9tc2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNjVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5tZXNzYWdlIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uYmFkZ2Uge1xuICB0b3A6IC0xLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm10LTMge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL21peGluXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvYmFzZS9jb2xvcnNcIjtcblxuaDEge1xuICB3aWR0aDogMTAwJTtcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgbGluZS1oZWlnaHQ6IDAuMWVtO1xuICBtYXJnaW46IDEwcHggMCAyMHB4O1xufVxuXG5oMSBzcGFuIHtcbiAgLy8gei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kOiAjZWJlY2YwO1xuICBwYWRkaW5nOiAwIDE1cHggMCAwO1xufVxuXG5oNSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbiAgbWFyZ2luLXRvcDogMC40cmVtO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5pbmJveF9wZW9wbGUge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNDAlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzRjNGM0O1xufVxuXG4uaW5ib3hfbXNnIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgY2xlYXI6IGJvdGg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50b3Bfc3BhYyB7XG4gIG1hcmdpbjogMjBweCAwIDA7XG59XG5cbi5jaGFubmVsX2hlYWRpbmcge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLnNyY2hfYmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLmhlYWRpbmRfc3JjaCB7XG4gIHBhZGRpbmc6IDEwcHggMjlweCAxMHB4IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xufVxuXG4uY2hhbm5lbF9oZWFkaW5nIGg0IHtcbiAgY29sb3I6ICMwNTcyOGY7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc3JjaF9iYXIgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2RjZGNkO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMnB4IDAgNHB4IDZweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zcmNoX2JhciAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICBtYXJnaW46IDAgMCAwIC0yN3B4O1xufVxuXG4uY2hhdF9pYiBoNSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM0NjQ2NDY7XG4gIG1hcmdpbjogMCAwIDhweCAwO1xufVxuXG4uY2hhdF9pYiBoNSBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jaGF0X2liIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTg5ODk4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jaGF0X2ltZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTElO1xufVxuXG4uY2hhdF9pYiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xuICB3aWR0aDogODglO1xufVxuXG4uY2hhdF9wZW9wbGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNoYXRfbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDE4cHggMTZweCAxMHB4O1xufVxuXG4uaW5ib3hfY2hhdCB7XG4gIGhlaWdodDogNTUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmFjdGl2ZV9jaGF0IHtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbn1cblxuLmluY29taW5nX21zZ19pbWcge1xuICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vIHdpZHRoOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZlYmViO1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgaW1nIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbiAgLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG5cbi5pbmNvbWluZ19tc2dfaW1nX21vYmlsZSB7XG4gIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gd2lkdGg6IDglO1xuICBiYWNrZ3JvdW5kOiAjZmZlYmViO1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG5cbi50ZWFjaGVyQmFkZ2Uge1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogLTVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG4gIHotaW5kZXg6IGF1dG87XG59XG5cbi5yZWNlaXZlZF9tc2cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiA5MiU7XG4gIC8vIC5uYW1lIHtcbiAgLy8gICBmb250LXNpemU6IDE0cHg7XG4gIC8vICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLy8gICBtYXJnaW46IDVweDtcbiAgLy8gfVxufVxuXG4ucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICM2NDY0NjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpbWVfZGF0ZSB7XG4gIGNvbG9yOiAjNzQ3NDc0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDhweCAwIDA7XG59XG5cbi5yZWNlaXZlZF93aXRoZF9tc2cge1xuICB3aWR0aDogNDUlO1xufVxuXG4ubWVzZ3Mge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlbnRfbXNnIHAge1xuICBiYWNrZ3JvdW5kOiAjMDU3MjhmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdXRnb2luZ19tc2cge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDI2cHggMCAyNnB4O1xufVxuXG4uc2VudF9tc2cge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiA0NiU7XG59XG5cbi5pbnB1dF9tc2dfd3JpdGUgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udHlwZV9tc2cge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtcbiAgLy8gcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm1zZ19zZW5kX2J0biB7XG4gIGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIC8vIGhlaWdodDogMzNweDtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAvLyBsZWZ0OiA3OSU7XG4gIC8vIHRvcDogMTFweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICBsZWZ0OiA4OCU7XG4gIH1cbiAgJi5vbmUge1xuICAgIC8vIGxlZnQ6IDc0LjUlO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xuICAgICAgbGVmdDogNzglO1xuICAgIH1cbiAgfVxufVxuXG4ubWVzc2FnaW5nIHtcbiAgcGFkZGluZzogMCAwIDUwcHggMDtcbn1cblxuLm1zZ19oaXN0b3J5IHtcbiAgaGVpZ2h0OiA2MDVweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubXNnX21vYmlsZV9oaXN0b3J5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubW9iaWxlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAubXNnX21vYmlsZV9oaXN0b3J5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG4gIC50eXBlX21zZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gIH1cbn1cblxuLm1lc3NhZ2Uge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5iYWRnZSB7XG4gIHRvcDogLTEuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm10LTN7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-common-message',
          templateUrl: './message.component.html',
          styleUrls: ['./message.component.scss']
        }]
      }], function () {
        return [];
      }, {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isMobileView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/common/mobile-header/mobile-header.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/common/mobile-header/mobile-header.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MobileHeaderComponent */

  /***/
  function srcAppCommonMobileHeaderMobileHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileHeaderComponent", function () {
      return MobileHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MobileHeaderComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var announcement_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r4.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r4.month);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", announcement_r4.msg, " :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r4.des);
      }
    }

    function MobileHeaderComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Acknowlege");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var announcement_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r5.des);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Announcement from : ", announcement_r5.msg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Announcement Date : ", announcement_r5.date, " ", announcement_r5.month, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Description : ", announcement_r5.des, "");
      }
    }

    function MobileHeaderComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var upcoming_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](upcoming_r6.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](upcoming_r6.month);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](upcoming_r6.msg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](upcoming_r6.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](upcoming_r6.des);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Endtime : ", upcoming_r6.endtime, "");
      }
    }

    function MobileHeaderComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var overdue_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r7.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r7.month);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r7.msg);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r7.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](overdue_r7.des);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Due : ", overdue_r7.endtime, "");
      }
    }

    var MobileHeaderComponent = /*#__PURE__*/function () {
      function MobileHeaderComponent() {
        _classCallCheck(this, MobileHeaderComponent);

        this.announcements = [{
          date: '8',
          month: 'Jan',
          msg: 'School ',
          des: ' Annual Function test overflow text with overflow'
        }, {
          date: '26',
          month: 'Jan',
          msg: 'School ',
          des: ' Republic Day'
        }, {
          date: '2',
          month: 'Feb',
          msg: 'School ',
          des: ' 25 Anniversary of school'
        }, {
          date: '8',
          month: 'Jan',
          msg: 'School ',
          des: ' Annual Function'
        }];
        this.upcomings = [{
          date: '9',
          month: 'Jan',
          msg: 'Math ',
          type: 'Assignment',
          endtime: '7:00 pm',
          des: ' Quadratic Equation'
        }, {
          date: '10',
          month: 'Jan',
          msg: 'Marathi ',
          type: 'Assignment',
          endtime: '7:00 pm',
          des: ' Assignment 2'
        }, {
          date: '12',
          month: 'Jan',
          msg: 'Hindi ',
          type: 'Test',
          endtime: '7:00 pm',
          des: ' Chapter 3'
        }, {
          date: '18',
          month: 'Jan',
          msg: 'Math ',
          type: 'Assignment',
          endtime: '10:00 pm',
          des: ' Quadratic Equation'
        }];
        this.overdues = [{
          date: '7',
          month: 'Jan',
          msg: 'Math ',
          type: 'Assignment',
          endtime: '7:00 pm',
          des: ' Quadratic Equation'
        }, {
          date: '6',
          month: 'Jan',
          msg: 'Science ',
          type: 'Assignment',
          endtime: '7:00 pm',
          des: ' Assignment 1'
        }, {
          date: '6',
          month: 'Jan',
          msg: 'Marathi ',
          type: 'Assignment',
          endtime: '7:00 pm',
          des: ' Assignment 1'
        }, {
          date: '5',
          month: 'Jan',
          msg: 'Math ',
          type: 'Assignment',
          endtime: '7:00 pm',
          des: ' Quadratic Equation'
        }];
      }

      _createClass(MobileHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "incSize",
        value: function incSize() {
          var x = document.getElementById("p-2");
          x.style.height = "180px", x.style.transition = "1s";
          document.getElementById("btn1").style.display = "none";
          document.getElementById("btn2").style.display = "inline";
        }
      }, {
        key: "decSize",
        value: function decSize() {
          var x = document.getElementById("p-2");
          x.style.height = "65px", x.style.transition = "1s";
          document.getElementById("btn1").style.display = "inline";
          document.getElementById("btn2").style.display = "none";
        }
      }]);

      return MobileHeaderComponent;
    }();

    MobileHeaderComponent.ɵfac = function MobileHeaderComponent_Factory(t) {
      return new (t || MobileHeaderComponent)();
    };

    MobileHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MobileHeaderComponent,
      selectors: [["app-mobile-header"]],
      decls: 30,
      vars: 4,
      consts: [[2, "padding-left", "15px", "padding-right", "15px", "padding-top", "1px"], [1, "bg-primary1", "mt-4", "d-flex", "justify-content-between", 2, "height", "30px", "border-radius", "5px"], [2, "margin-top", "4px", "margin-left", "5px", "color", "#ffffff", "padding", "2px"], ["type", "button", "id", "btn1", 1, "btn", 3, "click"], ["height", "20", "src", "../../../assets/img/arrow-down-sign-to-navigate.svg", "alt", "img", 1, "m-2"], ["type", "button", "id", "btn2", 1, "btn", 3, "click"], ["height", "20", "src", "../../../assets/img/up-arrow.svg", "alt", "img", 1, "m-2"], ["id", "p-2", 1, "p-2", 2, "background", "white", "width", "100%", "border-radius", "5px", "height", "66px", "overflow-y", "auto"], [1, "d-flex", "flex-column", 2, "margin", "0px 5px"], [4, "ngFor", "ngForOf"], ["class", "modal fade", "id", "myModal", "role", "dialog", "aria-hidden", "true", 4, "ngFor", "ngForOf"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs", "bg-primary1", "mt-4", 2, "font-size", "16px", "height", "100%", "border-radius", "5px"], [1, "nav-item", 2, "margin-right", "auto", "padding-left", "20px"], ["id", "home-tab", "data-toggle", "tab", "href", "#upcomings", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], [1, "nav-item", 2, "padding-right", "20px"], ["id", "profile-tab", "data-toggle", "tab", "href", "#overdue", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content", 2, "background-color", "#ffffff", "padding-top", "5px"], ["id", "upcomings", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "scrollmenu"], ["style", "padding: 0%; padding-left: 10px; padding-bottom: 10px;", 4, "ngFor", "ngForOf"], ["id", "overdue", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show"], ["type", "button", "data-toggle", "modal", "data-target", "#myModal", 1, "btn", "btn-block", "d-flex", "m-2", "card", "flex-row", "card-desing", 2, "border-radius", "5px"], [1, "d-flex", "flex-column", "annoucement-date-box", 2, "border-radius", "5px"], [2, "font-size", "15px", "font-weight", "320"], [2, "margin-top", "-5px", "font-size", "11px"], [1, "announcment-card-body", "d-flex", "flex-row"], [1, "overflow", "ellipsis"], [2, "font-weight", "bold", "font-size", "17px"], [2, "padding-top", "3px"], ["id", "myModal", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-sm", 2, "border-radius", "10px", "margin", "auto", "top", "100px", "width", "95%", "height", "auto"], [1, "modal-content"], [1, "modal-header", 2, "height", "50px"], [1, "modal-title", 2, "font-size", "18px"], [1, "modal-body"], ["id", "ac"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 2, "font-size", "15px"], [2, "padding", "0%", "padding-left", "10px", "padding-bottom", "10px"], ["type", "button", 1, "btn", "card", "card-body", "text-left", 2, "background", "#f6f4f4", "width", "145px", "height", "120px", "box-shadow", "1px 3px 5px  rgb(129, 128, 128)", "border-radius", "5px"], [1, "d-flex", 2, "padding-left", "0%", "padding-top", "0%"], [1, "d-flex", "flex-column", "upcoming-date-box", 2, "height", "40px", "padding-top", "5px"], [2, "font-size", "15px", "font-weight", "350"], [1, "d-flex", "flex-column", "upcoming-type-box", 2, "height", "40px", "padding-top", "5px"], [2, "font-size", "11px", "color", "#757575"], [1, "overflow", "upcom"], [2, "color", "#757575"], [2, "font-style", "ubuntu", "font-size", "12px"]],
      template: function MobileHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Announcement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_button_click_5_listener() {
            return ctx.incSize();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_button_click_7_listener() {
            return ctx.decSize();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MobileHeaderComponent_div_11_Template, 14, 4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MobileHeaderComponent_div_12_Template, 18, 5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Upcomings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Overdue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MobileHeaderComponent_div_26_Template, 25, 6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MobileHeaderComponent_div_29_Template, 25, 6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.announcements);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.announcements);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.upcomings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.overdues);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".text-primary1[_ngcontent-%COMP%] {\n  color: #1b2d3f;\n}\n.text-grey-dark[_ngcontent-%COMP%] {\n  color: #343a40;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676767;\n}\n.text-grey-light[_ngcontent-%COMP%] {\n  color: #EBECF0;\n}\n.bg-primary1[_ngcontent-%COMP%] {\n  background-color: #1b2d3f;\n}\n.bg-primary2[_ngcontent-%COMP%] {\n  background-color: #354658;\n}\n.bg-grey-dark[_ngcontent-%COMP%] {\n  background-color: #343a40;\n}\n.bg-grey[_ngcontent-%COMP%] {\n  background-color: #676767;\n}\n.bg-grey-light[_ngcontent-%COMP%] {\n  background-color: #EBECF0;\n}\ndiv.scrollmenu[_ngcontent-%COMP%] {\n  overflow: auto;\n  white-space: nowrap;\n}\ndiv.scrollmenu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: #c4c4c4;\n  border: none;\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  background: #1B2D3F;\n  color: #ffffff;\n  border-bottom: 4px solid #28BAA2;\n}\n.card-fixed[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 100px;\n  max-height: 100px;\n  width: 100%;\n  max-width: 100px;\n  min-width: 100px;\n  margin-right: 2rem;\n}\n\n.card-desing[_ngcontent-%COMP%] {\n  background: #354658;\n  height: 50px;\n  width: 100%;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px -2px 5px rgba(0, 0, 0, 0.2);\n}\n.announcment-card-body[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n  text-align: left;\n  padding-left: 10px;\n  width: 100%;\n  font-size: 14px;\n  color: white;\n}\n.annoucement-date-box[_ngcontent-%COMP%] {\n  background-color: #28BAA2;\n  font-size: 12px;\n  text-align: center;\n  margin: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: white;\n}\n.upcoming-date-box[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  font-size: 10px;\n  text-align: center;\n  border-radius: 10px;\n  padding: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n  color: black;\n  box-shadow: 1px 3px 1px #afaeae;\n}\n.upcoming-type-box[_ngcontent-%COMP%] {\n  background-color: #f6f4f4;\n  font-size: 10px;\n  text-align: center;\n  padding: 0px;\n  padding-left: 0px;\n  padding-right: 0px;\n  color: black;\n}\n#btn2[_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.scrollmenu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #354658;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #8d8d8d;\n}\n.modal-content[_ngcontent-%COMP%] {\n  border-radius: 12px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #1B2D3F;\n  color: #ffffff;\n  border-radius: 10px 10px 0px 0px;\n}\n.modal-title[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  border: none;\n}\n.modal-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #354658;\n  color: #ffffff;\n}\n#ac[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #757575;\n}\n.ellipsis[_ngcontent-%COMP%] {\n  width: 250px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.upcom[_ngcontent-%COMP%] {\n  width: 120px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9jb21tb24vbW9iaWxlLWhlYWRlci9DOlxcVXNlcnNcXFByYXZpblxcRnJvbnQtZW5kLW1haW5cXHNyY1xcYXNzZXRzXFxpbWcvLi5cXHNhc3NcXGJhc2VcXF9taXhpbi5zY3NzIiwiLi4vLi4vYXBwL2NvbW1vbi9tb2JpbGUtaGVhZGVyL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX2NvbG9ycy5zY3NzIiwiLi4vLi4vYXBwL2NvbW1vbi9tb2JpbGUtaGVhZGVyL0M6XFxVc2Vyc1xcUHJhdmluXFxGcm9udC1lbmQtbWFpblxcc3JjXFxhc3NldHNcXGltZy8uLlxcc2Fzc1xcYmFzZVxcX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vYXBwL2NvbW1vbi9tb2JpbGUtaGVhZGVyL21vYmlsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi9hcHAvY29tbW9uL21vYmlsZS1oZWFkZXIvQzpcXFVzZXJzXFxQcmF2aW5cXEZyb250LWVuZC1tYWluXFxzcmNcXGFzc2V0c1xcaW1nLy4uXFwuLlxcYXBwXFxjb21tb25cXG1vYmlsZS1oZWFkZXJcXG1vYmlsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7Ozs7Ozs7O0NBQUE7QUFXQTs7Ozs7Ozs7OztDQUFBO0FDWEk7RUFDSSxjQ0ZTO0FDb0JqQjtBRmhCSTtFQUNJLGNDRFU7QUNtQmxCO0FGaEJJO0VBQ0ksY0NMSztBQ3VCYjtBRmhCSTtFQUNJLGNDTFc7QUN1Qm5CO0FGWkk7RUFDSSx5QkNsQlM7QUNpQ2pCO0FGYkk7RUFDSSx5QkNwQlM7QUNtQ2pCO0FGYkk7RUFDSSx5QkNwQlU7QUNtQ2xCO0FGYkk7RUFDSSx5QkN4Qks7QUN1Q2I7QUZiSTtFQUNJLHlCQ3hCVztBQ3VDbkI7QUM1Q0E7RUFFSSxjQUFBO0VBQ0EsbUJBQUE7QUQ4Q0o7QUMzQ0U7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FEOENKO0FDM0NBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUQ4Q0Y7QUMzQ0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBRDhDRjtBQzFDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRDZDSjtBQzlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0FBb0JBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhJQUFBO0FEaUNGO0FDOUJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURpQ0Y7QUMvQkE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRGtDRjtBQ2hDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBRG1DRjtBQ2pDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FEb0NGO0FDbENBO0VBQ0UsYUFBQTtBRHFDRjtBQ25DQTtFQUNFLFVBQUE7QURzQ0Y7QUNuQ0E7RUFDRSxXQUFBO0FEc0NGO0FDbkNBLFVBQUE7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QURzQ0Y7QUNuQ0EsV0FBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBRHNDRjtBQ25DQSxvQkFBQTtBQUNBO0VBQ0UsbUJBQUE7QURzQ0Y7QUNwQ0E7RUFDRSxtQkFBQTtBRHVDRjtBQ3JDQTtFQUNJLGtCQUFBO0VBQW9CLHlCQUFBO0VBQTJCLGNBQUE7RUFBZ0IsZ0NBQUE7QUQyQ25FO0FDekNBO0VBQ0UsWUFBQTtBRDRDRjtBQzFDQTtFQUNFLFlBQUE7QUQ2Q0Y7QUMzQ0E7RUFDRSxrQkFBQTtFQUFvQix5QkFBQTtFQUEyQixjQUFBO0FEZ0RqRDtBQzlDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FEaURGO0FDOUNFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRGlESjtBQy9DRTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURrREoiLCJmaWxlIjoiLi4vLi4vYXBwL2NvbW1vbi9tb2JpbGUtaGVhZGVyL21vYmlsZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIE1FRElBIFFVRVJZIE1BTkFHRVJcblxuLypcbjBweCAtIDM2MHB4Olx0XHRYUyBQaG9uZVxuMzYwcHggLSA1NzZweDogXHRcdFBob25lXG41NzZweCAtIDc2OHB4OiBcdFx0VGFibGV0IFBvcnRyYWl0XG43NjhweCAtIDk5MnB4Olx0XHRUYWJsZXQgTGFuZHNjYXBlXG45OTJweCAtIDEyMDBweDogXHRkZXNrdG9wXG4xMjAwcHggLSAxOTIwcHg6XHRub3JtYWwgTWVkaWEgcXVlcmllc1xuMTkyMHB4IGFuZCB1cDogIFx0RnVsbCBIRFxuKi9cblxuXG4vKlxuJGJyZWFrcG9pbnQgYXJndWVtZW50IGNob2ljZXM6XG4tIHhzLXBob25lXG4tIHBob25lXG4tIHRhYi1wb3J0XG4tIHRhYi1sYW5kXG4tIGRlc2t0b3Bcbi0gZnVsbC1oZFxuXG4xZW0gPSAxNnB4XG4qL1xuXG5AbWl4aW4gcmVzcG9uZE1heCgkYnJlYWtwb2ludCkge1xuXHRAaWYgJGJyZWFrcG9pbnQgPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnQgPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuICB9XG4gIEBpZiAkYnJlYWtwb2ludCA9PSBoZC1kZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTBlbSkgeyBAY29udGVudCB9OyAvLzE0NDBweFxuICB9XG5cdEBpZiAkYnJlYWtwb2ludCA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5AbWl4aW4gcmVzcG9uZE1pbigkYnJlYWtwb2ludG1pbikge1xuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0geHMtcGhvbmUge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAyMi41ZW0pIHsgQGNvbnRlbnQgfTsgLy8zNjBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBzbS1waG9uZSB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDM2ZW0pIHsgQGNvbnRlbnQgfTsgLy81NzZweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBtZC10YWIge1xuXHRcdEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7IEBjb250ZW50IH07IC8vNzY4cHhcblx0fVxuXHRAaWYgJGJyZWFrcG9pbnRtaW4gPT0gbGctZGVza3RvcCB7XG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHsgQGNvbnRlbnQgfTsgLy85OTJweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSB4bC1kZXNrdG9wIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogNzVlbSkgeyBAY29udGVudCB9OyAvLzEyMDBweFxuXHR9XG5cdEBpZiAkYnJlYWtwb2ludG1pbiA9PSBmdWxsLWhkIHtcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHsgQGNvbnRlbnQgfTsgLy8xOTIwcHhcblx0fVxufVxuXG5cblxuXG4kcmVtLWJhc2VsaW5lOiAxNnB4ICFkZWZhdWx0O1xuJHJlbS1mYWxsYmFjazogZmFsc2UgIWRlZmF1bHQ7XG4kcmVtLXB4LW9ubHk6IGZhbHNlICFkZWZhdWx0O1xuXG5AZnVuY3Rpb24gcmVtLXNlcGFyYXRvcigkbGlzdCwgJHNlcGFyYXRvcjogZmFsc2UpIHtcbiAgQGlmICRzZXBhcmF0b3IgPT0gXCJjb21tYVwiIG9yICRzZXBhcmF0b3IgPT0gXCJzcGFjZVwiIHtcbiAgICBAcmV0dXJuIGFwcGVuZCgkbGlzdCwgbnVsbCwgJHNlcGFyYXRvcik7XG4gIH0gXG4gIFxuICBAaWYgZnVuY3Rpb24tZXhpc3RzKFwibGlzdC1zZXBhcmF0b3JcIikgPT0gdHJ1ZSB7XG4gICAgQHJldHVybiBsaXN0LXNlcGFyYXRvcigkbGlzdCk7XG4gIH1cblxuICAvLyBsaXN0LXNlcGFyYXRvciBwb2x5ZmlsbCBieSBIdWdvIEdpcmF1ZGVsIChodHRwczovL3Nhc3MtY29tcGF0aWJpbGl0eS5naXRodWIuaW8vI2xpc3Rfc2VwYXJhdG9yX2Z1bmN0aW9uKVxuICAkdGVzdC1saXN0OiAoKTtcbiAgQGVhY2ggJGl0ZW0gaW4gJGxpc3Qge1xuICAgICR0ZXN0LWxpc3Q6IGFwcGVuZCgkdGVzdC1saXN0LCAkaXRlbSwgc3BhY2UpO1xuICB9XG5cbiAgQHJldHVybiBpZigkdGVzdC1saXN0ID09ICRsaXN0LCBzcGFjZSwgY29tbWEpO1xufVxuXG5AbWl4aW4gcmVtLWJhc2VsaW5lKCR6b29tOiAxMDAlKSB7XG4gIGZvbnQtc2l6ZTogJHpvb20gLyAxNnB4ICogJHJlbS1iYXNlbGluZTtcbn1cblxuQGZ1bmN0aW9uIHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlcy4uLikge1xuICAkcmVzdWx0OiAoKTtcbiAgJHNlcGFyYXRvcjogcmVtLXNlcGFyYXRvcigkdmFsdWVzKTtcbiAgXG4gIEBlYWNoICR2YWx1ZSBpbiAkdmFsdWVzIHtcbiAgICBAaWYgdHlwZS1vZigkdmFsdWUpID09IFwibnVtYmVyXCIgYW5kIHVuaXQoJHZhbHVlKSA9PSBcInJlbVwiIGFuZCAkdG8gPT0gXCJweFwiIHtcbiAgICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCAkdmFsdWUgLyAxcmVtICogJHJlbS1iYXNlbGluZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gXCJudW1iZXJcIiBhbmQgdW5pdCgkdmFsdWUpID09IFwicHhcIiBhbmQgJHRvID09IFwicmVtXCIge1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSAvICRyZW0tYmFzZWxpbmUgKiAxcmVtLCAkc2VwYXJhdG9yKTtcbiAgICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSA9PSBcImxpc3RcIiB7XG4gICAgICAkdmFsdWUtc2VwYXJhdG9yOiByZW0tc2VwYXJhdG9yKCR2YWx1ZSk7XG4gICAgICAkdmFsdWU6IHJlbS1jb252ZXJ0KCR0bywgJHZhbHVlLi4uKTtcbiAgICAgICR2YWx1ZTogcmVtLXNlcGFyYXRvcigkdmFsdWUsICR2YWx1ZS1zZXBhcmF0b3IpO1xuICAgICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsICR2YWx1ZSwgJHNlcGFyYXRvcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgJHZhbHVlLCAkc2VwYXJhdG9yKTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKGxlbmd0aCgkcmVzdWx0KSA9PSAxLCBudGgoJHJlc3VsdCwgMSksICRyZXN1bHQpO1xufVxuXG5AZnVuY3Rpb24gcmVtKCR2YWx1ZXMuLi4pIHtcbiAgQGlmICRyZW0tcHgtb25seSB7XG4gICAgQHJldHVybiByZW0tY29udmVydChweCwgJHZhbHVlcy4uLik7XG4gIH0gQGVsc2Uge1xuICAgIEByZXR1cm4gcmVtLWNvbnZlcnQocmVtLCAkdmFsdWVzLi4uKTtcbiAgfVxufVxuXG5AbWl4aW4gcmVtKCRwcm9wZXJ0aWVzLCAkdmFsdWVzLi4uKSB7XG4gIEBpZiB0eXBlLW9mKCRwcm9wZXJ0aWVzKSA9PSBcIm1hcFwiIHtcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gbWFwLWtleXMoJHByb3BlcnRpZXMpIHtcbiAgICAgIEBpbmNsdWRlIHJlbSgkcHJvcGVydHksIG1hcC1nZXQoJHByb3BlcnRpZXMsICRwcm9wZXJ0eSkpO1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcbiAgICAgIEBpZiAkcmVtLWZhbGxiYWNrIG9yICRyZW0tcHgtb25seSB7XG4gICAgICAgICN7JHByb3BlcnR5fTogcmVtLWNvbnZlcnQocHgsICR2YWx1ZXMuLi4pO1xuICAgICAgfVxuICAgICAgQGlmIG5vdCAkcmVtLXB4LW9ubHkge1xuICAgICAgICAjeyRwcm9wZXJ0eX06IHJlbS1jb252ZXJ0KHJlbSwgJHZhbHVlcy4uLik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1peGluIGNvbnRlbnQtY2VudGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA1MCU7XG5cdHRvcDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcbn0iLCJAaW1wb3J0IFwiLi4vYmFzZS92YXJpYWJsZXNcIjtcblxuLnRleHQge1xuICAgICYtcHJpbWFyeTEge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1kYXJrO1xuICAgIH1cbiAgICAmLWdyZXkge1xuICAgICAgICBjb2xvcjogJGNvbG9yLWdyZXk7XG4gICAgfVxuICAgICYtZ3JleS1saWdodCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG4gICBcbn1cblxuLmJnIHtcbiAgICAmLXByaW1hcnkxIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkxO1xuICAgIH1cbiAgICAmLXByaW1hcnkyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnkyO1xuICAgIH1cbiAgICAmLWdyZXktZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5LWRhcms7XG4gICAgfVxuICAgICYtZ3JleSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmV5O1xuICAgIH1cbiAgICAmLWdyZXktbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZ3JleS1saWdodDtcbiAgICB9XG59IiwiLy8gQ29sb3JzXG5cbiRjb2xvci1wcmltYXJ5MTogcmdiYSgyNyw0NSw2MywxKTtcbiRjb2xvci1wcmltYXJ5MjogcmdiYSg1Myw3MCw4OCwxKTtcblxuJGNvbG9yLWdyZXk6IHJnYmEoMTAzLCAxMDMsIDEwMywgMSk7XG4kY29sb3ItZ3JleS1kYXJrOiByZ2JhKDUyLCA1OCwgNjQsIDEpO1xuXG4kY29sb3ItZ3JleS1saWdodDogI0VCRUNGMDtcblxuJGNvbG9yLXN1Y2Nlc3M6IHJnYmEoODIsIDIwOSwgMTQ1LCAxKTtcbiRjb2xvci1lcnJvcjogcmdiYSgyMzQsIDg1LCA4NSwgMSk7XG5cbi8vIEZvbnRzXG5cbiR0aGluOiAxMDA7XG4kZXh0cmEtbGlnaHQ6IDIwMDtcbiRsaWdodDogMzAwO1xuJHJlZ3VsYXItNDAwOiA0MDA7XG4kbWVkaXVtOiA1MDA7XG4kc2VtaS1ib2xkOiA2MDA7XG4kYm9sZDogNzAwO1xuJGV4dHJhLWJvbGQ6IDgwMDtcbiRibGFjay05MDA6IDkwMDsiLCIvKlxuMHB4IC0gMzYwcHg6XHRcdFhTIFBob25lXG4zNjBweCAtIDU3NnB4OiBcdFx0UGhvbmVcbjU3NnB4IC0gNzY4cHg6IFx0XHRUYWJsZXQgUG9ydHJhaXRcbjc2OHB4IC0gOTkycHg6XHRcdFRhYmxldCBMYW5kc2NhcGVcbjk5MnB4IC0gMTIwMHB4OiBcdGRlc2t0b3BcbjEyMDBweCAtIDE5MjBweDpcdG5vcm1hbCBNZWRpYSBxdWVyaWVzXG4xOTIwcHggYW5kIHVwOiAgXHRGdWxsIEhEXG4qL1xuLypcbiRicmVha3BvaW50IGFyZ3VlbWVudCBjaG9pY2VzOlxuLSB4cy1waG9uZVxuLSBwaG9uZVxuLSB0YWItcG9ydFxuLSB0YWItbGFuZFxuLSBkZXNrdG9wXG4tIGZ1bGwtaGRcblxuMWVtID0gMTZweFxuKi9cbi50ZXh0LXByaW1hcnkxIHtcbiAgY29sb3I6ICMxYjJkM2Y7XG59XG4udGV4dC1ncmV5LWRhcmsge1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbi50ZXh0LWdyZXkge1xuICBjb2xvcjogIzY3Njc2Nztcbn1cbi50ZXh0LWdyZXktbGlnaHQge1xuICBjb2xvcjogI0VCRUNGMDtcbn1cblxuLmJnLXByaW1hcnkxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmQzZjtcbn1cbi5iZy1wcmltYXJ5MiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTQ2NTg7XG59XG4uYmctZ3JleS1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3Njc2Nztcbn1cbi5iZy1ncmV5LWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUNGMDtcbn1cblxuZGl2LnNjcm9sbG1lbnUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuZGl2LnNjcm9sbG1lbnUgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5hdi1saW5rIHtcbiAgY29sb3I6ICNjNGM0YzQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMxQjJEM0Y7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzI4QkFBMjtcbn1cblxuLmNhcmQtZml4ZWQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuLyouYW5ub3VuY21lbnQtY2FyZC1ib2R5IHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmFubm91Y2VtZW50LWRhdGUtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4QkFBMjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZC1kZXNpbmcge1xuICBiYWNrZ3JvdW5kOiAjMzU0NjU4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDBweCAtMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59Ki9cbi5jYXJkLWRlc2luZyB7XG4gIGJhY2tncm91bmQ6ICMzNTQ2NTg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDBweCAtMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5hbm5vdW5jbWVudC1jYXJkLWJvZHkge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFubm91Y2VtZW50LWRhdGUtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4QkFBMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi51cGNvbWluZy1kYXRlLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogMXB4IDNweCAxcHggI2FmYWVhZTtcbn1cblxuLnVwY29taW5nLXR5cGUtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjRmNDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jYnRuMiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuXG4uc2Nyb2xsbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBoZWlnaHQ6IDVweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICMzNTQ2NTg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM4ZDhkOGQ7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFCMkQzRjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5tb2RhbC1mb290ZXIgLmJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1NDY1ODtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiNhYyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM3NTc1NzU7XG59XG5cbi5lbGxpcHNpcyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi51cGNvbSB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zYXNzL2Jhc2UvbWl4aW5cIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9iYXNlL2NvbG9yc1wiO1xuXG5kaXYuc2Nyb2xsbWVudSB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgXG4gIGRpdi5zY3JvbGxtZW51IGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogI2M0YzRjNDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubmF2LWxpbmsuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzFCMkQzRjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjhCQUEyO1xufVxuXG5cbi5jYXJkLWZpeGVkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cblxuLy8gLmFubm91bmNtZW50LWNhcmQtYm9keSB7XG4vLyAgICAgbWFyZ2luLXRvcDogYXV0bztcbi8vICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGZvbnQtc2l6ZTogMTVweDtcbi8vIH1cbi8vIC5hbm5vdWNlbWVudC1kYXRlLWJveCB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIHBhZGRpbmc6IDdweDtcbi8vIH1cbi8qLmFubm91bmNtZW50LWNhcmQtYm9keSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5hbm5vdWNlbWVudC1kYXRlLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOEJBQTI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmQtZGVzaW5nIHtcbiAgYmFja2dyb3VuZDogIzM1NDY1ODtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwcHggLTJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufSovXG4uY2FyZC1kZXNpbmcge1xuICBiYWNrZ3JvdW5kOiAjMzU0NjU4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwcHggLTJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYW5ub3VuY21lbnQtY2FyZC1ib2R5IHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYW5ub3VjZW1lbnQtZGF0ZS1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhCQUEyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi51cGNvbWluZy1kYXRlLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogMXB4IDNweCAxcHggIHJnYigxNzUsIDE3NCwgMTc0KTtcbn1cbi51cGNvbWluZy10eXBlLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY0ZjQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbiNidG4ye1xuICBkaXNwbGF5OiBub25lO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi5zY3JvbGxtZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGhlaWdodDogNXB4O1xuXG59XG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTsgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4gXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjMzU0NjU4OyBcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzhkOGQ4ZDtcbn1cbi5tb2RhbC1jb250ZW50e1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLm1vZGFsLWhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6ICMxQjJEM0Y7IGNvbG9yOiAjZmZmZmZmOyBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbiAgfVxuLm1vZGFsLXRpdGxle1xuICBtYXJnaW46IGF1dG87XG59XG4ubW9kYWwtZm9vdGVye1xuICBib3JkZXI6IG5vbmU7XG59XG4ubW9kYWwtZm9vdGVyIC5idG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogIzM1NDY1ODsgY29sb3I6ICNmZmZmZmY7XG59XG4jYWN7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM3NTc1NzU7XG59XG5cbiAgLmVsbGlwc2lze1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLnVwY29te1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mobile-header',
          templateUrl: './mobile-header.component.html',
          styleUrls: ['./mobile-header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~student-student-module~teacher-teacher-module-es5.js.map