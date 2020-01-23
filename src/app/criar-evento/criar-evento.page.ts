import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.page.html',
  styleUrls: ['./criar-evento.page.scss'],
})
export class CriarEventoPage implements OnInit {

  eventoForm: FormGroup;

  Barbearias = [];
  constructor(private eventoService: EventoService, private router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.eventoForm = this.fb.group({
      cliente: [''],
      barbearia: [''],
      barbeiro: [''],
      horario: ['']
    })
  }

  enviarForm(){
    if(!this.eventoForm.valid){
       return false;
    } else {
      this.eventoService.criarEvento(this.eventoForm.value).then(res => {
        console.log(res);
        this.eventoForm.reset();
        this.router.navigate(['/home']);
      }).catch(error => console.log(error));
    }
  }

}
