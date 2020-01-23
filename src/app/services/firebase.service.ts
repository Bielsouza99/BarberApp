import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';
import { Barbearia } from '../../models/barbearia';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  barbeariaListRef: AngularFireList<any>;
  barbeariaRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  criarBarbearia(barbearia: Barbearia) {
    return this.barbeariaListRef.push({
      nome: barbearia.nome,
      contato: barbearia.contato,
      instagram: barbearia.instagram 
    })
  }

  listarTodasBarbearias(){
    this.barbeariaListRef = this.db.list('/barbearias/');
    return this.barbeariaListRef;
  }

  listarUmaBarbearia(id, barbearia: Barbearia) {
    this.barbeariaRef = this.db.object('/barbearias/' + id);
    return this.barbeariaRef;
  }
}
