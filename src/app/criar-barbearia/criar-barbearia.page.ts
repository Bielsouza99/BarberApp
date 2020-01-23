import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-criar-barbearia',
  templateUrl: './criar-barbearia.page.html',
  styleUrls: ['./criar-barbearia.page.scss'],
})
export class CriarBarbeariaPage implements OnInit {

  barbeariaForm: FormGroup;

  //Barbearias:

  constructor(private firebaseService: FirebaseService, private router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.barbeariaForm = this.fb.group({
      nome: [''],
      contato: [''],
      instagram: ['']
    })
  }

  enviarForm(){
    if(!this.barbeariaForm.valid){
      return false;
    } else {
      this.firebaseService.criarBarbearia(this.barbeariaForm.value).then( res => {
        console.log(res);
        this.barbeariaForm.reset();
        this.router.navigate(['/home']);
      }).catch(error => console.log(error));
    }
  }

}
