(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ios title-ios hydrated\">\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"ios list-ios hydrated\" mode=\"ios\">\n    <ion-list-header class=\"ios hydrated\">\n      Eventos\n    </ion-list-header>\n\n    <ion-item *ngFor='let evento of Eventos' class=\"user-list\">\n      <ion-label>\n        <h5>\n          <ion-icon name='person'></ion-icon> {{evento.cliente}}\n        </h5>\n        <ion-icon name=\"pin\"></ion-icon>  <a style=\"text-decoration: none; color: black;\" href='https://google.com/maps/search/{{evento.barbearia}}' target=\"_blank\">\n          {{evento.barbearia}}\n        </a>\n        <p>\n          <ion-icon name=\"time\"></ion-icon> {{evento.horario | date: 'dd/MM HH:mm'}}\n        </p>\n        <p>\n          <ion-icon name=\"cut\"></ion-icon> {{evento.barbeiro}}\n        </p>\n      </ion-label>\n\n      <div class=\"item-note\" item-end>\n        <button ion-button clear [routerLink]=\"['/editar-evento/',evento.id]\">\n          <ion-icon name=\"md-create\" style=\"zoom:2.0\"></ion-icon>\n        </button>\n        <button ion-button clear (click)='deletarEvento(evento.id)'>\n          <ion-icon name=\"ios-trash\" style=\"zoom:2.0\"></ion-icon>\n        </button>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-slides pager=\"true\" [options]=\"slideOptions\">\n    <ion-slide *ngFor=\"let evento of Eventos\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{evento.barbeiro}}</ion-card-title>\n          <ion-card-subtitle>{{evento.horario | date: 'dd/MM HH:mm'}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <h5>\n            <ion-icon name='person'></ion-icon> {{evento.cliente}}\n          </h5>\n          <a href='https://google.com/maps/search/{{evento.barbearia}}' target=\"_blank\">\n            <ion-icon name=\"pin\"></ion-icon> {{evento.barbearia}}\n          </a>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzY2VuZGFudC9Eb2N1bWVudG9zL2VzdHVkby9pb25pYy9iYXJiZXIvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_evento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/evento.service */ "./src/app/services/evento.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let HomePage = class HomePage {
    constructor(loadingCtrl, router, route, eventoService, geolocation) {
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.route = route;
        this.eventoService = eventoService;
        this.geolocation = geolocation;
        this.slideOptions = {
            initialSlide: 1,
            speed: 400
        };
        this.Eventos = [];
    }
    ngOnInit() {
        this.procurandoEventos();
        // if(this.route && this.route.data){
        //   this.pegarDados();
        // }
        let eventoRes = this.eventoService.listarTodos();
        eventoRes.snapshotChanges().subscribe(res => {
            this.Eventos = [];
            res.forEach(item => {
                let a = item.payload.toJSON();
                a['id'] = item.key;
                this.Eventos.push(a);
            });
        });
        this.buscarLoc();
    }
    procurandoEventos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const carregando = yield this.loadingCtrl.create({
                message: 'Espere um momento... '
            });
            this.presentLoading(carregando);
            this.eventoService.listarTodos().valueChanges().subscribe(res => {
                carregando.dismiss();
                console.log(res);
            });
        });
    }
    // async pegarDados(){
    //   const carregando = await this.loadingCtrl.create({
    //     message: 'Espere um momento... '
    //   });
    //   this.presentLoading(carregando);
    //   this.route.data.subscribe(routeData => {
    //     routeData['data'].subscribe(data => {
    //       carregando.dismiss();
    //       this.Eventos = data;
    //     })
    //   })
    // }
    presentLoading(carregando) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield carregando.present();
        });
    }
    deletarEvento(id) {
        console.log(id);
        if (window.confirm('Você realmente deseja deletar?')) {
            this.eventoService.deletarEvento(id);
        }
    }
    buscarLoc() {
        this.geolocation.getCurrentPosition().then(resp => {
            console.log('lat' + resp.coords.latitude + '- long' + resp.coords.longitude);
        }).catch((err) => {
            console.log('erro ao buscar a localização', err);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _services_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventoService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_evento_service__WEBPACK_IMPORTED_MODULE_3__["EventoService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map