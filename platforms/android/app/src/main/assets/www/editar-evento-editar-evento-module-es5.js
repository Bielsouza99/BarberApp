function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editar-evento-editar-evento-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/editar-evento/editar-evento.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editar-evento/editar-evento.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditarEventoEditarEventoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button></ion-menu-button> -->\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ios title-ios hydrated\">Editar evento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines='full'>\n    <form [formGroup]=\"atualizarEventoForm\" (ngSubmit)=\"atualizarForm()\">\n      <ion-item>\n        <ion-label position=\"floating\">Cliente</ion-label>\n        <ion-input formControlName='cliente' type='text' required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Barbeiro</ion-label>\n        <ion-input formControlName='barbeiro' type='text' required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Barbearia</ion-label>\n        <ion-input formControlName='barbearia' type='text' required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Horário</ion-label>\n        <ion-datetime displayFormat='D MMM H m' pickerFormat='D MMM H m' formControlName='horario'></ion-datetime>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button type='submit' color='primary' shape='full' expand='block'>Atualizar evento</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/editar-evento/editar-evento-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/editar-evento/editar-evento-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: EditarEventoPageRoutingModule */

  /***/
  function srcAppEditarEventoEditarEventoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditarEventoPageRoutingModule", function () {
      return EditarEventoPageRoutingModule;
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


    var _editar_evento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editar-evento.page */
    "./src/app/editar-evento/editar-evento.page.ts");

    var routes = [{
      path: '',
      component: _editar_evento_page__WEBPACK_IMPORTED_MODULE_3__["EditarEventoPage"]
    }];

    var EditarEventoPageRoutingModule = function EditarEventoPageRoutingModule() {
      _classCallCheck(this, EditarEventoPageRoutingModule);
    };

    EditarEventoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditarEventoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/editar-evento/editar-evento.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/editar-evento/editar-evento.module.ts ***!
    \*******************************************************/

  /*! exports provided: EditarEventoPageModule */

  /***/
  function srcAppEditarEventoEditarEventoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditarEventoPageModule", function () {
      return EditarEventoPageModule;
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


    var _editar_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./editar-evento-routing.module */
    "./src/app/editar-evento/editar-evento-routing.module.ts");
    /* harmony import */


    var _editar_evento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./editar-evento.page */
    "./src/app/editar-evento/editar-evento.page.ts");

    var EditarEventoPageModule = function EditarEventoPageModule() {
      _classCallCheck(this, EditarEventoPageModule);
    };

    EditarEventoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editar_evento_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarEventoPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_editar_evento_page__WEBPACK_IMPORTED_MODULE_6__["EditarEventoPage"]]
    })], EditarEventoPageModule);
    /***/
  },

  /***/
  "./src/app/editar-evento/editar-evento.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/editar-evento/editar-evento.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditarEventoEditarEventoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRhci1ldmVudG8vZWRpdGFyLWV2ZW50by5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/editar-evento/editar-evento.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/editar-evento/editar-evento.page.ts ***!
    \*****************************************************/

  /*! exports provided: EditarEventoPage */

  /***/
  function srcAppEditarEventoEditarEventoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditarEventoPage", function () {
      return EditarEventoPage;
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

    var EditarEventoPage =
    /*#__PURE__*/
    function () {
      function EditarEventoPage(eventoService, actRoute, router, fb) {
        var _this = this;

        _classCallCheck(this, EditarEventoPage);

        this.eventoService = eventoService;
        this.actRoute = actRoute;
        this.router = router;
        this.fb = fb;
        this.id = this.actRoute.snapshot.paramMap.get('id');
        this.eventoService.listarUm(this.id).valueChanges().subscribe(function (res) {
          _this.atualizarEventoForm.setValue(res);
        }); // this.id = this.actRoute.snapshot.paramMap.get('id');
        // this.eventoService.listarUm(this.id);
      }

      _createClass(EditarEventoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.atualizarEventoForm = this.fb.group({
            cliente: [''],
            barbearia: [''],
            barbeiro: [''],
            horario: ['']
          });
          console.log(this.atualizarEventoForm.value);
        }
      }, {
        key: "atualizarForm",
        value: function atualizarForm() {
          var _this2 = this;

          this.eventoService.atualizarEvento(this.id, this.atualizarEventoForm.value).then(function () {
            _this2.router.navigate(['/home']);
          }).catch(function (error) {
            return console.log(error);
          });
        }
      }]);

      return EditarEventoPage;
    }();

    EditarEventoPage.ctorParameters = function () {
      return [{
        type: _services_evento_service__WEBPACK_IMPORTED_MODULE_4__["EventoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    EditarEventoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editar-evento',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editar-evento.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/editar-evento/editar-evento.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editar-evento.page.scss */
      "./src/app/editar-evento/editar-evento.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_evento_service__WEBPACK_IMPORTED_MODULE_4__["EventoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], EditarEventoPage);
    /***/
  }
}]);
//# sourceMappingURL=editar-evento-editar-evento-module-es5.js.map