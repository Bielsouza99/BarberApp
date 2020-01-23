import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  cadastro(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.senha)
        .then(
          res => resolve(res), 
          err => reject(err))
    });
  }

  login(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.senha)
        .then(
          res => resolve(res),
          err => reject(err))
    });
  }

  sair(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log('Saindo...');
          resolve();
        }).catch((error) => {
          console.log('Ocorreu um erro ao deslogar', error);
          reject();
        });
      }
    })
  }

  detalhesUsuario(){
    return firebase.auth().currentUser;
  }
}
