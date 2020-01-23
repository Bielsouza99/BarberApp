import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { Evento } from '../../models/evento';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class EventoService {


  //private snapshotChangeSubscription: any;
  eventoListRef: AngularFireList<any>;
  eventoRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore, private afAuth: AngularFireAuth) { }

  // criarEvento(value) {
  //   return new Promise<any>((resolve, reject) => {
  //     let usuario = firebase.auth().currentUser;
  //     this.afs.collection('usuarios').doc(usuario.uid).collection('eventos').add({
  //       cliente: usuario.displayName,
  //       barbearia: value.barbearia,
  //       barbeiro: value.barbeiro,
  //       horario: value.horario
  //     })
  //   })
  // }

  // listarUm(id){
  //   return new Promise<any>((resolve, reject) => {
  //     this.afAuth.user.subscribe(usuario => {
  //       if(usuario){
  //         this.snapshotChangeSubscription = this.afs.doc<any>('usuarios/' + usuario.uid + '/eventos/' + id).valueChanges().subscribe(snapshots => {
  //           resolve(snapshots);
  //         }, err => {
  //           reject(err);
  //         })
  //       }
  //     })
  //   })
  // }

  // listarTodos(){
  //   return new Promise<any>((resolve, reject) => {
  //     this.afAuth.user.subscribe(usuario => {
  //       if(usuario){
  //         this.snapshotChangeSubscription = this.afs.collection('usuarios').doc(usuario.uid).collection('eventos').snapshotChanges();
  //         resolve(this.snapshotChangeSubscription);
  //       }
  //     })
  //   })
  // }

  // atualizarEvento(id, value){
  //   return new Promise<any>((resolve, reject) => {
  //     let usuario = firebase.auth().currentUser;
  //     this.afs.collection('usuarios').doc(usuario.uid).collection('eventos').doc(id).set(value)
  //       .then(
  //         res => resolve(res),
  //         err => reject(err)
  //       )
  //   })
  // }

  // deletarEvento(id){
  //   return new Promise<any>((resolve, reject) => {
  //     let usuario = firebase.auth().currentUser;
  //     this.afs.collection('usuarios').doc(usuario.uid).collection('eventos').doc(id).delete()
  //     .then(
  //       res => resolve(res),
  //       err => reject(err)
  //     )
  //   })
  // }

  criarEvento(evento: Evento){
    return this.eventoListRef.push({
      cliente: evento.cliente,
      barbearia: evento.barbearia,
      barbeiro: evento.barbeiro,
      horario: evento.horario
    })
  }

  listarUm(id: string){
    this.eventoRef = this.db.object('/evento/' + id);
    return this.eventoRef;
  }

  listarTodos(){
    this.eventoListRef = this.db.list('/evento');
    return this.eventoListRef;
  }

  atualizarEvento(id, evento: Evento){
    return this.eventoListRef.update(id,{
      cliente: evento.cliente,
      barbearia: evento.barbearia,
      barbeiro: evento.barbeiro,
      horario: evento.horario
    })
  }

  deletarEvento(id: string) {
    this.eventoRef = this.db.object('/evento/' + id);
    this.eventoRef.remove();
  }

}
