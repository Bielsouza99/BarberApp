import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventoService } from '../services/evento.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOptions = {
    initialSlide: 1,
    speed: 400
  };

  Eventos = [];

  constructor(public loadingCtrl:LoadingController, private router: Router, private route: ActivatedRoute, private eventoService: EventoService, private geolocation: Geolocation) {}

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
        this.Eventos.push(a as Evento);
      })
    })
    this.buscarLoc();
  }


  async procurandoEventos() {
    const carregando = await this.loadingCtrl.create({
          message: 'Espere um momento... '
        });
        this.presentLoading(carregando);

    this.eventoService.listarTodos().valueChanges().subscribe(res => {
      carregando.dismiss();
      console.log(res);
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

  async presentLoading(carregando){
    return await carregando.present();
  }
  deletarEvento(id) {
    console.log(id);
    if(window.confirm('Você realmente deseja deletar?')) {
      this.eventoService.deletarEvento(id);
    }
  }

  buscarLoc(){
    this.geolocation.getCurrentPosition().then(resp => {
      console.log('lat' + resp.coords.latitude + '- long' + resp.coords.longitude)
    }).catch((err) => {
      console.log('erro ao buscar a localização', err);
    })
  }

}
