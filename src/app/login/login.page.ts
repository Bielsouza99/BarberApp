import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  mensagem_erro: string = '';

  constructor(private router: Router, private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      senha: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
    });
  }

  mensagem_valida = {
    'email': [
      {type: 'required', message: 'Email é obrigatório.'},
      {type: 'pattern', message: 'Por favor, digite um e-mail válido.'}
    ],
    'senha': [
      {type: 'required', message: 'Senha é obrigatória.'},
      {type: 'minlength', message: 'Sua senha não pode ter menos de 6 caracteres'}
    ]
  };

  login(value){
    this.auth.login(value)
      .then(res => {
        console.log(res);
        this.mensagem_erro = '';
        this.router.navigateByUrl('/home');
      }, err => {
        this.mensagem_erro = err.message;
      })
  }

  irCadastro() {
    this.router.navigateByUrl('/cadastro');
  }
}
