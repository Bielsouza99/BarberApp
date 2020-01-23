import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.page.html',
  styleUrls: ['./editar-evento.page.scss'],
})
export class EditarEventoPage implements OnInit {
  atualizarEventoForm: FormGroup;
  id: any;

  constructor(private eventoService: EventoService, private actRoute: ActivatedRoute, private router: Router, public fb: FormBuilder) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.eventoService.listarUm(this.id).valueChanges().subscribe(res => {
      this.atualizarEventoForm.setValue(res);
    });

    // this.id = this.actRoute.snapshot.paramMap.get('id');
    // this.eventoService.listarUm(this.id);
  }

  ngOnInit() {
    this.atualizarEventoForm = this.fb.group({
      cliente: [''],
      barbearia: [''],
      barbeiro: [''],
      horario: ['']
    })
    console.log(this.atualizarEventoForm.value);
  }

  atualizarForm() {
    this.eventoService.atualizarEvento(this.id, this.atualizarEventoForm.value).then(() => {
      this.router.navigate(['/home']);
    }).catch(error => console.log(error));
  }

}
