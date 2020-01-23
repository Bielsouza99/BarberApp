function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cadastro-cadastro-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCadastroCadastroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Cadastro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form class=\"form\" [formGroup]=\"cadastroForm\"  (ngSubmit)=\"tentarCadastro(cadastroForm.value)\">\n \n    <ion-item>\n      <ion-label  position=\"floating\" color=\"primary\">E-mail</ion-label>\n      <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n    </ion-item>\n \n    <ion-item>\n      <ion-label  position=\"floating\" color=\"primary\">Senha</ion-label>\n      <ion-input type=\"password\" formControlName=\"senha\" class=\"form-control\" required></ion-input>\n    </ion-item>\n \n    \n    <ion-button  class=\"submit-btn\" type=\"submit\"  [disabled]=\"!cadastroForm.valid\">Register</ion-button>\n    <label class=\"error-message\">{{mensagem_erro}}</label>\n    <label class=\"success-message\">{{mensagem_sucesso}}</label>\n  </form>\n  <p>Já tem uma conta? <a (click)=\"irLogin()\">Faça o login</a></p>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/cadastro/cadastro-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: CadastroPageRoutingModule */

  /***/
  function srcAppCadastroCadastroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroPageRoutingModule", function () {
      return CadastroPageRoutingModule;
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


    var _cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cadastro.page */
    "./src/app/cadastro/cadastro.page.ts");

    var routes = [{
      path: '',
      component: _cadastro_page__WEBPACK_IMPORTED_MODULE_3__["CadastroPage"]
    }];

    var CadastroPageRoutingModule = function CadastroPageRoutingModule() {
      _classCallCheck(this, CadastroPageRoutingModule);
    };

    CadastroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CadastroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/cadastro/cadastro.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/cadastro/cadastro.module.ts ***!
    \*********************************************/

  /*! exports provided: CadastroPageModule */

  /***/
  function srcAppCadastroCadastroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function () {
      return CadastroPageModule;
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


    var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cadastro-routing.module */
    "./src/app/cadastro/cadastro-routing.module.ts");
    /* harmony import */


    var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cadastro.page */
    "./src/app/cadastro/cadastro.page.ts");

    var CadastroPageModule = function CadastroPageModule() {
      _classCallCheck(this, CadastroPageModule);
    };

    CadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__["CadastroPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]]
    })], CadastroPageModule);
    /***/
  },

  /***/
  "./src/app/cadastro/cadastro.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/cadastro/cadastro.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCadastroCadastroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvL2NhZGFzdHJvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/cadastro/cadastro.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/cadastro/cadastro.page.ts ***!
    \*******************************************/

  /*! exports provided: CadastroPage */

  /***/
  function srcAppCadastroCadastroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroPage", function () {
      return CadastroPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var CadastroPage =
    /*#__PURE__*/
    function () {
      function CadastroPage(router, authService, formBuilder) {
        _classCallCheck(this, CadastroPage);

        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.mensagem_erro = '';
        this.mensagem_sucesso = '';
        this.mensagem_valida = {
          'email': [{
            type: 'required',
            message: 'E-mail é obrigatório.'
          }, {
            type: 'pattern',
            message: 'Digite um e-mail válido.'
          }],
          'password': [{
            type: 'required',
            message: 'Senha é obrigatória.'
          }, {
            type: 'minlength',
            message: 'Senha não pode ter menos de 6 caracteres.'
          }]
        };
      }

      _createClass(CadastroPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cadastroForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            senha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
          });
        }
      }, {
        key: "tentarCadastro",
        value: function tentarCadastro(value) {
          var _this = this;

          this.authService.cadastro(value).then(function (res) {
            console.log(res);
            _this.mensagem_erro = "";
            _this.mensagem_sucesso = "Sua conta foi criada. Por favor, faça o login.";
          }, function (err) {
            console.log(err);
            _this.mensagem_erro = err.message;
            _this.mensagem_sucesso = "";
          });
        }
      }, {
        key: "irLogin",
        value: function irLogin() {
          this.router.navigateByUrl('');
        }
      }]);

      return CadastroPage;
    }();

    CadastroPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    CadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-cadastro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cadastro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cadastro.page.scss */
      "./src/app/cadastro/cadastro.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], CadastroPage);
    /***/
  }
}]);
//# sourceMappingURL=cadastro-cadastro-module-es5.js.map