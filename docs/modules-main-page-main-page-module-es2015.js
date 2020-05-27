(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-main-page-main-page-module"],{

/***/ "./src/app/modules/main-page/components/header/header.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/main-page/components/header/header.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_create_news_dialog_create_news_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/create-news-dialog/create-news-dialog.component */ "./src/app/shared/components/create-news-dialog/create-news-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_services_articles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/articles.service */ "./src/app/shared/services/articles.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








function HeaderComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const source_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", source_r2 === ctx_r0.selectedSource)("value", source_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](source_r2);
} }
class HeaderComponent {
    constructor(dialog, articlesService) {
        this.dialog = dialog;
        this.articlesService = articlesService;
    }
    ngOnInit() {
        this.articlesService.getSources().subscribe(sources => {
            this.sources = sources;
        });
        this.articlesService.getCurrentSource().subscribe(source => {
            this.selectedSource = source;
        });
    }
    onSelectChange(newSource) {
        if (newSource !== 'All Sources') {
            this.articlesService.setCurrentSource(newSource);
        }
        else {
            this.selectedSource = newSource;
            this.articlesService.setAllArticles();
        }
    }
    openCreateArticleDialog() {
        this.dialog.open(_shared_components_create_news_dialog_create_news_dialog_component__WEBPACK_IMPORTED_MODULE_1__["CreateNewsDialogComponent"], {
            width: '60vw',
            height: '70vh',
            panelClass: 'add-news-dialog-container'
        });
    }
    filterArticles(filterValue) {
        this.articlesService.filterCurrentArticles(filterValue);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_articles_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 2, consts: [[1, "source-container"], [1, "source-title"], [1, "options-container"], [1, "select-container"], [1, "select", 3, "change"], ["disabled", "", "selected", ""], [3, "selected", "value", 4, "ngFor", "ngForOf"], [1, "filter-container", 3, "formGroup"], ["placeholder", "Type your text...", 1, "filter-input"], ["filter", ""], ["mat-raised-button", "", 1, "filter-button", 3, "click"], [1, "add-news-container"], ["mat-raised-button", "", 1, "add-button", 3, "click"], [3, "selected", "value"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderComponent_Template_select_change_5_listener($event) { return ctx.onSelectChange($event == null ? null : $event.target == null ? null : $event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All Sources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_option_10_Template, 2, 3, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.filterArticles(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_17_listener() { return ctx.openCreateArticleDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add Article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedSource || "Please, select source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sources);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".source-container[_ngcontent-%COMP%] {\n  background-color: #c1c9d6;\n  box-sizing: border-box;\n  border-top: 2px solid black;\n  border-right: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 1px solid black;\n  height: 80px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.source-container[_ngcontent-%COMP%]   .source-title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: bold;\n}\n.options-container[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 100%;\n  box-sizing: border-box;\n  border-top: 1px solid black;\n  border-right: 2px solid black;\n  border-left: 2px solid black;\n  border-bottom: 2px solid black;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.options-container[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%] {\n  width: calc(100% / 3);\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.options-container[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.options-container[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin-left: 50px;\n  width: 50%;\n  height: 35px;\n  border: 1px solid black;\n  border-radius: 6px;\n  padding-left: 10px;\n}\n.options-container[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.options-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%] {\n  width: calc(100% / 3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.options-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-radius: 6px;\n  padding-left: 10px;\n  box-sizing: border-box;\n  height: 35px;\n}\n.options-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.options-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]   .filter-button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  background-color: #c1c9d6;\n  border: 1px solid black;\n}\n.options-container[_ngcontent-%COMP%]   .add-news-container[_ngcontent-%COMP%] {\n  width: calc(100% / 3);\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.options-container[_ngcontent-%COMP%]   .add-news-container[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin-right: 50px;\n  background-color: #c1c9d6;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9oZWFkZXIvRDpcXFByb2VqY3RzXFxsaXR2aW5jaHVrLW5ld3Mvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW4tcGFnZVxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRUo7QURDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRUY7QURERTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNHSjtBREZJO0VBQ0UsV0FBQTtBQ0lOO0FERkk7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNJTjtBREhNO0VBQ0UsYUFBQTtBQ0tSO0FEREU7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7QURGSTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0lOO0FESE07RUFDRSxhQUFBO0FDS1I7QURGSTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQ0lOO0FEREU7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDR0o7QURGSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FDSU4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4tcGFnZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc291cmNlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzlkNjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC5zb3VyY2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbi5vcHRpb25zLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLnNlbGVjdC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmb3JtIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0IHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5maWx0ZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAuZmlsdGVyLWlucHV0IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5maWx0ZXItYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWM5ZDY7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYWRkLW5ld3MtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIC5hZGQtYnV0dG9uIHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjOWQ2O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnNvdXJjZS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjOWQ2O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNvdXJjZS1jb250YWluZXIgLnNvdXJjZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vcHRpb25zLWNvbnRhaW5lciB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm9wdGlvbnMtY29udGFpbmVyIC5zZWxlY3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ub3B0aW9ucy1jb250YWluZXIgLnNlbGVjdC1jb250YWluZXIgZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm9wdGlvbnMtY29udGFpbmVyIC5zZWxlY3QtY29udGFpbmVyIC5zZWxlY3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ub3B0aW9ucy1jb250YWluZXIgLnNlbGVjdC1jb250YWluZXIgLnNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ub3B0aW9ucy1jb250YWluZXIgLmZpbHRlci1jb250YWluZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm9wdGlvbnMtY29udGFpbmVyIC5maWx0ZXItY29udGFpbmVyIC5maWx0ZXItaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMzVweDtcbn1cbi5vcHRpb25zLWNvbnRhaW5lciAuZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5vcHRpb25zLWNvbnRhaW5lciAuZmlsdGVyLWNvbnRhaW5lciAuZmlsdGVyLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjOWQ2O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5vcHRpb25zLWNvbnRhaW5lciAuYWRkLW5ld3MtY29udGFpbmVyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm9wdGlvbnMtY29udGFpbmVyIC5hZGQtbmV3cy1jb250YWluZXIgLmFkZC1idXR0b24ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWM5ZDY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _shared_services_articles_service__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/main-page/components/news-list-item/news-list-item.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main-page/components/news-list-item/news-list-item.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NewsListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListItemComponent", function() { return NewsListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NewsListItemComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirectToArticlePage() {
        this.router.navigate([`/news/${this.newsItem.id}`]);
    }
}
NewsListItemComponent.ɵfac = function NewsListItemComponent_Factory(t) { return new (t || NewsListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NewsListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsListItemComponent, selectors: [["app-news-list-item"]], inputs: { newsItem: "newsItem" }, decls: 15, vars: 4, consts: [[1, "list-item-container", 3, "click"], [1, "image-container"], [3, "src"], [1, "short-description-container"], [1, "info-container"], [1, "heading"], [1, "short-description"], [1, "read-more-container"], [1, "read-more-text"], [1, "date-container"]], template: function NewsListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsListItemComponent_Template_div_click_0_listener() { return ctx.redirectToArticlePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Read more...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.newsItem.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.newsItem.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.newsItem.shortDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", ctx.newsItem.date, "");
    } }, styles: [".list-item-container[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 100%;\n  border: 2px solid black;\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.list-item-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.list-item-container[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n}\n.list-item-container[_ngcontent-%COMP%]   .short-description-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  width: calc((100% - 150px) / 2);\n  height: 100%;\n  box-sizing: border-box;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.list-item-container[_ngcontent-%COMP%]   .short-description-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.list-item-container[_ngcontent-%COMP%]   .short-description-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .short-description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.list-item-container[_ngcontent-%COMP%]   .short-description-container[_ngcontent-%COMP%]   .read-more-container[_ngcontent-%COMP%]   .read-more-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.list-item-container[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%] {\n  width: calc((100% - 150px) / 2);\n  height: 100%;\n  box-sizing: border-box;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9uZXdzLWxpc3QtaXRlbS9EOlxcUHJvZWpjdHNcXGxpdHZpbmNodWstbmV3cy9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpbi1wYWdlXFxjb21wb25lbnRzXFxuZXdzLWxpc3QtaXRlbVxcbmV3cy1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvbmV3cy1saXN0LWl0ZW0vbmV3cy1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0VKO0FEREk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0dOO0FEQUU7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDRUo7QURESTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0dOO0FERk07RUFDRSxnQkFBQTtBQ0lSO0FEQU07RUFDRSxlQUFBO0FDRVI7QURFRTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9uZXdzLWxpc3QtaXRlbS9uZXdzLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWl0ZW0tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNob3J0LWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxNTBweCkgLyAyKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAuaW5mby1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAuc2hvcnQtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWFkLW1vcmUtY29udGFpbmVyIHtcclxuICAgICAgLnJlYWQtbW9yZS10ZXh0IHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmRhdGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTUwcHgpIC8gMik7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuIiwiLmxpc3QtaXRlbS1jb250YWluZXIge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubGlzdC1pdGVtLWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxpc3QtaXRlbS1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG4ubGlzdC1pdGVtLWNvbnRhaW5lciAuc2hvcnQtZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxNTBweCkgLyAyKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubGlzdC1pdGVtLWNvbnRhaW5lciAuc2hvcnQtZGVzY3JpcHRpb24tY29udGFpbmVyIC5pbmZvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubGlzdC1pdGVtLWNvbnRhaW5lciAuc2hvcnQtZGVzY3JpcHRpb24tY29udGFpbmVyIC5pbmZvLWNvbnRhaW5lciAuc2hvcnQtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmxpc3QtaXRlbS1jb250YWluZXIgLnNob3J0LWRlc2NyaXB0aW9uLWNvbnRhaW5lciAucmVhZC1tb3JlLWNvbnRhaW5lciAucmVhZC1tb3JlLXRleHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlzdC1pdGVtLWNvbnRhaW5lciAuZGF0ZS1jb250YWluZXIge1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDE1MHB4KSAvIDIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDE1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-list-item',
                templateUrl: './news-list-item.component.html',
                styleUrls: ['./news-list-item.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { newsItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/main-page/components/news-list/news-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/main-page/components/news-list/news-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/articles.service */ "./src/app/shared/services/articles.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _news_list_item_news_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news-list-item/news-list-item.component */ "./src/app/modules/main-page/components/news-list-item/news-list-item.component.ts");





function NewsListComponent_app_news_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-news-list-item", 3);
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newsItem", article_r1);
} }
class NewsListComponent {
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    ngOnInit() {
        this.articlesService.getFilteredArticles().subscribe(filteredArticles => {
            this.articles = filteredArticles;
        });
        this.articlesService.getCurrentArticles().subscribe(articles => {
            this.articles = articles;
        });
    }
}
NewsListComponent.ɵfac = function NewsListComponent_Factory(t) { return new (t || NewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"])); };
NewsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsListComponent, selectors: [["app-news-list"]], decls: 3, vars: 1, consts: [[1, "news-container"], [1, "list-container"], [3, "newsItem", 4, "ngFor", "ngForOf"], [3, "newsItem"]], template: function NewsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsListComponent_app_news_list_item_2_Template, 1, 1, "app-news-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _news_list_item_news_list_item_component__WEBPACK_IMPORTED_MODULE_3__["NewsListItemComponent"]], styles: [".news-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n.news-container[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluLXBhZ2UvY29tcG9uZW50cy9uZXdzLWxpc3QvRDpcXFByb2VqY3RzXFxsaXR2aW5jaHVrLW5ld3Mvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW4tcGFnZVxcY29tcG9uZW50c1xcbmV3cy1saXN0XFxuZXdzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi1wYWdlL2NvbXBvbmVudHMvbmV3cy1saXN0L25ld3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURBRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4tcGFnZS9jb21wb25lbnRzL25ld3MtbGlzdC9uZXdzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3cy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC5saXN0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIubmV3cy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5uZXdzLWNvbnRhaW5lciAubGlzdC1jb250YWluZXIge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-list',
                templateUrl: './news-list.component.html',
                styleUrls: ['./news-list.component.scss']
            }]
    }], function () { return [{ type: _shared_services_articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/main-page/main-page-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/main-page/main-page-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page.component */ "./src/app/modules/main-page/main-page.component.ts");





const routes = [{
        path: '',
        component: _main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
    }];
class MainPageRoutingModule {
}
MainPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainPageRoutingModule });
MainPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainPageRoutingModule_Factory(t) { return new (t || MainPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/main-page/main-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/main-page/main-page.component.ts ***!
  \**********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/modules/main-page/components/header/header.component.ts");
/* harmony import */ var _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/news-list/news-list.component */ "./src/app/modules/main-page/components/news-list/news-list.component.ts");




class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 2, vars: 0, template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-news-list");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_2__["NewsListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/main-page/main-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/main-page/main-page.module.ts ***!
  \*******************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page-routing.module */ "./src/app/modules/main-page/main-page-routing.module.ts");
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page.component */ "./src/app/modules/main-page/main-page.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/modules/main-page/components/header/header.component.ts");
/* harmony import */ var _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/news-list/news-list.component */ "./src/app/modules/main-page/components/news-list/news-list.component.ts");
/* harmony import */ var _components_news_list_item_news_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/news-list-item/news-list-item.component */ "./src/app/modules/main-page/components/news-list-item/news-list-item.component.ts");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mat-select-search */ "./node_modules/ngx-mat-select-search/__ivy_ngcc__/fesm2015/ngx-mat-select-search.js");











class MainPageModule {
}
MainPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainPageModule });
MainPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainPageModule_Factory(t) { return new (t || MainPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"],
            _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["NgxMatSelectSearchModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageModule, { declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_5__["NewsListComponent"], _components_news_list_item_news_list_item_component__WEBPACK_IMPORTED_MODULE_6__["NewsListItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"],
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["NgxMatSelectSearchModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_5__["NewsListComponent"], _components_news_list_item_news_list_item_component__WEBPACK_IMPORTED_MODULE_6__["NewsListItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainPageRoutingModule"],
                    _shared_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["NgxMatSelectSearchModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-main-page-main-page-module-es2015.js.map