function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-news-by-id-news-by-id-module"], {
  /***/
  "./src/app/modules/news/modules/news-by-id/news-by-id-routing.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/news/modules/news-by-id/news-by-id-routing.module.ts ***!
    \******************************************************************************/

  /*! exports provided: NewsByIdRoutingModule */

  /***/
  function srcAppModulesNewsModulesNewsByIdNewsByIdRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsByIdRoutingModule", function () {
      return NewsByIdRoutingModule;
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


    var _news_by_id_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./news-by-id.component */
    "./src/app/modules/news/modules/news-by-id/news-by-id.component.ts");

    var routes = [{
      path: '',
      component: _news_by_id_component__WEBPACK_IMPORTED_MODULE_2__["NewsByIdComponent"]
    }];

    var NewsByIdRoutingModule = function NewsByIdRoutingModule() {
      _classCallCheck(this, NewsByIdRoutingModule);
    };

    NewsByIdRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NewsByIdRoutingModule
    });
    NewsByIdRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NewsByIdRoutingModule_Factory(t) {
        return new (t || NewsByIdRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewsByIdRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsByIdRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/news/modules/news-by-id/news-by-id.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/news/modules/news-by-id/news-by-id.component.ts ***!
    \*************************************************************************/

  /*! exports provided: NewsByIdComponent */

  /***/
  function srcAppModulesNewsModulesNewsByIdNewsByIdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsByIdComponent", function () {
      return NewsByIdComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_enums_databaseTables_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../shared/enums/databaseTables.enum */
    "./src/app/shared/enums/databaseTables.enum.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/database.service */
    "./src/app/shared/services/database.service.ts");

    var NewsByIdComponent = /*#__PURE__*/function () {
      function NewsByIdComponent(route, databaseService) {
        _classCallCheck(this, NewsByIdComponent);

        this.route = route;
        this.databaseService = databaseService;
      }

      _createClass(NewsByIdComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function () {
            _this.paramId = _this.route.snapshot.params.id;

            _this.getArticleInfo(_this.paramId);
          });
        }
      }, {
        key: "getArticleInfo",
        value: function getArticleInfo(id) {
          this.article = this.databaseService.getById(_shared_enums_databaseTables_enum__WEBPACK_IMPORTED_MODULE_1__["DatabaseTablesEnum"].Articles, id);
        }
      }]);

      return NewsByIdComponent;
    }();

    NewsByIdComponent.ɵfac = function NewsByIdComponent_Factory(t) {
      return new (t || NewsByIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]));
    };

    NewsByIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsByIdComponent,
      selectors: [["app-news-by-id"]],
      decls: 12,
      vars: 5,
      consts: [[1, "article-info"], [1, "image-container"], [3, "src"], [1, "description-container"], [1, "heading-text"], [1, "description-text"], [1, "date-text"], [1, "author-text"]],
      template: function NewsByIdComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.article.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.heading, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.fullDescription, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date: ", ctx.article.date, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.article.author, " ");
        }
      },
      styles: [".article-info[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  width: 100%;\n  height: 80vh;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: row;\n}\n.article-info[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n.article-info[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  width: 220px;\n  height: 220px;\n}\n.article-info[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%] {\n  padding: 30px 30px 30px 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 280px);\n  height: 100%;\n  overflow-y: auto;\n}\n.article-info[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: bold;\n}\n.article-info[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .date-text[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.article-info[_ngcontent-%COMP%]   .description-container[_ngcontent-%COMP%]   .author-text[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uZXdzL21vZHVsZXMvbmV3cy1ieS1pZC9EOlxcUHJvZWpjdHNcXGxpdHZpbmNodWstbmV3cy9zcmNcXGFwcFxcbW9kdWxlc1xcbmV3c1xcbW9kdWxlc1xcbmV3cy1ieS1pZFxcbmV3cy1ieS1pZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9uZXdzL21vZHVsZXMvbmV3cy1ieS1pZC9uZXdzLWJ5LWlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDRUo7QURESTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNHTjtBREFFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRUo7QURESTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0dOO0FEREk7RUFDRSxnQkFBQTtBQ0dOO0FEREk7RUFDRSxnQkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9uZXdzL21vZHVsZXMvbmV3cy1ieS1pZC9uZXdzLWJ5LWlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGUtaW5mbyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAzMHB4IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC5oZWFkaW5nLXRleHQge1xyXG4gICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmRhdGUtdGV4dCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuYXV0aG9yLXRleHQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYXJ0aWNsZS1pbmZvIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uYXJ0aWNsZS1pbmZvIC5pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYXJ0aWNsZS1pbmZvIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDIyMHB4O1xufVxuLmFydGljbGUtaW5mbyAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCAzMHB4IDMwcHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmFydGljbGUtaW5mbyAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5oZWFkaW5nLXRleHQge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFydGljbGUtaW5mbyAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5kYXRlLXRleHQge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmFydGljbGUtaW5mbyAuZGVzY3JpcHRpb24tY29udGFpbmVyIC5hdXRob3ItdGV4dCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsByIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news-by-id',
          templateUrl: './news-by-id.component.html',
          styleUrls: ['./news-by-id.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _shared_services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/news/modules/news-by-id/news-by-id.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/news/modules/news-by-id/news-by-id.module.ts ***!
    \**********************************************************************/

  /*! exports provided: NewsByIdModule */

  /***/
  function srcAppModulesNewsModulesNewsByIdNewsByIdModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsByIdModule", function () {
      return NewsByIdModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _news_by_id_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./news-by-id-routing.module */
    "./src/app/modules/news/modules/news-by-id/news-by-id-routing.module.ts");
    /* harmony import */


    var _news_by_id_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./news-by-id.component */
    "./src/app/modules/news/modules/news-by-id/news-by-id.component.ts");

    var NewsByIdModule = function NewsByIdModule() {
      _classCallCheck(this, NewsByIdModule);
    };

    NewsByIdModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NewsByIdModule
    });
    NewsByIdModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NewsByIdModule_Factory(t) {
        return new (t || NewsByIdModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _news_by_id_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsByIdRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewsByIdModule, {
        declarations: [_news_by_id_component__WEBPACK_IMPORTED_MODULE_3__["NewsByIdComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _news_by_id_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsByIdRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsByIdModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_news_by_id_component__WEBPACK_IMPORTED_MODULE_3__["NewsByIdComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _news_by_id_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsByIdRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-news-by-id-news-by-id-module-es5.js.map