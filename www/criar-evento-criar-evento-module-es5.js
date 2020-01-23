function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["criar-evento-criar-evento-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/criar-evento/criar-evento.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/criar-evento/criar-evento.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCriarEventoCriarEventoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"ios hydrated\">\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button></ion-menu-button> -->\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ios title-ios hydrated\">Criar evento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines='full'>\n    <form [formGroup]='eventoForm' (ngSubmit)='enviarForm()'>\n      <ion-item>\n        <ion-label position='floating'>Cliente</ion-label>\n        <ion-input formControlName='cliente' type='text' required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Barbeiro</ion-label>\n        <ion-input formControlName='barbeiro' type='text' required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Barbearia</ion-label>\n        <ion-input formControlName='barbearia' type='text' required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Horário</ion-label>\n        <ion-datetime displayFormat='D MMM H mm' pickerFormat='D MMM H mm' formControlName='horario'></ion-datetime>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button type='submit' color='primary' shape='full' expand='block'>Criar evento</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/criar-evento/criar-evento-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/criar-evento/criar-evento-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: CriarEventoPageRoutingModule */

  /***/
  function srcAppCriarEventoCriarEventoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriarEventoPageRoutingModule", function () {
      return CriarEventoPageRoutingModule;
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


    var _criar_evento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./criar-evento.page */
    "./src/app/criar-evento/criar-evento.page.ts");

    var routes = [{
      path: '',
      component: _criar_evento_page__WEBPACK_IMPORTED_MODULE_3__["CriarEventoPage"]
    }];

    var CriarEventoPageRoutingModule = function CriarEventoPageRoutingModule() {
      _classCallCheck(this, CriarEventoPageRoutingModule);
    };

    CriarEventoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CriarEventoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/criar-evento/criar-evento.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/criar-evento/criar-evento.module.ts ***!
    \*****************************************************/

  /*! exports provided: CriarEventoPageModule */

  /***/
  function srcAppCriarEventoCriarEventoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriarEventoPageModule", function () {
      return CriarEventoPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _criar_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./criar-evento-routing.module */
    "./src/app/criar-evento/criar-evento-routing.module.ts");
    /* harmony import */


    var _criar_evento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./criar-evento.page */
    "./src/app/criar-evento/criar-evento.page.ts");

    var CriarEventoPageModule = function CriarEventoPageModule() {
      _classCallCheck(this, CriarEventoPageModule);
    };

    CriarEventoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _criar_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__["CriarEventoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_criar_evento_page__WEBPACK_IMPORTED_MODULE_6__["CriarEventoPage"]]
    })], CriarEventoPageModule);
    /***/
  },

  /***/
  "./src/app/criar-evento/criar-evento.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/criar-evento/criar-evento.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCriarEventoCriarEventoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyaWFyLWV2ZW50by9jcmlhci1ldmVudG8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/criar-evento/criar-evento.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/criar-evento/criar-evento.page.ts ***!
    \***************************************************/

  /*! exports provided: CriarEventoPage */

  /***/
  function srcAppCriarEventoCriarEventoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriarEventoPage", function () {
      return CriarEventoPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_evento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/evento.service */
    "./src/app/services/evento.service.ts");

    var CriarEventoPage =
    /*#__PURE__*/
    function () {
      function CriarEventoPage(eventoService, router, fb) {
        _classCallCheck(this, CriarEventoPage);

        this.eventoService = eventoService;
        this.router = router;
        this.fb = fb;
        this.Barbearias = [];
      }

      _createClass(CriarEventoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.eventoForm = this.fb.group({
            cliente: [''],
            barbearia: [''],
            barbeiro: [''],
            horario: ['']
          });
        }
      }, {
        key: "enviarForm",
        value: function enviarForm() {
          var _this = this;

          if (!this.eventoForm.valid) {
            return false;
          } else {
            this.eventoService.criarEvento(this.eventoForm.value).then(function (res) {
              console.log(res);

              _this.eventoForm.reset();

              _this.router.navigate(['/home']);
            }).catch(function (error) {
              return console.log(error);
            });
          }
        }
      }]);

      return CriarEventoPage;
    }();

    CriarEventoPage.ctorParameters = function () {
      return [{
        type: _services_evento_service__WEBPACK_IMPORTED_MODULE_4__["EventoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    CriarEventoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-criar-evento',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./criar-evento.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/criar-evento/criar-evento.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./criar-evento.page.scss */
      "./src/app/criar-evento/criar-evento.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_evento_service__WEBPACK_IMPORTED_MODULE_4__["EventoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], CriarEventoPage);
    /***/
  }
}]);
//# sourceMappingURL=criar-evento-criar-evento-module-es5.js.map