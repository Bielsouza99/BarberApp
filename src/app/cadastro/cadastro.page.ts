import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  
  cadastroForm: FormGroup;
  mensagem_erro: string = '';
  mensagem_sucesso: string = '';
 
  mensagem_valida = {
   'email': [
     { type: 'required', message: 'E-mail é obrigatório.' },
     { type: 'pattern', message: 'Digite um e-mail válido.' }
   ],
   'password': [
     { type: 'required', message: 'Senha é obrigatória.' },
     { type: 'minlength', message: 'Senha não pode ter menos de 6 caracteres.' }
   ]
 };
 
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}
 
  ngOnInit(){
    this.cadastroForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      senha: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }
 
  tentarCadastro(value){
    this.authService.cadastro(value)
     .then(res => {
       console.log(res);
       this.mensagem_erro = "";
       this.mensagem_sucesso = "Sua conta foi criada. Por favor, faça o login.";
     }, err => {
       console.log(err);
       this.mensagem_erro = err.message;
       this.mensagem_sucesso = "";
     })
  }
 
  irLogin(){
    this.router.navigateByUrl('');
  }
 

}
